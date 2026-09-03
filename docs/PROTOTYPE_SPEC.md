# KAPAPI Prototype Specification

Status: **canonical implementation scope on `개선안`**  
Updated: 2026-09-03

This document translates the new product canon into the public prototype.

The prototype must show **Outcome UX without pretending the execution engine is already fully automated**.

---

# 1. Prototype objective

A first-time reviewer should understand within roughly 30–60 seconds:

### GM

> **해야 할 일을 넣으면, 결과가 나온다.**

### PLAYER

> **할 수 있는 일을 골라서, 끝내고, 돈 번다.**

The key product distinction is:

> **PLAYER에게는 일이 먼저 보이는 시장, GM에게는 사람을 고르지 않아도 되는 실행 서비스.**

---

# 2. Canonical demo flows

## GM flow

```text
work request / files
→ KAPAPI structures SOW
→ Execution Contract
   RESULT + PRICE + COMPLETION TIME
→ GM accepts
→ KAPAPI routes internally
→ execution / recovery state
→ result
→ accept / revise
```

The GM does **not** normally compare multiple PLAYERs.

## PLAYER flow

```text
QUEST discovery or targeted Offer
→ understand scope/deadline
→ BID PRICE + DELIVERY or accept Offer
→ assigned
→ execute
→ submit
→ REWARD + task-specific history
```

## Internal execution proof

The prototype should communicate that KAPAPI can choose among:

- human PLAYER;
- AI/automation;
- hybrid execution;
- backup/replacement.

This internal orchestration may be deterministic/mock/concierge in the prototype. Do not claim production autonomy.

---

# 3. Prototype success test

After the demo, a reviewer should be able to say:

> “카파피에서는 의뢰자가 프리랜서를 고르는 게 아니라 결과·가격·완료시각을 보고 일을 맡깁니다. 뒤에서는 PLAYER들이 PRICE와 DELIVERY를 제안하거나 Offer를 받고, 카파피가 사람·AI·자동화를 조합해 실행합니다. 초기엔 일부 운영이 수동이어도 실제 거래 데이터를 쌓아서 견적·배정·복구를 자동화하려는 구조입니다.”

If the reviewer instead describes KAPAPI as “추천 잘해주는 프리랜서 플랫폼,” the prototype has failed the new canon.

---

# 4. Product identity

Do not make the product feel like:

- seller storefront catalog;
- portfolio social network;
- generic expert directory;
- CAD/construction-only service;
- generic low-price microtask board;
- magical AI outsourcing product;
- fake universal instant-quote service.

The core concepts are:

- `QUEST` = bounded work unit;
- `Execution Contract` = GM-facing result/price/time commitment;
- `PRICE × DELIVERY` = internal PLAYER market signal;
- `RESULT` = the GM-facing product.

---

# 5. First-touch public UX

## 5.1 Three-second rule

Primary GM message:

> **맡길 일을 적어주세요.**

Supporting promise:

> **카파피가 작업 조건을 정리하고, 가격과 완료시각을 제시합니다.**

PLAYER path remains visible:

> **작업 찾기**

Do not lead with GM / PLAYER / QUEST terminology before the business is understood.

## 5.2 Above-the-fold hierarchy

Required:

1. KAPAPI identity;
2. plain-language work-to-result promise;
3. large task-entry surface;
4. file attachment;
5. primary CTA such as `조건 확인하기`;
6. short explanation of next step;
7. secondary `작업 찾기`;
8. compact proof showing result + price + completion time.

Recommended semantic direction:

```text
해야 할 일을 적어주세요.
카파피가 결과 조건을 정리하고 가격과 완료시각을 제시합니다.

[ 어떤 작업이 필요하신가요?                         ]
[ 파일 첨부 ]                              [ 조건 확인 → ]

일을 찾고 있나요? → 작업 찾기
```

---

# 6. Required screens / surfaces

## S01 — Landing

Purpose: communicate KAPAPI in seconds.

Required:

- GM task-entry hero;
- `작업 찾기` PLAYER entry;
- category-neutral examples;
- Execution Contract example;
- concise explanation of task-first PLAYER market;
- internal resource mix proof;
- one recovery proof beat;
- one completed outcome case;
- future execution-data flywheel.

