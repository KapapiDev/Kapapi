"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";

import { CURRENT_USER_ID, QUESTS, USERS } from "./fixtures";
import { routeQuest } from "./routing";
import { buildScopeDraft, questFromScope, type ScopeDraft } from "./scope";
import type { FileObject, Quest, QuestEvent, QuestState } from "./types";

/**
 * Deterministic demo state.
 *
 * There is no auth and no database. One universal user is always signed in;
 * which role they hold is derived per QUEST. Everything here is replayable —
 * `reset()` returns the prototype to its opening state.
 */

export const LIVE_QUEST_ID = "0219";

/**
 * Session key. The demo has no backend, but a reviewer who reloads or opens a
 * QUEST link directly must still find their QUEST — otherwise the loop is not
 * replayable (QA_CHECKLIST K3). Session-scoped, so a fresh tab starts clean.
 */
const STORAGE_KEY = "kapapi.demo.v1";

interface DraftState {
  text: string;
  files: FileObject[];
  scope: ScopeDraft;
  /** Free-text answer to the missing-information prompts. */
  supplement: string;
}

interface DemoState {
  quests: Record<string, Quest>;
  draft: DraftState | null;
  /** Set once the GM has submitted; drives the hands-off confirmation. */
  submitted: boolean;
  /** Execution-side EXP for the current user, updated on acceptance. */
  exp: number;
  revisionNote: string | null;
}

type Action =
  | { type: "draft"; text: string; files: FileObject[] }
  | { type: "patchDraft"; patch: Partial<ScopeDraft> }
  | { type: "supplement"; value: string }
  | { type: "submit" }
  | { type: "setState"; questId: string; state: QuestState; event?: QuestEvent }
  | { type: "accept"; questId: string }
  | { type: "revision"; questId: string; note: string }
  | { type: "bid"; questId: string; price: number; deliveryHours: number; note?: string }
  | { type: "hydrate"; state: DemoState }
  | { type: "reset" };

const initialState: DemoState = {
  quests: QUESTS,
  draft: null,
  submitted: false,
  exp: USERS[CURRENT_USER_ID].execution.exp,
  revisionNote: null,
};

function withEvent(quest: Quest, state: QuestState, event?: QuestEvent): Quest {
  return {
    ...quest,
    state,
    events: event ? [...quest.events, event] : quest.events,
  };
}

function reducer(state: DemoState, action: Action): DemoState {
  switch (action.type) {
    case "draft":
      return {
        ...state,
        submitted: false,
        draft: {
          text: action.text,
          files: action.files,
          scope: buildScopeDraft(action.text, action.files),
          supplement: "",
        },
      };

    case "patchDraft":
      if (!state.draft) return state;
      return {
        ...state,
        draft: { ...state.draft, scope: { ...state.draft.scope, ...action.patch } },
      };

    case "supplement": {
      if (!state.draft) return state;
      const supplement = action.value;
      const base = buildScopeDraft(state.draft.text, state.draft.files);
      const scope: ScopeDraft = {
        ...state.draft.scope,
        // A real answer resolves the open questions; an empty one restores them.
        missingInfo: supplement.trim().length > 0 ? [] : base.missingInfo,
        scope:
          supplement.trim().length > 0
            ? [...state.draft.scope.scope.filter((s) => !s.startsWith("추가 조건:")),
               `추가 조건: ${supplement.trim()}`]
            : state.draft.scope.scope.filter((s) => !s.startsWith("추가 조건:")),
      };
      return { ...state, draft: { ...state.draft, supplement, scope } };
    }

    case "submit": {
      if (!state.draft) return state;
      const quest = questFromScope(state.draft.scope, {
        id: LIVE_QUEST_ID,
        issuerId: CURRENT_USER_ID,
        files: state.draft.files,
      });
      return {
        ...state,
        submitted: true,
        quests: { ...state.quests, [LIVE_QUEST_ID]: quest },
      };
    }

    case "setState": {
      const quest = state.quests[action.questId];
      if (!quest) return state;
      let next = withEvent(quest, action.state, action.event);
      if (action.state === "ASSIGNED" && !next.assigneeId) {
        const routed = routeQuest(quest, USERS);
        next = { ...next, assigneeId: routed.selected?.player.id };
      }
      if (action.state === "DELIVERED" && !next.result) {
        next = {
          ...next,
          result: {
            files: next.outputFormats.map((format, i) => {
              const kind = format.split(" ")[0];
              return {
                name: `QUEST${next.id}_결과물.${kind.toLowerCase()}`,
                kind,
                size: i === 0 ? "2.4 MB" : "860 KB",
              };
            }),
            deliveredAt: "방금",
            minutesVsDeadline: 34,
            checks: [
              { label: "파일 수신", passed: true },
              { label: `요청 형식(${next.outputFormats.join("·")}) 포함`, passed: true },
              { label: "납품 시각 기록", passed: true },
            ],
          },
        };
      }
      return { ...state, quests: { ...state.quests, [action.questId]: next } };
    }

    case "accept": {
      const quest = state.quests[action.questId];
      if (!quest) return state;
      const next = withEvent(quest, "COMPLETE", {
        at: "방금",
        state: "COMPLETE",
        label: "결과 확인 완료",
        detail: "QUEST COMPLETE",
      });
      return {
        ...state,
        revisionNote: null,
        quests: { ...state.quests, [action.questId]: next },
        // Execution-side progression only, and only after the GM accepted.
        exp: quest.assigneeId === CURRENT_USER_ID ? state.exp + 240 : state.exp,
      };
    }

    case "revision": {
      const quest = state.quests[action.questId];
      if (!quest) return state;
      const next = withEvent(quest, "REVISION_REQUESTED", {
        at: "방금",
        state: "REVISION_REQUESTED",
        label: "수정 요청",
        detail: "REVISION REQUESTED",
      });
      return {
        ...state,
        revisionNote: action.note,
        quests: { ...state.quests, [action.questId]: next },
      };
    }

    case "bid": {
      const quest = state.quests[action.questId];
      if (!quest) return state;
      if (quest.bids.some((b) => b.playerId === CURRENT_USER_ID)) return state;
      const next: Quest = {
        ...quest,
        state: "BIDDING",
        bids: [
          ...quest.bids,
          {
            id: `me-${action.questId}`,
            playerId: CURRENT_USER_ID,
            price: action.price,
            deliveryHours: action.deliveryHours,
            note: action.note,
            arrivedAtMin: 99,
          },
        ],
        events: [
          ...quest.events,
          { at: "방금", state: "BIDDING", label: "입찰 제출", detail: "BID SUBMITTED" },
        ],
      };
      return { ...state, quests: { ...state.quests, [action.questId]: next } };
    }

    case "hydrate":
      return action.state;

    case "reset":
      return initialState;

    default:
      return state;
  }
}

