# KAPAPI Prototype v1 — TASK QUEUE

Status: **implementation queue**  
Updated: **2026-09-02**  
Target implementation branch: `feat/prototype-v1`

Rules:

- Start from the latest `docs/initial-product-design` state.
- Do not implement directly on `main`.
- Do not merge to `main` automatically.
- Product behavior follows latest `docs/DECISIONS.md` + `docs/PRODUCT.md` + `docs/PROTOTYPE_SPEC.md`.
- Default GM flow is **hands-off auto-routing** after a valid QUEST is submitted.
- Use `docs/QA_CHECKLIST.md` as the release gate.
- The final hero MP4 is a pending external asset. Do not block implementation waiting for it.

Status values:

`OPEN` / `IN_PROGRESS` / `BLOCKED` / `DONE`

---

# P0 — Canon / implementation baseline

## KAP-000 — Canon preflight

**Status:** OPEN  
**Priority:** P0

Read all implementation-authority docs in `CLAUDE_HANDOFF.md` order.

Output before coding:

- concise implementation plan,
- assumptions that are mock-only,
- any actual contradictions that remain after applying supersession rules.

Acceptance:

- no default GM BID-selection flow survives,
- light-first public rule acknowledged,
- hero media dependency understood as non-blocking.

---

## KAP-001 — Create implementation branch

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-000

Create/use:

`feat/prototype-v1`

from the latest approved documentation state.

Acceptance:

- `main` untouched,
- implementation includes current docs,
- clean starting status.

---

## KAP-002 — Technical scaffold

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-001

Establish the application stack.

Preferred direction:

- Next.js App Router
- TypeScript
- disciplined design tokens
- Motion for state/layout motion
- Number Flow only where useful
- typed deterministic mock data

Tailwind is acceptable but must not define the visual identity.

Acceptance:

- dev server works,
- production build works,
- baseline lint/typecheck configured,
- no default starter/demo UI remains.

---

# P0 — Design foundation

## KAP-010 — Design token foundation

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-002

Implement KAPAPI-native tokens for:

- paper/white/ink/graphite neutrals
- hairline borders
- one signal accent family
- semantic state colors
- spacing rhythm
- typography roles
- restrained radii
- focus state
- motion timing/eases from `KAPAPI_MOTION.md`

Acceptance:

- light mode is public default,
- dark operational surfaces are component/state-level, not global skin,
- no recognizable stock component-library theme.

---

## KAP-011 — Typography and page frame

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-010

Implement:

- display/editorial role
- product heading role
- Korean/English body role
- restrained mono/HUD role
- desktop page frame/grid
- mobile frame

Acceptance:

- Korean text remains readable at all relevant sizes,
- no novelty game font,
- no tiny gray marketing copy.

---

## KAP-012 — Core primitive components

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-010

Create KAPAPI-native primitives as needed:

- Button
- Text/Input surface
- File attachment
- Status chip
- Hairline metadata row
- QUEST card
- PLAYER/trust compact row
- Timeline state
- Result/file object
- Modal/object-detail primitive

Acceptance:

- custom visual language,
- keyboard/focus behavior works,
- no excessive rounded-card aesthetic.

---

# P0 — Hero / first touch

## KAP-020 — Hero structure exploration

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-011

Before final hero coding, propose **three text-only hero information structures**.

Score each 1–10 on:

- three-second understanding
- GM primary-action clarity
- result-first differentiation
- premium visual potential
- mobile adaptability

Choose the strongest structure independently.

Do not use a generated full hero screenshot as a layout template.

Acceptance:

- one clear winner selected with short reasoning,
- task-entry surface remains protagonist.

---

## KAP-021 — Landing hero implementation

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-020, KAP-012

Implement light-first hero.

Required:

- KAPAPI identity
- plain-language headline
- task-entry surface
- attach-file action
- `일 맡기기 →`
- simple process line
- secondary `일하러 오셨나요? → 일 찾기`
- media/product proof slot

Acceptance:

- passes three-second test,
- no KAPAPI vocabulary learning required before action,
- no mini-dashboard wall,
- media cannot visually dominate the input.

---

## KAP-022 — Hero product-movie component

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-021

Implement the component contract from `docs/HERO_MEDIA.md`.

Support:

- video source config
- poster
- muted/playsInline
- responsive crop
- reduced-motion/static fallback
- mobile fallback
- pending-asset state

Do not wait for final MP4.

Acceptance:

- missing video does not break hero,
- no layout shift,
- product copy/input renders before heavy media.

---

## KAP-023 — Hero real-UI transaction sequence

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-022, KAP-040

Create real HTML/CSS product motion for the movie middle:

```text
WORK SUBMITTED
→ BIDS ARRIVE
→ KAPAPI ROUTES
→ PLAYER ASSIGNED
→ WORK RUNS
→ RESULT READY
```

Use actual KAPAPI components/data rather than AI-video-generated UI.

Acceptance:

- GM never clicks a winning BID,
- state readable at a glance,
- routing evidence is data-backed,
- sequence has a static/reduced-motion equivalent.

---

# P0 — GM submit / scope

## KAP-030 — GM task-entry state

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-021

Build task entry with:

- free-text request
- file attachment mock
- example placeholders across categories
- submit transition

Acceptance:

- works keyboard/mobile,
- clear input state,
- category-neutral hero.

---

## KAP-031 — AI-assisted scope preview

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-030

Implement deterministic/mock structured scope:

- summary
- source files
- exact scope
- deliverables
- deadline
- output format
- objective acceptance points
- revision boundary
- missing info
- NDA/confidentiality indicator
- budget boundary if used

Primary action:

`이대로 맡기기`

Acceptance:

- no authoritative AI final price,
- no subjective AI quality claim,
- value is scope clarity.

---

## KAP-032 — Hands-off submission confirmation

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-031

After valid submission, show the product shift clearly.

Copy direction:

> **맡겼습니다. 이제 하시던 일 하세요.**

Use subtle approved sapphire confirmation feedback where appropriate.

Acceptance:

- visitor understands routine sourcing is now KAPAPI's work,
- no next-step button saying `작업자 선택하기`.

---

# P0 — Marketplace / routing engine demo

## KAP-040 — Typed demo data model

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-002

Create typed fixtures for:

- QUEST
- GM
- PLAYER
- BID
- routing evidence
- status events
- delivery/result
- review/revision

State enum must cover spec states.

Acceptance:

- deterministic/replayable,
- no lorem ipsum as core demo data,
- architecture fixture plus at least two category-neutral/general examples.

---

## KAP-041 — Routing policy fixture

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-040

Implement a transparent deterministic prototype routing function/model using fields such as:

- eligibility
- deadline feasibility
- budget feasibility
- relevant completion history
- on-time
- revision/failure
- availability
- PRICE
- DELIVERY
- task fit

Output:

- selected PLAYER
- routing rationale array
- optional display score

Acceptance:

- not lowest-price-only,
- not shortest-time-only,
- not opaque LLM-only,
- same fixture produces same route.

---

## KAP-042 — BID arrival system

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-040, KAP-012

Implement `BID_ARRIVAL` motion/state:

- incremental arrival
- PRICE + DELIVERY resolution
- trust evidence
- layout reflow

Acceptance:

- no bounce/pop theatre,
- existing BIDs remain legible,
- reduced-motion path works.

---

## KAP-043 — KAPAPI auto-routing decision

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-041, KAP-042

Implement the modern replacement for legacy `BID_DECISION`.

Sequence:

```text
BIDs settle
→ eligibility/routing evaluation
→ selected PLAYER state locks
→ rationale resolves
→ PLAYER ASSIGNED
```

Acceptance:

- system performs selection,
- GM selection control absent by default,
- non-selected candidates may remain inspectable without asking GM to decide.

---

## KAP-044 — GM orchestration status surface

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-043

Build GM-facing status:

- BIDs received count
- routing state
- assigned PLAYER
- why assigned
- deadline
- current stage
- latest event

Acceptance:

- enough transparency to trust the route,
- no vendor-management burden recreated.

---

# P0 — PLAYER flow

## KAP-050 — QUEST Board

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-040, KAP-012

Build PLAYER-side QUEST board.

Include:

- clear titles
- category
- deadline
- TIME ATTACK where valid
- deliverable
- BID count
- eligibility metadata
- status

Acceptance:

- scannable,
- not decorative fake marketplace,
- mobile usable.

---

## KAP-051 — QUEST Detail

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-050

Show:

- inputs/files
- exact scope
- deliverables
- deadline
- acceptance criteria
- NDA/security
- eligibility

Acceptance:

- a professional can decide whether to BID quickly.

---

## KAP-052 — PRICE × DELIVERY BID form

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-051

Required fields:

- price
- committed elapsed delivery time

Optional:

- short note

Acceptance:

- no long proposal letter,
- price and delivery are visually paired,
- validation works.

---

# P0 — Trust / profile

## KAP-060 — PLAYER profile

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-040, KAP-012

Hierarchy:

1. relevant career
2. task-specific history
3. on-time
4. revision rate
5. completion count
6. rating
7. dispute/failure signal where fixture supports it
8. LEVEL / EXP

Acceptance:

- professional proof dominates game layer,
- profile answers explanation/execution risk.

---

# P0 — Workroom / result

## KAP-070 — Workroom timeline

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-044

Build operational status/file timeline.

