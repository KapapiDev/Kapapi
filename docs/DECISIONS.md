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
- KAPAPI recommends based on conditions and history
- the client confirms
- the result is delivered
- transaction data enables later routing and recovery

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

Early transactions may use KAPAPI recommendation + client confirmation, lightweight client choice or concierge/manual routing for controlled experiments.

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

## D-034 — Submission and product terminology are unified around standard work language

**Decision:** Remove the previous special role/state vocabulary from all current canon, public prototype copy, application material, visual specifications, motion labels and QA rules.

Use **발주자 / 작업자 / 업무 / 제안 / 작업대금 / 긴급 업무 / 작업이력·신뢰지표 / 업무 완료** consistently.

**Reason:** For 모두의 창업, immediate comprehension and business credibility matter more than a branded vocabulary layer. KAPAPI should be memorable because of its mechanism and product experience, especially **가격 + 완료시간 제안**, not because users must learn new nouns.

**Supersedes:** prior interpretations of D-002, D-029 and D-030 that retained a separate game/world terminology layer.
