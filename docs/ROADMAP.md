# KAPAPI Roadmap

Updated: 2026-09-03

## North Star

> **해야 할 일을 올리면, 결과로 돌아온다.**

KAPAPI's final destination is not a freelancer directory, a side-job board, or a marketplace limited to one class of professional work.

KAPAPI should become a work-to-result layer where a user can submit a bounded task — from small office work to skilled professional work — and receive a completed result with progressively less need to search, select, coordinate, recover, or manage the people doing it.

The product evolves by increasing how much responsibility KAPAPI can reliably take between **work request** and **completed result**.

```text
Task Marketplace
GM posts work → PLAYER chooses suitable QUEST → PRICE × DELIVERY BID → execution → result

        ↓ transaction + trust data

Trusted Work Market
KAPAPI learns who can reliably complete which kinds of work

        ↓ enough category liquidity + performance data

Intelligent Routing
GM submits work → KAPAPI recommends/routes suitable PLAYER → execution/recovery → result

        ↓ proven routing + recovery + QA

Outcome Layer
work in → KAPAPI scopes/routes/coordinates/recovers/checks → result out
```

The underlying thesis is simple:

> **Early KAPAPI helps people pick up work. Mature KAPAPI helps anyone get work done.**

The marketplace is not a temporary detour. It is the mechanism that creates the supply, price, delivery, fit, trust and failure/recovery data required for the final Outcome Layer.

---

## Phase 0 — Now / 1R application readiness

### Goal

Pass the 1R idea review of the 2026 모두의 창업 프로젝트 while demonstrating the smallest credible KAPAPI transaction loop.

The pre-1R goal is **not** a production marketplace and **not** to pretend auto-routing is already solved.

### Prototype story

The prototype should make this loop immediately understandable:

```text
GM has work that needs to be finished
→ creates a QUEST
→ suitable PLAYERs discover it
→ PLAYERs commit PRICE + DELIVERY TIME
→ a PLAYER is selected/assigned
→ work is completed
→ GM receives and accepts/revises the result
```

The judge should be able to understand both sides without knowing KAPAPI terminology first:

- PLAYER: **할 수 있는 일을 골라서, 끝내고, 돈 번다.**
- GM: **해야 할 일을 올리면, 누군가 끝내준다.**

Then introduce:

- GM
- PLAYER
- QUEST
- BID
- REWARD
- TIME ATTACK
- LEVEL / EXP

### Core screens

1. Landing / plain-language service explanation / GM·PLAYER entry
2. QUEST discovery feed for PLAYERs
3. GM QUEST creation / input + desired result + deadline + budget/constraints
4. PLAYER QUEST detail + PRICE / DELIVERY TIME BID
5. BID/assignment state that visibly demonstrates the market mechanism
6. PLAYER profile with relevant career + LEVEL / EXP / completion history
7. Simple execution / delivery state
8. GM result inspection: accept / revision request

### Must visibly demonstrate

- task-first discovery rather than PLAYER storefront-first discovery
- at least one ordinary bounded online-work example
- one higher-skill founder-domain example such as architecture/CAD
- PRICE × DELIVERY trade-offs, e.g. `50,000 / 48H`, `70,000 / 24H`, `100,000 / 6H`
- TIME ATTACK
- relevant career/trust signals
- result delivery and completion
- a glimpse of the future: KAPAPI can eventually recommend or auto-route using accumulated transaction data

### Selection in the prototype

Do not make universal auto-routing a prerequisite for the first transaction.

Early selection may be:

- GM selection from lightweight BIDs
- KAPAPI recommendation with GM confirmation
- concierge/manual KAPAPI routing for an experiment

The purpose is to learn what selection data actually predicts a successful result.

The long-term product should progressively remove this decision burden from the GM as evidence permits.

### Prototype quality targets

- design: high
- core transaction clarity: very high
- task-first identity: unmistakable
- backend completeness: low
- transaction breadth: intentionally narrow
- routing intelligence: future direction / limited demonstration
- outcome guarantee: not claimed

### Explicitly defer pre-1R

