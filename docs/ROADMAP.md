# KAPAPI Roadmap

Updated: 2026-09-03

## North Star

> **해야 할 일을 넣으면, 결과가 나온다.**

KAPAPI does not need to wait until the end of the roadmap to look like an outcome product.

The new canonical direction is:

> **Outcome UX from the GM's first interaction; execution automation is earned underneath it over time.**

PLAYERs still experience a task-first market. GM-facing freelancer selection is progressively internalized from the beginning.

```text
GM
work request
→ RESULT + PRICE + COMPLETION TIME
→ approve
→ result

KAPAPI underneath
manual/concierge execution
→ internal PLAYER market
→ market-informed quote/routing
→ recovery/QA automation
→ human + AI + automation orchestration
```

The roadmap therefore evolves the **execution engine**, not the user's need to become better at shopping for freelancers.

---

## Phase 0 — Now / 1R application and prototype realignment

### Goal

Demonstrate the smallest credible **work-to-result** interaction without pretending that quote, routing, QA and recovery are already fully automated.

### GM prototype story

```text
GM uploads files / describes work
→ KAPAPI structures SOW
→ KAPAPI shows one execution offer
   RESULT + PRICE + COMPLETION TIME
→ GM accepts
→ KAPAPI executes/orchestrates behind the scenes
→ result delivered
→ accept / revise
```

### PLAYER prototype story

```text
PLAYER opens real QUEST board
→ chooses suitable work
→ commits PRICE + DELIVERY TIME
→ gets assigned / accepts offer
→ executes
→ submits
→ earns + builds task-specific history
```

### Must visibly demonstrate

- no seller storefront as the primary product;
- GM does not need to compare PLAYERs in the default path;
- clear Execution Contract: result, price, completion time, revision boundary;
- PLAYER task-first market and PRICE × DELIVERY mechanism;
- KAPAPI internal procurement/routing concept;
- one realistic recovery example;
- human + AI + automation as possible internal execution resources;
- Architecture/CAD as one founder-domain case only;
- the narrow early category logic: AI-alone is risky, human search is disproportionate, scope is bounded and checkable.

### Explicitly defer

- universal instant quote;
- production escrow/custody;
- broad category launch;
- universal SLA/outcome guarantee;
- autonomous AI final quality judgment;
- regulated professional execution without category-specific legal structure;
- full automatic recovery across every task type.

---

## Phase 1 — Concierge Execution Market

### Goal

Prove the user promise manually before automating the engine.

GM sees:

`request → quote/time → approve → result`

Behind the scenes KAPAPI may manually perform:

- SOW clarification;
- supply search;
- internal BID/offer collection;
- quote construction;
- routing;
- deadline monitoring;
- QA;
- recovery/reassignment.

This is allowed only as **validation scaffolding**. The goal is not to become a permanent manual agency.

### Primary business questions

1. Will external GMs pay to avoid freelancer search/selection/coordination?
2. Will PLAYERs accept bounded QUESTs at viable PRICE × DELIVERY economics?
3. Can KAPAPI predict a safe enough price and completion time?
4. Can the task be specified before execution without excessive clarification?
5. Can failures be recovered without destroying margin?
6. Will GMs repeat the behavior?

### Strongest proof

> **external GM + own money + no PLAYER shopping + accepted result + positive completed-outcome contribution + repeat**

### Core metrics

- request → valid SOW time;
- quote acceptance rate;
- time to secure execution;
- internal PRICE × DELIVERY distributions;
- completion / on-time / revision rate;
- GM management minutes;
- recovery rate and recovery cost;
- support/QA minutes;
- completed-outcome contribution margin;
- repeat GM / repeat PLAYER rate.

### Gate

Do not scale a category if support + QA + recovery grow roughly linearly with GM revenue and leave no automation/margin path.

---

## Phase 2 — Structured Internal Market

### Goal

Turn concierge knowledge into repeatable transaction structure.

Build production-grade foundations for:

- structured QUEST / SOW;
- Execution Contract;
- files and security boundary;
- PLAYER eligibility and task-specific history;
- open QUEST discovery where useful;
- targeted Offers;
- PRICE + DELIVERY BID;
- assignment/acceptance;
- delivery/revision/acceptance;
- execution event history;
- failure/recovery records;
- compliant payment/contract architecture.

### Supply models

Use by category:

- open BID market;
- targeted offers;
- hybrid.

PLAYER supply remains independent and task-first even when the GM never sees the bidding mechanics.

### Category liquidity

Track separately per category:

- external paid demand;
- qualified active supply;
- response speed;
- accepted internal price/time range;
- backup capacity;
- predictable scope;
- outcome margin.

---

## Phase 3 — Market-informed Quote + Routing

### Goal

Replace operator intuition with transaction evidence.

Quote model uses:

```text
expected execution cost
+ urgency / scarcity
+ QA and revision expectation
+ recovery reserve
+ payment/support variable cost
+ KAPAPI margin
= GM execution price
```

