# KAPAPI Roadmap

Updated: 2026-09-02

## North Star

KAPAPI should evolve from a professional-work market running behind the scenes into a system where a GM can submit work and receive the required result by the required time with minimal management overhead.

The GM-facing evolution is now intentionally compressed from day one:

```text
Auto-Routed Marketplace
work request → KAPAPI routes → result → GM accept/revise

        ↓

Assist / Routing Intelligence
files + short instruction → structured SOW → KAPAPI routes/recover → result

        ↓

Outcome Autopilot
work in → KAPAPI orchestration / SLA / recovery → result out
```

The underlying market still exists from the beginning:

```text
QUEST → eligible PLAYERs → PRICE × DELIVERY BIDs → KAPAPI selection/routing → execution
```

The marketplace is the supply/data bootstrap layer. **Routine GM proposal comparison is no longer the default bootstrap UX.** Strong outcome guarantees remain the later destination.

---

## Phase 0 — Now / 1R application readiness

### Goal

Pass the 1R idea review of the 2026 모두의 창업 프로젝트 while building only enough product to make the transaction mechanism obvious, credible and memorable.

The pre-1R goal is **not** a production marketplace.

### Design/canon work

Before implementation:

- keep `README.md`, `PRODUCT.md`, `ROADMAP.md`, `VALIDATION.md`, `LEGAL.md`, `DECISIONS.md` as product canon
- use general language first, then introduce GM / PLAYER / QUEST world terms
- make the GM first-touch light-first and simpler than a conventional freelancer marketplace
- preserve the distinction between **auto-routing now** and **strong SLA/outcome guarantee later**
- record major direction changes in `DECISIONS.md`

### Prototype target

Target roughly **3–5 days of focused implementation** once scope is frozen.

Core screens:

1. Landing / plain-language service explanation / GM·PLAYER entry
2. GM QUEST creation / file + result + deadline + budget/constraints
3. PLAYER QUEST detail + PRICE / DELIVERY TIME BID
4. **KAPAPI routing/selection state** rather than mandatory GM BID comparison
5. PLAYER profile with relevant career + LEVEL / EXP
6. Simple progress / delivery / completion state
7. GM result inspection: **accept / revision request**

Must visibly demonstrate:

- one flagship real professional-work example, with architecture/CAD as testbed rather than category definition
- price × delivery-time competition behind the GM experience, e.g. `50,000 / 48H`, `70,000 / 24H`, `100,000 / 6H`
- KAPAPI selects/routes using trust + fit + price + delivery under GM constraints
- TIME ATTACK
- relevant career/trust signals
- NDA/security concept
- result delivery and GM inspection

### Prototype story

The default judge/user narrative should be:

```text
GM: “이 일을 이 조건으로 끝내주세요.”
→ KAPAPI 접수
→ PLAYER market competes behind the scenes
→ KAPAPI selects/routes
→ work progresses
→ result arrives
→ GM accepts or requests revision
```

Do **not** make the default story:

```text
GM posts → waits → studies BID cards → chooses a freelancer → manages them
```

Manual BID comparison may exist only as a fallback/debug concept if useful for validation.

Prototype quality targets:

- design: high
- core mechanism clarity: very high
- backend completeness: low
- transaction breadth: intentionally narrow
- auto-routing: demonstrated / partially concierge-backed is acceptable
- outcome guarantee: not claimed

Visual direction:

- public marketplace **light-first**
- white/off-white base, black/graphite typography, restrained signal accent
- dark operational moments only when state meaning benefits
- strong typography
- thin HUD elements such as `LV.12`, `+240 EXP`, `QUEST #0182`, countdowns
- avoid obvious RPG clichés
- contract/payment/security surfaces stay sober and professional

### Useful optional proof

- one or two real external PLAYERs entering a BID
- one real or concierge-supervised auto-routing decision
- a 30–60 second demo of the full GM loop
- concise external GM interview evidence

### Explicitly defer pre-1R

- production PG/escrow
- platform-held funds
- automatic settlement/tax engine
- full identity/career verification automation
- advanced messaging
- advanced dispute center
- native mobile apps
- broad category launch
- AI as final price/quality judge
- opaque LLM-only PLAYER selection
- Autopilot SLA/result guarantee

