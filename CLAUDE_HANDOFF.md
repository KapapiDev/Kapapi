# KAPAPI — Implementation Handoff

Status: **current implementation handoff on `개선안`**  
Updated: 2026-09-03

## Mission

Build and maintain a high-polish KAPAPI prototype that makes the new D-033 product truth obvious:

> **PLAYER에게는 일이 먼저 보이는 시장, GM에게는 사람을 고르지 않아도 되는 실행 서비스.**

GM North Star:

> **해야 할 일을 넣으면, 결과가 나온다.**

The product is not a freelancer directory with game decoration, a CAD marketplace, a generic microtask board or a magical AI outsourcing demo.

---

## Mandatory reading order

Before changing implementation, read:

1. `docs/DECISIONS.md` — **D-033 is the highest current product authority**
2. `docs/ORIGIN_AND_GROWTH_THESIS.md`
3. `docs/PRODUCT.md`
4. `docs/ROADMAP.md`
5. `docs/VALIDATION.md`
6. `docs/PROTOTYPE_SPEC.md`
7. `docs/PROGRAM_2026_MODU.md`
8. `docs/LEGAL.md`
9. `TASK_QUEUE.md`
10. `docs/README.md`
11. current visual/content documents

If older v2 copy/behavior conflicts, the D-033 canon wins.

Do not restore D-032's preferred default `recommend PLAYER → GM confirms PLAYER` flow.

---

## Non-negotiable product truths

1. GM default UX is **Outcome UX**.
2. PLAYER experience remains **task-first**.
3. The GM normally buys an **Execution Contract**, not a worker profile.
4. Execution Contract shows **RESULT + PRICE + COMPLETION TIME + revision/recovery boundary**.
5. GM does not normally compare several PLAYER/BID cards.
6. Every PLAYER BID still requires **PRICE + committed DELIVERY TIME**.
7. KAPAPI may use open BIDs, targeted Offers or hybrid supply internally.
8. Execution may use human PLAYER, AI, automation, specialist partner or hybrid/multi-resource flows.
9. Early quote/routing/QA/recovery may be concierge/manual. Do not fake autonomy.
10. Instant quote is earned category by category.
11. Recovery is strategically important: failure should not force the GM to restart supplier search.
12. GM remains final result acceptance/revision authority in the early model.
13. Architecture/CAD is one founder-domain test case, not the hero category.
14. Initial wedge is not generic cheap/simple work.
15. Preferred wedge is **AI-alone risky + human search disproportionate + bounded/checkable digital result**.
16. World terms come after ordinary-language understanding.
17. One universal account; GM/PLAYER are contextual roles.
18. AI is not an infallible final price or quality judge.
19. Completed-outcome contribution matters more than GMV/signup vanity.
20. Strong legal/SLA responsibility is earned category by category.

---

## Canonical GM UX

```text
LANDING
→ rough task input / files
→ KAPAPI structures SOW
→ Execution Contract
   - expected result
   - fixed price
   - completion time
   - revision/recovery summary
→ GM accepts `이 조건으로 맡기기`
→ KAPAPI secures execution internally
→ progress / recovery if needed
→ delivered result
→ accept / revise
```

Do not use a PLAYER-selection screen as the default GM decision surface.

Optional executor detail may be shown when law/security/credentials/trust requires it.

---

## Canonical PLAYER UX

```text
작업 찾기 / targeted Offer
→ inspect bounded QUEST
→ BID PRICE + DELIVERY or accept Offer
→ assigned
→ execute
→ submit
→ REWARD + task-specific history
```

No storefront creation requirement before seeing earning opportunities.

No long cover-letter theatre.

---

## Internal execution proof

The prototype should show or communicate an internal execution market such as:

```text
GM CONTRACT
₩49,000 / today 19:30

PLAYER A  ₩27,000 / 6H
PLAYER B  ₩31,000 / 3H
PLAYER C  ₩42,000 / 1.5H
AI + QA   expected ₩18,000 / 2H

ROUTE: PLAYER B + automated preflight
BACKUP: PLAYER C
```

Routing may consider:

- eligibility/security;
- task-specific history;
- PRICE × DELIVERY;
- availability;
- expected QA/recovery burden;
- automation alternatives;
- backup capacity.

This may be deterministic demo logic. Never present fake scientific certainty.

---

## Hero requirement

The first viewport should communicate:

> **맡길 일을 적어주세요.**  
> 카파피가 작업 조건을 정리하고 가격과 완료시각을 제시합니다.

Primary CTA semantic direction:

> **조건 확인하기**

Secondary PLAYER entry:

> **작업 찾기**

Avoid copy such as:

- `맞는 제안을 추천합니다` as the core product promise;
- `이 작업자로 진행` as the primary GM CTA;
- universal instant/automatic execution claims.

---

## Landing narrative

Recommended order:

1. task input hero;
2. structured SOW;
3. Execution Contract: result + price + completion time;
4. why GM does not need to shop workers;
5. PLAYER task-first market + PRICE × DELIVERY;
6. internal human/AI/automation routing;
7. recovery proof;
8. result acceptance;
9. initial wedge explanation;
10. execution data → better quote/routing/recovery.

Show the mechanism through real product UI rather than strategy paragraphs whenever possible.

---

## Demo fixtures

Prefer outcome-shaped examples:

- `30 PDFs → 12 fields → checked XLSX`;
- `messy workbook → defined cleanup rules → verified output`;
- `PPT/report → specified formatting standard → final PPTX`;
- `50 product assets/data → normalized upload-ready batch`;
- `defined CAD production support → delivered file`;
- `reproducible small web bug → fixed + verified`.

Do not let raw data entry/background removal define the brand.

---

## Visual authority

The existing v2 art direction remains useful and should be preserved where strong:

- premium light-first public UX;
- strong typography/hierarchy;
- high-quality motion;
- restrained HUD/world states;
- dark operational moments where useful;
- mobile quality;
- no fantasy RPG treatment;
- no generic SaaS card-wall aesthetic.

However, visual documents never override D-033 product behavior.

If an old reference assumes `BIDs → recommendation → GM chooses`, reinterpret the visual principle for the new flow rather than restoring the old transaction.

---

## State model

GM/work states should use the new model:

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

PLAYER/supply states may include:

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

---

## Prototype honesty

Do not imply production availability of:

- universal instant quote;
- universal automatic routing;
- universal QA;
- universal SLA/outcome guarantee;
- production payment custody;
- tax settlement automation;
- every-category legal clearance.

It is acceptable for the prototype/validation model to use concierge/manual operations behind a simple GM experience.

---

## Validation-aware implementation

Preserve the ability to later measure or test:

- GM multiple-choice vs single execution-offer preference;
- request → SOW friction;
- quote acceptance;
- time to execution secured;
- PRICE × DELIVERY distributions;
- completion/on-time/revision;
- recovery;
- operator/QA minutes;
- completed-outcome contribution;
- repeat GM/PLAYER.

Do not fabricate analytics or validation data in the public prototype.

---

## Definition of done for the redesign

A reviewer can understand without explanation:

> **“의뢰자는 결과·가격·완료시각을 보고 일을 맡기고, 뒤에서는 카파피가 task-first PLAYER 시장과 AI/자동화를 이용해 실행·복구한다.”**

And no current UI/copy makes the default product look like a recommendation-first freelancer marketplace.
