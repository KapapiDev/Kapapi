"use client";

import { createContext, useContext, useEffect, useMemo, useReducer, type ReactNode } from "react";
import { ALL_QUESTS, CATEGORY, ME, QUESTS, route, type Quest, type QuestState } from "./kapapi";

/**
 * Prototype demo state. No auth, no backend — one universal user is always the
 * viewer, and which role they hold is derived per work item.
 */

const KEY = "kapapi.v2";
export const NEW_ID = "0220";

export interface Draft {
  text: string;
  files: { name: string; size: string }[];
  category: string;
  title: string;
  scope: string[];
  outputs: string[];
  accept: string[];
  missing: string[];
  budget: number;
  deadlineHours: number;
  nda: boolean;
}

interface State {
  quests: Record<string, Quest>;
  draft: Draft | null;
  submitted: boolean;
}

const initial: State = { quests: QUESTS, draft: null, submitted: false };

/* ---- deterministic scope structuring (the AI-assist stand-in) ---- */

const RULES: { id: string; words: string[] }[] = [
  { id: "cad", words: ["도면", "캐드", "cad", "dwg", "현황도", "평면", "실측", "설계", "제도"] },
  { id: "image", words: ["이미지", "사진", "상세페이지", "보정", "배경", "썸네일", "리사이즈", "촬영"] },
  { id: "data", words: ["데이터", "엑셀", "스프레드시트", "csv", "입력", "취합", "정산"] },
  { id: "doc", words: ["문서", "ppt", "소개서", "보고서", "제안서", "서식", "번역", "자막", "한글"] },
];

const PRESET: Record<string, { scope: string[]; outputs: string[]; accept: string[]; budget: number }> = {
  cad: { scope: ["전달 자료 기준으로 도면 정리", "치수와 레이어 규칙 반영", "요청 범위 외 변경 없음"],
    outputs: ["DWG", "PDF"], accept: ["요청 형식 모두 포함", "전달 자료와 치수 일치"], budget: 180000 },
  image: { scope: ["전달 원본 이미지 정리", "지정 규격으로 리사이즈", "파일명 규칙 적용"],
    outputs: ["JPG", "PNG"], accept: ["요청 수량 모두 포함", "지정 규격 일치"], budget: 140000 },
  data: { scope: ["전달 자료의 데이터 입력", "지정 컬럼 구조 적용", "중복과 공백 정리"],
    outputs: ["XLSX", "CSV"], accept: ["요청 행 수 모두 입력", "컬럼 구조 일치"], budget: 100000 },
  doc: { scope: ["문서 서식과 정렬 정리", "지정 템플릿 적용", "내용 임의 변경 없음"],
    outputs: ["PPTX", "PDF"], accept: ["요청 페이지 모두 포함", "지정 서식 적용"], budget: 160000 },
};

export function buildDraft(text: string, files: { name: string; size: string }[]): Draft {
  const low = text.toLowerCase();
  let category = "doc";
  let best = 0;
  for (const r of RULES) {
    const hits = r.words.filter((w) => low.includes(w)).length;
    if (hits > best) { best = hits; category = r.id; }
  }
  const p = PRESET[category];
  const urgent = /오늘|내일|급|당장|시까지|오전|오후/.test(text);
  const missing: string[] = [];
  if (!/\d+\s*시|오늘|내일|모레|까지/.test(text)) missing.push("마감 시각이 적혀 있지 않습니다");
  if (!/dwg|pdf|pptx|xlsx|png|jpg|csv|형식|포맷/i.test(text)) missing.push("제출 형식이 적혀 있지 않습니다");
  if (!/\d+\s*(장|매|건|개|종|페이지|행|컷)/.test(text)) missing.push("작업 수량이 적혀 있지 않습니다");
  if (files.length === 0) missing.push("작업 원본 파일이 첨부되지 않았습니다");

  const head = text.trim().split(/[.\n]/)[0].replace(/\s*(해\s*주세요|해줘|부탁드립니다|주세요)\s*$/u, "").trim();
  return {
    text: text.trim(),
    files,
    category,
    title: head.length > 40 ? `${head.slice(0, 40)}…` : head || "업무 정리",
    scope: p.scope, outputs: p.outputs, accept: p.accept,
    missing, budget: p.budget,
    deadlineHours: urgent ? 6 : 24,
    nda: files.length > 0 || /대외비|비공개|보안|고객사|제출용|인허가/.test(text),
  };
}

