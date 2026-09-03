# KAPAPI Decisions

Updated: 2026-09-03

This file records the **current durable canon**. Detailed D-001–D-032 history remains preserved in Git history through the pre-D-033 snapshot at commit `d713a0f233df7b4bba30f5e565508fc59adc1d71` and its parent history.

When a new decision reverses an older one, the newer decision is authoritative.

---

## Active durable decisions

### D-001 — KAPAPI is the service name

Use **KAPAPI / 카파피** as the service/brand name. Formal trademark/same-name clearance remains required before commercial scaling.

### D-002 — World terminology is a secondary UX layer

Use:

- GM = client / issuer
- PLAYER = independent worker/professional
- QUEST = bounded task
- BID = PRICE + DELIVERY proposal
- REWARD = compensation
- TIME ATTACK = urgent task
- LEVEL / EXP = verified history/reputation layer
- QUEST COMPLETE = accepted completion

Explain the real product in ordinary language before world terminology.

### D-003 — PRICE + DELIVERY TIME remains mandatory market data

Every PLAYER BID must include:

- PRICE
- committed elapsed DELIVERY TIME

DELIVERY is elapsed commitment after assignment/acceptance, not estimated labor hours.

### D-004 — Result-based work first

Start with bounded, fixed/result-based digital work rather than controlled hourly staffing.

### D-005 — Architecture/CAD is a founder-domain testbed, not the market definition

Use architecture/CAD when founder knowledge improves realistic task design, interviews and quality judgment. Do not define KAPAPI as construction/CAD-only.

### D-007 — Self-completion / direct AI is a primary competitor

KAPAPI competes not only with freelancer marketplaces but with:

- `I'll do it myself`;
- internal overtime;
- existing vendors;
- direct AI/automation.

Therefore KAPAPI must reduce the full delegation burden, not merely improve provider discovery.

### D-008 — Trust is task-specific

Relevant career/credentials, similar completions, on-time behavior, revision/rework and failure history matter more than generic star ratings.

### D-010 — Matching alone does not prevent disintermediation

Repeated use must be earned through execution convenience, records, security, payment/admin, backup supply, routing and recovery rather than contact hiding.

### D-013 — AI is a resource, not a universal authority

AI may assist scoping, execution, automation and objective checks where reliable.

Do not initially position AI as:

- universal final price setter;
- subjective final quality judge;
- regulated professional decision-maker;
- proof that every task can be automated.

### D-014 — Security/NDA is product value

Confidential file handling, access boundaries, NDA/contract terms and auditability matter for professional/organizational work and must match actual implementation.

### D-016 — Prototype success is understanding + credible validation, not feature count

Before the 2026 모두의 창업 1R, build the smallest product that makes the business mechanism obvious and supports credible next-step validation.

### D-017 — Current mentor-institution working choice remains Mokwon University

Keep Mokwon University Industry-Academic Cooperation Foundation as the working choice unless new reliable application-volume/fit evidence materially changes the decision.

### D-018 — `main` is the eventual project canon

Approved design and deployable implementation should ultimately converge on `main`. The `개선안` branch is the current redesign workspace until review/implementation alignment is complete.

### D-020 — SOW clarity precedes sophisticated automation

Turn vague input into a clear scope/result/acceptance boundary before attempting aggressive routing, pricing or QA automation.

### D-021 — Quality is layered

Use:

1. objective automated preflight where reliable;
2. task/category-appropriate QA when economics support it;
3. GM acceptance / in-scope revision;
4. recovery/dispute only where needed.

Do not manually inspect every low-value output by default.

### D-023 — Founder-funded QUESTs validate supply/execution, not external GM demand

Founder-originated paid tasks may seed real PLAYER behavior and transaction data but must be excluded from independent demand claims.

### D-024 — Self-funded repeat is the strongest early GM signal

Subsidized first use is not enough. A GM returning with their own money is materially stronger evidence.

### D-025 — Trust is two-sided

PLAYERs also need evidence that a GM/QUEST is worth accepting. GM/PLAYER are contextual transaction roles, not permanent account classes.

