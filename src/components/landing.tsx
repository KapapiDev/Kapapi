"use client";

import Link from "next/link";

import { CURRENT_USER_ID, FLAGSHIP_QUEST, QUESTS, USERS } from "@/lib/fixtures";
import { pct, won } from "@/lib/format";
import { Countdown, QuestCard, ResultObject } from "./quest";
import { RoutingPanel } from "./routing-panel";
import { Button, Chip, FileRow, MetaRow, SectionHead } from "./ui";
import s from "./landing.module.css";

/* ---------------------------------------------------------------- *
 * 02 — How it works
 * ---------------------------------------------------------------- */

const STEPS = [
  {
    title: "할 일을 적습니다",
    body: "파일과 마감만 있으면 됩니다. 정확한 사양은 카파피가 정리해서 확인만 받습니다.",
    term: "QUEST CREATED",
  },
  {
    title: "전문가들이 제안합니다",
    body: "자격을 갖춘 사람들이 가격과 완료시간을 함께 제시합니다. 둘 다 없으면 제안이 성립하지 않습니다.",
    term: "PRICE × DELIVERY BIDS",
  },
  {
    title: "카파피가 배정합니다",
    body: "자격·마감·예산을 먼저 거르고, 관련 경력과 납품 기록으로 한 사람을 정합니다. 고르는 일은 맡기지 않습니다.",
    term: "ROUTING · PLAYER ASSIGNED",
  },
  {
    title: "결과만 확인합니다",
    body: "결과 파일이 도착하면 확인하거나 합의된 범위 안에서 수정을 요청합니다.",
    term: "QUEST COMPLETE",
  },
];