/* ---- reducer ---- */

type Action =
  | { t: "draft"; text: string; files: { name: string; size: string }[] }
  | { t: "patch"; patch: Partial<Draft> }
  | { t: "submit" }
  | { t: "state"; id: string; state: QuestState; ev?: { at: string; ko: string; en: string } }
  | { t: "accept"; id: string }
  | { t: "revise"; id: string }
  | { t: "bid"; id: string; price: number; hours: number }
  | { t: "hydrate"; state: State }
  | { t: "reset" };

function reducer(s: State, a: Action): State {
  switch (a.t) {
    case "draft": return { ...s, submitted: false, draft: buildDraft(a.text, a.files) };
    case "patch": return s.draft ? { ...s, draft: { ...s.draft, ...a.patch } } : s;
    case "submit": {
      if (!s.draft) return s;
      const d = s.draft;
      const q: Quest = {
        id: NEW_ID, title: d.title, category: d.category, categoryLabel: CATEGORY[d.category],
        summary: d.text, issuerId: ME, state: "OPEN",
        deadlineHours: d.deadlineHours, deadlineLabel: d.deadlineHours <= 6 ? "오늘 안에" : "내일까지",
        urgent: d.deadlineHours <= 6, nda: d.nda, budget: d.budget,
        needSkills: [d.category], inputs: d.files.map((f) => ({ name: f.name, kind: (f.name.split(".").pop() ?? "FILE").toUpperCase().slice(0, 4), size: f.size })),
        scope: d.scope, outputs: d.outputs, accept: d.accept,
        revisionRule: "합의한 범위와 다를 경우 1회 수정",
        bids: seedBids(d.category), fit: seedFit(d.category),
        events: [{ at: "방금", ko: "업무가 등록되었습니다", en: "업무 등록" }],
      };
      return { ...s, submitted: true, quests: { ...s.quests, [NEW_ID]: q } };
    }
    case "state": {
      const q = s.quests[a.id];
      if (!q) return s;
      let next: Quest = { ...q, state: a.state, events: a.ev ? [...q.events, a.ev] : q.events };
      if (a.state === "ASSIGNED" && !next.assigneeId) next = { ...next, assigneeId: route(q).picked?.person.id };
      if (a.state === "DELIVERED" && !next.result) {
        next = { ...next, result: {
          files: next.outputs.map((o, i) => ({ name: `업무${next.id}_결과물.${o.toLowerCase()}`, kind: o, size: i === 0 ? "2.4 MB" : "820 KB" })),
          at: "방금", earlyMinutes: 34, checks: ["파일 수신", "요청 형식 포함", "납품 시각 기록"] } };
      }
      return { ...s, quests: { ...s.quests, [a.id]: next } };
    }
    case "accept": {
      const q = s.quests[a.id];
      if (!q) return s;
      return { ...s, quests: { ...s.quests, [a.id]: { ...q, state: "COMPLETE",
        events: [...q.events, { at: "방금", ko: "결과 확인이 끝났습니다", en: "업무 완료" }] } } };
    }
    case "revise": {
      const q = s.quests[a.id];
      if (!q) return s;
      return { ...s, quests: { ...s.quests, [a.id]: { ...q, state: "REVISION",
        events: [...q.events, { at: "방금", ko: "수정을 요청했습니다", en: "수정 요청" }] } } };
    }
    case "bid": {
      const q = s.quests[a.id];
      if (!q || q.bids.some((b) => b.personId === ME)) return s;
      return { ...s, quests: { ...s.quests, [a.id]: { ...q, state: "BIDDING",
        bids: [...q.bids, { id: `me-${a.id}`, personId: ME, price: a.price, hours: a.hours }],
        events: [...q.events, { at: "방금", ko: "제안을 보냈습니다", en: "제안 등록" }] } } };
    }
    case "hydrate": return a.state;
    case "reset": return initial;
    default: return s;
  }
}

