# KAPAPI Product Design

Status: **canonical product direction**  
Updated: 2026-09-01

## 1. One-line definition

KAPAPI is a professional-work platform where a GM submits a short online task and receives the required result with as little coordination overhead as possible.

Initial mechanism:

> GM posts a QUEST → PLAYERs BID with **price + delivery time** → GM selects → work is completed.

Long-term product promise:

> **Drop work. Get results.**

The final product should progressively hide expert search, proposal comparison, contracting, security administration and coordination behind a simple outcome request.

---

## 2. Core customer insight

The target GM is not simply “a one-person business.”

A better definition is:

> **A person or small organization that suddenly has a professional task exceeding its available internal capacity.**

Current demand-trigger hypotheses:

1. **Capacity Gap** — the GM can do the work but does not have the time.
2. **Skill Gap** — the required skill does not exist internally.
3. **Deadline Gap** — the work can be done internally, but not before the deadline.
4. **Employment Gap** — demand is too irregular to justify permanent hiring.

Likely early GM segments:

- 1–10 person professional-service firms
- solo professionals with stable revenue
- small architecture/interior/design studios
- agencies and production studios
- small e-commerce/marketing/creator teams
- small software/startup teams

The initial wedge is architecture/CAD because the founder understands the domain and can judge output quality. Architecture is a testbed, not the final market boundary.

---

## 3. KAPAPI world

Brand terms:

- **GM** — client / QUEST issuer
- **PLAYER** — independent professional
- **QUEST** — defined unit of work
- **BID** — proposal containing both price and delivery time
- **REWARD** — compensation
- **TIME ATTACK** — urgent QUEST
- **LEVEL / EXP** — verified reputation and execution history
- **QUEST COMPLETE** — completion state

Brand principle:

> **겉은 게임처럼 재미있게, 속은 Upwork보다 진지하게.**

Current slogan direction:

> **WORK IS A QUEST.**

The game layer is for discovery, motivation and memorability. Contracts, payments, security and disputes must feel professional and trustworthy.

---

## 4. Core transaction mechanism

Every PLAYER BID must include:

- price
- committed elapsed delivery time from acceptance to delivery

Example:

- 100,000 KRW / 18H
- 150,000 KRW / 8H
- 220,000 KRW / 4H

Delivery time is **not labor-hour estimation**. It is the promised elapsed time until submission.

The GM should not be pushed into lowest-price selection. Ranking/recommendation should eventually consider:

- relevant industry career
- task-specific completion history
- LEVEL / EXP
- rating
- on-time delivery rate
- revision/rework rate
- price
- delivery time
- current availability

---

## 5. The deeper product insight

Traditional freelance marketplaces start with **people**:

`search → profile → inquiry → quote → schedule → contract → explain → manage → revise → result`

KAPAPI should increasingly start with **the desired result**:

`work → orchestration → result`

The key GM insight from the first architecture interview:

> The GM does not fundamentally want to find a PLAYER. The GM wants the desired quality result by the required time with minimum management burden.

PLAYER identity, bidding, contracts and routing are means to that result.

This creates a potential new platform form:

> **not “find a freelancer,” but “order professional-work outcomes.”**

---

## 6. Product evolution

### Stage A — Marketplace Mode

Visible flow:

`QUEST → BID → GM comparison → PLAYER selection → work → delivery → review`

Purpose:

- prove demand
- create category liquidity
- gather transaction data
- learn which work types are standardizable
- establish trust signals

### Stage B — Assist Mode

Flow:

`file + short instruction → AI-generated QUEST → KAPAPI recommendations → GM approval → execution → result`

Assist functions:

- generate SOW/work instruction from files and short text
- identify missing information
- structure deliverables and deadline
- suggest reference price/time using accumulated market data
- shortlist relevant PLAYERs
- prepare NDA/contract/admin flow

### Stage C — Autopilot Mode

Target flow:

`GM drops work → KAPAPI orchestrates → GM receives result and inspects`

Internally KAPAPI may:

- classify the task
- create the work specification
- select or auction among PLAYERs
- secure files and contracts
- track execution
- detect deadline risk
- replace failed PLAYERs
- perform basic pre-delivery checks
- deliver against an SLA

Autopilot is the long-term north star, **not an initial MVP promise**.

---

## 7. Initial task-fit rules

Good early QUEST types are expected to be:

- fully digitally transferable
- clear in output
- completable within hours to roughly two days
- easy for the GM to inspect
- reasonably standardizable
- correctable when mistakes occur
- low enough in regulatory/irreversible liability

Candidate examples:

- CAD digitization from provided source material
- rendering
- image cleanup/editing
- PPT cleanup
- spreadsheet/data cleanup
- simple coding/web fixes
- product listing/data entry
- translation/proofreading
- subtitle/cut editing

Poor early fits:

- broad strategy consulting
- large software projects
- highly subjective long-form creative direction
- regulated professional judgment
- work with high irreversible liability

---

## 8. Architecture/CAD wedge

Representative early QUEST:

> Convert provided hand-drawn/current-condition building drawings into a specified DWG deliverable by a fixed deadline.

Important correction:

This is **not “work too trivial for employees.”** It is legitimate project work that becomes a bottleneck when a small office has overlapping projects or insufficient temporary capacity.

Architecture-specific trust signals may include:

- verified identity
- architecture-office career, e.g. “5 years at an architecture office”
- relevant CAD task history
- completion count
- on-time rate
- revision rate

Relevant career matters because it reduces explanation cost. A GM can infer that a PLAYER with genuine architecture-office experience understands normal conventions without lengthy instruction.

---

## 9. Existing partners are part of the product

Real GMs often already have trusted external vendors. KAPAPI should not force them to abandon those relationships.

Future capability:

- save/import existing partners
- send a QUEST to existing partners and the open market simultaneously
- compare existing and new proposals in one view
- show partner availability
- retain historical price/delivery/quality data
- recommend a substitute when a preferred partner is unavailable

This moves KAPAPI toward an **external-work operating layer** rather than only a first-time discovery marketplace.

---

## 10. Trust, security and administration

For professional work, transaction friction is not only search friction.

KAPAPI should eventually reduce:

- explanation burden
- contract burden
- NDA/confidentiality burden
- payment evidence burden
- tax/admin burden
- vendor-history management
- replacement burden when a PLAYER fails

Security requirements for confidential work may include:

- QUEST-specific NDA
- third-party disclosure prohibition
- portfolio-use prohibition unless explicitly authorized
- data deletion/retention obligations
- contract and delivery history
- dispute evidence

---

## 11. Disintermediation risk

A good PLAYER can become a long-term direct vendor. This is a real risk and is not considered solved.

KAPAPI must earn repeat use through value beyond first discovery:

- contracts/NDA
- payment and evidence handling
- tax/admin convenience
- vendor history
- comparison market
- backup supply
- availability visibility
- dispute support
- eventually SLA/outcome assurance

Artificial lock-in should not substitute for product value.

---

## 12. Data/moat hypothesis

Potential compounding assets:

- task/category liquidity
- verified task-specific PLAYER graph
- price distributions
- delivery-time distributions
- quality and revision history
- routing success data
- failure/recovery data
- GM preference history
- reliable replacement operations

Potential flywheel:

`more transactions → better task classification/routing → better delivery reliability → more GM trust → more transactions`

---

## 13. North-star product question

For every GM-facing step ask:

> **Can this step disappear from the GM's workflow?**

If KAPAPI can reliably remove search, explanation, contracting, coordination and replacement while still producing the desired result, that reduction in management burden is the product.
