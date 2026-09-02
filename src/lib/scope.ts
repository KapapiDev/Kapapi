import { CATEGORIES, bidsForCategory, taskFitForCategory } from "./fixtures";
import type { FileObject, Quest } from "./types";

/**
 * Deterministic scope structuring — the prototype stand-in for KAPAPI's
 * AI-assisted scoping step (docs/DECISIONS.md D-013, D-020).
 *
 * What it is allowed to do: classify the request, structure inputs/outputs,
 * propose deliverables and acceptance points, and surface *missing* information.
 *
 * What it must never do: set an authoritative price, or judge professional
 * quality. The market discovers price; the GM judges the result. The budget
 * value below is an editable ceiling the GM authorises, never a quote.
 */

const CATEGORY_RULES: { id: string; words: string[] }[] = [
  { id: "cad", words: ["cad", "캐드", "도면", "dwg", "평면", "현황도", "실측", "제도", "설계"] },
  { id: "image", words: ["이미지", "사진", "상세페이지", "보정", "리터칭", "배경", "썸네일", "리사이즈"] },
  { id: "data", words: ["데이터", "엑셀", "excel", "스프레드시트", "csv", "입력", "취합", "통계"] },
  { id: "doc", words: ["ppt", "피피티", "문서", "보고서", "제안서", "한글", "워드", "소개서", "번역", "자막"] },
];

const URGENCY_WORDS = ["오늘", "내일", "급", "긴급", "당장", "아침", "오전", "오후", "시간", "시까지", "밤"];
const CONFIDENTIAL_WORDS = ["대외비", "비공개", "보안", "nda", "계약", "고객사", "제출용", "인허가"];
const FORMAT_WORDS = ["dwg", "pdf", "pptx", "xlsx", "png", "jpg", "psd", "ai", "zip", "csv", "형식", "포맷"];
const QUANTITY = /\d+\s*(장|매|건|개|종|페이지|p\b|행|컷)/i;

export interface ScopeDraft {
  categoryId: string;
  categoryLabel: string;
  title: string;
  summary: string;
  scope: string[];
  deliverables: string[];
  outputFormats: string[];
  acceptanceCriteria: string[];
  revisionBoundary: string;
  missingInfo: string[];
  /** GM-authorised ceiling, editable. Not a KAPAPI price estimate. */
  budgetCeiling: number;
  deadlineInHours: number;
  deadlineLabel: string;
  nda: boolean;
  timeAttack: boolean;
  requiredSkills: string[];
  requiredClearances: string[];
}

function classify(text: string): string {
  const lower = text.toLowerCase();
  let best = "doc";
  let bestHits = 0;
  for (const rule of CATEGORY_RULES) {
    const hits = rule.words.filter((w) => lower.includes(w)).length;
    if (hits > bestHits) {
      bestHits = hits;
      best = rule.id;
    }
  }
  return best;
}

const PER_CATEGORY: Record<
  string,
  {
    scope: string[];
    deliverables: string[];
    formats: string[];
    accept: string[];
    ceiling: number;
    skills: string[];
  }
> = {
  cad: {
    scope: [
      "전달된 자료 기준으로 도면 정리",
      "치수·레이어 규칙 반영",
      "요청 범위 외 설계 변경 없음",
    ],
    deliverables: ["정리된 도면 파일"],
    formats: ["DWG", "PDF"],
    accept: ["요청 형식(DWG·PDF) 포함", "전달 자료의 치수와 도면 치수 일치"],
    ceiling: 180000,
    skills: ["cad"],
  },
  image: {
    scope: ["전달된 원본 이미지 정리", "지정 규격 리사이즈", "파일명 규칙 적용"],
    deliverables: ["정리된 이미지 세트"],
    formats: ["JPG", "PNG"],
    accept: ["요청 수량 전부 포함", "지정 규격 일치"],
    ceiling: 140000,
    skills: ["image"],
  },
  data: {
    scope: ["전달 자료의 데이터 입력", "지정 컬럼 구조 적용", "중복·공백 정리"],
    deliverables: ["정리된 스프레드시트"],
    formats: ["XLSX", "CSV"],
    accept: ["요청 행 수 전부 입력", "컬럼 구조 일치"],
    ceiling: 100000,
    skills: ["data"],
  },
  doc: {
    scope: ["전달 문서의 서식·정렬 정리", "지정 템플릿·표준 적용", "내용 임의 변경 없음"],
    deliverables: ["정리된 문서 파일"],
    formats: ["PPTX", "PDF"],
    accept: ["요청 페이지 전부 포함", "지정 서식 적용"],
    ceiling: 160000,
    skills: ["doc"],
  },
};