### D-026 — Liquidity is category-specific

A broad member count does not prove a category can fulfill work quickly. Measure qualified active supply, repeat demand, price/time distributions, reliability and backup capacity separately per category.

### D-027 — Monetization remains open

Do not hard-code one take rate or fee side before transaction economics are observed.

### D-028 — Fractional controlled PLAYER-hours remain out of scope

Do not sell employee-like recurring controlled hours as the core product without separate legal/product review.

### D-029 — Visual direction remains premium tech + restrained HUD

Keep premium black/white/light-first tech-product aesthetics with thin world-state cues. Avoid fantasy RPG imagery or a childish gig-board aesthetic.

### D-030 — Business thesis before game world

For judges, investors and first-time users, explain the real problem and execution mechanism before GM/PLAYER/QUEST world-building.

---

# D-033 — Outcome UX first; market underneath

**Decision:** KAPAPI's new canonical product direction is:

> **PLAYER에게는 일이 먼저 보이는 시장, GM에게는 사람을 고르지 않아도 되는 실행 서비스.**

GM-facing North Star:

> **해야 할 일을 넣으면, 결과가 나온다.**

## D-033.1 — Default GM product is an Execution Contract

The GM should normally buy:

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
→ GM accepts
→ KAPAPI procures/routes execution internally
→ result
→ accept / revise
```

The default GM flow must **not** require comparing several PLAYERs, profiles or BIDs.

Executor information may still be disclosed where law, credentials, security or user trust requires it.

## D-033.2 — PLAYER market remains task-first

The founder-origin supply mechanism remains canonical:

```text
real QUEST exists
→ PLAYER finds or receives suitable work
→ PRICE + DELIVERY BID / Offer acceptance
→ execute
→ REWARD
→ task-specific history
```

PLAYERs do not need storefront-first seller behavior.

## D-033.3 — PRICE × DELIVERY moves primarily inside the execution engine

PRICE × DELIVERY is no longer mainly a GM comparison feature.

It is the market signal KAPAPI uses for:

- live price discovery;
- availability;
- routing;
- urgency/scarcity;
- backup capacity;
- recovery economics.

## D-033.4 — Execution is resource-agnostic

KAPAPI may internally fulfill suitable work through:

- human PLAYER;
- AI/model/agent;
- deterministic automation;
- specialist partner;
- hybrid AI + human;
- multi-PLAYER/decomposed execution.

The GM-facing unit remains the result.

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
→ GM does not restart supplier search
→ result or defined refund/recovery outcome
```

Do not promise universal SLA guarantees until category data, economics and legal structure support them.

## D-033.9 — Completed-outcome contribution is the early economic unit

Primary early unit metric:

```text
GM revenue
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

The long-term asset is not merely `who is a good PLAYER`.

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
2. this creates task-first PLAYER supply;
3. GMs have bounded work but delegation/search overhead is disproportionate;
4. KAPAPI does not make the GM shop that market;
5. GM buys result + price + completion time;
6. KAPAPI uses PLAYERs/AI/automation underneath;
7. real executions create data that improves quote/routing/recovery;
8. long-term destination is work execution infrastructure.

## Supersedes

D-033 supersedes the current-product implications of:

- **D-032** recommendation + GM confirmation as the preferred default GM flow;
- **D-031** day-one universal hands-off routing as if it were already automated;
- **D-012** staged UX interpretation that requires the GM to pass through marketplace shopping before Outcome UX;
- **D-015/D-019** interpretations that require visible GM provider selection in the prototype.

D-033 does **not** supersede:

- founder-origin task-first supply;
- PRICE + DELIVERY;
- fixed/result-based work;
- PLAYER independence;
- task-specific trust;
- SOW clarity;
- GM final result acceptance/revision;
- category-specific liquidity;
- security/legal/payment protections;
- evidence-based responsibility expansion.

---

## Current canonical product sentence

> **KAPAPI is a work execution market where the GM buys a defined result, price and completion time, while KAPAPI internally uses a task-first PLAYER market plus AI/automation/partners to procure, execute and recover the work.**
