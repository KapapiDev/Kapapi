# KAPAPI Validation

Updated: 2026-09-03

KAPAPI is **not market-validated yet**.

This document separates evidence, hypotheses and experiments. Founder intuition, prototypes, interviews, concierge behavior and subsidized usage are not market proof by themselves.

---

## 1. Primary validation thesis

The new canonical question is not merely whether a task-first marketplace can transact.

It is:

> **Can a GM submit bounded digital work, accept one RESULT + PRICE + COMPLETION TIME offer, avoid choosing the executor, and still receive a satisfactory result at viable completed-outcome economics?**

That question contains four linked markets.

### Demand

Will GMs pay to remove:

- freelancer search;
- profile/BID comparison;
- repeated coordination;
- executor replacement after failure?

### Supply

Will people with spare time + useful skills accept bounded QUESTs, commit PRICE + DELIVERY and complete reliably without needing a storefront or fixed-shift job?

### Execution

Can KAPAPI scope, quote, route, monitor, check and recover the task reliably enough?

### Economics

Can the GM price cover:

`execution + payment + QA/support + expected revision/recovery + margin`?

The strongest early proof is:

> **external GM + own money + no PLAYER shopping + accepted result + positive completed-outcome contribution + repeat.**

---

## 2. Founder-origin supply hypothesis

KAPAPI began from:

> “퇴근 후 남는 시간에 내가 할 수 있는 작은 온라인 업무를 골라 끝내고 돈 벌고 싶다. 프리랜서 상점을 만들거나 고정 알바를 잡고 싶은 건 아니다.”

PLAYER hypotheses:

- P-01: visible real work activates supply better than “create a seller storefront”;
- P-02: bounded QUESTs are easier to judge than open-ended freelance projects;
- P-03: PRICE + DELIVERY makes fragmented availability economically legible;
- P-04: qualified PLAYERs will accept targeted Offers as well as browse open QUESTs;
- P-05: task-specific completion history improves future routing/trust;
- P-06: repeat participation depends on effective earnings, scope clarity and fair recovery rules.

These remain unproven until real repeated behavior appears.

---

## 3. GM hypotheses

Working hypotheses:

- GM-01: there is meaningful demand between `do it myself / use AI` and `hire/search/manage a freelancer or vendor`;
- GM-02: selection and coordination friction suppress delegation for bounded work;
- GM-03: some GMs prefer one execution offer over multiple worker choices;
- GM-04: GMs will pay a premium for reduced search, management and failure risk;
- GM-05: completion time is part of value, especially under deadline pressure;
- GM-06: clear SOW + recovery can unlock work that would otherwise remain internal/delayed;
- GM-07: repeat behavior can make KAPAPI external execution capacity rather than one-off discovery;
- GM-08: existing trusted vendors do not eliminate demand for overflow/backup/new capacity;
- GM-09: willingness to delegate differs sharply by category and task shape;
- GM-10: low-value tasks fully solved by AI may not support viable KAPAPI economics.

---

## 4. Initial category hypothesis

Do not test KAPAPI only on the cheapest mechanical work.

Preferred category shape:

> **AI만 맡기기엔 불안하고, 사람을 직접 찾기엔 작은, 범위와 검수가 가능한 디지털 업무.**

Test categories should have:

- clear digital input/output;
- repeatable scope patterns;
- enough value to pay for accountability;
- measurable completion criteria;
- revisable failures;
- several plausible executors/resources;
- low irreversible liability;
- some AI/automation leverage without making the human/accountability layer worthless.

Reject categories where the typical transaction is either:

- already near-free and safely automated; or
- fundamentally bespoke, relationship-heavy, regulated or judgment-heavy.

---

## 5. Experiment 1 — GM worker-selection removal

Compare, on the **same or closely matched task type**:

### Mode A — marketplace choice

`GM receives multiple PLAYER/BID choices → chooses executor`

### Mode B — KAPAPI execution offer

