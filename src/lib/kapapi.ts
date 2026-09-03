/**
 * KAPAPI v2 domain model, fixtures and recommendation policy.
 *
 * Public language follows the current canon: one universal account, contextual
 * client/worker roles, every proposal carries price + committed completion time,
 * and recommendation responsibility grows only as transaction evidence grows.
 */

export type QuestState =
  | "OPEN" | "BIDDING" | "ROUTING" | "ASSIGNED"
  | "IN_PROGRESS" | "DELIVERED" | "REVISION" | "COMPLETE";

/** A role only exists relative to one work transaction. It is never stored on a user. */
export type Role = "CLIENT" | "WORKER" | "PROPOSER" | "NONE";

export interface Person {
  id: string;
  name: string;
  career: string;
  years: number;
  /** Completed work of the same kind, keyed by category. */
  history: Record<string, number>;
  onTime: number;
  revision: number;
  done: number;
  skills: string[];
  nda: boolean;
  free: boolean;
}

export interface Bid {
  id: string;
  personId: string;
  price: number;
  /** Committed elapsed hours from assignment to delivery. */
  hours: number;
}

export interface Quest {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  summary: string;
  issuerId: string;
  assigneeId?: string;
  state: QuestState;
  deadlineHours: number;
  deadlineLabel: string;
  urgent: boolean;
  nda: boolean;
  budget: number;
  reward?: [number, number];
  needSkills: string[];
  inputs: { name: string; kind: string; size: string }[];
  scope: string[];
  outputs: string[];
  accept: string[];
  revisionRule: string;
  bids: Bid[];
  fit: Record<string, number>;
  events: { at: string; ko: string; en: string }[];
  result?: {
    files: { name: string; kind: string; size: string }[];
    at: string;
    earlyMinutes: number;
    checks: string[];
  };
}

export const CATEGORY: Record<string, string> = {
  cad: "도면 정리",
  image: "이미지 편집",
  doc: "문서 정리",
  data: "데이터 정리",
};

export const ME = "p-kim";

export const PEOPLE: Record<string, Person> = {
  "p-kim": { id: "p-kim", name: "김도현", career: "건축사사무소 실무 5년", years: 5,
    history: { cad: 42, doc: 9 }, onTime: 0.98, revision: 0.04, done: 42,
    skills: ["cad", "doc"], nda: true, free: true },
  "p-han": { id: "p-han", name: "한지우", career: "건축 CAD 8년 · 현황도 정리", years: 8,
    history: { cad: 47, doc: 12 }, onTime: 0.99, revision: 0.04, done: 156,
    skills: ["cad", "doc"], nda: true, free: true },
  "p-seo": { id: "p-seo", name: "서준호", career: "설계사무소 3년", years: 3,
    history: { cad: 11 }, onTime: 0.96, revision: 0.09, done: 38,
    skills: ["cad"], nda: true, free: true },
  "p-lee": { id: "p-lee", name: "이민재", career: "건축·토목 도면 보조 2년", years: 2,
    history: { cad: 8 }, onTime: 0.94, revision: 0.11, done: 22,
    skills: ["cad"], nda: true, free: true },
  "p-choi": { id: "p-choi", name: "최유나", career: "건축 CAD 4년", years: 4,
    history: { cad: 19 }, onTime: 0.97, revision: 0.06, done: 51,
    skills: ["cad"], nda: false, free: true },
  "p-yun": { id: "p-yun", name: "윤가람", career: "이커머스 상세페이지 6년", years: 6,
    history: { image: 88, doc: 5 }, onTime: 0.97, revision: 0.06, done: 211,
    skills: ["image", "doc"], nda: true, free: true },
  "p-noh": { id: "p-noh", name: "노아린", career: "제품 사진 보정 3년", years: 3,
    history: { image: 31 }, onTime: 0.93, revision: 0.12, done: 76,
    skills: ["image"], nda: true, free: true },
  "p-bae": { id: "p-bae", name: "배소윤", career: "편집디자인 8년", years: 8,
    history: { doc: 64, image: 22 }, onTime: 0.98, revision: 0.05, done: 184,
    skills: ["doc", "image"], nda: true, free: true },
  "p-im": { id: "p-im", name: "임채원", career: "현장 데이터 정리 4년", years: 4,
    history: { data: 51, doc: 28 }, onTime: 0.95, revision: 0.07, done: 129,
    skills: ["doc", "data"], nda: true, free: true },
  "p-jung": { id: "p-jung", name: "정하윤", career: "건축사 · 실무 11년", years: 11,
    history: {}, onTime: 1, revision: 0, done: 3, skills: ["cad"], nda: true, free: false },
  "p-oh": { id: "p-oh", name: "오세림", career: "설계사무소 관리 6년", years: 6,
    history: {}, onTime: 1, revision: 0, done: 0, skills: ["doc"], nda: true, free: false },
  "p-park": { id: "p-park", name: "박서진", career: "인테리어 시공 관리 7년", years: 7,
    history: {}, onTime: 1, revision: 0, done: 1, skills: ["image"], nda: true, free: false },
};

