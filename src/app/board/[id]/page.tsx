"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

import { useDemo } from "@/lib/demo";
import { ME, PEOPLE, eligible, won } from "@/lib/kapapi";
import s from "@/components/app.module.css";

export default function BoardDetail() {
  const { id } = useParams<{ id: string }>();
  const { quests, placeBid } = useDemo();
  const q = quests[id];

  const [price, setPrice] = useState("");
  const [hours, setHours] = useState("");
  const [err, setErr] = useState<string | null>(null);

  if (!q) {
    return (
      <div className={`frame ${s.confirm}`}>
        <h1 className={s.confirmTitle}>업무를 찾을 수 없습니다</h1>
        <div className={s.confirmActs}><Link href="/board" className={`${s.btn} ${s.btnLine}`}>작업 찾기로</Link></div>
      </div>
    );
  }

  const me = PEOPLE[ME];
  const issuer = PEOPLE[q.issuerId];
  const e = eligible(me, q);
  const mine = q.bids.find((b) => b.personId === ME);
  const isOwn = q.issuerId === ME;

  function send() {
    const p = Number(price.replace(/[^0-9]/g, ""));
    const h = Number(hours);
    if (!p || p < 10000) { setErr("금액을 10,000원 이상 입력해 주세요"); return; }
    if (!h || h <= 0) { setErr("완료 시간을 시간 단위로 입력해 주세요"); return; }
    if (h > q.deadlineHours) { setErr(`이 업무의 마감은 ${q.deadlineHours}시간입니다`); return; }
    setErr(null);
    placeBid(q.id, p, h);
  }

  return (
    <div className={`frame ${s.wrap}`}>
      <p className={s.crumb}>
        <Link href="/board">작업 찾기</Link><span aria-hidden="true">/</span><span>업무 #{q.id}</span>
      </p>

      <div className={s.head}>
        <h1 className={s.title}>{q.title}</h1>
        <div className={s.chips}>
          <span className={s.chip}>{q.categoryLabel}</span>
          <span className={s.chip}>마감 {q.deadlineLabel}</span>
          {q.nda ? <span className={s.chip}>보안 서약</span> : null}
          <span className={`${s.chip} ${e.ok ? s.chipOk : s.chipWarn}`}>
            <span className={s.dot} aria-hidden="true" />{e.ok ? "참여 가능" : "조건 미충족"}
          </span>
        </div>
        <p className={s.sub}>{q.summary}</p>
      </div>

      <div className={s.grid}>
        <div className={s.stack}>
          <section>
            <div className={s.panelHead}><h2 className={s.panelTitle}>맡긴 자료</h2></div>
            <div className={s.files}>
              {q.inputs.map((f) => (
                <div key={f.name} className={s.file}>
                  <span className={s.kind} aria-hidden="true">{f.kind}</span>
                  <span style={{ minWidth: 0 }}><span className={s.fname}>{f.name}</span><span className={s.fmeta}>{f.kind} · {f.size}</span></span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className={s.panelHead}><h2 className={s.panelTitle}>작업 범위</h2></div>
            <div className={s.list}>{q.scope.map((l) => <p key={l} className={s.item}><span className={s.mark} aria-hidden="true">·</span>{l}</p>)}</div>
          </section>

          <section>
            <div className={s.panelHead}><h2 className={s.panelTitle}>확인 기준</h2></div>
            <div className={s.list}>
              {q.accept.map((l) => <p key={l} className={s.item}><span className={s.mark} aria-hidden="true">·</span>{l}</p>)}
              <p className={s.item}><span className={s.mark} aria-hidden="true">·</span>제출 형식 {q.outputs.join(", ")}</p>
              <p className={s.item}><span className={s.mark} aria-hidden="true">·</span>{q.revisionRule}</p>
            </div>
          </section>

          <section>
            <div className={s.panelHead}><h2 className={s.panelTitle}>맡긴 사람</h2></div>
            <div className={s.trust}><p className={s.trustName}>{issuer.name}</p><p className={s.trustCareer}>{issuer.career}</p></div>
          </section>
        </div>

        <div className={s.bid}>
          <div className={s.bidHead}>
            <p className={s.bidTitle}>얼마에, 언제까지</p>
            <p className={s.bidSub}>두 값이 모두 필요합니다. 긴 제안서는 쓰지 않아도 됩니다.</p>
          </div>

          {isOwn ? (
            <div className={s.blocked}>
              <p style={{ fontWeight: 650 }}>내가 맡긴 업무입니다</p>
              <p className={s.hint}>이 업무에서 나는 맡긴 쪽입니다. 제안과 추천은 업무 화면에서 확인할 수 있습니다.</p>
              <Link href={`/quest/${q.id}`} className={`${s.btn} ${s.btnLine}`}>업무 화면 보기</Link>
            </div>
          ) : mine ? (
            <div className={s.blocked}>
              <p style={{ fontWeight: 650 }}>제안을 보냈습니다</p>
              <div className={s.preview}><span className={s.pk}>내 제안</span><span className={s.pv}>{won(mine.price)} / {mine.hours}시간</span></div>
              <p className={s.hint}>카파피가 자격, 마감, 가격, 완료시간과 관련 이력을 함께 보고 추천 후보를 정리합니다. 최종 확정 전까지는 아직 배정된 것이 아닙니다.</p>
              <span className={`${s.chip} ${s.chipAccent}`}>이 업무에 제안 참여 중</span>
              <Link href="/my" className={`${s.btn} ${s.btnLine}`}>내 업무에서 보기</Link>
            </div>
          ) : !e.ok ? (
            <div className={s.blocked}>
              <p style={{ fontWeight: 650, color: "var(--warn)" }}>이 업무에는 참여할 수 없습니다</p>
              {e.why.map((w) => <p key={w} className={s.item}>· {w}</p>)}
              <p className={s.hint}>계정 종류의 문제가 아닙니다. 조건을 갖추면 같은 계정으로 바로 제안할 수 있습니다.</p>
              <Link href="/board" className={`${s.btn} ${s.btnLine}`}>참여 가능한 작업 보기</Link>
            </div>
          ) : (
            <div className={s.bidBody}>
              <div className={s.pair}>
                <div className={s.field}>
                  <label className={s.flabel} htmlFor="price">금액</label>
                  <div className={s.inputBox}>
                    <span className={s.unit} aria-hidden="true">₩</span>
                    <input id="price" className={s.numInput} inputMode="numeric" placeholder="120000" value={price} onChange={(ev) => { setPrice(ev.target.value.replace(/[^0-9]/g, "")); setErr(null); }} />
                  </div>
                </div>
                <span className={s.times} aria-hidden="true">×</span>
                <div className={s.field}>
                  <label className={s.flabel} htmlFor="hours">완료 시간</label>
                  <div className={s.inputBox}>
                    <input id="hours" className={s.numInput} inputMode="numeric" placeholder="8" value={hours} onChange={(ev) => { setHours(ev.target.value.replace(/[^0-9]/g, "")); setErr(null); }} />
                    <span className={s.unit} aria-hidden="true">시간</span>
                  </div>
                </div>
              </div>

              <p className={s.hint}>완료 시간은 작업자로 확정된 시점부터 납품까지 걸리는 시간입니다.</p>
              {price && hours ? <div className={s.preview}><span className={s.pk}>보낼 제안</span><span className={s.pv}>{won(Number(price))} / {hours}시간</span></div> : null}
              {err ? <p className={s.err} role="alert">{err}</p> : null}

              <button type="button" className={`${s.btn} ${s.btnAccent}`} onClick={send}>제안 보내기</button>
              <p className={s.hint}>필수 조건을 통과한 제안만 비교 대상이 됩니다. 카파피가 가격과 완료시간, 관련 작업이력을 함께 보고 배정하며, 가장 싸거나 가장 빠른 제안이 자동으로 선정되지는 않습니다.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
