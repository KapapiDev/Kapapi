"use client";

import NumberFlow from "@number-flow/react";

import { Chip } from "@/components/ui";
import { CATEGORIES } from "@/lib/fixtures";
import { CURRENT_USER_ID, USERS, useDemo } from "@/lib/demo-store";
import { pct } from "@/lib/format";
import { groupQuests } from "@/lib/roles";
import s from "./profile.module.css";

/**
 * One profile, two reputation domains.
 *
 * docs/IDENTITY_ROLE_MODEL.md section 5: execution evidence and issuer evidence
 * are shown side by side and never collapsed into one universal score.
 */
export default function ProfilePage() {
  const { quests, exp } = useDemo();
  const me = USERS[CURRENT_USER_ID];
  const groups = groupQuests(CURRENT_USER_ID, Object.values(quests));

  const ex = me.execution;
  const iss = me.issuer;
  const levelPct = Math.min(100, Math.round((exp / ex.expToNext) * 100));

  return (
    <div className={`k-frame ${s.wrap}`}>
      <div className={s.head}>
        <div className={s.identity}>
          <span className={s.avatar} aria-hidden="true">
            {me.initials}
          </span>
          <div style={{ minWidth: 0 }}>
            <h1 className={s.name}>{me.name}</h1>
            <p className={s.career}>{ex.career}</p>
            <p className={s.org}>{me.org}</p>
            <div className={s.headChips}>
              {me.credentials.map((c) => (
                <Chip key={c}>{c}</Chip>
              ))}
              {me.clearances.includes("NDA") ? <Chip>NDA 서약 완료</Chip> : null}
              <Chip tone="ok" dot>
                {ex.availability === "AVAILABLE" ? "AVAILABLE" : ex.availability}
              </Chip>
            </div>
          </div>
        </div>

        <div className={s.oneAccount}>
          <p className={s.oneAccountTitle}>ONE ACCOUNT</p>
          <p className={s.oneAccountBody}>
            카파피 계정은 하나입니다. 지금 맡긴 QUEST {groups.issued.length}건, 수행 중인
            QUEST {groups.executing.length}건, 입찰 중인 QUEST {groups.bidding.length}건이
            같은 계정에 함께 있습니다.
          </p>
        </div>
      </div>

      <div className={s.domains}>
        {/* ---- Execution / PLAYER domain ---- */}
        <section className={s.domain} aria-labelledby="exec-h">
          <div className={s.domainHead}>
            <h2 className={s.domainTitle} id="exec-h">
              수행 기록
            </h2>
            <p className={s.domainEn}>EXECUTION · AS PLAYER</p>
            <p className={s.domainNote}>
              내가 다른 사람의 QUEST를 수행했을 때 남는 기록입니다. 배정 판단에 쓰이는
              값이기도 합니다.
            </p>
          </div>

          <div className={s.stats}>
            <div className={s.stat}>
              <p className={s.statKey}>관련 경력</p>
              <p className={s.statValue}>{ex.careerYears}년</p>
              <p className={s.statNote}>건축사사무소 실무</p>
            </div>
            <div className={s.stat}>
              <p className={s.statKey}>완료 QUEST</p>
              <p className={s.statValue}>{ex.questsComplete}</p>
              <p className={s.statNote}>누적</p>
            </div>
            <div className={s.stat}>
              <p className={s.statKey}>On-time</p>
              <p className={s.statValue}>{pct(ex.onTimeRate)}</p>
              <p className={s.statNote}>정시 납품 비율</p>
            </div>
            <div className={s.stat}>
              <p className={s.statKey}>수정 요청률</p>
              <p className={s.statValue}>{pct(ex.revisionRate)}</p>
              <p className={s.statNote}>낮을수록 좋습니다</p>
            </div>
          </div>

          <div className={s.block}>
            <p className={s.blockLabel}>분야별 수행 이력 · RELEVANT HISTORY</p>
            {Object.entries(ex.relevantHistory).map(([categoryId, count]) => (
              <p key={categoryId} className={s.historyRow}>
                <span>{CATEGORIES[categoryId] ?? categoryId}</span>
                <span className={s.historyValue}>{count}건</span>
              </p>
            ))}
            <p className={s.historyRow}>
              <span>분쟁 이력</span>
              <span className={s.historyValue}>{ex.disputes}건</span>
            </p>
            <p className={s.historyRow}>
              <span>평점</span>
              <span className={s.historyValue}>{ex.rating.toFixed(1)}</span>
            </p>
          </div>

          <div className={s.block}>
            <p className={s.blockLabel}>수행 가능 분야 · SKILLS</p>
            <div className={s.skills}>
              {me.skills.map((skill) => (
                <Chip key={skill}>{CATEGORIES[skill] ?? skill}</Chip>
              ))}
            </div>
          </div>

          <div className={s.level}>
            <Chip tone="ink">LV.{ex.level}</Chip>
            <span className={s.levelBar} aria-hidden="true">
              <span className={s.levelFill} style={{ width: `${levelPct}%` }} />
            </span>
            <span className="k-mono" style={{ fontSize: "var(--k-meta)" }}>
              <NumberFlow value={exp} /> / {ex.expToNext} EXP
            </span>
            <span className={s.levelNote}>기록이며, 자격 요건은 아닙니다</span>
          </div>
        </section>

        {/* ---- Issuer / GM domain ---- */}
        <section className={s.domain} aria-labelledby="issuer-h">
          <div className={s.domainHead}>
            <h2 className={s.domainTitle} id="issuer-h">
              발주 기록
            </h2>
            <p className={s.domainEn}>ISSUER · AS GM</p>
            <p className={s.domainNote}>
              내가 일을 맡겼을 때 남는 기록입니다. 수행하는 쪽이 이 QUEST를 받을지
              판단할 때 보는 값입니다.
            </p>
          </div>

          <div className={s.stats}>
            <div className={s.stat}>
              <p className={s.statKey}>발주 QUEST</p>
              <p className={s.statValue}>{iss.questsIssued}</p>
              <p className={s.statNote}>누적</p>
            </div>
            <div className={s.stat}>
              <p className={s.statKey}>거래 완료율</p>
              <p className={s.statValue}>{pct(iss.paymentCompletionRate)}</p>
              <p className={s.statNote}>약속한 보수 지급</p>
            </div>
            <div className={s.stat}>
              <p className={s.statKey}>평균 검수</p>
              <p className={s.statValue}>{iss.medianReviewHours}H</p>
              <p className={s.statNote}>납품 후 확인까지</p>
            </div>
            <div className={s.stat}>
              <p className={s.statKey}>작업자 평가</p>
              <p className={s.statValue}>{iss.ratingFromPlayers.toFixed(1)}</p>
              <p className={s.statNote}>수행자가 남긴 평가</p>
            </div>
          </div>

          <div className={s.block}>
            <p className={s.blockLabel}>거래 신뢰 · TRANSACTION</p>
            <p className={s.historyRow}>
              <span>취소 이력</span>
              <span className={s.historyValue}>{iss.cancellations}건</span>
            </p>
            <p className={s.historyRow}>
              <span>분쟁 이력</span>
              <span className={s.historyValue}>{iss.disputes}건</span>
            </p>
            <p className={s.historyRow}>
              <span>현재 진행 중인 발주</span>
              <span className={s.historyValue}>
                {groups.issued.filter((q) => q.state !== "COMPLETE").length}건
              </span>
            </p>
          </div>

          <div className={s.block}>
            <p className={s.blockLabel}>참고 · NOTE</p>
            <p className={s.domainNote}>
              발주 기록에는 LEVEL과 EXP가 없습니다. 진행도는 지금까지 수행 쪽에만 정의되어
              있습니다. 두 기록은 하나의 점수로 합치지 않습니다.
            </p>
          </div>
        </section>
      </div>

      <p className={s.footNote}>
        카파피에는 의뢰인 계정과 작업자 계정이 따로 없습니다. 한 사람의 기록이 수행 쪽과
        발주 쪽으로 나뉘어 남을 뿐입니다. 어떤 QUEST에 참여할 수 있는지는 그 QUEST가
        요구하는 기술·자격·보안 조건으로 정해지며, 계정 종류로 정해지지 않습니다.
      </p>
    </div>
  );
}
