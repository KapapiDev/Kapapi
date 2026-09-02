import puppeteer from "puppeteer-core";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const b = await puppeteer.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: "shell",
});

for (const [label, reduce] of [["normal", false], ["reduced", true]]) {
  const p = await b.newPage();
  if (reduce) await p.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
  p.on("console", (m) => {
    if (m.type() === "error" || m.type() === "warning") console.log(`[${label}] ${m.type()}: ${m.text().slice(0, 400)}`);
  });
  p.on("pageerror", (e) => console.log(`[${label}] pageerror: ${e.message.slice(0, 400)}`));
  await p.setViewport({ width: 1440, height: 900 });
  for (const url of ["/", "/board", "/profile", "/my", "/quest/0001", "/board/0201"]) {
    await p.goto("http://localhost:3210" + url, { waitUntil: "networkidle2" });
    await sleep(1500);
  }
  await p.close();
}
await b.close();
console.log("done");
