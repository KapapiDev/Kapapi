"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { clock, clockCoarse, deadlineDeltaKo, pct, won } from "@/lib/format";
import type { Quest, QuestEvent, QuestResult, User } from "@/lib/types";
import { Chip, FileRow } from "./ui";
import s from "./quest.module.css";

/* ------------------------------------------------------------------ *
 * Countdown
 * ------------------------------------------------------------------ */

/**
 * TIME ATTACK readout. Ticks visually every second, but announces to assistive
 * technology only in coarse terms (QA_CHECKLIST I7).
 */
export function Countdown({ hours, label = true }: { hours: number; label?: boolean }) {
  const target = useRef<number | null>(null);
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    target.current = Date.now() + hours * 3600_000;
    const tick = () => setRemaining((target.current ?? 0) - Date.now());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [hours]);

  if (remaining === null) {
    // Server and first client paint agree on the static label.
    return <span className={`${s.countdown} k-mono`}>—:—:—</span>;
  }

  const urgent = remaining < 3600_000;

  return (
    <span className={`${s.countdown} ${urgent ? s.countdownUrgent : ""}`}>
      {label ? <span className="k-hud">TIME ATTACK ·</span> : null}
      <span aria-hidden="true">{clock(remaining)}</span>
      <span className="k-sr" aria-live="off">
        {clockCoarse(remaining)}
      </span>
    </span>
  );
}

/* ------------------------------------------------------------------ *
 * QUEST card
 * ------------------------------------------------------------------ */

const STATE_KO: Record<string, string> = {
  DRAFT: "작성 중",
  SCOPE_READY: "확인 대기",
  OPEN: "입찰 대기",
  BIDDING: "입찰 중",
  ROUTING: "배정 검토",
  ASSIGNED: "배정 완료",
  IN_PROGRESS: "작업 중",
  DELIVERED: "결과 도착",
  REVIEW: "확인 대기",
  REVISION_REQUESTED: "수정 요청",
  COMPLETE: "완료",
  BLOCKED: "보류",
  CANCELLED: "취소",
};

export function stateLabel(state: string) {
  return STATE_KO[state] ?? state;
}

export function QuestCard({
  quest,
  href,
  blockedReason,
  trailing,
}: {
  quest: Quest;
  href: string;
  /** Why this specific QUEST is closed to the viewer. Never an identity statement. */
  blockedReason?: string;
  trailing?: React.ReactNode;
}) {
  return (
    <Link href={href} className={s.card}>
      <div className={s.cardTop}>
        <span className={s.cardId}>QUEST #{quest.id}</span>
        <Chip>{quest.categoryLabel}</Chip>
        {quest.timeAttack ? (
          <Chip tone="ink">
            <Countdown hours={quest.deadlineInHours} />
          </Chip>
        ) : null}
        {quest.nda ? <Chip>NDA ON</Chip> : null}
        {trailing}
      </div>

      <h3 className={s.cardTitle}>{quest.title}</h3>
      <p className={s.cardSummary}>{quest.summary}</p>

      <div className={s.cardMeta}>
        {quest.rewardHint ? (
          <span className={s.metaItem}>
            <span className={s.metaLabel}>Reward</span>
            <span className={s.metaValue}>
              {won(quest.rewardHint[0])}–{won(quest.rewardHint[1])}
            </span>
          </span>
        ) : null}
        <span className={s.metaItem}>
          <span className={s.metaLabel}>Delivery</span>
          <span className={s.metaValue}>≤ {quest.deadlineInHours}H</span>
        </span>
        <span className={s.metaItem}>
          <span className={s.metaLabel}>마감</span>
          <span className={s.metaValue}>{quest.deadlineLabel}</span>
        </span>
        <span className={s.metaItem}>
          <span className={s.metaLabel}>Bids</span>
          <span className={s.metaValue}>{String(quest.bids.length).padStart(2, "0")}</span>
        </span>
        <span className={s.metaItem}>
          <span className={s.metaLabel}>State</span>
          <span className={s.metaValue}>{stateLabel(quest.state)}</span>
        </span>
      </div>

      {blockedReason ? <p className={s.cardBlocked}>{blockedReason}</p> : null}
    </Link>
  );
}

/* ------------------------------------------------------------------ *
 * Timeline
 * ------------------------------------------------------------------ */