If a real test transaction occurs before production payments exist:

- KAPAPI fee: **0**
- GM ↔ PLAYER direct payment
- KAPAPI does not custody funds
- routing may be manually supervised behind the intended product experience

### Program strategy

Current Daejeon working mentor-institution choice: **Mokwon University Industry-Academic Cooperation Foundation**.

Reason: published indicators align well with problem origin, founder-domain experience, differentiation, target market, BM feasibility and MVP/market-validation planning.

Re-evaluate if reliable institution application volume/T/O data becomes visible before submission.

---

## Phase 1 — 1R: prove GM demand, routing and the transaction

### Goal

Move from “interesting idea” to evidence that external GMs will submit real professional work, trust KAPAPI to route it, pay for results and return.

The primary uncertainty is GM demand + category liquidity + routing trust, not PLAYER registration count.

### 1. Concierge validation first

Early KAPAPI may deliberately behave partly like a **Concierge Auto-Routed Marketplace**.

A GM should be able to send:

> file + one rough sentence + deadline / budget constraint

and have KAPAPI manually or AI-assistively convert it into a clear QUEST/SOW.

After the QUEST is valid, the default GM does not need to compare PLAYERs. KAPAPI can manually supervise the first routing decisions behind the scenes while measuring what future automation must learn.

This tests whether reducing explanation **and selection** burden changes actual outsourcing behavior before spending months automating it.

### 2. Seed qualified PLAYER supply

First architecture/CAD PLAYER target:

- roughly **10–20 actually usable professionals**, not hundreds of signups

Test:

- willingness to BID with price + delivery time
- relevant-career signal quality
- response density per QUEST
- actual delivery reliability
- whether enough comparable choices exist for KAPAPI to route confidently

### 3. Founder-funded supply/routing-engine test

A working seed experiment discussed:

- approximately 10 real founder-originated CAD QUESTs
- roughly KRW 300k–500k total reward budget
- observe views → signup → BID → KAPAPI route → delivery → acceptance

Measure:

- qualified BIDs per QUEST
- price distribution
- delivery-time distribution
- routing choice and rationale
- completion/on-time/revision
- PLAYER acquisition efficiency
- replacement/recovery if a route fails

**Founder-funded QUESTs must be excluded from primary GM-demand validation.** Their purpose is supply and transaction/routing-engine validation.

### 4. External GM validation

Suggested initial interview/test pool:

- 15–30 external GMs in a narrow architecture/interior/professional-service segment

Ask about real past behavior:

- last capacity/deadline gap
- what they actually did
- whether they worked late instead
- current vendor/network use
- what prevented outsourcing
- explanation/management burden
- whether they would trust KAPAPI to choose the worker within stated budget/deadline constraints
- what evidence would make automatic selection acceptable
- confidentiality objections
- actual spend
- price vs deadline tradeoff

### 5. First-QUEST subsidy experiment

A limited first-QUEST subsidy may be tested as customer-acquisition spend.

Do not treat subsidized usage itself as success.

The stronger signal is:

> **Does the GM return and fund a second QUEST with their own money?**

Subsidy amount, user count and conversion threshold remain experiment parameters, not canonical pricing policy.

### 6. Real transaction tests

Measure each QUEST:

- time to create a clear SOW
- first valid BID time
- valid BIDs per QUEST
- routing decision latency
- selected price/time/trust combination
- whether GM asks to inspect/override PLAYER choice
- actual transaction value
- completion time
- on-time rate
- revision count
- replacement/recovery rate
- GM management minutes
- result acceptance
- security objections
- repeat behavior

Important nuance:

> **Time-to-first-BID is not universally the product value.**

For the GM, the stronger metric is often time-to-confident-routing/result. For TIME ATTACK/deadline crises, latency becomes critical. Track metrics by urgency/context rather than forcing one global speed KPI.

### North-star validation signal

Strongest evidence before 2R:

> **external GM + own money + real QUEST + trusts KAPAPI routing + accepted result + repeat use**

---

## Phase 1 Gate — Go / Pivot / Kill

Do not protect the idea from negative evidence.

