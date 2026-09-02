"use client";

import NumberFlow from "@number-flow/react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { ResultObject, STAGES, Timeline, TrustStrip, stateLabel } from "@/components/quest";
import { RoutingPanel } from "@/components/routing-panel";
import { Button, Chip, FileRow } from "@/components/ui";
import { CURRENT_USER_ID, USERS, useDemo } from "@/lib/demo-store";
import { won } from "@/lib/format";
import { roleInQuest, roleSentence } from "@/lib/roles";
import type { QuestState } from "@/lib/types";
import s from "./quest.module.css";

/** Scripted demo advance, so a reviewer never waits on a real marketplace. */
const SCRIPT: { state: QuestState; at: number; label: string; detail: string }[] = [
  { at: 800, state: "BIDDING", label: "입찰 도착 시작", detail: "BIDS ARRIVING" },
  { at: 4200, state: "ROUTING", label: "KAPAPI 배정 검토", detail: "ROUTING" },
  { at: 5600, state: "ASSIGNED", label: "작업자 배정", detail: "PLAYER ASSIGNED" },
  { at: 7000, state: "IN_PROGRESS", label: "작업 시작", detail: "WORK STARTED" },
  { at: 10500, state: "DELIVERED", label: "결과 파일 도착", detail: "FILE DELIVERED" },
];

const PRE_DELIVERY: QuestState[] = ["OPEN", "BIDDING", "ROUTING"];

