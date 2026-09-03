# KAPAPI — Implementation Handoff

Status: **current implementation handoff**  
Authority branch: `docs/initial-product-design`  
Current visual implementation branch: `feat/prototype-v2`

## Mission

Build and maintain a high-polish KAPAPI prototype that makes the present transaction understandable in seconds and the long-term Outcome Layer credible without pretending it already exists.

The product is **not** a freelancer directory with game decoration, a CAD marketplace, or a magical auto-outsourcing demo.

Current product story:

```text
TASK FIRST
GM posts bounded work
→ PLAYERs discover QUESTs
→ PLAYERs BID PRICE + DELIVERY TIME
→ KAPAPI filters/ranks and recommends
→ GM confirms
→ PLAYER executes
→ result returns
→ GM accepts/revises
```

Growth story:

```text
transactions → trust data → recommendation → routing → recovery → repeat capacity → Outcome Layer
```

North Star:

> **해야 할 일을 올리면, 결과로 돌아온다.**

---

## Mandatory reading order

Before changing implementation, read:

1. `docs/ORIGIN_AND_GROWTH_THESIS.md`
2. `docs/DECISIONS.md` — **D-032 is the current routing/selection authority**
3. `docs/PRODUCT.md`
4. `docs/ROADMAP.md`
5. `docs/VALIDATION.md`
6. `docs/PROTOTYPE_SPEC.md`
7. `docs/PROGRAM_2026_MODU.md`
8. `docs/LEGAL.md`
9. current v2 visual/content override documents
10. `docs/KAPAPI_ART_DIRECTION.md`
11. `docs/KAPAPI_DESIGN.md`
12. `docs/KAPAPI_MOTION.md`
13. `docs/HERO_MEDIA.md`
14. `docs/QA_CHECKLIST.md`
15. `TASK_QUEUE.md`

If older copy or behavior conflicts with D-032 or the files above, the newer task-first canon wins.

D-031's day-one universal hands-off auto-routing requirement is superseded.

---

## Non-negotiable product truths

1. **Task first, not profile first.** The core marketplace object is the QUEST.
2. The GM must understand within seconds that they can submit work here.
3. The PLAYER must have a clear `작업 찾기` path to real open work.
4. PLAYERs do not need to create a storefront before earning.
5. Every BID requires **PRICE + committed DELIVERY TIME**.
6. Early selection should reduce burden without fake certainty. Preferred prototype default: **KAPAPI recommendation + GM confirmation**.
7. Alternatives may be visible through `다른 제안 보기`; do not force a giant proposal-comparison wall.
8. Universal automatic routing is a later capability earned from transaction/trust/liquidity/recovery data.
9. GM remains the final result judge through accept/revise.
10. Architecture/CAD is one founder-domain proof case, not the hero category or market definition.
11. Early categories may include ordinary office/support work and skilled professional support work.
12. KAPAPI world terms come after ordinary-language understanding.
13. One universal account; GM/PLAYER are contextual QUEST roles.
14. AI initially helps scope, missing information, task fit and objective checks. It is not an infallible selector or subjective quality judge.
15. Long-term execution may use human PLAYERs, AI, automation, specialist partners or hybrid workflows.
16. Strong SLA/outcome guarantees are earned category by category.

---

## Current GM UX

Preferred current flow:

```text
LANDING
→ task input / files
→ KAPAPI structures QUEST
→ GM confirms posting
→ BIDs arrive
→ KAPAPI recommendation appears
→ GM confirms recommended PLAYER
→ execution status
→ delivered result
→ accept / revise
```

Recommendation surface should show enough evidence to be credible:

- deadline/budget feasibility
- relevant history/career
- on-time/revision signals
- PRICE + DELIVERY trade-off
- short rationale

Primary action:

> **이 작업자로 진행**

Secondary:

> **다른 제안 보기**

Do not label this universal auto-routing.

---

## Current PLAYER UX

```text
작업 찾기
→ open QUEST board
→ filter by fit / deadline
→ inspect bounded scope
→ BID PRICE + DELIVERY
→ assignment
→ execute
→ submit result
→ earn / verified history
```

This supply path is strategically important because it preserves the founder-origin problem.

---

## Hero requirement

The first viewport should remain category-neutral and action-led.

The task-entry surface is the protagonist.

Approved semantic direction:

```text
맡길 일을 적어주세요.
카파피가 작업 조건을 정리하고 맞는 제안을 추천합니다.

[ 어떤 작업이 필요하신가요?                         ]
[ 파일 첨부 ]                              [ 의뢰 등록 → ]

작업을 찾고 있나요? → 작업 찾기
```

Do not use copy that implies:

> “등록만 하면 KAPAPI가 이미 완벽하게 자동배정하고 결과만 돌려준다.”

The long-term `work in → result out` story belongs below the current transaction proof or in a clearly future-oriented beat.

---

## Landing narrative

Recommended order:

1. task-entry hero
2. task-first distinction / PLAYER open-work entry
3. PRICE × DELIVERY proof
4. KAPAPI recommendation + GM confirmation
5. completed QUEST case across a believable category
6. TIME ATTACK
7. result / accept-revise
8. trust / LEVEL-EXP
9. future progression: transactions → trust → routing → Outcome Layer

Do not make Architecture/CAD the dominant identity.

---

## Visual authority

Keep the v2 quality bar and visual rules unless product behavior conflicts:

- light-first public UX
- dark as contextual operational punctuation
- premium typography and spacing
- restrained HUD/world layer
- no fantasy RPG cosplay
- no generic SaaS dashboard wall
- no arbitrary public pseudo-lore
- real product states should drive motion

Existing v2 hero compositing work can remain, but the composited product sequence must communicate the current recommendation/confirmation transaction rather than unsupported universal auto-assignment.

---

## Technical posture

Continue the established Next.js App Router + TypeScript implementation unless a real technical blocker requires change.

Prefer:

- typed deterministic fixtures for prototype flow
- stable replayable demo states
- custom KAPAPI components
- accessible forms/navigation
- responsive desktop/mobile behavior
- reduced-motion path
- real QA against deployed preview when available

Do not build production database/payment/auth complexity merely to simulate the 1R transaction.

---

## Definition of done for the aligned prototype

The prototype is ready for review when:

- task-first identity is unmistakable
- ordinary online-work examples appear, not just CAD
- `작업 찾기` visibly supports PLAYER discovery
- PRICE + DELIVERY bidding is clear
- KAPAPI recommendation is visible and evidence-backed
- GM confirmation exists
- no page claims universal automatic routing is already solved
- result / revision loop is visible
- future routing/Outcome Layer is clearly framed as earned evolution
- Architecture/CAD is a testbed/example only
- current visual polish is preserved
- desktop/mobile/reduced-motion remain credible
- build/lint/typecheck/tests available to the repository pass
- current v2 QA invariants are updated for the new recommendation state

Desired reaction:

> **“카파피는 일이 먼저 올라오는 시장에서 시작해서, 거래 데이터를 쌓아 결국 일을 넣으면 결과가 나오는 시스템으로 가는구나.”**

---

## Working protocol

1. Fetch the latest target branch before changes.
2. Do not implement against stale local assumptions.
3. Follow the current canon above all older screenshots/copy examples.
4. Keep code and docs aligned in the same change set.
5. Run available build/typecheck/lint/tests.
6. Verify the actual UI visually when a preview is available.
7. Do not merge to `main` automatically unless explicitly instructed.
8. Do not make the user act as a technical courier when connected tools can perform the work.