export function HowItWorks() {
  return (
    <section className={s.section} aria-labelledby="how-title">
      <div className="k-frame">
        <SectionHead
          index="02 / HOW IT WORKS"
          title="맡기고 나면, 할 일이 하나 남습니다"
          note="일을 맡긴 다음 사용자가 하는 일은 결과를 확인하는 것뿐입니다. 사람을 찾고 비교하고 고르는 과정은 카파피 쪽으로 넘어갑니다."
          id="how-title"
        />
        <div className={s.steps}>
          {STEPS.map((step, i) => (
            <div key={step.title} className={s.step}>
              <p className={s.stepIndex}>{String(i + 1).padStart(2, "0")}</p>
              <h3 className={s.stepTitle}>{step.title}</h3>
              <p className={s.stepBody}>{step.body}</p>
              <p className={s.stepTerm}>{step.term}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- *
 * 03 — The messy middle disappears (dark operational band)
 * ---------------------------------------------------------------- */

export function MessyMiddle() {
  const quest = QUESTS["0182"];

  return (
    <section className={s.bandDark} aria-labelledby="middle-title" data-surface="dark">
      <div className={`k-frame ${s.middleGrid}`}>
        <div>
          <p className={s.darkEyebrow}>03 / THE MIDDLE</p>
          <h2 className={s.darkTitle} id="middle-title">
            입찰을 공부하는 사람은
            <br />
            사용자가 아닙니다
          </h2>
          <p className={s.darkBody}>
            제안은 실제로 경쟁합니다. 다만 그 비교를 사용자가 하지 않습니다. 카파피는 자격과
            보안, 마감, 예산을 먼저 거른 다음 남은 제안만 관련 경력과 납품 기록으로 비교합니다.
          </p>

          <div className={s.darkList}>
            {[
              "자격·보안·마감·예산은 순위 계산 전에 거릅니다",
              "가격과 완료시간은 제안한 사람이 정합니다",
              "관련 경력과 유사 작업 이력이 가장 큰 가중치입니다",
              "최저가도, 최단시간도 자동으로 이기지 않습니다",
              "배정 근거는 언제든 열어볼 수 있습니다",
            ].map((line) => (
              <p key={line} className={s.darkListRow}>
                <span className={s.darkListMark} aria-hidden="true">
                  ▸
                </span>
                {line}
              </p>
            ))}
          </div>
        </div>

        <RoutingPanel quest={quest} />
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- *
 * 04 — Flagship CAD case
 * ---------------------------------------------------------------- */

export function FlagshipCase() {
  const quest = FLAGSHIP_QUEST;
  const player = USERS[quest.assigneeId ?? "u-han"];

  return (
    <section className={s.section} aria-labelledby="case-title">
      <div className="k-frame">
        <SectionHead
          index="04 / REAL QUEST"
          title="실제로 이렇게 한 건이 돌아갑니다"
          note="건축·CAD는 카파피가 거래 방식을 먼저 검증하고 있는 분야입니다. 카파피가 다루는 일의 전부는 아닙니다."
          id="case-title"
        />

        <div className={s.caseGrid}>
          <div>
            <div className={s.spec}>
              <p className="k-hud" style={{ color: "var(--k-faint)" }}>
                QUEST #{quest.id}
              </p>
              <h3 className={s.specTitle} style={{ marginTop: 8 }}>
                {quest.title}
              </h3>

              <MetaRow label="분야">{quest.categoryLabel}</MetaRow>
              <MetaRow label="마감">{quest.deadlineLabel}</MetaRow>
              <MetaRow label="산출물">{quest.outputFormats.join(" · ")}</MetaRow>
              <MetaRow label="예산 상한">{won(quest.budgetCeiling)}</MetaRow>
              <MetaRow label="보안">NDA 필수 · 포트폴리오 사용 금지</MetaRow>
              <MetaRow label="수정 범위">{quest.revisionBoundary}</MetaRow>
            </div>

            <p className={s.caseNote}>
              손그림 실측 자료를 받아 사내 레이어 규칙에 맞춘 현황도로 정리하는, 사무소에서
              흔히 발생하는 지원 업무입니다. 법적으로 자격이 필요한 설계 판단은 이 QUEST의
              범위가 아닙니다.
            </p>

            <div style={{ marginTop: 24 }}>
              <Link href={`/quest/${quest.id}`}>
                <Button variant="secondary">이 QUEST 전체 보기 →</Button>
              </Link>
            </div>
          </div>

          <div>
            <p className={s.artifactLabel}>맡긴 자료 · INPUT</p>
            <div className={s.artifacts}>
              {quest.inputs.map((file) => (
                <FileRow key={file.name} file={file} />
              ))}
            </div>

            <p className={s.artifactLabel}>도착한 제안 · PRICE × DELIVERY</p>
            <RoutingPanel quest={quest} mode="auto" />

            <div style={{ marginTop: 24 }}>
              <p className={s.artifactLabel}>받은 결과 · RESULT</p>
              {quest.result ? <ResultObject result={quest.result} /> : null}
            </div>

            <p className={s.caseNote}>
              배정된 {player.name} 님은 {player.execution.career}. 같은 유형 QUEST{" "}
              {player.execution.relevantHistory.cad}건, 정시 납품{" "}
              {pct(player.execution.onTimeRate)}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- *
 * 05 — Trust
 * ---------------------------------------------------------------- */

export function TrustSection() {
  const player = USERS["u-han"];

  return (
    <section className={s.section} aria-labelledby="trust-title">
      <div className="k-frame">
        <SectionHead
          index="05 / TRUST"
          title="배정의 근거는 별점이 아닙니다"
          note="설명을 얼마나 덜 해도 되는지가 실제 비용입니다. 그래서 카파피는 관련 경력과 같은 유형의 작업 이력을 가장 먼저 봅니다."
          id="trust-title"
        />

        <div className={s.trustGrid}>
          <div>
            <p className={s.lead}>같은 일을 해본 적이 있는가</p>
            <p className={s.body}>
              건축사무소 5년 경력이라는 문장은 별점 4.9보다 많은 것을 말해줍니다. 도면 규칙,
              표기 관행, 제출 형식을 다시 설명하지 않아도 된다는 뜻이기 때문입니다.
            </p>
            <p className={s.body}>
              카파피는 이 신호를 프로필 장식이 아니라 배정 입력값으로 씁니다. LEVEL과 EXP는
              그 뒤에 붙는 기록일 뿐, 판단의 근거가 아닙니다.
            </p>
          </div>

          <div className={s.evidence}>
            <p className={s.evidenceName}>{player.name}</p>
            <p className={s.evidenceCareer}>{player.execution.career}</p>

            <div className={s.evidenceStats}>
              <div className={s.evidenceStat}>
                <p className={s.evidenceStatKey}>유사 QUEST</p>
                <p className={s.evidenceStatValue}>{player.execution.relevantHistory.cad}</p>
              </div>
              <div className={s.evidenceStat}>
                <p className={s.evidenceStatKey}>On-time</p>
                <p className={s.evidenceStatValue}>{pct(player.execution.onTimeRate)}</p>
              </div>
              <div className={s.evidenceStat}>
                <p className={s.evidenceStatKey}>수정 요청률</p>
                <p className={s.evidenceStatValue}>{pct(player.execution.revisionRate)}</p>
              </div>
              <div className={s.evidenceStat}>
                <p className={s.evidenceStatKey}>완료 QUEST</p>
                <p className={s.evidenceStatValue}>{player.execution.questsComplete}</p>
              </div>
            </div>

            <div className={s.evidenceFoot}>
              <Chip>LV.{player.execution.level}</Chip>
              <Chip tone="ok" dot>
                AVAILABLE
              </Chip>
              <span className={s.evidenceFootNote}>
                LEVEL은 기록이지 자격이 아닙니다
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- *
 * 06 — TIME ATTACK
 * ---------------------------------------------------------------- */

export function TimeAttackSection() {
  const quest = QUESTS["0211"];

  return (
    <section className={s.section} aria-labelledby="time-title">
      <div className="k-frame">
        <SectionHead
          index="06 / TIME ATTACK"
          title="오늘 안에 끝나야 하는 일"
          note="급한 일은 별도의 상품이 아니라 상태입니다. 마감이 짧으면 그 마감을 지킬 수 있는 제안만 비교 대상이 됩니다."
          id="time-title"
        />

        <div className={s.timeGrid}>
          <div>
            <p className={s.lead}>완료시간은 가격만큼 실제 조건입니다</p>
            <p className={s.body}>
              12시간에 8만원과 4시간에 15만원은 다른 상품입니다. 카파피의 모든 제안은 두
              값을 함께 제출하고, 마감을 넘기는 제안은 순위 계산에 들어가지 않습니다.
            </p>
            <p className={s.body}>
              다만 짧은 마감을 항상 채울 수 있다고 약속하지는 않습니다. 분야마다 그 시간에
              움직일 수 있는 사람의 수가 다르기 때문입니다.
            </p>
          </div>

          <QuestCard quest={quest} href={`/board/${quest.id}`} />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- *
 * 07 — Result loop
 * ---------------------------------------------------------------- */

export function ResultLoopSection() {
  const quest = QUESTS["0182"];

  return (
    <section className={s.section} aria-labelledby="result-title">
      <div className="k-frame">
        <SectionHead
          index="07 / RESULT"
          title="마지막 판단은 맡긴 사람이 합니다"
          note="카파피는 파일이 도착했는지, 요청한 형식이 맞는지, 언제 도착했는지까지만 확인합니다. 결과가 쓸 만한지는 일을 맡긴 사람이 판단합니다."
          id="result-title"
        />

        <div className={s.resultGrid}>
          <div>
            <p className={s.lead}>확인하거나, 수정을 요청하거나</p>
            <p className={s.body}>
              수정 요청은 처음에 합의한 범위를 기준으로 합니다. 그래서 맡기기 전에 산출물과
              확인 기준을 먼저 정리합니다.
            </p>
            <p className={s.body}>
              AI가 결과의 품질을 판정하지는 않습니다. 사람이 하는 전문 작업의 최종 합격 여부는
              돈을 낸 사람이 정합니다.
            </p>
            <div className={s.ctaRow}>
              <Link href={`/quest/${quest.id}`}>
                <Button variant="primary">결과 화면 보기 →</Button>
              </Link>
            </div>
          </div>

          {quest.result ? <ResultObject result={quest.result} /> : null}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- *
 * 08 — Autopilot direction
 * ---------------------------------------------------------------- */

const COLLAPSE = [
  {
    stage: "지금",
    items: [
      { label: "QUEST", keep: true },
      { label: "SOW 확인", keep: true },
      { label: "BID A/B/C", keep: false },
      { label: "자격 확인", keep: false },
      { label: "NDA", keep: false },
      { label: "배정", keep: false },
      { label: "진행 상황", keep: false },
      { label: "결과 확인", keep: true },
    ],
  },
  {
    stage: "다음",
    items: [
      { label: "FILE + DEADLINE", keep: true },
      { label: "SOW 자동 정리", keep: false },
      { label: "배정·교체", keep: false },
      { label: "결과 확인", keep: true },
    ],
  },
  {
    stage: "방향",
    items: [
      { label: "FILE + DEADLINE", keep: true },
      { label: "KAPAPI", keep: false },
      { label: "RESULT", keep: true },
    ],
  },
];

export function AutopilotSection() {
  return (
    <section className={s.section} aria-labelledby="autopilot-title">
      <div className="k-frame">
        <SectionHead
          index="08 / DIRECTION"
          title="사용자가 하는 일이 계속 줄어드는 쪽으로"
          note="카파피가 좋아진다는 것은 기능이 늘어난다는 뜻이 아니라, 일을 맡긴 사람이 해야 할 일이 줄어든다는 뜻입니다."
          id="autopilot-title"
        />

        <div className={s.autopilot}>
          <div>
            <p className={s.lead}>파일과 마감만 남을 때까지</p>
            <p className={s.body}>
              지금 카파피는 자동 배정까지 왔습니다. 사양 정리, 지연 감지, 작업자 교체, 결과
              사전 점검은 그다음 단계입니다.
            </p>
            <div className={s.autopilotDisclaimer}>
              아래 &lsquo;다음&rsquo;과 &lsquo;방향&rsquo; 단계는 목표이지 현재 제공 중인 기능이
              아닙니다. Prototype v1이 실제로 수행하는 것은 자동 배정까지이며, 완료 보장이나
              대금 보관은 제공하지 않습니다.
            </div>
          </div>

          <div className={s.collapse}>
            {COLLAPSE.map((row) => (
              <div key={row.stage} className={s.collapseRow}>
                <span className={s.collapseStage}>{row.stage}</span>
                <span className={s.collapseItems}>
                  {row.items.map((item) => (
                    <span
                      key={`${row.stage}-${item.label}`}
                      className={`${s.collapseItem} ${
                        item.keep ? s.collapseItemKeep : s.collapseItemGone
                      }`}
                    >
                      {item.label}
                    </span>
                  ))}
                </span>
              </div>
            ))}
            <p className={s.evidenceFootNote} style={{ marginTop: 8 }}>
              실선 = 사용자가 계속 하는 일 · 점선 = 카파피 뒤로 넘어가는 일
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- *
 * 09 — Same account, other direction
 * ---------------------------------------------------------------- */

export function PlayerEntrySection() {
  const me = USERS[CURRENT_USER_ID];

  return (
    <section className={s.sectionPlain} aria-labelledby="player-title">
      <div className="k-frame">
        <SectionHead
          index="09 / FIND WORK"
          title="같은 계정으로 일을 받을 수도 있습니다"
          note="카파피에는 의뢰인 계정과 작업자 계정이 따로 없습니다. 어떤 QUEST에서는 맡기는 쪽이 되고, 다른 QUEST에서는 수행하는 쪽이 됩니다."
          id="player-title"
        />

        <div className={s.playerGrid}>
          <div>
            <p className={s.lead}>GM과 PLAYER는 QUEST마다 정해집니다</p>
            <p className={s.body}>
              내가 올린 QUEST에서는 GM이고, 내가 입찰한 QUEST에서는 PLAYER입니다. 계정을
              바꾸거나 다시 가입할 필요는 없습니다.
            </p>
            <p className={s.body}>
              물론 아무 일이나 받을 수 있는 것은 아닙니다. QUEST마다 요구하는 기술, 자격,
              보안 조건이 다르고, 그 조건은 계정이 아니라 그 QUEST에만 적용됩니다.
            </p>

            <div className={s.ctaRow}>
              <Link href="/board">
                <Button variant="primary" size="lg">
                  일 찾기 →
                </Button>
              </Link>
              <Link href="/profile">
                <Button variant="secondary" size="lg">
                  내 프로필 보기
                </Button>
              </Link>
            </div>
          </div>

          <div className={s.oneAccount}>
            <p className={s.oneAccountTitle}>
              {me.name} 님의 지금 상태{" "}
              <span className="k-hud" style={{ color: "var(--k-faint)" }}>
                ONE ACCOUNT
              </span>
            </p>
            <div className={s.oneAccountRow}>
              <span className={s.oneAccountId}>#0182</span>
              <Chip tone="ink">GM</Chip>
              <span>내가 맡긴 일 · 완료</span>
            </div>
            <div className={s.oneAccountRow}>
              <span className={s.oneAccountId}>#0207</span>
              <Chip tone="accent">PLAYER</Chip>
              <span>내가 수행 중인 일</span>
            </div>
            <div className={s.oneAccountRow}>
              <span className={s.oneAccountId}>#0201</span>
              <Chip>입찰 중</Chip>
              <span>내가 입찰한 일</span>
            </div>
            <p className={s.evidenceFootNote} style={{ marginTop: 12 }}>
              세 가지가 같은 기간에 동시에 성립합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- *
 * TIME ATTACK countdown is re-exported for the board header.
 * ---------------------------------------------------------------- */
export { Countdown };
