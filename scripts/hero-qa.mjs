/**
 * Capture the hero timeline's actual beats. The route screenshots in shots.mjs
 * sample the page at load, which is before the sequence starts — every defect
 * found on the deployed preview lived in the seconds this script covers.
 *
 *   node scripts/hero-qa.mjs [outDir] [baseUrl]
 */
import { mkdir } from "node:fs/promises";
import path from "node:path";
import puppeteer from "puppeteer-core";

const OUT = process.argv[2] ?? "hero-qa";
const BASE = process.argv[3] ?? process.env.KAPAPI_BASE ?? "http://localhost:3220";
const CHROME = process.env.CHROME_PATH ?? "C:/Program Files/Google/Chrome/Application/chrome.exe";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const clock = () => { const v = document.querySelector("video"); return v ? { t: v.currentTime, paused: v.paused } : null; };

const browser = await puppeteer.launch({
  executablePath: CHROME, headless: "shell",
  args: ["--autoplay-policy=no-user-gesture-required", "--hide-scrollbars"],
});

for (const [view, w, h, mobile] of [["desktop", 1440, 900, false], ["mobile", 390, 844, true]]) {
  const dir = path.join(OUT, view);
  await mkdir(dir, { recursive: true });
  const p = await browser.newPage();
  await p.setViewport({ width: w, height: h, deviceScaleFactor: 2, isMobile: mobile, hasTouch: mobile });
  await p.goto(BASE, { waitUntil: "networkidle2" });

  // The film, before the product surface appears.
  await p.waitForFunction(() => { const c = (() => { const v = document.querySelector("video"); return v && { t: v.currentTime, paused: v.paused }; })(); return c && c.t > 2.4 && !c.paused; }, { polling: "raf", timeout: 30000 });
  await p.screenshot({ path: path.join(dir, "1-film.png") });

  // The hand-over. Desktop composites onto the laptop screen and keeps playing;
  // a narrow stage crops the laptop away, so it pauses and cuts full frame.
  if (mobile) {
    await p.waitForFunction(() => { const v = document.querySelector("video"); return v && v.paused && v.currentTime > 4.0 && v.currentTime < 4.4; }, { polling: "raf", timeout: 30000 });
  } else {
    await p.waitForFunction(() => { const v = document.querySelector("video"); return v && v.currentTime >= 4.9 && v.currentTime <= 5.3; }, { polling: "raf", timeout: 30000 });
  }
  await p.screenshot({ path: path.join(dir, "2-handover.png") });

  // Eligibility filtering, then the delivered result.
  await sleep(mobile ? 1300 : 900);
  await p.screenshot({ path: path.join(dir, "3-filter.png") });
  await sleep(4200);
  await p.screenshot({ path: path.join(dir, "4-result.png") });

  const end = await p.evaluate(clock);
  console.log(`${view.padEnd(8)} film→handover→filter→result captured, video at ${end.t.toFixed(2)}s ${end.paused ? "paused" : "playing"}`);
  await p.close();
}

await browser.close();