`GM receives one RESULT + PRICE + COMPLETION TIME → accepts/rejects`

Where ethically and operationally practical, randomize or alternate comparable users/tasks.

Measure:

- request → commitment conversion;
- time spent before execution begins;
- abandonment;
- confidence/anxiety;
- GM management minutes;
- completion/acceptance;
- repeat rate;
- willingness to pay / accepted premium;
- requests to inspect or choose the executor.

Continue signal:

> GM convenience and conversion improve without a large trust penalty.

Redesign signal:

> users want limited disclosure/control for specific categories but still prefer KAPAPI to narrow and route.

Kill signal for the default Outcome UX:

> most target GMs insist on personally choosing the executor and will not pay for KAPAPI's selection/recovery layer.

---

## 6. Experiment 2 — External paid outcome transaction

Target real GMs with real bounded work.

Required event chain:

```text
GM sends real work
→ valid SOW
→ KAPAPI offers price + completion time
→ GM spends own money
→ KAPAPI procures execution
→ result delivered
→ GM accepts or uses bounded revision
```

Stronger proof:

> the same GM returns with another self-funded task without needing to be re-sold on the concept.

Founder-funded tasks may validate supply/execution mechanics but **must not count as independent GM-demand proof**.

---

## 7. Experiment 3 — PRICE × DELIVERY internal market

PRICE × DELIVERY remains load-bearing even though the GM normally does not compare bids.

Measure:

- bid/offer PRICE distribution;
- DELIVERY distribution;
- acceptance speed;
- urgent-task premium;
- relationship between price/time and completion reliability;
- whether targeted offers outperform open bidding for standardized work;
- backup supply availability;
- PLAYER effective earnings.

Rethink if DELIVERY adds little useful allocation information or if supply requires excessive negotiation.

---

## 8. Experiment 4 — Assisted quote accuracy

For each early category, record before accepting the GM contract:

- offered GM price;
- offered completion time;
- internal expected execution cost;
- assumed QA/revision/recovery reserve.

After completion record:

- actual executor/resource cost;
- actual completion time;
- revision cost/time;
- QA/support minutes;
- recovery cost;
- final accepted outcome.

Track error distributions rather than only averages.

Important metrics:

- quote price error;
- completion-time error;
- percentage requiring operator override;
- margin variance;
- frequency of catastrophic underquote.

Near-instant quoting is earned only when a category's error distribution becomes predictable enough.

---

## 9. Experiment 5 — Completed-outcome unit economics

Canonical transaction metric:

```text
GM revenue
- executor / model / automation variable cost
- payment cost
- QA/support variable cost
- revision/rework cost
- recovery/replacement cost
= completed-outcome contribution margin
```

Measure both:

- contribution KRW per accepted outcome;
- contribution margin %;
- operator minutes per accepted outcome.

A category is dangerous when apparent gross margin disappears after failures, clarification, support and QA.

Kill or redesign a category if repeated real transactions show no credible path to positive contribution without underpaying supply or removing the user promise.

---

## 10. Experiment 6 — SOW standardization

Compare rough user input with the finalized executable SOW.

Measure:

- minutes to valid SOW;
- number of missing-information questions;
- operator intervention;
- executor clarification requests;
- revisions caused by scope ambiguity;
- percentage of fields/rules reusable from templates;
- repeat-task reuse.

A good category should become easier to specify as data accumulates.

If every task requires bespoke discovery calls, it risks becoming an agency rather than scalable execution infrastructure.

---

## 11. Experiment 7 — Recovery responsibility

KAPAPI's differentiation must survive failure.

For natural failures or controlled non-harmful simulations, measure:

```text
first execution path fails / is late
→ KAPAPI detects
→ alternate route/reassignment
→ GM does not restart supplier search
→ final result / refund path
```

Metrics:

- failure detection lead time;
- backup availability;
- recovery success rate;
- final on-time rate;
- recovery cost;
- GM management minutes during failure;
- GM satisfaction/repeat after recovered failure.

