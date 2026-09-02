/**
 * Contrast and keyboard audit (QA_CHECKLIST I1, I2, I5).
 *
 * Measures the real rendered colours rather than trusting the token table, and
 * tabs through each surface to confirm every interactive element is reachable
 * and shows a visible focus ring.
 */
import puppeteer from "puppeteer-core";

const BASE = process.env.KAPAPI_BASE ?? "http://localhost:3210";
const CHROME =
  process.env.CHROME_PATH ?? "C:/Program Files/Google/Chrome/Application/chrome.exe";
const ROUTES = ["/", "/new", "/board", "/board/0201", "/quest/0001", "/profile", "/my"];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const CONTRAST_FN = () => {
  const srgb = (v) => {
    const c = v / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  const lum = ([r, g, b]) => 0.2126 * srgb(r) + 0.7152 * srgb(g) + 0.0722 * srgb(b);
  const parse = (s) => {
    const m = s.match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const parts = m[1].split(/[,\s/]+/).filter(Boolean).map(Number);
    return { rgb: parts.slice(0, 3), a: parts.length > 3 ? parts[3] : 1 };
  };
  const over = (fg, bg, a) => fg.map((c, i) => c * a + bg[i] * (1 - a));

  /** Effective opacity including every ancestor that dims this subtree. */
  const effectiveOpacity = (el) => {
    let o = 1;
    let node = el;
    while (node && node !== document.documentElement) {
      o *= parseFloat(getComputedStyle(node).opacity || "1");
      node = node.parentElement;
    }
    return o;
  };

  /** Walk up for the first opaque background actually painted behind an element. */
  const bgOf = (el) => {
    let node = el;
    while (node && node !== document.documentElement) {
      const c = parse(getComputedStyle(node).backgroundColor);
      if (c && c.a > 0.9) return c.rgb;
      node = node.parentElement;
    }
    return [255, 255, 255];
  };

  const ratio = (a, b) => {
    const [hi, lo] = lum(a) > lum(b) ? [lum(a), lum(b)] : [lum(b), lum(a)];
    return (hi + 0.05) / (lo + 0.05);
  };

  const results = [];
  const seen = new Set();
  for (const el of document.querySelectorAll("body *")) {
    const own = [...el.childNodes].some(
      (n) => n.nodeType === 3 && n.textContent.trim().length > 0,
    );
    if (!own) continue;
    const box = el.getBoundingClientRect();
    if (box.width === 0 || box.height === 0) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === "hidden" || effectiveOpacity(el) < 0.05) continue;
    if (el.closest(".k-sr")) continue;
    // Decorative glyphs hidden from assistive tech are not text for WCAG purposes.
    if (el.closest('[aria-hidden="true"]')) continue;

    const fg = parse(cs.color);
    if (!fg) continue;
    const bg = bgOf(el);
    const alpha = fg.a * effectiveOpacity(el);
    const blended = alpha < 1 ? over(fg.rgb, bg, alpha) : fg.rgb;
    const size = parseFloat(cs.fontSize);
    const weight = Number(cs.fontWeight) || 400;
    const large = size >= 24 || (size >= 18.66 && weight >= 700);
    const need = large ? 3 : 4.5;
    const r = ratio(blended, bg);

    if (r < need) {
      const key = `${cs.color}|${size}|${el.className}`;
      if (seen.has(key)) continue;
      seen.add(key);
      results.push({
        ratio: Number(r.toFixed(2)),
        need,
        size,
        color: cs.color,
        cls: String(el.className).slice(0, 46),
        text: (el.textContent || "").trim().slice(0, 40),
      });
    }
  }
  return results;
};

const browser = await puppeteer.launch({ executablePath: CHROME, headless: "shell" });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });

let failures = 0;

for (const route of ROUTES) {
  if (route === "/new") {
    await page.goto(BASE, { waitUntil: "networkidle2" });
    await page.type("#work-entry", "손그림 도면을 CAD 현황도로 오늘까지 정리해주세요");
    await page.evaluate(() =>
      [...document.querySelectorAll("main button")]
        .find((b) => b.textContent?.includes("일 맡기기"))
        ?.click(),
    );
    await page.waitForFunction(() => location.pathname === "/new", { timeout: 5000 });
  } else {
    await page.goto(`${BASE}${route}`, { waitUntil: "networkidle2" });
  }
  await sleep(1200);
  // Let scroll-triggered sequences settle: muted/excluded BID rows only exist
  // once the routing proof has played, and they are exactly what needs checking.
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < height; y += 700) {
    await page.evaluate((top) => scrollTo({ top, behavior: "instant" }), y);
    await sleep(260);
  }
  await sleep(4500);

  const low = await page.evaluate(CONTRAST_FN);
  if (low.length) {
    failures += low.length;
    console.log(`\n[contrast] ${route}`);
    for (const r of low) {
      console.log(
        `  ${r.ratio}:1 (need ${r.need}) ${r.size}px ${r.color} .${r.cls} — "${r.text}"`,
      );
    }
  }

  // Keyboard: tab through and confirm focus lands somewhere visible each time.
  const kb = await page.evaluate(() => {
    const focusables = [
      ...document.querySelectorAll(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      ),
    ].filter((el) => {
      const r = el.getBoundingClientRect();
      return r.width > 0 && r.height > 0;
    });
    return { count: focusables.length };
  });

  await page.evaluate(() => document.body.focus());
  let reached = 0;
  let noRing = [];
  for (let i = 0; i < Math.min(kb.count + 2, 60); i++) {
    await page.keyboard.press("Tab");
    const info = await page.evaluate(() => {
      const el = document.activeElement;
      if (!el || el === document.body) return null;
      // A :focus-within treatment on the wrapping surface counts: the hero's
      // work-entry lights up the whole panel rather than ringing the textarea.
      let ring = false;
      let node = el;
      for (let depth = 0; node && depth < 3; depth += 1, node = node.parentElement) {
        const s = getComputedStyle(node);
        if (
          (s.outlineStyle !== "none" && parseFloat(s.outlineWidth) > 0) ||
          s.boxShadow !== "none"
        ) {
          ring = true;
          break;
        }
      }
      return {
        tag: el.tagName.toLowerCase(),
        ring,
        label: (el.textContent || el.getAttribute("aria-label") || "").trim().slice(0, 30),
      };
    });
    if (!info) continue;
    reached += 1;
    if (!info.ring) noRing.push(`${info.tag} "${info.label}"`);
  }
  if (noRing.length) {
    failures += noRing.length;
    console.log(`\n[focus ring] ${route}`);
    for (const n of [...new Set(noRing)]) console.log(`  ${n}`);
  }
  console.log(`[keyboard] ${route}: ${reached} focusable stops reached`);
}

await browser.close();
console.log(failures === 0 ? "\nNo contrast or focus failures." : `\n${failures} issue(s).`);
