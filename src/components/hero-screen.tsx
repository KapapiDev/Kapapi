"use client";

import { QUESTS, route, won } from "@/lib/kapapi";
import s from "./hero-screen.module.css";

/**
 * The KAPAPI surface shown inside the laptop and then full-frame.
 *
 * Everything here is real product state driven by the real routing policy — the
 * rows, the exclusions and the rationale all come from `route()`, not from
 * hand-written marketing text.
 */

export const STEPS = [
  { ko: "의뢰가 등록되었습니다", en: "QUEST CREATED", ms: 900 },
  { ko: "제안 4건이 도착했습니다", en: "4 BIDS RECEIVED", ms: 1500 },
  { ko: "조건을 확인하고 있습니다", en: "ELIGIBILITY CHECK", ms: 1400 },
  { ko: "전문가가 배정되었습니다", en: "PLAYER ASSIGNED", ms: 1800 },
  { ko: "작업을 시작했습니다", en: "WORK STARTED", ms: 1100 },
  { ko: "결과 파일이 도착했습니다", en: "RESULT READY", ms: 2100 },
] as const;

const QUEST = QUESTS["0182"];
const ROUTED = route(QUEST);
const ORDER = [...ROUTED.ranked, ...ROUTED.dropped];

export function HeroScreen({ step }: { step: number }) {
  const showBids = step >= 1 && step <= 4;
  const filtering = step === 2;
  const assigned = step >= 3;
  const showResult = step === 5;
  const active = STEPS[Math.max(0, Math.min(step, STEPS.length - 1))];

  return (
    <div className={s.ui}>
      <div className={s.bar}>
        <span className={s.mark}>KAPAPI</span>
        <span className={s.metaNum}>의뢰 #{QUEST.id}</span>
        <span className={`${s.meta} ${s.metaEnd}`}>마감 {QUEST.deadlineHours}시간</span>
      </div>

      <div className={s.state}>
        <p className={s.ko}>{step < 0 ? QUEST.title : active.ko}</p>
        {step >= 0 ? <p className={s.en}>{active.en}</p> : null}
      </div>

      <div className={s.body}>
      {showBids ? (
        <div className={s.rows}>
          {/* Once routing has resolved, the losing bids have had their beat: they were
              listed on arrival and struck through during the eligibility pass. Keeping
              all four here alongside the rationale is more rows than the panel's fixed
              height can hold, and it was the list that got silently clipped. */}
          {(assigned ? ORDER.filter((c) => c.bid.id === ROUTED.picked?.bid.id) : ORDER).map((c) => {
            const isPick = assigned && c.bid.id === ROUTED.picked?.bid.id;
            const muted = (filtering && c.out) || (assigned && !isPick);
            return (
              <div
                key={c.bid.id}
                className={`${s.row} ${muted ? s.rowMuted : ""} ${isPick ? s.rowPick : ""}`}
              >
                <span>
                  <span className={s.name}>
                    {c.person.name}
                    {isPick ? <span className={s.tag}>배정</span> : null}
                  </span>
                  {filtering && c.out ? (
                    <span className={s.outWhy}>제외 · {c.out}</span>
                  ) : (
                    <span className={s.career}>{c.person.career}</span>
                  )}
                </span>
                <span className={s.price}>{won(c.bid.price)}</span>
                <span className={s.hours}>{c.bid.hours}시간</span>
              </div>
            );
          })}
        </div>
      ) : null}

      {assigned && !showResult && ROUTED.picked ? (
        <div className={s.why}>
          <p className={s.whyTitle}>왜 이 전문가인가요?</p>
          <div className={s.whyList}>
            {ROUTED.reasons.slice(0, 3).map((r) => (
              <p key={r} className={s.whyRow}>
                <span className={s.whyMark} aria-hidden="true">▸</span>
                {r}
              </p>
            ))}
          </div>
        </div>
      ) : null}

      {showResult && QUEST.result ? (
        <>
          <div className={s.result}>
            <span className={s.kind} aria-hidden="true">{QUEST.result.files[0].kind}</span>
            <span style={{ minWidth: 0 }}>
              <span className={s.rname} style={{ display: "block" }}>{QUEST.result.files[0].name}</span>
              <span className={s.rmeta}>
                {QUEST.result.at} · 마감보다 {QUEST.result.earlyMinutes}분 일찍
              </span>
            </span>
          </div>
          <div className={s.checks}>
            {QUEST.result.checks.map((c) => (
              <p key={c} className={s.check}>
                <span className={s.tick2} aria-hidden="true">✓</span>
                {c}
              </p>
            ))}
          </div>
        </>
      ) : null}
      </div>

      <div className={s.foot}>
        <span>같은 유형 <b>{ROUTED.picked?.relevant ?? 0}건</b></span>
        <span>정시 납품 <b>{Math.round((ROUTED.picked?.person.onTime ?? 0) * 100)}%</b></span>
        <span>수정 요청 <b>{Math.round((ROUTED.picked?.person.revision ?? 0) * 100)}%</b></span>
      </div>

      <div className={s.track} aria-hidden="true">
        {STEPS.map((st, i) => (
          <span key={st.en} className={`${s.tick} ${i <= step ? s.tickOn : ""}`} />
        ))}
      </div>
    </div>
  );
}
