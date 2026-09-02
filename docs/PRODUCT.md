# KAPAPI Product Design

Status: **canonical product direction**  
Updated: 2026-09-02

## 1. Product definition

KAPAPI is a result-oriented professional-work platform.

Default GM-facing form:

> A client defines the work, deadline and spending boundary once. Qualified professionals compete with **price + committed delivery time** behind the scenes. KAPAPI selects the best-fit PLAYER, routes the work and returns the result for GM acceptance or revision.

Default GM flow:

`work request → KAPAPI routing → execution → result → accept / revise`

Default PLAYER flow:

`find eligible QUEST → BID price + delivery → KAPAPI selection/routing → complete → earn → build verified history`

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

Therefore KAPAPI must reduce **delegation cost and decision burden**, not only search cost.

---

## 3. Two-sided positioning

### PLAYER-facing

KAPAPI can be understood as an **online professional side-job platform**.

PLAYER flow:

`find QUEST → BID → get selected/routed → complete → earn → build verified history`

### GM-facing

KAPAPI should be understood as a **short professional-work outsourcing system** that makes external capacity available when internal capacity is insufficient.

The default GM should not need to browse or compare professionals after a valid QUEST is submitted.

Combined description:

> KAPAPI connects people who have work with people who have professional capacity, while minimizing the work required to outsource.

“Side-job platform” alone is not the investor/judge definition. The core business mechanism is **client-led short online professional work + price × delivery-time bidding + KAPAPI routing + result acceptance**.

---

## 4. Core market mechanism: PRICE × DELIVERY TIME

Every BID must include:

- **PRICE**
- **committed elapsed delivery time** from assignment/contract to submission

Delivery time is not estimated labor hours.

Example:

- KRW 100k / 18H
- KRW 150k / 8H
- KRW 220k / 4H

KAPAPI must not default to lowest-price ranking.

Default routing should eventually consider:

- hard eligibility / qualification requirements
- relevant industry career
- task-specific completion history
- on-time rate
- revision/rework rate
- dispute/failure history
- rating
- current availability
- security/NDA requirements
- price
- delivery time
- GM deadline
- GM budget ceiling or other committed commercial constraint

### Selection architecture

KAPAPI selection must not mean “an LLM picks a person because it feels right.”

Preferred architecture:

1. **hard filters** — category/credential/security/deadline/budget eligibility
2. **market data** — price, committed delivery, availability
3. **verified performance data** — relevant history, on-time, revision/failure, career
4. **task-fit scoring** — semantic/relevance assistance may use AI
5. **routing policy** — choose the highest-confidence eligible option under the GM's committed constraints

AI can help interpret task fit, but the selection system should remain inspectable and data-backed.

TIME ATTACK is the urgent expression of this mechanism. It only becomes a credible promise when category-level liquidity is sufficient.

---

## 5. Upwork benchmark principle

Product principle:

> **Do not casually replace transaction mechanisms already proven by Upwork, except where KAPAPI has an explicit product reason to remove GM work.**

Commercial transaction architecture should strongly consider preserving:

1. job/QUEST posting
2. professional proposals/BIDs
3. contract record
4. pre-funded payment / escrow through a compliant provider
5. Milestones where the work becomes larger
6. Workroom with messages, files, contract terms and history
7. submit work
8. client approval or revision request
9. settlement
10. two-sided review
11. dispute/payment protection

### Deliberate KAPAPI deviation

Upwork normally asks the client to compare and select talent.

KAPAPI's default GM path intentionally removes this step:

`BIDs → KAPAPI routing/selection → execution`

The market still discovers price and delivery, but routine proposal comparison becomes an internal KAPAPI operation rather than a mandatory GM task.

Manual comparison may remain as an exceptional fallback, trust-building/debug mode, or category-specific override, but it is **not the default product promise**.

KAPAPI innovation should primarily target:

- dramatically lower delegation and selection friction
- Korean localization
- price + delivery-time proposals
- KAPAPI auto-routing
- AI-assisted scoping
- short/small jobs
- gamified discovery and reputation
- progressive outcome orchestration

