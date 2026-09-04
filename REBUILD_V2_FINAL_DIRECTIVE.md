# KAPAPI Prototype v2 — FINAL EXECUTION DIRECTIVE

Status: **SUPERSEDED — historical directive**

> **SUPERSEDED — 2026-09-03.** This file records the directive as it was given at
> the time. The product has since moved: D-034 replaced the GM / PLAYER / QUEST /
> BID vocabulary with 발주자 / 작업자 / 업무 / 제안, and D-033.1 (imported from the
> `개선안` canon) made the client approve an **실행 계약** — 결과물 + 가격 + 완료시간 +
> 수정 경계 + 복구 경계 — instead of comparing proposals and confirming a worker.
>
> Current authority: `docs/DECISIONS.md` D-033.1–.12, D-034, D-035.
> Kept unedited as a record of what was asked, not as an instruction to follow.


Status: **highest-priority visual/execution directive for `main`**  
Updated: **2026-09-03**

This file protects the v2 visual quality bar. **Product/business behavior is governed by the current product canon, especially `docs/DECISIONS.md` D-032.** If an older v2 document, screenshot, QA record or copy example conflicts with D-032, the current canon wins.

## 0. Current product truth

KAPAPI is task-first.

```text
GM posts bounded work
→ PLAYERs discover the QUEST
→ PLAYERs BID PRICE + DELIVERY TIME
→ KAPAPI filters/ranks and recommends
→ GM confirms
→ execution
→ result
→ accept / revise
```

This is the preferred **current prototype** flow.

Universal automatic routing is **not** a day-one requirement. It is an earned later capability:

```text
transactions
→ task-specific trust data
→ better recommendation
→ default routing
→ replacement/recovery
→ repeat capacity
→ Outcome Layer
```

North Star:

> **해야 할 일을 올리면, 결과로 돌아온다.**

At maturity, execution may use human PLAYERs, AI, deterministic automation, specialist partners or hybrid/multi-PLAYER workflows. The user-facing unit is the result.

Architecture/CAD is a founder-domain proof case only. It is never the brand/category identity.

---

## 1. Prototype v1 remains rejected visually

Do not reuse v1 application code, CSS, component hierarchy, hero composition, black routing card, paragraph-heavy landing structure, arbitrary public persona/debug chrome or visual score claims.

Do not cosmetically reskin v1.

The current v2 implementation is the visual baseline, but product behavior must keep following D-032 as it evolves.

---

## 2. Visual quality is P0

A behaviorally correct but visually weak public product is not done.

Do not trade away:

- strong first-view composition
- typography hierarchy
- disciplined spacing
- mobile quality
- real visual proof
- motion continuity
- content necessity

for faster feature completion.

---

## 3. Mandatory current reading order

Before product behavior changes, read:

1. `docs/ORIGIN_AND_GROWTH_THESIS.md`
2. `docs/DECISIONS.md` — D-032 is current selection/routing authority
3. `docs/PRODUCT.md`
4. `docs/ROADMAP.md`
5. `docs/VALIDATION.md`
6. `docs/PROTOTYPE_SPEC.md`
7. `CLAUDE_HANDOFF.md`
8. `TASK_QUEUE.md`

Then use the v2 visual layer:

1. `REBUILD_V2_FINAL_DIRECTIVE.md`
2. `REBUILD_V2_HANDOFF.md`
3. `docs/PROTOTYPE_V2_CONTENT_GOVERNANCE.md`
4. `docs/PROTOTYPE_V2_VISUAL_RESEARCH_PROTOCOL.md`
5. `docs/PROTOTYPE_V2_REFERENCE_ADDENDUM.md`
6. `docs/PROTOTYPE_V2_VISUAL_COMMUNICATION_RULES.md`
7. `docs/PROTOTYPE_V2_KOREAN_UX_WRITING.md`
8. `docs/PROTOTYPE_V2_HERO_COMPOSITING.md`
9. `docs/KAPAPI_ART_DIRECTION.md`
10. `docs/KAPAPI_DESIGN.md`
11. `docs/KAPAPI_MOTION.md`
12. `docs/HERO_MEDIA.md`

Visual examples never override current product behavior.

---

## 4. Use available capabilities before claiming they are unavailable

For implementation/design work, actually inspect and use relevant connected tools/skills for:

- browser visual QA
- frontend/UI design
- screenshots
- responsive testing
- motion
- media compositing
- Korean UX writing
- reference research

Do not report a capability unavailable before a real lookup/call attempt.

Record meaningful capability use in the appropriate audit when useful.

---

## 5. Live reference study remains required for major visual redesign

When changing art direction materially, inspect current live references rather than relying on memory or old screenshots.

Core reference families remain:

- Upwork
- Linear
- Vercel
- Factory
- Raycast
- Hyperstudio
- Mercury
- Kmong
- Wishket
- Soomgo