Completion-time model uses:

```text
live available capacity
+ predicted execution duration
+ QA time
+ recovery buffer
= offered completion time
```

Routing considers:

- eligibility/security;
- task-specific history;
- PRICE × DELIVERY;
- availability;
- on-time/revision/failure data;
- expected recovery risk;
- AI/automation alternative cost;
- backup capacity.

### Success condition

> KAPAPI can quote and route common tasks with materially less operator intervention while maintaining or improving acceptance, reliability and margin.

---

## Phase 4 — Recovery and Execution Automation

### Goal

Make KAPAPI valuable even when the first execution path fails.

Build:

- late-risk detection;
- backup executor pre-selection;
- reassignment rules;
- parallel recovery where economics justify it;
- automated objective preflight;
- category-specific QA workflows;
- exception queues rather than manual review of every task.

Target behavior:

```text
executor fails
→ KAPAPI detects
→ alternate resource activated
→ GM does not restart supplier search
→ result delivered or clear recovery/refund path
```

### Gate

Recovery must improve GM value without making failure costs structurally larger than category margin.

---

## Phase 5 — AI / Automation Margin Layer

### Goal

Use technology to reduce cost and turnaround where it improves completed outcomes.

Possible execution patterns:

- deterministic automation only;
- AI only where reliably bounded;
- AI first pass + PLAYER verification;
- PLAYER execution + automated preflight;
- multi-stage automation + human exception handling;
- decomposed multi-PLAYER workflows.

The metric is not “AI usage.”

Measure:

- cost per accepted outcome;
- human minutes per outcome;
- error/revision rate;
- completion speed;
- GM acceptance;
- recovery cost;
- contribution margin.

---

## Phase 6 — Repeat Business Capacity

### Goal

Move from one-off delegation to a habitual work-execution layer.

Add:

- repeat Execution Contract templates;
- reusable SOWs;
- organization history;
- preferred/verified internal supply pools;
- existing vendor import where useful;
- team approval rules;
- recurring task triggers;
- availability awareness;
- consolidated contracts/payment/work evidence;
- account-level routing and security policies.

Desired mental shift:

> **“누구한테 맡기지?” → “카파피로 보내.”**

---

## Phase 7 — Work Execution Infrastructure

### Goal

Expand category by category until KAPAPI can credibly support:

```text
work in
→ scope
→ quote
→ procure
→ execute
→ check
→ recover
→ result out
```

Execution can combine:

- human PLAYERs;
- AI agents/models;
- deterministic automation;
- specialist partners;
- hybrid and multi-PLAYER pipelines.

The mature moat is not a prettier marketplace. It is the accumulated ability to predict and manage:

> **what execution configuration completes what work under what price/time/risk conditions.**

---

## Category strategy

KAPAPI is **category-independent in vision, category-specific in execution**.

Preferred first-category criteria:

- bounded digital inputs/outputs;
- enough WTP above fully commoditized automation;
- direct human search feels disproportionate;
- AI/automation can lower cost but accountability/verification still matters;
- objective or semi-objective completion checks;
- multiple potential suppliers/resources;
- low irreversible liability;
- repeat or batch behavior;
- completed-outcome margin can survive QA/recovery.

Potential ladder:

```text
repeatable document/data production
→ skilled office/production support
→ technical/professional support with bounded responsibility
→ recurring organizational workflows
→ decomposable multi-step work
```

Do not open a category merely because many users or PLAYERs exist globally.

---

## Durable stage gates

### Gate A — Outcome Demand
Will GMs pay to buy the completed-work commitment instead of shopping for a worker?

### Gate B — Supply / Liquidity
Can KAPAPI repeatedly secure credible execution inside the promised price/time window?

### Gate C — Unit Economics
Does accepted completed work leave positive contribution after execution, QA, support and recovery?

### Gate D — Repeatability
Can the same category be specified, quoted and fulfilled repeatedly with declining operator effort?

### Gate E — Routing / Recovery
Can KAPAPI internalize executor selection and failure recovery without unacceptable regret/cost?

### Gate F — Automation Leverage
Can AI/automation reduce marginal cost and speed without degrading trust?

### Gate G — Expansion
Do repeated GMs route more kinds or more volume of work through KAPAPI?

---

## Strategic summary

```text
OUTCOME UX FIRST
↓
CONCIERGE EXECUTION
↓
TASK-FIRST PLAYER MARKET
↓
REAL PRICE / DELIVERY / FAILURE DATA
↓
MARKET-INFORMED QUOTE + ROUTING
↓
RECOVERY + QA AUTOMATION
↓
AI / AUTOMATION MARGIN
↓
REPEAT BUSINESS CAPACITY
↓
WORK EXECUTION INFRASTRUCTURE
```

> **The GM experience starts simple. The engine underneath earns the right to become automatic.**
