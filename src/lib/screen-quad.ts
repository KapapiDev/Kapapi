/**
 * Places real KAPAPI UI inside the laptop screen in the approved hero footage.
 *
 * The corners below were measured off the actual frames with
 * `research/screen-track.mjs`, so this is a keyframed projective transform for
 * this specific take rather than live computer vision — robust and exact, and
 * what docs/PROTOTYPE_V2_HERO_COMPOSITING.md asks for ahead of the clean-cut
 * fallback.
 */

type Pt = readonly [number, number];
interface Frame { t: number; tl: Pt; tr: Pt; br: Pt; bl: Pt }

/** Normalised to the 1280×720 capture the tracking ran against. */
export const TRACK_W = 1280;
export const TRACK_H = 720;

export const COMPOSITE_IN = 4.1;
export const COMPOSITE_OUT = 5.45;

const TRACK: Frame[] = [
  { t: 4.10, tl: [354, 192], tr: [927, 192], br: [935, 564], bl: [345, 564] },
  { t: 4.30, tl: [310, 156], tr: [972, 156], br: [982, 588], bl: [299, 588] },
  { t: 4.50, tl: [272, 128], tr: [1009, 128], br: [1021, 610], bl: [258, 610] },
  { t: 4.70, tl: [243, 107], tr: [1038, 107], br: [1053, 629], bl: [226, 629] },
  { t: 4.90, tl: [221, 93], tr: [1059, 93], br: [1075, 642], bl: [204, 642] },
  { t: 5.10, tl: [211, 84], tr: [1070, 84], br: [1086, 648], bl: [193, 648] },
  { t: 5.30, tl: [203, 79], tr: [1076, 79], br: [1093, 653], bl: [185, 653] },
  { t: 5.45, tl: [202, 78], tr: [1078, 78], br: [1095, 654], bl: [184, 654] },
];

const mix = (a: number, b: number, u: number) => a + (b - a) * u;
const mixPt = (a: Pt, b: Pt, u: number): Pt => [mix(a[0], b[0], u), mix(a[1], b[1], u)];

export function cornersAt(t: number): Frame {
  if (t <= TRACK[0].t) return TRACK[0];
  const last = TRACK[TRACK.length - 1];
  if (t >= last.t) return last;
  for (let i = 0; i < TRACK.length - 1; i += 1) {
    const a = TRACK[i];
    const b = TRACK[i + 1];
    if (t >= a.t && t <= b.t) {
      const u = (t - a.t) / (b.t - a.t);
      return { t, tl: mixPt(a.tl, b.tl, u), tr: mixPt(a.tr, b.tr, u), br: mixPt(a.br, b.br, u), bl: mixPt(a.bl, b.bl, u) };
    }
  }
  return last;
}

/**
 * Solve the homography mapping the rectangle (0,0)–(w,h) onto an arbitrary
 * quadrilateral and express it as a CSS matrix3d. Eight unknowns, solved by
 * Gaussian elimination with partial pivoting.
 */
export function quadToMatrix3d(w: number, h: number, tl: Pt, tr: Pt, br: Pt, bl: Pt): string {
  const src: Pt[] = [[0, 0], [w, 0], [w, h], [0, h]];
  const dst: Pt[] = [tl, tr, br, bl];
  const A: number[][] = [];
  const B: number[] = [];
  for (let i = 0; i < 4; i += 1) {
    const [x, y] = src[i];
    const [u, v] = dst[i];
    A.push([x, y, 1, 0, 0, 0, -u * x, -u * y]); B.push(u);
    A.push([0, 0, 0, x, y, 1, -v * x, -v * y]); B.push(v);
  }
  const n = 8;
  for (let col = 0; col < n; col += 1) {
    let piv = col;
    for (let r = col + 1; r < n; r += 1) if (Math.abs(A[r][col]) > Math.abs(A[piv][col])) piv = r;
    [A[col], A[piv]] = [A[piv], A[col]];
    [B[col], B[piv]] = [B[piv], B[col]];
    const d = A[col][col];
    if (Math.abs(d) < 1e-10) continue;
    for (let c = col; c < n; c += 1) A[col][c] /= d;
    B[col] /= d;
    for (let r = 0; r < n; r += 1) {
      if (r === col) continue;
      const f = A[r][col];
      if (!f) continue;
      for (let c = col; c < n; c += 1) A[r][c] -= f * A[col][c];
      B[r] -= f * B[col];
    }
  }
  const [a, b, c, d, e, f, g, i] = B;
  return `matrix3d(${a},${d},0,${g},${b},${e},0,${i},0,0,1,0,${c},${f},0,1)`;
}

/**
 * Map tracked video-space corners into the on-screen box, accounting for the
 * `object-fit: cover` crop the stage applies to the footage.
 */
export function transformFor(t: number, box: { width: number; height: number }, uiW: number, uiH: number): string {
  const c = cornersAt(t);
  const videoAspect = TRACK_W / TRACK_H;
  const boxAspect = box.width / box.height;
  let drawW = box.width;
  let drawH = box.height;
  let offX = 0;
  let offY = 0;
  if (boxAspect > videoAspect) {
    drawH = box.width / videoAspect;
    offY = (box.height - drawH) / 2;
  } else {
    drawW = box.height * videoAspect;
    offX = (box.width - drawW) / 2;
  }
  const sx = drawW / TRACK_W;
  const sy = drawH / TRACK_H;
  const map = (p: Pt): Pt => [p[0] * sx + offX, p[1] * sy + offY];
  return quadToMatrix3d(uiW, uiH, map(c.tl), map(c.tr), map(c.br), map(c.bl));
}
