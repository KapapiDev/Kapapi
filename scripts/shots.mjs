/**
 * Visual QA capture. Drives the locally installed Chrome via puppeteer-core so
 * no browser binary is downloaded and nothing is added to the app's runtime deps.
 *
 *   node scripts/shots.mjs [outDir]
 *
 * Captures every required surface at desktop, tablet and mobile, plus a
 * reduced-motion pass, and reports horizontal-overflow and contrast-relevant
 * layout problems that a screenshot alone would hide.
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import puppeteer from "puppeteer-core";

const BASE = process.env.KAPAPI_BASE ?? "http://localhost:3210";
const OUT = process.argv[2] ?? "qa";
const CHROME =
  process.env.CHROME_PATH ??
  "C:/Program Files/Google/Chrome/Application/chrome.exe";

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "tablet", width: 834, height: 1112 },
  { name: "mobile", width: 390, height: 844 },
];

const ROUTES = [
  { slug: "01-landing", url: "/", full: true },
  { slug: "02-scope", url: "/new", full: true, seed: true },
  { slug: "03-quest-live", url: "/quest/0219", full: true, seed: true, settle: 12000 },
  { slug: "04-board", url: "/board", full: true },
  { slug: "05-quest-detail", url: "/board/0201", full: true },
  { slug: "06-quest-detail-blocked", url: "/board/0211", full: true },
  { slug: "07-flagship", url: "/quest/0001", full: true },
  { slug: "08-profile", url: "/profile", full: true },
  { slug: "09-my", url: "/my", full: true },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Scroll the whole page before capturing. The routing proof and the hero film
 * only run when they enter the viewport, so a screenshot taken without this
 * shows the resting state rather than what a reader actually sees.
 */
async function walkPage(page) {
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  const step = await page.evaluate(() => innerHeight * 0.8);
  for (let y = 0; y < height; y += step) {
    await page.evaluate((top) => scrollTo({ top, behavior: "instant" }), y);
    await sleep(320);
  }
  // Let the routing sequences finish, then return to the top for the capture.
  await sleep(5200);
  await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
  await sleep(500);
}

/** Type a request into the hero and hand it off, so /new and /quest/0219 exist. */
async function seedDraft(page) {
  await page.goto(`${BASE}/`, { waitUntil: "networkidle2" });
  await page.type(
    "#work-entry",
    "손그림 도면 3장을 CAD 현황도로 오늘 저녁 7시까지 정리해주세요. DWG랑 PDF 둘 다 필요합니다.",
  );
  await page.click("input[type=file] + label");
  await page.evaluate(() => {
    const buttons = [...document.querySelectorAll("button")];
    buttons.find((b) => b.textContent?.includes("일 맡기기"))?.click();
  });
  await page.waitForFunction(() => location.pathname === "/new", { timeout: 5000 });
  await sleep(400);
}

async function submitDraft(page) {
  await page.evaluate(() => {
    const buttons = [...document.querySelectorAll("button")];
    buttons.find((b) => b.textContent?.includes("이대로 맡기기"))?.click();
  });
  await sleep(600);
}

const report = [];

async function audit(page, label) {
  const issues = await page.evaluate(() => {
    const found = [];
    const doc = document.documentElement;
    if (doc.scrollWidth > doc.clientWidth + 1) {
      found.push(`horizontal overflow: ${doc.scrollWidth} > ${doc.clientWidth}`);
      for (const el of document.querySelectorAll("body *")) {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && r.right > doc.clientWidth + 1) {
          found.push(
            `  overflowing: <${el.tagName.toLowerCase()} class="${String(el.className).slice(0, 40)}"> right=${Math.round(r.right)}`,
          );
          if (found.length > 6) break;
        }
      }
    }
    // Touch targets on the primary controls.
    for (const el of document.querySelectorAll("button, a[href], input, select, textarea")) {
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) continue;
      if (r.height < 24 && el.textContent && el.textContent.trim().length > 0) {
        found.push(
          `small target (${Math.round(r.height)}px): "${el.textContent.trim().slice(0, 24)}"`,
        );
      }
    }
    // Images without alt, controls without an accessible name.
    for (const img of document.querySelectorAll("img")) {
      if (img.getAttribute("alt") === null && img.getAttribute("aria-hidden") !== "true") {
        found.push(`img without alt: ${img.currentSrc || img.src}`);
      }
    }
    for (const el of document.querySelectorAll("button, a[href]")) {
      const name =
        el.getAttribute("aria-label") ||
        el.textContent?.trim() ||
        el.querySelector("img")?.getAttribute("alt");
      if (!name) found.push(`control without accessible name: <${el.tagName.toLowerCase()}>`);
    }
    return found;
  });
  if (issues.length) report.push(`\n[${label}]\n${issues.map((i) => `  - ${i}`).join("\n")}`);
}

async function main() {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: "shell",
    args: ["--hide-scrollbars", "--force-device-scale-factor=1"],
  });

  for (const vp of VIEWPORTS) {
    const dir = path.join(OUT, vp.name);
    await mkdir(dir, { recursive: true });
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1 });

    for (const route of ROUTES) {
      if (route.seed) {
        await seedDraft(page);
        if (route.url.startsWith("/quest/0219")) {
          await submitDraft(page);
          await page.goto(`${BASE}${route.url}`, { waitUntil: "networkidle2" });
        }
      } else {
        await page.goto(`${BASE}${route.url}`, { waitUntil: "networkidle2" });
      }
      await sleep(route.settle ?? 1200);
      await walkPage(page);
      await audit(page, `${vp.name} ${route.slug}`);
      await page.screenshot({
        path: path.join(dir, `${route.slug}.png`),
        fullPage: route.full,
      });
      process.stdout.write(`captured ${vp.name}/${route.slug}\n`);
    }
    await page.close();
  }

  // Reduced-motion pass on the two motion-bearing surfaces.
  const rm = await browser.newPage();
  await rm.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await rm.emulateMediaFeatures([
    { name: "prefers-reduced-motion", value: "reduce" },
  ]);
  await mkdir(path.join(OUT, "reduced-motion"), { recursive: true });
  for (const url of ["/", "/quest/0001"]) {
    await rm.goto(`${BASE}${url}`, { waitUntil: "networkidle2" });
    await sleep(1200);
    await walkPage(rm);
    const slug = url === "/" ? "landing" : "flagship";
    await audit(rm, `reduced-motion ${slug}`);
    await rm.screenshot({
      path: path.join(OUT, "reduced-motion", `${slug}.png`),
      fullPage: true,
    });
    process.stdout.write(`captured reduced-motion/${slug}\n`);
  }
  await rm.close();

  await browser.close();

  const text = report.length ? report.join("\n") : "\nNo layout/a11y issues found.";
  await writeFile(path.join(OUT, "audit.txt"), text, "utf8");
  process.stdout.write(`${text}\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
