/**
 * KAPAPI Prototype v1 — domain types.
 *
 * Identity rule (docs/IDENTITY_ROLE_MODEL.md): there is exactly one `User` type.
 * `GM` and `PLAYER` are never stored on a user. They are derived from a user's
 * relationship to a specific QUEST — see `roleInQuest()` in `src/lib/roles.ts`.
 */

export type QuestState =
  | "DRAFT"
  | "SCOPE_READY"
  | "OPEN"
  | "BIDDING"
  | "ROUTING"
  | "ASSIGNED"
  | "IN_PROGRESS"
  | "DELIVERED"
  | "REVIEW"
  | "REVISION_REQUESTED"
  | "COMPLETE"
  | "BLOCKED"
  | "CANCELLED";

/** The role a user holds *for one QUEST*. Never a property of the account. */
export type QuestRole = "GM" | "PLAYER" | "BIDDER" | "NONE";

export type Availability = "AVAILABLE" | "LIMITED" | "BUSY";

/** Execution-side (PLAYER) reputation domain. */
export interface ExecutionReputation {
  /** Verified professional career, the strongest trust signal (D-008). */
  career: string;
  careerYears: number;
  questsComplete: number;
  onTimeRate: number;
  revisionRate: number;
  disputes: number;
  rating: number;
  /** Completion counts for comparable work, keyed by category id. */
  relevantHistory: Record<string, number>;
  availability: Availability;
  level: number;
  exp: number;
  expToNext: number;
}

/** Issuer-side (GM) reputation domain. Deliberately NOT merged with execution. */
export interface IssuerReputation {
  questsIssued: number;
  paymentCompletionRate: number;
  /** Median hours from delivery to acceptance/revision decision. */
  medianReviewHours: number;
  cancellations: number;
  disputes: number;
  /** Rating given to this issuer by PLAYERs who executed their QUESTs. */
  ratingFromPlayers: number;
}

export interface User {
  id: string;
  name: string;
  org: string;
  initials: string;
  skills: string[];
  credentials: string[];
  /** Security postures this user can satisfy, e.g. "NDA", "NO_PORTFOLIO_USE". */
  clearances: string[];
  execution: ExecutionReputation;
  issuer: IssuerReputation;
}

export interface FileObject {
  name: string;
  kind: string;
  size: string;
  note?: string;
}

export interface Bid {
  id: string;
  playerId: string;
  price: number;
  /** Committed elapsed hours from assignment to delivery (D-003). */
  deliveryHours: number;
  note?: string;
  /** Minutes after QUEST open, so arrival order is deterministic. */
  arrivedAtMin: number;
}

export interface QuestEvent {
  at: string;
  state: QuestState;
  label: string;
  detail?: string;
}

export interface PreflightCheck {
  label: string;
  passed: boolean;
}

export interface QuestResult {
  files: FileObject[];
  deliveredAt: string;
  /** Positive = delivered early, negative = late. */
  minutesVsDeadline: number;
  checks: PreflightCheck[];
}

export interface Quest {
  /** Zero-padded display id, e.g. "0182". */
  id: string;
  title: string;
  categoryId: string;
  categoryLabel: string;
  summary: string;
  /** The user who issued this QUEST. They are GM *for this QUEST only*. */
  issuerId: string;
  /** The user executing this QUEST, once routed. PLAYER *for this QUEST only*. */
  assigneeId?: string;
  state: QuestState;
  createdAtLabel: string;
  /** Hours from the demo epoch until the deadline. Keeps countdowns live and replayable. */
  deadlineInHours: number;
  deadlineLabel: string;
  timeAttack: boolean;
  nda: boolean;
  budgetCeiling: number;
  rewardHint?: [number, number];
  requiredSkills: string[];
  requiredCredentials: string[];
  /** Security postures a PLAYER must satisfy before ranking (LEGAL.md section 8). */
  requiredClearances: string[];
  inputs: FileObject[];
  scope: string[];
  deliverables: string[];
  outputFormats: string[];
  acceptanceCriteria: string[];
  revisionBoundary: string;
  missingInfo: string[];
  bids: Bid[];
  events: QuestEvent[];
  result?: QuestResult;
  /** Prototype-only: semantic task-fit per player, standing in for AI scoping support. */
  taskFit: Record<string, number>;
}

/** One candidate's fully inspectable routing evidence (PROTOTYPE_SPEC section 9). */
export interface RoutingCandidate {
  bid: Bid;
  player: User;
  eligibilityPass: boolean;
  credentialMatch: boolean;
  securityMatch: boolean;
  deadlineFeasible: boolean;
  budgetFeasible: boolean;
  relevantCompletionCount: number;
  onTimeRate: number;
  revisionRate: number;
  rating: number;
  availability: Availability;
  semanticTaskFit: number;
  /** Prototype decision-support abstraction — not presented as scientific truth. */
  routingScore: number;
  reasons: string[];
  /** Set when a hard filter excluded this candidate before ranking. */
  excludedBecause?: string;
}

export interface RoutingResult {
  candidates: RoutingCandidate[];
  eligible: RoutingCandidate[];
  excluded: RoutingCandidate[];
  selected?: RoutingCandidate;
  /** Short human-readable rationale rows for the "왜 이 작업자?" panel. */
  rationale: string[];
}
