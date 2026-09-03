import Link from "next/link";
import { QUESTS, route, won } from "@/lib/kapapi";
import s from "@/components/app.module.css";

/**
 * 이용 방법 — the four beats, shown through one real work item rather than
 * described. Everything on this page is fixture #0001 and its real `route()`
 * output, including the bids that were excluded and why.
 *
 * D-035: the client uploads and receives. The selection is KAPAPI's, and its
 * criteria are shown on beat 3 — PRODUCT.md §13 rules out positioning AI as a
 * magical sole selector, and the answer to that is an inspectable one, not a
 * quieter claim.
 */
export default function HowPage() {
  const q = QUESTS["0001"];
  const r = route(q);
  const all = [...r.ranked, ...r.dropped];

  return (
    <div className={`frame ${s.wrap}`}>
      <div className={s.head}>
        <h1 className={s.title}>올리면, 결과가 옵니다</h1>
        <p className={s.sub}>
          발주자는 업무를 올리고 결과를 받습니다. 그 사이의 입찰과 선정은 카파피가 합니다.
          아래는 실제로 오간 업무 #{q.id}의 기록입니다.
        </p>
      </div>

      <div className={s.grid}>
        <div className={s.stack}>
          <section>
            <div className={s.panelHead}>
              <h2 className={s.panelTitle}>1. 발주자가 업무를 올립니다</h2>
              <span className={s.panelEn}>업무 등록</span>
            </div>
            <div className={s.card}>
              <p className={s.cardTitle}>{q.title}</p>
              <p className={s.note}>{q.summary}</p>
              <div className={s.chips} style={{ marginTop: 12 }}>
                <span className={s.chip}>{q.categoryLabel}</span>
                <span className={s.chip}>마감 {q.deadlineLabel}</span>
                <span className={s.chip}>원하는 가격 {won(q.budget)} 이내</span>
                {q.nda ? <span className={s.chip}>보안 서약 필요</span> : null}
              </div>
              <p className={s.note} style={{ marginTop: 12 }}>
                파일과 한 줄 설명이면 충분합니다. 원하는 가격과 마감은 대략만 정해도 되고, 카파피가 작업 조건으로 정리합니다.
              </p>
            </div>
          </section>

          <section>
            <div className={s.panelHead}>
              <h2 className={s.panelTitle}>2. 작업자들이 가격과 완료시간을 입찰합니다</h2>
              <span className={s.panelEn}>제안 도착</span>
            </div>
            <div className={s.work}>
              <div className={s.events}>
                {all.map((c) => (
                  <div key={c.bid.id} className={s.ev} style={{ gridTemplateColumns: "1fr auto auto", gap: 20 }}>
                    <span>
                      <span className={s.evKo}>{c.person.name}</span>
                      <span className={s.evEn}>{c.person.career}</span>
                    </span>
                    <span className={s.pv}>{won(c.bid.price)}</span>
                    <span className={s.pv} style={{ color: "var(--dark-muted)" }}>{c.bid.hours}시간</span>
                  </div>
                ))}
              </div>
            </div>
            <p className={s.note} style={{ marginTop: 12 }}>
              모든 제안은 금액과 완료시간을 함께 냅니다. 긴 자기소개서는 없습니다.
            </p>
          </section>

          <section>
            <div className={s.panelHead}>
              <h2 className={s.panelTitle}>3. 카파피 AI가 작업자를 선정합니다</h2>
              <span className={s.panelEn}>작업자 배정</span>
            </div>
            <div className={s.card}>
              <div className={s.chips} style={{ marginBottom: 10 }}>
                <span className={`${s.chip} ${s.chipAccent}`}>선정</span>
                <span className={s.chip}>{won(r.picked?.bid.price ?? 0)}</span>
                <span className={s.chip}>{r.picked?.bid.hours ?? 0}시간 완료</span>
              </div>
              <p style={{ fontWeight: 650, marginBottom: 10 }}>{r.picked?.person.name} 님이 선정되었습니다</p>
              <div className={s.list}>
                {r.reasons.map((x) => <p key={x} className={s.item}><span className={s.mark} aria-hidden="true">▸</span>{x}</p>)}
              </div>

              {r.dropped.length > 0 ? (
                <div className={s.list} style={{ marginTop: 12 }}>
                  {r.dropped.map((c) => (
                    <p key={c.bid.id} className={s.item}>
                      <span className={s.mark} aria-hidden="true">·</span>
                      {c.person.name} 제외 — {c.out}
                    </p>
                  ))}
                </div>
              ) : null}

              <p className={s.note} style={{ marginTop: 12 }}>
                가장 싸거나 가장 빠르다는 이유만으로 선정하지 않습니다. 필수 조건을 통과한 제안만 놓고 가격, 완료시간, 같은 유형 작업이력과 정시완료율을 함께 봅니다.
                발주자가 제안을 비교하거나 고르는 단계는 없습니다.
              </p>
            </div>
          </section>

          <section>
            <div className={s.panelHead}>
              <h2 className={s.panelTitle}>4. 결과가 발주자에게 전달됩니다</h2>
              <span className={s.panelEn}>결과 도착</span>
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
            <p className={s.note} style={{ marginTop: 12 }}>
              카파피는 파일과 형식, 도착 시각까지만 확인합니다. 결과를 받아들일지 수정을 요청할지는 발주자가 정합니다.
            </p>
          </section>
        </div>

        <aside className={s.aside}>
          <div className={s.card}>
            <p className={s.cardTitle}>발주자가 하는 일</p>
            <div className={s.list}>
              <p className={s.item}><span className={s.mark} aria-hidden="true">1</span>파일을 올리고 한 줄로 설명합니다</p>
              <p className={s.item}><span className={s.mark} aria-hidden="true">2</span>원하는 가격과 마감을 대략 정합니다</p>
              <p className={s.item}><span className={s.mark} aria-hidden="true">3</span>결과를 확인하거나 수정을 요청합니다</p>
            </div>
            <p className={s.note}>작업자를 찾고 비교하고 고르는 과정은 없습니다.</p>
          </div>
          <div className={s.card}>
            <p className={s.cardTitle}>작업자가 하는 일</p>
            <div className={s.list}>
              <p className={s.item}><span className={s.mark} aria-hidden="true">1</span>조건이 맞는 업무를 찾습니다</p>
              <p className={s.item}><span className={s.mark} aria-hidden="true">2</span>가격과 완료시간을 입찰합니다</p>
              <p className={s.item}><span className={s.mark} aria-hidden="true">3</span>선정되면 작업하고 결과를 납품합니다</p>
            </div>
            <p className={s.note}>서비스 상품을 먼저 만들 필요 없이, 이미 존재하는 일을 고릅니다.</p>
          </div>
          <div className={s.acts}>
            <Link href="/" className={`${s.btn} ${s.btnAccent}`}>업무 올리기</Link>
            <Link href="/board" className={`${s.btn} ${s.btnLine}`}>작업 찾기</Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
