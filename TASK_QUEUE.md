# KAPAPI — TASK QUEUE

Status: **current implementation queue for new canon**  
Updated: **2026-09-03**  
Primary design branch: `개선안`

Authority:

1. `docs/ORIGIN_AND_GROWTH_THESIS.md`
2. `docs/DECISIONS.md` latest decision
3. `docs/PRODUCT.md`
4. `docs/ROADMAP.md`
5. `docs/VALIDATION.md`
6. `docs/PROTOTYPE_SPEC.md`
7. `docs/PROGRAM_2026_MODU.md`
8. current v2 visual/content rules unless they contradict the new behavior

Do not restore the old default GM flow of `BIDs → recommendation → GM chooses PLAYER`.

The new canonical split is:

```text
GM = Outcome UX
PLAYER = task-first market
KAPAPI internal = PRICE × DELIVERY + human/AI/automation procurement + recovery
```

---

# P0 — Canon alignment

## KAP-200 — Execution-market canon

**Status:** DONE

Acceptance:

- GM buys Execution Contract, not PLAYER profile;
- RESULT + PRICE + COMPLETION TIME is explicit;
- default GM flow removes worker comparison;
- PLAYER task-first market remains;
- PRICE × DELIVERY remains internal procurement data;
- human/AI/automation execution remains resource-agnostic;
- founder-origin problem preserved.

## KAP-201 — Initial wedge correction

**Status:** DONE

Acceptance:

- initial market is not framed as generic cheap/simple work;
- preferred wedge is `AI-alone risky + human search disproportionate + bounded/checkable digital result`;
- fully commoditized near-zero-value tasks are not the strategic center;
- Architecture/CAD remains one founder-domain testbed.

## KAP-202 — Outcome economics canon

**Status:** DONE

Acceptance:

Primary early unit metric is:

```text
GM revenue
- execution cost
- payment
- QA/support
- revision/recovery
= completed-outcome contribution
```

---

# P0 — Core GM flow rebuild

## KAP-210 — Replace marketplace-selection GM path

**Status:** OPEN

Replace the current default:

`QUEST → BIDs → recommendation → GM confirms PLAYER`

with:

`request → SOW → Execution Contract → GM accepts → internal route → result`

Acceptance:

- no PLAYER card comparison in the default GM path;
- no `이 작업자로 진행` as the primary decision;
- GM decides only whether to accept the work conditions;
- optional executor disclosure exists only where product/legal/security needs it.

## KAP-211 — Build Execution Contract screen

**Status:** OPEN

Required fields:

- expected result;
- fixed price;
- completion date/time;
- revision boundary;
- confidentiality/security;
- recovery/refund summary;
- primary CTA `이 조건으로 맡기기` or equivalent.

Prototype quote may be deterministic/mock. Do not claim universal instant pricing.

## KAP-212 — Request/SOW copy and interaction

**Status:** OPEN

Hero/input should lead with:

> **맡길 일을 적어주세요.**

Semantic promise:

> 카파피가 작업 조건을 정리하고 가격과 완료시각을 제시합니다.

Flow:

`rough request/files → missing questions → SOW_READY → 조건 확인`

Do not say multiple proposals will arrive for GM comparison.

## KAP-213 — GM execution status

**Status:** OPEN

Update GM state timeline to work-centric states:

```text
CONTRACTED
EXECUTION_SECURED
IN_PROGRESS
AT_RISK
RECOVERY_STARTED
REASSIGNED
QA
DELIVERED
REVIEW
COMPLETE
```

Do not center assigned PLAYER identity unless needed.

## KAP-214 — Recovery proof

**Status:** OPEN

Create one deterministic demo fixture:

```text
first executor becomes unavailable/late
→ KAPAPI activates backup
→ GM does not select another worker
→ result still progresses
```

Acceptance:

- no universal SLA wording;
- recovery clearly differentiates KAPAPI from simple matching;
- user sees a work-status update, not a new shopping task.

---