Continue aggressively only if evidence supports that:

- short professional capacity/deadline gaps actually recur
- unknown external professionals become acceptable with sufficient trust/security signals
- delegation is materially easier than self-completion/overtime
- competent PLAYERs participate at prices GMs will pay
- category liquidity can produce usable BID/routing density
- KAPAPI-selected PLAYERs reach acceptable delivery/revision outcomes
- paid external GMs return

Pivot routing policy, expose more control, narrow categories or kill the current wedge if external tests repeatedly show:

- “I would rather do it myself” even during real capacity crises
- explanation cost remains similar to doing the work
- GMs insist on manually choosing the PLAYER for most QUESTs
- KAPAPI routing creates frequent selection regret
- confidential files cannot be delegated despite safeguards
- economics cannot satisfy both sides
- quality/replacement/dispute cost consumes the potential take rate
- repeat direct relationships remove most platform value

Internal test thresholds may be defined per experiment, but must be labelled hypotheses rather than fabricated market benchmarks.

---

## Phase 2 — 2R: commercial-beta MVP

### Goal

Use validated demand and routing evidence to build a real transaction system and produce measurable marketplace/orchestration data.

The published general/technical-track structure includes differentiated MVP production support of up to KRW 20 million in 2R. Expensive production infrastructure should be reserved for this stage where possible.

### A. Accounts and trust

- one account can transact as GM or PLAYER depending on QUEST
- identity verification path
- PLAYER relevant career / skill / task history
- completion/on-time/revision/failure metrics
- two-sided reviews
- GM reputation signals such as approval speed and transaction history

### B. QUEST / SOW lifecycle

- QUEST creation
- file upload
- AI-assisted SOW generation
- missing-information prompts
- clear inputs, outputs, deadline, budget/constraints and acceptance criteria
- BID: price + committed delivery time
- KAPAPI eligibility filtering + ranking + assignment
- work status
- delivery
- revision request
- acceptance
- review

Manual GM comparison is not the default lifecycle. It may remain as a fallback or category-specific override while routing reliability is validated.

### C. Preserve proven marketplace safety mechanics

Benchmark Upwork-style transaction structure rather than inventing unsafe replacements:

- contract record
- compliant pre-funded payment / escrow via registered provider
- Milestones where a QUEST becomes larger
- Workroom
- messages/comments
- files
- requirements
- audit trail
- submit work
- GM approval/revision
- settlement
- dispute/payment-protection flow

KAPAPI should not directly hold customer funds in its operating account.

### D. Fast PLAYER proposal + KAPAPI routing UX

Keep PLAYER proposals substantially lighter than traditional long proposals.

A BID should be expressible with:

- price
- committed delivery time
- relevant task/career proof
- very short note if needed

Routing should combine:

- hard qualification / credential / security requirements
- GM deadline + budget ceiling/constraint
- price + delivery
- task-specific completion history
- on-time / revision / failure signals
- relevant career
- availability
- AI-assisted semantic task fit where useful

Goal: preserve market price discovery and trust while removing routine GM proposal comparison.

### E. Security / contract

- QUEST-specific NDA templates
- no-third-party-sharing rules
- portfolio-use permission
- retention/deletion terms
- task contract record
- file access/audit trail

### F. Quality and recovery architecture

Start with:

1. objective preflight checks
2. GM acceptance/revision
3. KAPAPI replacement/recovery when execution fails before result
4. platform dispute when necessary

Do not make KAPAPI staff manually inspect every low-value deliverable.

### G. Existing-partner routing layer

Begin testing:

- save/import trusted external vendors
- include them in the routing pool
- expose the same QUEST to open-market PLAYERs
- compare old/new supply internally
- show availability
- retain historical price/delivery/quality data
- route to trusted existing supply when it is objectively best fit
- use backup supply when preferred partners are unavailable

This tests whether KAPAPI can become the GM's default external-work operating layer.

### H. Monetization experiment

Monetization is not canonical yet.

Test:

- GM-side fee
- PLAYER-side fee
- all-in quoted total
- payment/admin/routing/recovery value
- support/dispute/replacement cost by ticket size
- direct-trade pressure