/* ------------------------------------------------------------------ *
 * Recommendation / routing
 * ------------------------------------------------------------------ */

export interface Candidate {
  bid: Bid;
  person: Person;
  out?: string;
  score: number;
  relevant: number;
}

export interface Routed {
  ranked: Candidate[];
  dropped: Candidate[];
  picked?: Candidate;
  reasons: string[];
}

/** Six weighted terms over observable evidence. Not an opaque model call. */
const W = { fit: 0.26, history: 0.22, onTime: 0.2, revision: 0.12, price: 0.12, delivery: 0.08 };
const clamp = (n: number) => Math.min(1, Math.max(0, n));

export function route(quest: Quest, people = PEOPLE): Routed {
  const all: Candidate[] = quest.bids.flatMap((bid) => {
    const person = people[bid.personId];
    if (!person) return [];
    const relevant = person.history[quest.category] ?? 0;
    const c: Candidate = { bid, person, score: 0, relevant };

    if (!quest.needSkills.every((s) => person.skills.includes(s))) c.out = "기술 요건 미충족";
    else if (quest.nda && !person.nda) c.out = "보안 서약 미완료";
    else if (!person.free) c.out = "일정 불가";
    else if (bid.hours > quest.deadlineHours) c.out = "마감 초과";
    else if (bid.price > quest.budget) c.out = "예산 초과";
    if (c.out) return [c];

    c.score =
      W.fit * (quest.fit[person.id] ?? 0.5) +
      W.history * clamp(relevant / 60) +
      W.onTime * person.onTime +
      W.revision * (1 - clamp(person.revision / 0.2)) +
      W.price * clamp((quest.budget - bid.price) / quest.budget) +
      W.delivery * clamp((quest.deadlineHours - bid.hours) / quest.deadlineHours);
    return [c];
  });

  const ranked = all.filter((c) => !c.out)
    .sort((a, b) => b.score - a.score || b.relevant - a.relevant || a.bid.id.localeCompare(b.bid.id));
  const dropped = all.filter((c) => c.out);
  const picked = ranked[0];

  const reasons = picked
    ? [
        `마감 ${quest.deadlineHours}시간 이내, ${picked.bid.hours}시간 완료 제안`,
        `유사 업무 ${picked.relevant}건`,
        `정시완료 ${Math.round(picked.person.onTime * 100)}%`,
        `수정 요청 ${Math.round(picked.person.revision * 100)}%`,
        `제시 금액은 예산 상한의 ${Math.round((picked.bid.price / quest.budget) * 100)}%`,
      ]
    : [];

  return { ranked, dropped, picked, reasons };
}