PLAYER proposals should be much lighter than long Upwork proposals. A fast BID should be possible with price, delivery commitment, relevant career/history and a short note.

---

## 6. Result, not person, is the unit

Traditional flow:

`search person → evaluate → inquire → quote → schedule → contract → explain → manage → revise → result`

Old KAPAPI marketplace flow:

`QUEST → BIDs → GM compares → GM selects → work → result`

Default KAPAPI flow:

`work request → KAPAPI orchestrates → result → GM accepts or requests revision`

Key insight from the first architecture GM interview:

> The GM does not fundamentally want to find a PLAYER. The GM wants the desired-quality result by the required time with minimal management burden.

Therefore PLAYER identity, bidding and routing are internal means to an outcome.

This shifts KAPAPI from “freelancer discovery” toward **professional-work orchestration**.

---

## 7. Product evolution

KAPAPI should not wait until a distant future stage to remove routine GM selection. The default GM experience should start as **Autopilot-lite**, while the underlying supply market remains visible to PLAYERs and operationally observable to KAPAPI.

### Stage A — Auto-Routed Marketplace

GM-facing flow:

`file + request + deadline + budget/constraints → QUEST confirmed → KAPAPI handles selection → result → accept / revise`

Internal/PLAYER flow:

`QUEST → eligible PLAYERs → PRICE × DELIVERY BIDs → KAPAPI ranking/routing → PLAYER execution → delivery`

Purpose:

- prove demand
- create narrow category liquidity
- collect real price/delivery data
- validate whether KAPAPI can choose a satisfactory PLAYER without routine GM comparison
- learn task standardization boundaries
- build trust signals
- observe failure, revision, replacement and dispute patterns

Critical hypothesis:

> **Can KAPAPI remove GM selection without increasing regret, revision or failure enough to erase the convenience gain?**

Manual GM comparison may exist as a fallback during validation, but the primary prototype story should demonstrate hands-off routing.

### Stage B — Assist / Routing Intelligence

Flow:

`file + short instruction → AI-generated QUEST/SOW → missing-info resolution before submit → KAPAPI routing → execution → objective preflight → result → accept / revise`

AI/platform assistance:

- turn vague request into structured SOW
- identify missing information before the GM leaves the flow
- define deliverables and deadline
- infer security requirements
- use accumulated market data for reference ranges
- score task fit
- improve routing
- prepare contract/admin flow
- detect late/failure risk
- recommend or trigger replacement

### Stage C — Outcome Autopilot

Target:

`GM drops work → KAPAPI orchestrates → GM receives result and inspects`

Internal functions may include:

- task classification
- work specification generation
- bidding or direct routing hidden entirely from GM
- security and contracts
- progress tracking
- late-risk detection
- PLAYER replacement
- objective pre-delivery checks
- SLA delivery logic

In mature Autopilot, visible bidding may disappear even for PLAYERs in some categories and become direct dispatch/routing.

### What is still deferred

Auto-routing does **not** mean KAPAPI should immediately promise universal SLA/outcome guarantees.

Strong guarantees remain a later stage because routing responsibility, replacement cost, QA, payment structure and legal liability must be proven category by category.

---

## 8. AI role: router assistant, not subjective judge

Early AI should **not** be positioned as:

- authoritative final price setter
- subjective final quality judge
- regulated professional decision-maker
- opaque sole authority that chooses PLAYERs without rules/data

Why:

A task that appears simple may contain hidden technical context. A superficial AI estimate or match can be wrong.

Current decision architecture:

> **Price discovery → market**  
> **Eligibility → explicit rules / verified requirements**  
> **PLAYER ranking/routing → rules + transaction data + AI-assisted task fit**  
> **Final quality approval → GM**  
> **Dispute → platform process**  
> **AI → scoping, missing information, semantic fit, reference data, objective preflight assistance**

