"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { QUESTS, route, won } from "@/lib/kapapi";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import s from "./sections.module.css";

/* ---------------------------------------------------------------- *
 * Routing proof — the difference is demonstrated, never described.
 * ---------------------------------------------------------------- */

const PROOF = QUESTS["0182"];
const R = route(PROOF);
const ORDER = [...R.ranked, ...R.dropped];

const STAGES = [
  { ko: "제안이 도착했습니다", en: "BIDS RECEIVED" },
  { ko: "조건을 확인합니다", en: "ELIGIBILITY CHECK" },
  { ko: "전문가가 배정되었습니다", en: "PLAYER ASSIGNED" },
] as const;

export function RoutingProof() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [played, setPlayedStage] = useState(0);
  const done = useRef(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    if (reduced) return;
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver((e) => {
      if (!e[0]?.isIntersecting || done.current) return;
      done.current = true;
      setPlayedStage(0);
      timers.current.push(window.setTimeout(() => setPlayedStage(1), 1100));
      timers.current.push(window.setTimeout(() => setPlayedStage(2), 2400));
    }, { threshold: 0.4 });
    io.observe(node);
    const t = timers;
    return () => { io.disconnect(); t.current.forEach(window.clearTimeout); t.current = []; };
  }, [reduced]);

  /* Reduced motion shows the settled result, with no cascading setState. */
  const stage = reduced ? 2 : played;
  const st = STAGES[stage];

  return (
    <section className={`${s.sec} ${s.secLine}`} aria-labelledby="proof-h">
      <div className="frame">
        <div className={s.head}>
          <h2 className={s.h} id="proof-h">제안은 경쟁합니다.<br />비교는 하지 않으셔도 됩니다.</h2>
          <p className={s.note}>자격과 마감, 예산을 먼저 거르고 남은 제안만 비교합니다.</p>
        </div>

        <div className={s.proof} ref={ref}>
          <div className={s.proofTop}>
            <span className={s.proofId}>의뢰 #{PROOF.id}</span>
            <span className={s.proofMeta}>{PROOF.categoryLabel}</span>
            <span className={s.proofMeta}>마감 {PROOF.deadlineHours}시간</span>
            <span className={s.proofState}>
              <span className={s.proofKo}>{st.ko}</span>
              <span className={s.proofEn}>{st.en}</span>
            </span>
          </div>

          <div className={s.rows}>
            {ORDER.map((c) => {
              const pick = stage >= 2 && c.bid.id === R.picked?.bid.id;
              const muted = (stage >= 1 && c.out) || (stage >= 2 && !pick);
              return (
                <div key={c.bid.id} className={`${s.row} ${muted ? s.rowMuted : ""} ${pick ? s.rowPick : ""}`}>
                  <span className={s.who}>
                    <span className={s.name}>
                      {c.person.name}
                      {pick ? <span className={s.pickTag}>배정</span> : null}
                    </span>
                    {stage >= 1 && c.out
                      ? <span className={s.out}>제외 · {c.out}</span>
                      : <span className={s.career}>{c.person.career}</span>}
                  </span>
                  <span className={s.price}>{won(c.bid.price)}</span>
                  <span className={s.hours}>{c.bid.hours}시간</span>
                </div>
              );
            })}
          </div>

          {stage >= 2 && R.picked ? (
            <div className={s.why}>
              <p className={s.whyTitle}>왜 이 전문가인가요?</p>
              <div className={s.whyGrid}>
                {R.reasons.map((r) => (
                  <span key={r} className={s.whyItem}>
                    <span className={s.whyMark} aria-hidden="true">▸</span>{r}
                  </span>
                ))}
              </div>
              <p className={s.whyFoot}>
                가장 싸거나 가장 빠른 제안이 자동으로 선택되지는 않습니다.
                결과의 최종 확인은 의뢰한 사람이 합니다.
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- *
 * A real transaction, with its real artifacts.
 * ---------------------------------------------------------------- */

export function CaseSection() {
  const q = QUESTS["0001"];
  const r = route(q);
  return (
    <section className={`${s.sec} ${s.secLine}`} aria-labelledby="case-h">
      <div className="frame">
        <div className={s.head}>
          <h2 className={s.h} id="case-h">실제로 오간 의뢰 한 건</h2>
          <p className={s.note}>건축·도면은 카파피가 거래 방식을 먼저 검증하고 있는 분야입니다.</p>
        </div>

        <div className={s.case}>
          <div>
            <div className={s.spec}>
              <p className="hud" style={{ color: "var(--faint)" }}>의뢰 #{q.id}</p>
              <h3 className={s.specTitle}>{q.title}</h3>
              <div className={s.mrow}><span className={s.mk}>분야</span><span className={s.mv}>{q.categoryLabel}</span></div>
              <div className={s.mrow}><span className={s.mk}>마감</span><span className={s.mv}>{q.deadlineLabel}</span></div>
              <div className={s.mrow}><span className={s.mk}>산출물</span><span className={s.mv}>{q.outputs.join(", ")}</span></div>
              <div className={s.mrow}><span className={s.mk}>예산 상한</span><span className={`${s.mv} ${s.mvNum}`}>{won(q.budget)}</span></div>
              <div className={s.mrow}><span className={s.mk}>보안</span><span className={s.mv}>보안 서약 필요</span></div>
              <div className={s.mrow}><span className={s.mk}>수정</span><span className={s.mv}>{q.revisionRule}</span></div>
            </div>
            <div className={s.cta}>
              <Link href={`/quest/${q.id}`} className={`${s.btn} ${s.btnLine}`}>이 의뢰 자세히 보기</Link>
            </div>
          </div>

          <div>
            <p className={s.label}>맡긴 자료</p>
            <div className={s.files}>
              {q.inputs.map((f) => (
                <div key={f.name} className={s.file}>
                  <span className={s.kind} aria-hidden="true">{f.kind}</span>
                  <span style={{ minWidth: 0 }}>
                    <span className={s.fname}>{f.name}</span>
                    <span className={s.fmeta}>{f.kind} · {f.size}</span>
                  </span>
                </div>
              ))}
            </div>

            <p className={s.label}>받은 결과</p>
            {q.result ? (
              <div className={s.result}>
                <div className={s.resultBody}>
                  {q.result.files.map((f) => (
                    <div key={f.name} className={s.file}>
                      <span className={s.kind} aria-hidden="true">{f.kind}</span>
                      <span style={{ minWidth: 0 }}>
                        <span className={s.fname}>{f.name}</span>
                        <span className={s.fmeta}>{f.kind} · {f.size}</span>
                      </span>
                    </div>
                  ))}
                </div>
                <div className={s.delivery}>
                  <span className={s.dItem}><span className={s.dk}>납품</span><span className={s.dv}>{q.result.at}</span></span>
                  <span className={s.dItem}><span className={s.dk}>마감 대비</span><span className={s.dv}>{q.result.earlyMinutes}분 일찍</span></span>
                  <span className={s.dItem}><span className={s.dk}>배정</span><span className={s.dv}>{r.picked?.person.name}</span></span>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- *
 * Deadline pressure, shown with a live clock.
 * ---------------------------------------------------------------- */

function Countdown({ hours }: { hours: number }) {
  const target = useRef<number | null>(null);
  const [ms, setMs] = useState<number | null>(null);
  useEffect(() => {
    target.current = Date.now() + hours * 3600_000;
    const tick = () => setMs((target.current ?? 0) - Date.now());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [hours]);
  if (ms === null) return <span className="num">—:—:—</span>;
  const total = Math.max(0, Math.floor(ms / 1000));
  const pad = (n: number) => String(n).padStart(2, "0");
  const coarse = `마감까지 약 ${Math.floor(total / 3600)}시간 ${Math.floor((total % 3600) / 60)}분 남음`;
  return (
    <>
      <span aria-hidden="true">{pad(Math.floor(total / 3600))}:{pad(Math.floor((total % 3600) / 60))}:{pad(total % 60)}</span>
      <span className="sr">{coarse}</span>
    </>
  );
}

export function UrgentSection() {
  const q = QUESTS["0211"];
  return (
    <section className={`${s.sec} ${s.secLine}`} aria-labelledby="urgent-h">
      <div className="frame">
        <div className={s.head}>
          <h2 className={s.h} id="urgent-h">오늘 안에 끝나야 하는 작업</h2>
          <p className={s.note}>마감이 짧으면 그 마감을 지킬 수 있는 제안만 비교 대상이 됩니다.</p>
        </div>
        <div className={s.urgentGrid}>
          <div>
            <p className={s.lead}>완료 시간은 금액만큼 실제 조건입니다</p>
            <p className={s.body}>
              12시간에 8만원과 4시간에 15만원은 다른 제안입니다.
              카파피의 모든 제안은 두 값을 함께 제출합니다.
            </p>
          </div>
          <Link href={`/board/${q.id}`} className={s.card}>
            <div className={s.cardTop}>
              <span className={s.cardId}>의뢰 #{q.id}</span>
              <span className={s.chipLine}>{q.categoryLabel}</span>
              <span className={s.chipDark}><Countdown hours={q.deadlineHours} /></span>
            </div>
            <h3 className={s.cardTitle}>{q.title}</h3>
            <p className={s.cardSum}>{q.summary}</p>
            <div className={s.cardMeta}>
              {q.reward ? (
                <span className={s.dItem}><span className={s.dk}>보수</span><span className={s.dv}>{won(q.reward[0])}–{won(q.reward[1])}</span></span>
              ) : null}
              <span className={s.dItem}><span className={s.dk}>완료</span><span className={s.dv}>{q.deadlineHours}시간 이내</span></span>
              <span className={s.dItem}><span className={s.dk}>제안</span><span className={s.dv}>{q.bids.length}건</span></span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- *
 * Result + the last decision, which stays with the person who paid.
 * ---------------------------------------------------------------- */

export function ResultSection() {
  const q = QUESTS["0182"];
  return (
    <section className={`${s.sec} ${s.secLine}`} aria-labelledby="result-h">
      <div className="frame">
        <div className={s.head}>
          <h2 className={s.h} id="result-h">마지막 판단은 의뢰한 사람이 합니다</h2>
          <p className={s.note}>카파피는 파일과 형식, 도착 시각까지만 확인합니다.</p>
        </div>
        <div className={s.resultGrid}>
          <div>
            <p className={s.lead}>확인하거나, 수정을 요청하거나</p>
            <p className={s.body}>
              수정 요청은 처음에 합의한 범위를 기준으로 합니다.
              그래서 맡기기 전에 산출물과 확인 기준을 먼저 정리합니다.
            </p>
            <div className={s.cta}>
              <Link href={`/quest/${q.id}`} className={`${s.btn} ${s.btnPrimary}`}>결과 화면 보기</Link>
            </div>
          </div>

          {q.result ? (
            <div className={s.result}>
              <div className={s.resultHead}>
                <p className={s.resultKo}>작업이 완료되었습니다</p>
                <p className={s.resultEn}>QUEST COMPLETE</p>
              </div>
              <div className={s.resultBody}>
                {q.result.files.map((f) => (
                  <div key={f.name} className={s.file}>
                    <span className={s.kind} aria-hidden="true">{f.kind}</span>
                    <span style={{ minWidth: 0 }}>
                      <span className={s.fname}>{f.name}</span>
                      <span className={s.fmeta}>{f.kind} · {f.size}</span>
                    </span>
                  </div>
                ))}
              </div>
              <div className={s.delivery}>
                <span className={s.dItem}><span className={s.dk}>납품</span><span className={s.dv}>{q.result.at}</span></span>
                <span className={s.dItem}><span className={s.dk}>마감 대비</span><span className={s.dv}>{q.result.earlyMinutes}분 일찍</span></span>
              </div>
              <div className={s.checks}>
                {q.result.checks.map((c, i) => (
                  <p key={c} className={s.check} style={{ ["--i" as string]: i }}>
                    <span className={s.tickMark} aria-hidden="true">✓</span>{c}
                  </p>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- *
 * One account. The proof is the list itself.
 * ---------------------------------------------------------------- */

export function AccountSection() {
  return (
    <section className={s.sec} aria-labelledby="acct-h">
      <div className="frame">
        <div className={s.head}>
          <h2 className={s.h} id="acct-h">같은 계정으로 작업을 받을 수도 있습니다</h2>
          <p className={s.note}>의뢰인 계정과 작업자 계정을 따로 만들지 않습니다.</p>
        </div>
        <div className={s.acct}>
          <div>
            <p className={s.lead}>역할은 의뢰마다 정해집니다</p>
            <p className={s.body}>
              어떤 의뢰에서는 맡기는 쪽이 되고, 다른 의뢰에서는 수행하는 쪽이 됩니다.
              계정을 바꾸거나 다시 가입할 필요는 없습니다.
            </p>
            <div className={s.cta}>
              <Link href="/board" className={`${s.btn} ${s.btnAccent}`}>작업 찾기</Link>
              <Link href="/my" className={`${s.btn} ${s.btnLine}`}>내 의뢰 보기</Link>
            </div>
          </div>

          <div className={s.acctBox}>
            <div className={s.acctRow}>
              <span className={s.acctId}>#0182</span>
              <span className={`${s.badge} ${s.badgeGm}`}>GM</span>
              <span className={s.acctWhat}>내가 맡긴 의뢰 · 완료</span>
            </div>
            <div className={s.acctRow}>
              <span className={s.acctId}>#0207</span>
              <span className={`${s.badge} ${s.badgePlayer}`}>PLAYER</span>
              <span className={s.acctWhat}>내가 수행 중인 작업</span>
            </div>
            <div className={s.acctRow}>
              <span className={s.acctId}>#0201</span>
              <span className={`${s.badge} ${s.badgeBid}`}>제안</span>
              <span className={s.acctWhat}>내가 제안을 보낸 의뢰</span>
            </div>
            <p className={s.acctFoot}>세 가지가 같은 기간에 동시에 성립합니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
