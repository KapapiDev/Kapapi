# KAPAPI Prototype v1 QA Checklist

Status: **release/review gate for Prototype v1**  
Updated: **2026-09-02**

Use this checklist before declaring the prototype ready for founder review, demo recording or the 2026 모두의 창업 application.

A failure in a **BLOCKER** item means the prototype is not ready.

---

# A. Product clarity

## A1. Three-second test — BLOCKER

A first-time Korean visitor can understand, without explanation:

- this is a place to hand off professional work,
- the main thing to do is describe the work,
- the primary CTA is `일 맡기기`.

Fail if the first impression is:

- freelancer directory,
- job board,
- game launcher,
- AI dashboard,
- developer console,
- architecture/CAD-only service.

## A2. Plain language before KAPAPI vocabulary — BLOCKER

Above the fold, the user does not need to know:

- QUEST
- BID
- PLAYER
- LEVEL / EXP
- TIME ATTACK

before understanding the business.

## A3. Result-first promise — BLOCKER

The page communicates that the GM wants a result, not a profile-browsing experience.

The product can be paraphrased as:

> “일을 맡기면 카파피가 작업자를 연결/배정하고 결과를 가져온다.”

## A4. Auto-routing behavior — BLOCKER

Default GM transaction does **not** require routine BID comparison / PLAYER selection.

Correct:

```text
submit → bids behind the scenes → KAPAPI routes → work → result
```

Incorrect default:

```text
submit → GM compares A/B/C → GM chooses
```

## A5. PLAYER market mechanism — BLOCKER

PLAYER BID includes both:

- PRICE
- committed DELIVERY TIME

The UI does not reduce the market to cheapest-price ranking.

## A6. Final GM role — BLOCKER

The result stage includes a clear acceptance/revision path.

GM remains the final result judge.

---

# B. First viewport / hero

## B1. One primary GM action — BLOCKER

There is one obvious action above the fold: enter/attach work and `일 맡기기`.

## B2. Task-entry dominance — BLOCKER

The task-entry surface is visually stronger than:

- hero video,
- product demo,
- navigation,
- PLAYER entry,
- dashboard proof.

## B3. PLAYER entry is secondary

`일하러 오셨나요? → 일 찾기` exists but does not compete with the GM CTA.

## B4. Hero is not a mini dashboard — BLOCKER

Do not show dense BID cards, trust charts, TIME ATTACK countdown, LEVEL, Autopilot diagram and multiple widgets all at once above the fold.

## B5. Category neutrality — BLOCKER

Hero master is not CAD-specific or tied to one profession.

## B6. Media integration

If hero video is enabled:

- video supports the story rather than replacing the task entry,
- no visible AI watermark,
- no authoritative garbled/generated KAPAPI UI remains,
- poster/fallback exists,
- mobile crop works,
- video does not cause layout shift.

## B7. Sapphire submission feedback

If used, the approved blue confirmation effect is:

- brief,
- localized,
- subtle,
- accessible,
- not neon/cyberpunk.

---

# C. Visual design

## C1. Light-first public experience — BLOCKER

Landing and core marketplace surfaces default to:

- white/off-white,
- graphite/black typography,
- restrained borders,
- high readability.

Fail if the public default reads as a dark developer product.

## C2. Dark surfaces are contextual

Dark treatment is used deliberately for operational moments, not as the global skin.

## C3. Premium through discipline

Quality comes from:

- typography,
- grid,
- spacing,
- hierarchy,
- detail,
- motion restraint,

not decorative effects.

## C4. No generic template smell — BLOCKER

Reject if it resembles a stock:

- shadcn dashboard,
- Tailwind SaaS kit,
- crypto landing,
- AI startup template,
- rounded-card wall.

## C5. Game energy is controlled

Allowed:

- `QUEST #001`
- `LV.12`
- `+240 EXP`
- TIME ATTACK
- compact HUD metadata

Rejected:

- swords
- coins
- fantasy badges
- pixel RPG
- loot/reward visuals
- gamer RGB

## C6. Typography

- Korean body copy is comfortably readable.
- Hero/display text is controlled, not giant for spectacle.
- Mono/HUD typography is seasoning, not the default body face.
- No tiny low-contrast startup copy.

## C7. Radii / shadows / borders

- radii are restrained,
- shadows are subtle or absent where hairlines suffice,
- cards do not float unnecessarily,
- surfaces feel engineered rather than bubbly.

---

# D. Core screens

## D1. Scope confirmation — BLOCKER

Prototype can show a vague request becoming a structured SOW/QUEST with:

- inputs
- scope
- deliverables
- deadline
- output format
- acceptance criteria
- revision boundary
- missing info
- confidentiality indicator where applicable

## D2. Hands-off confirmation — BLOCKER

After submit, UI clearly signals the GM can stop managing routine sourcing.

Example direction:

> `맡겼습니다. 이제 하시던 일 하세요.`

## D3. Orchestration status — BLOCKER

GM can see meaningful state without being asked to pick a worker.

## D4. Routing evidence

The auto-routing state can explain why a PLAYER was assigned using observable evidence.

It does not present “AI chose them” as sufficient explanation.

## D5. QUEST Board

PLAYER-side board is scannable and useful, not a decorative fake list.

## D6. BID form — BLOCKER

PRICE and DELIVERY are required and immediately understandable.

No long cover-letter burden.

## D7. PLAYER profile — BLOCKER

Relevant career/task history is more prominent than decorative LEVEL.

## D8. Workroom

