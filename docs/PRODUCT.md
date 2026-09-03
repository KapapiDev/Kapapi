# KAPAPI Product Design

Status: **canonical product direction**  
Updated: 2026-09-03

## 1. Product definition

KAPAPI is a **task-first online work execution platform**.

The core object is not a freelancer profile or seller storefront. It is a bounded unit of work: **업무**.

“Bounded” does not mean cheap, trivial or permanently small. It means the work can be scoped into a transaction with sufficiently clear input, expected result and completion boundary.

Initial worker-facing form:

> **Work already exists. A worker finds work they can finish, proposes price + completion time, completes it and gets paid.**

Initial client-facing form:

> **사람을 찾지 말고, 할 일을 올린다.** A client uploads the files, describes the work in one line, and sets an approximate price ceiling and deadline. KAPAPI organizes the market, selects a worker from the bids using conditions and work history, and returns the result. Per D-035 the client does not compare proposals or pick a worker; the selection's criteria stay visible to them.

Long-term form:

> **해야 할 일을 올리면, 결과로 돌아온다.**

KAPAPI should progressively reduce the need to search, compare, coordinate, recover and manage execution until the user increasingly experiences:

`work request → KAPAPI → result`

This long-term Outcome / Execution Layer is earned from real transaction, trust, liquidity, QA and recovery data. It is not assumed on day one.

---

## 2. Why KAPAPI starts task-first

Founder-origin problem:

> **I have spare time and useful office skills. I want to pick a small online task I can finish and get paid for, without becoming a full-time freelancer, creating a storefront or taking a fixed-shift job.**

Mirrored client problem:

> **I have bounded work that needs to be finished, but hiring another employee or running a heavyweight outsourcing process feels disproportionate.**

KAPAPI connects:

- unused time + usable skill
- unresolved work + insufficient current capacity

Therefore KAPAPI starts **task-first**, not profile-first.

The word “small” belongs to the founder-origin and initial behavior. It is not the permanent market boundary. KAPAPI should expand from easy-to-transact work into higher-value skilled and professional work while preserving the same work/result unit.

Worker mental model:

`find real work → judge fit → propose price + completion time → finish → get paid → build verified history`

Client mental model:

`define work → receive recommendation → confirm → receive result → accept/revise`

---

## 3. What kinds of work fit

Strong early work properties:

- digitally transferable inputs
- bounded scope
- visible deliverable
- hours to roughly two days initially
- client can inspect the result
- mistakes are revisable
- low irreversible liability
- enough comparable supply can exist
- transaction value can support payment/support/revision/recovery economics

### Data & Documents

- spreadsheet cleanup / comparison tables
- document formatting / structured data entry
- research and data organization
- PPT cleanup

### Content & Production

- image cleanup/editing
- product listing work
- translation/proofreading
- subtitle/cut editing

### Skilled Support

- defined CAD/drawing support
- rendering
- small web/code fixes
- other clearly bounded technical support work

Poor early fits:

- broad strategy consulting
- highly subjective full-brand work
- long, open-ended software projects
- complex architectural design
- regulated professional judgment without appropriate qualification
- high irreversible liability
- ultra-low-value microtasks whose support/revision economics are structurally unattractive

Architecture/CAD is a founder-domain **testbed**, not the brand or market boundary.

Public examples may show several families, but actual market validation should open categories narrowly and earn expansion with repeat demand + qualified supply + viable economics.

---

## 4. Core market mechanism: price × completion time

Every proposal must include:

1. **가격** — requested compensation
2. **완료시간** — committed elapsed time from assignment/contract to submission

Completion time is not estimated labor hours.

Example:

| 작업자 | 가격 | 완료시간 |
| --- | ---: | ---: |
| A | ₩32,000 | 5시간 |
| B | ₩40,000 | 2시간 |
| C | ₩55,000 | 45분 |

This should be one of KAPAPI's most memorable product moments.

It matters because fragmented human availability has economic value. A worker with a free evening may compete on speed; another may compete on price with a longer commitment. Urgent work makes speed especially valuable.

