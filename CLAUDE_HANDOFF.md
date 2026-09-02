# KAPAPI — Claude Code Implementation Handoff

Status: **implementation handoff for Prototype v1**  
Branch authority at handoff time: `docs/initial-product-design`  
Target implementation branch: `feat/prototype-v1`

## Mission

Build a public, high-polish KAPAPI Prototype v1 that makes the product understandable in seconds and demonstrates one complete result-oriented transaction loop.

The product is **not** a freelancer directory with game decoration.

The GM-facing promise is:

> **일 던져놔. 결과만 받아.**
>
> **DROP WORK. GET RESULTS.**

The default behavior is now:

```text
GM submits a valid work request
→ GM routine work ends
→ PLAYERs BID with PRICE + DELIVERY TIME
→ KAPAPI ranks/selects/routes automatically
→ PLAYER executes
→ result returns
→ GM accepts or requests revision
```

Do **not** implement the older default where the GM must compare BID A/B/C and choose a PLAYER. That behavior is superseded by `docs/DECISIONS.md` D-031 and the current `docs/PRODUCT.md`.

---

## Read order and authority

Before writing application code, read these files in this order:

1. `docs/README.md`
2. `docs/DECISIONS.md` — especially the latest decisions and supersession rules
3. `docs/PRODUCT.md`
4. `docs/PROTOTYPE_SPEC.md`
5. `docs/KAPAPI_DESIGN.md`
6. `docs/KAPAPI_MOTION.md`
7. `docs/UPWORK_FIRST_TOUCH_REFERENCE.md`
8. `docs/HERO_MEDIA.md`
9. `docs/QA_CHECKLIST.md`
10. `TASK_QUEUE.md`
11. `docs/LEGAL.md`
12. `docs/VALIDATION.md`
13. `docs/REFERENCE_BOARD.md`

Authority rules:

- Product behavior: latest `DECISIONS.md` + `PRODUCT.md` + `PROTOTYPE_SPEC.md`.
- Prototype screen/interaction scope: `PROTOTYPE_SPEC.md`.
- Visual language: `KAPAPI_DESIGN.md`, interpreted through the current light-first and auto-routing rules.
- Motion: `KAPAPI_MOTION.md`, with legacy `GM selects BID` choreography interpreted as **KAPAPI routes/selects** for the default flow.
- Hero media integration: `HERO_MEDIA.md`.
- Acceptance: `QA_CHECKLIST.md`.

If an older example conflicts with D-031 or the current prototype spec, the newer auto-routing behavior wins.

---

## Non-negotiable product truths

1. The visitor must understand within roughly three seconds: **“여기에 내가 맡길 일을 적으면 되는구나.”**
2. The GM primary action is **`일 맡기기`**, not `Start a QUEST`.
3. Use normal Korean first. Introduce `QUEST`, `PLAYER`, `BID`, `LEVEL / EXP`, `TIME ATTACK` only after the business action is understood.
4. The GM does **not** routinely compare or select PLAYERs after submitting a valid request.
5. PLAYERs still compete behind the scenes with mandatory **price + committed delivery time**.
6. KAPAPI selection is not an opaque LLM whim. The UI should imply hard eligibility + market terms + verified trust/performance + task fit + routing policy.
7. The GM remains the final result judge through **accept / revision request**.
8. Architecture/CAD is the flagship test case below the hero, not the market definition and not the hero master category.
9. Do not claim production escrow, SLA guarantees, authoritative AI quality judgment, tax automation, or regulated-professional coverage that does not exist.
10. This is a thin public prototype. Visual/product clarity matters more than backend breadth.

---

## Visual north star

### Public / marketplace default

**LIGHT FIRST.**

Use:

- white / off-white paper field,
- black / graphite typography,
- restrained borders,
- disciplined spacing,
- one signal accent family,
- premium typography,
- high readability.

Dark is contextual, not global. Reserve near-black/dark surfaces for selected operational moments such as TIME ATTACK, active routing/workroom state, or deliberate brand contrast sections.

> **Light marketplace first. Dark operational moments second.**

The public experience should feel easier than Kmong and at least as immediately understandable as Upwork, while being more result-oriented.

### Reject these outputs

Do not ship:

- generic Tailwind/shadcn SaaS dashboard aesthetics,
- dark-first developer console landing,
- crypto/game launcher styling,
- neon gradients,
- glassmorphism everywhere,
- giant rounded-card walls,
- fantasy RPG motifs,
- swords / coins / pixel art,
- dashboard collage in the first viewport,
- decorative animation that competes with the task-entry action.

Game energy should live in state, reputation, timing and tactile micro-interactions, not cosplay.

---

## Hero requirement

The first viewport has one protagonist: **the task-entry surface**.

Recommended semantic hierarchy:

```text
KAPAPI

할 일을 던져주세요.
전문가들이 가격과 완료시간을 제안하고,
카파피가 가장 적합한 작업자를 연결해 결과를 가져옵니다.

[ 맡길 일을 적어주세요...                              ]
[ 파일 첨부 ]                                  [ 일 맡기기 → ]

일 등록 → KAPAPI 자동 배정 → 작업 → 결과 확인

일하러 오셨나요? → 일 찾기
```

Do not copy this layout literally if a better composition passes the same tests. The task-entry action must remain visually dominant.

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

## Working protocol

1. Start from the latest `docs/initial-product-design` state.
2. Create/use `feat/prototype-v1` for implementation. Do not implement directly on `main`.
3. Re-read the canon before choosing screen structure.
4. Before heavy coding, propose **three hero information structures in text only** and score each against:
   - three-second understanding,
   - GM primary-action clarity,
   - differentiation,
   - premium visual potential.
   Choose the strongest one yourself unless a genuine product conflict requires escalation.
5. Implement in small coherent tasks following `TASK_QUEUE.md`.
6. After each major surface, self-audit against `docs/QA_CHECKLIST.md`.
7. Test desktop and mobile.
8. Run build/typecheck/lint/tests available in the repository.
9. Do a final visual/product audit before declaring completion.
10. Do **not** merge to `main` automatically. Stop with the implementation branch ready for review.

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
- the result/revision loop is visible,
- the flagship CAD case appears below the hero without making KAPAPI look CAD-only,
- motion explains state change rather than decorating scroll,
- responsive/accessibility/reduced-motion behavior is credible,
- no unsupported production/legal promises are made,
- the 30–60 second demo path can be performed without confusion,
- the final output passes `docs/QA_CHECKLIST.md`.

The desired reaction is not “nice freelancer marketplace.”

It is:

> **“I give KAPAPI the work, and it handles the messy middle.”**