Kill/redesign signal:

> recovery routinely consumes the entire category margin or requires heavy manual case management.

---

## 12. Experiment 8 — AI / automation leverage

For suitable categories compare:

- human only;
- AI/automation only;
- AI first pass + human verification;
- human execution + automated preflight;
- hybrid exception handling.

Measure:

- variable cost;
- turnaround;
- objective error rate;
- revision rate;
- GM acceptance;
- human review minutes;
- failure/recovery cost.

Do not celebrate automation rate itself. The goal is **lower accepted-outcome cost without weaker trust**.

---

## 13. Trust and disclosure experiment

Outcome UX does not mean hiding information users legally or practically need.

Test how much executor information GMs need for different categories:

- no executor identity before work;
- credential/security summary only;
- named executor/partner disclosure;
- optional detailed profile.

Measure:

- conversion;
- trust objections;
- security objections;
- category differences;
- requests for manual selection.

Default to the least shopping-like UX that preserves legal, security and trust requirements.

---

## 14. Category scorecard

For each category track:

### Demand

- external self-funded requests;
- quote acceptance;
- transaction value;
- repeat GM frequency;
- willingness to pay for no-search/no-reselection convenience.

### Supply

- qualified active PLAYERs/resources;
- time to execution acceptance;
- PRICE × DELIVERY distributions;
- backup capacity;
- repeat PLAYER rate;
- effective earnings.

### Specification

- time to valid SOW;
- clarification count;
- template reuse;
- ambiguity-caused revision.

### Execution

- completion;
- on-time;
- acceptance;
- revision/rework;
- failure/recovery;
- objective QA coverage.

### Economics

- completed-outcome contribution;
- operator minutes;
- QA/support cost;
- recovery cost;
- automation leverage.

### Retention

- repeat GM;
- repeat PLAYER;
- direct-trade leakage;
- more tasks/volume routed through KAPAPI.

Total signup count is not a substitute for any of these.

---

## 15. Current research-load-bearing unknowns

These must not be waved away as “we'll test after launch.”

1. **GM premium/WTP:** is reduced search/selection/recovery valuable enough to pay for?
2. **Category economics:** can an early category support positive completed-outcome margin after QA/recovery?
3. **Operational scalability:** can operator minutes decline with standardization, or is KAPAPI structurally a manual agency?
4. **Supply liquidity:** can KAPAPI repeatedly secure credible execution inside promised windows?
5. **Legal/commercial structure:** what contracting/intermediary/service-provider structure is viable as KAPAPI controls routing and recovery?

These are the biggest score-limiting uncertainties in the current ScoutForge-style assessment.

---

## 16. Go / Pivot / Kill

### GO

Evidence repeatedly shows:

- GMs prefer/pay for one execution offer over worker shopping;
- useful supply accepts bounded work;
- PRICE × DELIVERY provides actionable procurement information;
- SOWs become increasingly repeatable;
- completion/recovery can be managed;
- completed-outcome contribution is positive or clearly improving toward positive;
- operator minutes fall with category repetition;
- self-funded repeat occurs.

### PIVOT

Examples:

- only some categories support Outcome UX;
- GM needs limited executor visibility;
- targeted Offers beat open BIDs;
- AI/automation becomes the primary resource for some categories;
- KAPAPI should focus on higher-value work bands;
- recovery terms need to be narrower;
- category-specific pricing replaces broad marketplace pricing.

### KILL / major rethink

Repeated real tests show:

- GMs will not pay to remove worker selection/coordination;
- task scope is rarely definable before execution;
- supply cannot be secured predictably;
- quote/time error is structurally high;
- QA/support/recovery scale linearly and erase margin;
- target tasks are mostly either safely automated at near-zero price or too bespoke for bounded execution;
- legal/commercial responsibility makes the intended model non-viable;
- repeat value does not emerge.

Do not protect the idea from negative evidence.
