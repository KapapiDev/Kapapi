"use client";

import { useMemo, useState } from "react";

import { QuestCard } from "@/components/quest";
import { Chip } from "@/components/ui";
import { CURRENT_USER_ID, USERS, useDemo } from "@/lib/demo-store";
import { groupQuests } from "@/lib/roles";
import type { Quest } from "@/lib/types";
import s from "./my.module.css";

type View = "all" | "issued" | "worked";

const VIEWS: { key: View; label: string }[] = [
  { key: "all", label: "전체" },
  { key: "issued", label: "맡긴 일" },
  { key: "worked", label: "수행한 일" },
];

/**
 * 내 QUEST — the clearest proof of the identity model.
 *
 * One list, one account. The GM/PLAYER chip belongs to the row, not the user.
 * The filter above is a view over the same data; it never changes who you are.
 */
export default function MyQuestsPage() {
  const { quests } = useDemo();
  const me = USERS[CURRENT_USER_ID];
  const [view, setView] = useState<View>("all");

  const groups = useMemo(
    () => groupQuests(CURRENT_USER_ID, Object.values(quests)),
    [quests],
  );

  const sections: {
    key: View[];
    title: string;
    en: string;
    quests: Quest[];
    role: "GM" | "PLAYER" | "BIDDER";
    href: (q: Quest) => string;
    empty: string;
  }[] = [
    {
      key: ["all", "issued"],
      title: "맡긴 QUEST",
      en: "AS GM",
      quests: groups.issued,
      role: "GM",
      href: (q) => `/quest/${q.id}`,
      empty: "아직 맡긴 일이 없습니다.",
    },
    {
      key: ["all", "worked"],
      title: "수행 중인 QUEST",
      en: "AS PLAYER",
      quests: groups.executing,
      role: "PLAYER",
      href: (q) => `/quest/${q.id}`,
      empty: "지금 수행 중인 일이 없습니다.",
    },
    {
      key: ["all", "worked"],
      title: "입찰한 QUEST",
      en: "BID SUBMITTED",
      quests: groups.bidding,
      role: "BIDDER",
      href: (q) => `/board/${q.id}`,
      empty: "입찰한 일이 없습니다.",
    },
  ];

  const shown = sections.filter((section) => section.key.includes(view));

  return (
    <div className={`k-frame ${s.wrap}`}>
      <div className={s.head}>
        <p className={s.eyebrow}>MY QUESTS</p>
        <h1 className={s.title}>내 QUEST</h1>
        <p className={s.sub}>
          {me.name} 님의 계정 하나에 맡긴 일과 수행하는 일이 함께 있습니다. QUEST마다
          역할이 정해질 뿐, 계정이 바뀌지는 않습니다.
        </p>

        <div className={s.filters} role="group" aria-label="보기 방식">
          {VIEWS.map((v) => (
            <button
              key={v.key}
              type="button"
              className={`${s.filter} ${view === v.key ? s.filterOn : ""}`}
              aria-pressed={view === v.key}
              onClick={() => setView(v.key)}
            >
              {v.label}
            </button>
          ))}
        </div>
        <p className={s.filterNote}>
          이 필터는 목록을 정리하는 보기 방식입니다. 계정이나 역할을 바꾸지 않습니다.
        </p>
      </div>

      {shown.map((section) => (
        <section key={section.title} className={s.group}>
          <div className={s.groupHead}>
            <h2 className={s.groupTitle}>{section.title}</h2>
            <span className={s.groupEn}>{section.en}</span>
            <span className={s.groupCount}>
              {String(section.quests.length).padStart(2, "0")}
            </span>
          </div>

          <div className={s.list}>
            {section.quests.length === 0 ? (
              <p className={s.empty}>{section.empty}</p>
            ) : (
              section.quests.map((quest) => (
                <QuestCard
                  key={quest.id}
                  quest={quest}
                  href={section.href(quest)}
                  trailing={
                    <Chip tone={section.role === "GM" ? "ink" : "accent"}>
                      {section.role === "BIDDER" ? "입찰 중" : section.role}
                    </Chip>
                  }
                />
              ))
            )}
          </div>
        </section>
      ))}

      <p className={s.footNote}>
        같은 기간에 어떤 QUEST에서는 GM이고 다른 QUEST에서는 PLAYER일 수 있습니다. 별도의
        작업자 계정이나 모드 전환은 없습니다. QUEST가 끝나면 그 역할도 함께 끝나고, 계정은
        그대로 하나의 카파피 사용자로 남습니다.
      </p>
    </div>
  );
}
