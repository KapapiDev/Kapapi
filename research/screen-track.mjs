/**
 * Locate the laptop screen rectangle in the hero footage.
 *
 * The screen is a bright, near-neutral field enclosed by a very dark bezel, so
 * scanning outward from the screen centre until brightness collapses finds the
 * inner edges far more reliably than thresholding the whole frame (which also
 * catches the bright windows behind the desk).
 *
 *   node research/screen-track.mjs
 */
import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import sharp from "sharp";

const VIDEO = "research/proto/media/hero.mp4";
const TMP = "research/proto/track";
mkdirSync(TMP, { recursive: true });

const W = 1280;
const lum = (d, i) => 0.2126 * d[i] + 0.7152 * d[i + 1] + 0.0722 * d[i + 2];

async function trackFrame(t) {
  const file = `${TMP}/t${t}.png`;
  execFileSync("ffmpeg", [
    "-v", "error", "-ss", String(t), "-i", VIDEO,
    "-frames:v", "1", "-vf", `scale=${W}:-2`, file, "-y",
  ]);
  const { data, info } = await sharp(file).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const at = (x, y) => (Math.round(y) * width + Math.round(x)) * channels;

  const cx = Math.round(width / 2);
  const cy = Math.round(height * 0.5);
  if (lum(data, at(cx, cy)) < 140) return null; // centre is not the screen

  /** Walk from (x,y) along (dx,dy) until luminance drops below the bezel cut. */
  const edge = (x, y, dx, dy) => {
    const start = lum(data, at(x, y));
    const cut = Math.max(70, start * 0.55);
    let px = x, py = y;
    for (let i = 0; i < 900; i += 1) {
      const nx = x + dx * i, ny = y + dy * i;
      if (nx < 1 || ny < 1 || nx > width - 2 || ny > height - 2) break;
      if (lum(data, at(nx, ny)) < cut) break;
      px = nx; py = ny;
    }
    return { x: px, y: py };
  };

  // Sample the left/right edges at two heights and top/bottom at two widths,
  // then reconstruct the quadrilateral corners from those crossings.
  const yHi = Math.round(height * 0.28);
  const yLo = Math.round(height * 0.72);
  const leftHi = edge(cx, yHi, -1, 0).x;
  const leftLo = edge(cx, yLo, -1, 0).x;
  const rightHi = edge(cx, yHi, 1, 0).x;
  const rightLo = edge(cx, yLo, 1, 0).x;

  const xL = Math.round((leftHi + leftLo) / 2);
  const xR = Math.round((rightHi + rightLo) / 2);
  const xMid = Math.round((xL + xR) / 2);
  const topY = edge(xMid, cy, 0, -1).y;
  const botY = edge(xMid, cy, 0, 1).y;

  // Extrapolate the side x at the true top/bottom from the two sampled heights.
  const lerpX = (hi, lo, y) => hi + ((lo - hi) * (y - yHi)) / (yLo - yHi);

  const corners = {
    tl: [Math.round(lerpX(leftHi, leftLo, topY)), Math.round(topY)],
    tr: [Math.round(lerpX(rightHi, rightLo, topY)), Math.round(topY)],
    br: [Math.round(lerpX(rightHi, rightLo, botY)), Math.round(botY)],
    bl: [Math.round(lerpX(leftHi, leftLo, botY)), Math.round(botY)],
  };
  const w = corners.tr[0] - corners.tl[0];
  const h = corners.bl[1] - corners.tl[1];
  if (w < 120 || h < 90) return null;
  return { t, width, height, corners, w, h, coverage: +((w * h) / (width * height)).toFixed(3) };
}

const results = [];
for (let t = 3.6; t <= 6.0; t = +(t + 0.1).toFixed(2)) {
  try {
    const r = await trackFrame(t);
    if (r) results.push(r);
  } catch {
    /* frame unavailable */
  }
}

writeFileSync("research/proto/screen-track.json", JSON.stringify(results, null, 2));
for (const r of results) {
  const c = r.corners;
  console.log(
    `t=${String(r.t).padEnd(4)} tl=${String(c.tl).padEnd(9)} tr=${String(c.tr).padEnd(10)} br=${String(c.br).padEnd(10)} bl=${String(c.bl).padEnd(9)} ${r.w}x${r.h} cov=${r.coverage}`,
  );
}
console.log(`\ntracked ${results.length} frames`);
