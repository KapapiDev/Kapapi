# KAPAPI Roadmap

Updated: 2026-09-01

## North star

KAPAPI should evolve from a visible marketplace into a system where a GM can submit work and receive the required result by the required time with minimal management overhead.

Long-term flow:

> **work in → orchestration → result out**

The marketplace is the bootstrap layer. Autopilot is the destination.

---

## Phase 0 — 1R application readiness

**Current phase**

Goal: pass the 1R idea review of the 2026 모두의 창업 프로젝트 while building only the prototype necessary to make the mechanism obvious and believable.

### Deliverables before application deadline

- working or convincingly interactive web prototype
- GM → QUEST creation flow
- PLAYER → mandatory price + delivery BID flow
- GM comparison and selection flow
- PLAYER profile with relevant career/history
- TIME ATTACK representation
- LEVEL / EXP representation
- architecture/CAD example QUEST
- visible NDA/security concept
- 30–60 second demo
- application images/screens where useful
- initial GM interview evidence

### Prototype scope rule

Do **not** build production infrastructure before it is needed.

Prototype target:

- design quality: high
- transaction concept clarity: very high
- backend completeness: low
- payment/settlement maturity: mock/deferred
- reliability guarantee: not claimed yet

Explicitly defer:

- production PG/escrow
- tax automation
- advanced dispute handling
- complex messaging
- native mobile apps
- full credential verification automation
- full Autopilot outcome guarantee

### Current 1R mentor-institution working choice

For Daejeon, the current working preference is **Mokwon University Industry-Academic Cooperation Foundation** because its published indicators strongly match founder experience, differentiation, customer/market clarity, BM feasibility and MVP/market-validation planning.

Re-evaluate before submission if institution-level application volume/T/O becomes observable.

---

## Phase 1 — 1R: prove the problem and transaction

Goal: move from a compelling idea to evidence that external GMs will submit real work and pay to have it completed.

The 1R period should be treated primarily as a **validation period**, not a full-product sprint.

### GM validation

Test:

- whether short capacity/deadline/skill gaps occur repeatedly
- which exact work types trigger outsourcing
- what prevents outsourcing today
- whether GMs delegate to unknown professionals under sufficient trust safeguards
- whether reducing explanation/admin changes actual behavior
- whether price + delivery time is useful in selection

Suggested evidence target before 2R:

- 15–30 external GM interviews in a narrow initial wedge
- multiple real QUEST attempts
- externally funded transactions where practical
- documented refusals and reasons, not only positive interviews

### PLAYER validation

- recruit qualified PLAYERs in one narrow category
- verify relevant career/history rather than only self-declared skill
- measure willingness to submit price + delivery simultaneously

### Core metrics

- QUEST creation completion rate
- time to first valid BID
- valid BIDs per QUEST
- GM selection rate
- completion rate
- on-time rate
- revision/rework rate
- actual transaction value
- GM willingness to pay
- GM reuse intent
- external GM repeat transaction
- security/contract objection rate

Primary question:

> **Will real GMs submit real work and pay to have it completed?**

Do not optimize vanity metrics such as PLAYER registrations before answering this.

---

## Phase 2 — 2R: commercial-beta MVP

Goal: use validated demand to build a real transaction system and run meaningful market tests.

The announced general/technical-track structure includes up to KRW 20 million of differentiated MVP-production support in 2R. Expensive production work should be reserved for this phase where possible.

### Production MVP scope

#### Accounts and trust

- GM / PLAYER accounts without permanent role lock-in
- identity verification path
- PLAYER career/skill/task-history representation
- ratings and on-time history

#### QUEST lifecycle

- QUEST creation
- file upload
- AI-assisted task scoping/SOW generation
- missing-information prompts
- BID: price + committed delivery time
- GM selection
- work status
- submission
- revision request
- completion
- review

#### Workroom

- messages/comments
- files
- structured requirements
- delivery history
- audit trail

#### Security / contract

- NDA templates
- data-use/portfolio restrictions
- retention/deletion terms
- task contract record

#### Money and administration

Subject to legal/accounting review:

- PG/escrow partner integration
- payment evidence
- settlement workflow
- appropriate tax/evidence handling by participant type

KAPAPI should not directly hold customer funds in its operating account.

#### Reliability

- notifications
- late-risk detection
- cancellation/replacement flow
- basic dispute path

### Existing-partner layer

Begin testing:

- save/import trusted external partners
- invite them to a QUEST
- compare existing-partner and open-market proposals
- partner availability
- historical price/delivery data

This tests whether KAPAPI can become the GM's default external-work operating layer.

---

## Phase 3 — Assist Mode

Goal: remove most GM coordination work.

Flow:

`upload + short instruction → AI QUEST → recommended execution option → GM approval → result`

Capabilities:

- robust task decomposition
- category-specific requirement templates
- reference market price/time
- automatic shortlisting
- security requirement inference
- contract/admin automation
- early failure detection
- alternative PLAYER recommendation

Success condition:

> The GM spends materially less time delegating than doing the task or managing a conventional freelancer search.

---

## Phase 4 — Autopilot pilot

Goal: prove a narrow category can reliably support:

`work drop → KAPAPI execution → result`

Do **not** launch Autopilot broadly.

Choose only task types with:

- clear digital inputs
- objective-enough outputs
- repeatable work specification
- reliable quality inspection
- sufficient qualified supply
- low regulatory/irreversible-risk exposure

Architecture CAD digitization is a candidate research category, not an automatic launch decision.

### Autopilot operating requirements

- automatic routing or controlled internal bidding
- SLA promise logic
- backup PLAYER capacity
- replacement procedure
- basic pre-delivery QA
- escalation path
- pricing that absorbs failure/recovery cost

### Required proof before strong outcome promises

- high on-time completion
- low rework rate
- repeatable specification quality
- predictable cost distribution
- successful replacement/recovery cases
- positive unit economics after failure allowance

---

## Phase 5 — category expansion

Expand only after one category demonstrates transaction-market fit.

Candidate dimensions:

- design/production
- data/spreadsheet
- e-commerce operations
- media editing
- simple software/web fixes
- language/content production

Expansion rule:

> **Do not add a category merely because PLAYERs exist. Add it when there is repeat GM demand and enough liquidity to protect delivery reliability.**

---

## Stage gates

### Gate A — continue after initial validation

Need evidence that:

- real capacity/deadline gaps occur
- GMs will delegate to unknown professionals under sufficient trust safeguards
- PRICE × DELIVERY is useful
- transaction friction can beat the “I will just do it myself” alternative

### Gate B — justify production marketplace

Need actual paid transactions and sufficient supply response.

### Gate C — justify Assist

Need recurring structured work and enough data to improve task specification/routing.

### Gate D — justify Autopilot

Need measurable delivery/quality reliability, backup liquidity and viable recovery economics.

---

## Explicit non-goals for now

- broad all-category marketplace from day one
- hourly employment/shift marketplace
- worker dispatch model
- regulated professional-judgment marketplace
- AI as authoritative price/quality judge
- maximizing feature count before GM validation
