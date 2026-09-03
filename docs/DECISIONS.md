# KAPAPI Decisions

Updated: 2026-09-03

This file records durable product/business decisions. When a decision changes, the newer decision takes priority.

---

## D-001 — KAPAPI is the service name

Use **KAPAPI / 카파피** as the service name. Trademark and same-name conflict clearance remains required before commercial launch.

---

## D-002 — Use ordinary work-market terminology

**Current decision:** KAPAPI uses terminology that a first-time user, reviewer or judge can understand without a glossary.

Canonical public terms:

- client / issuer → **발주자**
- worker / performer → **작업자**
- task / work unit → **업무**
- price + completion-time offer → **제안**
- compensation → **작업대금**
- urgent task → **긴급 업무**
- reputation/performance → **작업이력 / 신뢰지표**
- completion → **업무 완료**

Do not introduce a separate fictional, game-like or role-play vocabulary in product copy, application materials, prototype states or visual metadata.

**Reason:** KAPAPI's differentiation is the transaction mechanism and long-term execution model. Additional vocabulary creates explanation cost and weakens submission clarity.

---

## D-003 — Every proposal includes price + committed completion time

A worker proposal must include both:

1. **price**
2. **committed completion time** measured from assignment/contract to submission

Completion time is not estimated labor hours.

Urgent work can therefore create willingness to pay for faster delivery.

---

## D-004 — Fixed-price/result-based first

Initial KAPAPI focuses on result-based, fixed-price work rather than controlled hourly work.

---

## D-005 — Architecture/CAD is a testbed, not the market definition

Use architecture/CAD for realistic founder-domain testing, interviews and quality judgment. Do not define KAPAPI as a construction or CAD outsourcing service.

---

## D-006 — Demand is defined by unresolved work and insufficient capacity

The relevant client is not limited to one-person businesses or one industry. A useful demand trigger is a person or organization with bounded work that exceeds current time, skill or staffing capacity.

---

## D-007 — Self-completion is a primary competitor

Treat “I'll just do it myself / work late” as a major alternative. KAPAPI must reduce delegation, explanation and selection burden, not merely improve worker discovery.

---

## D-008 — Relevant career and task history are core trust signals

Worker trust should emphasize relevant experience, similar-work completion history, on-time rate, revision/rework and failure/dispute history rather than generic star ratings alone.

---

## D-009 — Existing vendors can belong in the future execution pool

Organizations often already have trusted external partners. KAPAPI should eventually support both existing partners and open-market workers instead of forcing users to discard established relationships.

---

## D-010 — Disintermediation is real

Do not assume repeat work stays on-platform because KAPAPI made the first match. Retention must be earned through contracts, payment/admin evidence, history, availability, backup supply, recommendation, recovery and eventual outcome assurance.

---

## D-011 — Long-term product shifts from finding a person to getting a result

North Star:

> **해야 할 일을 올리면, 결과로 돌아온다.**

The mature product should minimize the user's need to search, compare, coordinate and recover execution.

---

## D-012 — Marketplace data comes before strong automation

Do not jump directly to universal automatic assignment or outcome guarantees. Real transactions must first create supply, price, completion-time, task-fit, trust, failure and recovery data.

---

## D-013 — AI assists before it judges

Early AI may help structure vague requests, identify missing information, assist task fit and perform objective checks where reliable.

Do not initially position AI as an authoritative final price setter, subjective quality judge or substitute for regulated professional judgment.

---

## D-014 — Security/NDA is a product concern

Confidentiality, file handling, NDA, access control and auditability are product requirements where the work demands them.

---

## D-015 — The pre-1R prototype is intentionally thin

Before the 모두의 창업 1R application, demonstrate only the essential loop:

```text
업무 등록
→ 작업자들이 가격 + 완료시간 제안
→ KAPAPI 추천
→ 발주자 확정
→ 수행
→ 결과 전달
→ 수락 / 수정 요청
```