KAPAPI owns the routing experience, but must make routing increasingly evidence-based and recoverable rather than pretending an LLM is an infallible hiring manager.

---

## 9. SOW-first transaction design

A key product principle is:

> **Make the order clear before removing the GM from the process.**

The platform should transform vague instructions into a clear QUEST/SOW containing, as applicable:

- source files
- exact scope
- marked modification locations
- deliverables
- output format
- deadline
- budget ceiling / commercial constraint where auto-routing requires it
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
Budget ceiling: KRW 180,000
Revision: one revision for SOW mismatch
```

Clear SOW reduces explanation cost, pricing ambiguity, routing error, quality disputes and later Autopilot risk.

The GM may need to answer missing mandatory questions **before final submission**. After a valid QUEST is submitted, routine PLAYER comparison/selection should not be required.

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

The paying GM receives the result and chooses:

- **accept / QUEST COMPLETE**
- **request revision** within the defined revision boundary

The GM should not have been required to manage the selection process merely to reach this point.

### Layer 3 — recovery / dispute

KAPAPI should distinguish:

- normal revision
- PLAYER late/failure risk
- replacement/reassignment
- scope dispute
- non-performance dispute

When a PLAYER fails before delivery, KAPAPI's long-term advantage is the ability to reroute/recover without pushing the vendor-search problem back to the GM.

Do not make human platform staff inspect every low-value professional deliverable. That would destroy unit economics.

---

## 11. Task-fit rules

Strong early QUEST shape:

- digitally transferable inputs
- clear output
- hours to roughly two days
- GM can inspect the final result
- reasonably standardizable
- mistakes are revisable
- low irreversible liability
- enough comparable supply for KAPAPI to route with confidence

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

### Routing implication

Trust signals are not only profile decoration. They are routing inputs.

KAPAPI should learn which signals actually predict:

- usable result
- on-time delivery
- low revision
- low GM management burden
- successful recovery when something goes wrong

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

## 14. Existing partners are part of the routing pool

Real GMs often already have trusted vendors.

KAPAPI should allow future workflows such as:

- save/import existing partners
- invite existing partners into KAPAPI's routing pool
- simultaneously expose the QUEST to open-market PLAYERs
- compare old/new options internally
- show availability
- retain historical price/delivery/quality data
- route to a trusted partner when they are best fit
- recommend or automatically use substitutes when a preferred partner is unavailable

This can move KAPAPI from a discovery board into an **external-work operating layer**.

---

## 15. Trust, security and administration

KAPAPI should eventually reduce:

- explanation burden
- selection burden
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
- **automatic routing**
- backup supply
- availability visibility
- replacement/recovery
- dispute support
- eventual SLA/outcome assurance

The strongest long-term retention hypothesis is that the GM buys **KAPAPI's result-delivery reliability and removal of vendor management**, not access to one specific PLAYER.

---

## 17. Liquidity is category-specific

A broad marketplace can be deceptive.

1,000 PLAYERs do not create a viable CAD TIME ATTACK market if only 20 can perform CAD.

Each category behaves like a separate micro-market.

Expansion requires:

- repeat GM demand in that category
- enough qualified active supply
- acceptable time-to-valid-routing decision
- enough eligible BIDs/options per QUEST
- reliable delivery and quality
- backup/replacement capacity

Therefore broad category expansion should follow proven liquidity, not precede it.

---

## 18. Cold-start operating model

Early KAPAPI may operate partly as a **concierge auto-routed marketplace**.

A GM should not need to learn the platform before proving demand. The GM may initially send files plus a short request, while KAPAPI manually/AI-assistively converts that input into a QUEST/SOW.

Behind the scenes, KAPAPI can also manually supervise early routing while the product presents the intended hands-off GM experience. This is acceptable validation as long as manual operations are measured rather than disguised as proven automation.

Founder-originated real CAD QUESTs can seed supply and test the transaction engine.

Working seed experiment discussed:

- ~10 real CAD QUESTs
- roughly KRW 300k–500k total founder-funded reward budget
- observe PLAYER acquisition, BID density, price/delivery distribution, routing choice and completion

These founder-funded transactions must be excluded from primary GM-demand proof.

A later demand experiment may subsidize the first QUEST for external GMs. The critical signal is whether they return with their **own money**.

Subsidy amounts and conversion thresholds remain experiment parameters, not product policy.

### Auto-routing validation metrics

Track at minimum:

- valid BIDs/options per QUEST
- routing decision latency
- selected bid rank by price/delivery/trust
- whether GM asks who was selected before result
- GM selection-regret / override requests
- on-time rate
- revision rate
- replacement/recovery rate
- final acceptance
- GM management minutes
- repeat self-funded use

---

## 19. Monetization is unresolved

A transaction take rate is an obvious candidate but is **not a canonical decision yet**.

Questions to validate:

- GM fee vs PLAYER fee
- visible fee vs all-in total price
- what safe payment/admin/routing value justifies
- whether low-ticket dispute/support/replacement cost destroys contribution margin
- whether direct trade pressure requires a different fee model

Early validation mode can use:

- KAPAPI fee: 0
- no KAPAPI custody of funds
- direct GM↔PLAYER payment where a real test transaction is needed

Commercial auto-routing will eventually need a coherent authorization/payment design so KAPAPI cannot select a bid above what the GM agreed to pay. A compliant provider/escrow or equivalent pre-authorized commercial boundary should precede production-scale routing.

---

## 20. Visual / interaction direction

Brand principle:

> **겉은 게임처럼 재미있게, 속은 Upwork보다 진지하게.**

Public marketplace direction is **light-first**. Dark operational moments are contextual, not the default shell.

The GM-facing interaction should visually communicate:

`일 맡기기 → 카파피가 처리 중 → 결과 도착 → 검수`

not:

`일 맡기기 → 입찰 6개 공부하기 → 사람 고르기 → 관리하기`.

PLAYER-facing and internal operational surfaces may still expose BID competition, ranking and live routing state.

Visual direction:

- premium neutral tech-product tone
- white/off-white public marketplace foundation
- black/graphite typography
- thin HUD-like metadata used selectively
- examples: `LV.12`, `+240 EXP`, `QUEST #0182`, countdowns
- avoid swords, coins and obvious pixel-RPG clichés

