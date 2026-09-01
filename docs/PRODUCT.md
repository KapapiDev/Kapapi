# KAPAPI Product Design

Status: **canonical product direction**  
Updated: 2026-09-01

## 1. Product definition

KAPAPI is a result-oriented professional-work platform.

Initial form:

> A client posts a short online professional task. Qualified professionals submit **price + committed delivery time**. The client compares and selects.

KAPAPI world terms:

- **GM** = client / QUEST issuer
- **PLAYER** = independent professional
- **QUEST** = defined work unit
- **BID** = price + delivery-time proposal
- **REWARD** = compensation
- **TIME ATTACK** = urgent QUEST
- **LEVEL / EXP** = trust and execution history
- **QUEST COMPLETE** = completion

Long-term promise:

> **DROP WORK. GET RESULTS.**

KAPAPI should progressively hide search, proposal comparison, contracting, security administration, coordination, replacement and pre-delivery checking behind a simple outcome request.

---

## 2. Core GM insight

The GM is not simply “a one-person business.”

A better definition:

> **A person or small organization that has a professional task exceeding current internal capacity.**

Demand-trigger hypotheses:

1. **Capacity Gap** — can do it, but has no time now
2. **Skill Gap** — required skill is not available internally
3. **Deadline Gap** — can do it, but not before the deadline
4. **Employment Gap** — demand is too irregular to justify permanent staffing

Likely early GM segments:

- 1–10 person professional-service firms
- solo professionals with stable revenue
- small architecture/interior/design studios
- agencies and production studios
- small e-commerce/marketing/creator teams
- small software/startup teams

The strongest alternative may be neither Kmong nor Wishket, but:

> **“I will just do it myself / work late.”**

Therefore KAPAPI must reduce **delegation cost**, not only search cost.

---

## 3. Two-sided positioning

### PLAYER-facing

KAPAPI can be understood as an **online professional side-job platform**.

PLAYER flow:

`find QUEST → BID → complete → earn → build verified history`

### GM-facing

KAPAPI should be understood as a **short professional-work outsourcing platform** that makes external capacity available when internal capacity is insufficient.

Combined description:

> KAPAPI connects people who have work with people who have professional capacity, while minimizing the work required to outsource.

“Side-job platform” alone is not the investor/judge definition. The core business mechanism is **client-led short online professional work + price × delivery-time bidding + progressive outcome orchestration**.

---

## 4. Core market mechanism: PRICE × DELIVERY TIME

Every BID must include:

- **PRICE**
- **committed elapsed delivery time** from selection/contract to submission

Delivery time is not estimated labor hours.

Example:

- KRW 100k / 18H
- KRW 150k / 8H
- KRW 220k / 4H

KAPAPI must not default to lowest-price ranking.

Selection/recommendation should eventually consider:

- relevant industry career
- task-specific completion history
- on-time rate
- revision/rework rate
- rating
- current availability
- price
- delivery time

TIME ATTACK is the urgent expression of this mechanism. It only becomes a credible promise when category-level liquidity is sufficient.

---

## 5. Upwork benchmark principle

Product principle:

> **Do not casually replace transaction mechanisms already proven by Upwork.**

Commercial transaction architecture should strongly consider preserving:

1. job/QUEST posting
2. professional proposals
3. client selection
4. contract
5. pre-funded payment / escrow through a compliant provider
6. Milestones where the work becomes larger
7. Workroom with messages, files, contract terms and history
8. submit work
9. client approval or revision request
10. settlement
11. two-sided review
12. dispute/payment protection

KAPAPI innovation should primarily target:

- dramatically lower proposal and selection friction
- Korean localization
- price + delivery-time proposals
- AI-assisted scoping
- short/small jobs
- gamified discovery and reputation
- eventual work-to-result orchestration

PLAYER proposals should be much lighter than long Upwork proposals. A fast BID should be possible with price, delivery commitment, relevant career/history and a short note.

---

## 6. Result, not person, is the long-term unit

Traditional flow:

`search person → evaluate → inquire → quote → schedule → contract → explain → manage → revise → result`

KAPAPI target flow:

`work request → orchestration → result`

Key insight from the first architecture GM interview:

> The GM does not fundamentally want to find a PLAYER. The GM wants the desired-quality result by the required time with minimal management burden.

Therefore PLAYER identity, bidding and routing are internal means to an outcome.

This shifts KAPAPI from “freelancer discovery” toward **professional-work orchestration**.

---

## 7. Product evolution

### Stage A — Marketplace Mode

Visible flow:

`QUEST → BID → GM comparison → PLAYER selection → work → delivery → review`

Purpose:

- prove demand
- create narrow category liquidity
- collect real price/delivery data
- learn task standardization boundaries
- build trust signals
- observe failure, revision and dispute patterns

### Stage B — Assist Mode

Flow:

`file + short instruction → AI-generated QUEST/SOW → missing-info resolution → recommendation → GM approval → execution → result`