*(Superseded by D-035: the 발주자 확정 step is removed from the client surface.)*

Show real task history and urgent-work behavior where useful. Do not spend pre-1R effort on production payment custody, tax automation, deep dispute tooling or universal outcome guarantees.

---

## D-016 — 1R success is clarity + credible validation, not feature count

Optimize for immediate understanding, a convincing prototype and a realistic market-validation plan.

---

## D-017 — Current mentor-institution working choice: Mokwon University

The current Daejeon working choice remains Mokwon University Industry-Academic Cooperation Foundation unless better application-volume/fit evidence appears.

---

## D-018 — Approved canon ultimately belongs on main

Design work may be prepared on a separate branch, but approved documentation and deployable product should ultimately converge on `main` to prevent design/code drift.

---

## D-019 — Preserve proven marketplace safety mechanics

Benchmark proven transaction mechanics such as proposal, contract, safe payment, milestones when needed, work records, delivery, approval/revision, settlement, two-sided review and dispute protection.

KAPAPI differentiates through task-first discovery, lightweight price + completion-time proposals, reduced delegation burden, recommendation/routing and long-term outcome execution.

---

## D-020 — Clear scope before sophisticated QA

Turn vague requests into clear work specifications with inputs, scope, outputs, deadline, acceptance criteria and revision boundary before attempting advanced automated quality judgment.

---

## D-021 — Initial quality architecture has three layers

1. objective automated preflight where reliable
2. client acceptance / revision
3. recovery or dispute process when needed

---

## D-022 — Early operation may be concierge-assisted

Manual or AI-assisted scoping and recommendation may sit behind the prototype experience while KAPAPI learns what later automation must do.

---

## D-023 — Founder-funded work validates supply, not external demand

Founder-originated paid tasks may seed workers and test the transaction engine. They must be excluded from primary external willingness-to-pay evidence.

---

## D-024 — Self-funded repeat is the strongest early client signal

If subsidies are used, judge success by whether an external client returns and funds another task with their own money.

---

## D-025 — Trust is two-sided

Workers need task-specific client signals too, including payment completion, approval behavior, cancellations/disputes and prior worker feedback.

One account may be a client in one transaction and a worker in another. These are contextual transaction roles, not permanent account classes.

---

## D-026 — Liquidity is category-specific

Total user count does not prove a category works. Each category is a separate micro-market and needs repeat demand plus qualified active supply.

---

## D-027 — Monetization remains open

Do not hard-code a 10% take rate. Test client fee, worker fee, all-in pricing, subscriptions for repeat organizations and hybrid models after transaction economics are observed.

---

## D-028 — Controlled recurring worker-hours are not the current product

Do not sell employee-like controlled hour blocks as the core model. The current unit is completed work/result.

---

## D-029 — Visual direction is premium work software + real operational metadata

Use a precise, premium, light-first product direction influenced by Linear, Vercel, Mercury, Raycast and strong marketplace patterns.

Operational metadata should represent real evidence, for example:

- `유사 업무 42건`
- `정시완료 98%`
- `수정 요청 4%`
- `제안 5건`
- `마감까지 2시간`

Do not use decorative progression levels, experience points or fictional state labels.

---

## D-030 — Product language is ordinary work language

External explanation, product UI and submission materials should lead with the actual behavior:

- work exists first
- workers propose price + completion time
- KAPAPI selects based on conditions and history
- the result is delivered
- transaction data enables later routing and recovery

*(Amended by D-035; the client-confirmation line is removed.)*

There is no separate vocabulary layer users must learn.

---

## D-031 — Day-one universal automatic assignment was rejected

The earlier idea that KAPAPI should automatically select every worker immediately after submission is superseded. Reducing selection burden remains strategically valuable, but responsibility must grow with evidence.

---

## D-032 — Task-first market first; routing responsibility is earned

Canonical growth path:

```text
Task Marketplace
→ Trusted Work Market
→ Intelligent Recommendation / Routing
→ Repeat Business Capacity
→ Outcome / Execution Layer
```

Preferred early flow:

```text
업무 등록
→ 제안 도착
→ 필수요건 확인
→ KAPAPI 추천
→ 발주자 확정
→ 수행
→ 결과
```

*(Superseded by D-035 for the prototype surface: KAPAPI 선정 replaces 추천 + 발주자 확정.)*

Early transactions may use concierge/manual routing behind the contract for controlled experiments. *(Superseded in part: D-033.1 and D-035 remove client confirmation and client choice from the product surface. What remains available is back-office procurement, which the client does not see.)*

Reliable routing must be earned from real completion, on-time, revision, failure, availability, category-liquidity and recovery evidence.

---

## D-033 — Bounded work, not cheap microtasks; execution is the ceiling

The founder-origin starts with small after-work tasks, but the permanent product boundary is **finishable, inspectable work**, not low price or low skill.

A suitable work unit has sufficiently clear input, scope, expected deliverable, completion boundary and acceptance/revision path.

KAPAPI should validate one or two category micro-markets at a time and find the minimum viable transaction-value band that can support worker compensation, payment, support, revisions, recovery, acquisition and platform contribution.

The long-term execution layer may use:

- human workers
- AI agents/models
- deterministic automation
- specialist partners
- AI + human hybrids
- multiple workers on decomposed tasks

The user-facing unit remains the result.

---

## D-033 execution-market series — imported from the `개선안` canon

The founder's canonical decisions from the `개선안` redesign workspace (D-018: that
branch is the current redesign workspace), brought onto this branch on 2026-09-03
and restated in D-034 vocabulary — GM / PLAYER / QUEST / BID became 발주자 / 작업자 /
업무 / 제안. Nothing else is changed.

**D-035 was derived independently on this branch and says less than D-033.1 does.**
See the amendment recorded under D-035.

## D-033.1 — Default 발주자 product is an Execution Contract

The 발주자 should normally buy:

```text
defined RESULT
+ PRICE
+ COMPLETION TIME
+ acceptance/revision boundary
+ recovery/refund boundary
```

Default flow:

```text
work request / files
→ KAPAPI structures SOW
→ Execution Contract
→ 발주자 accepts
→ KAPAPI procures/routes execution internally
→ result
→ accept / revise
```

The default 발주자 flow must **not** require comparing several 작업자, profiles or 제안.

Executor information may still be disclosed where law, credentials, security or user trust requires it.

## D-033.2 — 작업자 market remains task-first

The founder-origin supply mechanism remains canonical:

```text
real 업무 exists
→ 작업자 finds or receives suitable work
→ PRICE + DELIVERY 제안 / Offer acceptance
→ execute
→ 작업대금
→ task-specific history
```

작업자 do not need storefront-first seller behavior.

## D-033.3 — PRICE × DELIVERY moves primarily inside the execution engine

PRICE × DELIVERY is no longer mainly a 발주자 comparison feature.

It is the market signal KAPAPI uses for:

- live price discovery;
- availability;
- routing;
- urgency/scarcity;
- backup capacity;
- recovery economics.

## D-033.4 — Execution is resource-agnostic

KAPAPI may internally fulfill suitable work through:

- human 작업자;
- AI/model/agent;
- deterministic automation;
- specialist partner;
- hybrid AI + human;
- multi-worker/decomposed execution.

The 발주자 대상 unit remains the result.

## D-033.5 — Outcome UX does not mean fake automation

Early KAPAPI may use a **concierge/manual back office** for:

- SOW confirmation;
- quote construction;
- supply procurement;
- routing;
- monitoring;
- QA;
- recovery.

This is validation scaffolding, not the intended permanent operating model.

The product must measure operator minutes and completed-outcome economics so it does not silently become a low-margin outsourcing agency.

## D-033.6 — Instant quote is earned

