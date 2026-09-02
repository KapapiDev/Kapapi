/**
 * Live reference capture for the Prototype v2 visual research protocol.
 *
 * Opens each reference in a real browser, scrolls the whole page, captures
 * desktop + mobile evidence, and — more usefully than screenshots alone —
 * extracts measurable facts: heading scale, font stacks, container width,
 * nav height, section rhythm, radii, accent usage, card counts, media ratio.
 *
 *   node research/capture.mjs <slug> <url> [outDir]
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import puppeteer from "puppeteer-core";

const [slug, url, outRoot = "research/evidence"] = process.argv.slice(2);
if (!slug || !url) throw new Error("usage: capture.mjs <slug> <url> [outDir]");

const CHROME =
  process.env.CHROME_PATH ?? "C:/Program Files/Google/Chrome/Application/chrome.exe";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Read the design facts a screenshot cannot tell you reliably. */
const MEASURE = () => {
  const px = (v) => Math.round(parseFloat(v) || 0);
  const vis = (el) => {
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    return r.width > 0 && r.height > 0 && cs.visibility !== "hidden" && cs.opacity !== "0";
  };
  const text = (el) => (el.textContent || "").trim().replace(/\s+/g, " ");

  const headings = [...document.querySelectorAll("h1, h2")]
    .filter(vis)
    .slice(0, 8)
    .map((h) => {
      const cs = getComputedStyle(h);
      return {
        tag: h.tagName,
        size: px(cs.fontSize),
        weight: cs.fontWeight,
        lineHeight: px(cs.lineHeight),
        tracking: cs.letterSpacing,
        family: cs.fontFamily.split(",")[0].replace(/["']/g, ""),
        text: text(h).slice(0, 90),
      };
    });

  const body = getComputedStyle(document.body);

  // Container: the width most repeated across major blocks.
  const widths = {};
  for (const el of document.querySelectorAll("section, main > div, header > div, div")) {
    if (!vis(el)) continue;
    const w = Math.round(el.getBoundingClientRect().width);
    if (w > 600 && w <= window.innerWidth) widths[w] = (widths[w] || 0) + 1;
  }
  const container = Object.entries(widths)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([w, n]) => ({ width: Number(w), count: n }));

  const header = document.querySelector("header, nav");
  const navLinks = header
    ? [...header.querySelectorAll("a")].filter(vis).length
    : 0;

  // Section rhythm: vertical padding of top-level sections.
  const sections = [...document.querySelectorAll("section")].filter(vis).slice(0, 10);
  const rhythm = sections.map((s) => {
    const cs = getComputedStyle(s);
    return { top: px(cs.paddingTop), bottom: px(cs.paddingBottom), h: Math.round(s.getBoundingClientRect().height) };
  });

  // Radii and shadows actually in use.
  const radii = {};
  const shadows = {};
  let cards = 0;
  for (const el of [...document.querySelectorAll("div, a, button, article, li")].slice(0, 2500)) {
    if (!vis(el)) continue;
    const cs = getComputedStyle(el);
    const r = px(cs.borderTopLeftRadius);
    if (r > 0) radii[r] = (radii[r] || 0) + 1;
    if (cs.boxShadow && cs.boxShadow !== "none") {
      shadows[cs.boxShadow.slice(0, 40)] = (shadows[cs.boxShadow.slice(0, 40)] || 0) + 1;
    }
    const rect = el.getBoundingClientRect();
    const bordered = cs.borderTopWidth !== "0px" || (cs.boxShadow && cs.boxShadow !== "none");
    if (bordered && r >= 6 && rect.width > 180 && rect.height > 120) cards += 1;
  }

  // Saturated colours in use (the accent story).
  const colors = {};
  for (const el of [...document.querySelectorAll("*")].slice(0, 3000)) {
    if (!vis(el)) continue;
    const cs = getComputedStyle(el);
    for (const c of [cs.backgroundColor, cs.color]) {
      const m = c.match(/rgba?\((\d+), (\d+), (\d+)/);
      if (!m) continue;
      const [r, g, b] = [+m[1], +m[2], +m[3]];
      const max = Math.max(r, g, b), min = Math.min(r, g, b);
      const sat = max === 0 ? 0 : (max - min) / max;
      if (sat > 0.35 && max > 60) colors[`rgb(${r},${g},${b})`] = (colors[`rgb(${r},${g},${b})`] || 0) + 1;
    }
  }

  const buttons = [...document.querySelectorAll("a, button")]
    .filter(vis)
    .filter((b) => {
      const cs = getComputedStyle(b);
      const r = b.getBoundingClientRect();
      return r.height >= 34 && r.width >= 70 && cs.backgroundColor !== "rgba(0, 0, 0, 0)";
    })
    .slice(0, 6)
    .map((b) => {
      const cs = getComputedStyle(b);
      const r = b.getBoundingClientRect();
      return {
        label: text(b).slice(0, 28),
        bg: cs.backgroundColor,
        color: cs.color,
        radius: px(cs.borderTopLeftRadius),
        h: Math.round(r.height),
        px: px(cs.paddingLeft),
        weight: cs.fontWeight,
      };
    });

  const media = {
    videos: [...document.querySelectorAll("video")].filter(vis).length,
    images: [...document.querySelectorAll("img")].filter(vis).length,
    canvases: [...document.querySelectorAll("canvas")].filter(vis).length,
    firstViewportImages: [...document.querySelectorAll("img, video")].filter(
      (el) => vis(el) && el.getBoundingClientRect().top < window.innerHeight,
    ).length,
  };

  // How much of the first viewport is text vs. everything else.
  let firstViewportChars = 0;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let n;
  while ((n = walker.nextNode())) {
    const t = n.textContent.trim();
    if (!t) continue;
    const el = n.parentElement;
    if (!el || !vis(el)) continue;
    if (el.getBoundingClientRect().top < window.innerHeight) firstViewportChars += t.length;
  }

  return {
    title: document.title,
    bodyFont: body.fontFamily.split(",")[0].replace(/["']/g, ""),
    bodySize: px(body.fontSize),
    bodyColor: body.color,
    pageBg: getComputedStyle(document.documentElement).backgroundColor,
    docHeight: document.documentElement.scrollHeight,
    headings,
    container,
    navHeight: header ? Math.round(header.getBoundingClientRect().height) : null,
    navLinks,
    rhythm,
    topRadii: Object.entries(radii).sort((a, b) => b[1] - a[1]).slice(0, 5),
    topShadows: Object.entries(shadows).sort((a, b) => b[1] - a[1]).slice(0, 3),
    cardishBlocks: cards,
    topSaturatedColors: Object.entries(colors).sort((a, b) => b[1] - a[1]).slice(0, 6),
    buttons,
    media,
    firstViewportChars,
  };
};

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "shell",
  args: ["--hide-scrollbars", "--disable-features=IsolateOrigins,site-per-process"],
});

const dir = path.join(outRoot, slug);
await mkdir(dir, { recursive: true });
const report = { slug, url, capturedAt: new Date().toISOString() };

try {
  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
  );
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
  await sleep(3500);

  // First viewport, before any scrolling.
  await page.screenshot({ path: path.join(dir, "desktop-hero.png") });
  report.desktop = await page.evaluate(MEASURE);

  // Walk the page so lazy content and scroll animations resolve, sampling as we go.
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  const step = 900;
  let shot = 0;
  for (let y = step; y < Math.min(h, step * 9); y += step) {
    await page.evaluate((top) => scrollTo({ top, behavior: "instant" }), y);
    await sleep(900);
    shot += 1;
    await page.screenshot({ path: path.join(dir, `desktop-scroll-${String(shot).padStart(2, "0")}.png`) });
  }
  // Footer / final CTA.
  await page.evaluate(() => scrollTo({ top: document.documentElement.scrollHeight, behavior: "instant" }));
  await sleep(1200);
  await page.screenshot({ path: path.join(dir, "desktop-footer.png") });
  report.desktopScrollShots = shot;
  await page.close();

  // Mobile.
  const m = await browser.newPage();
  await m.setUserAgent(
    "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36",
  );
  await m.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await m.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
  await sleep(3000);
  await m.screenshot({ path: path.join(dir, "mobile-hero.png") });
  report.mobile = await m.evaluate(MEASURE);
  await m.evaluate(() => scrollTo({ top: innerHeight * 1.4, behavior: "instant" }));
  await sleep(900);
  await m.screenshot({ path: path.join(dir, "mobile-scroll.png") });
  await m.close();

  report.ok = true;
} catch (err) {
  report.ok = false;
  report.error = String(err.message).slice(0, 300);
}

await browser.close();
await writeFile(path.join(dir, "measure.json"), JSON.stringify(report, null, 2), "utf8");
console.log(
  report.ok
    ? `OK ${slug}: h1=${report.desktop?.headings?.[0]?.size}px "${report.desktop?.headings?.[0]?.family}" container=${report.desktop?.container?.[0]?.width} nav=${report.desktop?.navHeight} cards=${report.desktop?.cardishBlocks} heroChars=${report.desktop?.firstViewportChars}`
    : `FAIL ${slug}: ${report.error}`,
);