Do not lead with CAD or a worker-profile gallery.

---

## S02 — Request / SOW Structuring

GM rough input may be:

> “이 PDF들에서 표 데이터 정리해서 오늘 안에 엑셀로 주세요.”

KAPAPI should structure:

- source/files;
- exact scope;
- deliverable;
- output format;
- required fields/rules;
- completion target;
- acceptance checks;
- revision boundary;
- confidentiality/security;
- missing information.

Primary action after missing questions are resolved:

**`조건 확인하기`**

Do not claim AI understands every ambiguous task correctly. Prototype behavior may be deterministic/mock.

---

## S03 — Execution Contract / Quote

This replaces the old GM BID-comparison/recommendation screen as the **default GM decision surface**.

Required:

- expected result;
- fixed GM price;
- completion date/time;
- included revision boundary;
- security/confidentiality indicator;
- recovery/refund summary;
- short explanation that KAPAPI handles the execution path.

Example:

```text
예상 결과
검수된 XLSX 1개

가격
49,000원

완료 예정
오늘 19:30

수정
합의 범위 내 1회

[ 이 조건으로 맡기기 ]
```

Optional disclosure link:

`어떻게 실행되나요?`

This may explain that KAPAPI uses qualified PLAYERs and suitable automation without exposing a shopping UI.

---

## S04 — QUEST Board / PLAYER discovery

Purpose: preserve founder-origin task-first supply.

Required QUEST metadata:

- plain-language title;
- category;
- source/output summary;
- compensation/range where appropriate;
- deadline / TIME ATTACK;
- eligibility;
- status;
- BID/Offer mode.

Useful filters:

- 전체;
- 내가 할 수 있는 작업;
- 오늘 마감;
- 즉시 제안 가능.

A PLAYER should find real work without first creating a storefront.

---

## S05 — QUEST Detail / PLAYER BID or Offer

Required:

- exact deliverable;
- input/source;
- deadline;
- acceptance criteria;
- security/confidentiality;
- relevant eligibility.

### BID mode

Requires:

- PRICE;
- committed DELIVERY TIME;
- optional concise execution note.

### Offer mode

Shows:

- offered compensation;
- required completion time;
- scope;
- accept / decline.

Avoid long cover-letter theatre.

---

## S06 — Internal Routing Proof

This can be a demo/admin-style product module, not the GM's normal shopping page.

Example:

```text
GM CONTRACT
49,000원 / 오늘 19:30

AVAILABLE EXECUTION
PLAYER A  27,000원 / 6H
PLAYER B  31,000원 / 3H
PLAYER C  42,000원 / 1.5H
AI + QA   expected 18,000원 / 2H

ROUTE
PLAYER B + automated preflight
BACKUP
PLAYER C
```

Show that routing considers:

- eligibility/security;
- PRICE × DELIVERY;
- task-specific history;
- availability;
- expected QA/recovery burden;
- automation alternatives;
- backup capacity.

Do not present a fake universal scientific score.

---

## S07 — Execution / Workroom

GM-facing view should focus on the work, not worker micromanagement.

Required:

- Execution Contract identity;
- promised completion time;
- state timeline;
- source/output files;
- latest meaningful event;
- exception/recovery state;
- security indicator.

Suggested states:

```text
CONTRACTED
→ EXECUTION_SECURED
→ IN_PROGRESS
→ QA / PREFLIGHT
→ DELIVERED
→ REVIEW
→ COMPLETE
```

Exception fixtures:

```text
AT_RISK
RECOVERY_STARTED
REASSIGNED
REVISION_REQUESTED
REFUND_PENDING
CANCELLED
```

No fake percentage progress for human work unless measurable.

---

## S08 — Recovery proof

Must show at least one believable failure path.

Example:

```text
PLAYER A unavailable / late
→ KAPAPI activates backup
→ GM is informed of execution recovery, not asked to choose a new worker
→ result delivered
```

The prototype should communicate the thesis without promising universal SLA performance.

---

## S09 — Result / acceptance

Prioritize:

- delivered files;
- delivery timestamp vs promise;
- objective checks performed;
- result preview where feasible;
- `결과 승인 / QUEST COMPLETE`;
- `범위 내 수정 요청`.

Do not claim subjective AI quality certification.

---

## S10 — PLAYER trust/history

Trust hierarchy:

1. task-specific completions;
2. relevant career/credential;
3. on-time rate;
4. revision/rework rate;
5. failure/recovery behavior;
6. completion count;
7. rating;
8. LEVEL / EXP as secondary brand layer.

This trust primarily powers internal procurement/routing, not GM profile-shopping.

---

# 7. Demo fixtures

Do not anchor the demo on ultra-cheap mechanical data entry.

Use examples where accountability still has value.

### Example A — Document/data

`30 PDFs → 12 specified fields → checked XLSX with missing values marked`

### Example B — Presentation

`existing report deck → apply defined style/spacing/chart cleanup rules → final PPTX`

### Example C — E-commerce operations

`50 products → normalize image sizes + required fields + upload-ready table`

### Example D — Skilled support

`defined CAD edit / drawing support under supplied responsible-professional instructions`

### Example E — Technical

`small reproducible web/code bug → fixed behavior + verification`

Architecture/CAD may be the richer founder-domain story, not the overall brand identity.

---

# 8. State model

Prototype should support at least:

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

PLAYER-side states may additionally include:

```text
OPEN
BIDDING
OFFERED
BID_SUBMITTED
ACCEPTED
DECLINED
ASSIGNED
```

Demo transitions must be deterministic/replayable.

---

# 9. Landing narrative order

Recommended:

1. Hero: `맡길 일을 적어주세요`;
2. result + price + completion time Execution Contract;
3. “왜 사람을 고를 필요가 없나요?”;
4. task-first PLAYER market / PRICE × DELIVERY;
5. internal human + AI + automation routing;
6. recovery proof;
7. completed result loop;
8. early wedge: AI-alone risky / human search too heavy;
9. execution-data flywheel;
10. PLAYER entry / open QUEST board.

Avoid a pitch-deck card wall.

---

# 10. Visual rules

Keep current v2 visual authority unless behavior conflicts.

- public UX light-first;
- premium typography;
- restrained HUD/world language;
- dark operational moments may visualize internal routing/recovery;
- no fantasy RPG imagery;
- no generic SaaS dashboard collage;
- no worker-card carousel as the GM hero.

World-building should attach to real states: QUEST, BID, TIME ATTACK, REWARD, LEVEL / EXP, QUEST COMPLETE.

---

# 11. Accessibility / responsive / performance

Required:

- semantic headings/landmarks;
- keyboard-operable controls;
- visible focus;
- labeled file/form controls;
- sufficient contrast;
- reduced-motion path;
- status not color-only;
- touch-safe mobile controls;
- no horizontal overflow;
- text/action before heavy hero media;
- stable media layout.

---

# 12. Explicit non-goals before 1R

Do not build or claim:

- production escrow/custody;
- tax settlement automation;
- universal identity verification;
- full messaging suite;
- broad category backend;
- native apps;
- universal instant pricing;
- autonomous subjective quality judgment;
- universal SLA/outcome guarantee;
- employee-like hourly staffing;
- unqualified regulated professional judgment;
- zero-human back-office execution.

Concierge/manual operation is acceptable when clearly used to validate the product promise.

---

# 13. 60-second demo target

```text
00–08s   Landing: 맡길 일 입력
08–17s   rough input → structured SOW
17–26s   RESULT + PRICE + COMPLETION TIME → 맡기기
26–34s   PLAYER side: QUEST → PRICE + DELIVERY
34–43s   internal routing: PLAYER / AI / automation + backup
43–51s   execution risk → recovery without GM re-selection
51–57s   result delivered → accept/revise
57–60s   data → better quote/routing/recovery → WORK IN / RESULT OUT
```

Desired reaction:

> **“의뢰자는 사람을 고르는 게 아니라 결과를 사고, 뒤에서는 카파피가 실제 시장과 자동화를 이용해 일을 끝내는 구조구나.”**
