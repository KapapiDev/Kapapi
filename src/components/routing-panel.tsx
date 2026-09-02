"use client";

import NumberFlow from "@number-flow/react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { USERS } from "@/lib/fixtures";
import { pct, won } from "@/lib/format";
import { routeQuest } from "@/lib/routing";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import type { Quest } from "@/lib/types";
import s from "./routing-panel.module.css";

/**
 * The messy middle, made inspectable.
 *
 * Canon: docs/DECISIONS.md D-031 — the GM never clicks a winner. This component
 * has no selection control at all. It shows BIDs arriving, hard filters removing
 * candidates with a stated reason, KAPAPI routing, and the assignment locking,
 * followed by the evidence behind the decision.
 */

type Stage = "idle" | "bids" | "filter" | "routing" | "assigned";

interface Props {
  quest: Quest;
  /** "auto" plays once when scrolled into view; "static" renders the settled result. */
  mode?: "auto" | "static";
  showReplay?: boolean;
}

export function RoutingPanel({ quest, mode = "auto", showReplay = true }: Props) {
  const reduced = useReducedMotion();

  const { result, ordered } = useMemo(() => {
    const routed = routeQuest(quest, USERS);
    return { result: routed, ordered: [...routed.eligible, ...routed.excluded] };
  }, [quest]);

  const [playState, setPlayState] = useState<{ stage: Stage; visible: number }>({
    stage: "idle",
    visible: 0,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);
  const played = useRef(false);

  /** Reduced motion and the static mode both skip straight to the settled result. */
  const settled = mode === "static" || reduced;
  const stage: Stage = settled ? "assigned" : playState.stage;
  const visibleBids = settled ? ordered.length : playState.visible;

  const play = useCallback(() => {
    timers.current.forEach(window.clearTimeout);
    timers.current = [];
    setPlayState({ stage: "bids", visible: 0 });

    let t = 260;
    ordered.forEach((_, i) => {
      timers.current.push(
        window.setTimeout(() => setPlayState({ stage: "bids", visible: i + 1 }), t),
      );
      t += 420;
    });
    const total = ordered.length;
    timers.current.push(
      window.setTimeout(() => setPlayState({ stage: "filter", visible: total }), t + 420),
    );
    timers.current.push(
      window.setTimeout(() => setPlayState({ stage: "routing", visible: total }), t + 1180),
    );
    timers.current.push(
      window.setTimeout(() => setPlayState({ stage: "assigned", visible: total }), t + 2100),
    );
  }, [ordered]);

  useEffect(() => {
    if (settled) return;
    const node = containerRef.current;
    if (!node) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !played.current) {
          played.current = true;
          play();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(node);

    const pending = timers;
    return () => {
      io.disconnect();
      pending.current.forEach(window.clearTimeout);
      pending.current = [];
    };
  }, [settled, play]);

  const replay = useCallback(() => {
    played.current = true;
    play();
  }, [play]);

  const stateCopy: Record<Stage, { ko: string; en: string }> = {
    idle: { ko: "입찰을 기다리는 중입니다", en: "QUEST OPEN" },
    bids: {
      ko: `입찰 ${visibleBids}건이 도착했습니다`,
      en: `${String(visibleBids).padStart(2, "0")} BIDS RECEIVED`,
    },
    filter: { ko: "자격·마감·예산 요건을 확인합니다", en: "ELIGIBILITY CHECK" },
    routing: { ko: "카파피가 배정을 검토합니다", en: "ROUTING" },
    assigned: {
      ko: `카파피가 ${result.selected?.player.name ?? ""} 님을 배정했습니다`,
      en: "PLAYER ASSIGNED",
    },
  };

  const copy = stateCopy[stage];
  const showTrust = stage !== "bids" || visibleBids === ordered.length;

  return (
    <div className={s.panel} ref={containerRef} data-surface="dark">
      <div className={s.head}>
        <span className={s.headId}>QUEST #{quest.id}</span>
        <span className={s.headMeta}>{quest.categoryLabel}</span>
        <span className={s.headMeta}>마감 {quest.deadlineLabel}</span>
        {quest.nda ? <span className={s.headMetaHud}>NDA ON</span> : null}
        <span className={s.headSpacer} />
        {showReplay && !settled ? (
          <button type="button" className={s.replay} onClick={replay}>
            다시 보기
          </button>
        ) : null}
      </div>

      <div className={s.state} aria-live="polite">
        <span className={s.stateKo}>{copy.ko}</span>
        <span className={s.stateEn}>{copy.en}</span>
      </div>

      <div className={s.rows}>
        <AnimatePresence initial={false}>
          {ordered.slice(0, visibleBids).map((candidate) => {
            const isSelected =
              stage === "assigned" && candidate.bid.id === result.selected?.bid.id;
            const isExcluded = Boolean(candidate.excludedBecause);
            const muted =
              (stage === "filter" && isExcluded) ||
              (stage === "routing" && isExcluded) ||
              (stage === "assigned" && !isSelected);

            return (
              <motion.div
                key={candidate.bid.id}
                layout={!reduced}
                initial={reduced ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduced ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
                className={`${s.row} ${muted ? s.rowMuted : ""} ${
                  isSelected ? s.rowSelected : ""
                }`}
              >
                <span className={s.who}>
                  <span className={s.name}>
                    {candidate.player.name}
                    {isSelected ? (
                      <span className={s.assignedFlag}>PLAYER ASSIGNED</span>
                    ) : null}
                  </span>
                  <span className={s.career}>{candidate.player.execution.career}</span>
                </span>

                <span className={s.price}>{won(candidate.bid.price)}</span>
                <span className={s.delivery}>{candidate.bid.deliveryHours}H</span>

                {showTrust ? (
                  <span className={s.trust}>
                    {isExcluded && stage !== "bids" ? (
                      <span className={s.excluded}>제외 · {candidate.excludedBecause}</span>
                    ) : (
                      <>
                        <span className={s.trustItem}>
                          유사 QUEST {candidate.relevantCompletionCount}
                        </span>
                        <span className={s.trustItem}>
                          ON-TIME {pct(candidate.onTimeRate)}
                        </span>
                        <span className={s.trustItem}>
                          수정요청 {pct(candidate.revisionRate)}
                        </span>
                      </>
                    )}
                  </span>
                ) : null}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {stage === "assigned" && result.selected ? (
        <div className={s.why}>
          <p className={s.whyTitle}>
            왜 이 작업자인가요?{" "}
            <span className="k-hud" style={{ color: "var(--s-faint)" }}>
              ROUTING EVIDENCE
            </span>
          </p>
          <div className={s.whyList}>
            {result.rationale.map((line) => (
              <p key={line} className={s.whyRow}>
                <span className={s.whyMark} aria-hidden="true">
                  ▸
                </span>
                {line}
              </p>
            ))}
          </div>
          <p className={s.whyNote}>
            유효 입찰{" "}
            <NumberFlow value={result.eligible.length} className="k-mono" />건 중 자격·마감·예산
            요건을 통과한 입찰만 비교했습니다. 최저가나 최단시간이 자동으로 선택되지 않으며,
            결과의 최종 확인은 일을 맡긴 사용자가 합니다.
          </p>
        </div>
      ) : null}
    </div>
  );
}
