# KAPAPI Prototype v2 QA Checklist

Status: **current release/review gate for Prototype v2**  
Updated: **2026-09-03**

A **BLOCKER** failure means the current prototype is not ready for founder review/demo.

Product authority: D-032 + current `PRODUCT.md`, `ROADMAP.md`, `PROTOTYPE_SPEC.md`.

---

# A. Product clarity

## A1. Three-second test — BLOCKER

A first-time Korean visitor understands:

- this is a place to submit bounded online work;
- the main GM action is to describe/attach the work;
- there is also a clear `작업 찾기` path for people who want to perform work.

Fail if the first impression is only:

- freelancer directory
- seller storefront catalog
- generic job board
- game launcher
- AI dashboard
- developer console
- architecture/CAD-only service

## A2. Task-first identity — BLOCKER

The product makes clear that work/QUESTs exist first.

PLAYERs can browse real open work without first creating a service storefront.

## A3. Plain language before world terms — BLOCKER

A visitor does not need to understand GM / PLAYER / QUEST / BID / LEVEL / EXP / TIME ATTACK before knowing what to do.

## A4. PRICE × DELIVERY — BLOCKER

Every BID requires:

- PRICE
- committed DELIVERY TIME

Delivery means elapsed time from confirmation/assignment to submission, not estimated labor hours.

## A5. Recommendation before assignment — BLOCKER

Current preferred prototype flow is:

```text
BIDs
→ eligibility/ranking
→ KAPAPI recommendation
→ GM confirmation
→ ASSIGNED
```

Fail if:

- a PLAYER is silently assigned before GM confirmation;
- recommendation and assignment are visually the same state;
- the product claims universal automatic routing already exists.

## A6. Decision burden is still reduced — BLOCKER

The GM does not face an overwhelming freelancer-shopping wall.

The default recommendation surface provides:

- one clear recommended candidate
- short evidence/rationale
- primary `이 작업자로 진행`
- secondary access to alternatives

## A7. Result loop — BLOCKER

The GM can:

- inspect delivered result/files
- accept / complete
- request revision within scope

GM remains the final result judge in the current prototype.

## A8. Future routing is framed honestly — BLOCKER

The product may show:

`transactions → trust → recommendation → routing/recovery → Outcome Layer`

but must not present later universal routing/SLA behavior as current production capability.

---

# B. Founder-origin / supply side

## B1. `작업 찾기` exists — BLOCKER

PLAYERs have a real route to open QUESTs.

## B2. Board is usable — BLOCKER

The board exposes enough information to judge fit:

- title
- category
- compensation/range where applicable
- deadline
- TIME ATTACK where real
- brief scope
- eligibility
- BID count/status

## B3. No storefront prerequisite — BLOCKER

A PLAYER can reach a BID opportunity without building a seller shop, audience or long service listing first.

## B4. One universal identity — BLOCKER

A user may be GM in one QUEST and PLAYER/BIDDER in another.

No permanent buyer/seller account fork is required.

---

# C. First viewport / hero

## C1. One dominant GM action — BLOCKER

The task-entry surface dominates above the fold.

## C2. Current-stage hero copy — BLOCKER

Hero semantics match the current stage, e.g.:

> 맡길 일을 적어주세요.  
> 카파피가 작업 조건을 정리하고 맞는 제안을 추천합니다.

Fail if hero promises universal automatic assignment/result delivery as already solved.

## C3. Category neutrality — BLOCKER

Examples as a set span multiple kinds of online work. CAD is not the master category.

## C4. PLAYER entry is visible but secondary

`작업 찾기` is discoverable without competing with the GM primary action.

## C5. Hero media supports the action

If video is enabled:

- task input renders independently of video download;
- poster/fallback exists;
- no authoritative garbled/generated product UI remains;
- desktop compositing/cut is visually credible;
- mobile crop/cut remains understandable;
- reduced-motion fallback remains useful.

## C6. Hero choreography — BLOCKER

Current product states preserve:

```text
QUEST CREATED
→ BIDS RECEIVED
→ ELIGIBILITY CHECK
→ RECOMMENDATION READY
→ GM CONFIRMED
→ RESULT READY
```

Do not skip recommendation/confirmation semantics.

---

# D. QUEST creation / SOW

## D1. Scope confirmation — BLOCKER

A rough request can become a structured QUEST with appropriate fields such as:

- inputs/files
- scope
- deliverables
- output format
- deadline
- acceptance criteria
- revision boundary
- budget/commercial boundary
- confidentiality/security
- missing information

## D2. Honest submit confirmation — BLOCKER

After posting, copy says proposals will arrive and KAPAPI will recommend based on conditions/history.

Fail if it says the GM can disappear until the result because KAPAPI already universally auto-routes.

