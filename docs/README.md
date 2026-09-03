# KAPAPI Documentation

This directory is the current product/business/design canon for KAPAPI on the `개선안` redesign branch.

## Current product thesis

> **해야 할 일을 넣으면, 결과가 나온다.**

Canonical split:

```text
GM
work request
→ RESULT + PRICE + COMPLETION TIME
→ KAPAPI executes/orchestrates
→ result

PLAYER
real QUEST
→ PRICE + DELIVERY BID / Offer acceptance
→ execute
→ REWARD

KAPAPI INTERNAL
structured SOW
→ human / AI / automation / partner procurement
→ routing / QA / recovery
```

KAPAPI is therefore:

> **PLAYER에게는 일이 먼저 보이는 시장, GM에게는 사람을 고르지 않아도 되는 실행 서비스.**

The task-first marketplace remains the supply and price-discovery engine. It is no longer a requirement that the GM shop that market.

---

## Canonical reading order

For all product/business work and new implementation, read in this order:

1. `docs/DECISIONS.md` — **D-033 is the current highest product authority**
2. `docs/ORIGIN_AND_GROWTH_THESIS.md` — founder origin and two-sided reconciliation
3. `docs/PRODUCT.md` — current product mechanics
4. `docs/ROADMAP.md` — Outcome UX → execution-engine automation roadmap
5. `docs/VALIDATION.md` — demand/supply/execution/economic tests
6. `docs/PROTOTYPE_SPEC.md` — buildable public prototype behavior
7. `docs/PROGRAM_2026_MODU.md` — 2026 모두의 창업 strategy
8. `docs/LEGAL.md` — legal/product/payment/security responsibility boundaries
9. `TASK_QUEUE.md` — current implementation queue
10. `CLAUDE_HANDOFF.md` — operational implementation handoff
11. visual/interaction documents

If older content, screenshots, v2 directives or implementation examples conflict with D-033 or the core docs above, **D-033 and the new core docs win**.

---

## Core documents

- `DECISIONS.md` — current durable decisions and D-033
- `ORIGIN_AND_GROWTH_THESIS.md` — why KAPAPI exists and why PLAYER market + GM Outcome UX coexist
- `PRODUCT.md` — Execution Contract, internal market, quote, recovery and unit economics
- `ROADMAP.md` — concierge validation → structured market → quote/routing/recovery automation → execution infrastructure
- `VALIDATION.md` — worker-selection-removal test, paid outcome test, quote accuracy, recovery and completed-outcome contribution
- `PROTOTYPE_SPEC.md` — current screens/states/demo loop
- `PROGRAM_2026_MODU.md` — competition/application framing
- `LEGAL.md` — responsibility, contracting, data, AI, payment and category gates

---

## Current non-negotiable product rules

1. **Outcome UX for GM from the beginning.**
2. **Task-first market for PLAYER.**
3. **GM normally buys an Execution Contract, not a PLAYER profile.**
4. Execution Contract = **RESULT + PRICE + COMPLETION TIME + acceptance/revision/recovery boundary**.
5. **PRICE + DELIVERY TIME remain mandatory PLAYER market data.**
6. Default GM flow must not require several PLAYER/profile/BID comparisons.
7. Early execution may be concierge/manual behind the scenes, but operator minutes and unit economics must be measured.
8. Instant quote is earned category by category.
9. KAPAPI may internally use human PLAYERs, AI, automation, specialist partners or hybrid execution.
10. Recovery should not send supplier search back to the GM.
11. Initial wedge is not generic cheap/simple work.
12. Preferred wedge: **AI-alone risky + human search disproportionate + bounded/checkable digital result**.
13. Architecture/CAD is a founder-domain testbed, not the market identity.
14. AI is an execution/scoping resource, not an infallible final judge.
15. Category liquidity and **completed-outcome contribution** matter more than signup count or gross transaction volume.
16. Strong SLA/legal responsibility is earned category by category.
17. GM/PLAYER are contextual roles under one identity model.
18. Plain Korean business meaning comes before game/world terminology.

---

## Visual / interaction documents

The existing prototype-v2 visual research remains valuable as a style/quality layer.

It must **not** override current product behavior.

Relevant files include:

- `PROTOTYPE_V2_CONTENT_GOVERNANCE.md`
- `PROTOTYPE_V2_VISUAL_RESEARCH_PROTOCOL.md`
- `PROTOTYPE_V2_REFERENCE_ADDENDUM.md`
- `PROTOTYPE_V2_VISUAL_COMMUNICATION_RULES.md`
- `PROTOTYPE_V2_KOREAN_UX_WRITING.md`
- `PROTOTYPE_V2_HERO_COMPOSITING.md`
- `KAPAPI_ART_DIRECTION.md`
- `KAPAPI_DESIGN.md`
- `KAPAPI_MOTION.md`
- `HERO_MEDIA.md`
- `QA_CHECKLIST.md`

Old recommendation-first copy such as `카파피 추천 → 이 작업자로 진행 → 다른 제안 보기` is no longer canonical for the default GM path.

---

## Current prototype interpretation

Preferred GM demo:

```text
request/files
→ structured SOW
→ RESULT + PRICE + COMPLETION TIME
→ 이 조건으로 맡기기
→ internal route
→ recovery if needed
→ result
→ accept/revise
```

Preferred PLAYER demo:

```text
작업 찾기
→ QUEST
→ PRICE + DELIVERY
→ execute
→ REWARD
```

The prototype may simulate or concierge the quote/routing engine. It must be honest that universal instant pricing, automatic QA and universal SLA are not yet proven production capabilities.