# P0 — Internal execution market proof

## KAP-220 — Internal routing module

**Status:** OPEN

Create a demo/admin-style proof of the hidden execution market.

Example inputs:

```text
GM CONTRACT: ₩49,000 / today 19:30
PLAYER A: ₩27,000 / 6H
PLAYER B: ₩31,000 / 3H
PLAYER C: ₩42,000 / 1.5H
AI + QA: expected ₩18,000 / 2H
```

Show:

- selected route;
- backup route;
- relevant trust/history;
- expected QA/recovery burden.

This is product proof, not a fake autonomous optimizer.

## KAP-221 — Preserve PLAYER QUEST Board

**Status:** VERIFY / ADAPT

Keep the strong task-first supply behavior.

Acceptance:

- `작업 찾기` remains visible;
- real QUESTs appear before storefront/profile creation;
- broad categories remain;
- PRICE × DELIVERY bidding remains;
- board copy no longer implies that GM will necessarily compare all BIDs.

## KAP-222 — Add targeted Offer fixture

**Status:** OPEN

Support a second supply mechanism for standardized work:

```text
KAPAPI → PLAYER
₩38,000 / 3H / defined QUEST
[수락] [거절]
```

Purpose:

- show that the internal market can evolve beyond public bidding;
- preserve PLAYER independence;
- support future fast routing.

## KAP-223 — BID form remains lightweight

**Status:** VERIFY

Required:

- PRICE;
- committed DELIVERY TIME;
- optional concise execution note.

No long proposal/cover-letter theatre.

---

# P0 — Landing/message rebuild

## KAP-230 — New hero

**Status:** OPEN

Primary message:

> **해야 할 일을 넣으면, 결과가 나온다.**

Interaction message:

> **맡길 일을 적어주세요.**

Support:

> 카파피가 작업 조건을 정리하고 가격과 완료시각을 제시합니다.

Keep `작업 찾기` as secondary PLAYER entry.

## KAP-231 — Remove recommendation-as-core story

**Status:** OPEN

Remove/rewrite modules whose main point is:

- compare several PLAYERs;
- KAPAPI recommends one;
- GM confirms that PLAYER.

Replace with:

- Execution Contract;
- internal supply/routing proof;
- recovery;
- result acceptance.

## KAP-232 — Show the asymmetric two-sided product

**Status:** OPEN

Landing should make this understandable:

```text
GM: 일을 맡긴다
PLAYER: 일을 고른다
KAPAPI: 둘 사이의 실행을 조달한다
```

Avoid long explanatory pitch-deck copy if UI can demonstrate it.

## KAP-233 — Correct early-task examples

**Status:** OPEN

Prefer outcome examples such as:

- `30 PDFs → 12 fields → checked XLSX`;
- `messy workbook → defined cleanup rules → verified workbook`;
- `PPT/report → specified format cleanup → final PPTX`;
- `50 products → normalized assets/data → upload-ready batch`;
- `defined CAD support → delivered drawing output`;
- `reproducible small web bug → fixed + verified`.

Avoid positioning raw low-value data entry/background removal as the entire business.

## KAP-234 — Data flywheel

**Status:** OPEN

Show compactly:

```text
SOW
→ quote
→ internal PRICE × DELIVERY
→ execution
→ failure/recovery
→ acceptance
→ better quote/routing/recovery
```

---

# P0 — Result / QA

## KAP-240 — Preserve result acceptance

**Status:** VERIFY / ADAPT

Required:

- delivered files;
- promised vs actual completion;
- objective checks performed;
- accept / QUEST COMPLETE;
- in-scope revision request.

Do not add subjective AI quality claims.

## KAP-241 — Objective preflight only where credible

**Status:** VERIFY

Use deterministic checks such as:

- required output exists;
- file opens;
- expected sheets/files present;
- specified fields present where testable.

Do not pretend broad professional quality can be scored automatically.

---

# P0 — State/data model

## KAP-250 — New GM state model