- production PG/escrow
- platform-held funds
- automatic settlement/tax engine
- full identity/career verification automation
- advanced messaging/dispute center
- native mobile apps
- broad category launch
- universal automatic PLAYER selection
- AI as final subjective quality judge
- SLA/result guarantee

If a real test transaction occurs before production payments exist:

- KAPAPI fee: 0
- GM ↔ PLAYER direct payment
- KAPAPI does not custody funds

---

## Phase 1 — Prove the transaction loop

### Goal

Prove that real work can move through KAPAPI from **unresolved → posted → bid/assigned → completed → accepted**.

The dominant early risk is not signup count. It is whether the two sides form a functioning transaction market.

### Supply hypothesis

Test whether people with spare time and useful skills will actually:

- browse bounded online QUESTs
- choose work that fits their capability and availability
- submit PRICE × DELIVERY commitments
- complete the work reliably
- return for more QUESTs

PLAYERs should not need to create a storefront, build an audience or commit to fixed shifts merely to earn from a bounded task.

### Demand hypothesis

Test whether GMs will submit and pay for work that is currently:

- done personally
- delayed
- assigned internally despite capacity pressure
- sent to existing vendors
- left unresolved because outsourcing feels disproportionate

### Transaction proof

Strong early evidence is:

> **real GM + real QUEST + real PLAYER + real completion + accepted result + real payment**

Repeat use strengthens the evidence substantially.

### Founder-domain testbed

Architecture/CAD remains useful because founder domain knowledge enables realistic tasks, credible interviews and deliverable inspection.

It is a testbed, not the market definition.

Use founder-originated QUESTs to test PLAYER response and the transaction engine, but separate them from external GM-demand evidence.

### Metrics

Track:

- QUEST creation completion
- views → valid BID conversion
- time to first valid BID
- eligible BIDs per QUEST
- PRICE distribution
- DELIVERY distribution
- assignment rate
- completion rate
- on-time rate
- revision rate
- result acceptance
- PLAYER effective earnings
- GM management time
- repeat GM rate
- repeat PLAYER rate

The most important event is **QUEST COMPLETE**, not registration.

---

## Phase 1 Gate — Go / Pivot / Kill

Continue only if evidence supports that:

- GMs will externalize bounded work at viable prices
- useful PLAYERs will pick up that work
- PRICE × DELIVERY creates meaningful market choices
- task definitions can be made clear enough for remote execution
- trust/security can become sufficient for real delegation
- both sides can reach acceptable economics
- successful QUESTs repeat

Change the market mechanism, narrow categories, expose more GM control, or kill the current approach if real transactions repeatedly show that:

- GMs still prefer self-completion even when outsourcing friction is reduced
- useful PLAYER supply does not respond at viable prices
- explanation/coordination cost erases the value
- quality/revision/dispute costs are structurally too high
- PRICE × DELIVERY does not improve matching or urgency handling
- repeat behavior collapses into direct off-platform relationships without enough platform value

---

## Phase 2 — Trusted Work Market

### Goal

Turn completed QUESTs into a trustworthy market and learn **who reliably completes what kind of work**.

### Build the transaction system

Add production-grade versions of:

- accounts with GM/PLAYER transaction roles
- QUEST/SOW lifecycle
- file handling
- BID: PRICE + committed DELIVERY TIME
- assignment/contract record
- workroom / messages / files / audit history
- delivery
- revision
- acceptance
- settlement through compliant payment infrastructure
- two-sided review
- dispute/payment-protection process

### Build task-specific trust

PLAYER signals should increasingly include:

- verified identity
- relevant career
- category/task-specific completion history
- on-time rate
- revision/rework rate
- failure/dispute history
- availability
- LEVEL / EXP

The purpose of LEVEL / EXP is not decoration. Transaction history should become useful evidence for future recommendation and routing.

### Learn category liquidity

Treat each work category as a micro-market.

Measure:

- repeat GM demand
- qualified active supply
- BID density
- price/delivery distributions
- time to assignment
- completion reliability
- backup capacity

PLAYER count alone is not liquidity.

---

## Phase 3 — Intelligent Routing

