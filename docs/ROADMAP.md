# KAPAPI Roadmap

Updated: 2026-09-01

## North Star

KAPAPI should evolve from a visible professional-work marketplace into a system where a GM can submit work and receive the required result by the required time with minimal management overhead.

```text
Marketplace
QUEST → BID → GM selection

        ↓

Assist
files + short instruction → structured SOW → recommendation → GM approval

        ↓

Autopilot
work in → KAPAPI orchestration → result out
```

The marketplace is the bootstrap layer. Autopilot is the long-term destination.

---

## Phase 0 — Now / 1R application readiness

### Goal

Pass the 1R idea review of the 2026 모두의 창업 프로젝트 while building only enough product to make the transaction mechanism obvious, credible and memorable.

The pre-1R goal is **not** a production marketplace.

### Design/canon work

Before implementation:

- keep `README.md`, `PRODUCT.md`, `ROADMAP.md`, `VALIDATION.md`, `LEGAL.md`, `DECISIONS.md` as product canon
- use general language first, then introduce GM / PLAYER / QUEST world terms
- preserve the long-term distinction: marketplace now, outcome orchestration later
- record major direction changes in `DECISIONS.md`

### Prototype target

Target roughly **3–5 days of focused implementation** once scope is frozen.

Core screens:

1. Landing / plain-language service explanation / GM·PLAYER entry
2. QUEST list
3. QUEST detail + PRICE / DELIVERY TIME BID
4. GM BID comparison + PLAYER selection
5. PLAYER profile with relevant career + LEVEL / EXP
6. Simple progress / delivery / completion state

Must visibly demonstrate:

- architecture/CAD example QUEST
- price × delivery-time comparison such as `50,000 / 48H`, `70,000 / 24H`, `100,000 / 6H`
- TIME ATTACK
- relevant career/trust signals
- NDA/security concept
- delivery and GM inspection

Prototype quality targets:

- design: high
- core mechanism clarity: very high
- backend completeness: low
- transaction breadth: intentionally narrow
- outcome guarantee: not claimed

Visual direction:

- premium black/white tech product
- strong typography
- thin HUD elements such as `LV.12`, `+240 EXP`, `QUEST #0182`, countdowns
- avoid obvious RPG clichés
- contract/payment/security surfaces stay sober and professional

### Useful optional proof

- one or two real external PLAYERs entering a BID
- a 30–60 second demo of the full core loop
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
- Autopilot SLA/result guarantee

If a real test transaction occurs before production payments exist:

- KAPAPI fee: **0**
- GM ↔ PLAYER direct payment
- KAPAPI does not custody funds

### Program strategy

Current Daejeon working mentor-institution choice: **Mokwon University Industry-Academic Cooperation Foundation**.

Reason: published indicators align well with problem origin, founder-domain experience, differentiation, target market, BM feasibility and MVP/market-validation planning.

Re-evaluate if reliable institution application volume/T/O data becomes visible before submission.

---

## Phase 1 — 1R: prove GM demand and the transaction

### Goal

Move from “interesting idea” to evidence that external GMs will submit real professional work, pay for results and return.

The primary uncertainty is GM demand/liquidity, not PLAYER registration count.

### 1. Concierge validation first

Early KAPAPI may deliberately behave partly like a **Concierge Marketplace**.

A GM should be able to send:

> file + one rough sentence

and have KAPAPI manually or AI-assistively convert it into a clear QUEST/SOW.

This tests whether reducing explanation burden changes actual outsourcing behavior before spending months automating it.

### 2. Seed qualified PLAYER supply

First architecture/CAD PLAYER target:

- roughly **10–20 actually usable professionals**, not hundreds of signups

Test:

- willingness to BID with price + delivery time
- relevant-career signal quality
- response density per QUEST
- actual delivery reliability

### 3. Founder-funded supply/engine test

A working seed experiment discussed:

- approximately 10 real founder-originated CAD QUESTs
- roughly KRW 300k–500k total reward budget
- observe views → signup → BID → selection → delivery → acceptance

Measure:

- qualified BIDs per QUEST
- price distribution
- delivery-time distribution
- completion/on-time/revision
- PLAYER acquisition efficiency

**Founder-funded QUESTs must be excluded from primary GM-demand validation.** Their purpose is supply and transaction-engine validation.

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
- chosen price/time/trust combination
- actual transaction value
- completion time
- on-time rate
- revision count
- GM management minutes
- result acceptance
- security objections
- repeat behavior

Important nuance:

> **Time-to-first-BID is not universally the product value.**

For ordinary vendor comparison, a GM may care more about market comparison and quality. For TIME ATTACK/deadline crises, latency becomes critical. Track metrics by urgency/context rather than forcing one global speed KPI.

### North-star validation signal

Strongest evidence before 2R:

> **external GM + own money + real QUEST + repeat use**

---

## Phase 1 Gate — Go / Pivot / Kill

Do not protect the idea from negative evidence.

Continue aggressively only if evidence supports that:

- short professional capacity/deadline gaps actually recur
- unknown external professionals become acceptable with sufficient trust/security signals
- delegation is materially easier than self-completion/overtime
- competent PLAYERs participate at prices GMs will pay
- category liquidity can produce usable BID density
- paid external GMs return

