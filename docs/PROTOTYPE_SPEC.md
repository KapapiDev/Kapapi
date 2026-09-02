# KAPAPI Prototype v1 Specification

Status: **canonical implementation scope for the public Prototype v1**  
Updated: **2026-09-02**

This document translates the current product decisions into a buildable prototype. It does not replace the broader product roadmap.

---

# 1. Prototype objective

Build the smallest public product that makes KAPAPI's differentiated transaction obvious, credible and memorable.

The prototype must communicate:

> A GM can submit professional work once, KAPAPI handles routine vendor selection and coordination, and the GM returns mainly to inspect the result.

Default GM flow:

```text
work request
→ scope confirmation
→ 맡기기
→ KAPAPI orchestration
→ result
→ accept / revision request
```

Internal / PLAYER market flow:

```text
QUEST opens
→ qualified PLAYERs BID with PRICE + DELIVERY
→ KAPAPI evaluates eligibility + market terms + trust/performance + task fit
→ KAPAPI assigns a PLAYER
→ execution
→ delivery
```

This is **Auto-Routed Marketplace / Autopilot-lite**, not full outcome-guaranteed Autopilot.

---

# 2. Prototype success test

A first-time viewer should be able to answer these questions after roughly 30–60 seconds:

1. What is KAPAPI?
2. What do I do first if I have work to hand off?
3. What do PLAYERs compete on?
4. Who normally chooses the PLAYER?
5. What does the GM do when the work comes back?
6. Why is this meaningfully different from browsing freelancers on a conventional marketplace?

Correct short answer:

> “I submit the work. Experts compete on price and delivery. KAPAPI chooses/routes the best fit, the work gets done, and I inspect the result.”

---

# 3. Audience and roles

## GM

The GM is a person or small organization with professional work that exceeds current capacity, skill or deadline availability.

Prototype GM jobs:

- describe desired result,
- attach input file(s),
- confirm scope/deadline/budget boundary,
- submit,
- optionally inspect status,
- inspect result,
- accept or request revision.

The GM should **not** be required to browse PLAYER profiles or compare routine BIDs after submission.

## PLAYER

The PLAYER is an independent professional who chooses whether to participate and sets:

- PRICE,
- committed DELIVERY TIME,
- short note if needed.

Prototype PLAYER jobs:

- discover an eligible QUEST,
- understand the deliverable/deadline,
- BID quickly,
- see assignment status,
- submit result,
- build visible trust history.

Roles are transactional, not permanent account classes.

---

# 4. First-touch public UX

## 4.1 Three-second rule

The first viewport must make this thought immediate:

> **“여기에 내가 맡길 일을 적으면 되는구나.”**

The visitor must not need to decode `QUEST`, `BID`, `PLAYER`, `LEVEL`, `EXP`, `TIME ATTACK`, routing logic or dashboards before acting.

## 4.2 Above-the-fold hierarchy

Required hierarchy:

1. KAPAPI identity
2. plain-language GM promise
3. large task-entry surface
4. file attachment affordance
5. primary CTA `일 맡기기`
6. very short process reassurance
7. secondary PLAYER entry
8. hero media/product proof if it does not compete with the action

Recommended copy direction:

- headline: **할 일을 던져주세요.**
- supporting promise: **전문가들이 가격과 완료시간을 제안하고, 카파피가 가장 적합한 작업자를 연결해 결과를 가져옵니다.**
- input examples may rotate across categories, but the master hero must remain category-neutral.
- primary CTA: **일 맡기기 →**
- secondary: **일하러 오셨나요? → 일 찾기**

Short process line:

```text
일 등록 → KAPAPI 자동 배정 → 작업 → 결과 확인
```

Do not show a BID comparison wall above the fold.

---

# 5. Theme architecture

## Public default

**Light-first.**

- white / off-white background
- graphite/black type
- restrained hairlines
- generous whitespace
- one signal accent family
- small radii and compact controls

## Dark contextual moments

Near-black/dark is allowed where operational state benefits from it:

- TIME ATTACK module
- routing / active work state
- Workroom / operational timeline
- selected brand contrast section

Do not make the whole product a dark developer console.

---

# 6. Required screens / surfaces

## S01 — Landing / GM entry

Purpose: understand KAPAPI and submit work.

Required:

- light-first hero
- task input
- attach-file control
- `일 맡기기`
- secondary PLAYER link
- hero media slot documented in `HERO_MEDIA.md`
- below-fold transaction explanation
- below-fold flagship case study
- trust/product thesis section
- Autopilot direction section clearly framed as direction, not current guarantee

No dense dashboard in hero.

## S02 — Scope confirmation / QUEST draft

Purpose: demonstrate AI-assisted delegation-friction reduction.

Input can begin vague:

```text
“이 손그림 기준으로 현황도 CAD 정리해서 내일 오전까지 주세요.”
```

Prototype output should structure:

- work summary
- source/input files
- deliverables
- deadline
- output format
- objective acceptance points
- revision boundary
- missing information
- optional budget ceiling / commercial constraint
- confidentiality/NDA indicator

AI behavior may be deterministic/mock for the prototype.

Important:

- do not generate authoritative final price,
- do not pretend AI can judge subjective final professional quality,
- make scope clarity the value.

Primary action:

**`이대로 맡기기`**

After submission, show a strong hands-off confirmation such as:

> **맡겼습니다. 이제 하시던 일 하세요.**

## S03 — GM orchestration status

Purpose: show that work continues without GM vendor selection.

State sequence:

```text
QUEST OPEN
→ BIDS ARRIVING
→ ROUTING
→ PLAYER ASSIGNED
→ WORK STARTED
→ FILE DELIVERED
→ RESULT READY
```

The GM may inspect details, but there is no default `Choose this PLAYER` control.

Show compact routing evidence rather than opaque magic:

- qualified BIDs received
- price/delivery range
- relevant career/history
- on-time/revision indicators
- selected/routed result
- short `왜 이 작업자?` rationale

Example rationale:

> “마감 6시간 내 충족, 유사업무 47건, 정시 99%, 수정률 낮음. 예산 범위 내 최고 신뢰도.”

Do not imply that an LLM alone chose the PLAYER.

Optional secondary/debug affordance may expose proposals, but manual selection is not the default GM story.

## S04 — QUEST Board / PLAYER discovery

Purpose: demonstrate supply-side marketplace energy.

Required QUEST metadata:

- plain-language title
- category
- REWARD or expected commercial range if appropriate
- deadline / TIME ATTACK when real
- files/source indicator
- brief scope
- eligibility tags
- BID count
- status

Use KAPAPI vocabulary after ordinary language is clear.

## S05 — QUEST Detail / PLAYER BID

Purpose: demonstrate mandatory PRICE × DELIVERY competition.

PLAYER sees:

- exact deliverable
- deadline
- input files
- acceptance criteria
- confidentiality/NDA
- relevant skills/credentials
- current BID context only to the degree product policy allows

BID form requires:

- PRICE
- committed elapsed DELIVERY TIME
- short relevant note optional

Do not ask for a long Upwork-style cover letter.

Example:

```text
₩100,000 / 18H
₩150,000 / 8H
₩220,000 / 4H
```

## S06 — Routing / internal market proof

This can be a product-proof module rather than a separate navigation destination.

Purpose: make KAPAPI's differentiation visible.

Show:

1. eligibility filtering
2. multiple BIDs arriving
3. PRICE × DELIVERY
4. relevant verified trust data
5. KAPAPI routing decision
6. assignment lock

The routing decision should visually feel inspectable and mechanical, not mystical.

For prototype demo data, use deterministic routing so the same candidate wins reliably.

## S07 — PLAYER Profile

Required trust hierarchy:

1. relevant career
2. task-specific completion history
3. on-time rate
4. revision/rework rate
5. completion count
6. rating
7. dispute/failure signal where appropriate
8. LEVEL / EXP as secondary world layer

A profile must answer:

> “Can this person understand and deliver this kind of work with low explanation burden?”

