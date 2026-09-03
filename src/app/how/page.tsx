import Link from "next/link";
import { QUESTS, route, won } from "@/lib/kapapi";
import s from "@/components/app.module.css";

export default function HowPage() {
  const q = QUESTS["0001"];
  const r = route(q);

  return (
    <div className={`frame ${s.wrap}`}>
      <div className={s.head}>
        <h1 className={s.title}>QUEST 하나가 끝나는 과정</h1>
        <p className={s.sub}>일이 먼저 올라오고, 맞는 사람이 가격과 완료시간을 제안합니다. 지금 단계에서는 카파피 추천을 확인한 뒤 작업자를 확정합니다.</p>
      </div>

      <div className={s.grid}>
        <div className={s.stack}>
          <section>
            <div className={s.panelHead}>
              <h2 className={s.panelTitle}>1. 일이 먼저 올라옵니다</h2>
              <span className={s.panelEn}>QUEST FIRST</span>
            </div>
            <div className={s.card}>
              <p className={s.cardTitle}>{q.title}</p>
              <p className={s.note}>{q.summary}</p>
              <div className={s.chips} style={{ marginTop: 12 }}>
                <span className={s.chip}>{q.categoryLabel}</span>
                <span className={s.chip}>마감 {q.deadlineLabel}</span>
                <span className={s.chip}>예산 상한 {won(q.budget)}</span>
              </div>
            </div>
          </section>

          <section>
            <div className={s.panelHead}>
              <h2 className={s.panelTitle}>2. PRICE × DELIVERY 제안</h2>
              <span className={s.panelEn}>BIDDING</span>
            </div>
            <div className={s.work}>
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
              <h2 className={s.panelTitle}>3. 카파피가 추천하고, 의뢰자가 확정합니다</h2>
              <span className={s.panelEn}>RECOMMENDATION</span>
            </div>
            <div className={s.card}>
              <div className={s.chips} style={{ marginBottom: 10 }}>
                <span className={`${s.chip} ${s.chipAccent}`}>추천</span>
                <span className={s.chip}>{won(r.picked?.bid.price ?? 0)}</span>
                <span className={s.chip}>{r.picked?.bid.hours ?? 0}시간</span>
              </div>
              <p style={{ fontWeight: 650, marginBottom: 10 }}>{r.picked?.person.name} 님을 추천합니다</p>
              <div className={s.list}>
                {r.reasons.map((x) => <p key={x} className={s.item}><span className={s.mark} aria-hidden="true">▸</span>{x}</p>)}
              </div>
              <p className={s.note}>가장 싸거나 가장 빠르다는 이유만으로 고르지 않습니다. 지금 단계에서는 추천 근거를 보고 의뢰자가 확정합니다.</p>
            </div>
          </section>

          <section>
            <div className={s.panelHead}>
              <h2 className={s.panelTitle}>4. 받은 결과를 확인합니다</h2>
              <span className={s.panelEn}>RESULT</span>
            </div>
            {q.result ? (
              <div className={s.result}>
                <div className={s.section}>
                  {q.result.files.map((f) => (
                    <div key={f.name} className={s.file}>
                      <span className={s.kind} aria-hidden="true">{f.kind}</span>
                      <span style={{ minWidth: 0 }}><span className={s.fname}>{f.name}</span><span className={s.fmeta}>{f.kind} · {f.size}</span></span>
                    </div>
                  ))}
                </div>
                <div className={s.rowMeta}>
                  <span className={s.stat}><span className={s.sk}>납품</span><span className={s.sv}>{q.result.at}</span></span>
                  <span className={s.stat}><span className={s.sk}>마감 대비</span><span className={s.sv}>{q.result.earlyMinutes}분 일찍</span></span>
                </div>
                <div className={s.checks}>{q.result.checks.map((c) => <p key={c} className={s.check}><span className={s.tickMark} aria-hidden="true">✓</span>{c}</p>)}</div>
              </div>
            ) : null}
          </section>

          <section>
            <div className={s.panelHead}>
              <h2 className={s.panelTitle}>5. 완료 데이터가 다음 추천을 만듭니다</h2>
              <span className={s.panelEn}>GROWTH</span>
            </div>
            <div className={s.card}>
              <p className={s.note}>완료, 정시, 수정, 실패와 복구 이력이 쌓이면 카파피가 선택을 더 잘 도울 수 있습니다. 충분히 검증된 업무부터 추천 → 기본 배정 → 복구 → Outcome Layer로 발전합니다.</p>
            </div>
          </section>
        </div>

        <aside className={s.aside}>
          <div className={s.card}>
            <p className={s.cardTitle}>맡기는 쪽</p>
            <div className={s.list}>
              <p className={s.item}><span className={s.mark} aria-hidden="true">1</span>업무와 자료를 등록합니다</p>
              <p className={s.item}><span className={s.mark} aria-hidden="true">2</span>정리된 작업 사양을 확인합니다</p>
              <p className={s.item}><span className={s.mark} aria-hidden="true">3</span>카파피 추천을 확인하고 확정합니다</p>
              <p className={s.item}><span className={s.mark} aria-hidden="true">4</span>결과를 확인하거나 수정 요청합니다</p>
            </div>
          </div>
          <div className={s.card}>
            <p className={s.cardTitle}>수행하는 쪽</p>
            <div className={s.list}>
              <p className={s.item}><span className={s.mark} aria-hidden="true">1</span>조건이 맞는 QUEST를 찾습니다</p>
              <p className={s.item}><span className={s.mark} aria-hidden="true">2</span>금액과 완료시간을 제안합니다</p>
              <p className={s.item}><span className={s.mark} aria-hidden="true">3</span>선정되면 작업하고 결과를 납품합니다</p>
            </div>
            <p className={s.note}>서비스 상품을 먼저 만들 필요 없이, 이미 존재하는 일을 고릅니다.</p>
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
