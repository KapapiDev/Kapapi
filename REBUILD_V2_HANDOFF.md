# KAPAPI Prototype v2 — REDESIGN HANDOFF

Status: **current redesign handoff on `개선안`**  
Updated: 2026-09-03

## Product authority

Read first:

1. `docs/DECISIONS.md` D-033
2. `docs/PRODUCT.md`
3. `docs/PROTOTYPE_SPEC.md`
4. `TASK_QUEUE.md`
5. `CLAUDE_HANDOFF.md`

D-033 supersedes the old recommendation-first default GM flow.

## Current product sentence

> **KAPAPI is a work execution market where the GM buys a defined result, price and completion time, while KAPAPI internally uses a task-first PLAYER market plus AI/automation/partners to procure, execute and recover the work.**

## Preserve from v2

Preserve strong existing visual work where possible:

- premium composition;
- typography and spacing;
- motion quality;
- light-first public UX;
- restrained HUD/world cues;
- responsive/mobile quality;
- strong real-product visual proof.

Do not preserve old behavior merely because it is already implemented.

## Replace in v2

Remove/reframe the default GM sequence:

```text
BIDs
→ KAPAPI recommendation
→ GM selects PLAYER
```

Replace with:

```text
rough request/files
→ structured SOW
→ RESULT + PRICE + COMPLETION TIME
→ `이 조건으로 맡기기`
→ internal route
→ execution / recovery
→ result
→ accept / revise
```

## PLAYER side

Keep and strengthen:

```text
작업 찾기
→ bounded QUEST
→ PRICE + DELIVERY BID / Offer
→ execute
→ REWARD
```

No storefront-first requirement.

## Internal market proof

Reuse ranking/routing fixture logic where useful, but move it out of the GM shopping flow.

It should now prove that KAPAPI has an internal execution market and can compare:

- PLAYER cost/time/trust/availability;
- AI/automation alternative;
- backup/recovery path.

## Recovery proof

Add a deterministic state where the first executor becomes late/unavailable and KAPAPI activates an alternative without asking the GM to choose another worker.

Do not market this as a universal SLA.

## Initial wedge

Examples should communicate:

> **AI-alone risky + human search disproportionate + bounded/checkable digital result.**

Avoid making raw low-price microtasks the entire value proposition.

## Definition of done

A reviewer can say:

> **“카파피는 프리랜서를 추천해주는 사이트가 아니라, 결과·가격·완료시각을 사고 뒤의 실행시장을 카파피가 운영하는 서비스다.”**

Run build/lint/typecheck and real desktop/mobile visual QA after the behavioral rebuild.
