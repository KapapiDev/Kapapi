/**
 * Deployed-preview health check.
 *
 * Catches the class of problem that only shows up on a real deployment:
 * console/runtime errors, hydration mismatches, failed asset requests, and
 * media that does not actually play from the CDN.
 *
 *   KAPAPI_BASE=https://... node scripts/live-check.mjs
 */
import puppeteer from "puppeteer-core";

const BASE = process.env.KAPAPI_BASE;
const CHROME =
  process.env.CHROME_PATH ?? "C:/Program Files/Google/Chrome/Application/chrome.exe";
if (!BASE) throw new Error("set KAPAPI_BASE to the deployed URL");

const ROUTES = ["/", "/board", "/board/0201", "/board/0211", "/quest/0001", "/profile", "/my"];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const browser = await puppeteer.launch({ executablePath: CHROME, headless: "shell" });
let problems = 0;

for (const reduced of [false, true]) {
  const label = reduced ? "reduced-motion" : "normal";
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  if (reduced) {
    await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
  }

  const errors = [];
  const failedRequests = [];
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(`console: ${m.text().slice(0, 220)}`);
  });
  page.on("pageerror", (e) => errors.push(`pageerror: ${e.message.slice(0, 220)}`));
  page.on("requestfailed", (r) => {
    const reason = r.failure()?.errorText ?? "";
    // ERR_ABORTED is the browser cancelling work we deliberately interrupted:
    // RSC link prefetches abandoned on navigation, and <video> range requests
    // cancelled when the hero pauses or seeks. Neither is a delivery failure.
    if (reason === "net::ERR_ABORTED") return;
    failedRequests.push(`${reason} ${r.url().slice(0, 120)}`);
  });
  page.on("response", (r) => {
    if (r.status() >= 400) failedRequests.push(`HTTP ${r.status()} ${r.url().slice(0, 120)}`);
  });

  for (const route of ROUTES) {
    await page.goto(`${BASE}${route}`, { waitUntil: "networkidle2" });
    await sleep(1200);
    const height = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < height; y += 800) {
      await page.evaluate((top) => scrollTo({ top, behavior: "instant" }), y);
      await sleep(220);
    }
    await sleep(2500);
  }

  if (errors.length) {
    problems += errors.length;
    console.log(`\n[${label}] runtime errors`);
    for (const e of [...new Set(errors)]) console.log(`  ${e}`);
  }
  if (failedRequests.length) {
    problems += failedRequests.length;
    console.log(`\n[${label}] failed requests`);
    for (const f of [...new Set(failedRequests)]) console.log(`  ${f}`);
  }
  console.log(`[${label}] ${ROUTES.length} routes visited, ${errors.length} errors, ${failedRequests.length} failed requests`);
  await page.close();
}

// The hero film must actually play from the CDN, not just resolve 200.
const media = await browser.newPage();
await media.setViewport({ width: 1440, height: 900 });
await media.goto(BASE, { waitUntil: "networkidle2" });
await sleep(4000);
const video = await media.evaluate(() => {
  const v = document.querySelector("video");
  if (!v) return { present: false };
  return {
    present: true,
    src: v.currentSrc,
    muted: v.muted,
    playsInline: v.playsInline,
    readyState: v.readyState,
    videoWidth: v.videoWidth,
    currentTime: Number(v.currentTime.toFixed(2)),
    poster: v.poster,
    error: v.error ? v.error.code : null,
  };
});
console.log("\n[hero video]", JSON.stringify(video));
if (!video.present || video.videoWidth === 0 || video.error) {
  problems += 1;
  console.log("  PROBLEM: hero film did not decode from the deployment");
}
if (video.present && (!video.muted || !video.playsInline)) {
  problems += 1;
  console.log("  PROBLEM: autoplay requires muted + playsInline");
}
await media.close();

await browser.close();
console.log(problems === 0 ? "\nLive check clean." : `\n${problems} problem(s).`);
