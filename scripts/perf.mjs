/**
 * Hero performance check (QA_CHECKLIST J4, J5).
 *
 * Runs against a production build over a throttled connection and confirms the
 * hero copy paints without waiting on the film, and that media loading causes
 * no layout shift.
 *
 *   npm run build && npx next start -p 3211 && node scripts/perf.mjs
 */
import puppeteer from "puppeteer-core";

const BASE = process.env.KAPAPI_BASE ?? "http://localhost:3211";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const b = await puppeteer.launch({
  executablePath:
    process.env.CHROME_PATH ?? "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: "shell",
});
const p = await b.newPage();
await p.setViewport({ width: 1440, height: 900 });

// Throttle so a slow connection is what we actually measure.
const cdp = await p.createCDPSession();
await cdp.send("Network.emulateNetworkConditions", {
  offline: false,
  latency: 150,
  downloadThroughput: (1.6 * 1024 * 1024) / 8,
  uploadThroughput: (750 * 1024) / 8,
});

await p.evaluateOnNewDocument(() => {
  window.__lcp = 0;
  window.__cls = 0;
  new PerformanceObserver((l) => {
    for (const e of l.getEntries()) window.__lcp = e.startTime;
  }).observe({ type: "largest-contentful-paint", buffered: true });
  new PerformanceObserver((l) => {
    for (const e of l.getEntries()) if (!e.hadRecentInput) window.__cls += e.value;
  }).observe({ type: "layout-shift", buffered: true });
});

await p.goto(BASE, { waitUntil: "load" });
await sleep(6000);

const m = await p.evaluate(() => {
  const paints = Object.fromEntries(
    performance.getEntriesByType("paint").map((e) => [e.name, Math.round(e.startTime)]),
  );
  const video = performance
    .getEntriesByType("resource")
    .find((r) => r.name.includes("kapapi-hero.mp4"));
  const poster = performance
    .getEntriesByType("resource")
    .find((r) => r.name.includes("kapapi-hero-poster"));
  const heroText = document.querySelector("h1");
  return {
    firstContentfulPaint: paints["first-contentful-paint"],
    lcp: Math.round(window.__lcp),
    cls: Number(window.__cls.toFixed(4)),
    heroTextRendered: Boolean(heroText && heroText.getBoundingClientRect().height > 0),
    videoStart: video ? Math.round(video.startTime) : null,
    videoBytes: video ? video.transferSize : null,
    posterStart: poster ? Math.round(poster.startTime) : null,
    posterBytes: poster ? poster.transferSize : null,
    totalTransfer: performance
      .getEntriesByType("resource")
      .reduce((s, r) => s + (r.transferSize || 0), 0),
  };
});

console.log(JSON.stringify(m, null, 2));
await b.close();
