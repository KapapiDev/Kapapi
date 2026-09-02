"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { FileRow, Button, Chip } from "@/components/ui";
import { LIVE_QUEST_ID, useDemo } from "@/lib/demo-store";
import { won } from "@/lib/format";
import s from "./new.module.css";

const DEADLINE_OPTIONS = [
  { hours: 6, label: "오늘 안에 (6시간)" },
  { hours: 12, label: "오늘 밤까지 (12시간)" },
  { hours: 24, label: "내일 같은 시각까지 (24시간)" },
  { hours: 72, label: "3일 내 (72시간)" },
];

export default function ScopePage() {
  const router = useRouter();
  const { draft, submitted, quests, patchDraft, setSupplement, submit } = useDemo();

  /* ---- Nothing to confirm yet ---- */
  if (!draft) {
    return (
      <div className={`k-frame ${s.empty}`}>
        <h1 className={s.title}>맡길 일을 먼저 적어주세요</h1>
        <p className={s.sub} style={{ marginInline: "auto" }}>
          홈 화면의 입력란에 맡기고 싶은 일을 적으면, 카파피가 작업 사양으로 정리해서
          여기에서 확인받습니다.
        </p>
        <div style={{ marginTop: 24 }}>
          <Link href="/">
            <Button variant="accent" size="lg">
              일 맡기러 가기 →
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  /* ---- Hands-off confirmation ---- */
  if (submitted) {
    const quest = quests[LIVE_QUEST_ID];
    return (
      <div className={`k-frame ${s.confirm}`}>
        <p className={s.confirmMark} aria-hidden="true">
          ✓
        </p>
        <h1 className={s.confirmTitle}>맡겼습니다.
          <br />
          이제 하시던 일 하세요.
        </h1>
        <p className={s.confirmEn}>QUEST #{LIVE_QUEST_ID} CREATED</p>
        <p className={s.confirmBody}>
          지금부터 작업자를 찾고, 자격을 확인하고, 제안을 비교하는 일은 카파피가 합니다.
          <br />
          결과가 준비되면 확인만 하시면 됩니다.
        </p>

        <div className={s.confirmActions}>
          <Link href={`/quest/${LIVE_QUEST_ID}`}>
            <Button variant="primary" size="lg">
              진행 상황 보기 →
            </Button>
          </Link>
          <Link href="/">
            <Button variant="secondary" size="lg">
              다른 일 맡기기
            </Button>
          </Link>
        </div>

        <div className={s.confirmMeta}>
          <Chip>{quest?.categoryLabel}</Chip>
          <Chip>마감 {quest?.deadlineLabel}</Chip>
          <Chip>예산 상한 {won(quest?.budgetCeiling ?? 0)}</Chip>
          {quest?.nda ? <Chip>NDA ON</Chip> : null}
        </div>
      </div>
    );
  }

  /* ---- Scope confirmation ---- */
  const scope = draft.scope;
  const resolved = scope.missingInfo.length === 0;

  return (
    <div className={`k-frame ${s.wrap}`}>
      <div className={s.grid}>
        <div>
          <p className={s.crumb}>
            <Link href="/">일 맡기기</Link>
            <span aria-hidden="true">/</span>
            <span>SCOPE CONFIRMATION</span>
          </p>

          <h1 className={s.title}>이렇게 정리했습니다. 맞나요?</h1>
          <p className={s.sub}>
            적어주신 내용을 작업 사양으로 정리했습니다. 여기서 한 번만 확인하면, 이후
            작업자를 찾고 고르는 과정은 카파피가 진행합니다.
          </p>

          <div className={s.sheet}>
            <div className={s.sheetHead}>
              <span className={s.sheetTitle}>{scope.title}</span>
              <Chip>{scope.categoryLabel}</Chip>
              {scope.nda ? <Chip>NDA ON</Chip> : null}
              <Chip tone="accent">QUEST DRAFT</Chip>
            </div>

            <div className={s.block}>
              <p className={s.blockLabel}>요청 원문 · REQUEST</p>
              <p className={s.quote}>{draft.text}</p>
            </div>

            {draft.files.length > 0 ? (
              <div className={s.block}>
                <p className={s.blockLabel}>입력 자료 · INPUT</p>
                <div className={s.list}>
                  {draft.files.map((file) => (
                    <FileRow key={file.name} file={file} />
                  ))}
                </div>
              </div>
            ) : null}

            <div className={s.block}>
              <p className={s.blockLabel}>작업 범위 · SCOPE</p>
              <div className={s.list}>
                {scope.scope.map((line) => (
                  <p key={line} className={s.listItem}>
                    <span className={s.listMark} aria-hidden="true">
                      ·
                    </span>
                    {line}
                  </p>
                ))}
              </div>
            </div>

            <div className={s.pairGrid}>
              <div className={s.pair}>
                <p className={s.blockLabel}>산출물 · DELIVERABLES</p>
                <div className={s.list}>
                  {scope.deliverables.map((line) => (
                    <p key={line} className={s.listItem}>
                      <span className={s.listMark} aria-hidden="true">
                        ·
                      </span>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
              <div className={s.pair}>
                <p className={s.blockLabel}>제출 형식 · FORMAT</p>
                <p className={s.listItem}>{scope.outputFormats.join(" · ")}</p>
              </div>
            </div>

            <div className={s.pairGrid}>
              <div className={s.pair}>
                <p className={s.blockLabel}>마감 · DEADLINE</p>
                <div className={s.controlRow}>
                  <label className="k-sr" htmlFor="deadline">
                    마감 선택
                  </label>
                  <select
                    id="deadline"
                    className={s.select}
                    value={scope.deadlineInHours}
                    onChange={(e) => {
                      const hours = Number(e.target.value);
                      patchDraft({
                        deadlineInHours: hours,
                        timeAttack: hours <= 6,
                        deadlineLabel:
                          DEADLINE_OPTIONS.find((o) => o.hours === hours)?.label ?? "",
                      });
                    }}
                  >
                    {DEADLINE_OPTIONS.map((option) => (
                      <option key={option.hours} value={option.hours}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <p className={s.controlNote}>
                  마감을 넘기는 제안은 배정 후보에서 제외됩니다.
                </p>
              </div>

              <div className={s.pair}>
                <p className={s.blockLabel}>예산 상한 · BUDGET CEILING</p>
                <div className={s.controlRow}>
                  <label className="k-sr" htmlFor="budget">
                    예산 상한 금액
                  </label>
                  <span aria-hidden="true">₩</span>
                  <input
                    id="budget"
                    type="number"
                    className={s.number}
                    min={10000}
                    step={10000}
                    value={scope.budgetCeiling}
                    onChange={(e) =>
                      patchDraft({ budgetCeiling: Math.max(0, Number(e.target.value)) })
                    }
                  />
                </div>
                <p className={s.controlNote}>
                  카파피는 이 금액을 넘는 제안을 배정하지 않습니다. 가격 자체는 제안한
                  사람이 정합니다.
                </p>
              </div>
            </div>

            <div className={s.block}>
              <p className={s.blockLabel}>확인 기준 · ACCEPTANCE</p>
              <div className={s.list}>
                {scope.acceptanceCriteria.map((line) => (
                  <p key={line} className={s.listItem}>
                    <span className={s.listMark} aria-hidden="true">
                      ·
                    </span>
                    {line}
                  </p>
                ))}
              </div>
            </div>

            <div className={s.pairGrid}>
              <div className={s.pair}>
                <p className={s.blockLabel}>수정 범위 · REVISION</p>
                <p className={s.listItem}>{scope.revisionBoundary}</p>
              </div>
              <div className={s.pair}>
                <p className={s.blockLabel}>보안 · SECURITY</p>
                <p className={s.listItem}>
                  {scope.nda
                    ? "NDA 서약자만 참여 · 제3자 제공 금지"
                    : "일반 · 별도 기밀 요건 없음"}
                </p>
              </div>
            </div>

            {resolved ? (
              <div className={s.block}>
                <p className={s.resolved}>
                  <span aria-hidden="true">✓</span> 배정에 필요한 정보가 모두 확인되었습니다
                </p>
              </div>
            ) : (
              <div className={s.missing}>
                <p className={s.missingTitle}>
                  확인이 필요한 항목 {scope.missingInfo.length}가지
                </p>
                <div className={s.missingList}>
                  {scope.missingInfo.map((line) => (
                    <p key={line} className={s.missingItem}>
                      <span aria-hidden="true">·</span> {line}
                    </p>
                  ))}
                </div>
                <label className="k-sr" htmlFor="supplement">
                  추가 조건 입력
                </label>
                <textarea
                  id="supplement"
                  className={s.supplement}
                  placeholder="예: 오늘 19시까지, DWG와 PDF 각각, 도면 3장"
                  value={draft.supplement}
                  onChange={(e) => setSupplement(e.target.value)}
                />
              </div>
            )}

            <div className={s.submitBar}>
              <Button
                variant="accent"
                size="lg"
                confirmFeedback
                onClick={() => {
                  submit();
                  router.refresh();
                }}
              >
                이대로 맡기기 →
              </Button>
              <Link href="/">
                <Button variant="ghost">다시 적기</Button>
              </Link>
              <p className={s.submitNote}>
                맡기면 자격을 갖춘 사람들에게 공개되고, 카파피가 배정까지 진행합니다.
              </p>
            </div>
          </div>
        </div>

        <aside className={s.aside}>
          <div className={s.asideCard}>
            <p className={s.asideTitle}>여기서 카파피가 한 일</p>
            <p className={s.asideBody}>
              적어주신 문장을 분야로 분류하고, 산출물·제출 형식·확인 기준·수정 범위를
              초안으로 채우고, 빠진 정보를 표시했습니다.
            </p>
            <p className={s.asideNote}>
              카파피는 가격을 정하지 않습니다. 예산 상한은 사용자가 정하는 값이고, 실제
              금액은 제안한 사람이 제시합니다. 결과의 품질 판단도 카파피가 하지 않습니다.
            </p>
          </div>

          <div className={s.asideCard}>
            <p className={s.asideTitle}>맡긴 다음에 일어나는 일</p>
            <p className={s.asideBody}>
              자격을 갖춘 사람들이 가격과 완료시간을 제안합니다. 카파피가 요건을 거르고
              배정합니다. 작업이 끝나면 결과를 확인하거나 수정을 요청하면 됩니다.
            </p>
            <p className={s.asideNote}>
              이 과정에서 사용자가 작업자를 고르는 단계는 없습니다.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
