# KAPAPI — TASK QUEUE

Status: **current implementation queue**  
Updated: **2026-09-03**  
Primary implementation target: `feat/prototype-v2`

Authority:

1. `docs/ORIGIN_AND_GROWTH_THESIS.md`
2. `docs/DECISIONS.md` D-032 through D-034
3. `docs/PRODUCT.md`
4. `docs/ROADMAP.md`
5. `docs/PROTOTYPE_SPEC.md`
6. current visual/content rules

Do not restore premature universal auto-routing or the removed special/game terminology.

---

# P0 — Canon alignment

## KAP-100 — Task-first canon
**Status:** DONE

- founder-origin problem preserved
- work-first market explicit
- Architecture/CAD testbed only
- market broader than professional-only work
- price + completion time mandatory
- execution layer remains North Star

## KAP-101 — Routing responsibility is earned
**Status:** DONE

- early default can be KAPAPI recommendation + client confirmation
- routing responsibility grows with data
- universal outcome/SLA promise deferred

## KAP-102 — Resource-agnostic execution layer
**Status:** DONE

Long-term execution permits human worker, AI, deterministic automation, specialist partner, hybrid execution and multi-worker decomposition.

## KAP-103 — Standard terminology
**Status:** DOCS DONE / IMPLEMENTATION OPEN

Canonical/public terms:

- 발주자
- 작업자
- 업무
- 제안
- 가격
- 완료시간
- 작업대금
- 긴급 업무
- 작업이력 / 정시완료율 / 수정률
- 업무 완료

Acceptance:

- no special role glossary
- no fictional/game terminology
- no levels or experience points
- no gamified completion labels
- public prototype and media overlays match the same terminology

---

# P0 — Prototype behavior realignment

## KAP-110 — Recommendation + confirmation
**Status:** OPEN

Change transaction proof to:

`제안 → 필수요건/정렬 → KAPAPI 추천 → 발주자 확정 → 배정`

Required UI:

- recommended worker
- price
- completion time
- relevant work history
- short rationale
- primary `이 작업자로 진행`
- secondary `다른 제안 보기`

## KAP-111 — User-facing state model
**Status:** OPEN

Use ordinary labels:

```text
모집 중
제안 도착
추천 준비
발주자 확정
작업자 배정
작업 중
결과 전달
검토
수정 요청
업무 완료
```

Internal code identifiers may remain technical, but no removed vocabulary may leak into public UI.

## KAP-112 — Deterministic fixture logic
**Status:** OPEN

Keep deterministic ranking for demo stability. Interpret top candidate as recommended, not silently assigned before client confirmation.

---

# P0 — Terminology / visible-copy sweep

## KAP-115 — Remove removed terminology from v2 UI
**Status:** OPEN

Sweep current implementation for special role/state terminology and replace with the standard terminology in D-034.

Acceptance:

- hero
- board
- work detail
- proposal/recommendation
- workroom
- result
- profile/history
- navigation/footer
- demo fixtures
- hero media overlays

contain no removed special/game vocabulary.

## KAP-116 — Remove decorative progression UI
**Status:** OPEN

Remove level/experience metrics and replace them only where useful with real evidence such as:

- similar-work completion count
- on-time rate
- revision rate
- total completed work
- relevant career

---

# P0 — Landing/message alignment

## KAP-120 — Hero copy
**Status:** OPEN

Preferred direction:

> **사람을 찾지 말고, 할 일을 올리세요.**  
> 카파피가 작업 조건을 정리하고 맞는 제안을 추천합니다.

Keep category-neutral input, file attachment, strong primary CTA and visible `작업 찾기`.

## KAP-121 — Broad examples, narrow validation
**Status:** OPEN

Public examples can span Data & Documents / Content & Production / Skilled Support. Actual validation opens one or two micro-markets at a time.

## KAP-122 — Recommendation proof
**Status:** OPEN

Show filtering, price × completion time, actual work history, recommendation rationale and client confirmation.

## KAP-123 — Task-first distinction
**Status:** OPEN

Landing should demonstrate:

`work exists first → worker chooses suitable work`

## KAP-124 — Future execution layer
**Status:** OPEN

Show concise future evolution:

`completed work → trust → better recommendation → routing/recovery → work in → result out`

Label as future/product evolution.

---

# P0 — Client creation/result flow

## KAP-130 — Work draft copy
**Status:** OPEN

After posting, say proposals will arrive and KAPAPI will recommend based on conditions/history. Do not claim universal auto-assignment.

## KAP-131 — Recommendation confirmation
**Status:** OPEN

Recommended worker can be confirmed; alternatives can be inspected; confirmation creates assignment.

## KAP-132 — Result loop
**Status:** VERIFY

Preserve delivered files, deadline/timestamp, objective checks, accept and revision request.

---

# P0 — Worker flow

## KAP-140 — Preserve work board
**Status:** VERIFY

- `작업 찾기` primary worker path
- filters include suitable/urgent work
- no storefront requirement
- one account can issue and perform different work

## KAP-141 — Proposal form
**Status:** VERIFY

Every proposal requires price + committed completion time. Avoid long proposal theatre.

## KAP-142 — Trust history
**Status:** VERIFY

Relevant career/history, on-time and revision signals are the visible trust system. No decorative levels/experience points.

---

# P1 — Long-term concept proof

## KAP-150 — Execution-resource diagram
**Status:** OPEN

```text
KAPAPI
├ human worker
├ AI
├ automation
├ specialist partner
└ hybrid / multi-worker
        ↓
      RESULT
```

## KAP-151 — Data flywheel proof
**Status:** OPEN

Completed work creates price, completion-time, task-fit, on-time, revision and failure/recovery data that improves recommendation/routing.

---

# P0 — QA

## KAP-160 — Update automated invariants
**Status:** OPEN

New invariants:

- no storefront-first landing
- price + completion time required
- recommendation != assignment
- client confirmation exists
- no universal auto-routing claim
- Architecture/CAD not hero identity
- task board remains functional
- no permanent client/worker account split
- future execution layer clearly labeled future
- no special/game terminology in public copy
- no level/experience UI

## KAP-161 — Build / lint / typecheck
**Status:** OPEN

## KAP-162 — Desktop/mobile visual QA
**Status:** OPEN

Verify landing, board, work detail/proposal, recommendation/confirmation, result and reduced motion.

## KAP-163 — Preview QA
**Status:** OPEN

Verify actual latest deployed branch head when Preview access exists.

---

# P1 — Application proof

## KAP-170 — 60-second 1R demo path
**Status:** OPEN

```text
Landing
→ 발주자 creates work
→ 작업자 finds work
→ price + completion-time proposal
→ KAPAPI recommendation
→ 발주자 confirmation
→ execution/result
→ accept/revise
→ future execution layer
```

## KAP-171 — Honest prototype boundaries
**Status:** OPEN

Do not imply production availability of escrow/payment custody, tax settlement, universal identity verification, universal auto-routing, universal SLA/outcome guarantee or subjective AI quality judgment.

---

# Completion condition

The alignment pass is complete when a new reviewer can describe KAPAPI as:

> **“일이 먼저 올라오는 업무시장에서 시작해서, 작업자들이 가격과 완료시간을 제안하고 카파피가 실제 이력과 조건으로 추천해준다. 거래가 쌓이면 배정과 복구를 고도화하고 결국 일을 넣으면 결과가 돌아오는 시스템으로 간다.”**

and no canonical document or current v2 user-facing flow materially contradicts that description.