### Goal

Use accumulated transaction and performance data to reduce the GM's need to choose and coordinate PLAYERs.

Evolution:

```text
GM manually selects
→ KAPAPI ranks/recommends
→ GM confirms recommendation
→ KAPAPI routes by default with override/recovery
```

Routing can consider:

1. hard eligibility / credential / security requirements
2. GM deadline and commercial constraints
3. PRICE + DELIVERY
4. relevant career
5. task-specific completion history
6. on-time / revision / failure signals
7. current availability
8. semantic task fit

AI may assist with task interpretation and fit, but should not be an opaque sole authority.

### Assist layer

As data and category knowledge improve, add:

- file + short instruction → structured QUEST/SOW
- missing-information detection
- reusable task templates
- market reference price/delivery ranges
- security requirement inference
- contract/admin automation
- late-risk detection
- backup PLAYER preparation
- replacement/reassignment

Success condition:

> **Delegating through KAPAPI becomes materially easier than finding and managing a worker manually.**

---

## Phase 4 — Repeat Business Capacity

### Goal

Move from isolated marketplace transactions to a dependable external capacity layer for recurring business work.

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

At this stage a GM should increasingly think:

> **“Who can I find?”** less, and **“Put this through KAPAPI.”** more.

This is the bridge from marketplace behavior to infrastructure behavior.

---

## Phase 5 — Outcome Layer

### Goal

Prove category by category that KAPAPI can reliably support:

> **work in → result out**

The mature user should not need to care which marketplace mechanics, PLAYERs, routing decisions or recovery operations were required behind the scenes.

Depending on task type, KAPAPI may handle:

- task classification
- scope/SOW generation
- decomposition into multiple QUESTs
- routing or dispatch
- contracts/security/admin
- progress monitoring
- late/failure detection
- replacement/recovery
- objective pre-delivery checks
- aggregation of multi-PLAYER outputs
- delivery

The final product promise can expand from small work to skilled professional work only where KAPAPI has enough evidence and operating capability to make the promise credible.

### Strong guarantees are earned

Do not promise universal outcome/SLA guarantees merely because the vision is broad.

Expand responsibility category by category when there is sufficient:

- qualified supply
- repeat demand
- specification reliability
- predictable price/cost distribution
- delivery reliability
- backup liquidity
- recovery performance
- objective-enough QA
- viable unit economics after failure allowance

As KAPAPI takes more responsibility for routing, QA and outcomes, legal/commercial responsibility must be re-reviewed.

---

## Category expansion

KAPAPI is category-independent in vision but category-specific in execution.

Potential ladder:

```text
ordinary bounded office/support work
→ skilled office/production work
→ professional support work
→ repeat organizational workflows
→ decomposable multi-step work
```

Candidate categories may include:

- spreadsheet/data work
- document/PPT production
- e-commerce operations
- image/media editing
- language/content work
- design/production
- architecture/CAD support
- simple software/web fixes

Open a new category only when KAPAPI can protect the quality of the transaction loop in that category.

---

## Durable stage gates

### Gate A — Transaction Market

Can real GMs and PLAYERs repeatedly turn unresolved work into accepted results?

### Gate B — Trusted Work Market

Does transaction history reliably distinguish who can complete which work?

### Gate C — Intelligent Routing

Can KAPAPI recommendations/routing reduce GM decision burden without unacceptable regret or failure?

### Gate D — Repeat Capacity

Do organizations begin routing recurring work through KAPAPI rather than treating it as one-off freelancer discovery?

### Gate E — Outcome Layer

Can KAPAPI credibly take responsibility for converting work requests into usable results with recovery when execution fails?

---

## Strategic summary

```text
PEOPLE PICK WORK
↓
WORK CREATES DATA
↓
DATA CREATES TRUST
↓
TRUST ENABLES ROUTING
↓
ROUTING ENABLES REPEAT CAPACITY
↓
CAPACITY + RECOVERY ENABLE OUTCOMES
```

Or in one sentence:

> **KAPAPI starts by making it easier to pick up and complete work, and grows into a system where you submit work and get the result back.**
