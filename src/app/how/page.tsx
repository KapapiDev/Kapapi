import Link from "next/link";
import { QUESTS, route, won } from "@/lib/kapapi";
import s from "@/components/app.module.css";

/**
 * 이용 방법 — shown through one real transaction rather than an explanatory grid.
 */
export default function HowPage() {
  const q = QUESTS["0001"];
  const r = route(q);

  return (
    <div className={`frame ${s.wrap}`}>
      <div className={s.head}>
        <h1 className={s.title}>의뢰 하나가 지나가는 과정</h1>
        <p className={s.sub}>아래는 실제로 오간 의뢰 #{q.id}의 기록입니다.</p>
      </div>

      <div className={s.grid}>
        <div className={s.stack}>
          <section>
            <div className={s.panelHead}>
              <h2 className={s.panelTitle}>도착한 제안</h2>
              <span className={s.panelEn}>PRICE × DELIVERY</span>
            </div>
            <div className={s.work}>
              <div className={s.workTop}>
                <span className={s.workId}>의뢰 #{q.id}</span>
                <span className={s.workMeta}>마감 {q.deadlineHours}시간 · 예산 상한 {won(q.budget)}</span>
              </div>
              <div className={s.events}>
                {[...r.ranked, ...r.dropped].map((c) => (
                  <div key={c.bid.id} className={s.ev} style={{ gridTemplateColumns: "1fr auto auto", gap: 20 }}>
                    <span>
                      <span className={s.evKo}>{c.person.name}</span>
                      <span className={s.evEn} style={{ textTransform: "none", letterSpacing: 0, fontFamily: "var(--sans)" }}>
                        {c.out ? `제외 · ${c.out}` : c.person.career}
                      </span>
                    </span>
                    <span style={{ fontFamily: "var(--mono)", fontWeight: 600, opacity: c.out ? 0.45 : 1 }}>{won(c.bid.price)}</span>
                    <span style={{ fontFamily: "var(--mono)", color: "var(--dark-muted)", opacity: c.out ? 0.45 : 1 }}>{c.bid.hours}시간</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <div className={s.panelHead}>
              <h2 className={s.panelTitle}>배정 근거</h2>
              <span className={s.panelEn}>ROUTING</span>
            </div>
            <div className={s.card}>
              <p style={{ fontWeight: 650, marginBottom: 10 }}>{r.picked?.person.name} 님에게 배정되었습니다</p>
              <div className={s.list}>
                {r.reasons.map((x) => (
                  <p key={x} className={s.item}><span className={s.mark} aria-hidden="true">▸</span>{x}</p>
                ))}
              </div>
              <p className={s.note}>
                가장 싸거나 가장 빠른 제안이 자동으로 선택되지는 않습니다. 자격과 마감, 예산 조건을 통과한 제안만 비교합니다.
              </p>
            </div>
          </section>

          <section>
            <div className={s.panelHead}>
              <h2 className={s.panelTitle}>받은 결과</h2>
              <span className={s.panelEn}>RESULT</span>
            </div>
            {q.result ? (
              <div className={s.result}>
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
              </div>
            ) : null}
          </section>
        </div>

        <aside className={s.aside}>
          <div className={s.card}>
            <p className={s.cardTitle}>맡기는 쪽이 하는 일</p>
            <div className={s.list}>
              <p className={s.item}><span className={s.mark} aria-hidden="true">1</span>업무를 적고 자료를 첨부합니다</p>
              <p className={s.item}><span className={s.mark} aria-hidden="true">2</span>정리된 작업 사양을 확인합니다</p>
              <p className={s.item}><span className={s.mark} aria-hidden="true">3</span>결과를 확인하거나 수정을 요청합니다</p>
            </div>
            <p className={s.note}>전문가를 찾고 비교하는 과정은 포함되지 않습니다.</p>
          </div>
          <div className={s.card}>
            <p className={s.cardTitle}>수행하는 쪽이 하는 일</p>
            <div className={s.list}>
              <p className={s.item}><span className={s.mark} aria-hidden="true">1</span>조건이 맞는 의뢰를 찾습니다</p>
              <p className={s.item}><span className={s.mark} aria-hidden="true">2</span>금액과 완료 시간을 제안합니다</p>
              <p className={s.item}><span className={s.mark} aria-hidden="true">3</span>배정되면 작업하고 결과를 납품합니다</p>
            </div>
            <p className={s.note}>같은 계정으로 두 가지를 모두 할 수 있습니다.</p>
          </div>
          <div className={s.acts}>
            <Link href="/" className={`${s.btn} ${s.btnAccent}`}>의뢰 등록하기</Link>
            <Link href="/board" className={`${s.btn} ${s.btnLine}`}>작업 찾기</Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
