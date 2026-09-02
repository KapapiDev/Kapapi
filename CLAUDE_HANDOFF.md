# KAPAPI — Claude Code Implementation Handoff

Status: **implementation handoff for Prototype v1**  
Target implementation branch: `feat/prototype-v1`

## Mission

Build a public, high-polish KAPAPI Prototype v1 that makes the product understandable in seconds, demonstrates one complete result-oriented transaction loop, and expresses a distinctive KAPAPI world without sacrificing professional trust.

The product is **not** a freelancer directory with game decoration.

The GM-facing promise is:

> **일 던져놔. 결과만 받아.**
>
> **DROP WORK. GET RESULTS.**

The default behavior is:

```text
GM submits a valid work request
→ GM routine work ends
→ PLAYERs BID with PRICE + DELIVERY TIME
→ KAPAPI ranks/selects/routes automatically
→ PLAYER executes
→ result returns
→ GM accepts or requests revision
```

Do **not** implement the older default where the GM must compare BID A/B/C and choose a PLAYER. That behavior is superseded by `docs/DECISIONS.md` D-031 and the current `docs/PRODUCT.md` / `docs/PROTOTYPE_SPEC.md`.

---

## Read order and authority

Before writing application code, read these files in this order:

1. `docs/README.md`
2. `docs/DECISIONS.md`
3. `docs/PRODUCT.md`
4. `docs/PROTOTYPE_SPEC.md`
5. `docs/KAPAPI_ART_DIRECTION.md`
6. `docs/KAPAPI_DESIGN.md`
7. `docs/KAPAPI_MOTION.md`
8. `docs/UPWORK_FIRST_TOUCH_REFERENCE.md`
9. `docs/HERO_MEDIA.md`
10. `docs/QA_CHECKLIST.md`
11. `TASK_QUEUE.md`
12. `docs/LEGAL.md`
13. `docs/VALIDATION.md`
14. `docs/REFERENCE_BOARD.md`

Authority rules:

- Product behavior: latest `DECISIONS.md` + `PRODUCT.md` + `PROTOTYPE_SPEC.md`.
- Current public art direction / world-building: **`KAPAPI_ART_DIRECTION.md`**.
- Detailed component/material/layout reference: `KAPAPI_DESIGN.md`, only where it does not conflict with current product/art direction.
- Motion timing/behavior: `KAPAPI_MOTION.md`, with legacy `GM selects BID` choreography interpreted as **KAPAPI routes/selects** for the default flow.
- Hero media integration: `HERO_MEDIA.md`.
- Acceptance: `QA_CHECKLIST.md` + the mandatory visual/world QA gate in `KAPAPI_ART_DIRECTION.md`.

If an older example conflicts with D-031, the current prototype spec, light-first public direction or `KAPAPI_ART_DIRECTION.md`, the newer rule wins.

---

## Non-negotiable product truths

1. The visitor must understand within roughly three seconds: **“여기에 내가 맡길 일을 적으면 되는구나.”**
2. The GM primary action is **`일 맡기기`**, not `Start a QUEST` or `QUEST 등록하기`.
3. Use normal Korean first. Introduce `QUEST`, `PLAYER`, `BID`, `LEVEL / EXP`, `TIME ATTACK` after the business action is understood.
4. The GM does **not** routinely compare or select PLAYERs after submitting a valid request.
5. PLAYERs still compete behind the scenes with mandatory **PRICE + committed DELIVERY TIME**.
6. KAPAPI selection is not an opaque LLM whim. The UI should imply hard eligibility + market terms + verified trust/performance + task fit + routing policy.
7. The GM remains the final result judge through **accept / revision request**.
8. Architecture/CAD is the flagship test case below the hero, not the market definition and not the hero master category.
9. Do not claim production escrow, SLA guarantees, authoritative AI quality judgment, tax automation, or regulated-professional coverage that does not exist.
10. This is a thin public prototype. Visual/product clarity matters more than backend breadth.

---

# WORLD-BUILDING IS A CORE DIFFERENTIATOR

Do not treat KAPAPI vocabulary as a late decorative skin.

The KAPAPI world should be recognizable through:

- language,
- work state,
- reputation/progression,
- routing/completion motion,
- compact operational metadata.

Canonical vocabulary includes:

