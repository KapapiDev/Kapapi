# KAPAPI Roadmap

Updated: 2026-09-03

## North Star

> **해야 할 일을 올리면, 결과로 돌아온다.**

KAPAPI's final destination is not a freelancer directory, a side-job board, a construction service or a marketplace limited to one class of professional work.

KAPAPI should become a **work-to-result layer** where a user can submit a bounded task, from ordinary office/support work to skilled professional work, and receive a completed result with progressively less need to search, compare, coordinate, recover or manage execution.

The product evolves by increasing how much responsibility KAPAPI can reliably take between **work request** and **completed result**.

```text
Task Marketplace
GM posts work → PLAYER chooses QUEST → PRICE × DELIVERY BID → selection → execution → result

        ↓ transaction + trust data

Trusted Work Market
KAPAPI learns who reliably completes which kinds of work

        ↓ enough category liquidity + performance data

Intelligent Recommendation / Routing
KAPAPI ranks/recommends → GM confirms → later KAPAPI routes by default with override/recovery

        ↓ repeat usage + proven recovery

Repeat Business Capacity
organizations put recurring external work through KAPAPI

        ↓ proven specification + routing + recovery + QA

Outcome Layer
work in → KAPAPI scopes/decomposes/executes-or-orchestrates/recovers/checks → result out
```

> **Early KAPAPI helps people pick up work. Mature KAPAPI helps anyone get work done.**

The marketplace is the supply/data bootstrap for the Outcome Layer.

---

## Phase 0 — Now / 1R application readiness

### Goal

Demonstrate the smallest credible KAPAPI transaction loop without pretending that universal automatic routing or outcome guarantees already exist.

### Prototype story

```text
GM has bounded work
→ creates a QUEST
→ PLAYERs discover it
→ PLAYERs BID PRICE + DELIVERY TIME
→ KAPAPI filters/ranks and recommends
→ GM confirms
→ work is completed
→ GM accepts/revises the result
```

The judge should understand the plain-language value before KAPAPI terminology:

- PLAYER: **할 수 있는 일을 골라서, 끝내고, 돈 번다.**
- GM: **해야 할 일을 올리면, 누군가 끝내준다.**

Then introduce GM / PLAYER / QUEST / BID / REWARD / TIME ATTACK / LEVEL / EXP.

### Must visibly demonstrate

- task-first discovery rather than storefront-first discovery
- ordinary bounded online-work examples across categories
- PRICE × DELIVERY trade-offs
- TIME ATTACK as a genuine deadline state
- task-relevant trust/history
- KAPAPI recommendation with visible rationale
- GM confirmation, execution and result acceptance/revision
- architecture/CAD only as one higher-skill founder-domain proof case
- the future path from transaction data to routing and Outcome Layer

### Explicitly defer

- production PG/escrow
- platform-held funds
- automatic settlement/tax engine
- broad category launch
- universal automatic PLAYER selection
- authoritative AI price/quality judgment
- SLA/outcome guarantee

---

## Phase 1 — Prove the transaction market

### Goal

Prove that real work can move through KAPAPI from:

`unresolved → posted → bid → selected/assigned → completed → accepted → paid`

### Supply hypothesis

Will people with spare time and useful skills actually:

- browse bounded QUESTs
- choose work matching skill + availability
- commit PRICE + DELIVERY
- complete reliably
- return for more QUESTs

### Demand hypothesis

Will GMs externalize and pay for work currently:

- done personally
- delayed
- assigned internally despite capacity pressure
- sent to existing vendors
- left unresolved because outsourcing feels disproportionate

### Strongest proof

> **real GM + real QUEST + real PLAYER + real completion + accepted result + real payment**

Repeat behavior is stronger still.

Founder-originated Architecture/CAD QUESTs can test supply and the transaction engine, but must remain separate from external GM-demand evidence.

### Core metrics

- QUEST creation completion
- time to first valid BID
- eligible BIDs per QUEST
- PRICE / DELIVERY distributions
- selection/assignment rate
- completion rate
- on-time rate
- revision rate
- result acceptance
- PLAYER effective earnings
- GM management time
- repeat GM rate
- repeat PLAYER rate

