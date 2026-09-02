/**
 * Places a real HTML element inside the laptop screen in the hero footage.
 *
 * The screen corners were measured off the actual frames (research/screen-track.mjs),
 * so this is a keyframed homography rather than live computer vision: robust,
 * cheap, and exact for this specific take.
 */

/** Tracked screen corners, normalised to the 1280x720 capture used for tracking. */
export const TRACK = [
  { t: 4.1, tl: [354, 192], tr: [927, 192], br: [935, 564], bl: [345, 564] },
  { t: 4.3, tl: [310, 156], tr: [972, 156], br: [982, 588], bl: [299, 588] },
  { t: 4.5, tl: [272, 128], tr: [1009, 128], br: [1021, 610], bl: [258, 610] },
  { t: 4.7, tl: [243, 107], tr: [1038, 107], br: [1053, 629], bl: [226, 629] },
  { t: 4.9, tl: [221, 93], tr: [1059, 93], br: [1075, 642], bl: [204, 642] },
  { t: 5.1, tl: [211, 84], tr: [1070, 84], br: [1086, 648], bl: [193, 648] },
  { t: 5.3, tl: [203, 79], tr: [1076, 79], br: [1093, 653], bl: [185, 653] },
  { t: 5.45, tl: [202, 78], tr: [1078, 78], br: [1095, 654], bl: [184, 654] },
];
export const TRACK_W = 1280;
export const TRACK_H = 720;
export const WINDOW_IN = 4.1;
export const WINDOW_OUT = 5.45;

const lerp = (a, b, u) => a + (b - a) * u;
const lerpPt = (a, b, u) => [lerp(a[0], b[0], u), lerp(a[1], b[1], u)];

/** Corner positions at an arbitrary time inside the tracked window. */
export function cornersAt(t) {
  if (t <= TRACK[0].t) return TRACK[0];
  if (t >= TRACK[TRACK.length - 1].t) return TRACK[TRACK.length - 1];
  for (let i = 0; i < TRACK.length - 1; i += 1) {
    const a = TRACK[i], b = TRACK[i + 1];
    if (t >= a.t && t <= b.t) {
      const u = (t - a.t) / (b.t - a.t);
      return {
        t,
        tl: lerpPt(a.tl, b.tl, u),
        tr: lerpPt(a.tr, b.tr, u),
        br: lerpPt(a.br, b.br, u),
        bl: lerpPt(a.bl, b.bl, u),
      };
    }
  }
  return TRACK[TRACK.length - 1];
}

/**
 * Solve the projective transform that maps the rectangle (0,0)-(w,h) onto an
 * arbitrary quadrilateral, and return it as a CSS matrix3d.
 * Standard 8-unknown linear system, solved by Gaussian elimination.
 */
export function quadToMatrix3d(w, h, tl, tr, br, bl) {
  const src = [[0, 0], [w, 0], [w, h], [0, h]];
  const dst = [tl, tr, br, bl];
  const A = [];
  const B = [];
  for (let i = 0; i < 4; i += 1) {
    const [x, y] = src[i];
    const [u, v] = dst[i];
    A.push([x, y, 1, 0, 0, 0, -u * x, -u * y]);
    B.push(u);
    A.push([0, 0, 0, x, y, 1, -v * x, -v * y]);
    B.push(v);
  }
  // Gaussian elimination with partial pivoting.
  const n = 8;
  for (let col = 0; col < n; col += 1) {
    let piv = col;
    for (let r = col + 1; r < n; r += 1) {
      if (Math.abs(A[r][col]) > Math.abs(A[piv][col])) piv = r;
    }
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
  // CSS matrix3d is column-major.
  return `matrix3d(${a},${d},0,${g},${b},${e},0,${i},0,0,1,0,${c},${f},0,1)`;
}

/**
 * Keep a UI element pinned inside the laptop screen as the shot pushes in.
 * `frame` is the element the video is rendered into (object-fit: cover).
 */
export function makeScreenComposite({ video, frame, ui, layer, uiWidth = 1280, uiHeight = 720 }) {
  ui.style.width = `${uiWidth}px`;
  ui.style.height = `${uiHeight}px`;

  function apply() {
    const t = video.currentTime;
    const inside = t >= WINDOW_IN && t <= WINDOW_OUT;
    layer.classList.toggle("on", inside);
    if (!inside) return;

    const c = cornersAt(t);
    const box = frame.getBoundingClientRect();

    // The video is object-fit: cover, so recover the drawn rect inside the frame.
    const vAspect = TRACK_W / TRACK_H;
    const fAspect = box.width / box.height;
    let drawW = box.width, drawH = box.height, offX = 0, offY = 0;
    if (fAspect > vAspect) {
      drawH = box.width / vAspect;
      offY = (box.height - drawH) / 2;
    } else {
      drawW = box.height * vAspect;
      offX = (box.width - drawW) / 2;
    }
    const sx = drawW / TRACK_W;
    const sy = drawH / TRACK_H;
    const map = (p) => [p[0] * sx + offX, p[1] * sy + offY];

    ui.style.transform = quadToMatrix3d(
      uiWidth, uiHeight,
      map(c.tl), map(c.tr), map(c.br), map(c.bl),
    );
  }

  return { apply };
}
