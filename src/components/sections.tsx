"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { QUESTS, route, won } from "@/lib/kapapi";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import s from "./sections.module.css";

const PROOF = QUESTS["0182"];
const R = route(PROOF);
const ORDER = [...R.ranked, ...R.dropped];

const STAGES = [
  { ko: "제안이 도착했습니다", en: "제안 도착" },
  { ko: "조건을 확인합니다", en: "조건 확인" },
  { ko: "추천이 준비되었습니다", en: "추천 준비" },
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

  const stage = reduced ? 2 : played;
  const st = STAGES[stage];

  return (
    <section className={`${s.sec} ${s.secLine}`} aria-labelledby="proof-h">
      <div className="frame">
        <div className={s.head}>
          <h2 className={s.h} id="proof-h">가격과 완료시간을 함께 봅니다.<br />카파피가 먼저 추천합니다.</h2>
          <p className={s.note}>자격·마감·예산을 거르고, 유사 업무 이력과 정시완료율까지 함께 봅니다. 추천을 확인한 뒤 진행할 작업자를 확정합니다.</p>
        </div>

        <div className={s.proof} ref={ref}>
          <div className={s.proofTop}>
            <span className={s.proofId}>업무 #{PROOF.id}</span>
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
                      {pick ? <span className={s.pickTag}>추천</span> : null}
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
              <p className={s.whyTitle}>왜 이 작업자를 추천하나요?</p>
              <div className={s.whyGrid}>
                {R.reasons.map((r) => (
                  <span key={r} className={s.whyItem}><span className={s.whyMark} aria-hidden="true">▸</span>{r}</span>
                ))}
              </div>
              <p className={s.whyFoot}>
                지금 단계의 카파피는 추천 근거를 보여주고 발주자가 확정합니다. 거래 데이터가 쌓일수록 이 선택과 복구를 더 많이 맡는 방향으로 발전합니다.
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function CaseSection() {
  const q = QUESTS["0001"];
  const r = route(q);
  return (
    <section className={`${s.sec} ${s.secLine}`} aria-labelledby="case-h">
      <div className="frame">
        <div className={s.head}>
          <h2 className={s.h} id="case-h">작은 사무부터 숙련 업무까지,<br />끝이 명확하면 거래할 수 있습니다.</h2>
          <p className={s.note}>카파피는 특정 업종 서비스가 아닙니다. 건축·도면은 창업자가 결과를 직접 판단할 수 있어 먼저 깊게 검증하는 고숙련 예시 중 하나입니다.</p>
        </div>

        <div className={s.case}>
          <div>
            <div className={s.spec}>
              <p className="hud" style={{ color: "var(--faint)" }}>업무 #{q.id}</p>
              <h3 className={s.specTitle}>{q.title}</h3>
              <div className={s.mrow}><span className={s.mk}>분야</span><span className={s.mv}>{q.categoryLabel}</span></div>
              <div className={s.mrow}><span className={s.mk}>마감</span><span className={s.mv}>{q.deadlineLabel}</span></div>
              <div className={s.mrow}><span className={s.mk}>산출물</span><span className={s.mv}>{q.outputs.join(", ")}</span></div>
              <div className={s.mrow}><span className={s.mk}>예산 상한</span><span className={`${s.mv} ${s.mvNum}`}>{won(q.budget)}</span></div>
              <div className={s.mrow}><span className={s.mk}>수정</span><span className={s.mv}>{q.revisionRule}</span></div>
            </div>
            <div className={s.cta}>
              <Link href={`/quest/${q.id}`} className={`${s.btn} ${s.btnLine}`}>완료된 업무 보기</Link>
              <Link href="/board" className={`${s.btn} ${s.btnPrimary}`}>열린 작업 보기</Link>
            </div>
          </div>

          <div>
            <p className={s.label}>맡긴 자료</p>
            <div className={s.files}>
              {q.inputs.map((f) => (
                <div key={f.name} className={s.file}>
                  <span className={s.kind} aria-hidden="true">{f.kind}</span>
                  <span style={{ minWidth: 0 }}><span className={s.fname}>{f.name}</span><span className={s.fmeta}>{f.kind} · {f.size}</span></span>
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
                      <span style={{ minWidth: 0 }}><span className={s.fname}>{f.name}</span><span className={s.fmeta}>{f.kind} · {f.size}</span></span>
                    </div>
                  ))}
                </div>
                <div className={s.delivery}>
                  <span className={s.dItem}><span className={s.dk}>납품</span><span className={s.dv}>{q.result.at}</span></span>
                  <span className={s.dItem}><span className={s.dk}>마감 대비</span><span className={s.dv}>{q.result.earlyMinutes}분 일찍</span></span>
                  <span className={s.dItem}><span className={s.dk}>작업자</span><span className={s.dv}>{r.picked?.person.name}</span></span>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

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
  return <><span aria-hidden="true">{pad(Math.floor(total / 3600))}:{pad(Math.floor((total % 3600) / 60))}:{pad(total % 60)}</span><span className="sr">{coarse}</span></>;
}

export function UrgentSection() {
  const q = QUESTS["0211"];
  return (
    <section className={`${s.sec} ${s.secLine}`} aria-labelledby="urgent-h">
      <div className="frame">
        <div className={s.head}>
          <h2 className={s.h} id="urgent-h">남는 시간도 시장의 조건이 됩니다</h2>
          <p className={s.note}>모든 제안은 가격과 실제 완료 약속 시간을 함께 냅니다. 긴급 업무에서는 지금 가능한 시간이 더 큰 가치가 됩니다.</p>
        </div>
        <div className={s.urgentGrid}>
          <div>
            <p className={s.lead}>₩80,000 · 12시간과 ₩150,000 · 4시간은 다른 제안입니다</p>
            <p className={s.body}>누군가는 오늘 저녁 시간이 비어 있고, 누군가는 내일 더 낮은 가격으로 끝낼 수 있습니다. 가격 × 완료시간은 파편화된 사람의 시간을 실제 거래 조건으로 만듭니다.</p>
          </div>
          <Link href={`/board/${q.id}`} className={s.card}>
            <div className={s.cardTop}>
              <span className={s.cardId}>업무 #{q.id}</span>
              <span className={s.chipLine}>{q.categoryLabel}</span>
              <span className={s.chipDark}><Countdown hours={q.deadlineHours} /></span>
            </div>
            <h3 className={s.cardTitle}>{q.title}</h3>
            <p className={s.cardSum}>{q.summary}</p>
            <div className={s.cardMeta}>
              {q.reward ? <span className={s.dItem}><span className={s.dk}>작업대금</span><span className={s.dv}>{won(q.reward[0])}–{won(q.reward[1])}</span></span> : null}
              <span className={s.dItem}><span className={s.dk}>완료시간</span><span className={s.dv}>{q.deadlineHours}시간 이내</span></span>
              <span className={s.dItem}><span className={s.dk}>제안</span><span className={s.dv}>{q.bids.length}건</span></span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ResultSection() {
  const q = QUESTS["0182"];
  return (
    <section className={`${s.sec} ${s.secLine}`} aria-labelledby="result-h">
      <div className="frame">
        <div className={s.head}>
          <h2 className={s.h} id="result-h">시장의 최종 단위는 완료된 결과</h2>
          <p className={s.note}>초기에는 발주자가 결과를 확인하고 수정 여부를 결정합니다. 반복되는 성공과 실패가 다음 추천의 근거가 됩니다.</p>
        </div>
        <div className={s.resultGrid}>
          <div>
            <p className={s.lead}>업무 완료가 다음 거래를 더 똑똑하게 만듭니다</p>
            <p className={s.body}>가격, 완료시간, 정시 여부, 수정, 실패와 복구 이력이 쌓일수록 카파피는 어떤 실행자가 어떤 일을 잘 끝내는지 더 정확히 알 수 있습니다.</p>
            <div className={s.cta}><Link href={`/quest/${q.id}`} className={`${s.btn} ${s.btnPrimary}`}>결과 화면 보기</Link></div>
          </div>

          {q.result ? (
            <div className={s.result}>
              <div className={s.resultHead}><p className={s.resultKo}>업무가 완료되었습니다</p><p className={s.resultEn}>업무 완료</p></div>
              <div className={s.resultBody}>
                {q.result.files.map((f) => <div key={f.name} className={s.file}><span className={s.kind} aria-hidden="true">{f.kind}</span><span style={{ minWidth: 0 }}><span className={s.fname}>{f.name}</span><span className={s.fmeta}>{f.kind} · {f.size}</span></span></div>)}
              </div>
              <div className={s.delivery}>
                <span className={s.dItem}><span className={s.dk}>납품</span><span className={s.dv}>{q.result.at}</span></span>
                <span className={s.dItem}><span className={s.dk}>마감 대비</span><span className={s.dv}>{q.result.earlyMinutes}분 일찍</span></span>
              </div>
              <div className={s.checks}>{q.result.checks.map((c, i) => <p key={c} className={s.check} style={{ ["--i" as string]: i }}><span className={s.tickMark} aria-hidden="true">✓</span>{c}</p>)}</div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/**
 * D-035: what the 발주자 actually experiences — 업무 입력 → KAPAPI → 결과.
 *
 * Every value here is the real fixture and the real `route()` output. The
 * assignment rationale is shown as information about a decision KAPAPI already
 * made, not as a comparison the client is being asked to resolve.
 */
export function ResultFlowSection() {
  const q = QUESTS["0182"];
  const r = route(q);
  const picked = r.picked;
  const result = q.result;
  if (!picked || !result) return null;

  return (
    <section className={`${s.sec} ${s.secLine}`} aria-labelledby="flow-h">
      <div className="frame">
        <div className={s.head}>
          <h2 className={s.h} id="flow-h">올리고 나면, 결과가 옵니다</h2>
          <p className={s.note}>작업자를 찾고 비교하고 고르는 과정은 발주자가 하지 않습니다. 아래는 실제로 오간 업무 #{q.id}의 기록입니다.</p>
        </div>

        <div className={s.flow}>
          <div className={s.step}>
            <p className={s.stepNo}>01</p>
            <p className={s.stepKo}>업무를 올립니다</p>
            <p className={s.stepSub}>{q.title}</p>
            <div className={s.stepFiles}>
              {q.inputs.map((f) => (
                <span key={f.name} className={s.stepFile}>
                  <span className={s.kind} aria-hidden="true">{f.kind}</span>
                  {f.name}
                </span>
              ))}
            </div>
            <p className={s.stepMeta}>마감 {q.deadlineHours}시간 · 예산 상한 {won(q.budget)}</p>
          </div>

          <div className={`${s.step} ${s.stepMid}`}>
            <p className={s.stepNo}>02</p>
            <p className={s.stepKo}>카파피가 배정합니다</p>
            <p className={s.stepSub}>{picked.person.name} · {picked.person.career}</p>
            <div className={s.stepWhy}>
              {r.reasons.slice(0, 3).map((x) => (
                <p key={x} className={s.stepWhyRow}><span className={s.whyMark} aria-hidden="true">▸</span>{x}</p>
              ))}
            </div>
            <p className={s.stepMeta}>{won(picked.bid.price)} · {picked.bid.hours}시간 완료 제안</p>
          </div>

          <div className={s.step}>
            <p className={s.stepNo}>03</p>
            <p className={s.stepKo}>결과가 도착합니다</p>
            <p className={s.stepSub}>{result.files[0].name}</p>
            <div className={s.stepChecks}>
              {result.checks.map((c) => (
                <p key={c} className={s.stepCheck}><span className={s.tickMark} aria-hidden="true">✓</span>{c}</p>
              ))}
            </div>
            <p className={s.stepMeta}>{result.at} 도착 · 마감보다 {result.earlyMinutes}분 일찍</p>
          </div>
        </div>

        <p className={s.flowFoot}>
          결과를 받고 확인하거나 수정을 요청하는 것은 발주자가 합니다. 카파피는 파일과 형식, 도착 시각까지만 확인하며 완료를 보장하지 않습니다.
        </p>
      </div>
    </section>
  );
}

export function EvolutionSection() {
  return (
    <section className={`${s.sec} ${s.secLine}`} aria-labelledby="evo-h">
      <div className="frame">
        <div className={s.head}>
          <h2 className={s.h} id="evo-h">시장은 시작점입니다.<br />목적지는 결과입니다.</h2>
          <p className={s.note}>자동배정을 먼저 가정하지 않습니다. 완료된 업무가 쌓여야 추천이 좋아지고, 추천이 검증돼야 배정과 복구를 더 맡을 수 있습니다.</p>
        </div>
        <div className={s.acct}>
          <div>
            <p className={s.lead}>PEOPLE PICK WORK → WORK CREATES DATA</p>
            <p className={s.body}>거래 데이터가 신뢰를 만들고, 신뢰가 추천과 라우팅을 가능하게 합니다. 충분히 검증된 업무부터 카파피가 실행의 중간을 더 많이 맡습니다.</p>
          </div>
          <div className={s.acctBox}>
            <div className={s.acctRow}><span className={s.acctId}>01</span><span className={`${s.badge} ${s.badgeBid}`}>MARKET</span><span className={s.acctWhat}>업무 · 가격 · 완료시간</span></div>
            <div className={s.acctRow}><span className={s.acctId}>02</span><span className={`${s.badge} ${s.badgePlayer}`}>TRUST</span><span className={s.acctWhat}>완료 · 정시 · 수정 · 실패</span></div>
            <div className={s.acctRow}><span className={s.acctId}>03</span><span className={`${s.badge} ${s.badgeGm}`}>ROUTE</span><span className={s.acctWhat}>추천 · 배정 · 대체 · 복구</span></div>
            <p className={s.acctFoot}>장기 실행 자원: HUMAN WORKER · AI · AUTOMATION · SPECIALIST PARTNER · HYBRID</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AccountSection() {
  return (
    <section className={s.sec} aria-labelledby="acct-h">
      <div className="frame">
        <div className={s.head}>
          <h2 className={s.h} id="acct-h">일을 맡기던 사람이, 다른 일을 할 수도 있습니다</h2>
          <p className={s.note}>발주자 계정과 작업자 계정을 따로 만들지 않습니다. 역할은 업무마다 달라집니다.</p>
        </div>
        <div className={s.acct}>
          <div>
            <p className={s.lead}>작업이 먼저, 역할은 그 다음</p>
            <p className={s.body}>어떤 업무에서는 맡기는 쪽이고, 다른 업무에서는 수행하는 쪽입니다. 같은 계정 안에서 자연스럽게 이어집니다.</p>
            <div className={s.cta}>
              <Link href="/board" className={`${s.btn} ${s.btnAccent}`}>작업 찾기</Link>
              <Link href="/my" className={`${s.btn} ${s.btnLine}`}>내 업무 보기</Link>
            </div>
          </div>
          <div className={s.acctBox}>
            <div className={s.acctRow}><span className={s.acctId}>#0182</span><span className={`${s.badge} ${s.badgeGm}`}>발주자</span><span className={s.acctWhat}>내가 맡긴 업무 · 완료</span></div>
            <div className={s.acctRow}><span className={s.acctId}>#0207</span><span className={`${s.badge} ${s.badgePlayer}`}>작업자</span><span className={s.acctWhat}>내가 수행 중인 업무</span></div>
            <div className={s.acctRow}><span className={s.acctId}>#0201</span><span className={`${s.badge} ${s.badgeBid}`}>제안 참여</span><span className={s.acctWhat}>내가 제안을 보낸 업무</span></div>
            <p className={s.acctFoot}>세 가지가 같은 계정에서 동시에 성립합니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
