"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { NEW_ID, quoteFor, useDemo } from "@/lib/demo";
import { won } from "@/lib/kapapi";
import s from "@/components/app.module.css";

const DEADLINES = [
  { h: 6, label: "오늘 안에 (6시간)" },
  { h: 12, label: "오늘 밤까지 (12시간)" },
  { h: 24, label: "내일까지 (24시간)" },
  { h: 72, label: "3일 안에 (72시간)" },
];

export default function NewPage() {
  const router = useRouter();
  const { draft, submitted, quests, patchDraft, submit } = useDemo();

  if (!draft) {
    return (
      <div className={`frame ${s.confirm}`}>
        <h1 className={s.confirmTitle}>맡길 업무를 먼저 적어주세요</h1>
        <p className={s.confirmBody}>홈 화면에 업무를 적으면 작업 조건으로 정리해 드립니다.</p>
        <div className={s.confirmActs}>
          <Link href="/" className={`${s.btn} ${s.btnAccent}`}>홈으로</Link>
        </div>
      </div>
    );
  }

  if (submitted) {
    const q = quests[NEW_ID];
    return (
      <div className={`frame ${s.confirm}`}>
        <p className={s.confirmMark} aria-hidden="true">✓</p>
        <h1 className={s.confirmTitle}>업무가 등록되었습니다</h1>
        <p className={s.confirmEn}>업무 #{NEW_ID} 등록 완료</p>
        <p className={s.confirmBody}>
          조건에 맞는 제안이 모이면 카파피가 가격, 완료시간과 관련 작업이력을 바탕으로 작업자를 배정합니다. 발주자가 제안을 비교하거나 고를 필요는 없습니다.
          추천을 확인한 뒤 바로 작업을 시작할 수 있습니다.
        </p>
        <div className={s.confirmActs}>
          <Link href={`/quest/${NEW_ID}`} className={`${s.btn} ${s.btnPrimary}`}>진행 상황 보기</Link>
          <Link href="/" className={`${s.btn} ${s.btnLine}`}>다른 업무 맡기기</Link>
        </div>
        <div className={s.chips} style={{ justifyContent: "center", marginTop: 32 }}>
          <span className={s.chip}>{q?.categoryLabel}</span>
          <span className={s.chip}>마감 {q?.deadlineLabel}</span>
          <span className={s.chip}>예산 상한 {won(q?.budget ?? 0)}</span>
          {q?.nda ? <span className={s.chip}>보안 서약 필요</span> : null}
        </div>
      </div>
    );
  }

  const quote = quoteFor(draft.category, draft.deadlineHours);
  const resolved = draft.missing.length === 0;

  return (
    <div className={`frame ${s.wrap}`}>
      <p className={s.crumb}><Link href="/">업무 등록</Link><span aria-hidden="true">/</span><span>작업 조건 확인</span></p>
      <div className={s.head}>
        <h1 className={s.title}>이 조건으로 진행할까요?</h1>
        <p className={s.sub}>요청을 작업 조건으로 정리하고, 카파피가 결과물·가격·완료시간을 제시했습니다. 승인하면 작업자 배정부터 결과 전달까지 카파피가 진행합니다.</p>
      </div>

      <div className={s.sheet}>
        <div className={s.sheetHead}>
          <span className={s.sheetTitle}>{draft.title}</span>
          <span className={s.chip}>{draft.category === "cad" ? "도면 정리" : draft.category === "image" ? "이미지 편집" : draft.category === "data" ? "데이터 정리" : "문서 정리"}</span>
          {draft.nda ? <span className={s.chip}>보안 서약 필요</span> : null}
        </div>

        <div className={s.block}>
          <p className={s.blockLabel}>요청 내용</p>
          <p className={s.quote}>{draft.text}</p>
        </div>

        {draft.files.length > 0 ? (
          <div className={s.block}>
            <p className={s.blockLabel}>첨부한 자료</p>
            <div className={s.files}>
              {draft.files.map((f) => (
                <div key={f.name} className={s.file}>
                  <span className={s.kind} aria-hidden="true">{(f.name.split(".").pop() ?? "").toUpperCase().slice(0,4)}</span>
                  <span style={{ minWidth: 0 }}><span className={s.fname}>{f.name}</span><span className={s.fmeta}>{f.size}</span></span>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className={s.block}>
          <p className={s.blockLabel}>작업 범위</p>
          <div className={s.list}>
            {draft.scope.map((l) => (<p key={l} className={s.item}><span className={s.mark} aria-hidden="true">·</span>{l}</p>))}
          </div>
        </div>

        <div className={s.pairGrid}>
          <div className={s.half}>
            <p className={s.blockLabel}>제출 형식</p>
            <p className={s.item}>{draft.outputs.join(", ")}</p>
          </div>
          <div className={s.half}>
            <p className={s.blockLabel}>확인 기준</p>
            <div className={s.list}>
              {draft.accept.map((l) => (<p key={l} className={s.item}><span className={s.mark} aria-hidden="true">·</span>{l}</p>))}
            </div>
          </div>
        </div>

        <div className={s.block}>
          <p className={s.blockLabel}>마감</p>
          <div className={s.ctrl}>
            <label className="sr" htmlFor="dl">마감 선택</label>
            <select id="dl" className={s.select} value={draft.deadlineHours}
              onChange={(e) => patchDraft({ deadlineHours: Number(e.target.value) })}>
              {DEADLINES.map((d) => (<option key={d.h} value={d.h}>{d.label}</option>))}
            </select>
          </div>
          <p className={s.hint} style={{ marginTop: 6 }}>마감을 바꾸면 실행 계약의 가격과 완료시간도 다시 계산됩니다.</p>
        </div>

        {/* D-033.1: this is the object the 발주자 approves — a result, a price and a
            completion time, not a worker. */}
        <div className={s.contract}>
          <div className={s.contractCore}>
            <div className={s.contractHead}>
              <p className={s.contractTitle}>실행 계약</p>
              <span className={s.contractTag}>카파피가 제시</span>
            </div>

            {quote.feasible ? (
              <>
                {/* The two committed numbers carry the screen. Everything else on
                    it is a term qualifying them. */}
                <div className={s.contractFigures}>
                  <div className={s.figure}>
                    <span className={s.figureK}>가격</span>
                    <span className={s.figureV}>{won(quote.price)}</span>
                  </div>
                  <div className={s.figure}>
                    <span className={s.figureK}>완료시간</span>
                    <span className={s.figureV}>{quote.hours}시간 이내</span>
                  </div>
                </div>

                <div className={s.contractRows}>
                  <div className={s.contractRow}>
                    <span className={s.ck}>결과물</span>
                    <span className={s.cv}>{draft.outputs.join(", ")}</span>
                  </div>
                  <div className={s.contractRow}>
                    <span className={s.ck}>수정</span>
                    <span className={s.cv}>합의한 범위와 다를 경우 1회</span>
                  </div>
                  <div className={s.contractRow}>
                    <span className={s.ck}>완료되지 않으면</span>
                    <span className={s.cv}>카파피가 다시 배정합니다. 그래도 안 되면 대금을 청구하지 않습니다.</span>
                  </div>
                </div>

                <p className={s.contractBasis}>
                  지금 이 유형의 업무에 들어온 제안 {quote.basis.count}건({won(quote.basis.low)}–{won(quote.basis.high)})을 근거로 계산했습니다.
                  작업자는 카파피가 정하며 발주자가 고르지 않습니다.
                </p>
              </>
            ) : (
              <p className={s.contractBasis}>
                이 마감 안에 끝낼 수 있는 제안이 아직 없습니다. 가장 빠른 제안이 {quote.hours}시간이라 마감을 늘리면 계약을 제시할 수 있습니다.
              </p>
            )}
          </div>
        </div>

        {resolved ? (
          <div className={s.block}>
            <p className={s.item} style={{ color: "var(--ok)" }}><span aria-hidden="true">✓</span> 제안을 받기 위한 정보가 모두 확인되었습니다</p>
          </div>
        ) : (
          <div className={s.missing}>
            <p className={s.missingTitle}>확인이 필요한 항목 {draft.missing.length}가지</p>
            <div className={s.list}>
              {draft.missing.map((m) => (<p key={m} className={s.missingItem}>· {m}</p>))}
            </div>
            <label className="sr" htmlFor="sup">추가 조건</label>
            <textarea id="sup" className={s.supplement} placeholder="예: 오늘 19시까지, DWG와 PDF 각각, 도면 3장"
              onChange={(e) => patchDraft({ missing: e.target.value.trim() ? [] : draft.missing })} />
          </div>
        )}

        <div className={s.submitBar}>
          <button type="button" className={s.approve} disabled={!quote.feasible}
            onClick={() => { submit(); router.refresh(); }}>
            이 조건으로 맡기기
            <span className={s.approveIcon} aria-hidden="true">→</span>
          </button>
          <Link href="/" className={`${s.btn} ${s.btnGhost}`}>다시 적기</Link>
          <p className={s.hint} style={{ maxWidth: "44ch" }}>
            승인하면 카파피가 작업자를 조달하고 배정합니다. 발주자가 제안을 비교하거나 고를 필요는 없습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