**Status:** OPEN

Add/rename states:

```text
DRAFT
SOW_READY
QUOTE_PREPARING
OFFER_READY
CONTRACTED
EXECUTION_SECURED
IN_PROGRESS
AT_RISK
RECOVERY_STARTED
REASSIGNED
QA
DELIVERED
REVIEW
REVISION_REQUESTED
COMPLETE
REFUND_PENDING
CANCELLED
```

## KAP-251 — PLAYER-side states

**Status:** OPEN

Support as needed:

```text
OPEN
BIDDING
OFFERED
BID_SUBMITTED
ACCEPTED
DECLINED
ASSIGNED
SUBMITTED
```

## KAP-252 — Deterministic quote fixture

**Status:** OPEN

Prototype must produce repeatable result/price/time outputs for demo tasks.

Rules:

- clearly prototype/demo data;
- no fake claim that AI calculated a production-safe price;
- enough variation to demonstrate urgency/category differences.

---

# P0 — Application proof

## KAP-260 — 60-second 1R demo path

**Status:** OPEN

Target:

```text
Landing
→ GM rough request
→ SOW
→ RESULT + PRICE + COMPLETION TIME
→ 맡기기
→ PLAYER QUEST / PRICE + DELIVERY
→ internal route + backup
→ recovery event
→ result
→ accept/revise
→ data flywheel
```

## KAP-261 — Founder-origin visible but not dominant

**Status:** OPEN

Explain:

- founder wanted real small online work to pick up;
- that becomes task-first PLAYER supply;
- the stronger GM product removes worker-shopping burden.

Do not turn the landing page into an autobiography.

## KAP-262 — Honest prototype boundaries

**Status:** OPEN

Do not imply production availability of:

- universal instant quote;
- production payment custody;
- universal identity verification;
- universal automatic QA;
- universal SLA;
- every-category automatic routing;
- legal/commercial structure already finalized.

Concierge/manual backend behavior is acceptable and should be described honestly when needed.

---

# P0 — QA / regression

## KAP-270 — Update automated content invariants

**Status:** OPEN

New invariants:

- no seller-storefront-first hero;
- no default GM PLAYER comparison;
- Execution Contract exists;
- RESULT + PRICE + COMPLETION TIME visible;
- PRICE + DELIVERY remains on PLAYER side;
- `작업 찾기` remains functional;
- recovery proof exists;
- Architecture/CAD not hero identity;
- no universal instant quote/SLA claim;
- Outcome UX and prototype honesty coexist.

## KAP-271 — Build / lint / typecheck

**Status:** OPEN

Run all available repository checks after implementation changes.

## KAP-272 — Desktop/mobile visual QA

**Status:** OPEN

Verify at minimum:

- landing;
- SOW;
- Execution Contract;
- PLAYER board;
- QUEST detail/BID or Offer;
- internal routing proof;
- recovery;
- result;
- mobile and reduced motion.

## KAP-273 — Preview QA

**Status:** OPEN

When deployment is available:

- inspect actual page visually;
- verify no old recommendation-first copy remains;
- verify GM path does not accidentally become a PLAYER catalog;
- verify 60-second story is understandable without explanation.

---

# P1 — Post-prototype validation instrumentation

## KAP-280 — Validation event model

**Status:** OPEN

Prepare measurement concepts for later real tests:

- request → SOW;
- SOW → quote;
- quote acceptance;
- time to execution secured;
- completed outcome;
- revision/recovery;
- operator minutes;
- completed-outcome contribution;
- repeat GM;
- repeat PLAYER.

Do not fabricate production analytics in the prototype.

---

# Completion condition

The redesign pass is complete when a new reviewer describes KAPAPI as:

> **“의뢰자는 결과·가격·완료시각을 보고 일을 맡기고, 뒤에서는 카파피가 task-first PLAYER 시장과 AI/자동화를 이용해 실행·복구하는 서비스.”**

and no canonical document or active prototype flow materially contradicts that description.
