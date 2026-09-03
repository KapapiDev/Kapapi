# KAPAPI

> **WORK IS A QUEST.**  
> **해야 할 일을 넣으면, 결과가 나온다.**

KAPAPI is a **work execution market** for bounded digital work.

Its two sides deliberately feel different.

## GM

The GM should not normally shop for a freelancer.

```text
업무 입력 / 파일 첨부
→ KAPAPI가 범위 구조화
→ RESULT + PRICE + COMPLETION TIME
→ 맡기기
→ KAPAPI가 내부 실행 조달/배정/복구
→ 결과
→ 승인 / 수정
```

The GM buys an **Execution Contract**, not a PLAYER profile.

## PLAYER

The PLAYER still experiences a task-first market.

```text
실제 QUEST 확인
→ PRICE + DELIVERY TIME 제안 또는 Offer 수락
→ 실행
→ 제출
→ REWARD + task-specific history
```

A PLAYER does not need to create a seller storefront or become a full-time freelancer before seeing real work.

## Founder-origin problem

KAPAPI began from a personal problem:

> **퇴근 후 남는 시간에 내가 할 수 있는 작은 온라인 업무를 골라 끝내고 돈 벌고 싶다. 프리랜서 상점을 만들거나 고정 알바를 잡고 싶은 건 아니다.**

The mirrored GM problem is:

> **끝내야 하는 일이 있지만, 사람을 찾고 비교하고 설명하고 관리하기에는 너무 작거나 불규칙하다.**

KAPAPI connects fragmented skill/time with unresolved work, while moving more of the supplier-search burden inside the platform.

## Why this is not just another freelancer marketplace

KAPAPI does not try only to make freelancer comparison better.

It aims to remove most of that comparison from the default GM experience.

```text
CONVENTIONAL
post work → compare people/proposals → choose → coordinate → search again on failure

KAPAPI
submit work → result/price/time offer → KAPAPI orchestrates → result
```

The underlying market still matters. PLAYERs and other execution resources create live supply signals, especially **PRICE × DELIVERY TIME**.

KAPAPI uses those signals internally for procurement, routing, backup and recovery.

## Initial wedge

KAPAPI is not simply a marketplace for the cheapest mechanical work.

Preferred early shape:

> **AI에게 그대로 맡기기엔 불안하고, 사람을 직접 찾아 계약하기엔 작은, 범위와 검수가 가능한 디지털 업무.**

Examples:

- multiple documents → specified fields → checked spreadsheet;
- messy data → defined cleanup/merge rules → verified workbook;
- PPT/report → specified formatting standard → finished deliverable;
- e-commerce assets/data → explicit rules → completed batch;
- research sources → predefined evidence table → source-linked result;
- defined CAD/drawing production support;
- small reproducible web/code fixes.

Architecture/CAD is a founder-domain testbed, not the brand or market boundary.

## Execution resources

Depending on the task, KAPAPI may internally use:

- human PLAYERs;
- AI models/agents;
- deterministic automation;
- specialist partners;
- AI + human hybrids;
- multiple PLAYERs / decomposed execution.

The GM-facing unit remains the **result**.

## Quote evolution

KAPAPI should not fake universal instant pricing.

```text
Assisted Quote
→ Market-informed Quote
→ Near-instant Quote only for categories that earn it with data
```

Early execution can be concierge/manual behind a simple UX. The purpose is to validate the product promise and collect real cost/time/failure data before automation.

## Core data flywheel

```text
request
→ structured SOW
→ quote
→ internal procurement
→ execution
→ QA / recovery
→ acceptance
→ better scope / quote / routing / recovery
```

The durable asset is not only who has good ratings. It is increasingly:

> **which execution configuration reliably completes which work under which price/time/risk conditions.**

## KAPAPI world terms

Plain language comes first. The game-like vocabulary is a secondary brand/UX layer.

- client / issuer = **GM**
- worker = **PLAYER**
- bounded task = **QUEST**
- price + delivery proposal = **BID**
- compensation = **REWARD**
- urgent QUEST = **TIME ATTACK**
- execution history = **LEVEL / EXP**
- accepted completion = **QUEST COMPLETE**

## Product principles

- Outcome UX for GM from the beginning.
- Task-first market for PLAYER.
- PRICE + DELIVERY TIME remains mandatory market data.
- Execution Contract = result + price + completion time + acceptance/recovery boundary.
- Concierge execution is acceptable as validation scaffolding, not a permanent agency model.
- Quote/routing/recovery automation is earned from transactions.
- AI is an execution resource, not a branding requirement or universal final judge.
- Category liquidity and completed-outcome economics matter more than total signups.
- Recovery should not send the supplier-search problem back to the GM.
- Architecture/CAD is a testbed, not the category.
- Strong SLA/legal responsibility is earned category by category.

## North Star

> **PLAYER에게는 일이 먼저 보이는 시장, GM에게는 사람을 고르지 않아도 되는 실행 서비스.**

Shortest form:

> **해야 할 일을 넣으면, 결과가 나온다.**

Canonical docs on this branch:

- `docs/ORIGIN_AND_GROWTH_THESIS.md`
- `docs/PRODUCT.md`
- `docs/ROADMAP.md`
- `docs/VALIDATION.md`
- `docs/PROTOTYPE_SPEC.md`
- `docs/PROGRAM_2026_MODU.md`
- `docs/LEGAL.md`
- `docs/DECISIONS.md`
