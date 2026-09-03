# KAPAPI

> **해야 할 일을 올리면, 결과로 돌아온다.**

KAPAPI is a **work execution platform**: the client submits work, approves an execution contract, and receives a result. The contract defines deliverables, price, completion time, revision boundary and recovery boundary. A task-first worker market, AI, automation and partners supply KAPAPI's internal execution engine.

It starts from a simple behavior:

- someone has spare time and usable skills and wants a piece of online work they can finish and get paid for,
- someone else has bounded work that needs to be finished but is too irregular, urgent or disproportionate for hiring or heavyweight outsourcing.

KAPAPI puts the **work first**.

Instead of asking workers to create storefronts and wait to be discovered, real work is posted first. Workers choose suitable work and submit two commitments:

- **가격** — how much they will do it for
- **완료시간** — how long they commit to take after assignment

The initial loop is:

```text
발주자가 파일과 한 줄 설명을 올림
→ 카파피가 작업 조건(SOW) 정리
→ 실행 계약: 결과물 + 가격 + 완료시간 + 수정 경계 + 복구 경계
→ 발주자 승인
→ 카파피가 내부적으로 조달·배정·수행
→ 결과 전달
→ 수락 또는 수정 요청
```

발주자 기준으로는 세 노드입니다 — **발주자 → 카파피 → 결과**. 제안과 선정은 발주자가
지나가는 단계가 아니라 가운데 노드 안에서 일어납니다 (D-033.1, D-035).

작업자 쪽에서 같은 거래는 이렇게 보입니다:

```text
열린 업무 탐색
→ 가격 + 완료시간 제안
→ 배정
→ 수행
→ 결과 제출
→ 작업대금 + 작업이력
```

The client-facing summary applies from the first prototype:

```text
업무 입력
→ KAPAPI
→ 결과 반환
```

## What “bounded work” means

KAPAPI does **not** define its market by cheap, trivial or low-value microtasks.

The useful boundary is work that can be scoped and completed as a clear transaction:

```text
입력자료
→ 정의된 업무
→ 명확한 결과물
→ 완료
```

That can include an ordinary office task or a skilled professional-support task. The founder-origin involved wanting small after-work tasks, but that is the entry insight, not the permanent market ceiling.

## Why this is not just another freelancer directory

Traditional platforms commonly start from a person, profile or service listing.

KAPAPI starts from **work that already needs to be done**.

Marketplace activity then creates:

- real price distributions
- committed completion-time behavior
- task-specific completion history
- on-time / revision / failure data
- category liquidity
- availability
- replacement/recovery history

That evidence enables KAPAPI to evolve:

```text
Task Marketplace
→ Trusted Work Market
→ Intelligent Recommendation / Routing
→ Repeat Business Capacity
→ Outcome / Execution Layer
```

This ladder describes KAPAPI's internal capability. The marketplace is the supply and data engine behind the current contract-and-result product; quote speed, routing reliability and recovery capacity improve with evidence.

## Founder-origin problem

KAPAPI began from a personal problem:

> **퇴근 후 남는 시간에 내가 할 수 있는 작은 온라인 업무를 골라서 끝내고 돈을 벌고 싶다. 프리랜서 상점을 만들거나 고정 알바를 잡고 싶은 건 아니다.**

The mirrored client problem is:

> **누군가 끝내야 하는 업무가 있는데, 직원을 더 뽑거나 복잡한 외주 절차를 밟기에는 애매하다.**

KAPAPI connects unused time + skill with unresolved work + insufficient capacity.

## Terminology

KAPAPI intentionally uses ordinary work-market language:

- **발주자** — work issuer/client
- **작업자** — person who performs the work
- **업무** — bounded unit of work
- **제안** — price + committed completion-time offer
- **작업대금** — compensation
- **긴급 업무** — work where deadline pressure matters
- **작업이력 / 신뢰지표** — completion history, on-time rate, revision rate and related evidence
- **업무 완료** — accepted completion

