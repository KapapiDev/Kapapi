/**
 * Render the real app and capture it, including hero timeline moments.
 *
 *   node scripts/shots.mjs [outDir] [baseUrl]
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import puppeteer from "puppeteer-core";

const OUT = process.argv[2] ?? "shots";
const BASE = process.argv[3] ?? process.env.KAPAPI_BASE ?? "http://localhost:3220";
const CHROME = process.env.CHROME_PATH ?? "C:/Program Files/Google/Chrome/Application/chrome.exe";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const ROUTES = [
  ["01-home", "/"],
  ["02-board", "/board"],
  ["03-quest", "/quest/0001"],
  ["04-detail", "/board/0201"],
  ["05-my", "/my"],
  ["06-how", "/how"],
];

const VIEWS = [
  ["desktop", 1440, 900, false],
  ["mobile", 390, 844, true],
];

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "shell",
  args: ["--hide-scrollbars", "--autoplay-policy=no-user-gesture-required"],
});

const report = [];

for (const [view, w, h, mobile] of VIEWS) {
  const dir = path.join(OUT, view);
  await mkdir(dir, { recursive: true });
  const page = await browser.newPage();
  await page.setViewport({ width: w, height: h, isMobile: mobile, hasTouch: mobile });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message.slice(0, 200)));
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text().slice(0, 200)); });

  for (const [slug, url] of ROUTES) {
    try {
      await page.goto(BASE + url, { waitUntil: "networkidle2", timeout: 45000 });
      await sleep(2000);
      await page.screenshot({ path: path.join(dir, `${slug}.png`) });
      await page.screenshot({ path: path.join(dir, `${slug}-full.png`), fullPage: true });

      const audit = await page.evaluate(() => {
        const vis = (el) => {
          const r = el.getBoundingClientRect();
          const cs = getComputedStyle(el);
          return r.width > 0 && r.height > 0 && cs.visibility !== "hidden" && cs.opacity !== "0";
        };
        const doc = document.documentElement;
        const issues = [];
        if (doc.scrollWidth > doc.clientWidth + 1) issues.push(`overflow ${doc.scrollWidth}>${doc.clientWidth}`);
        for (const el of document.querySelectorAll("button, a[href], input, select, textarea")) {
          if (!vis(el)) continue;
          const r = el.getBoundingClientRect();
          const t = (el.textContent || "").trim();
          if (r.height < 24 && t) issues.push(`small ${Math.round(r.height)}px "${t.slice(0, 20)}"`);
        }
        for (const el of document.querySelectorAll("button, a[href]")) {
          const name = el.getAttribute("aria-label") || el.textContent?.trim();
          if (!name) issues.push(`unnamed <${el.tagName.toLowerCase()}>`);
        }
        // first-viewport text volume + card count, the two measures that separated
        // premium from templated across the reference set
        let chars = 0;
        const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let n;
        while ((n = walk.nextNode())) {
          const t = n.textContent.trim();
          if (!t) continue;
          const p = n.parentElement;
          if (!p || !vis(p)) continue;
          if (p.getBoundingClientRect().top < window.innerHeight) chars += t.length;
        }
        let cards = 0;
        for (const el of document.querySelectorAll("div, a, article, li")) {
          if (!vis(el)) continue;
          const cs = getComputedStyle(el);
          const r = el.getBoundingClientRect();
          const rad = parseFloat(cs.borderTopLeftRadius) || 0;
          const bordered = cs.borderTopWidth !== "0px" || (cs.boxShadow && cs.boxShadow !== "none");
          if (bordered && rad >= 6 && r.width > 180 && r.height > 120 && r.top < window.innerHeight) cards += 1;
        }
        return { issues, chars, cards };
      });
      report.push({ view, slug, ...audit });
    } catch (e) {
      report.push({ view, slug, issues: [`FAILED ${String(e.message).slice(0, 120)}`], chars: 0, cards: 0 });
    }
  }

  // Hero timeline moments (desktop only).
  if (view === "desktop") {
    await page.goto(BASE + "/", { waitUntil: "networkidle2" });
    for (const ms of [1200, 4600, 5000, 6200, 8000, 11000]) {
      await sleep(ms === 1200 ? ms : 0);
      if (ms !== 1200) await sleep(ms - 0);
      await page.screenshot({ path: path.join(dir, `hero-${ms}ms.png`) });
    }
  }

  if (errors.length) report.push({ view, slug: "console", issues: [...new Set(errors)], chars: 0, cards: 0 });
  await page.close();
}

await browser.close();
const lines = report.map((r) =>
  `${r.view.padEnd(8)} ${r.slug.padEnd(12)} chars=${String(r.chars).padEnd(5)} cards=${String(r.cards).padEnd(3)} ${r.issues.length ? r.issues.join(" | ") : "ok"}`,
);
await writeFile(path.join(OUT, "audit.txt"), lines.join("\n"), "utf8");
console.log(lines.join("\n"));