AI assistance:

- turn vague request into structured SOW
- identify missing information
- define deliverables and deadline
- infer security requirements
- use accumulated market data for reference ranges, not authoritative pricing
- shortlist relevant PLAYERs
- prepare contract/admin flow

### Stage C — Autopilot Mode

Target:

`GM drops work → KAPAPI orchestrates → GM receives result and inspects`

Internal functions may include:

- task classification
- work specification generation
- controlled bidding or routing
- security and contracts
- progress tracking
- late-risk detection
- PLAYER replacement
- objective pre-delivery checks
- SLA delivery logic

In mature Autopilot, PRICE × DELIVERY bidding may move into the backend and become invisible to the GM.

Autopilot is a north star, not an initial promise.

---

## 8. AI role: secretary, not judge

Early AI should **not** be positioned as:

- authoritative final price setter
- subjective final quality judge
- regulated professional decision-maker

Why:

A CAD task that appears simple may contain broken XREFs, bad layer structure or changes propagating across many drawings. A superficial AI estimate can be wrong.

Current decision architecture:

> **Price discovery → market**  
> **PLAYER selection → GM**  
> **Final quality approval → GM**  
> **Dispute → platform process**  
> **AI → scoping, missing information, reference data, objective preflight**

---

## 9. SOW-first transaction design

A key product principle is:

> **Make the order clear before trying to make inspection smart.**

The platform should transform vague instructions into a clear QUEST/SOW containing, as applicable:

- source files
- exact scope
- marked modification locations
- deliverables
- output format
- deadline
- objective acceptance criteria
- revision boundary
- confidentiality level
- missing information

Example:

```text
QUEST: CAD plan revision
Source: A-101.dwg
Changes:
1. Window 3: 1200 → 1500
2. Move kitchen wall 600mm
3. Update affected dimensions
Deliverables: DWG + PDF
Deadline: 2026-09-02 22:00
Revision: one revision for SOW mismatch
```

Clear SOW reduces explanation cost, pricing ambiguity, quality disputes and later Autopilot risk.

---

## 10. Quality architecture

### Layer 1 — objective preflight

Only check what software/AI can reliably verify:

- required files exist
- expected file type
- file opens
- required outputs included
- simple objective checklist items where technically reliable

### Layer 2 — GM acceptance

The paying GM approves or requests revision.

### Layer 3 — dispute process

Ambiguous scope interpretation, responsibility or non-performance moves to platform dispute handling.

Do not make human platform staff inspect every low-value professional deliverable. That would destroy unit economics.

Autopilot can later increase preflight/QA, but only after category-specific reliability is proven.

---

## 11. Task-fit rules

Strong early QUEST shape:

- digitally transferable inputs
- clear output
- hours to roughly two days
- GM can inspect
- reasonably standardizable
- mistakes are revisable
- low irreversible liability

Candidate categories:

- CAD digitization / defined drawing support
- rendering
- image cleanup/editing
- PPT cleanup
- spreadsheet/data cleanup
- simple web/code fixes
- product listing
- translation/proofreading
- subtitle/cut editing

Poor initial fits:

- broad strategy consulting
- large software projects
- highly subjective full-brand work
- complex architectural design
- regulated professional judgment
- high irreversible liability

The likely initial price band is **tens to hundreds of thousands of KRW**, but this remains a hypothesis, not a fixed product rule.

---

## 12. Architecture/CAD wedge

Architecture/CAD is the initial testbed because the founder can:

- originate realistic tasks
- understand the workflow
- judge deliverable quality
- distinguish normal support work from poor output

Representative QUEST:

> Convert provided hand-drawn/current-condition building material into a specified DWG deliverable by a fixed deadline.

Important correction:

This is not “work too trivial for employees.” It is legitimate project work that becomes a bottleneck when capacity is temporarily insufficient.

Architecture is the first experiment, not the market boundary.

---

## 13. Trust model

PLAYER trust signals should emphasize:

- verified identity
- relevant industry career
- task-specific completion history
- completion count
- on-time rate
- revision rate
- dispute history
- permitted portfolio
- LEVEL / EXP

Relevant career is important because it reduces instruction burden. An architecture GM seeing “5 years at an architecture office” can infer that common professional conventions require less explanation.

### GM reputation

Trust is two-sided.

Future GM signals may include:

- payment/transaction completion history
- average inspection/approval time
- cancellation/dispute history
- PLAYER rating of GM

GM does not necessarily need game-like LEVEL, but two-sided review belongs in the transaction engine.

A user can act as GM in one QUEST and PLAYER in another; these are transaction roles, not permanent social classes.

---

## 14. Existing partners are part of the product

Real GMs often already have trusted vendors.

KAPAPI should allow future workflows such as:

- save/import existing partners
- invite existing partners to a QUEST
- simultaneously expose the QUEST to open-market PLAYERs
- compare old/new proposals in one view
- show availability
- retain historical price/delivery/quality data
- recommend substitutes when a preferred partner is unavailable

This can move KAPAPI from a discovery board into an **external-work operating layer**.

---

## 15. Trust, security and administration

KAPAPI should eventually reduce:

- explanation burden
- contract burden
- NDA/confidentiality burden
- payment evidence burden
- tax/admin burden
- vendor-history management
- replacement burden

Professional QUESTs may require:

- QUEST-specific NDA
- third-party disclosure prohibition
- portfolio-use prohibition without consent
- data-retention/deletion rules
- access control
- contract/delivery history
- dispute evidence

---

## 16. Disintermediation

A successful PLAYER can become a long-term direct vendor.

This risk is real and not solved by hiding contact details.

KAPAPI must earn repeated use through:

- contracts/NDA
- compliant safe payment
- transaction/tax evidence
- vendor history
- comparison market
- backup supply
- availability visibility
- dispute support
- eventual SLA/outcome assurance

The strongest long-term retention hypothesis is that the GM buys **KAPAPI's result-delivery reliability**, not access to one specific PLAYER.

---

## 17. Liquidity is category-specific

A broad marketplace can be deceptive.

1,000 PLAYERs do not create a viable CAD TIME ATTACK market if only 20 can perform CAD.

Each category behaves like a separate micro-market.

Expansion requires:

- repeat GM demand in that category
- enough qualified active supply
- acceptable time-to-first-valid-BID
- reliable delivery and quality

Therefore broad category expansion should follow proven liquidity, not precede it.

---

## 18. Cold-start operating model

Early KAPAPI may operate partly as a **concierge marketplace**.

A GM should not need to learn the platform before proving demand. The GM may initially send files plus a short request, while KAPAPI manually converts that input into a QUEST/SOW.

Founder-originated real CAD QUESTs can seed supply and test the transaction engine.

Working seed experiment discussed:

- ~10 real CAD QUESTs
- roughly KRW 300k–500k total founder-funded reward budget
- observe PLAYER acquisition, BID density, price/delivery distribution and completion

These founder-funded transactions must be excluded from primary GM-demand proof.

A later demand experiment may subsidize the first QUEST for external GMs. The critical signal is whether they return with their **own money**.

Subsidy amounts and conversion thresholds remain experiment parameters, not product policy.

---

## 19. Monetization is unresolved

A transaction take rate is an obvious candidate but is **not a canonical decision yet**.

Questions to validate:

- GM fee vs PLAYER fee
- visible fee vs all-in total price
- what safe payment/admin value justifies
- whether low-ticket dispute/support cost destroys contribution margin
- whether direct trade pressure requires a different fee model

Early validation mode can use:

- KAPAPI fee: 0
- no KAPAPI custody of funds
- direct GM↔PLAYER payment where a real test transaction is needed

Commercial payment/settlement requires a compliant provider and accounting structure.

---

## 20. Visual / interaction direction

Brand principle:

> **겉은 게임처럼 재미있게, 속은 Upwork보다 진지하게.**

Visual direction:

- premium tech-product tone inspired by Linear / Vercel / Raycast
- black/white foundation
- strong typography
- thin HUD-like metadata
- examples: `LV.12`, `+240 EXP`, `QUEST #0182`, countdowns
- avoid swords, coins and obvious pixel-RPG clichés

Discovery and achievement can feel game-like.

Contracts, payment, NDA, delivery, dispute and settlement should become visually more sober and precise as money/risk increases.

---

## 21. Data / moat hypothesis

Potential compounding assets:

- category liquidity
- verified task-specific PLAYER graph
- task-level price distributions
- actual delivery-time distributions
- career + success history
- revision/failure patterns
- routing success data
- replacement/recovery data
- GM preference history

Potential loop:

`more transactions → better SOW/routing → higher delivery reliability → greater GM trust → more transactions`

Long-term Autopilot defensibility depends less on having many profiles and more on knowing:

> **which work should go to which qualified PLAYER, at what cost, with what delivery probability and recovery path.**

---

## 22. Product principles

1. GM wants a result, not a PLAYER search experience.
2. Remove outsourcing steps whenever reliability allows.
3. Marketize price + delivery time + trust together.
4. Market discovers price; GM owns final acceptance.
5. Make the SOW clear before automating quality judgment.
6. Preserve proven safe-market mechanics; innovate in speed, localization, AI and UX.
7. Existing vendor relationships should be absorbed, not attacked.
8. AI begins as a secretary, not a judge.
9. Gamification is a product language and reputation layer, not the core business proof.
10. Validate GM transactions before optimizing PLAYER registrations.
11. Architecture/CAD is a wedge, not the whole market.
12. Autopilot starts only in narrow, measurable categories.
13. Trade QUEST/results, not controlled employee time.
14. Keep reducing GM clicks, decisions and management minutes.