Study more than the hero. Inspect meaningful mid-page sections, mobile behavior, CTA hierarchy, density, trust patterns and interaction.

Use reference principles, never copy brand/layout/assets.

---

## 6. Show, do not explain

The landing page is a product demonstration, not a strategy memo.

Prefer:

- real QUEST objects
- real BID states
- PRICE × DELIVERY
- eligibility filtering
- recommendation evidence
- GM confirmation
- files/results
- deadline states
- trust/history
- motion/state transitions

over paragraphs explaining them.

If removing explanatory prose destroys understanding, first improve the visual communication.

---

## 7. Korean public copy

Use ordinary Korean before world terminology.

Current public language should make these actions obvious:

- `의뢰 등록`
- `작업 찾기`
- `제안 보내기`
- `카파피 추천`
- `이 작업자로 진행`
- `다른 제안 보기`
- `결과 확인`
- `수정 요청`

Do not use internal slogans as public copy merely because they exist in strategy docs.

Game/world language is secondary state grammar: QUEST, BID, TIME ATTACK, LEVEL/EXP, QUEST COMPLETE.

---

## 8. Hero product narrative

The task-entry action remains the protagonist.

Current semantic promise:

> **맡길 일을 적어주세요.**  
> 카파피가 작업 조건을 정리하고 맞는 제안을 추천합니다.

The hero product sequence should communicate:

```text
QUEST CREATED
→ BIDS RECEIVED
→ ELIGIBILITY CHECK
→ RECOMMENDATION READY
→ GM CONFIRMED
→ RESULT READY
```

The approved footage's laptop display should carry real KAPAPI UI where technically feasible. Desktop may composite into the laptop screen; mobile may use a clean full-frame cut where the laptop is cropped.

Do not visually imply that recommendation is already universal autonomous assignment.

---

## 9. Korean marketplace familiarity + KAPAPI difference

Use familiar transaction concepts where useful:

- request/commission language
- deadline/budget
- delivery/revision
- trust/history
- familiar CTA behavior

But preserve the KAPAPI task-first distinction:

> **work exists first; PLAYER chooses suitable QUESTs instead of needing a storefront first.**

Do not force a permanent buyer/seller identity split.

---

## 10. Content necessity

Every visible element must be defensible as:

- `PRODUCT REQUIRED`
- `REFERENCE-SUPPORTED UX`
- `APPROVED BRAND/WORLD`

Remove arbitrary pseudo-status, debug UI, decorative lore and fixture persona leakage from public neutral surfaces.

Fixture content may exist where a real transaction example needs it.

---

## 11. Current product truths that must survive visual work

- one universal KAPAPI user identity
- GM/PLAYER are contextual per-QUEST roles
- no permanent role signup fork
- QUEST is the core object
- PLAYER can browse open work without creating a storefront first
- PRICE + committed DELIVERY TIME in every BID
- current preferred GM flow is **KAPAPI recommendation + GM confirmation**
- recommendation must be distinct from assignment
- alternatives may remain visible
- routing/recovery automation grows from evidence
- GM accepts/revises the result
- Architecture/CAD is one proof case only
- category-neutral brand/hero
- ordinary office/support and skilled work may share the engine
- long-term Outcome Layer may combine human + AI + automation + partners
- light-first public UX
- restrained world grammar, no fantasy cosplay

---

## 12. Render, compare, reject, repeat

After major public changes:

1. render the real app
2. inspect desktop
3. inspect mobile
4. inspect reduced-motion where relevant
5. capture evidence
6. compare to strong references and the previous approved baseline
7. check whether copy is doing work the UI should do
8. check content necessity
9. redesign if generic, confusing or visually weaker

Compilation is not visual QA.

---

## 13. QA authority

Behavioral QA must follow current `scripts/loop.mjs`.

Current invariants include:

- task-first open-work discovery
- PRICE + DELIVERY required
- recommendation occurs before assignment
- GM confirmation creates assignment
- no universal auto-routing claim
- one account can hold different QUEST roles
- result/revision loop works
- long-term Outcome Layer is future evolution, not a fake current guarantee

`docs/PROTOTYPE_V2_PREVIEW_QA.md` is explicitly a **historical pre-D-032 record** until a fresh preview of the latest branch is verified.

---

## 14. Stop condition

Do not merge `main` or intentionally promote Production without explicit instruction.

A v2 alignment pass is ready for founder review only when:

- current canon and current UI tell the same story
- the core loop works from task entry through recommendation/confirmation/result
- PLAYER task discovery remains clear
- build/typecheck/lint/tests available to the environment pass
- desktop/mobile visual QA has been performed on the current build where tooling permits
- unsupported capabilities are not claimed
- remaining verification gaps are recorded honestly

The desired reaction is:

> **“일이 먼저 올라오는 시장에서 시작해서, 거래 데이터를 쌓아 추천·배정·복구를 발전시키고 결국 일을 넣으면 결과가 돌아오는 시스템으로 가는구나.”**