function seedBids(cat: string) {
  const pick: Record<string, [string, number, number][]> = {
    cad: [["p-lee", 92000, 14], ["p-choi", 104000, 7], ["p-han", 128000, 6], ["p-seo", 155000, 5]],
    image: [["p-noh", 88000, 9], ["p-bae", 112000, 7], ["p-yun", 124000, 5], ["p-im", 98000, 11]],
    data: [["p-im", 76000, 10], ["p-bae", 105000, 8], ["p-noh", 69000, 22]],
    doc: [["p-im", 96000, 12], ["p-yun", 118000, 9], ["p-bae", 134000, 7], ["p-noh", 88000, 18]],
  };
  return (pick[cat] ?? pick.doc).map(([personId, price, hours], i) => ({ id: `n${i + 1}`, personId, price, hours }));
}
function seedFit(cat: string): Record<string, number> {
  const f: Record<string, Record<string, number>> = {
    cad: { "p-han": 0.93, "p-seo": 0.85, "p-lee": 0.72, "p-choi": 0.87 },
    image: { "p-yun": 0.92, "p-noh": 0.81, "p-bae": 0.75, "p-im": 0.6 },
    data: { "p-im": 0.9, "p-bae": 0.72, "p-noh": 0.55 },
    doc: { "p-bae": 0.89, "p-im": 0.79, "p-yun": 0.71, "p-noh": 0.58 },
  };
  return f[cat] ?? f.doc;
}

interface Api extends State {
  startDraft: (text: string, files: { name: string; size: string }[]) => void;
  patchDraft: (patch: Partial<Draft>) => void;
  submit: () => void;
  setQuestState: (id: string, state: QuestState, ev?: { at: string; ko: string; en: string }) => void;
  accept: (id: string) => void;
  revise: (id: string) => void;
  placeBid: (id: string, price: number, hours: number) => void;
  reset: () => void;
  list: Quest[];
}

const Ctx = createContext<Api | null>(null);

export function DemoProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initial);

  // Restore after mount so server and client agree on first paint.
  useEffect(() => {
    try {
      const raw = window.sessionStorage.getItem(KEY);
      if (raw) dispatch({ t: "hydrate", state: JSON.parse(raw) as State });
    } catch { /* storage blocked */ }
  }, []);

  useEffect(() => {
    // Never persist the untouched initial state: on mount this runs before the
    // restore above has committed and would clobber the session.
    if (state === initial) return;
    try { window.sessionStorage.setItem(KEY, JSON.stringify(state)); } catch { /* ignore */ }
  }, [state]);

  const api = useMemo<Api>(() => ({
    ...state,
    list: Object.values(state.quests),
    startDraft: (text, files) => dispatch({ t: "draft", text, files }),
    patchDraft: (patch) => dispatch({ t: "patch", patch }),
    submit: () => dispatch({ t: "submit" }),
    setQuestState: (id, s2, ev) => dispatch({ t: "state", id, state: s2, ev }),
    accept: (id) => dispatch({ t: "accept", id }),
    revise: (id) => dispatch({ t: "revise", id }),
    placeBid: (id, price, hours) => dispatch({ t: "bid", id, price, hours }),
    reset: () => { try { window.sessionStorage.removeItem(KEY); } catch {} dispatch({ t: "reset" }); },
  }), [state]);

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useDemo(): Api {
  const c = useContext(Ctx);
  if (!c) throw new Error("useDemo outside provider");
  return c;
}

export { ALL_QUESTS };