- GM
- PLAYER
- QUEST
- BID
- REWARD
- TIME ATTACK
- LEVEL / EXP
- QUEST COMPLETE

The world must be introduced through a layered system:

> **plain-language meaning → product state → KAPAPI world term**

Examples:

```text
업무 등록 완료
QUEST #0182 CREATED
```

```text
입찰 7건이 도착했습니다
7 BIDS RECEIVED
```

```text
KAPAPI가 작업자를 배정했습니다
PLAYER ASSIGNED
```

```text
긴급 업무
TIME ATTACK · 04:18:22
```

```text
작업이 완료되었습니다
QUEST COMPLETE
```

World-building intensity should vary by surface:

- GM first-touch: low and subtle,
- GM orchestration: medium,
- PLAYER surfaces: strong,
- contracts/NDA/payment/dispute/result acceptance: sober and low.

The desired system is **a serious professional-work marketplace with the engagement/progression logic of a game**.

Do not use:

- swords,
- coins,
- fantasy badges,
- rarity tiers,
- medieval/fantasy UI,
- pixel-RPG motifs,
- gamer RGB,
- loot/reward visuals,
- game-launcher composition.

Game energy should come from `QUEST`, `TIME ATTACK`, `REWARD`, `LEVEL / EXP`, live states, deadlines, assignment, completion and tactile motion.

---

## External first-touch benchmark — Upwork

Reference site:

> `https://www.upwork.com/`

Use the current Upwork homepage as a **UX benchmark only** for:

- immediate first-view comprehension,
- large and simple hero hierarchy,
- one obvious main action,
- clean light-theme trust,
- low cognitive load,
- restrained navigation,
- short supporting copy,
- category/example shortcuts that make starting easy.

Do not copy Upwork's:

- layout,
- component structure,
- branding,
- colors,
- typography,
- copy,
- video/art direction,
- talent-search model,
- manual freelancer-selection flow.

KAPAPI should be **easier and more automatic** on the GM side.

Repository canon always overrides Upwork.

---

## Visual north star

### Public / marketplace default

**LIGHT FIRST.**

Use:

- white / off-white paper field,
- black / graphite typography,
- restrained borders,
- disciplined spacing,
- premium typography,
- high readability,
- one restrained **cool sapphire-blue signal family**.

Dark is contextual, not global. Reserve near-black/dark surfaces for selected operational moments such as TIME ATTACK, active routing/workroom state, or deliberate brand contrast sections.

> **Light marketplace first. Dark operational moments second.**

The public experience should feel easier than Kmong and at least as immediately understandable as Upwork, while being more result-oriented and more distinctive.

### Sapphire signal rule

Use sapphire blue only where state or interaction deserves a signal:

- submit confirmation,
- focus/active state,
- routing activation,
- assignment lock,
- important system operation,
- restrained primary CTA emphasis where required.

The submit interaction may use the approved signature:

> final click → 0.2–0.4s localized sapphire confirmation → work leaves the GM.

Do not default to violet/purple AI gradients or purple card ecosystems.

### Reject these outputs

Do not ship:

- generic Tailwind/shadcn SaaS dashboard aesthetics,
- dark-first developer-console landing,
- Upwork/Kmong clone composition,
- crypto/game launcher styling,
- purple AI gradients,
- neon gradients,
- glassmorphism everywhere,
- giant rounded-card walls,
- fantasy RPG motifs,
- dashboard collage in the first viewport,
- decorative animation that competes with the task-entry action.

Premium quality must come from typography, grid, composition, hierarchy, product-state detail and restrained motion.

---

## Hero requirement

The first viewport has one protagonist: **the task-entry surface**.

Recommended semantic hierarchy:

```text
KAPAPI

할 일을 던져주세요.
전문가들이 가격과 완료시간을 제안하고,
카파피가 가장 적합한 작업자를 자동으로 배정합니다.

[ 맡길 일을 적어주세요...                              ]
[ 파일 첨부 ]                                  [ 일 맡기기 → ]

일 등록 → KAPAPI 자동 배정 → 작업 → 결과 확인

일하러 오셨나요? → 일 찾기
```

Do not copy this layout literally if a stronger composition passes the same tests. The task-entry action must remain visually dominant.

The hero may use the real-video concept documented in `docs/HERO_MEDIA.md`, but the CTA/input remains the protagonist. Do not turn the hero into a mini dashboard.

