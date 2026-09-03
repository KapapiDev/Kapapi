# KAPAPI Prototype v2 QA Checklist

Status: **current release/review gate for Prototype v2**  
Updated: **2026-09-03**

A **BLOCKER** failure means the current prototype is not ready for founder review/demo.

Product authority: current `DECISIONS.md`, `PRODUCT.md`, `ROADMAP.md`, `PROTOTYPE_SPEC.md`.

---

# A. Product clarity

## A1. Three-second test — BLOCKER

A first-time Korean visitor understands:

- this is a place to submit bounded online work
- the main client action is to describe/attach work
- there is a clear `작업 찾기` path for people who want to perform work

Fail if first impression is only freelancer directory, seller storefront catalog, generic job board, gamified work app, AI dashboard, developer console or CAD-only service.

## A2. Task-first identity — BLOCKER

The product makes clear that work exists first. Workers can browse open work without creating a service storefront.

## A3. Standard terminology only — BLOCKER

Public UI uses ordinary language:

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

Fail if the UI introduces fictional role names, a special glossary, levels, experience points or game-style completion/status terms.

## A4. Price × completion time — BLOCKER

Every proposal requires price + committed completion time. Completion time means elapsed time from assignment to submission, not estimated labor hours.

## A5. Contract approval before internal execution — BLOCKER

```text
실행 계약 승인
→ [KAPAPI 내부] 제안
→ 필수요건/정렬
→ KAPAPI 선정
→ 배정
```

The 발주자 approves the execution contract: deliverable + price + completion time +
acceptance/revision boundary + recovery boundary. KAPAPI then procures and assigns
execution internally. Fail if that approval is omitted, assignment has no available
rationale, a client control picks a worker, or absent escrow/completion guarantees are claimed.

## A6. Worker selection stays inside KAPAPI — BLOCKER

The 발주자 surface offers execution-contract approval and result acceptance/revision.
Assignment information and its criteria do not become a worker-selection action.
Fail if a ranked comparison, alternatives list or selection control appears there.
Automated UI checks must require zero worker-selection controls while preserving
the contract and result actions.

## A7. Result loop — BLOCKER

Client can inspect result/files, accept/complete and request revision within scope.

## A8. Future routing is framed honestly — BLOCKER

Future progression may be shown, but later universal routing/SLA behavior must not be presented as current capability.

---

# B. Worker / supply side

## B1. `작업 찾기` exists — BLOCKER

Workers have a real route to open work.

## B2. Board is usable — BLOCKER

Board exposes title, category, payment/range where applicable, deadline, urgent status when real, brief scope, requirements, proposal count and status.

## B3. No storefront prerequisite — BLOCKER

A worker can reach a proposal opportunity without building a seller shop, audience or long service listing.

## B4. One universal identity — BLOCKER

A user may issue one task and perform another. No permanent buyer/seller account fork is required.

---

# C. First viewport / hero

## C1. One dominant client action — BLOCKER

The work-entry surface dominates above the fold.

## C2. Current-stage hero copy — BLOCKER

Hero semantics match the current stage, e.g.:

> **오늘은 어떤 일을 끝낼까요?**  
> 파일을 업로드하고 간단하게 설명해 주세요.

Under D-035 the hero may state result return. Fail if it claims escrow,
completion guarantee, or AI quality judgement, or shows a fabricated progress
percentage.

## C3. Category neutrality — BLOCKER

Examples span multiple kinds of online work. CAD is not the master category.

## C4. Worker entry is visible but secondary

`작업 찾기` is discoverable without competing with the main client action.

## C5. Hero media supports the action

Video, if enabled, must not block primary input, must have poster/fallback, must not contain authoritative garbled/generated UI and must remain understandable on mobile/reduced motion.

## C6. Hero choreography — BLOCKER

```text
업무 요청 (파일 + 한 줄)
→ 실행 계약 승인 (결과물 · 가격 · 완료시간 · 수정 경계 · 복구 경계)
→ (카파피: 제안 도착 · 조건 확인 · 선정 · 배정)
→ 결과 도착
```

---

# D. Work creation / scope

## D1. Scope confirmation — BLOCKER

A rough request can become structured work with inputs/files, scope, deliverables, output format, deadline, acceptance criteria, revision boundary, budget/commercial boundary, confidentiality/security and missing information where appropriate.

## D2. Honest request and execution-contract approval — BLOCKER

After the request, copy explains that KAPAPI structures the work and presents an
execution contract for approval. Show deliverable, price, completion time,
acceptance/revision and recovery boundaries with the quote basis. Progress follows
approval. Do not turn the request into a promise of universal instant pricing.

