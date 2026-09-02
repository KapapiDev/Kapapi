import type { Quest, QuestRole, User } from "./types";

/**
 * Role derivation — the single place GM/PLAYER is decided.
 *
 * docs/IDENTITY_ROLE_MODEL.md: role is a function of (user, quest), never a
 * property of the account. If you ever need `user.role`, the model is wrong.
 */
export function roleInQuest(userId: string, quest: Quest): QuestRole {
  if (quest.issuerId === userId) return "GM";
  if (quest.assigneeId === userId) return "PLAYER";
  if (quest.bids.some((b) => b.playerId === userId)) return "BIDDER";
  return "NONE";
}

export const ROLE_LABEL: Record<QuestRole, string> = {
  GM: "GM",
  PLAYER: "PLAYER",
  BIDDER: "입찰 중",
  NONE: "",
};

/** Plain-language explanation of the role, scoped to one QUEST. */
export function roleSentence(role: QuestRole, questId: string): string {
  switch (role) {
    case "GM":
      return `이 QUEST #${questId}에서는 내가 일을 맡긴 쪽입니다`;
    case "PLAYER":
      return `이 QUEST #${questId}에서는 내가 일을 수행하는 쪽입니다`;
    case "BIDDER":
      return `이 QUEST #${questId}에 입찰했습니다`;
    default:
      return "";
  }
}

export interface Eligibility {
  eligible: boolean;
  /** Reasons this specific QUEST is closed to this user. Never identity-based. */
  blockers: string[];
}

/**
 * Per-QUEST eligibility. Universal identity does not mean universal
 * qualification (docs/IDENTITY_ROLE_MODEL.md section 6) — but a blocker here
 * restricts one QUEST, never the account.
 */
export function eligibilityFor(user: User, quest: Quest): Eligibility {
  const blockers: string[] = [];

  const missingSkills = quest.requiredSkills.filter((s) => !user.skills.includes(s));
  if (missingSkills.length > 0) blockers.push(`${quest.categoryLabel} 수행 이력·기술 요건 미충족`);

  const missingCreds = quest.requiredCredentials.filter(
    (c) => !user.credentials.includes(c),
  );
  if (missingCreds.length > 0) blockers.push(`필요 자격 미보유: ${missingCreds.join(", ")}`);

  const missingClearance = quest.requiredClearances.filter(
    (c) => !user.clearances.includes(c),
  );
  if (missingClearance.length > 0) blockers.push("보안·NDA 서약 필요");

  return { eligible: blockers.length === 0, blockers };
}

/** Group QUESTs the way 내 QUEST presents them: by relationship, in one list. */
export function groupQuests(userId: string, quests: Quest[]) {
  const issued = quests.filter((q) => q.issuerId === userId);
  const executing = quests.filter(
    (q) => q.assigneeId === userId && q.state !== "COMPLETE",
  );
  const bidding = quests.filter(
    (q) =>
      q.assigneeId !== userId &&
      q.issuerId !== userId &&
      q.bids.some((b) => b.playerId === userId),
  );
  const completed = quests.filter(
    (q) => q.state === "COMPLETE" && (q.issuerId === userId || q.assigneeId === userId),
  );
  return { issued, executing, bidding, completed };
}
