"use client";

import { useMemo, useState } from "react";

import { QuestCard } from "@/components/quest";
import { Chip } from "@/components/ui";
import { CURRENT_USER_ID, USERS, useDemo } from "@/lib/demo-store";
import { eligibilityFor } from "@/lib/roles";
import s from "./board.module.css";

type Filter = "all" | "eligible" | "time";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "전체" },
  { key: "eligible", label: "내가 참여 가능한 일" },
  { key: "time", label: "오늘 마감 · TIME ATTACK" },
];

/**
 * 일 찾기 — the supply side of the same product, for the same account.
 * Eligibility here restricts individual QUESTs, never the user's identity.
 */
export default function BoardPage() {
  const { quests } = useDemo();
  const me = USERS[CURRENT_USER_ID];
  const [filter, setFilter] = useState<Filter>("all");

  const open = useMemo(
    () =>
      Object.values(quests)
        .filter(
          (q) =>
            ["OPEN", "BIDDING"].includes(q.state) && q.issuerId !== CURRENT_USER_ID,
        )
        .sort((a, b) => a.deadlineInHours - b.deadlineInHours),
    [quests],
  );

  const rows = open.map((quest) => ({ quest, eligibility: eligibilityFor(me, quest) }));
  const eligibleCount = rows.filter((r) => r.eligibility.eligible).length;

  const shown = rows.filter(({ quest, eligibility }) => {
    if (filter === "eligible") return eligibility.eligible;
    if (filter === "time") return quest.timeAttack;
    return true;
  });

  return (
    <div className={`k-frame ${s.wrap}`}>
      <div className={s.head}>
        <div>
          <p className={s.eyebrow}>QUEST BOARD</p>
          <h1 className={s.title}>지금 열려 있는 일</h1>
          <p className={s.sub}>
            {me.name} 님은 지금도 다른 QUEST에서는 일을 맡기는 쪽입니다. 계정을 바꾸지
            않고, 자격이 맞는 QUEST에 그대로 입찰할 수 있습니다.
          </p>
        </div>

        <div className={s.stats}>
          <span className={s.stat}>
            <span className={s.statKey}>Open</span>
            <span className={s.statValue}>{String(open.length).padStart(2, "0")}</span>
          </span>
          <span className={s.stat}>
            <span className={s.statKey}>참여 가능</span>
            <span className={s.statValue}>
              {String(eligibleCount).padStart(2, "0")}
            </span>
          </span>
          <span className={s.stat}>
            <span className={s.statKey}>내 등급</span>
            <span className={s.statValue}>LV.{me.execution.level}</span>
          </span>
        </div>
      </div>

      <div className={s.filters} role="group" aria-label="QUEST 필터">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            className={`${s.filter} ${filter === f.key ? s.filterOn : ""}`}
            aria-pressed={filter === f.key}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className={s.list}>
        {shown.length === 0 ? (
          <p className={s.empty}>조건에 맞는 QUEST가 없습니다.</p>
        ) : (
          shown.map(({ quest, eligibility }) => (
            <QuestCard
              key={quest.id}
              quest={quest}
              href={`/board/${quest.id}`}
              blockedReason={
                eligibility.eligible
                  ? undefined
                  : `이 QUEST에는 참여할 수 없습니다 — ${eligibility.blockers.join(" · ")}`
              }
              trailing={
                eligibility.eligible ? (
                  <Chip tone="ok" dot>
                    참여 가능
                  </Chip>
                ) : (
                  <Chip tone="warn" dot>
                    자격 미충족
                  </Chip>
                )
              }
            />
          ))
        )}
      </div>

      <p className={s.footNote}>
        자격 조건은 QUEST마다 다릅니다. 어떤 QUEST에 참여할 수 없다는 것은 계정 종류가
        다르다는 뜻이 아니라, 그 QUEST가 요구하는 기술·자격·보안 조건을 아직 충족하지
        않았다는 뜻입니다. 조건을 갖추면 같은 계정으로 바로 참여할 수 있습니다.
      </p>
    </div>
  );
}
