"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { useDemo } from "@/lib/demo";
import { ME, PEOPLE, pct, roleIn, route, won, type QuestState } from "@/lib/kapapi";
import s from "@/components/app.module.css";

const STAGES = [
  { st: "ASSIGNED", ko: "배정" },
  { st: "IN_PROGRESS", ko: "작업 중" },
  { st: "DELIVERED", ko: "결과 도착" },
  { st: "COMPLETE", ko: "완료" },
] as const;

/** Scripted so a reviewer never waits on a real marketplace. */
const SCRIPT: { at: number; st: QuestState; ko: string; en: string }[] = [
  { at: 900, st: "BIDDING", ko: "제안이 도착하고 있습니다", en: "BIDS ARRIVING" },
  { at: 3200, st: "ROUTING", ko: "조건을 확인하고 있습니다", en: "ELIGIBILITY CHECK" },
  { at: 4600, st: "ASSIGNED", ko: "전문가가 배정되었습니다", en: "PLAYER ASSIGNED" },
  { at: 6000, st: "IN_PROGRESS", ko: "작업을 시작했습니다", en: "WORK STARTED" },
  { at: 9000, st: "DELIVERED", ko: "결과 파일이 도착했습니다", en: "RESULT READY" },
];

export default function QuestPage() {
  const { id } = useParams<{ id: string }>();
  const { quests, setQuestState, accept, revise } = useDemo();
  const q = quests[id];
  const timers = useRef<number[]>([]);
  const [revising, setRevising] = useState(false);

  const clear = useCallback(() => {
    timers.current.forEach(window.clearTimeout);
    timers.current = [];
  }, []);
  const state = q?.state;

  useEffect(() => {
    if (!q || !["OPEN", "BIDDING", "ROUTING"].includes(q.state)) return;
    clear();
    SCRIPT.forEach((e) => {
      timers.current.push(
        window.setTimeout(() => setQuestState(q.id, e.st, { at: "방금", ko: e.ko, en: e.en }), e.at),
      );
    });
    return clear;
    // Re-arm only when the quest identity changes, not on every scripted step.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (state !== "REVISION" || !q) return;
    const t = window.setTimeout(
      () => setQuestState(q.id, "DELIVERED", { at: "방금", ko: "수정본이 도착했습니다", en: "REVISED FILE" }),
      3000,
    );
    return () => window.clearTimeout(t);
  }, [state, q, setQuestState]);

  if (!q) {
    return (
      <div className={`frame ${s.confirm}`}>
        <h1 className={s.confirmTitle}>의뢰를 찾을 수 없습니다</h1>
        <div className={s.confirmActs}>
          <Link href="/my" className={`${s.btn} ${s.btnLine}`}>내 의뢰로</Link>
        </div>
      </div>
    );
  }

  const role = roleIn(ME, q);
  const isGm = role === "GM";
  const r = route(q);
  const assignee = q.assigneeId ? PEOPLE[q.assigneeId] : undefined;
  const issuer = PEOPLE[q.issuerId];
  const routing = ["OPEN", "BIDDING", "ROUTING"].includes(q.state);
  const delivered = q.state === "DELIVERED";
  const done = q.state === "COMPLETE";
  const stageIdx = STAGES.findIndex((x) => x.st === q.state);

  function skip() {
    clear();
    setQuestState(q.id, "ASSIGNED", { at: "방금", ko: "전문가가 배정되었습니다", en: "PLAYER ASSIGNED" });
    setQuestState(q.id, "IN_PROGRESS", { at: "방금", ko: "작업을 시작했습니다", en: "WORK STARTED" });
    setQuestState(q.id, "DELIVERED", { at: "방금", ko: "결과 파일이 도착했습니다", en: "RESULT READY" });
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
        <Link href="/my">내 의뢰</Link><span aria-hidden="true">/</span><span>의뢰 #{q.id}</span>
      </p>

      <div className={s.head}>
        <h1 className={s.title}>{q.title}</h1>
        <div className={s.chips}>
          <span className={s.chip}>{q.categoryLabel}</span>
          <span className={s.chip}>마감 {q.deadlineLabel}</span>
          {q.nda ? <span className={s.chip}>보안 서약</span> : null}
          <span className={`${s.chip} ${done ? s.chipOk : s.chipAccent}`}>
            <span className={s.dot} aria-hidden="true" />
            {routing ? "배정 중" : q.state === "IN_PROGRESS" ? "작업 중" : delivered ? "결과 도착" : q.state === "REVISION" ? "수정 중" : "완료"}
          </span>
          {role !== "NONE" ? (
            <span className={s.chip}>이 의뢰에서 나는 {isGm ? "맡긴 쪽" : "수행하는 쪽"}</span>
          ) : null}
        </div>
      </div>

      <div className={s.grid}>
        <div className={s.stack}>
          {routing ? (
            <section>
              <div className={s.panelHead}>
                <h2 className={s.panelTitle}>카파피가 배정하고 있습니다</h2>
                <span className={s.panelEn}>ROUTING</span>
              </div>
              <div className={s.work}>
                <div className={s.workTop}>
                  <span className={s.workId}>의뢰 #{q.id}</span>
                  <span className={s.workMeta}>제안 {q.bids.length}건</span>
                </div>
                {events}
              </div>
              <div className={s.acts} style={{ marginTop: 16 }}>
                <button type="button" className={`${s.btn} ${s.btnLine}`} onClick={skip}>결과까지 건너뛰기</button>
                <p className={s.hint} style={{ alignSelf: "center" }}>
                  실제 서비스에서는 결과가 준비되면 알림을 받습니다.
                </p>
              </div>
            </section>
          ) : null}

          {assignee && !routing ? (
            <section>
              <div className={s.panelHead}>
                <h2 className={s.panelTitle}>{isGm ? "배정된 전문가" : "이 의뢰를 맡긴 사람"}</h2>
                <span className={s.panelEn}>{isGm ? "PLAYER" : "GM"}</span>
              </div>
              <div className={s.trust}>
                <p className={s.trustName}>{isGm ? assignee.name : issuer.name}</p>
                <p className={s.trustCareer}>{isGm ? assignee.career : issuer.career}</p>
                {isGm ? (
                  <div className={s.stats}>
                    <span className={s.stat}><span className={s.sk}>같은 유형</span><span className={s.sv}>{assignee.history[q.category] ?? 0}건</span></span>
                    <span className={s.stat}><span className={s.sk}>정시 납품</span><span className={s.sv}>{pct(assignee.onTime)}</span></span>
                    <span className={s.stat}><span className={s.sk}>수정 요청</span><span className={s.sv}>{pct(assignee.revision)}</span></span>
                    <span className={s.stat}><span className={s.sk}>완료</span><span className={s.sv}>{assignee.done}건</span></span>
                  </div>
                ) : null}
                {isGm && r.reasons.length ? (
                  <div className={s.note}>
                    <strong style={{ color: "var(--ink)" }}>왜 이 전문가인가요?</strong>
                    <div className={s.list} style={{ marginTop: 8 }}>
                      {r.reasons.map((x) => (
                        <p key={x} className={s.item}><span className={s.mark} aria-hidden="true">▸</span>{x}</p>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </section>
          ) : null}

          {!routing ? (
            <section>
              <div className={s.panelHead}>
                <h2 className={s.panelTitle}>작업 진행 상황</h2>
                <span className={s.panelEn}>WORKROOM</span>
              </div>
              <div className={s.work}>
                <div className={s.workTop}>
                  <span className={s.workId}>의뢰 #{q.id}</span>
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
                <h2 className={s.panelTitle}>{done ? "완료된 의뢰" : "결과가 도착했습니다"}</h2>
                <span className={s.panelEn}>{done ? "QUEST COMPLETE" : "RESULT READY"}</span>
              </div>
              <div className={s.result}>
                <div className={s.resultHead}>
                  <p className={s.resultKo}>{done ? "작업이 완료되었습니다" : "결과 파일이 도착했습니다"}</p>
                  <p className={s.resultEn}>{done ? "QUEST COMPLETE" : "FILE DELIVERED"}</p>
                </div>
                <div className={s.section}>
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
                <div className={s.rowMeta}>
                  <span className={s.stat}><span className={s.sk}>납품</span><span className={s.sv}>{q.result.at}</span></span>
                  <span className={s.stat}><span className={s.sk}>마감 대비</span><span className={s.sv}>{q.result.earlyMinutes}분 일찍</span></span>
                </div>
                <div className={s.checks}>
                  {q.result.checks.map((c) => (
                    <p key={c} className={s.check}><span className={s.tickMark} aria-hidden="true">✓</span>{c}</p>
                  ))}
                </div>
                {isGm && !done ? (
                  <div className={s.resultActs}>
                    <button type="button" className={`${s.btn} ${s.btnAccent}`} onClick={() => accept(q.id)}>결과 확인</button>
                    <button type="button" className={`${s.btn} ${s.btnLine}`} onClick={() => setRevising((v) => !v)} aria-expanded={revising}>수정 요청</button>
                  </div>
                ) : null}
              </div>

              {revising && isGm && !done ? (
                <div className={s.card} style={{ marginTop: 16 }}>
                  <p className={s.cardTitle}>어떤 확인 기준이 맞지 않았나요?</p>
                  <div className={s.list}>
                    {q.accept.map((a) => (
                      <p key={a} className={s.item}><span className={s.mark} aria-hidden="true">·</span>{a}</p>
                    ))}
                  </div>
                  <div className={s.acts} style={{ marginTop: 16 }}>
                    <button type="button" className={`${s.btn} ${s.btnPrimary}`} onClick={() => { revise(q.id); setRevising(false); }}>
                      수정 요청 보내기
                    </button>
                    <button type="button" className={`${s.btn} ${s.btnGhost}`} onClick={() => setRevising(false)}>취소</button>
                  </div>
                  <p className={s.note}>
                    수정 요청은 처음에 합의한 범위를 기준으로 합니다. 이 의뢰의 수정 범위는 {q.revisionRule}입니다.
                  </p>
                </div>
              ) : null}
            </section>
          ) : null}

          {q.state === "REVISION" ? (
            <section className={s.card}>
              <p style={{ fontWeight: 650 }}>수정을 요청했습니다</p>
              <p className={s.note}>합의한 범위 안에서 다시 작업하고 있습니다. 수정본이 도착하면 다시 확인하실 수 있습니다.</p>
            </section>
          ) : null}
        </div>

        <aside className={s.aside}>
          <div className={s.card}>
            <p className={s.cardTitle}>작업 범위</p>
            <div className={s.list}>
              {q.scope.map((l) => (<p key={l} className={s.item}><span className={s.mark} aria-hidden="true">·</span>{l}</p>))}
            </div>
          </div>
          <div className={s.card}>
            <p className={s.cardTitle}>확인 기준</p>
            <div className={s.list}>
              {q.accept.map((l) => (<p key={l} className={s.item}><span className={s.mark} aria-hidden="true">·</span>{l}</p>))}
            </div>
            <p className={s.note}>제출 형식 {q.outputs.join(", ")} · {q.revisionRule}</p>
          </div>
          {q.inputs.length ? (
            <div className={s.card}>
              <p className={s.cardTitle}>맡긴 자료</p>
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