Do not let decorative LEVEL dominate relevant professional proof.

## S08 — Workroom / progress

Purpose: know what is happening without managing minute by minute.

Not chat-first.

Core:

- QUEST identity
- assigned PLAYER
- deadline
- state timeline
- files
- latest event
- revision state
- security/NDA indicator

Canonical observable states:

```text
ASSIGNED
→ WORK STARTED
→ IN PROGRESS
→ FILE DELIVERED
→ GM REVIEW
→ COMPLETE
```

Support:

- blocked
- revision requested
- late/risk
- cancelled/failed fixture if needed

No fake percentage such as `73% complete` for human work unless measurable.

## S09 — Result / acceptance

Purpose: close the loop.

Result surface prioritizes:

- delivered file(s)
- timestamp / delivery against deadline
- objective preflight checks actually performed
- result preview where feasible
- `결과 확인 / 합격`
- `수정 요청`

Revision request should reference the agreed scope rather than open-ended dissatisfaction.

Completion may then show restrained EXP/history update.

No confetti.

---

# 7. Flagship case study

Architecture/CAD is the first proof case, not the hero identity.

Use below the hero as a concrete end-to-end example.

Suggested case:

```text
QUEST #001
손그림/현황 자료 → 지정 DWG 현황도 정리
Deadline: today / defined time
Deliverables: DWG + PDF
NDA: ON
```

Demonstrate multiple BIDs with price + delivery and trust differences.

Example fixture only:

| PLAYER | PRICE | DELIVERY | Relevant proof | On-time |
| --- | ---: | ---: | --- | ---: |
| A | ₩80,000 | 12H | 유사업무 8건 | 94% |
| B | ₩110,000 | 6H | 유사업무 47건 | 99% |
| C | ₩150,000 | 4H | 유사업무 11건 | 96% |

For a deadline-sensitive fixture, KAPAPI may deterministically route B because it satisfies the deadline with stronger task history/reliability at acceptable cost. Do not teach users that highest price or shortest time always wins.

---

# 8. State model

Prototype state enum should support at least:

```text
DRAFT
SCOPE_READY
OPEN
BIDDING
ROUTING
ASSIGNED
IN_PROGRESS
DELIVERED
REVIEW
REVISION_REQUESTED
COMPLETE
BLOCKED
CANCELLED
```

Demo transitions must be deterministic and replayable.

The implementation may use URL state, local store or mock API abstraction, but do not build production infrastructure merely to simulate the loop.

---

# 9. Routing fixture architecture

The prototype should represent selection as a score/policy assembled from visible evidence.

Conceptual pipeline:

```text
hard eligibility
→ deadline/budget feasibility
→ task relevance
→ verified history
→ reliability
→ PRICE × DELIVERY trade-off
→ assignment
```

Suggested typed fields:

```text
eligibilityPass
credentialMatch
securityMatch
price
committedDeliveryHours
relevantCompletionCount
onTimeRate
revisionRate
rating
availability
semanticTaskFit
routingScore
routingReason[]
```

Do not present `routingScore` as scientific truth. It is a prototype decision-support abstraction.

AI can support semantic task fit and scope interpretation; it should not be depicted as the sole judge.

---

# 10. Hero media behavior

See `docs/HERO_MEDIA.md` for the current footage concept and asset status.

Product rule:

- hero media is supporting proof, not the primary CTA,
- master footage must remain category-neutral,
- real KAPAPI HTML/CSS UI should replace/generated fake UI when the camera reaches the screen,
- no AI-generated readable product UI is authoritative,
- motion should communicate: submit → leave → KAPAPI works → result returns.

On slow/mobile/reduced-data contexts, use a strong poster/static alternative and preserve the product explanation without video.

---

# 11. Landing page below-fold sequence

Recommended narrative order:

