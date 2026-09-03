"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { NEW_ID, useDemo } from "@/lib/demo";
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
        <p className={s.confirmBody}>홈 화면에 업무를 적으면 작업 사양으로 정리해 드립니다.</p>
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
        <h1 className={s.confirmTitle}>의뢰가 등록되었습니다</h1>
        <p className={s.confirmEn}>QUEST #{NEW_ID} CREATED</p>
        <p className={s.confirmBody}>
          조건에 맞는 제안이 모이면 카파피가 가격, 완료시간과 관련 이력을 바탕으로 추천해드립니다.
          추천을 확인한 뒤 바로 작업을 시작할 수 있습니다.
        </p>
        <div className={s.confirmActs}>
          <Link href={`/quest/${NEW_ID}`} className={`${s.btn} ${s.btnPrimary}`}>제안과 추천 보기</Link>
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

  const resolved = draft.missing.length === 0;

  return (
    <div className={`frame ${s.wrap}`}>
      <p className={s.crumb}><Link href="/">의뢰 등록</Link><span aria-hidden="true">/</span><span>작업 사양 확인</span></p>
      <div className={s.head}>
        <h1 className={s.title}>이렇게 정리했습니다</h1>
        <p className={s.sub}>작업 범위와 마감만 확인하면 QUEST로 등록됩니다.</p>
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

        <div className={s.pairGrid}>
          <div className={s.half}>
            <p className={s.blockLabel}>마감</p>
            <div className={s.ctrl}>
              <label className="sr" htmlFor="dl">마감 선택</label>
              <select id="dl" className={s.select} value={draft.deadlineHours}
                onChange={(e) => patchDraft({ deadlineHours: Number(e.target.value) })}>
                {DEADLINES.map((d) => (<option key={d.h} value={d.h}>{d.label}</option>))}
              </select>
            </div>
            <p className={s.hint} style={{ marginTop: 6 }}>마감을 넘기는 제안은 추천 대상에서 제외됩니다.</p>
          </div>
          <div className={s.half}>
            <p className={s.blockLabel}>예산 상한</p>
            <div className={s.ctrl}>
              <span aria-hidden="true">₩</span>
              <label className="sr" htmlFor="bg">예산 상한 금액</label>
              <input id="bg" type="number" className={s.number} min={10000} step={10000}
                value={draft.budget} onChange={(e) => patchDraft({ budget: Math.max(0, Number(e.target.value)) })} />
            </div>
            <p className={s.hint} style={{ marginTop: 6 }}>이 금액을 넘는 제안은 추천하지 않습니다. 금액은 제안한 사람이 정합니다.</p>
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
          <button type="button" className={`${s.btn} ${s.btnAccent}`} onClick={() => { submit(); router.refresh(); }}>
            이대로 등록하기
          </button>
          <Link href="/" className={`${s.btn} ${s.btnGhost}`}>다시 적기</Link>
          <p className={s.hint} style={{ maxWidth: "44ch" }}>
            등록하면 조건을 갖춘 작업자들이 가격과 완료시간을 제안합니다. 제안이 모이면 카파피가 가장 적합한 후보를 추천합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