Do not hard-code a 10% take rate merely because it is a common marketplace example.

---

## Phase 3 — Routing Intelligence / Assist

### Goal

Remove remaining GM clarification and coordination work without pretending KAPAPI can yet guarantee every outcome.

Flow:

```text
upload + short instruction
→ structured QUEST/SOW
→ missing-info resolution before submit
→ market/reference data
→ KAPAPI routing
→ execution
→ late-risk detection / replacement if needed
→ objective preflight
→ result
→ GM accept/revise
```

Capabilities:

- category-specific SOW templates
- robust task decomposition
- reference price/delivery ranges from actual transaction data
- automatic eligibility + ranking
- availability awareness
- security requirement inference
- contract/admin automation
- early late-risk detection
- alternative PLAYER preparation / automatic recovery where proven

Success condition:

> **The GM spends materially less time delegating than doing the work or managing a conventional external vendor search.**

AI still does not become the authoritative final price setter or subjective quality judge.

---

## Phase 4 — Outcome Autopilot pilot

### Goal

Prove one narrow category can reliably support:

> **work drop → KAPAPI execution/recovery → usable result**

The difference from earlier auto-routing is **not** whether KAPAPI picks the PLAYER. KAPAPI already does that by default.

The new threshold here is whether KAPAPI can credibly take stronger responsibility for:

- outcome/SLA promises
- automatic recovery
- objective QA
- predictable delivery even when the first PLAYER fails

Do not launch strong Autopilot guarantees broadly.

Select task types with:

- clear digital inputs
- repeatable SOW
- objective-enough outputs
- reliable quality inspection
- sufficient qualified supply
- low regulatory/irreversible-risk exposure

Architecture CAD digitization is a candidate research category, not an automatic launch decision.

### Required operating capabilities

- reliable automated routing
- category-specific qualification
- SLA promise logic
- backup PLAYER pool
- late/failure detection
- replacement procedure
- objective pre-delivery QA
- escalation path
- pricing that absorbs failure/recovery cost

### Required proof before strong promises

- high on-time completion
- low rework
- predictable specification quality
- predictable cost distribution
- successful replacement/recovery cases
- sufficient backup liquidity
- positive unit economics after failure allowance

As KAPAPI takes more routing/QA/outcome responsibility, legal and commercial responsibility must be re-reviewed.

---

## Phase 5 — category expansion

Expand only after one category demonstrates transaction/routing fit.

Candidate directions:

- design/production
- data/spreadsheet
- e-commerce operations
- media editing
- simple software/web fixes
- language/content production

Category expansion rule:

> **PLAYER count alone is not liquidity. Each category is a separate micro-market. Open the next category only when repeat GM demand and enough qualified active supply exist to protect routing and delivery reliability.**

A successful second vertical becomes important evidence that KAPAPI is a reusable marketplace/orchestration engine rather than an architecture-only product.

---

## Stage gates

### Gate A — justify continued routed-marketplace validation

Need evidence of real capacity/deadline problems, trustable delegation, usable BID density and acceptable KAPAPI routing outcomes.

### Gate B — justify commercial-beta marketplace

Need external paid transactions, qualified supply response, acceptable auto-selection regret/revision and evidence of repeat GM value.

### Gate C — justify Routing Intelligence / Assist

Need recurring structured work and enough actual transaction data to improve SOW creation, ranking and recovery.

### Gate D — justify strong Outcome Autopilot promises

Need measurable quality/delivery reliability, backup liquidity, recovery operations and viable unit economics.

### Gate E — justify category expansion

Need proven liquidity/routing reliability in the current category and a second category with real GM demand, not only eager PLAYER supply.

---

## Explicit non-goals for now

- all-category nationwide launch from day one
- hourly shift marketplace
- employee dispatch / attendance / workplace-control model
- `Fractional Employee` or “buy a PLAYER for 20 hours/month” roadmap
- regulated professional judgment by unverified PLAYERs
- direct KAPAPI custody of customer funds
- AI as authoritative final price setter
- AI as subjective final quality judge
- opaque LLM-only routing
- maximizing feature count before GM validation
- claiming strong Autopilot SLA before operational proof
