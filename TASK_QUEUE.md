# KAPAPI — TASK QUEUE

Status: **current implementation queue**  
Updated: **2026-09-03**  
Primary implementation target: `main`

Authority:

1. `docs/DECISIONS.md` D-033.1–.12, D-034, D-035
2. `docs/ORIGIN_AND_GROWTH_THESIS.md`
3. `docs/PRODUCT.md`
4. `docs/ROADMAP.md`
5. `docs/PROTOTYPE_SPEC.md`
6. current visual/content rules

Do not restore the removed special/game terminology, and do not put a proposal
list, a ranked comparison or a worker-selection control back on the 발주자 surface.
What the 발주자 approves is the **실행 계약** — 결과물 + 가격 + 완료시간 + 수정 경계 +
복구 경계 — not a worker (D-033.1).

---

# P0 — Canon alignment

## KAP-100 — Task-first canon
**Status:** DONE

- founder-origin problem preserved
- work-first market explicit
- Architecture/CAD testbed only
- market broader than professional-only work
- price + completion time mandatory
- execution-contract approval and result return are the initial client UX; execution infrastructure is the long-term capability goal

## KAP-101 — Routing responsibility is earned
**Status:** DONE

- the client approves the 실행 계약; KAPAPI selects the 작업자 (D-033.1)
- routing responsibility grows with data
- universal outcome/SLA promise deferred

## KAP-102 — Resource-agnostic execution layer
**Status:** DONE

Internal execution permits human worker, AI, deterministic automation, specialist partner, hybrid execution and multi-worker decomposition where category evidence supports them.

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

## KAP-110 — Execution contract approval
**Status:** OPEN

Change transaction proof to:

`업무 요청 → SOW 정리 → 실행 계약 → 발주자 승인 → (카파피: 조달·배정·수행·QA·복구) → 결과 → 수락 / 수정 요청`

Required UI on the 발주자 surface:

- 실행 계약: 결과물, 가격, 완료시간, 수정 경계, 완료되지 않을 때의 처리
- the basis the price was derived from
- primary `이 조건으로 맡기기`
- after assignment: 배정된 작업자 + 왜 이 작업자인가요, as a record with no action

Explicitly **not** on the 발주자 surface: proposal list, ranked comparison,
`이 작업자로 진행`, `다른 제안 보기`.

## KAP-111 — User-facing state model
**Status:** OPEN

Use ordinary labels:

```text
업무 접수
실행 계약 확인
계약 승인
작업 중
검수 중
복구 진행 (필요 시)
결과 전달
결과 확인
수정 요청
업무 완료
```

Internal code identifiers may remain technical, but no removed vocabulary may leak into public UI.

## KAP-112 — Deterministic fixture logic
**Status:** OPEN

Keep deterministic internal ranking for demo stability. The top eligible candidate is the assigned 작업자. Retain criteria and exclusions in the internal record and explanatory demo; the client sees a concise assignment rationale as information. Contract approval must precede execution.

---

# P0 — Terminology / visible-copy sweep

## KAP-115 — Remove removed terminology from v2 UI
**Status:** OPEN

Sweep current implementation for special role/state terminology and replace with the standard terminology in D-034.

Acceptance:

- hero
- board
- work detail
- execution contract / worker proposal
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

> **오늘은 어떤 일을 끝낼까요?**  
> 파일을 업로드하고 간단하게 설명해 주세요.

Keep category-neutral input, file attachment and one strong primary CTA (`맡기기`).
`작업 찾기` is reached by the 발주자 / 작업자 header toggle, not by a second CTA.

## KAP-121 — Broad examples, narrow validation
**Status:** OPEN

Public examples can span Data & Documents / Content & Production / Skilled Support. Actual validation opens one or two micro-markets at a time.

## KAP-122 — Selection proof
**Status:** DONE

`이용 방법` explains KAPAPI's internal procurement through proposals, eligibility,
selection evidence, QA/recovery and delivery. The 발주자 surface shows the execution
contract, progress and result, with assignment rationale available as information.

## KAP-123 — Task-first distinction
**Status:** OPEN

Landing should demonstrate:

`work exists first → worker chooses suitable work`

## KAP-124 — Future execution layer
**Status:** OPEN

Show concise future evolution:

`completed work → scope/quote/QA/recovery data → better internal routing and recovery → broader execution capacity`

Label capability growth as future evolution. Execution-contract approval and result return are already the current client flow.

---

# P0 — Client creation/result flow

## KAP-130 — Work draft copy
**Status:** OPEN

After input, explain that KAPAPI is organizing the scope and preparing an execution contract. Show deliverable, price, completion time, revision boundary and recovery boundary for approval. Use assisted-quote wording until category evidence supports near-instant pricing.

## KAP-131 — Contract approval and internal execution
**Status:** OPEN

The client approves the execution contract with `이 조건으로 맡기기` or requests changes to its conditions. KAPAPI handles procurement, assignment, QA and recovery internally. The client surface contains no proposal comparisons or worker-selection actions.

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

# P1 — Execution mechanism and capability proof

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

Requests become structured SOWs, quotes and approved contracts, followed by internal procurement, execution, QA/recovery and acceptance. Those records improve scope, quotes, routing and recovery; track operator minutes and completed-outcome contribution.

---

# P0 — QA

## KAP-160 — Update automated invariants
**Status:** OPEN

New invariants:

- no storefront-first landing
- price + completion time required
- the 발주자 surface has no ranked comparison and no selection control
- the 실행 계약 discloses the basis of its price
- no universal auto-routing claim
- Architecture/CAD not hero identity
- task board remains functional
- no permanent client/worker account split
- current result-oriented UX distinct from future automation and stronger guarantees
- no special/game terminology in public copy
- no level/experience UI

## KAP-161 — Build / lint / typecheck
**Status:** OPEN

## KAP-162 — Desktop/mobile visual QA
**Status:** OPEN

Verify landing, board, work detail/proposal, execution-contract approval, progress, result/revision and reduced motion.

## KAP-163 — Preview QA
**Status:** OPEN

Verify actual latest deployed branch head when Preview access exists.

---

# P1 — Application proof

## KAP-170 — 60-second 1R demo path
**Status:** OPEN

```text
Landing
→ 발주자 requests work / files
→ KAPAPI structures SOW
→ 실행 계약: 결과물 + 가격 + 완료시간 + 수정 경계 + 복구 경계
→ 발주자 approves contract
→ KAPAPI internally procures / assigns / executes / checks / recovers
→ result
→ accept/revise
→ 이용 방법: worker task discovery and price + completion-time proposals inside KAPAPI
→ future quote/routing/recovery capability
```

## KAP-171 — Honest prototype boundaries
**Status:** OPEN

Do not imply production availability of escrow/payment custody, tax settlement, universal identity verification, universal auto-routing, universal SLA/outcome guarantee or subjective AI quality judgment.

---

# Completion condition

The alignment pass is complete when a new reviewer can describe KAPAPI as:

> **“발주자는 업무를 입력하고 결과물·가격·완료시간·수정·복구 조건이 담긴 실행 계약을 승인한다. 카파피는 내부 작업자 시장과 AI·자동화를 활용해 수행·검수·복구하고 결과를 돌려준다. 실행 데이터가 쌓일수록 견적·배정·복구가 정교해진다.”**

and no canonical document or current v2 user-facing flow materially contradicts that description.
