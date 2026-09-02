"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

import { Countdown } from "@/components/quest";
import { Button, Chip, FileRow } from "@/components/ui";
import { CURRENT_USER_ID, USERS, useDemo } from "@/lib/demo-store";
import { won } from "@/lib/format";
import { eligibilityFor } from "@/lib/roles";
import s from "./detail.module.css";

export default function QuestDetailPage() {
  const params = useParams<{ id: string }>();
  const { quests, placeBid } = useDemo();
  const quest = quests[params.id];

  const [price, setPrice] = useState("");
  const [hours, setHours] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState<string | null>(null);

  if (!quest) {
    return (
      <div className={`k-frame ${s.notFound}`}>
        <h1 className={s.title}>QUEST를 찾을 수 없습니다</h1>
        <div style={{ marginTop: 24 }}>
          <Link href="/board">
            <Button variant="secondary">일 찾기로 →</Button>
          </Link>
        </div>
      </div>
    );
  }

  const me = USERS[CURRENT_USER_ID];
  const issuer = USERS[quest.issuerId];
  const eligibility = eligibilityFor(me, quest);
  const myBid = quest.bids.find((b) => b.playerId === CURRENT_USER_ID);
  const isMine = quest.issuerId === CURRENT_USER_ID;

  function submitBid() {
    const p = Number(price.replace(/[^0-9]/g, ""));
    const h = Number(hours);
    if (!p || p < 10000) {
      setError("가격을 10,000원 이상으로 입력해주세요.");
      return;
    }
    if (!h || h <= 0) {
      setError("완료까지 걸리는 시간을 시간 단위로 입력해주세요.");
      return;
    }
    if (h > quest.deadlineInHours) {
      setError(
        `이 QUEST의 마감은 ${quest.deadlineInHours}시간입니다. 그 안에 완료 가능한 시간을 적어주세요.`,
      );
      return;
    }
    setError(null);
    placeBid(quest.id, p, h, note.trim() || undefined);
  }

  return (
    <div className={`k-frame ${s.wrap}`}>
      <p className={s.crumb}>
        <Link href="/board">일 찾기</Link>
        <span aria-hidden="true">/</span>
        <span>QUEST #{quest.id}</span>
      </p>

      <div className={s.head}>
        <h1 className={s.title}>{quest.title}</h1>
        <div className={s.chips}>
          <Chip>QUEST #{quest.id}</Chip>
          <Chip>{quest.categoryLabel}</Chip>
          {quest.timeAttack ? (
            <Chip tone="ink">
              <Countdown hours={quest.deadlineInHours} />
            </Chip>
          ) : (
            <Chip>마감 {quest.deadlineLabel}</Chip>
          )}
          {quest.nda ? <Chip>NDA ON</Chip> : null}
          <Chip tone={eligibility.eligible ? "ok" : "warn"} dot>
            {eligibility.eligible ? "참여 가능" : "자격 미충족"}
          </Chip>
        </div>
        <p className={s.summary}>{quest.summary}</p>
      </div>

      <div className={s.grid}>
        <div>
          <section className={s.section}>
            <div className={s.sectionTitle}>
              <h2 className={s.sectionKo}>맡긴 자료</h2>
              <span className={s.sectionEn}>INPUT</span>
            </div>
            <div className={s.files}>
              {quest.inputs.map((file) => (
                <FileRow key={file.name} file={file} />
              ))}
            </div>
          </section>

          <section className={s.section}>
            <div className={s.sectionTitle}>
              <h2 className={s.sectionKo}>작업 범위</h2>
              <span className={s.sectionEn}>SCOPE</span>
            </div>
            <div className={s.list}>
              {quest.scope.map((line) => (
                <p key={line} className={s.item}>
                  <span className={s.mark} aria-hidden="true">
                    ·
                  </span>
                  {line}
                </p>
              ))}
            </div>
          </section>

          <section className={s.section}>
            <div className={s.sectionTitle}>
              <h2 className={s.sectionKo}>산출물과 형식</h2>
              <span className={s.sectionEn}>DELIVERABLES</span>
            </div>
            <div className={s.list}>
              {quest.deliverables.map((line) => (
                <p key={line} className={s.item}>
                  <span className={s.mark} aria-hidden="true">
                    ·
                  </span>
                  {line}
                </p>
              ))}
              <p className={s.item}>
                <span className={s.mark} aria-hidden="true">
                  ·
                </span>
                형식 {quest.outputFormats.join(" · ")}
              </p>
            </div>
          </section>

          <section className={s.section}>
            <div className={s.sectionTitle}>
              <h2 className={s.sectionKo}>확인 기준</h2>
              <span className={s.sectionEn}>ACCEPTANCE</span>
            </div>
            <div className={s.list}>
              {quest.acceptanceCriteria.map((line) => (
                <p key={line} className={s.item}>
                  <span className={s.mark} aria-hidden="true">
                    ·
                  </span>
                  {line}
                </p>
              ))}
              <p className={s.item}>
                <span className={s.mark} aria-hidden="true">
                  ·
                </span>
                수정 범위 · {quest.revisionBoundary}
              </p>
            </div>
          </section>

          <section className={s.section}>
            <div className={s.sectionTitle}>
              <h2 className={s.sectionKo}>참여 조건</h2>
              <span className={s.sectionEn}>ELIGIBILITY</span>
            </div>
            <div className={s.list}>
              <p className={s.item}>
                <span className={s.mark} aria-hidden="true">
                  ·
                </span>
                분야 · {quest.categoryLabel} 수행 가능
              </p>
              {quest.requiredCredentials.length > 0 ? (
                <p className={s.item}>
                  <span className={s.mark} aria-hidden="true">
                    ·
                  </span>
                  자격 · {quest.requiredCredentials.join(", ")}
                </p>
              ) : null}
              <p className={s.item}>
                <span className={s.mark} aria-hidden="true">
                  ·
                </span>
                보안 · {quest.nda ? "NDA 서약 필요, 제3자 제공 금지" : "별도 요건 없음"}
              </p>
              <p className={s.item}>
                <span className={s.mark} aria-hidden="true">
                  ·
                </span>
                맡긴 사람 · {issuer.name} ({issuer.org}) · 발주{" "}
                {issuer.issuer.questsIssued}건 · 평균 검수{" "}
                {issuer.issuer.medianReviewHours}시간
              </p>
            </div>
          </section>
        </div>

        {/* ---- BID ---- */}
        <div className={s.bid}>
          <div className={s.bidHead}>
            <p className={s.bidTitle}>얼마에, 언제까지</p>
            <p className={s.bidSub}>
              두 값 모두 필요합니다. 긴 제안서는 쓰지 않아도 됩니다.
            </p>
          </div>

          <div className={s.bidContext}>
            <span className={s.ctxItem}>
              <span className={s.ctxKey}>Bids</span>
              <span className={s.ctxValue}>
                {String(quest.bids.length).padStart(2, "0")}
              </span>
            </span>
            <span className={s.ctxItem}>
              <span className={s.ctxKey}>마감</span>
              <span className={s.ctxValue}>≤ {quest.deadlineInHours}H</span>
            </span>
            {quest.rewardHint ? (
              <span className={s.ctxItem}>
                <span className={s.ctxKey}>Reward 범위</span>
                <span className={s.ctxValue}>
                  {won(quest.rewardHint[0])}–{won(quest.rewardHint[1])}
                </span>
              </span>
            ) : null}
          </div>

          {isMine ? (
            <div className={s.blocked}>
              <p className={s.blockedTitle}>내가 맡긴 QUEST입니다</p>
              <p className={s.hint}>
                이 QUEST에서 나는 GM입니다. 진행 상황은 내 QUEST에서 확인할 수 있습니다.
              </p>
              <Link href={`/quest/${quest.id}`}>
                <Button variant="secondary">진행 상황 보기 →</Button>
              </Link>
            </div>
          ) : myBid ? (
            <div className={s.submitted}>
              <p className={s.submittedTitle}>입찰을 제출했습니다</p>
              <div className={s.preview}>
                <span className={s.previewLabel}>내 BID</span>
                <span className={s.previewValue}>
                  {won(myBid.price)} / {myBid.deliveryHours}H
                </span>
              </div>
              <p className={s.hint}>
                이제 카파피가 자격·마감·예산 요건을 확인하고, 관련 경력과 납품 기록을 함께
                비교해 배정합니다. 배정 결과는 내 QUEST에서 확인할 수 있습니다.
              </p>
              <Chip tone="accent">이 QUEST에서 나는 PLAYER</Chip>
              <Link href="/my">
                <Button variant="secondary">내 QUEST에서 보기 →</Button>
              </Link>
            </div>
          ) : !eligibility.eligible ? (
            <div className={s.blocked}>
              <p className={s.blockedTitle}>이 QUEST에는 참여할 수 없습니다</p>
              {eligibility.blockers.map((blocker) => (
                <p key={blocker} className={s.blockedItem}>
                  <span aria-hidden="true">·</span> {blocker}
                </p>
              ))}
              <p className={s.hint}>
                계정 종류의 문제가 아닙니다. 이 QUEST가 요구하는 조건을 갖추면 같은
                계정으로 바로 입찰할 수 있습니다. 다른 QUEST는 계속 열려 있습니다.
              </p>
              <Link href="/board">
                <Button variant="secondary">참여 가능한 QUEST 보기 →</Button>
              </Link>
            </div>
          ) : (
            <div className={s.bidBody}>
              <div className={s.pair}>
                <div>
                  <label className={s.fieldLabel} htmlFor="bid-price">
                    가격 · PRICE
                  </label>
                  <div className={s.money}>
                    <span className={s.moneySign} aria-hidden="true">
                      ₩
                    </span>
                    <input
                      id="bid-price"
                      className={s.moneyInput}
                      inputMode="numeric"
                      placeholder="120000"
                      value={price}
                      onChange={(e) => {
                        setPrice(e.target.value.replace(/[^0-9]/g, ""));
                        setError(null);
                      }}
                      required
                    />
                  </div>
                </div>

                <span className={s.pairTimes} aria-hidden="true">
                  ×
                </span>

                <div>
                  <label className={s.fieldLabel} htmlFor="bid-hours">
                    완료시간 · DELIVERY
                  </label>
                  <div className={s.hoursWrap}>
                    <input
                      id="bid-hours"
                      className={s.hoursInput}
                      inputMode="numeric"
                      placeholder="8"
                      value={hours}
                      onChange={(e) => {
                        setHours(e.target.value.replace(/[^0-9]/g, ""));
                        setError(null);
                      }}
                      required
                    />
                    <span className={s.hoursUnit} aria-hidden="true">
                      H
                    </span>
                  </div>
                </div>
              </div>

              <p className={s.hint}>
                완료시간은 배정된 시점부터 납품까지의 경과 시간입니다. 작업에 들이는
                시간이 아닙니다.
              </p>

              {price && hours ? (
                <div className={s.preview}>
                  <span className={s.previewLabel}>제출될 BID</span>
                  <span className={s.previewValue}>
                    {won(Number(price))} / {hours}H
                  </span>
                </div>
              ) : null}

              <div>
                <label className={s.fieldLabel} htmlFor="bid-note">
                  한 줄 메모 (선택)
                </label>
                <textarea
                  id="bid-note"
                  className={s.note}
                  placeholder="관련 경험이 있다면 한 줄만 적어주세요"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>

              {error ? (
                <p className={s.error} role="alert">
                  {error}
                </p>
              ) : null}

              <Button variant="accent" size="lg" confirmFeedback onClick={submitBid}>
                입찰하기 · BID →
              </Button>

              <p className={s.hint}>
                입찰 후 작업자 선정은 카파피가 합니다. 가격이 가장 낮거나 시간이 가장
                짧다고 자동으로 배정되지 않습니다.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