The most important event is **QUEST COMPLETE**, not registration.

### Gate

Continue only if both sides form viable transactions. Narrow, change or kill the mechanism if explanation cost, quality cost, weak supply, weak demand or direct-trade leakage destroys repeat economics.

---

## Phase 2 — Trusted Work Market

### Goal

Turn completed transactions into useful evidence about **who can reliably complete what**.

Build production-grade versions of:

- universal accounts with contextual GM/PLAYER roles
- QUEST/SOW lifecycle
- files
- PRICE + DELIVERY BID
- assignment/contract record
- delivery / revision / acceptance
- compliant payment path
- two-sided reviews
- dispute/payment protection

### Task-specific trust

PLAYER signals increasingly include:

- verified identity
- relevant career
- category/task completion history
- on-time rate
- revision/rework rate
- failure/dispute history
- availability
- LEVEL / EXP

### Category liquidity

Treat each category as a micro-market. Measure qualified active supply, repeat demand, BID density, price/delivery distributions, completion reliability and backup capacity.

---

## Phase 3 — Intelligent Recommendation / Routing

### Goal

Reduce GM decision burden using evidence earned in Phases 1–2.

Evolution:

```text
GM chooses manually
→ KAPAPI ranks/recommends
→ GM confirms recommendation
→ KAPAPI routes by default with override
→ KAPAPI routes + recovers when execution fails
```

Routing can consider:

1. hard eligibility / credentials / security
2. GM deadline and commercial constraints
3. PRICE + DELIVERY
4. relevant career
5. task-specific history
6. on-time / revision / failure signals
7. availability
8. semantic task fit
9. backup/recovery capacity

AI may assist interpretation and fit. It should not be an opaque sole selector.

### Assist layer

Add:

- file + short instruction → structured QUEST/SOW
- missing-information detection
- reusable task templates
- market reference ranges
- contract/admin assistance
- risk detection
- backup PLAYER preparation
- replacement/reassignment

Success condition:

> Delegating through KAPAPI is materially easier than finding and managing execution manually.

---

## Phase 4 — Repeat Business Capacity

### Goal

Move from isolated marketplace transactions to dependable external capacity for recurring work.

Add:

- repeat QUEST templates
- preferred/verified PLAYER pools
- existing vendor import
- organization history
- reusable SOW patterns
- team/approval controls where needed
- availability awareness
- routing policies
- backup/replacement capacity
- consolidated contract/payment/work history

Desired mental shift:

> **“누구한테 맡기지?”** less, **“카파피로 보내.”** more.

---

## Phase 5 — Outcome Layer

### Goal

Prove category by category that KAPAPI can credibly support:

> **work in → result out**

The mature user should not need to care which marketplace mechanics or executor types were required behind the scenes.

### Resource-agnostic execution

Depending on task type, KAPAPI may execute or orchestrate through:

- human PLAYERs
- AI agents/models
- deterministic automation
- specialist partner organizations
- AI + human hybrid workflows
- multiple PLAYERs working on decomposed sub-QUESTs

KAPAPI can choose the credible execution path that best satisfies result, time, price, security and legal constraints.

### Outcome-layer functions

- task classification
- SOW generation
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

Do not promise universal outcome/SLA guarantees because the vision is broad.

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

## Category expansion

KAPAPI is **category-independent in vision, category-specific in execution**.

Potential ladder:

```text
ordinary bounded office/support work
→ skilled office/production work
→ professional support work
→ repeat organizational workflows
→ decomposable multi-step work
```

Candidate categories:

- spreadsheet/data
- document/PPT
- e-commerce operations
- image/media editing
- language/content
- design/production
- architecture/CAD support
- small software/web fixes

Open a new category only when KAPAPI can protect the transaction loop in that category.

---

## Durable stage gates

### Gate A — Transaction Market
Can real GMs and PLAYERs repeatedly turn unresolved work into accepted paid results?

### Gate B — Trusted Work Market
Does transaction history reliably distinguish who/what can complete which work?

### Gate C — Recommendation / Routing
Can KAPAPI reduce GM decision burden without unacceptable regret or failure?

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

> **KAPAPI starts by making it easier to pick up and complete work, and grows into a system where you submit work and get the result back.**