Discovery and achievement can feel game-like.

Contracts, payment, NDA, delivery, dispute and settlement should remain sober and precise as money/risk increases.

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
- GM routing preference/acceptance history
- replacement/recovery data
- GM management-minute reduction

Potential loop:

`more transactions → better SOW/routing → higher delivery reliability → greater GM trust → more transactions`

Long-term defensibility depends less on having many profiles and more on knowing:

> **which work should go to which qualified PLAYER, at what cost, with what delivery probability and recovery path.**

---

## 22. Product principles

1. GM wants a result, not a PLAYER search experience.
2. **After a valid QUEST is submitted, routine PLAYER comparison/selection is KAPAPI's job.**
3. Remove outsourcing steps whenever reliability allows.
4. Marketize price + delivery time + trust together behind the GM experience.
5. Market discovers price; KAPAPI routes within GM constraints; GM owns final acceptance.
6. Make the SOW clear before removing the GM from the process.
7. Preserve proven safe-market mechanics; intentionally replace mandatory GM selection with data-backed routing.
8. Existing vendor relationships should be absorbed into the routing system, not attacked.
9. AI helps scope and route but is not an opaque subjective judge.
10. Gamification is a product language and reputation layer, not the core business proof.
11. Validate GM transactions before optimizing PLAYER registrations.
12. Architecture/CAD is a wedge, not the whole market.
13. Strong SLA/outcome guarantees start only in narrow, measurable categories.
14. Trade QUEST/results, not controlled employee time.
15. Keep reducing GM clicks, decisions and management minutes.
16. When routing fails, recovery/replacement should increasingly be KAPAPI's problem rather than returning vendor search to the GM.
