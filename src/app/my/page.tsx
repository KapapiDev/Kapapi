"use client";

import Link from "next/link";
import { useMemo } from "react";

import { useDemo } from "@/lib/demo";
import { ME, PEOPLE, won, type Quest } from "@/lib/kapapi";
import s from "@/components/app.module.css";

/**
 * The clearest proof of the identity model: one list, one account, and the
 * role badge belongs to the row rather than to the person.
 */
export default function MyPage() {
  const { quests } = useDemo();
  const me = PEOPLE[ME];
  const all = useMemo(() => Object.values(quests), [quests]);

  const issued = all.filter((q) => q.issuerId === ME);
  const doing = all.filter((q) => q.assigneeId === ME && q.state !== "COMPLETE");
  const proposed = all.filter(
    (q) => q.issuerId !== ME && q.assigneeId !== ME && q.bids.some((b) => b.personId === ME),
  );

  const groups: { title: string; en: string; rows: Quest[]; badge: string; href: (q: Quest) => string; empty: string }[] = [
    { title: "내가 맡긴 의뢰", en: "AS GM", rows: issued, badge: "맡긴 쪽", href: (q) => `/quest/${q.id}`, empty: "아직 맡긴 의뢰가 없습니다" },
    { title: "내가 수행 중인 작업", en: "AS PLAYER", rows: doing, badge: "수행하는 쪽", href: (q) => `/quest/${q.id}`, empty: "지금 수행 중인 작업이 없습니다" },
    { title: "제안을 보낸 의뢰", en: "BID SENT", rows: proposed, badge: "제안", href: (q) => `/board/${q.id}`, empty: "보낸 제안이 없습니다" },
  ];

  return (
    <div className={`frame ${s.wrap}`}>
      <div className={s.head}>
        <h1 className={s.title}>내 의뢰</h1>
        <p className={s.sub}>
          {me.name} 님의 계정 하나에 맡긴 의뢰와 수행하는 작업이 함께 있습니다. 의뢰마다 역할이 정해질 뿐,
          계정이 바뀌지는 않습니다.
        </p>
      </div>

      {groups.map((g) => (
        <section key={g.title} className={s.group}>
          <div className={s.groupHead}>
            <h2 className={s.groupTitle}>{g.title}</h2>
            <span className={s.groupEn}>{g.en}</span>
            <span className={s.groupN}>{String(g.rows.length).padStart(2, "0")}</span>
          </div>
          <div className={s.cards}>
            {g.rows.length === 0 ? (
              <p className={s.empty}>{g.empty}</p>
            ) : (
              g.rows.map((q) => (
                <Link key={q.id} href={g.href(q)} className={s.qcard}>
                  <div className={s.qtop}>
                    <span className={s.qid}>의뢰 #{q.id}</span>
                    <span className={s.chip}>{q.categoryLabel}</span>
                    <span className={`${s.chip} ${s.chipAccent}`}>{g.badge}</span>
                  </div>
                  <h3 className={s.qtitle}>{q.title}</h3>
                  <div className={s.qmeta}>
                    {q.reward ? (
                      <span className={s.stat}><span className={s.sk}>보수</span><span className={s.sv}>{won(q.reward[0])}–{won(q.reward[1])}</span></span>
                    ) : null}
                    <span className={s.stat}><span className={s.sk}>마감</span><span className={s.sv}>{q.deadlineLabel}</span></span>
                    <span className={s.stat}><span className={s.sk}>제안</span><span className={s.sv}>{q.bids.length}건</span></span>
                    <span className={s.stat}><span className={s.sk}>상태</span><span className={s.sv}>
                      {q.state === "COMPLETE" ? "완료" : q.state === "IN_PROGRESS" ? "작업 중" : q.state === "DELIVERED" ? "결과 도착" : "진행 중"}
                    </span></span>
                  </div>
                </Link>
              ))
            )}
          </div>
        </section>
      ))}

      <p className={s.note} style={{ marginTop: 48, maxWidth: "70ch" }}>
        같은 기간에 어떤 의뢰에서는 맡기는 쪽이고 다른 의뢰에서는 수행하는 쪽일 수 있습니다.
        별도의 작업자 계정을 만들거나 모드를 바꾸지 않습니다.
      </p>
    </div>
  );
}