Do not use a complete generated reference screenshot as a layout template. Design from principles and acceptance criteria.

---

## Prototype loop to implement

The prototype must allow a reviewer to experience or clearly demo:

```text
LANDING
→ GM describes work / attaches file
→ AI-assisted scope preview (thin prototype)
→ SUBMIT / 맡기기
→ hands-off orchestration status
→ PLAYER side sees QUEST and submits PRICE + DELIVERY BID
→ KAPAPI receives BIDs and auto-routes a PLAYER
→ work status progresses
→ result is delivered
→ GM chooses 결과 확인 / 수정 요청
→ completion / trust history updates
```

Use deterministic mock data/state where production backend is unnecessary. The demo must be stable and repeatable.

---

## Implementation posture

Recommended technical direction unless the repository already establishes an equivalent stack:

- Next.js App Router + TypeScript
- a disciplined CSS/token system; Tailwind is acceptable but must not dictate visual design
- Motion (`motion/react`) for shared layout and state animation
- Number Flow where numeric interpolation is genuinely useful
- local typed mock data / deterministic demo state for Prototype v1
- no production database, payment stack or auth complexity unless already required by existing code

Prefer custom KAPAPI components over assembling a recognizable component-library demo.

Accessibility and performance are part of visual quality, not cleanup tasks.

---

## Mandatory pre-code design gate

Before heavy implementation, do all of the following **in text only**:

1. Propose **three distinct hero information structures**. Do not produce screenshot clones.
2. Score each against:
   - three-second understanding,
   - GM primary-action clarity,
   - KAPAPI differentiation,
   - world-building integration,
   - premium visual potential,
   - mobile viability.
3. Choose the strongest structure yourself.
4. Write a short **world-building integration map** for:
   - GM first-touch,
   - GM orchestration,
   - PLAYER board/profile,
   - completion/result.
5. Verify the chosen structure does not visually copy Upwork.

Then implement.

Do not stop and ask the user to choose between normal implementation options unless there is a genuine product conflict.

---

## Working protocol

1. Update origin references and work only from `feat/prototype-v1`.
2. Re-read the canon before choosing screen structure.
3. Complete the mandatory pre-code design gate above.
4. Implement in small coherent tasks following `TASK_QUEUE.md`.
5. After each major surface, self-audit against `docs/QA_CHECKLIST.md` and `docs/KAPAPI_ART_DIRECTION.md`.
6. Test desktop and mobile.
7. Run build/typecheck/lint/tests available in the repository.
8. Do a final visual/product/world audit before declaring completion.
9. Do **not** merge to `main` automatically. Stop with the implementation branch ready for review.

Do not make the user act as a technical courier. Resolve normal implementation choices, retries and debugging independently.

---

## Definition of done

Prototype v1 is ready for review when:

- a new visitor understands the service at a glance,
- the landing page is unmistakably light-first,
- one obvious GM task-entry action dominates above the fold,
- PLAYER entry exists but is secondary,
- the prototype demonstrates mandatory PRICE × DELIVERY bidding,
- KAPAPI auto-routing is visible and the GM is not asked to select a routine BID,
- world-building feels structurally integrated rather than pasted on,
- QUEST / BID / PLAYER vocabulary is taught gradually,
- PLAYER surfaces show stronger progression/world language while professional proof remains dominant,
- sapphire is used as a restrained signal rather than decorative color flooding,
- the result/revision loop is visible,
- the flagship CAD case appears below the hero without making KAPAPI look CAD-only,
- motion explains state change rather than decorating scroll,
- responsive/accessibility/reduced-motion behavior is credible,
- no unsupported production/legal promises are made,
- the 30–60 second demo path can be performed without confusion,
- the final output passes `docs/QA_CHECKLIST.md` and the mandatory art/world QA gate in `docs/KAPAPI_ART_DIRECTION.md`.

Before stopping, self-score:

- 3-second comprehension: target 10/10
- product differentiation: target 9/10+
- visual/art-direction quality: target 9/10+
- world-building coherence: target 9/10+
- interaction/motion polish: target 9/10+
- professional trust: target 9/10+

Any score below 8 requires another refinement pass.

The desired reaction is not:

> “nice freelancer marketplace.”

It is:

> **“I give KAPAPI the work, it handles the messy middle, and this product has a world of its own.”**
