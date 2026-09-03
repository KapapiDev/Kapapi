"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { useDemo } from "@/lib/demo";
import { ME, PEOPLE, pct, roleIn, route, won } from "@/lib/kapapi";
import s from "@/components/app.module.css";

const STAGES = [
  { st: "ASSIGNED", ko: "배정 완료" },
  { st: "IN_PROGRESS", ko: "작업 중" },
  { st: "DELIVERED", ko: "결과 도착" },
  { st: "COMPLETE", ko: "업무 완료" },
] as const;

export default function QuestPage() {
  const { id } = useParams<{ id: string }>();
  const { quests, setQuestState, accept, revise } = useDemo();
  const q = quests[id];
  const timers = useRef<number[]>([]);
  const [revising, setRevising] = useState(false);
  const [showAlternatives, setShowAlternatives] = useState(false);

  const clear = useCallback(() => {
    timers.current.forEach(window.clearTimeout);
    timers.current = [];
  }, []);

  const state = q?.state;

  useEffect(() => {
    if (!q || q.state !== "OPEN") return;
    clear();
    timers.current.push(window.setTimeout(
      () => setQuestState(q.id, "BIDDING", { at: "방금", ko: "제안이 도착하고 있습니다", en: "제안 도착" }),
      800,
    ));
    timers.current.push(window.setTimeout(
      () => setQuestState(q.id, "ROUTING", { at: "방금", ko: "카파피 추천이 준비되었습니다", en: "추천 준비" }),
      2500,
    ));
    return clear;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (state !== "REVISION" || !q) return;
    const t = window.setTimeout(
      () => setQuestState(q.id, "DELIVERED", { at: "방금", ko: "수정본이 도착했습니다", en: "수정본 도착" }),
      3000,
    );
    return () => window.clearTimeout(t);
  }, [state, q, setQuestState]);

  if (!q) {
    return (
      <div className={`frame ${s.confirm}`}>
        <h1 className={s.confirmTitle}>업무를 찾을 수 없습니다</h1>
        <div className={s.confirmActs}>
          <Link href="/my" className={`${s.btn} ${s.btnLine}`}>내 업무로</Link>
        </div>
      </div>
    );
  }

  const role = roleIn(ME, q);
  // Role is CLIENT | WORKER | PROPOSER | NONE — the GM/PLAYER names are gone.
  const isClient = role === "CLIENT";
  const r = route(q);
  const recommended = r.picked;
  const assignee = q.assigneeId ? PEOPLE[q.assigneeId] : undefined;
  const issuer = PEOPLE[q.issuerId];
  const waiting = q.state === "OPEN" || q.state === "BIDDING";
  const recommendationReady = q.state === "ROUTING";
  const assigned = ["ASSIGNED", "IN_PROGRESS", "DELIVERED", "REVISION", "COMPLETE"].includes(q.state);
  const delivered = q.state === "DELIVERED";
  const done = q.state === "COMPLETE";
  const stageIdx = STAGES.findIndex((x) => x.st === q.state);

  function confirmRecommendation() {
    if (!recommended) return;
    clear();
    setQuestState(q.id, "ASSIGNED", { at: "방금", ko: `${recommended.person.name} 님으로 확정했습니다`, en: "발주자 확정" });
    timers.current.push(window.setTimeout(
      () => setQuestState(q.id, "IN_PROGRESS", { at: "방금", ko: "작업을 시작했습니다", en: "작업 시작" }),
      900,
    ));
    timers.current.push(window.setTimeout(
      () => setQuestState(q.id, "DELIVERED", { at: "방금", ko: "결과 파일이 도착했습니다", en: "결과 도착" }),
      3800,
    ));
  }

  function finishDemo() {
    if (!recommended) return;
    clear();
    setQuestState(q.id, "ASSIGNED", { at: "방금", ko: `${recommended.person.name} 님으로 확정했습니다`, en: "발주자 확정" });
    window.setTimeout(() => setQuestState(q.id, "IN_PROGRESS", { at: "방금", ko: "작업을 시작했습니다", en: "작업 시작" }), 0);
    window.setTimeout(() => setQuestState(q.id, "DELIVERED", { at: "방금", ko: "결과 파일이 도착했습니다", en: "결과 도착" }), 20);
  }

  const events = (
    <div className={s.events}>
      {q.events.map((e, i) => (
        <div key={`${e.at}-${e.en}-${i}`} className={s.ev}>
          <span className={s.evAt}>{e.at}</span>
          <span className={s.evRail} aria-hidden="true">
            <span className={`${s.evDot} ${i === q.events.length - 1 ? s.evNow : ""}`} />
            {i < q.events.length - 1 ? <span className={s.evLine} /> : null}
          </span>
          <span>
            <span className={s.evKo}>{e.ko}</span>
            <span className={s.evEn}>{e.en}</span>
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className={`frame ${s.wrap}`}>
      <p className={s.crumb}>
        <Link href="/my">내 업무</Link><span aria-hidden="true">/</span><span>업무 #{q.id}</span>
      </p>

      <div className={s.head}>
        <h1 className={s.title}>{q.title}</h1>
        <div className={s.chips}>
          <span className={s.chip}>{q.categoryLabel}</span>
          <span className={s.chip}>마감 {q.deadlineLabel}</span>
          {q.nda ? <span className={s.chip}>보안 서약</span> : null}
          <span className={`${s.chip} ${done ? s.chipOk : s.chipAccent}`}>
            <span className={s.dot} aria-hidden="true" />
            {waiting ? "제안 받는 중" : recommendationReady ? "추천 확인" : q.state === "IN_PROGRESS" || q.state === "ASSIGNED" ? "작업 중" : delivered ? "결과 도착" : q.state === "REVISION" ? "수정 중" : "업무 완료"}
          </span>
          {role !== "NONE" ? <span className={s.chip}>이 업무에서 나는 {isClient ? "발주자" : "작업자"}</span> : null}
        </div>
      </div>

      <div className={s.grid}>
        <div className={s.stack}>
          {waiting ? (
            <section>
              <div className={s.panelHead}>
                <h2 className={s.panelTitle}>제안을 받고 있습니다</h2>
                <span className={s.panelEn}>제안 모집</span>
              </div>
              <div className={s.work}>
                <div className={s.workTop}>
                  <span className={s.workId}>업무 #{q.id}</span>
                  <span className={s.workMeta}>현재 제안 {q.bids.length}건</span>
                </div>
                {events}
              </div>
              <p className={s.note} style={{ marginTop: 14 }}>조건을 충족한 제안이 모이면 카파피가 가격, 완료시간과 관련 작업이력을 함께 보고 추천합니다.</p>
            </section>
          ) : null}

          {recommendationReady && recommended ? (
            <section>
              <div className={s.panelHead}>
                <h2 className={s.panelTitle}>카파피 추천</h2>
                <span className={s.panelEn}>추천</span>
              </div>
              <div className={s.trust}>
                <div className={s.chips} style={{ marginBottom: 12 }}>
                  <span className={`${s.chip} ${s.chipAccent}`}>추천</span>
                  <span className={s.chip}>{won(recommended.bid.price)}</span>
                  <span className={s.chip}>{recommended.bid.hours}시간 완료</span>
                </div>
                <p className={s.trustName}>{recommended.person.name}</p>
                <p className={s.trustCareer}>{recommended.person.career}</p>
                <div className={s.stats}>
                  <span className={s.stat}><span className={s.sk}>유사 업무</span><span className={s.sv}>{recommended.relevant}건</span></span>
                  <span className={s.stat}><span className={s.sk}>정시완료</span><span className={s.sv}>{pct(recommended.person.onTime)}</span></span>
                  <span className={s.stat}><span className={s.sk}>수정 요청</span><span className={s.sv}>{pct(recommended.person.revision)}</span></span>
                </div>
                <div className={s.note}>
                  <strong style={{ color: "var(--ink)" }}>왜 추천하나요?</strong>
                  <div className={s.list} style={{ marginTop: 8 }}>
                    {r.reasons.map((x) => <p key={x} className={s.item}><span className={s.mark} aria-hidden="true">▸</span>{x}</p>)}
                  </div>
                </div>
                {isClient ? (
                  <div className={s.acts} style={{ marginTop: 18 }}>
                    <button type="button" className={`${s.btn} ${s.btnAccent}`} onClick={confirmRecommendation}>이 작업자로 진행</button>
                    <button type="button" className={`${s.btn} ${s.btnLine}`} onClick={() => setShowAlternatives((v) => !v)} aria-expanded={showAlternatives}>다른 제안 보기</button>
                    <button type="button" className={`${s.btn} ${s.btnGhost}`} onClick={finishDemo}>결과까지 빠르게 보기</button>
                  </div>
                ) : null}
              </div>

              {showAlternatives ? (
                <div className={s.cards} style={{ marginTop: 16 }}>
                  {r.ranked.slice(1).map((c) => (
                    <div key={c.bid.id} className={s.card}>
                      <p className={s.cardTitle}>{c.person.name}</p>
                      <p className={s.note}>{c.person.career}</p>
                      <div className={s.chips}>
                        <span className={s.chip}>{won(c.bid.price)}</span>
                        <span className={s.chip}>{c.bid.hours}시간</span>
                        <span className={s.chip}>유사 업무 {c.relevant}건</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </section>
          ) : null}

          {assignee && assigned ? (
            <section>
              <div className={s.panelHead}>
                <h2 className={s.panelTitle}>{isClient ? "확정된 작업자" : "이 업무의 발주자"}</h2>
                <span className={s.panelEn}>{isClient ? "작업자" : "발주자"}</span>
              </div>
              <div className={s.trust}>
                <p className={s.trustName}>{isClient ? assignee.name : issuer.name}</p>
                <p className={s.trustCareer}>{isClient ? assignee.career : issuer.career}</p>
                {isClient ? (
                  <div className={s.stats}>
                    <span className={s.stat}><span className={s.sk}>유사 업무</span><span className={s.sv}>{assignee.history[q.category] ?? 0}건</span></span>
                    <span className={s.stat}><span className={s.sk}>정시완료</span><span className={s.sv}>{pct(assignee.onTime)}</span></span>
                    <span className={s.stat}><span className={s.sk}>수정 요청</span><span className={s.sv}>{pct(assignee.revision)}</span></span>
                  </div>
                ) : null}
              </div>
            </section>
          ) : null}

          {assigned ? (
            <section>
              <div className={s.panelHead}>
                <h2 className={s.panelTitle}>작업 진행 상황</h2>
                <span className={s.panelEn}>진행 상태</span>
              </div>
              <div className={s.work}>
                <div className={s.workTop}>
                  <span className={s.workId}>업무 #{q.id}</span>
                  <span className={s.workMeta}>마감 {q.deadlineLabel}</span>
                </div>
                <div className={s.stages}>
                  {STAGES.map((x, i) => (
                    <span key={x.st} className={`${s.stage} ${i < stageIdx ? s.stageDone : i === stageIdx ? s.stageNow : ""}`}>{x.ko}</span>
                  ))}
                </div>
                {events}
              </div>
            </section>
          ) : null}

          {(delivered || done) && q.result ? (
            <section>
              <div className={s.panelHead}>
                <h2 className={s.panelTitle}>{done ? "완료된 업무" : "결과가 도착했습니다"}</h2>
                <span className={s.panelEn}>{done ? "업무 완료" : "결과 도착"}</span>
              </div>
              <div className={s.result}>
                <div className={s.resultHead}>
                  <p className={s.resultKo}>{done ? "업무가 완료되었습니다" : "결과 파일이 도착했습니다"}</p>
                  <p className={s.resultEn}>{done ? "업무 완료" : "파일 전달"}</p>
                </div>
                <div className={s.section}>
                  {q.result.files.map((f) => (
                    <div key={f.name} className={s.file}>
                      <span className={s.kind} aria-hidden="true">{f.kind}</span>
                      <span style={{ minWidth: 0 }}><span className={s.fname}>{f.name}</span><span className={s.fmeta}>{f.kind} · {f.size}</span></span>
                    </div>
                  ))}
                </div>
                <div className={s.rowMeta}>
                  <span className={s.stat}><span className={s.sk}>납품</span><span className={s.sv}>{q.result.at}</span></span>
                  <span className={s.stat}><span className={s.sk}>마감 대비</span><span className={s.sv}>{q.result.earlyMinutes}분 일찍</span></span>
                </div>
                <div className={s.checks}>
                  {q.result.checks.map((c) => <p key={c} className={s.check}><span className={s.tickMark} aria-hidden="true">✓</span>{c}</p>)}
                </div>
                {isClient && !done ? (
                  <div className={s.resultActs}>
                    <button type="button" className={`${s.btn} ${s.btnAccent}`} onClick={() => accept(q.id)}>결과 확인</button>
                    <button type="button" className={`${s.btn} ${s.btnLine}`} onClick={() => setRevising((v) => !v)} aria-expanded={revising}>수정 요청</button>
                  </div>
                ) : null}
              </div>

              {revising && isClient && !done ? (
                <div className={s.card} style={{ marginTop: 16 }}>
                  <p className={s.cardTitle}>어떤 확인 기준이 맞지 않았나요?</p>
                  <div className={s.list}>{q.accept.map((a) => <p key={a} className={s.item}><span className={s.mark} aria-hidden="true">·</span>{a}</p>)}</div>
                  <div className={s.acts} style={{ marginTop: 16 }}>
                    <button type="button" className={`${s.btn} ${s.btnPrimary}`} onClick={() => { revise(q.id); setRevising(false); }}>수정 요청 보내기</button>
                    <button type="button" className={`${s.btn} ${s.btnGhost}`} onClick={() => setRevising(false)}>취소</button>
                  </div>
                  <p className={s.note}>수정 요청은 처음 합의한 범위를 기준으로 합니다. {q.revisionRule}</p>
                </div>
              ) : null}
            </section>
          ) : null}

          {q.state === "REVISION" ? (
            <section className={s.card}>
              <p style={{ fontWeight: 650 }}>수정을 요청했습니다</p>
              <p className={s.note}>합의한 범위 안에서 다시 작업하고 있습니다. 수정본이 도착하면 다시 확인할 수 있습니다.</p>
            </section>
          ) : null}
        </div>

        <aside className={s.aside}>
          <div className={s.card}>
            <p className={s.cardTitle}>작업 범위</p>
            <div className={s.list}>{q.scope.map((l) => <p key={l} className={s.item}><span className={s.mark} aria-hidden="true">·</span>{l}</p>)}</div>
          </div>
          <div className={s.card}>
            <p className={s.cardTitle}>확인 기준</p>
            <div className={s.list}>{q.accept.map((l) => <p key={l} className={s.item}><span className={s.mark} aria-hidden="true">·</span>{l}</p>)}</div>
            <p className={s.note}>제출 형식 {q.outputs.join(", ")} · {q.revisionRule}</p>
          </div>
          {q.inputs.length ? (
            <div className={s.card}>
              <p className={s.cardTitle}>맡긴 자료</p>
              <div className={s.files}>{q.inputs.map((f) => <div key={f.name} className={s.file}><span className={s.kind} aria-hidden="true">{f.kind}</span><span style={{ minWidth: 0 }}><span className={s.fname}>{f.name}</span><span className={s.fmeta}>{f.kind} · {f.size}</span></span></div>)}</div>
            </div>
          ) : null}
          <div className={s.card}>
            <p className={s.cardTitle}>거래 조건</p>
            <div className={s.list}>
              <p className={s.item}><span className={s.mark} aria-hidden="true">·</span>예산 상한 {won(q.budget)}</p>
              <p className={s.item}><span className={s.mark} aria-hidden="true">·</span>{q.nda ? "보안 서약자만 참여" : "별도 보안 요건 없음"}</p>
              <p className={s.item}><span className={s.mark} aria-hidden="true">·</span>결과 확인은 {issuer.name} 님이 합니다</p>
            </div>
            <p className={s.note}>프로토타입에서는 실제 결제와 대금 보관이 이루어지지 않습니다.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