interface DemoApi extends DemoState {
  startDraft: (text: string, files: FileObject[]) => void;
  patchDraft: (patch: Partial<ScopeDraft>) => void;
  setSupplement: (value: string) => void;
  submit: () => void;
  setQuestState: (questId: string, state: QuestState, event?: QuestEvent) => void;
  accept: (questId: string) => void;
  requestRevision: (questId: string, note: string) => void;
  placeBid: (questId: string, price: number, deliveryHours: number, note?: string) => void;
  reset: () => void;
}

const DemoContext = createContext<DemoApi | null>(null);

export function DemoProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Restore after mount rather than during render, so server and client agree
  // on the first paint and hydration stays clean.
  useEffect(() => {
    try {
      const raw = window.sessionStorage.getItem(STORAGE_KEY);
      if (raw) dispatch({ type: "hydrate", state: JSON.parse(raw) as DemoState });
    } catch {
      /* Private mode or blocked storage: the demo just starts fresh. */
    }
  }, []);

  useEffect(() => {
    // Never persist the untouched initial state: on mount this effect runs
    // before the restore dispatch above has committed, and writing here would
    // clobber the session it is about to restore.
    if (state === initialState) return;
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* Storage is a convenience here, never a requirement. */
    }
  }, [state]);

  const startDraft = useCallback(
    (text: string, files: FileObject[]) => dispatch({ type: "draft", text, files }),
    [],
  );
  const patchDraft = useCallback(
    (patch: Partial<ScopeDraft>) => dispatch({ type: "patchDraft", patch }),
    [],
  );
  const setSupplement = useCallback(
    (value: string) => dispatch({ type: "supplement", value }),
    [],
  );
  const submit = useCallback(() => dispatch({ type: "submit" }), []);
  const setQuestState = useCallback(
    (questId: string, questState: QuestState, event?: QuestEvent) =>
      dispatch({ type: "setState", questId, state: questState, event }),
    [],
  );
  const accept = useCallback((questId: string) => dispatch({ type: "accept", questId }), []);
  const requestRevision = useCallback(
    (questId: string, note: string) => dispatch({ type: "revision", questId, note }),
    [],
  );
  const placeBid = useCallback(
    (questId: string, price: number, deliveryHours: number, note?: string) =>
      dispatch({ type: "bid", questId, price, deliveryHours, note }),
    [],
  );
  const reset = useCallback(() => {
    try {
      window.sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    dispatch({ type: "reset" });
  }, []);

  const value = useMemo<DemoApi>(
    () => ({
      ...state,
      startDraft,
      patchDraft,
      setSupplement,
      submit,
      setQuestState,
      accept,
      requestRevision,
      placeBid,
      reset,
    }),
    [
      state,
      startDraft,
      patchDraft,
      setSupplement,
      submit,
      setQuestState,
      accept,
      requestRevision,
      placeBid,
      reset,
    ],
  );

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}

export function useDemo(): DemoApi {
  const ctx = useContext(DemoContext);
  if (!ctx) throw new Error("useDemo must be used inside <DemoProvider>");
  return ctx;
}

export { CURRENT_USER_ID, USERS };