KAPAPI is neither lowest-price-wins nor fastest-wins. Useful selection signals can include:

- hard eligibility / credentials / security
- relevant career
- task-specific completion history
- on-time rate
- revision/rework rate
- failure/dispute history
- availability
- price
- completion time
- client deadline and budget/constraints

---

## 5. Selection architecture: recommendation first, routing later

Current authority: `DECISIONS.md` D-032 through D-034.

Preferred early default:

```text
제안 도착
→ 필수요건 확인
→ 작업이력 / 업무 적합도 / 가격 × 완료시간 정렬
→ KAPAPI 선정
→ 수행
```

Per D-035 the selection is KAPAPI's and there is no client confirmation step. The
criteria and the excluded bids stay visible as a record of what was decided, which
is what keeps the selection inspectable rather than magical — `PRODUCT.md` §13
rules out positioning AI as a sole and unexplained selector, not the selection
itself.

Early experiments may also use lightweight client choice or concierge/manual routing.

Routing should become increasingly automatic only after KAPAPI has enough evidence to know which signals predict successful outcomes.

Useful routing evidence includes:

- verified task-specific completions
- on-time behavior
- revision/rework
- failure/dispute history
- current availability
- category liquidity
- replacement/recovery success

AI can assist semantic task fit and scope interpretation. It should not be the opaque sole authority.

---

## 6. Product evolution

### Stage A — Task Marketplace

Client:

`define work → receive proposals/recommendation → confirm → result → accept/revise`

Worker:

`discover work → price + completion-time proposal → selected/assigned → execute → get paid`

Purpose:

- prove real work is posted
- prove useful supply responds
- create real price/completion-time distributions
- learn task-definition failures
- collect completion/revision/trust data
- find categories and transaction-value bands with repeatable economics

Validate one or two category micro-markets at a time.

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

`client manually chooses → KAPAPI recommends → client confirms → KAPAPI routes by default with override/recovery`

D-035 moved the **prototype surface** to the routing end of this line so the
product thesis can be seen. The business still has to earn each step with real
transaction, trust and recovery data — the prototype demonstrates the destination,
it does not assert the capability is proven.

Add:

- file + short instruction → structured work specification
- missing-information detection
- reusable templates
- reference price/completion-time ranges
- contract/admin assistance
- late-risk detection
- backup worker preparation
- replacement/reassignment

### Stage D — Repeat Business Capacity

Repeated clients stop thinking “which freelancer should I search for?” and increasingly think:

> **“카파피로 보내.”**

Add:

- repeat-work templates
- preferred/verified worker pools
- existing vendor import
- organization history
- reusable specifications
- team approvals where needed
- availability awareness
- routing policies
- backup/replacement capacity

### Stage E — Outcome / Execution Layer

Target:

`work in → KAPAPI scopes / decomposes / routes / executes-or-orchestrates / monitors / recovers / checks → result out`

At this stage the user increasingly does not care which internal mechanism produced the result.

---

## 7. Execution resources are not limited to human workers

The marketplace begins with human workers because real transactions create supply and trust data.

The mature execution layer may use:

- human workers
- AI agents/models
- deterministic software automation
- specialist partner organizations
- AI + human hybrid workflows
- multiple workers on decomposed tasks

The user-facing unit remains the **result**, not the executor type.

KAPAPI should use the fastest, safest and economically credible execution path while respecting quality, security and legal constraints.

---

## 8. Scope-first transaction design

Before KAPAPI can reduce human management, the order itself must be clear.

The platform should progressively turn vague input into a structured work specification containing, where applicable:

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

Clear scope reduces pricing ambiguity, clarification loops, revisions, disputes and future routing error.

---

## 9. Quality and recovery

### Layer 1 — objective preflight

Only check what software/AI can reliably verify, such as required files, file type, required outputs and objective checklist items.

### Layer 2 — client acceptance

The paying client chooses:

- accept / complete
- request revision within scope

### Layer 3 — recovery / dispute

Distinguish normal revision, worker late/failure, replacement/reassignment, scope dispute and non-performance dispute.

