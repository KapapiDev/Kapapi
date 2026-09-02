/**
 * Render the disposable visual directions and capture them, including frames
 * from inside the laptop-screen compositing window so the hero technique can be
 * judged rather than assumed.
 *
 *   node research/shoot.mjs <file.html> <slug> [seekTimes...]
 */
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import puppeteer from "puppeteer-core";

const [file, slug, ...seeks] = process.argv.slice(2);
const CHROME = process.env.CHROME_PATH ?? "C:/Program Files/Google/Chrome/Application/chrome.exe";
const ROOT = "research/proto";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const TYPES = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".mp4": "video/mp4", ".jpg": "image/jpeg", ".png": "image/png" };
const server = createServer(async (req, res) => {
  try {
    const p = path.join(ROOT, decodeURIComponent(req.url.split("?")[0]));
    const body = await readFile(p);
    const type = TYPES[path.extname(p)] ?? "application/octet-stream";
    const range = req.headers.range;
    // Chrome will not seek a <video> unless the server honours Range requests.
    if (range) {
      const m = /bytes=(\d*)-(\d*)/.exec(range);
      const start = m && m[1] ? Number(m[1]) : 0;
      const end = m && m[2] ? Number(m[2]) : body.length - 1;
      res.writeHead(206, {
        "Content-Type": type,
        "Accept-Ranges": "bytes",
        "Content-Range": `bytes ${start}-${end}/${body.length}`,
        "Content-Length": end - start + 1,
      });
      res.end(body.subarray(start, end + 1));
      return;
    }
    res.writeHead(200, { "Content-Type": type, "Accept-Ranges": "bytes", "Content-Length": body.length });
    res.end(body);
  } catch { res.writeHead(404); res.end("nf"); }
});
await new Promise((r) => server.listen(4599, r));

const out = path.join("research/directions", slug);
await mkdir(out, { recursive: true });
const browser = await puppeteer.launch({ executablePath: CHROME, headless: "shell", args: ["--hide-scrollbars", "--autoplay-policy=no-user-gesture-required"] });

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(`http://localhost:4599/${file}`, { waitUntil: "networkidle2" });
await sleep(2600);
await page.screenshot({ path: path.join(out, "desktop.png") });
await page.screenshot({ path: path.join(out, "desktop-full.png"), fullPage: true });

for (const t of seeks) {
  await page.evaluate((tt) => window.seek?.(Number(tt)), t);
  await page.waitForFunction((tt) => Math.abs(document.getElementById("v").currentTime - Number(tt)) < 0.25, { timeout: 8000 }, t).catch(() => {});
  await sleep(500);
  await page.screenshot({ path: path.join(out, `screen-t${t}.png`) });
}

const m = await browser.newPage();
await m.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
await m.goto(`http://localhost:4599/${file}`, { waitUntil: "networkidle2" });
await sleep(2200);
await m.screenshot({ path: path.join(out, "mobile.png") });
await m.close();
await page.close();
await browser.close();
server.close();
console.log(`captured ${slug} -> ${out}`);