export function roleIn(personId: string, q: Quest): Role {
  if (q.issuerId === personId) return "CLIENT";
  if (q.assigneeId === personId) return "WORKER";
  if (q.bids.some((b) => b.personId === personId)) return "PROPOSER";
  return "NONE";
}

export function eligible(person: Person, q: Quest): { ok: boolean; why: string[] } {
  const why: string[] = [];
  if (!q.needSkills.every((s) => person.skills.includes(s))) why.push(`${q.categoryLabel} 수행 이력 필요`);
  if (q.nda && !person.nda) why.push("보안 서약 필요");
  return { ok: why.length === 0, why };
}

export const won = (n: number) => `₩${n.toLocaleString("ko-KR")}`;
export const pct = (n: number) => `${Math.round(n * 100)}%`;

/* ------------------------------------------------------------------ *
 * Fixtures
 * ------------------------------------------------------------------ */

const bid = (id: string, personId: string, price: number, hours: number): Bid => ({ id, personId, price, hours });

const list: Quest[] = [
  {
    id: "0182",
    title: "상세페이지 이미지 12종 정리",
    category: "image", categoryLabel: CATEGORY.image,
    summary: "촬영 원본 12종을 상세페이지 규격에 맞춰 배경 정리하고 파일명을 통일합니다.",
    issuerId: ME, assigneeId: "p-yun", state: "COMPLETE",
    deadlineHours: 6, deadlineLabel: "오늘 17:00", urgent: false, nda: true,
    budget: 140000, reward: [90000, 140000], needSkills: ["image"],
    inputs: [{ name: "촬영원본_12종.zip", kind: "ZIP", size: "184 MB" }],
    scope: ["이미지 12종 배경 정리", "가로 860px 규격 맞춤", "파일명 규칙 적용"],
    outputs: ["정리 이미지 12종"],
    accept: ["12종 모두 포함", "가로 860px 일치"],
    revisionRule: "규격이 다를 경우 1회 수정",
    fit: { "p-yun": 0.93, "p-noh": 0.8, "p-bae": 0.76, "p-im": 0.6 },
    bids: [bid("b1", "p-noh", 96000, 8), bid("b2", "p-yun", 118000, 5), bid("b3", "p-bae", 132000, 6), bid("b4", "p-im", 104000, 5)],
    events: [
      { at: "10:12", ko: "업무가 등록되었습니다", en: "업무 등록" },
      { at: "10:26", ko: "제안 4건이 도착했습니다", en: "제안 도착" },
      { at: "10:31", ko: "조건을 확인했습니다", en: "조건 확인" },
      { at: "10:32", ko: "작업자가 배정되었습니다", en: "작업자 배정" },
      { at: "10:40", ko: "작업을 시작했습니다", en: "작업 시작" },
      { at: "15:24", ko: "결과 파일이 도착했습니다", en: "결과 도착" },
      { at: "15:39", ko: "결과 확인이 끝났습니다", en: "업무 완료" },
    ],
    result: {
      files: [{ name: "상세페이지_정리본_12종.zip", kind: "ZIP", size: "41 MB" }],
      at: "15:24", earlyMinutes: 96,
      checks: ["파일 수신", "이미지 12종 확인", "납품 시각 기록"],
    },
  },
  {
    id: "0001",
    title: "손그림 실측 자료를 현황도로 정리",
    category: "cad", categoryLabel: CATEGORY.cad,
    summary: "실측 손그림과 현장 사진을 기준으로 A동 1층 현황도를 사내 레이어 규칙에 맞춰 정리합니다.",
    issuerId: "p-jung", assigneeId: "p-han", state: "COMPLETE",
    deadlineHours: 6, deadlineLabel: "오늘 19:00", urgent: false, nda: true,
    budget: 180000, reward: [80000, 180000], needSkills: ["cad"],
    inputs: [
      { name: "현장실측_손그림_A동.jpg", kind: "JPG", size: "3.1 MB" },
      { name: "현장사진_11장.zip", kind: "ZIP", size: "22.4 MB" },
      { name: "레이어규칙_사내표준.pdf", kind: "PDF", size: "180 KB" },
    ],
    scope: ["A동 1층 현황 평면 1매", "벽체·개구부·계단 실측 치수 반영", "사내 레이어 규칙 준수"],
    outputs: ["DWG", "PDF"],
    accept: ["DWG와 PDF 모두 포함", "레이어명이 사내 표준과 일치", "실측 치수와 도면 치수 일치"],
    revisionRule: "합의한 범위와 다를 경우 1회 수정",
    fit: { "p-han": 0.94, "p-seo": 0.86, "p-lee": 0.71, "p-choi": 0.88 },
    bids: [bid("c1", "p-lee", 80000, 12), bid("c2", "p-choi", 95000, 5), bid("c3", "p-han", 110000, 6), bid("c4", "p-seo", 150000, 4)],
    events: [
      { at: "12:40", ko: "업무가 등록되었습니다", en: "업무 등록" },
      { at: "12:46", ko: "제안 4건이 도착했습니다", en: "제안 도착" },
      { at: "13:01", ko: "조건을 확인했습니다", en: "조건 확인" },
      { at: "13:02", ko: "작업자가 배정되었습니다", en: "작업자 배정" },
      { at: "13:08", ko: "작업을 시작했습니다", en: "작업 시작" },
      { at: "18:42", ko: "결과 파일이 도착했습니다", en: "결과 도착" },
      { at: "18:51", ko: "결과 확인이 끝났습니다", en: "업무 완료" },
    ],
    result: {
      files: [
        { name: "A동_1층_현황도.dwg", kind: "DWG", size: "1.8 MB" },
        { name: "A동_1층_현황도.pdf", kind: "PDF", size: "740 KB" },
      ],
      at: "18:42", earlyMinutes: 18,
      checks: ["파일 수신", "요청 형식 포함", "납품 시각 기록"],
    },
  },
  {
    id: "0201",
    title: "인테리어 실측 스케치를 평면도로 정리",
    category: "cad", categoryLabel: CATEGORY.cad,
    summary: "현장 실측 스케치를 기준으로 30평 주거 평면도를 정리합니다. 가구 배치는 포함하지 않습니다.",
    issuerId: "p-park", state: "BIDDING",
    deadlineHours: 20, deadlineLabel: "내일 09:00", urgent: false, nda: true,
    budget: 160000, reward: [90000, 160000], needSkills: ["cad"],
    inputs: [{ name: "실측스케치_301호.pdf", kind: "PDF", size: "2.2 MB" }],
    scope: ["30평 주거 평면 1매", "벽체·개구부 실측 반영", "가구 배치 제외"],
    outputs: ["DWG", "PDF"], accept: ["DWG와 PDF 모두 포함", "실측 치수 반영"],
    revisionRule: "합의한 범위와 다를 경우 1회 수정",
    fit: { "p-kim": 0.9, "p-seo": 0.84, "p-lee": 0.7 },
    bids: [bid("d1", "p-lee", 88000, 16), bid("d2", "p-kim", 120000, 10), bid("d3", "p-seo", 138000, 8)],
    events: [
      { at: "09:40", ko: "업무가 등록되었습니다", en: "업무 등록" },
      { at: "10:06", ko: "제안 3건이 도착했습니다", en: "제안 도착" },
    ],
  },
  {
    id: "0207",
    title: "제출 도면 9매 표제란 정리",
    category: "cad", categoryLabel: CATEGORY.cad,
    summary: "제출용 도면 9매의 표제란 항목과 출력 축척을 제출 규격에 맞춰 통일합니다.",
    issuerId: "p-oh", assigneeId: ME, state: "IN_PROGRESS",
    deadlineHours: 9, deadlineLabel: "오늘 21:00", urgent: false, nda: true,
    budget: 150000, needSkills: ["cad"],
    inputs: [{ name: "제출도면_9매.zip", kind: "ZIP", size: "34 MB" }],
    scope: ["도면 9매 표제란 항목 통일", "출력 축척 1:100 고정", "도면번호 재정렬"],
    outputs: ["DWG", "PDF"], accept: ["9매 모두 포함", "표제란 항목 누락 없음"],
    revisionRule: "합의한 범위와 다를 경우 1회 수정",
    fit: { "p-kim": 0.92, "p-seo": 0.81 },
    bids: [bid("e1", "p-seo", 105000, 8), bid("e2", "p-kim", 112000, 6)],
    events: [
      { at: "08:15", ko: "업무가 등록되었습니다", en: "업무 등록" },
      { at: "08:45", ko: "작업자가 배정되었습니다", en: "작업자 배정" },
      { at: "09:02", ko: "작업을 시작했습니다", en: "작업 시작" },
    ],
  },
  {
    id: "0211",
    title: "제품 이미지 24종 배경 제거",
    category: "image", categoryLabel: CATEGORY.image,
    summary: "신제품 촬영본 24종의 배경을 제거하고 스토어 규격으로 리사이즈합니다.",
    issuerId: "p-park", state: "BIDDING",
    deadlineHours: 4, deadlineLabel: "오늘 20:00", urgent: true, nda: false,
    budget: 130000, reward: [80000, 130000], needSkills: ["image"],
    inputs: [{ name: "신제품_촬영본_24종.zip", kind: "ZIP", size: "312 MB" }],
    scope: ["이미지 24종 배경 제거", "1000×1000 리사이즈", "파일명 규칙 적용"],
    outputs: ["PNG"], accept: ["24종 모두 포함", "1000×1000 일치"],
    revisionRule: "규격이 다를 경우 1회 수정",
    fit: { "p-yun": 0.91, "p-noh": 0.83, "p-bae": 0.72 },
    bids: [bid("f1", "p-noh", 84000, 4), bid("f2", "p-bae", 99000, 3), bid("f3", "p-yun", 106000, 3), bid("f4", "p-im", 92000, 4)],
    events: [
      { at: "14:20", ko: "업무가 등록되었습니다", en: "업무 등록" },
      { at: "14:33", ko: "제안 4건이 도착했습니다", en: "제안 도착" },
    ],
  },
  {
    id: "0214",
    title: "회사소개서 32페이지 서식 통일",
    category: "doc", categoryLabel: CATEGORY.doc,
    summary: "기존 32페이지 소개서의 서식과 정렬, 글꼴을 사내 템플릿에 맞춰 통일합니다.",
    issuerId: "p-oh", state: "BIDDING",
    deadlineHours: 26, deadlineLabel: "내일 15:00", urgent: false, nda: true,
    budget: 180000, reward: [110000, 180000], needSkills: ["doc"],
    inputs: [{ name: "회사소개서_v7.pptx", kind: "PPTX", size: "18 MB" }],
    scope: ["32페이지 서식 통일", "표와 차트 정렬 정리", "사내 글꼴 적용"],
    outputs: ["PPTX", "PDF"], accept: ["32페이지 모두 포함", "템플릿 글꼴 적용"],
    revisionRule: "서식이 다를 경우 1회 수정",
    fit: { "p-bae": 0.9, "p-im": 0.78, "p-kim": 0.62 },
    bids: [bid("g1", "p-im", 124000, 20), bid("g2", "p-bae", 146000, 14)],
    events: [
      { at: "11:05", ko: "업무가 등록되었습니다", en: "업무 등록" },
      { at: "11:44", ko: "제안 2건이 도착했습니다", en: "제안 도착" },
    ],
  },
];

export const QUESTS: Record<string, Quest> = Object.fromEntries(list.map((q) => [q.id, q]));
export const ALL_QUESTS = list;