function titleFrom(text: string): string {
  const first = text.trim().split(/[.\n]/)[0]?.trim() ?? "";
  const cleaned = first.replace(/\s*(해\s*주세요|해줘|부탁드립니다|부탁해요|주세요)\s*$/u, "");
  if (cleaned.length === 0) return "업무 정리 요청";
  return cleaned.length > 42 ? `${cleaned.slice(0, 42)}…` : cleaned;
}

export function buildScopeDraft(text: string, files: FileObject[]): ScopeDraft {
  const categoryId = classify(text);
  const preset = PER_CATEGORY[categoryId];
  const lower = text.toLowerCase();

  const urgent = URGENCY_WORDS.some((w) => lower.includes(w));
  const nda = CONFIDENTIAL_WORDS.some((w) => lower.includes(w)) || files.length > 0;
  const hasFormat = FORMAT_WORDS.some((w) => lower.includes(w));
  const hasQuantity = QUANTITY.test(text);
  const hasDeadline = /\d+\s*시|오늘|내일|모레|까지|오전|오후/.test(text);

  const missingInfo: string[] = [];
  if (!hasDeadline) missingInfo.push("마감 시각이 명시되지 않았습니다");
  if (!hasFormat) missingInfo.push("제출 형식이 명시되지 않았습니다");
  if (!hasQuantity) missingInfo.push("작업 수량이 명시되지 않았습니다");
  if (files.length === 0) missingInfo.push("작업 원본 파일이 첨부되지 않았습니다");

  const deadlineInHours = urgent ? 6 : 24;

  return {
    categoryId,
    categoryLabel: CATEGORIES[categoryId],
    title: titleFrom(text),
    summary: text.trim(),
    scope: preset.scope,
    deliverables: preset.deliverables,
    outputFormats: preset.formats,
    acceptanceCriteria: preset.accept,
    revisionBoundary: "합의된 범위 내 불일치에 대해 1회 수정",
    missingInfo,
    budgetCeiling: preset.ceiling,
    deadlineInHours,
    deadlineLabel: urgent ? "오늘 안에" : "내일 같은 시각까지",
    nda,
    timeAttack: urgent,
    requiredSkills: preset.skills,
    requiredClearances: nda ? ["NDA"] : [],
  };
}

/** Turn a confirmed scope draft into the QUEST that KAPAPI will route. */
export function questFromScope(
  draft: ScopeDraft,
  opts: { id: string; issuerId: string; files: FileObject[] },
): Quest {
  return {
    id: opts.id,
    title: draft.title,
    categoryId: draft.categoryId,
    categoryLabel: draft.categoryLabel,
    summary: draft.summary,
    issuerId: opts.issuerId,
    state: "OPEN",
    createdAtLabel: "방금",
    deadlineInHours: draft.deadlineInHours,
    deadlineLabel: draft.deadlineLabel,
    timeAttack: draft.timeAttack,
    nda: draft.nda,
    budgetCeiling: draft.budgetCeiling,
    requiredSkills: draft.requiredSkills,
    requiredCredentials: [],
    requiredClearances: draft.requiredClearances,
    inputs: opts.files,
    scope: draft.scope,
    deliverables: draft.deliverables,
    outputFormats: draft.outputFormats,
    acceptanceCriteria: draft.acceptanceCriteria,
    revisionBoundary: draft.revisionBoundary,
    missingInfo: draft.missingInfo,
    bids: bidsForCategory(draft.categoryId),
    taskFit: taskFitForCategory(draft.categoryId),
    events: [
      { at: "방금", state: "OPEN", label: "QUEST 등록", detail: `QUEST #${opts.id} CREATED` },
    ],
  };
}