export default function QuestPage() {
  const params = useParams<{ id: string }>();
  const { quests, setQuestState, accept, requestRevision, revisionNote, exp } = useDemo();
  const quest = quests[params.id];

  const [revising, setRevising] = useState(false);
  const [note, setNote] = useState("");
  const timers = useRef<number[]>([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach(window.clearTimeout);
    timers.current = [];
  }, []);

  const questId = quest?.id;
  const questState = quest?.state;

  // Advance the newly-created QUEST through its scripted lifecycle.
  useEffect(() => {
    if (!questId || !questState) return;
    if (!PRE_DELIVERY.includes(questState)) return;

    clearTimers();
    SCRIPT.forEach((entry) => {
      timers.current.push(
        window.setTimeout(
          () =>
            setQuestState(questId, entry.state, {
              at: "방금",
              state: entry.state,
              label: entry.label,
              detail: entry.detail,
            }),
          entry.at,
        ),
      );
    });
    return clearTimers;
    // Only re-arm when the QUEST identity changes, not on every scripted step.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questId]);

  // A revision returns the work to the PLAYER, then comes back.
  useEffect(() => {
    if (questState !== "REVISION_REQUESTED" || !questId) return;
    const t = window.setTimeout(
      () =>
        setQuestState(questId, "DELIVERED", {
          at: "방금",
          state: "DELIVERED",
          label: "수정본 도착",
          detail: "REVISED FILE DELIVERED",
        }),
      3200,
    );
    return () => window.clearTimeout(t);
  }, [questState, questId, setQuestState]);

  if (!quest) {
    return (
      <div className={`k-frame ${s.notFound}`}>
        <h1 className={s.title}>QUEST를 찾을 수 없습니다</h1>
        <p style={{ marginTop: 12, color: "var(--k-graphite)" }}>
          데모를 초기화했거나 아직 등록되지 않은 QUEST입니다.
        </p>
        <div style={{ marginTop: 24 }}>
          <Link href="/my">
            <Button variant="secondary">내 QUEST로 →</Button>
          </Link>
        </div>
      </div>
    );
  }

  const role = roleInQuest(CURRENT_USER_ID, quest);
  const assignee = quest.assigneeId ? USERS[quest.assigneeId] : undefined;
  const issuer = USERS[quest.issuerId];
  const isGm = role === "GM";
  const delivered = quest.state === "DELIVERED" || quest.state === "REVIEW";
  const complete = quest.state === "COMPLETE";
  const showRouting = PRE_DELIVERY.includes(quest.state);
  const stageIndex = STAGES.findIndex((stage) => stage.state === quest.state);

  function skipToResult() {
    clearTimers();
    setQuestState(quest.id, "ASSIGNED", {
      at: "방금",
      state: "ASSIGNED",
      label: "작업자 배정",
      detail: "PLAYER ASSIGNED",
    });
    setQuestState(quest.id, "IN_PROGRESS", {
      at: "방금",
      state: "IN_PROGRESS",
      label: "작업 시작",
      detail: "WORK STARTED",
    });
    setQuestState(quest.id, "DELIVERED", {
      at: "방금",
      state: "DELIVERED",
      label: "결과 파일 도착",
      detail: "FILE DELIVERED",
    });
  }

  return (
    <div className={`k-frame ${s.wrap}`}>
      <p className={s.crumb}>
        <Link href="/my">내 QUEST</Link>
        <span aria-hidden="true">/</span>
        <span>QUEST #{quest.id}</span>
      </p>

      <div className={s.head}>
        <div>
          <h1 className={s.title}>{quest.title}</h1>
          <div className={s.chips}>
            <Chip>{quest.categoryLabel}</Chip>
            <Chip>마감 {quest.deadlineLabel}</Chip>
            {quest.nda ? <Chip>NDA ON</Chip> : null}
            <Chip tone={complete ? "ok" : "accent"} dot>
              {stateLabel(quest.state)}
            </Chip>
          </div>
          {role !== "NONE" ? (
            <p className={s.roleNote}>{roleSentence(role, quest.id)}</p>
          ) : null}
        </div>

        <div className={s.headRight}>
          <Chip tone="ink">{role === "GM" ? "GM" : role === "PLAYER" ? "PLAYER" : "관전"}</Chip>
          <span className="k-hud" style={{ color: "var(--k-faint)" }}>
            이 QUEST에서의 역할
          </span>
        </div>
      </div>

      <div className={s.grid}>
        <div className={s.stack}>
          {/* ---- Orchestration ---- */}
          {showRouting ? (
            <section aria-labelledby="routing-h">
              <div className={s.panelTitle}>
                <h2 className={s.panelTitleText} id="routing-h">
                  카파피가 배정하는 중입니다
                </h2>
                <span className={s.panelTitleEn}>ORCHESTRATION</span>
              </div>
              <RoutingPanel quest={quest} showReplay={false} />
              <div className={s.demoBar}>
                <Button size="sm" variant="secondary" onClick={skipToResult}>
                  결과까지 건너뛰기 →
                </Button>
                <span className={s.demoNote}>
                  실제 서비스에서는 기다릴 필요 없이 결과가 준비되면 알림을 받습니다.
                </span>
              </div>
            </section>
          ) : null}

          {/* ---- Assigned player + evidence ---- */}
          {assignee && !showRouting ? (
            <section aria-labelledby="assigned-h">
              <div className={s.panelTitle}>
                <h2 className={s.panelTitleText} id="assigned-h">
                  {isGm ? "배정된 작업자" : "이 QUEST를 맡긴 사람"}
                </h2>
                <span className={s.panelTitleEn}>
                  {isGm ? "PLAYER ASSIGNED" : "GM"}
                </span>
              </div>
              {isGm ? (
                <TrustStrip user={assignee} categoryId={quest.categoryId} role="PLAYER" />
              ) : (
                <div className={s.card}>
                  <p style={{ fontWeight: 620 }}>
                    {issuer.name} · {issuer.org}
                  </p>
                  <p style={{ marginTop: 6, fontSize: "var(--k-body-sm)", color: "var(--k-muted)" }}>
                    발주 {issuer.issuer.questsIssued}건 · 대금 완료율{" "}
                    {Math.round(issuer.issuer.paymentCompletionRate * 100)}% · 평균 검수{" "}
                    {issuer.issuer.medianReviewHours}시간
                  </p>
                </div>
              )}
              {isGm && quest.bids.length > 0 ? (
                <div style={{ marginTop: 16 }}>
                  <RoutingPanel quest={quest} mode="static" showReplay={false} />
                </div>
              ) : null}
            </section>
          ) : null}

          {/* ---- Workroom ---- */}
          {!showRouting ? (
            <section aria-labelledby="workroom-h">
              <div className={s.panelTitle}>
                <h2 className={s.panelTitleText} id="workroom-h">
                  작업 진행 상황
                </h2>
                <span className={s.panelTitleEn}>WORKROOM</span>
              </div>

              <div className={s.workroom} data-surface="dark">
                <div className={s.workroomHead}>
                  <span className={s.workroomTitle}>QUEST #{quest.id}</span>
                  <span className="k-hud" style={{ color: "var(--k-dark-muted)" }}>
                    마감 {quest.deadlineLabel} · {quest.nda ? "NDA ON" : "NDA OFF"}
                  </span>
                </div>

                <div className={s.stages}>
                  {STAGES.map((stage, i) => (
                    <span
                      key={stage.state}
                      className={`${s.stage} ${
                        i < stageIndex ? s.stageDone : i === stageIndex ? s.stageActive : ""
                      }`}
                    >
                      {stage.en}
                    </span>
                  ))}
                </div>

                <div className={s.workroomBody}>
                  <Timeline events={quest.events} />
                </div>
              </div>
            </section>
          ) : null}

          {/* ---- Result / acceptance ---- */}
          {(delivered || complete) && quest.result ? (
            <section aria-labelledby="result-h">
              <div className={s.panelTitle}>
                <h2 className={s.panelTitleText} id="result-h">
                  {complete ? "완료된 QUEST" : "결과가 도착했습니다"}
                </h2>
                <span className={s.panelTitleEn}>{complete ? "QUEST COMPLETE" : "RESULT READY"}</span>
              </div>

              <ResultObject
                result={quest.result}
                heading={complete ? "작업이 완료되었습니다" : "결과 파일이 도착했습니다"}
                headingEn={complete ? "QUEST COMPLETE" : "FILE DELIVERED"}
                actions={
                  isGm && !complete ? (
                    <>
                      <Button
                        variant="accent"
                        size="lg"
                        confirmFeedback
                        onClick={() => accept(quest.id)}
                      >
                        결과 확인 · 합격
                      </Button>
                      <Button
                        variant="secondary"
                        size="lg"
                        onClick={() => setRevising((v) => !v)}
                        aria-expanded={revising}
                      >
                        수정 요청
                      </Button>
                    </>
                  ) : undefined
                }
              />

              {revising && isGm && !complete ? (
                <div className={s.revision}>
                  <p className={s.revisionTitle}>
                    어떤 확인 기준이 맞지 않았나요?
                  </p>
                  <div className={s.revisionCriteria}>
                    {quest.acceptanceCriteria.map((criterion) => (
                      <label key={criterion} className={s.criterion}>
                        <input
                          type="checkbox"
                          onChange={(e) =>
                            setNote((prev) =>
                              e.target.checked
                                ? `${prev}${prev ? "\n" : ""}${criterion}`
                                : prev
                                    .split("\n")
                                    .filter((l) => l !== criterion)
                                    .join("\n"),
                            )
                          }
                        />
                        {criterion}
                      </label>
                    ))}
                  </div>
                  <label className="k-sr" htmlFor="revision-note">
                    수정 요청 내용
                  </label>
                  <textarea
                    id="revision-note"
                    className={s.revisionInput}
                    placeholder="어떤 부분이 합의된 범위와 달랐는지 적어주세요"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                  <div className={s.revisionActions}>
                    <Button
                      variant="primary"
                      disabled={note.trim().length === 0}
                      onClick={() => {
                        requestRevision(quest.id, note.trim());
                        setRevising(false);
                        setNote("");
                      }}
                    >
                      수정 요청 보내기
                    </Button>
                    <Button variant="ghost" onClick={() => setRevising(false)}>
                      취소
                    </Button>
                  </div>
                  <p className={s.revisionNote}>
                    수정 요청은 처음 합의한 범위를 기준으로 합니다. 이 QUEST의 수정 범위는
                    &lsquo;{quest.revisionBoundary}&rsquo;입니다.
                  </p>
                </div>
              ) : null}

              {complete && quest.assigneeId === CURRENT_USER_ID ? (
                <p className={s.expNote}>
                  <Chip tone="accent">
                    +240 EXP
                  </Chip>
                  수행 기록이 갱신되었습니다 · 누적{" "}
                  <NumberFlow value={exp} className="k-mono" /> EXP
                </p>
              ) : null}
            </section>
          ) : null}

          {quest.state === "REVISION_REQUESTED" ? (
            <section className={s.card}>
              <p style={{ fontWeight: 620 }}>수정 요청을 보냈습니다</p>
              <p style={{ marginTop: 8, fontSize: "var(--k-body-sm)", color: "var(--k-muted)" }}>
                {revisionNote}
              </p>
              <p className={s.revisionNote}>
                합의된 수정 범위 안에서 다시 작업 중입니다. 수정본이 도착하면 다시
                확인하실 수 있습니다.
              </p>
            </section>
          ) : null}
        </div>

        {/* ---- QUEST spec sheet ---- */}
        <aside className={s.aside}>
          <div className={s.asideCard}>
            <p className={s.asideTitle}>작업 범위 · SCOPE</p>
            <div className={s.asideList}>
              {quest.scope.map((line) => (
                <p key={line} className={s.asideItem}>
                  <span className={s.asideMark} aria-hidden="true">
                    ·
                  </span>
                  {line}
                </p>
              ))}
            </div>
          </div>

          <div className={s.asideCard}>
            <p className={s.asideTitle}>산출물 · DELIVERABLES</p>
            <div className={s.asideList}>
              {quest.deliverables.map((line) => (
                <p key={line} className={s.asideItem}>
                  <span className={s.asideMark} aria-hidden="true">
                    ·
                  </span>
                  {line}
                </p>
              ))}
              <p className={s.asideItem}>
                <span className={s.asideMark} aria-hidden="true">
                  ·
                </span>
                형식 {quest.outputFormats.join(" · ")}
              </p>
            </div>
          </div>

          <div className={s.asideCard}>
            <p className={s.asideTitle}>확인 기준 · ACCEPTANCE</p>
            <div className={s.asideList}>
              {quest.acceptanceCriteria.map((line) => (
                <p key={line} className={s.asideItem}>
                  <span className={s.asideMark} aria-hidden="true">
                    ·
                  </span>
                  {line}
                </p>
              ))}
            </div>
            <p className={s.revisionNote}>수정 범위 · {quest.revisionBoundary}</p>
          </div>

          {quest.inputs.length > 0 ? (
            <div className={s.asideCard}>
              <p className={s.asideTitle}>입력 자료 · INPUT</p>
              <div className={s.files}>
                {quest.inputs.map((file) => (
                  <FileRow key={file.name} file={file} />
                ))}
              </div>
            </div>
          ) : null}

          <div className={s.asideCard}>
            <p className={s.asideTitle}>상업 조건 · TERMS</p>
            <div className={s.asideList}>
              <p className={s.asideItem}>
                <span className={s.asideMark} aria-hidden="true">
                  ·
                </span>
                예산 상한 {won(quest.budgetCeiling)}
              </p>
              <p className={s.asideItem}>
                <span className={s.asideMark} aria-hidden="true">
                  ·
                </span>
                {quest.nda ? "NDA 서약자만 참여" : "별도 기밀 요건 없음"}
              </p>
              <p className={s.asideItem}>
                <span className={s.asideMark} aria-hidden="true">
                  ·
                </span>
                결과 최종 확인은 {issuer.name} 님이 합니다
              </p>
            </div>
            <p className={s.revisionNote}>
              프로토타입에서는 실제 결제·대금 보관이 이루어지지 않습니다.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
