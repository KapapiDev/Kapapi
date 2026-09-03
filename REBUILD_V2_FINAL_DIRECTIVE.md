# KAPAPI Prototype v2 — FINAL EXECUTION DIRECTIVE

Status: **highest-priority visual/execution directive on `개선안`**  
Updated: **2026-09-03**

## 0. Authority

Product/business behavior is governed by:

1. `docs/DECISIONS.md` — **D-033**
2. `docs/PRODUCT.md`
3. `docs/PROTOTYPE_SPEC.md`
4. `docs/ROADMAP.md`
5. `TASK_QUEUE.md`
6. `CLAUDE_HANDOFF.md`

Existing v2 visual research remains valuable, but **visual/copy examples never override D-033**.

Any old flow centered on:

`BIDs → KAPAPI recommendation → GM confirms PLAYER`

is superseded as the default GM product behavior.

---

## 1. Current product truth

Canonical split:

```text
GM
work request
→ structured SOW
→ RESULT + PRICE + COMPLETION TIME
→ 이 조건으로 맡기기
→ KAPAPI executes/orchestrates
→ result

PLAYER
QUEST discovery / Offer
→ PRICE + DELIVERY
→ execute
→ REWARD

KAPAPI INTERNAL
human / AI / automation / partner procurement
→ route / monitor / QA / recover
```

North Star:

> **해야 할 일을 넣으면, 결과가 나온다.**

Do not make the GM shop for a worker in the default path.

---

## 2. Visual quality remains P0

Do not trade away:

- strong first-view composition;
- typography hierarchy;
- disciplined spacing;
- mobile quality;
- motion continuity;
- real product-state proof;
- accessibility/performance;

for faster feature completion.

The v2 visual baseline can be retained while the transaction story changes.

---

## 3. Mandatory reading order

Before implementation changes, read:

1. `docs/DECISIONS.md` D-033
2. `docs/ORIGIN_AND_GROWTH_THESIS.md`
3. `docs/PRODUCT.md`
4. `docs/ROADMAP.md`
5. `docs/VALIDATION.md`
6. `docs/PROTOTYPE_SPEC.md`
7. `CLAUDE_HANDOFF.md`
8. `TASK_QUEUE.md`
9. `docs/LEGAL.md`
10. `docs/PROGRAM_2026_MODU.md`

Then consult visual layers:

- `docs/PROTOTYPE_V2_CONTENT_GOVERNANCE.md`
- `docs/PROTOTYPE_V2_VISUAL_RESEARCH_PROTOCOL.md`
- `docs/PROTOTYPE_V2_REFERENCE_ADDENDUM.md`
- `docs/PROTOTYPE_V2_VISUAL_COMMUNICATION_RULES.md`
- `docs/PROTOTYPE_V2_KOREAN_UX_WRITING.md`
- `docs/PROTOTYPE_V2_HERO_COMPOSITING.md`
- `docs/KAPAPI_ART_DIRECTION.md`
- `docs/KAPAPI_DESIGN.md`
- `docs/KAPAPI_MOTION.md`
- `docs/HERO_MEDIA.md`

If they conflict with D-033 behavior, preserve the visual principle and rewrite the behavior/copy.

---

## 4. Hero product narrative

Primary public semantic direction:

> **맡길 일을 적어주세요.**  
> 카파피가 작업 조건을 정리하고 가격과 완료시각을 제시합니다.

Primary CTA:

> **조건 확인하기**

Secondary PLAYER path:

> **작업 찾기**

Hero sequence:

```text
REQUEST
→ SOW READY
→ RESULT / PRICE / COMPLETION TIME
→ CONTRACTED
→ EXECUTION SECURED
→ RESULT READY
```

Do not use `카파피 추천`, `이 작업자로 진행`, or `다른 제안 보기` as the core GM story.

---

## 5. Show, do not explain

Prefer product-state demonstrations of:

- rough request → SOW;
- Execution Contract;
- PLAYER QUEST + PRICE × DELIVERY;
- internal route and backup;
- recovery;
- result/accept-revise;
- execution-data flywheel.

Avoid turning the landing page into a strategy memo.

---

## 6. Internal market visualization

A dark/operational visual moment may show the hidden execution engine:

```text
GM CONTRACT  ₩49,000 / 19:30
PLAYER A     ₩27,000 / 6H
PLAYER B     ₩31,000 / 3H
AI + QA      expected ₩18,000 / 2H
ROUTE        PLAYER B + preflight
BACKUP       PLAYER C
```

This is an explanatory prototype fixture, not a claim of autonomous production optimization.

---

## 7. Initial task examples

Prefer bounded outcomes where accountability still matters:

- 30 PDFs → specified fields → checked XLSX;
- messy workbook → defined cleanup rules → verified output;
- PPT/report → specified standard → final PPTX;
- e-commerce batch → normalized/upload-ready assets + data;
- defined CAD production support;
- reproducible small web/code fix.

Do not make ultra-cheap mechanical microtasks the brand center.

---

## 8. Current public Korean actions

Preferred action vocabulary:

- `맡길 일을 적어주세요`
- `파일 첨부`
- `조건 확인하기`
- `이 조건으로 맡기기`
- `작업 찾기`
- `제안 보내기`
- `Offer 수락`
- `실행 중`
- `복구 중`
- `결과 확인`
- `수정 요청`
- `QUEST COMPLETE`

World terminology remains secondary to ordinary understanding.

---

## 9. Prototype honesty

Do not claim:

- universal instant quote;
- universal autonomous routing;
- universal automatic QA;
- universal SLA;
- production payment/tax/legal architecture already complete.

Concierge/manual operation behind the Outcome UX is allowed for validation.

---

## 10. Mandatory QA

Before calling redesign complete, verify:

- GM default path contains no worker shopping;
- RESULT + PRICE + COMPLETION TIME is visually obvious;
- PLAYER task board still proves task-first supply;
- PRICE + DELIVERY remains in PLAYER interaction;
- recovery is visible;
- Architecture/CAD does not dominate the hero;
- mobile and reduced-motion versions preserve the story;
- no old recommendation-first copy survives in the main demo path;
- no fake automation/SLA claims were introduced.

Definition of done:

> **A reviewer sees a work-execution product backed by a hidden market, not a recommendation-first freelancer marketplace.**