Pivot or kill the current wedge if external tests repeatedly show:

- “I would rather do it myself” even during real capacity crises
- explanation cost remains similar to doing the work
- confidential files cannot be delegated despite safeguards
- economics cannot satisfy both sides
- quality/dispute cost consumes the potential take rate
- repeat direct relationships remove most platform value

Internal test thresholds may be defined per experiment, but must be labelled hypotheses rather than fabricated market benchmarks.

---

## Phase 2 — 2R: commercial-beta MVP

### Goal

Use validated demand to build a real transaction system and produce measurable marketplace data.

The published general/technical-track structure includes differentiated MVP production support of up to KRW 20 million in 2R. Expensive production infrastructure should be reserved for this stage where possible.

### A. Accounts and trust

- one account can transact as GM or PLAYER depending on QUEST
- identity verification path
- PLAYER relevant career / skill / task history
- completion/on-time/revision metrics
- two-sided reviews
- GM reputation signals such as approval speed and transaction history

### B. QUEST / SOW lifecycle

- QUEST creation
- file upload
- AI-assisted SOW generation
- missing-information prompts
- clear inputs, outputs, deadline and acceptance criteria
- BID: price + committed delivery time
- GM comparison and selection
- work status
- delivery
- revision request
- acceptance
- review

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

### D. Fast KAPAPI proposal UX

Keep proposals substantially lighter than traditional long proposals.

A BID should be expressible with:

- price
- committed delivery time
- relevant task/career proof
- very short note if needed

Goal: preserve client selection and trust while making support/application dramatically faster.

### E. Security / contract

- QUEST-specific NDA templates
- no-third-party-sharing rules
- portfolio-use permission
- retention/deletion terms
- task contract record
- file access/audit trail

### F. Quality architecture

Start with:

1. objective preflight checks
2. GM acceptance/revision
3. platform dispute only when necessary

Do not make KAPAPI staff manually inspect every low-value deliverable.

### G. Existing-partner layer

Begin testing:

- save/import trusted external vendors
- invite them to a QUEST
- expose the same QUEST to open-market PLAYERs
- compare old/new supply in one view
- show availability
- retain historical price/delivery/quality data

This tests whether KAPAPI can become the GM's default external-work operating layer.

### H. Monetization experiment

Monetization is not canonical yet.

Test:

- GM-side fee
- PLAYER-side fee
- all-in quoted total
- payment/admin protection value
- support/dispute cost by ticket size
- direct-trade pressure

Do not hard-code a 10% take rate merely because it is a common marketplace example.

---

## Phase 3 — Assist Mode

### Goal

Remove most GM coordination work without pretending KAPAPI can yet guarantee every outcome.

Flow:

```text
upload + short instruction
→ structured QUEST/SOW
→ missing-info resolution
→ market/reference data
→ recommended PLAYER/options
→ GM approval
→ execution
→ objective preflight
→ result
```

Capabilities:

- category-specific SOW templates
- robust task decomposition
- reference price/delivery ranges from actual transaction data
- automatic shortlisting
- availability awareness
- security requirement inference
- contract/admin automation
- early late-risk detection
- alternative PLAYER recommendation

Success condition:

> **The GM spends materially less time delegating than doing the work or managing a conventional external vendor search.**

AI still does not become the authoritative final price setter or subjective quality judge.

---

## Phase 4 — Autopilot pilot

### Goal

Prove one narrow category can reliably support:

> **work drop → KAPAPI execution → usable result**

Do not launch Autopilot broadly.

Select task types with:

- clear digital inputs
- repeatable SOW
- objective-enough outputs
- reliable quality inspection
- sufficient qualified supply
- low regulatory/irreversible-risk exposure

Architecture CAD digitization is a candidate research category, not an automatic launch decision.

### Required operating capabilities

- controlled bidding or automated routing
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

Expand only after one category demonstrates transaction-market fit.

Candidate directions:

- design/production
- data/spreadsheet
- e-commerce operations
- media editing
- simple software/web fixes
- language/content production

Category expansion rule:

> **PLAYER count alone is not liquidity. Each category is a separate micro-market. Open the next category only when repeat GM demand and enough qualified active supply exist to protect delivery reliability.**

A successful second vertical becomes important evidence that KAPAPI is a reusable marketplace/orchestration engine rather than an architecture-only product.

---

## Stage gates

### Gate A — justify continued marketplace validation

Need evidence of real capacity/deadline problems, trustable delegation and usable BID density.

### Gate B — justify commercial-beta marketplace

Need external paid transactions, qualified supply response and evidence of repeat GM value.

### Gate C — justify Assist

Need recurring structured work and enough actual transaction data to improve SOW creation and routing.

### Gate D — justify Autopilot

Need measurable quality/delivery reliability, backup liquidity, recovery operations and viable unit economics.

### Gate E — justify category expansion

Need proven liquidity in the current category and a second category with real GM demand, not only eager PLAYER supply.

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
- maximizing feature count before GM validation
- claiming Autopilot SLA before operational proof
