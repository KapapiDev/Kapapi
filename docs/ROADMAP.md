# KAPAPI Roadmap

Updated: 2026-09-03

## North Star

> **해야 할 일을 올리면, 결과로 돌아온다.**

KAPAPI's final destination is not a freelancer directory, a side-job board, a construction service or a marketplace limited to one class of professional work.

KAPAPI should become a **work-to-result execution layer** where a user can submit bounded work, from ordinary office/support work to skilled professional work, and receive a completed result with progressively less need to search, compare, coordinate, recover or manage execution.

“Bounded” means finishable and inspectable as a transaction. It does not mean permanently cheap, trivial or low-value.

```text
Task Marketplace
발주자: 업무 요청 → 실행 계약 승인 → 결과
작업자: 열린 업무 → 가격 + 완료시간 제안 → 배정 → 수행

        ↓ transaction + trust data

Trusted Work Market
KAPAPI learns who reliably completes which kinds of work

        ↓ enough category liquidity + performance data

Intelligent Routing
KAPAPI selects and assigns; the 발주자 approves the 실행 계약, never the worker
→ later KAPAPI also recovers when the first execution path fails

        ↓ repeat usage + proven recovery

Repeat Business Capacity
organizations put recurring external work through KAPAPI

        ↓ proven specification + routing + recovery + QA

Outcome / Execution Layer
work in → KAPAPI scopes/decomposes/executes-or-orchestrates/recovers/checks → result out
```

> **Early KAPAPI helps people pick up work. Mature KAPAPI helps anyone get work done.**

---

## Phase 0 — Now / 1R application readiness

### Goal

Demonstrate the smallest credible KAPAPI transaction loop without pretending selection is already automated at scale or that outcomes are guaranteed.

### Prototype story

```text
발주자: 파일 + 한 줄 설명
→ 작업 조건 정리
→ 실행 계약 (결과물 · 가격 · 완료시간 · 수정 경계 · 복구 경계) 승인
→ 결과 전달
→ 수락 / 수정 요청

카파피 내부: 작업자들이 업무 탐색 → 가격 + 완료시간 제안
→ 자격·마감·예산·보안 확인 → 선정 → 배정 → 수행
```

Plain-language value:

- 작업자: **할 수 있는 일을 골라서, 끝내고, 돈 번다.**
- 발주자: **사람을 찾지 말고, 할 일을 올린다.**
- North Star: **해야 할 일을 올리면, 결과로 돌아온다.**

No special glossary should be introduced.

### Must visibly demonstrate

- task-first discovery rather than storefront-first discovery
- ordinary bounded online-work examples plus one higher-skill example
- **가격 × 완료시간** as a signature visual moment on the 작업자 surface and `이용 방법`
- the 실행 계약 on the 발주자 surface, with the price's basis disclosed
- genuine urgent-work state
- task-relevant career/history and reliability
- KAPAPI selection with visible rationale and the excluded 제안
- execution and result acceptance/revision
- architecture/CAD only as one founder-domain proof case
- future path from transaction data to routing and execution layer

### Category presentation vs actual validation

The prototype may show several families:

- Data & Documents
- Content & Production
- Skilled Support

Actual transaction validation should start with **one or two category micro-markets at a time**.

### Explicitly defer

- production PG/escrow
- platform-held funds
- automatic settlement/tax engine
- broad category launch
- selection automated at scale without a concierge fallback (D-033.5)
- instant quoting outside proven standardized categories (D-033.6)
- authoritative AI price/quality judgment
- universal SLA/outcome guarantee

---

## Phase 1 — Prove the transaction market

### Goal

Prove real work can move through KAPAPI:

`unresolved → contract approved → proposals → selected/assigned → completed → accepted → paid`

### Supply hypothesis

Will people with spare time and useful skills:

- browse bounded work
- choose work matching skill + availability
- commit price + completion time
- complete reliably
- return for more work

### Demand hypothesis

Will clients externalize and pay for work currently:

- done personally
- delayed
- assigned internally despite capacity pressure
- sent to existing vendors
- left unresolved because outsourcing feels disproportionate

### Economic hypothesis

Can the first category micro-markets support:

- worker compensation
- payment costs
- clarification/support
- revision/rework
- dispute/recovery allowance
- client/worker acquisition
- eventual KAPAPI contribution

Do not assume more tiny transactions are automatically better. Find the **minimum viable transaction-value band** by category.

### Strongest proof

> **real external client + real work + real worker + completed and accepted result + real payment + repeat**

Founder-originated Architecture/CAD work can test supply and the transaction engine, but must remain separate from external client-demand evidence.

### Core metrics

- work-posting completion
- time to first valid proposal
- eligible proposals per task
- price / completion-time distributions
- selection/assignment rate
- completion rate
- on-time rate
- revision rate
- result acceptance
- worker effective earnings
- client management time
- support/recovery minutes and cost
- contribution after transaction costs
- repeat client rate
- repeat worker rate

The most important event is **accepted completion**, not registration.

### Gate