No separate glossary or fictional role system is required to use KAPAPI.

## What work fits first

Strong early work is digitally transferable, bounded, inspectable and revisable.

### Data & Documents

- spreadsheet/data cleanup
- document formatting and structured entry
- research/data organization
- PPT cleanup

### Content & Production

- image editing
- product listing work
- translation/proofreading
- subtitle/cut editing

### Skilled Support

- CAD/drawing support
- rendering
- small web/code fixes

Actual validation should open categories narrowly and earn expansion with repeat demand, qualified supply and viable economics.

Architecture/CAD is a founder-domain testbed, not the market identity.

## Signature market mechanism

The memorable KAPAPI market moment is the trade-off between **가격 × 완료시간**, explained on the worker surface and in `이용 방법`. The following table illustrates internal procurement; the client approves one execution contract.

| 작업자 | 가격 | 완료시간 |
| --- | ---: | ---: |
| A | ₩32,000 | 5시간 |
| B | ₩40,000 | 2시간 |
| C | ₩55,000 | 45분 |

Cheapest does not automatically win. Fastest does not automatically win. Relevant experience, similar-work history, reliability, deadline and client constraints also matter.

## Selection today, routing tomorrow

Preferred early posture:

```text
제안 도착
→ 필수요건 확인
→ 작업이력 / 적합도 / 가격 × 완료시간 정렬
→ KAPAPI 선정
→ 작업자 배정
```

이 전 과정은 발주자 화면에 나타나지 않습니다. 발주자는 실행 계약을 승인했고, 다음에 보는
것은 진행 상황과 결과입니다. 선정 근거와 필요한 실행자 정보는 설명용 기록으로 제공하며 선택을 요구하지 않습니다.

As transaction history becomes reliable, KAPAPI can progressively move toward default routing, backup/replacement and recovery.

Client-side principle:

> **사람을 찾지 말고, 할 일을 올린다.**

Worker-side principle:

> **할 수 있는 일을 골라서, 끝내고, 돈 번다.**

## Outcome / Execution Layer

KAPAPI's client-facing unit is already the completed result. The breadth and reliability of the internal execution pool grow category by category.

Depending on the task, execution may use:

- human workers
- AI agents/models
- deterministic automation
- specialist partners
- AI + human hybrid workflows
- multiple workers on decomposed tasks

KAPAPI's long-term role is therefore broader than human matching. It becomes the execution layer between unresolved work and a completed result.

## Economic guardrail

KAPAPI must not win by creating an ever-cheaper microtask market.

A category is attractive only when transaction value can support worker compensation, payment, support, revisions, disputes, recovery and acquisition while leaving viable platform economics.

Do not hard-code a universal minimum payment before real data exists. Learn the minimum viable transaction-value band by category.

## Product principles

- Task first, not profile first.
- Bounded means finishable and inspectable, not necessarily cheap or trivial.
- Every proposal includes price + committed completion time.
- Fixed-price/result-based work first.
- Use ordinary work terminology throughout.
- Client/worker are contextual transaction roles, not permanent account types.
- Clear scope before aggressive automation.
- AI assists before it judges.
- Trust is task-specific and two-sided.
- Category liquidity matters more than total member count.
- Architecture/CAD is a testbed, not the category.
- Avoid low-value work where transaction costs dominate value.
- Strong routing and SLA promises are earned from evidence.
- The strongest proof is **real paid work completed and accepted**, not registrations.

## Current North Star

> **Clients approve the contract and receive the result from the start. Real executions improve KAPAPI's quoting, routing and recovery capability.**

Or, in the shortest form:

> **해야 할 일을 올리면, 결과로 돌아온다.**

See `docs/ORIGIN_AND_GROWTH_THESIS.md`, `docs/DECISIONS.md`, `docs/PRODUCT.md` and `docs/ROADMAP.md` for the current canon.