Use observable stages, timestamps and events.

Acceptance:

- no fake progress percentages,
- chat is not the primary information architecture,
- blocked/revision state can be represented.

---

## KAP-071 — Delivery / result surface

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-070

Show:

- delivered file
- delivery timestamp
- deadline relation
- objective preflight only if actually represented by fixture
- `결과 확인 / 합격`
- `수정 요청`

Acceptance:

- result dominates,
- no AI subjective-quality claim.

---

## KAP-072 — Revision loop

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-071

Implement a thin revision request tied to agreed scope/criteria.

Acceptance:

- revision can return to work state,
- acceptance can complete QUEST.

---

## KAP-073 — QUEST completion

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-071

Implement restrained completion state.

May show:

- file delivered
- time proof
- objective checks
- completion history/EXP update

Acceptance:

- no confetti/coins/trophy animation,
- interface becomes still after resolution.

---

# P0 — Landing narrative proof

## KAP-080 — Flagship CAD case study

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-043, KAP-060

Create below-fold real-feeling QUEST #001 demonstrating:

- hand-drawn/current-condition material → DWG/PDF result
- PRICE × DELIVERY bids
- relevant career/trust
- KAPAPI routing
- result

Acceptance:

- clearly labeled as example/wedge,
- does not infect hero with CAD-only positioning.

---

## KAP-081 — TIME ATTACK section/state

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-050

Demonstrate urgency through real countdown/time semantics.

Acceptance:

- no screaming red UI,
- no constant pulsing card,
- liquidity/guarantee not overstated.

---

## KAP-082 — Autopilot direction section

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-044

Show complexity collapsing behind KAPAPI:

```text
FILE + DEADLINE
→ KAPAPI
→ RESULT
```

Acceptance:

- direction is compelling,
- clearly not a claim that all future functions are production-ready today.

---

# P1 — Motion polish

## KAP-090 — Motion token implementation

**Status:** OPEN  
**Priority:** P1  
**Depends on:** KAP-010

Implement canonical motion durations/eases from `KAPAPI_MOTION.md`.

Acceptance:

- reusable tokens,
- reduced-motion support.

---

## KAP-091 — Object continuity / morph polish

**Status:** OPEN  
**Priority:** P1  
**Depends on:** KAP-050, KAP-060

Use shared-layout/object continuity where it improves understanding.

Acceptance:

- no visible spring bounce,
- keyboard/focus behavior correct.

---

## KAP-092 — Completion / routing micro-polish

**Status:** OPEN  
**Priority:** P1  
**Depends on:** KAP-043, KAP-073

Polish:

- selected routing state
- number changes
- status transitions
- completion rows

Acceptance:

- motion supports hierarchy,
- no decorative overload.

---

# P0 — Responsive / accessibility

## KAP-100 — Mobile pass

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-021, KAP-050, KAP-071

Audit all required surfaces on mobile.

Acceptance follows `QA_CHECKLIST.md` mobile rules.

---

## KAP-101 — Keyboard / focus / semantics pass

**Status:** OPEN  
**Priority:** P0  
**Depends on:** core surface completion

Acceptance:

- all primary actions keyboard-operable,
- visible focus,
- semantic landmarks/forms/status.

---

## KAP-102 — Reduced motion pass

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-090

Acceptance:

- no lost content,
- hero remains understandable,
- routing/progress still clear.

---

# P0 — Performance / final QA

## KAP-110 — Hero/media performance pass

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-022

Audit:

- initial render not blocked by video
- poster/fallback
- layout stability
- mobile loading
- asset sizing

---

## KAP-111 — Full QA checklist audit

**Status:** OPEN  
**Priority:** P0  
**Depends on:** all P0 implementation tasks

Run `docs/QA_CHECKLIST.md`.

Output a report with:

- BLOCKER PASS/FAIL
- known compromises
- commands/tests run
- remaining media dependency

---

## KAP-112 — Build / lint / typecheck / tests

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-111

Run all repository checks.

Fix failures within prototype scope.

Acceptance:

- production build passes,
- typecheck passes,
- configured lint/tests pass or explicit justified exception documented.

---

## KAP-113 — 60-second demo rehearsal

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-112

Exercise:

```text
Landing
→ work input
→ scope
→ submit
→ PLAYER BID
→ KAPAPI routing
→ work/result
→ accept/revision
```

Acceptance:

- repeatable without live waiting,
- service understandable without verbal rescue.

---

## KAP-114 — Final review package

**Status:** OPEN  
**Priority:** P0  
**Depends on:** KAP-113

Prepare for founder review:

- summary of implemented scope
- branch/commit
- QA audit
- screenshots if available
- exact remaining asset needs
- no automatic main merge

Stop for review.
