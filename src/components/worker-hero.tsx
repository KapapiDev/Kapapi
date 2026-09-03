"use client";

import Link from "next/link";
import { useMemo } from "react";

import { useDemo } from "@/lib/demo";
import { ME, PEOPLE, eligible, won } from "@/lib/kapapi";
import s from "./worker-hero.module.css";

/**
 * The 작업자 surface.
 *
 * D-035 moves the market off the client's screen, not out of the product — this
 * is where it lives, because proposing 가격 + 완료시간 is what this person came to
 * do. Every number below is counted from the open fixtures, so the page cannot
 * claim more work than exists.
 */
export function WorkerHero() {
  const { quests } = useDemo();
  const me = PEOPLE[ME];

  const { open, canDo, soonest } = useMemo(() => {
    const list = Object.values(quests)
      .filter((q) => ["OPEN", "BIDDING"].includes(q.state) && q.issuerId !== ME)
      .sort((a, b) => a.deadlineHours - b.deadlineHours);
    return {
      open: list,
      canDo: list.filter((q) => eligible(me, q).ok),
      soonest: list[0],
    };
  }, [quests, me]);

  return (
    <section className={s.hero} aria-labelledby="wh">
      <div className={`${s.frame} ${s.grid}`}>
        <div className={s.top}>
          <h1 className={s.headline} id="wh">할 수 있는 일을 고르세요</h1>
          <p className={s.sub}>
            가격과 완료시간을 직접 제안합니다. 포트폴리오를 먼저 만들거나 상점을 열지 않아도 됩니다.
          </p>
          <div className={s.acts}>
            <Link href="/board" className={s.primary}>업무 목록 보기</Link>
            <Link href="/my" className={s.secondary}>내 제안 확인</Link>
          </div>
        </div>

        <div className={s.side}>
        <dl className={s.stats}>
          <div className={s.stat}>
            <dt className={s.statK}>지금 열린 업무</dt>
            <dd className={s.statV}>{open.length}건</dd>
          </div>
          <div className={s.stat}>
            <dt className={s.statK}>내 조건에 맞는 업무</dt>
            <dd className={s.statV}>{canDo.length}건</dd>
          </div>
          <div className={s.stat}>
            <dt className={s.statK}>가장 급한 마감</dt>
            <dd className={s.statV}>{soonest ? `${soonest.deadlineHours}시간` : "없음"}</dd>
          </div>
        </dl>

        {soonest ? (
          <Link href={`/board/${soonest.id}`} className={s.next}>
            <span className={s.nextTag}>가장 먼저 마감되는 업무</span>
            <span className={s.nextTitle}>{soonest.title}</span>
            <span className={s.nextMeta}>
              <span>{soonest.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span>마감 {soonest.deadlineHours}시간</span>
              <span aria-hidden="true">·</span>
              <span>예산 상한 {won(soonest.budget)}</span>
              <span aria-hidden="true">·</span>
              <span>제안 {soonest.bids.length}건</span>
            </span>
            <span className={s.nextGo} aria-hidden="true">→</span>
          </Link>
        ) : null}
        </div>
      </div>
    </section>
  );
}