Continue only if both sides form viable transactions and at least one category shows plausible economics. Narrow, bundle, raise floors, change or kill categories if low-value transactions, explanation cost, weak supply, weak demand, quality cost or direct-trade leakage destroys repeat economics.

---

## Phase 2 — Trusted Work Market

### Goal

Turn completed transactions into useful evidence about **who can reliably complete what**.

Build production-grade versions of:

- universal accounts with contextual client/worker roles
- work/specification lifecycle
- files
- price + completion-time proposals
- assignment/contract record
- delivery / revision / acceptance
- compliant payment path
- two-sided reviews
- dispute/payment protection

### Task-specific trust

Worker signals increasingly include:

- verified identity
- relevant career
- category/task completion history
- on-time rate
- revision/rework rate
- failure/dispute history
- availability

### Category liquidity

Treat each category as a micro-market. Measure qualified active supply, repeat demand, proposal density, price/completion-time distributions, completion reliability, backup capacity and unit economics.

---

## Phase 3 — Intelligent Routing

### Goal

Make the selection KAPAPI already performs reliable enough to stand behind, using
evidence earned in Phases 1–2.

The client-facing flow does not change across this phase — it is already
`업무 요청 → 실행 계약 승인 → 결과` (D-033.1). What changes is what sits behind the
contract:

```text
concierge/manual procurement behind the contract
→ market-informed quoting from live 가격 × 완료시간 data
→ automated selection with disclosed criteria
→ automated re-assignment and recovery when the first path fails
```

D-033.5 is explicit that a manual back office is validation scaffolding, not the
permanent model, and D-033.6 that a near-instant quote is earned per category. So
the rungs here are about KAPAPI's own capability and margin, not about giving the
client more to decide. Client decision burden is already zero and does not
increase again.

Routing can consider:

1. hard eligibility / credentials / security
2. client deadline and commercial constraints
3. price + completion time
4. relevant career
5. task-specific history
6. on-time / revision / failure signals
7. availability
8. semantic task fit
9. backup/recovery capacity

AI may assist interpretation and fit. It should not be an opaque sole selector.

### Assist layer

Add:

- file + short instruction → structured work specification
- missing-information detection
- reusable templates
- market reference ranges
- contract/admin assistance
- risk detection
- backup worker preparation
- replacement/reassignment

Success condition:

> **Delegating through KAPAPI is materially easier than finding and managing execution manually.**

---

## Phase 4 — Repeat Business Capacity

### Goal

Move from isolated transactions to dependable external capacity for recurring work.

Add:

- repeat-work templates
- preferred/verified worker pools
- existing vendor import
- organization history
- reusable work specifications
- team/approval controls where needed
- availability awareness
- routing policies
- backup/replacement capacity
- consolidated contract/payment/work history

Desired mental shift:

> **“누구한테 맡기지?”** less, **“카파피로 보내.”** more.

---

## Phase 5 — Outcome / Execution Layer

### Goal

Prove category by category that KAPAPI can credibly support:

> **work in → result out**

The mature user should not need to care which marketplace mechanics or executor types were required behind the scenes.

Depending on work type, KAPAPI may execute or orchestrate through:

- human workers
- AI agents/models
- deterministic automation
- specialist partner organizations
- AI + human hybrid workflows
- multiple workers on decomposed tasks

KAPAPI can choose a credible execution path that best satisfies result, time, price, security and legal constraints.

### Outcome-layer functions

- task classification
- work-specification generation
- task decomposition
- executor selection / dispatch
- contract/security/admin
- progress monitoring
- late/failure detection
- replacement/recovery
- objective pre-delivery checks
- multi-executor aggregation
- delivery

### Strong guarantees are earned

Expand responsibility category by category only with sufficient:

- qualified supply or reliable automation
- repeat demand
- specification reliability
- predictable cost distribution
- delivery reliability
- backup liquidity
- recovery performance
- objective-enough QA
- viable unit economics after failure allowance
- legal/commercial clarity

---

## Durable stage gates

### Gate A — Transaction Market
Can real clients and workers repeatedly turn unresolved work into accepted paid results at viable transaction values?

### Gate B — Trusted Work Market
Does transaction history reliably distinguish who/what can complete which work?

### Gate C — Recommendation / Routing
Can KAPAPI reduce client decision burden without unacceptable regret or failure?

### Gate D — Repeat Capacity
Do organizations route recurring work through KAPAPI rather than using it only for one-off discovery?

### Gate E — Outcome Layer
Can KAPAPI credibly take responsibility for turning work requests into usable results and recovering when execution fails?

---

## Strategic summary

```text
PEOPLE PICK WORK
↓
WORK CREATES TRANSACTIONS
↓
TRANSACTIONS CREATE DATA
↓
DATA CREATES TRUST
↓
TRUST ENABLES RECOMMENDATION
↓
RECOMMENDATION ENABLES ROUTING
↓
ROUTING + RECOVERY ENABLE REPEAT CAPACITY
↓
HUMAN + AI + AUTOMATION + PARTNERS ENABLE OUTCOMES
```

> **Start with bounded work people can pick up and finish. Grow into an execution layer where users submit work and get the result back.**