/** Canonical observable stages. No percentage is ever shown for human work. */
export const STAGES: { state: string; label: string; en: string }[] = [
  { state: "ASSIGNED", label: "작업자 배정", en: "ASSIGNED" },
  { state: "IN_PROGRESS", label: "작업 진행", en: "IN PROGRESS" },
  { state: "DELIVERED", label: "결과 파일 도착", en: "FILE DELIVERED" },
  { state: "REVIEW", label: "결과 확인", en: "GM REVIEW" },
  { state: "COMPLETE", label: "완료", en: "QUEST COMPLETE" },
];

export function Timeline({ events }: { events: QuestEvent[] }) {
  return (
    <ol className={s.timeline}>
      {events.map((event, i) => (
        <li key={`${event.at}-${event.state}-${i}`} className={s.event}>
          <span className={s.eventTime}>{event.at}</span>
          <span className={s.eventRail} aria-hidden="true">
            <span
              className={`${s.eventDot} ${
                i === events.length - 1 ? s.eventDotActive : s.eventDotDone
              }`}
            />
            {i < events.length - 1 ? <span className={s.eventLine} /> : null}
          </span>
          <span className={s.eventBody}>
            <span className={s.eventLabel}>{event.label}</span>
            {event.detail ? <span className={s.eventDetail}>{event.detail}</span> : null}
          </span>
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------------------------------------------ *
 * Trust strip
 * ------------------------------------------------------------------ */

/**
 * Trust hierarchy (docs/KAPAPI_DESIGN.md 11.4): relevant career first,
 * task-specific history next, LEVEL last and smallest.
 */
export function TrustStrip({
  user,
  categoryId,
  role,
}: {
  user: User;
  categoryId?: string;
  role?: string;
}) {
  const relevant = categoryId ? (user.execution.relevantHistory[categoryId] ?? 0) : null;

  return (
    <div className={s.trust}>
      <div className={s.trustHead}>
        <span className={s.trustAvatar} aria-hidden="true">
          {user.initials}
        </span>
        <span style={{ minWidth: 0, flex: 1 }}>
          <span className={s.trustName} style={{ display: "block" }}>
            {user.name}
            {role ? (
              <Chip tone="accent" className="k-hud" >
                {role}
              </Chip>
            ) : null}
          </span>
          <span className={s.trustCareer}>{user.execution.career}</span>
        </span>
      </div>

      <div className={s.trustStats}>
        {relevant !== null ? (
          <span className={s.metaItem}>
            <span className={s.metaLabel}>유사 QUEST</span>
            <span className={s.metaValue}>{relevant}건</span>
          </span>
        ) : null}
        <span className={s.metaItem}>
          <span className={s.metaLabel}>On-time</span>
          <span className={s.metaValue}>{pct(user.execution.onTimeRate)}</span>
        </span>
        <span className={s.metaItem}>
          <span className={s.metaLabel}>수정 요청</span>
          <span className={s.metaValue}>{pct(user.execution.revisionRate)}</span>
        </span>
        <span className={s.metaItem}>
          <span className={s.metaLabel}>Level</span>
          <span className={s.metaValue}>LV.{user.execution.level}</span>
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Result object
 * ------------------------------------------------------------------ */

export function ResultObject({
  result,
  actions,
  heading = "작업이 완료되었습니다",
  headingEn = "QUEST COMPLETE",
}: {
  result: QuestResult;
  actions?: React.ReactNode;
  heading?: string;
  headingEn?: string;
}) {
  return (
    <div className={s.result}>
      <div className={s.resultHead}>
        <p className={s.resultKo}>{heading}</p>
        <p className={s.resultEn}>{headingEn}</p>
      </div>

      <div className={s.resultFiles}>
        {result.files.map((file) => (
          <FileRow key={file.name} file={file} />
        ))}
      </div>

      <div className={s.resultDelivery}>
        <span className={s.metaItem}>
          <span className={s.metaLabel}>Delivered</span>
          <span className={s.metaValue}>{result.deliveredAt}</span>
        </span>
        <span className={s.metaItem}>
          <span className={s.metaLabel}>마감 대비</span>
          <span className={s.metaValue}>{deadlineDeltaKo(result.minutesVsDeadline)}</span>
        </span>
      </div>

      <div className={s.checks}>
        {result.checks.map((check) => (
          <p key={check.label} className={s.check}>
            <span className={s.checkMark} aria-hidden="true">
              {check.passed ? "✓" : "—"}
            </span>
            {check.label}
            <span className="k-sr">{check.passed ? " 확인됨" : " 미확인"}</span>
          </p>
        ))}
      </div>

      {actions ? <div className={s.resultActions}>{actions}</div> : null}
    </div>
  );
}