Evolution:

```text
Assisted Quote
→ Market-informed Quote
→ Near-instant Quote only in proven standardized categories
```

Do not claim universal instant pricing before data supports it.

## D-033.7 — Initial wedge is not generic cheap/simple work

Preferred early shape:

> **AI에게 그대로 맡기기엔 불안하고, 사람을 직접 찾아 계약하기엔 작은, 범위와 검수가 가능한 디지털 업무.**

Avoid making fully commoditized near-zero-value mechanical work the strategic center because QA/recovery/support can erase margin and AI may close the job directly.

## D-033.8 — Recovery becomes a core differentiator

If the first execution path fails, the product goal is:

```text
failure/late risk
→ KAPAPI detects
→ alternate route/reassignment/recovery
→ 발주자 does not restart supplier search
→ result or defined refund/recovery outcome
```

Do not promise universal SLA guarantees until category data, economics and legal structure support them.

## D-033.9 — Completed-outcome contribution is the early economic unit

Primary early unit metric:

```text
발주자 revenue
- execution resource cost
- payment cost
- QA/support variable cost
- revision/rework cost
- recovery/replacement cost
= completed-outcome contribution margin
```

Gross transaction volume without this adjustment can hide a structurally bad category.

## D-033.10 — Category expansion is gated by execution economics

KAPAPI is category-independent in vision but category-specific in execution.

Open/scale a category only when evidence supports:

- external paid demand;
- qualified supply/resource liquidity;
- repeatable SOW;
- predictable price/time distribution;
- recovery capacity;
- acceptable QA/support burden;
- positive or credibly improving completed-outcome contribution;
- legal/security clarity.

## D-033.11 — Core data flywheel changes

The long-term asset is not merely `who is a good 작업자`.

It is increasingly:

> **which execution configuration reliably completes which work under which price/time/risk conditions.**

Canonical flywheel:

```text
request
→ structured SOW
→ quote
→ internal procurement
→ execution
→ QA / recovery
→ acceptance
→ better scope / quote / routing / recovery
```

## D-033.12 — 2026 모두의 창업 narrative

Preserve the real founder problem, then explain the product leap:

1. founder wanted real small online work to pick up after work;
2. this creates task-first 작업자 supply;
3. 발주자s have bounded work but delegation/search overhead is disproportionate;
4. KAPAPI does not make the 발주자 shop that market;
5. 발주자 buys result + price + completion time;
6. KAPAPI uses 작업자/AI/automation underneath;
7. real executions create data that improves quote/routing/recovery;
8. long-term destination is work execution infrastructure.

## Supersedes

D-033 supersedes the current-product implications of:

- **D-032** recommendation + 발주자 confirmation as the preferred default 발주자 flow;
- **D-031** day-one universal hands-off routing as if it were already automated;
- **D-012** staged UX interpretation that requires the 발주자 to pass through marketplace shopping before Outcome UX;
- **D-015/D-019** interpretations that require visible 발주자 provider selection in the prototype.

D-033 does **not** supersede:

- founder-origin task-first supply;
- PRICE + DELIVERY;
- fixed/result-based work;
- 작업자 independence;
- task-specific trust;
- SOW clarity;
- 발주자 final result acceptance/revision;
- category-specific liquidity;
- security/legal/payment protections;
- evidence-based responsibility expansion.

---

## Current canonical product sentence

> **KAPAPI is a work execution market where the 발주자 buys a defined result, price and completion time, while KAPAPI internally uses a task-first 작업자 market plus AI/automation/partners to procure, execute and recover the work.**

---

## D-034 — Submission and product terminology are unified around standard work language

**Decision:** Remove the previous special role/state vocabulary from all current canon, public prototype copy, application material, visual specifications, motion labels and QA rules.

Use **발주자 / 작업자 / 업무 / 제안 / 작업대금 / 긴급 업무 / 작업이력·신뢰지표 / 업무 완료** consistently.