## D3. AI claim hygiene

AI may assist scoping/fit/objective checks.

Do not claim authoritative final price setting, subjective final quality judgment or magical sole selection.

---

# E. Recommendation / confirmation

## E1. Eligibility filtering

Ineligible candidates can be visibly excluded for real reasons such as:

- skill/credential mismatch
- security requirement
- availability
- deadline
- budget

## E2. Recommendation evidence — BLOCKER

Recommendation can be supported by observable evidence such as:

- PRICE
- DELIVERY
- relevant completion history/career
- on-time rate
- revision rate
- availability

## E3. Alternatives

The GM can inspect alternatives without being forced to compare every BID by default.

## E4. Confirmation creates assignment — BLOCKER

Before confirmation: recommended, not assigned.

After confirmation: assigned/work state begins.

## E5. No fake scientific certainty

A routing/recommendation score is a prototype decision aid, not presented as objective truth.

---

# F. Execution / result

## F1. Workroom

Status/file/timeline first, not chat-first.

## F2. Observable state only — BLOCKER

No fake human-work progress percentage such as `73% complete` unless genuinely measurable.

## F3. Delivery proof

Result surface can show:

- delivered files
- timestamp
- deadline comparison
- objective checks actually performed

## F4. Revision boundary

Revision is tied to agreed scope/acceptance criteria, not open-ended dissatisfaction.

## F5. Completion tone

No confetti/trophy/exaggerated celebration is required.

---

# G. Outcome Layer / long-term story

## G1. Evolution is understandable

The page can communicate:

```text
completed QUESTs
→ data
→ trust
→ recommendation
→ routing/recovery
→ repeat capacity
→ Outcome Layer
```

## G2. Resource-agnostic execution

Future execution may include:

- human PLAYER
- AI
- deterministic automation
- specialist partner
- hybrid / multi-PLAYER

## G3. Current vs future boundary — BLOCKER

The future direction is visually/textually distinguished from current capability.

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

Reject if it resembles a stock:

- generic shadcn/Tailwind dashboard
- AI startup template
- crypto landing
- rounded-card wall
- black dashboard collage

## I4. Game energy is restrained

Allowed when meaningful:

- QUEST IDs
- TIME ATTACK
- LEVEL / EXP
- QUEST COMPLETE

Rejected:

- fantasy art
- coins/swords
- loot rarity
- gamer RGB
- game-launcher composition

## I5. Visual-first communication

Major sections should be understandable through product artifacts/motion before explanatory prose.

---

# J. Responsive / accessibility / performance

## J1. Desktop and mobile — BLOCKER

No horizontal overflow, broken stacking or unreadable transaction state in tested target viewports.

## J2. Touch targets

Interactive mobile controls are comfortably tappable.

## J3. Keyboard / focus / labels — BLOCKER

Core inputs/buttons/links are keyboard-operable, labeled and visibly focusable.

## J4. Reduced motion

The product remains understandable with motion disabled/reduced.

## J5. Media performance

Hero media does not block primary text/input rendering or cause damaging layout shift.

---

# K. Claim / legal hygiene

## K1. Prototype disclaimer — BLOCKER

The prototype does not imply current production availability of absent capabilities such as:

- payment custody/escrow
- universal auto-routing
- universal completion/SLA guarantee
- tax automation
- subjective AI quality guarantee

## K2. Security language

Security/NDA is treated seriously where relevant, without claiming protections not actually implemented.

## K3. Regulated work

Do not imply unqualified PLAYERs or AI can perform regulated professional judgment.

---

# L. Automated / rendered QA

## L1. Behavioral harness — BLOCKER

Current `scripts/loop.mjs` passes against the build being reviewed.

Its D-032 invariants include recommendation-before-assignment and GM confirmation.

## L2. Screenshot audit

Run current route screenshots for desktop/mobile when browser tooling is available.

## L3. Hero timeline audit

Capture current hero beats, including recommendation and result.

## L4. Live Preview verification

If a Vercel Preview is used for review, verify the actual latest branch head rather than relying on historical `d003027` screenshots/QA.

`PROTOTYPE_V2_PREVIEW_QA.md` is historical until replaced by fresh current-head evidence.

---

# M. Final founder-review question

A reviewer should be able to say:

> **“카파피는 일이 먼저 올라오는 시장에서 시작하고, 작업자들이 가격과 완료시간을 제안하면 카파피가 추천해줘서 쉽게 확정할 수 있다. 이 거래 데이터를 쌓아 나중에는 배정과 복구를 더 많이 맡고 결국 일을 넣으면 결과가 돌아오는 시스템으로 가려는 거구나.”**

If that is not the natural description after the demo, the prototype is not aligned yet.
