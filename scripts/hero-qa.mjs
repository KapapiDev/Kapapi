/**
 * Hero verification. The rule for the hero film is that the founder's file is
 * used as delivered — not cropped, not stretched, not covered — so this asserts
 * those properties against the rendered page rather than against the source.
 *
 *   node scripts/hero-qa.mjs [outDir] [baseUrl]
 */
import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import puppeteer from "puppeteer-core";

const OUT = process.argv[2] ?? "hero-qa";
const BASE = process.argv[3] ?? process.env.KAPAPI_BASE ?? "http://localhost:3220";
const CHROME = process.env.CHROME_PATH ?? "C:/Program Files/Google/Chrome/Application/chrome.exe";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const VIEWS = [
  ["1920", 1920, 1080, false],
  ["1440", 1440, 900, false],
  ["1280", 1280, 800, false],
  ["tablet", 834, 1112, true],
  ["mobile", 390, 844, true],
];

const browser = await puppeteer.launch({
  executablePath: CHROME, headless: "shell",
  args: ["--autoplay-policy=no-user-gesture-required", "--hide-scrollbars"],
});
await mkdir(OUT, { recursive: true });

const rows = [];
let failed = 0;

for (const [name, w, h, mobile] of VIEWS) {
  const p = await browser.newPage();
  await p.setViewport({ width: w, height: h, deviceScaleFactor: 2, isMobile: mobile, hasTouch: mobile });
  await p.goto(BASE, { waitUntil: "networkidle2" });
  await sleep(1500);

  const m = await p.evaluate(() => {
    const v = document.querySelector("video");
    if (!v) return { error: "no video" };
    const r = v.getBoundingClientRect();
    const cs = getComputedStyle(v);

    // Anything painted on top of the film. Sampling the four quadrants and the
    // centre catches a veil, a gradient or a pasted panel wherever it sits.
    const pts = [[.5, .5], [.25, .25], [.75, .25], [.25, .75], [.75, .75]];
    const covering = [...new Set(pts.flatMap(([fx, fy]) => {
      const x = r.left + r.width * fx, y = r.top + r.height * fy;
      if (x < 0 || y < 0 || x > innerWidth || y > innerHeight) return [];
      const stack = document.elementsFromPoint(x, y);
      return stack.slice(0, stack.indexOf(v)).map((e) => e.tagName + "." + e.className);
    }))];

    const side = document.querySelector("h1")?.closest("div");
    return {
      src: v.getAttribute("src"),
      natural: [v.videoWidth, v.videoHeight],
      box: [Math.round(r.width), Math.round(r.height)],
      objectFit: cs.objectFit,
      controls: v.controls,
      paused: v.paused,
      t: +v.currentTime.toFixed(2),
      covering,
      filter: cs.filter,
      opacity: cs.opacity,
      sideW: side ? Math.round(side.getBoundingClientRect().width) : null,
      stacked: side ? side.getBoundingClientRect().bottom <= r.top + 2 : null,
      hScroll: document.documentElement.scrollWidth > innerWidth,
    };
  });

  await p.screenshot({ path: path.join(OUT, `${name}.png`) });

  const ok = [];
  const bad = [];
  const check = (cond, msg) => (cond ? ok : bad).push(msg);

  check(m.src === "/media/KAPAPI.mp4", `제공된 원본 파일 사용 (${m.src})`);
  check(m.natural[0] === 1920 && m.natural[1] === 1080, `원본 해상도 ${m.natural.join("x")}`);

  // Rendered ratio must match the file's, or the frame is being cropped/stretched.
  const srcRatio = m.natural[0] / m.natural[1];
  const boxRatio = m.box[0] / m.box[1];
  check(Math.abs(srcRatio - boxRatio) < 0.02, `비율 유지 ${boxRatio.toFixed(3)} vs 원본 ${srcRatio.toFixed(3)}`);
  check(m.objectFit !== "cover", `object-fit: ${m.objectFit} (cover 아님)`);
  check(m.covering.length === 0, `영상 위 덮는 요소 ${m.covering.length}개 ${m.covering.join(", ")}`);
  check(m.filter === "none", `필터 없음 (${m.filter})`);
  check(m.opacity === "1", `불투명도 1 (${m.opacity})`);
  check(m.controls === false, "기본 컨트롤 미노출");
  check(!m.paused && m.t > 0, `자동재생 중 t=${m.t}s`);
  check(!m.hScroll, "가로 스크롤 없음");

  // Composition: the film must not be a thumbnail, and must not crowd the action out.
  const share = m.box[0] / w;
  if (mobile && m.stacked !== null) {
    check(m.stacked === true, "모바일: 입력 → 영상 순서");
  } else {
    check(share >= 0.5 && share <= 0.56, `영상 폭 뷰포트의 ${(share * 100).toFixed(1)}% (목표 50-55%)`);
    check(m.sideW / m.box[0] > 0.6, `좌우 균형 입력 ${m.sideW}px : 영상 ${m.box[0]}px`);
  }

  failed += bad.length;
  rows.push(`\n[${name} ${w}x${h}]  영상 ${m.box.join("x")}px\n` +
    ok.map((x) => `  PASS  ${x}`).join("\n") +
    (bad.length ? "\n" + bad.map((x) => `  FAIL  ${x}`).join("\n") : ""));
  await p.close();
}

await browser.close();
console.log(rows.join("\n"));
console.log(failed === 0 ? "\n영상 규칙 위반 없음.\n" : `\n${failed}건 실패.\n`);
if (failed) process.exitCode = 1;
