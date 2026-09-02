/** Display helpers. Money and time are the two things this product must never fudge. */

export function won(value: number): string {
  return `₩${value.toLocaleString("ko-KR")}`;
}

export function hours(value: number): string {
  return `${value}H`;
}

export function deliveryPhrase(value: number): string {
  if (value <= 8) return `${value}시간 내`;
  if (value <= 24) return `${value}시간 내 (당일)`;
  return `${Math.round(value / 24)}일 내`;
}

export function pct(value: number): string {
  return `${Math.round(value * 100)}%`;
}

/** `18 MIN EARLY` / `12 MIN LATE` — delivery against the committed deadline. */
export function deadlineDelta(minutes: number): { label: string; early: boolean } {
  const early = minutes >= 0;
  const abs = Math.abs(minutes);
  const text = abs >= 60 ? `${Math.floor(abs / 60)}H ${abs % 60}M` : `${abs} MIN`;
  return { label: `${text} ${early ? "EARLY" : "LATE"}`, early };
}

export function deadlineDeltaKo(minutes: number): string {
  const abs = Math.abs(minutes);
  const text = abs >= 60 ? `${Math.floor(abs / 60)}시간 ${abs % 60}분` : `${abs}분`;
  return minutes >= 0 ? `마감보다 ${text} 일찍 도착` : `마감보다 ${text} 늦게 도착`;
}

/** `04:18:22` for the TIME ATTACK readout. */
export function clock(msRemaining: number): string {
  const total = Math.max(0, Math.floor(msRemaining / 1000));
  const h = String(Math.floor(total / 3600)).padStart(2, "0");
  const m = String(Math.floor((total % 3600) / 60)).padStart(2, "0");
  const s = String(total % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

/** Coarse text for assistive technology, so a countdown never announces per second. */
export function clockCoarse(msRemaining: number): string {
  const total = Math.max(0, Math.floor(msRemaining / 60000));
  const h = Math.floor(total / 60);
  const m = total % 60;
  if (h > 0) return `마감까지 약 ${h}시간 ${m}분 남음`;
  return `마감까지 약 ${m}분 남음`;
}
