# KAPAPI Product Design

Status: **canonical product direction**  
Updated: 2026-09-03

## 1. Product definition

KAPAPI is a **task-first online work execution platform**.

The core object is not a freelancer profile or a seller storefront. It is a bounded unit of work: a **QUEST**.

Initial PLAYER-facing form:

> Work already exists. A PLAYER finds a QUEST they can finish, commits **PRICE + DELIVERY TIME**, completes it and earns.

Initial GM-facing form:

> A GM defines the work and desired result once. KAPAPI makes the market easier to use, recommends the strongest fit from the resulting BIDs, and the GM confirms before execution.

Long-term form:

> **해야 할 일을 올리면, 결과로 돌아온다.**

KAPAPI should progressively reduce the need to search, compare, coordinate, recover and manage execution until the user increasingly experiences:

`work request → KAPAPI → result`

This long-term Outcome Layer is earned from real transaction, trust, liquidity, QA and recovery data. It is not assumed on day one.

---

## 2. Why KAPAPI starts task-first

The founder-origin problem is supply-side and concrete:

> “I have spare time and useful office skills. I want to pick a small online task I can actually finish and get paid for, without becoming a full-time freelancer, creating a storefront or taking a fixed-shift job.”

The mirrored GM problem is:

> “I have a bounded piece of work that needs to be finished, but hiring another employee or running a heavyweight outsourcing process feels disproportionate.”

KAPAPI connects:

- unused time + usable skill
- unresolved work + insufficient current capacity

Therefore KAPAPI starts **task-first**, not profile-first.

PLAYER mental model:

`find real work → judge fit → BID → finish → earn → build verified history`

GM mental model:

`define work → receive/review recommendation → confirm → receive result → accept/revise`

---

## 3. What kinds of work fit

KAPAPI is broader than only “professional work,” but it is not “anything imaginable” on day one.

Strong early QUEST properties:

- digitally transferable inputs
- bounded scope
- visible deliverable
- hours to roughly two days initially
- GM can inspect the result
- mistakes are revisable
- low irreversible liability
- enough comparable supply can exist

Examples:

- spreadsheet cleanup / comparison tables
- document formatting / structured data entry
- research and data organization
- PPT cleanup
- image cleanup/editing
- product listing work
- translation/proofreading
- subtitle/cut editing
- defined CAD/drawing support
- rendering
- small web/code fixes

Poor early fits:

- broad strategy consulting
- highly subjective full-brand work
- long, open-ended software projects
- complex architectural design
- regulated professional judgment without appropriate qualification
- high irreversible liability

Architecture/CAD is a founder-domain **testbed**, not the brand or market boundary.

---

## 4. Core market mechanism: PRICE × DELIVERY TIME

Every BID must include:

1. **PRICE** — compensation requested
2. **DELIVERY TIME** — committed elapsed time from assignment/contract to submission

Delivery time is not estimated labor hours.

Example:

| PLAYER | PRICE | DELIVERY |
| --- | ---: | ---: |
| A | ₩50,000 | 48H |
| B | ₩70,000 | 24H |
| C | ₩100,000 | 6H |

This matters because fragmented human availability has economic value. A PLAYER with a free evening may compete on speed; another may compete on price with a longer commitment. TIME ATTACK makes urgent capacity especially valuable.

KAPAPI is not a lowest-price auction. Useful selection signals can include:

- hard eligibility / credentials / security
- relevant career
- task-specific completion history
- on-time rate
- revision/rework rate
- failure/dispute history
- availability
- PRICE
- DELIVERY TIME
- GM deadline and budget/constraints

---

## 5. Selection architecture: recommendation first, routing later

Current authority: `DECISIONS.md` D-032.

KAPAPI should reduce selection burden early without pretending universal auto-routing is already solved.

Preferred early default:

```text
BIDs arrive
→ hard eligibility filter
→ trust / task fit / PRICE × DELIVERY ranking
→ KAPAPI recommendation
→ GM confirms recommended PLAYER
→ execution
```

Alternatives remain available for transparency and learning.

Early experiments may also use:

- lightweight GM BID selection
- concierge/manual KAPAPI routing

Routing should become increasingly automatic only after KAPAPI has enough evidence to know which signals predict successful outcomes.

Useful routing evidence includes:

- verified task-specific completions
- on-time behavior
- revision/rework
- failure/dispute history
- current availability
- category liquidity
- replacement/recovery success

AI can assist semantic task-fit and scope interpretation. It should not be the opaque sole authority.

---

## 6. Product evolution

### Stage A — Task Marketplace

GM:

`define QUEST → receive BIDs/recommendation → confirm → result → accept/revise`

PLAYER:

`discover QUEST → PRICE + DELIVERY BID → selected/assigned → execute → earn`

Purpose:

- prove that real work is posted
- prove useful PLAYER supply responds
- create real price/delivery distributions
- learn task-definition failures
- collect completion/revision/trust data

### Stage B — Trusted Work Market

KAPAPI learns who reliably completes which kinds of work.

Build:

- verified identity/career
- task-specific history
- on-time/revision/failure signals
- two-sided reputation
- category liquidity measurement
- secure transaction records

### Stage C — Intelligent Recommendation / Routing

Evolution:

`GM manually chooses → KAPAPI recommends → GM confirms → KAPAPI routes by default with override/recovery`

Add:

- file + short instruction → structured QUEST/SOW
- missing-information detection
- reusable templates
- reference price/delivery ranges
- contract/admin assistance
- late-risk detection
- backup PLAYER preparation
- replacement/reassignment

### Stage D — Repeat Business Capacity

Repeated GMs stop thinking “which freelancer should I search for?” and increasingly think:

> “Put this through KAPAPI.”

Add:

- repeat QUEST templates
- preferred/verified PLAYER pools
- existing vendor import
- organization history
- reusable SOW patterns
- team approvals where needed
- availability awareness
- routing policies
- backup/replacement capacity

### Stage E — Outcome Layer

Target:

`work in → KAPAPI scopes / decomposes / routes / executes-or-orchestrates / monitors / recovers / checks → result out`

At this stage the user should increasingly not care which internal mechanism produced the result.

---

## 7. Execution resources are not limited to PLAYERs

The marketplace begins with human PLAYERs because human transactions create supply and trust data.

The mature Outcome Layer may execute work using:

- human PLAYERs
- AI agents/models
- deterministic software automation
- specialist partner organizations
- AI + human hybrid workflows
- multi-PLAYER decomposition and aggregation

The user-facing unit remains the **result**, not the executor type.

KAPAPI should use the cheapest, fastest, safest credible execution path for the task while respecting quality, security and legal constraints.

---

## 8. SOW-first transaction design

Before KAPAPI can reduce human management, the order itself must be clear.

The platform should progressively turn vague input into a structured QUEST/SOW containing, where applicable:

- source/input files
- exact scope
- deliverables
- output format
- deadline
- budget/commercial boundary
- objective acceptance criteria
- revision boundary
- confidentiality/security requirements
- missing information

Example:

```text
Request: “이 자료 표로 정리해서 오늘 안에 주세요.”

KAPAPI structures:
- Source: 6 PDF files
- Scope: extract 12 named fields from each file
- Deliverable: XLSX, one row per document
- Deadline: today 18:00
- Acceptance: all 6 files represented; 12 fields present or marked N/A
```

Clear SOW reduces pricing ambiguity, clarification loops, revisions, disputes and future routing error.

---

## 9. Quality and recovery

Initial quality architecture:

### Layer 1 — objective preflight

Only check what software/AI can reliably verify:

- required files exist
- expected file types
- files open
- required outputs included
- objective checklist items where technically reliable

### Layer 2 — GM acceptance

The paying GM chooses:

- accept / QUEST COMPLETE
- request revision within scope

### Layer 3 — recovery / dispute

Distinguish:

- normal revision
- PLAYER late/failure
- replacement/reassignment
- scope dispute
- non-performance dispute

KAPAPI's long-term advantage is not merely choosing a good PLAYER once. It is recovering when execution fails without throwing the vendor-search problem back to the GM.

---

## 10. Trust model

PLAYER trust should become task-specific rather than a generic star score.

Useful signals:

- verified identity
- relevant career
- task/category completion history
- completion count
- on-time rate
- revision/rework rate
- failure/dispute history
- availability
- permitted portfolio
- LEVEL / EXP as a secondary world layer

Trust is two-sided. Future GM signals may include payment/transaction completion, approval speed, cancellation/dispute behavior and PLAYER feedback.

A user may be GM in one QUEST and PLAYER in another. These are contextual transaction roles, not permanent account classes.

---

## 11. Existing partners and disintermediation

Real GMs often already have trusted vendors. KAPAPI should not force them to discard those relationships.

Future routing pool may include:

- existing trusted partners
- open-market PLAYERs
- specialist partner organizations

KAPAPI can retain value through:

- unified work history
- contracts/NDA
- safe/compliant payment
- tax/admin evidence
- availability visibility
- backup supply
- recommendation/routing
- replacement/recovery
- eventual outcome assurance

Matching alone will not prevent direct relationships. KAPAPI must earn repeated use by making the whole work-to-result process better.

---

## 12. Category liquidity

KAPAPI is category-independent in vision but category-specific in execution.

A broad member count is not liquidity.

Each category should be treated as a micro-market and measured for:

- repeat GM demand
- qualified active supply
- BID density
- PRICE / DELIVERY distributions
- time to assignment
- completion reliability
- backup capacity

Open a new category only when KAPAPI can protect the transaction quality in that category.

---

## 13. AI role

Early AI should help with:

- task classification
- SOW generation
- missing-information detection
- semantic task-fit assistance
- reference price/delivery data
- objective preflight
- risk detection

Do not initially position AI as:

- authoritative final price setter
- subjective final quality judge
- regulated professional decision-maker
- magical sole selector of PLAYERs

As the Outcome Layer matures, AI may itself become part of execution where the task is suitable.

---

## 14. Business model

Monetization remains open until transaction economics are observed.

Candidates:

- PLAYER take rate
- GM transaction fee
- all-in price with embedded platform economics
- subscription/admin plan for repeat GMs
- hybrid models

Early mechanism tests may use fee = 0 and direct GM↔PLAYER payment where legally/operationally appropriate.

The long-term economics may change materially as AI/automation handles part of execution, but price should continue to reflect the value and risk of delivering the result rather than raw human hours alone.

---

## 15. Product guardrails

KAPAPI should not drift into:

- generic expert directory
- portfolio-first social network
- storefront clone
- long-project IT outsourcing board
- controlled hourly staffing product
- universal regulated-professional marketplace without category proof
- fake universal Autopilot before routing/recovery evidence exists

Every major feature should answer at least one of:

1. Does it make it easier for a PLAYER to find and complete suitable work?
2. Does it make it easier for a GM to turn unresolved work into a result?
3. Does it improve trust, liquidity, recommendation, routing, execution or recovery enough to improve 1 or 2?

If not, it is probably not core KAPAPI.

---

## 16. Strategic summary

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

Short form:

> **KAPAPI starts by making it easier to pick up and complete work, and grows into a system where you submit work and get the result back.**
