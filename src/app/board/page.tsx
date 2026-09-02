"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { useDemo } from "@/lib/demo";
import { ME, PEOPLE, eligible, won } from "@/lib/kapapi";
import s from "@/components/app.module.css";

const FILTERS = [
  { k: "all", label: "전체" },
  { k: "mine", label: "내가 할 수 있는 작업" },
  { k: "urgent", label: "오늘 마감" },
] as const;

/** The supply side of the same product, for the same account. */
export default function BoardPage() {
  const { quests } = useDemo();
  const me = PEOPLE[ME];
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["k"]>("all");

  const open = useMemo(
    () =>
      Object.values(quests)
        .filter((q) => ["OPEN", "BIDDING"].includes(q.state) && q.issuerId !== ME)
        .sort((a, b) => a.deadlineHours - b.deadlineHours),
    [quests],
  );

  const rows = open.map((q) => ({ q, e: eligible(me, q) }));
  const canDo = rows.filter((r) => r.e.ok).length;
  const shown = rows.filter(({ q, e }) =>
    filter === "mine" ? e.ok : filter === "urgent" ? q.urgent : true,
  );

  return (
    <div className={`frame ${s.wrap}`}>
      <div className={s.head}>
        <h1 className={s.title}>지금 열려 있는 작업</h1>
        <p className={s.sub}>
          {me.name} 님은 다른 의뢰에서는 맡기는 쪽입니다. 계정을 바꾸지 않고 조건이 맞는 작업에 제안을 보낼 수 있습니다.
        </p>
        <div className={s.chips}>
          <span className={s.chip}>열린 작업 {open.length}건</span>
          <span className={s.chip}>참여 가능 {canDo}건</span>
        </div>
      </div>

      <div className={s.filters} role="group" aria-label="작업 필터">
        {FILTERS.map((f) => (
          <button
            key={f.k}
            type="button"
            className={`${s.filter} ${filter === f.k ? s.filterOn : ""}`}
            aria-pressed={filter === f.k}
            onClick={() => setFilter(f.k)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className={s.cards}>
        {shown.length === 0 ? (
          <p className={s.empty}>조건에 맞는 작업이 없습니다.</p>
        ) : (
          shown.map(({ q, e }) => (
            <Link key={q.id} href={`/board/${q.id}`} className={s.qcard}>
              <div className={s.qtop}>
                <span className={s.qid}>의뢰 #{q.id}</span>
                <span className={s.chip}>{q.categoryLabel}</span>
                {q.urgent ? <span className={s.chip}>오늘 마감</span> : null}
                {q.nda ? <span className={s.chip}>보안 서약</span> : null}
                <span className={`${s.chip} ${e.ok ? s.chipOk : s.chipWarn}`}>
                  <span className={s.dot} aria-hidden="true" />
                  {e.ok ? "참여 가능" : "조건 미충족"}
                </span>
              </div>
              <h2 className={s.qtitle}>{q.title}</h2>
              <p className={s.qsum}>{q.summary}</p>
              <div className={s.qmeta}>
                {q.reward ? (
                  <span className={s.stat}><span className={s.sk}>보수</span><span className={s.sv}>{won(q.reward[0])}–{won(q.reward[1])}</span></span>
                ) : null}
                <span className={s.stat}><span className={s.sk}>완료</span><span className={s.sv}>{q.deadlineHours}시간 이내</span></span>
                <span className={s.stat}><span className={s.sk}>마감</span><span className={s.sv}>{q.deadlineLabel}</span></span>
                <span className={s.stat}><span className={s.sk}>제안</span><span className={s.sv}>{q.bids.length}건</span></span>
              </div>
              {!e.ok ? <p className={s.qblock}>이 의뢰에는 참여할 수 없습니다 — {e.why.join(", ")}</p> : null}
            </Link>
          ))
        )}
      </div>

      <p className={s.note} style={{ marginTop: 40, maxWidth: "70ch" }}>
        참여 조건은 의뢰마다 다릅니다. 어떤 의뢰에 참여할 수 없다는 것은 계정 종류가 다르다는 뜻이 아니라,
        그 의뢰가 요구하는 이력과 보안 조건을 아직 충족하지 않았다는 뜻입니다.
      </p>
    </div>
  );
}
