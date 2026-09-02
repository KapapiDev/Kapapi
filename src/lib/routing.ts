import type { Bid, Quest, RoutingCandidate, RoutingResult, User } from "./types";

/**
 * KAPAPI routing policy — Prototype v1.
 *
 * Canon: docs/PRODUCT.md section 4, docs/DECISIONS.md D-031, docs/PROTOTYPE_SPEC.md section 9.
 *
 * Deliberately NOT an opaque model call. The pipeline is:
 *
 *   hard eligibility → deadline/budget feasibility → weighted ranking → assignment
 *
 * The weights below are a prototype decision-support abstraction, not a claim of
 * predictive accuracy. Semantic task fit is the only AI-assisted input, and it is
 * one weighted term among six — never the sole judge.
 *
 * The function is pure and deterministic: the same fixture always routes the same
 * PLAYER, which QA_CHECKLIST F1 requires.
 */

export const ROUTING_WEIGHTS = {
  /** Semantic fit between the QUEST scope and the player's demonstrated work. */
  taskFit: 0.26,
  /** Verified completions of comparable work — the strongest real predictor we have. */
  relevantHistory: 0.22,
  onTime: 0.2,
  /** Inverse revision rate: rework is GM management burden. */
  lowRevision: 0.12,
  /** Headroom under the GM's authorised ceiling, never "cheapest wins". */
  priceHeadroom: 0.12,
  /** Headroom against the deadline, never "fastest wins". */
  deliveryHeadroom: 0.08,
} as const;

/** Relevant-history saturation point. 60+ comparable QUESTs stops adding score. */
const HISTORY_SATURATION = 60;
/** Revision-rate ceiling used to normalise the rework penalty. */
const REVISION_CEILING = 0.2;

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

function evaluate(bid: Bid, player: User, quest: Quest): RoutingCandidate {
  const skillsOk = quest.requiredSkills.every((s) => player.skills.includes(s));
  const credentialMatch = quest.requiredCredentials.every((c) =>
    player.credentials.includes(c),
  );
  const securityMatch = quest.requiredClearances.every((c) =>
    player.clearances.includes(c),
  );
  const deadlineFeasible = bid.deliveryHours <= quest.deadlineInHours;
  const budgetFeasible = bid.price <= quest.budgetCeiling;
  const available = player.execution.availability !== "BUSY";

  const relevantCompletionCount =
    player.execution.relevantHistory[quest.categoryId] ?? 0;
  const semanticTaskFit = quest.taskFit[player.id] ?? 0.5;

  const candidate: RoutingCandidate = {
    bid,
    player,
    eligibilityPass: skillsOk && available,
    credentialMatch,
    securityMatch,
    deadlineFeasible,
    budgetFeasible,
    relevantCompletionCount,
    onTimeRate: player.execution.onTimeRate,
    revisionRate: player.execution.revisionRate,
    rating: player.execution.rating,
    availability: player.execution.availability,
    semanticTaskFit,
    routingScore: 0,
    reasons: [],
  };

  // ---- Hard filters. A failure here excludes the candidate before ranking. ----
  if (!skillsOk) candidate.excludedBecause = "필수 기술 요건 미충족";
  else if (!credentialMatch) candidate.excludedBecause = "필수 자격 미보유";
  else if (!securityMatch) candidate.excludedBecause = "보안·NDA 요건 미충족";
  else if (!available) candidate.excludedBecause = "현재 수행 불가";
  else if (!deadlineFeasible) candidate.excludedBecause = "마감 시간 초과";
  else if (!budgetFeasible) candidate.excludedBecause = "예산 상한 초과";

  if (candidate.excludedBecause) return candidate;

  // ---- Weighted ranking over observable evidence. ----
  const w = ROUTING_WEIGHTS;
  const historyScore = clamp01(relevantCompletionCount / HISTORY_SATURATION);
  const revisionScore = 1 - clamp01(player.execution.revisionRate / REVISION_CEILING);
  const priceScore = clamp01(
    (quest.budgetCeiling - bid.price) / quest.budgetCeiling,
  );
  const deliveryScore = clamp01(
    (quest.deadlineInHours - bid.deliveryHours) / quest.deadlineInHours,
  );

  candidate.routingScore =
    w.taskFit * semanticTaskFit +
    w.relevantHistory * historyScore +
    w.onTime * player.execution.onTimeRate +
    w.lowRevision * revisionScore +
    w.priceHeadroom * priceScore +
    w.deliveryHeadroom * deliveryScore;

  candidate.reasons = [
    `마감 ${quest.deadlineInHours}시간 내 ${bid.deliveryHours}시간 납품 확약`,
    `유사 QUEST ${relevantCompletionCount}건`,
    `정시 납품 ${Math.round(player.execution.onTimeRate * 100)}%`,
    `수정 요청 ${Math.round(player.execution.revisionRate * 100)}%`,
    `예산 상한 내 ${Math.round((bid.price / quest.budgetCeiling) * 100)}%`,
  ];

  return candidate;
}

/**
 * Rank every BID on a QUEST and select one PLAYER.
 *
 * Ties break on relevant history, then on-time rate, then bid id, so the result is
 * stable regardless of input order.
 */
export function routeQuest(quest: Quest, users: Record<string, User>): RoutingResult {
  const candidates = quest.bids
    .map((bid) => {
      const player = users[bid.playerId];
      return player ? evaluate(bid, player, quest) : null;
    })
    .filter((c): c is RoutingCandidate => c !== null);

  const eligible = candidates
    .filter((c) => !c.excludedBecause)
    .sort(
      (a, b) =>
        b.routingScore - a.routingScore ||
        b.relevantCompletionCount - a.relevantCompletionCount ||
        b.onTimeRate - a.onTimeRate ||
        a.bid.id.localeCompare(b.bid.id),
    );

  const excluded = candidates.filter((c) => c.excludedBecause);
  const selected = eligible[0];

  const rationale = selected
    ? [
        `유효 입찰 ${eligible.length}건 중 배정`,
        ...selected.reasons,
        excluded.length > 0
          ? `${excluded.length}건은 자격·마감·예산 요건에서 제외`
          : "모든 입찰이 기본 요건을 충족",
      ]
    : ["요건을 충족하는 입찰이 아직 없습니다"];

  return { candidates, eligible, excluded, selected, rationale };
}