1. **Hero:** hand off work
2. **How it works:** one plain-language strip
3. **KAPAPI handles the middle:** routing proof / internal competition
4. **Flagship real QUEST:** CAD case study
5. **Trust:** relevant career + task history + reliability
6. **TIME ATTACK:** urgency as a real state, not a gimmick
7. **Result loop:** accept / revision
8. **Autopilot direction:** complexity collapses behind KAPAPI
9. **PLAYER entry:** professional side-job supply proposition

Avoid repeating the same card layout for every section.

---

# 12. Motion requirements

Follow `KAPAPI_MOTION.md` timings and anti-patterns.

For current auto-routing behavior, interpret legacy motion names as follows:

- `BID_ARRIVAL`: still valid
- legacy `BID_DECISION`: **KAPAPI routing decision** by default, not GM choice
- `QUEST_PROGRESS`: valid, replace `PLAYER SELECTED` semantic source with `KAPAPI ASSIGNED PLAYER`
- `QUEST_COMPLETE`: valid
- `HERO_TRANSACTION`: update semantic sequence to:

```text
WORK SUBMITTED
→ BIDS ARRIVE
→ KAPAPI ROUTES
→ WORK RUNS
→ RESULT READY
```

- `AUTOPILOT_COLLAPSE`: still valid as future-direction narrative, but do not imply unsupported guarantees

Use no visible bounce. No confetti. No generic fade-up site.

---

# 13. Responsive behavior

## Desktop

The hero may use a split composition where the task-entry action owns roughly the stronger share and media/product proof occupies the secondary share.

## Mobile

Priority order:

1. promise
2. task input
3. attach
4. `일 맡기기`
5. simple process line
6. media/poster
7. PLAYER secondary entry

Do not squeeze desktop dashboard compositions into horizontal-scroll mobile cards.

Controls must be touch-safe and readable.

---

# 14. Accessibility

Required:

- semantic headings and landmarks
- keyboard-operable task entry/BID/result controls
- visible focus states
- labeled file controls
- sufficient contrast
- reduced-motion path
- video controls/accessibility behavior appropriate to autoplay-muted hero media
- status not communicated only by color
- no noisy screen-reader countdown announcements

The prototype should remain understandable with motion disabled.

---

# 15. Performance

Public first impression must not be sacrificed for video or animation.

Hero media rules:

- muted/playsInline when autoplay is used
- poster image
- avoid blocking initial text/input rendering on video download
- lazy/conditional media loading where appropriate
- no giant unoptimized background video

Prefer CSS/HTML for product UI motion rather than baking UI into video.

Avoid layout shifts when media loads.

---

# 16. Explicit prototype non-goals

Do not build pre-1R:

- production PG/escrow
- platform-held funds
- tax settlement engine
- production identity verification pipeline
- deep dispute center
- full messaging suite
- broad category marketplace backend
- native apps
- authoritative AI price setting
- subjective AI final quality judgment
- SLA/outcome guarantee
- employee/hourly staffing model
- regulated professional judgment by unverified PLAYERs

Mock these only where needed to explain the product, and label the product state honestly.

---

# 17. Demo script target

A reviewer should be able to demo the core in approximately 60 seconds:

```text
00–08s  Landing: “할 일을 던져주세요.”
08–16s  GM enters task + file
16–24s  scope becomes structured, GM submits
24–34s  PLAYER side BID: price + delivery
34–44s  KAPAPI auto-routing / assignment
44–52s  progress / result ready
52–60s  GM result review → accept or revision
```

The prototype does not need to make the reviewer wait in real time. Demo state transitions may be scripted.

---

# 18. Acceptance summary

Do not approve the prototype if any of these are true:

- first screen looks like a freelancer directory,
- first screen looks like a dark AI/developer dashboard,
- GM must choose among routine BIDs,
- KAPAPI vocabulary obscures the basic action,
- AI appears to subjectively judge final professional quality,
- CAD dominates the hero and makes KAPAPI look architecture-only,
- motion is ornamental rather than state-driven,
- the result/revision loop is missing,
- the product cannot be explained in ordinary Korean after one glance.

Approve when the prototype feels like:

> **A professional-work operating layer where the GM hands off the work and KAPAPI absorbs the messy middle.**