**Reason:** For 모두의 창업, immediate comprehension and business credibility matter more than a branded vocabulary layer. KAPAPI should be memorable because of its mechanism and product experience, especially **가격 + 완료시간 제안**, not because users must learn new nouns.

**Supersedes:** prior interpretations of D-002, D-029 and D-030 that retained a separate game/world terminology layer.

---

## D-035 — The prototype demonstrates the result-return flow; the market runs behind it

**Amended 2026-09-03 against the `개선안` canon (정본 우선).** D-035 was derived on
this branch before D-033.1 was read, and it said less than the canon does. D-033.1
is authoritative: the 발주자 does not merely upload and wait — they approve an
**Execution Contract** first.

```text
업무 요청 / 파일
→ 카파피가 작업 조건(SOW)을 정리
→ 실행 계약: 결과물 + 가격 + 완료시간 + 검수/수정 경계 + 복구 경계
→ 발주자 승인
→ 카파피가 내부적으로 조달·배정·수행
→ 결과
→ 수락 / 수정 요청
```

What D-035 got right and D-033.1 agrees with: the 발주자 never compares 작업자,
profiles or 제안. What D-035 missed: the thing they *do* approve. Approving a price
and a completion time is not choosing a worker.

**The client's model, corrected:**

```text
발주자  →  실행 계약 승인  →  카파피  →  결과
```

입찰 and 선정 are not steps the client walks through. They happen *inside* the
middle node. This is the distinction every surface decision follows from: the
explainer page may open that box, the 발주자 product surface may not.

**Decision:** The 발주자 surface shows **업무 입력 → KAPAPI → 결과**. The client uploads files and describes the work in one line, and the next thing they are shown is progress and then the result. Proposal lists, ranked comparison and a worker-selection step are **removed from the client surface**.

The market did not disappear. It moved behind the boundary:

```text
발주자 화면:   업무 입력 → (KAPAPI) → 진행 상황 → 결과 → 수락 / 수정 요청
작업자 화면:   업무 목록 → 범위·마감 확인 → 가격 + 완료시간 제안 → 배정 → 수행 → 제출
```

가격 + 완료시간 제안 remains the market mechanism and remains fully visible **to 작업자**, where it is what the user is actually doing. The client sees the outcome of that mechanism, not its machinery.

**Honesty requirements that do not change.** KAPAPI must still be inspectable and must not overclaim:

- the assignment rationale (why this 작업자) stays available to the client as **information**, never as a decision they must make;
- no fabricated progress percentage;
- no claim of escrow, completion guarantee or AI quality judgement;
- the client keeps the final acceptance and the revision request — the result is not auto-accepted.

**Reason:** The founder's product goal is that a client uploads a file, describes the work briefly, and receives a result. A surface that requires the client to read proposals and pick a worker is the thing that goal removes. Showing the comparison to the client made the prototype demonstrate a marketplace when the product being validated is a work-to-result service.

**Relationship to the imported canon:** D-033.1 supersedes this decision wherever
the two differ. D-035 remains useful only as the record of why the comparison step
was removed from the client surface; the contract step it omitted comes from
D-033.1, and D-033.6 governs how firm the quoted price may be — assisted quote
first, near-instant only in proven standardized categories.

**Supersedes:** D-031's day-one rejection and D-032's staged confirmation flow **as applied to the client-facing prototype surface**. D-032's growth path (marketplace → trust → routing → repeat capacity → execution layer) still describes how the capability is earned in the real business; D-035 governs what the prototype shows.

**Consequently amended:**

- `PROTOTYPE_SPEC.md` §4.2 and §5 — S05 제안 비교/추천 is no longer a client screen;
- `KAPAPI_ART_DIRECTION.md` — the ban on implying assignment before client confirmation applies to the 작업자 surface only;
- `QA_CHECKLIST.md` — the hero may state result return, and must still not claim escrow or completion guarantee.