Workroom is status/file/timeline first, not chat-first.

## D9. Result surface — BLOCKER

Result file/proof dominates. Acceptance and revision are clear.

## D10. Flagship CAD proof

A concrete architecture/CAD QUEST exists below hero as a case study/testbed.

It is framed as an initial example, not KAPAPI's entire market.

---

# E. Motion

## E1. State-driven motion — BLOCKER

Every noticeable animation explains state, continuity or hierarchy.

Remove motion that exists only because a section scrolled into view.

## E2. No bounce / spectacle

No:

- visible elastic bounce,
- card launching,
- 3D tilt theatre,
- glow explosions,
- confetti,
- coins,
- fireworks.

## E3. BID arrival

New BIDs insert/reflow without covering existing information.

## E4. Routing decision — BLOCKER

Legacy `BID_DECISION` behavior is implemented as KAPAPI routing/assignment by default.

The GM does not click the winner.

## E5. Progress semantics — BLOCKER

No fake human-work percentage (`73%`) unless genuinely measurable.

Use observable states/timestamps.

## E6. Completion

Completion resolves cleanly and then becomes still.

## E7. Reduced motion — BLOCKER

With reduced motion enabled:

- content remains complete,
- state remains understandable,
- hero does not become empty,
- autoplay narrative has a coherent fallback.

---

# F. Routing / data semantics

## F1. Deterministic demo — BLOCKER

Prototype demo yields repeatable routing/result states.

No random candidate winner that changes during a review.

## F2. Evidence dimensions

Routing fixture includes enough of:

- hard eligibility
- deadline feasibility
- budget feasibility
- relevant task history
- career
- on-time rate
- revision/failure signal
- availability
- PRICE
- DELIVERY
- task fit

## F3. No fake scientific certainty

A routing score is not presented as objective truth or a guaranteed prediction.

## F4. Manual selection is not primary

If manual proposal inspection exists for demo/debug, it is secondary/fallback and does not rewrite the product story.

---

# G. Legal / claim hygiene

## G1. No unsupported payment claim — BLOCKER

Do not imply live escrow/safe-payment exists if it is not implemented.

## G2. No SLA guarantee — BLOCKER

Do not promise universal guaranteed completion/outcome in Prototype v1.

## G3. AI claim discipline — BLOCKER

Do not claim AI is:

- authoritative price setter,
- subjective final quality judge,
- regulated professional substitute.

## G4. Architecture boundary

Do not imply unverified/unlicensed PLAYERs provide regulated statutory architectural judgment.

## G5. Result-based independence

Copy/UI does not imply employee-like shifts, attendance or controlled hours.

---

# H. Responsive / mobile

## H1. Mobile hero — BLOCKER

On mobile, priority remains:

```text
promise → input → attach → CTA → process line → media → PLAYER entry
```

## H2. No desktop squeeze

Tables and desktop comparison layouts transform appropriately rather than becoming unreadable horizontal miniatures.

## H3. Touch targets

Primary controls are comfortably tappable.

## H4. Safe viewport

No clipped CTA/input/video on common mobile viewport heights.

---

# I. Accessibility

## I1. Keyboard — BLOCKER

All primary interactions work by keyboard.

## I2. Focus — BLOCKER

Visible focus treatment exists on interactive elements.

## I3. Semantics

Headings, forms, buttons, status and landmarks are semantically meaningful.

## I4. File upload

File controls have accessible names and clear state.

## I5. Contrast — BLOCKER

Text and controls meet reasonable contrast expectations.

## I6. State beyond color

Selected/active/error/complete states are not communicated by color alone.

## I7. Countdown accessibility

TIME ATTACK does not spam assistive technology every second.

---

# J. Performance / implementation quality

## J1. Build — BLOCKER

Repository build passes.

## J2. Type safety — BLOCKER

Type checking passes where configured.

## J3. Lint/tests

Configured lint/tests pass or any known exceptions are documented.

## J4. First paint — BLOCKER

Hero copy/input renders without waiting for heavy video/animation assets.

## J5. Media

- video is optimized,
- poster exists,
- no oversized uncompressed asset,
- playback is muted/playsInline if autoplayed,
- no CLS caused by media loading.

## J6. No fragile browser trick

Do not rely on expensive real-time screen tracking/computer vision for the hero when a robust editorial transition achieves the same result.

---

# K. Demo readiness

## K1. 60-second path — BLOCKER

A reviewer can complete the intended demo in roughly 60 seconds without waiting for real marketplace events.

## K2. Demo data is credible

Fixtures look like plausible professional work, not lorem ipsum or toy examples.

## K3. Failure-free reset

The demo can be reset/replayed reliably.

## K4. One-sentence explanation

After viewing, a reviewer can say something close to:

> “일을 등록하면 전문가들이 가격과 납기로 입찰하고, 카파피가 알아서 배정해서 결과를 가져오는 서비스.”

## K5. Differentiation is visible — BLOCKER

The reviewer does not need a verbal explanation to discover that KAPAPI removes routine PLAYER selection from the GM.

---

# L. Final founder-review gate

Before stopping implementation, Claude Code should produce a short audit with:

- PASS / FAIL for every BLOCKER section,
- known visual compromises,
- known product-scope compromises,
- exact commands run and outcomes,
- mobile/desktop screenshots if tooling permits,
- remaining asset dependency (especially final hero video) if any.

Do not merge to `main` automatically.

Prototype v1 passes when it feels simpler on the GM side than a conventional freelancer marketplace while still showing a credible professional market operating underneath.