KAPAPI's long-term advantage is not merely choosing a good worker once. It is recovering when execution fails without throwing the vendor-search problem back to the client.

---

## 10. Trust model

Worker trust should be task-specific rather than a generic star score.

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

Trust is two-sided. Future client signals may include payment completion, approval speed, cancellation/dispute behavior and worker feedback.

A user may be a client in one transaction and a worker in another. These are contextual roles, not permanent account classes.

---

## 11. Existing partners and disintermediation

Real clients often already have trusted vendors. Future routing may include:

- existing trusted partners
- open-market workers
- specialist partner organizations

KAPAPI can retain value through unified work history, contracts/NDA, compliant payment, tax/admin evidence, availability, backup supply, recommendation/routing, replacement/recovery and eventual outcome assurance.

Matching alone will not prevent direct relationships. KAPAPI must earn repeated use by making the whole work-to-result process better.

---

## 12. Category liquidity

KAPAPI is category-independent in vision but category-specific in execution.

A broad member count is not liquidity.

Measure each category for:

- repeat client demand
- qualified active supply
- proposal density
- price / completion-time distributions
- time to assignment
- completion reliability
- backup capacity
- support/revision/recovery cost
- contribution after transaction costs

Open a new category only when KAPAPI can protect both transaction quality and economics.

---

## 13. AI role

Early AI should help with:

- task classification
- work-specification generation
- missing-information detection
- semantic task-fit assistance
- reference price/completion-time data
- objective preflight
- risk detection

Do not initially position AI as:

- authoritative final price setter
- subjective final quality judge
- regulated professional decision-maker
- magical sole selector of workers

As the execution layer matures, AI may itself become part of execution where suitable.

---

## 14. Business model and economic guardrail

Monetization remains open until transaction economics are observed.

Candidates:

- worker-side transaction fee
- client-side transaction fee
- all-in price with embedded platform economics
- subscription/admin plan for repeat clients
- hybrid models

Early mechanism tests may use fee = 0 and direct client↔worker payment where legally/operationally appropriate.

KAPAPI should not optimize for the maximum number of tiny transactions if they cannot support payment, support, clarification, revision, dispute handling, recovery, acquisition and platform contribution.

Measure the **minimum viable transaction value** by category and introduce floors, bundling or category exclusion when economics require it.

The strategic goal is **clear work units**, not cheap labor units.

---

## 15. Product guardrails

KAPAPI should not drift into:

- generic expert directory
- portfolio-first social network
- storefront clone
- long-project IT outsourcing board
- controlled hourly staffing product
- low-value microtask race
- universal regulated-professional marketplace without category proof
- fake universal automation before routing/recovery evidence exists
- separate fictional/game terminology that users must learn

Every major feature should answer at least one of:

1. Does it make it easier for a worker to find and complete suitable work?
2. Does it make it easier for a client to turn unresolved work into a result?
3. Does it improve trust, liquidity, recommendation, routing, execution or recovery enough to improve 1 or 2?

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

Worker-side short form:

> **할 수 있는 일을 골라서, 끝내고, 돈 번다.**

Client-side short form:

> **사람을 찾지 말고, 할 일을 올린다.**

North Star:

> **해야 할 일을 올리면, 결과로 돌아온다.**


## 실행 계약 (D-033.1)

발주자가 승인하는 것은 작업자가 아니라 **실행 계약**입니다.

```text
업무 요청 (파일 + 한 줄)
→ 카파피가 작업 조건(SOW) 정리
→ 실행 계약: 결과물 + 가격 + 완료시간 + 수정 경계 + 복구 경계
→ 발주자 승인
→ (카파피: 제안 · 필수요건 확인 · 선정 · 배정 · 수행)
→ 결과 → 수락 / 수정 요청
```

발주자 기준으로는 세 노드입니다 — **발주자 → 카파피 → 결과**. 가격은 해당 유형에 실제로
들어온 제안에서 산출하고 그 근거를 함께 표시합니다(D-033.6: instant quote is earned).