## D3. AI claim hygiene

AI may assist scoping/fit/objective checks. Do not claim authoritative price setting, subjective final quality judgment or magical sole selection.

---

# E. Internal procurement / assignment

## E1. Eligibility filtering

Within KAPAPI's procurement process, ineligible candidates can be excluded for real reasons such as skill/credential mismatch, security requirement, availability, deadline or budget.

## E2. Assignment evidence — BLOCKER

KAPAPI's selection can be supported by price, completion time, relevant completion
history/career, on-time rate, revision rate and availability. The client may inspect
the rationale as information.

## E3. Backup execution

Alternative resources belong to KAPAPI's internal procurement and recovery process.
The client is not sent back to proposal comparison or supplier search after a failure.

## E4. Approval and assignment have distinct owners — BLOCKER

Before execution-contract approval, the client reviews result, price, completion
time and revision/recovery boundaries. After approval, KAPAPI procures and assigns
execution. A client approval must never identify the worker to be selected.

## E5. No fake scientific certainty

Internal routing scores are prototype decision aids, not objective truth.

---

# F. Execution / result

## F1. Workroom

Status/file/timeline first, not chat-first.

## F2. Observable state only — BLOCKER

No fake human-work progress percentage unless genuinely measurable.

## F3. Delivery proof

Show delivered files, timestamp, deadline comparison and objective checks actually performed.

## F4. Revision boundary

Revision is tied to agreed scope/acceptance criteria.

## F5. Completion tone

No confetti, trophy, experience points, level-up or exaggerated celebration.

---

# G. Outcome / execution layer

## G1. Evolution is understandable

```text
completed work
→ data
→ trust
→ recommendation
→ routing/recovery
→ repeat capacity
→ execution layer
```

## G2. Resource-agnostic execution

KAPAPI may internally use human workers, AI, deterministic automation, specialist
partners and hybrid / multi-worker flows where supported. The client-facing unit
remains the contracted result; unsupported automation is not presented as live capability.

## G3. Current vs future boundary — BLOCKER

No universal SLA/guaranteed-result claim without evidence.

---

# H. Category strategy

## H1. Architecture/CAD is a proof case — BLOCKER

CAD may be a detailed founder-domain example, but not the hero/category identity.

## H2. Broader early work appears

Examples include ordinary office/support and other digital production work.

## H3. No “everything works today” overclaim

The vision can be broad while current execution remains category-specific.

---

# I. Visual design

## I1. Light-first public experience — BLOCKER

Public default remains white/off-white with graphite/black typography and restrained state color.

## I2. Dark is contextual

Dark operational moments may exist, but do not turn the whole product into a developer console.

## I3. No generic template smell — BLOCKER

Reject generic dashboards, AI startup templates, crypto landing pages, rounded-card walls and black dashboard collages.

## I4. Operational metadata only — BLOCKER

Allowed when meaningful: task ID, price, completion time, proposal count, deadline, urgent status, similar-work count, on-time rate, revision rate and real work states.

Reject fictional progression, game vocabulary and decorative pseudo-lore.

---

# J. Responsive / accessibility / performance

- desktop/mobile have no horizontal overflow or unreadable transaction states
- touch targets are comfortable
- core controls are keyboard-operable, labeled and visibly focusable
- reduced-motion remains understandable
- media does not block primary rendering or cause damaging layout shift

---

# K. Claim / legal hygiene

Prototype must not imply absent payment custody/escrow, universal auto-routing, universal completion/SLA guarantee, tax automation or subjective AI quality guarantee.

Security/NDA language must match implementation. Regulated professional judgment must remain gated.

---

# L. Automated / rendered QA

Update automated invariants so current build fails if:

- special/game terminology appears in user-facing copy
- decorative level/experience systems appear
- price + completion time is absent
- execution-contract approval or any of its five required terms is absent
- the assignment arrives with no visible criteria
- the 발주자 surface offers a control that picks a worker
- CAD becomes hero identity
- work board becomes storefront-first
- future execution layer is presented as current universal capability

Run build/lint/typecheck/tests and screenshot desktop/mobile/reduced-motion states when tooling is available.

---

# M. Final founder-review question

A reviewer should naturally say:

> **“발주자는 업무를 입력하고 결과물·가격·완료시간·수정·복구 조건이 적힌 실행 계약을 승인한다. 카파피가 내부에서 작업자·AI·자동화를 조합해 수행과 검수·복구를 맡고, 발주자는 도착한 결과를 수락하거나 수정을 요청한다. 실제 완료 데이터를 쌓아 더 정확한 견적과 실행으로 확장하는 제품이구나.”**
