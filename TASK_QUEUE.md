# KAPAPI — TASK QUEUE

Status: **current implementation queue**  
Updated: **2026-09-03**  
Primary implementation target: `feat/prototype-v2`

Authority:

1. `docs/ORIGIN_AND_GROWTH_THESIS.md`
2. `docs/DECISIONS.md` D-032
3. `docs/PRODUCT.md`
4. `docs/ROADMAP.md`
5. `docs/PROTOTYPE_SPEC.md`
6. current v2 visual/content rules

Do not restore D-031's universal day-one auto-routing behavior.

---

# P0 — Canon alignment

## KAP-100 — Task-first canon

**Status:** DONE

Acceptance:

- founder-origin problem preserved
- task-first market is explicit
- Architecture/CAD is testbed only
- work category is broader than only professional work
- PRICE + DELIVERY remains mandatory
- Outcome Layer remains North Star

## KAP-101 — Supersede premature auto-routing

**Status:** DONE

Acceptance:

- D-032 supersedes D-031
- early default can be KAPAPI recommendation + GM confirmation
- routing responsibility grows with data
- universal outcome/SLA promise is deferred

## KAP-102 — Resource-agnostic Outcome Layer

**Status:** DONE

Acceptance:

Long-term execution explicitly permits:

- human PLAYER
- AI
- deterministic automation
- specialist partner
- hybrid execution
- multi-PLAYER decomposition

---

# P0 — Prototype behavior realignment

## KAP-110 — Replace automatic assignment with recommendation + confirmation

**Status:** OPEN

Change v2 transaction proof from:

`BIDs → KAPAPI auto-assigns`

to:

`BIDs → eligibility/ranking → KAPAPI recommendation → GM confirms → assigned`

Required UI:

- recommended PLAYER
- PRICE
- DELIVERY
- relevant trust/history
- short recommendation rationale
- primary `이 작업자로 진행`
- secondary `다른 제안 보기`

Acceptance:

- no universal auto-routing claim
- recommendation remains visibly useful
- user can understand why the recommendation exists
- alternatives remain accessible without a giant comparison wall

## KAP-111 — Update state model

**Status:** OPEN

Add/rename states as needed:

```text
BIDDING
RECOMMENDATION_READY
CONFIRMED
ASSIGNED
IN_PROGRESS
DELIVERED
REVIEW
COMPLETE
```

Remove copy that equates recommendation with already-proven routing automation.

## KAP-112 — Update deterministic fixture logic

**Status:** OPEN

Keep deterministic ranking for demo stability, but interpret the top candidate as **recommended**, not silently assigned before GM confirmation.

Acceptance:

- existing route/rank evidence can be reused
- confirmation creates assignment
- tests distinguish recommendation from assignment

---

# P0 — Landing/message alignment

## KAP-120 — Hero copy

**Status:** OPEN

Replace current implication:

> 전문가 배정부터 결과 전달까지 카파피가 진행합니다.

with current-stage copy that does not overclaim.

Preferred semantic direction:

> **맡길 일을 적어주세요.**  
> 카파피가 작업 조건을 정리하고 맞는 제안을 추천합니다.

Keep:

- category-neutral task input
- file attachment
- strong primary CTA
- `작업 찾기` visible as PLAYER path

## KAP-121 — Keep task-first examples broad

**Status:** OPEN

Ensure hero/landing examples span multiple categories, such as:

- spreadsheet/data
- PPT/document
- image/e-commerce
- CAD/skilled support

Architecture/CAD may appear as one proof case, not the visual identity.

## KAP-122 — Rewrite routing proof as recommendation proof

**Status:** OPEN

Current wording like:

> 제안은 경쟁합니다. 비교는 하지 않으셔도 됩니다.

must become a present-tense truthful story:

- KAPAPI filters invalid/ineligible options
- KAPAPI recommends the strongest fit
- GM confirms
- future routing can remove this decision as evidence grows

## KAP-123 — Add explicit task-first distinction

**Status:** OPEN

Landing should demonstrate rather than over-explain:

> work exists first → PLAYER chooses suitable QUEST

Use the real `작업 찾기` board as product proof where possible.

## KAP-124 — Reframe future Outcome Layer

**Status:** OPEN

Add a concise future-evolution moment:

```text
QUEST COMPLETE data
→ trust
→ better recommendation
→ routing/recovery
→ work in → result out
```

Label as future/product evolution. Do not present universal work-in/result-out as already guaranteed.

---

# P0 — GM creation/result flow

## KAP-130 — QUEST draft copy

**Status:** OPEN

Keep AI-assisted scope structure but change post-submit copy that says KAPAPI will automatically find/select and only return a result.

Current-stage confirmation should say approximately:

> 의뢰가 등록되었습니다. 제안이 모이면 카파피가 조건과 이력을 바탕으로 추천해드립니다.

## KAP-131 — Recommendation confirmation

**Status:** OPEN

Create a GM confirmation interaction reachable from the demo path.

Acceptance:

- recommended candidate can be confirmed
- alternatives can be inspected
- confirmation changes state to assigned

## KAP-132 — Result loop

**Status:** VERIFY

Preserve:

- delivered files
- deadline/timestamp
- objective checks
- accept
- revision request

Do not add unsupported AI quality claims.

---

# P0 — PLAYER flow

## KAP-140 — Preserve task board

**Status:** VERIFY

The current `/board` structure strongly supports task-first identity.

Verify:

- `작업 찾기` remains primary PLAYER path
- filters include suitable work / urgent work
- no storefront requirement is introduced
- one account can issue and perform different QUESTs

## KAP-141 — BID form

**Status:** VERIFY

Every BID must require:

- PRICE
- committed DELIVERY TIME

Avoid long proposal theatre.

## KAP-142 — Trust history

**Status:** VERIFY

Task-specific career/history, on-time and revision signals should outrank decorative LEVEL / EXP.

---

# P1 — Long-term concept proof

## KAP-150 — Outcome execution resource diagram

**Status:** OPEN

Future-direction proof may show:

```text
KAPAPI
├ human PLAYER
├ AI
├ automation
├ specialist partner
└ hybrid / multi-PLAYER
        ↓
      RESULT
```

Keep this concise and product-like, not a pitch-deck diagram wall.

## KAP-151 — Data flywheel proof

**Status:** OPEN

Demonstrate that completed QUESTs produce useful product data:

- PRICE
- DELIVERY
- task fit
- on-time
- revision
- failure/recovery

Then connect that to recommendation/routing.

---

# P0 — QA

## KAP-160 — Update automated invariants

**Status:** OPEN

Existing v2 scripts that assert no GM picker / automatic routing must be updated.

New invariants:

- no seller-storefront-first landing
- PRICE + DELIVERY required
- recommendation != assignment
- GM confirmation exists
- no universal auto-routing claim
- Architecture/CAD not hero identity
- task board remains functional
- no permanent GM/PLAYER account split
- future Outcome Layer clearly labeled as future

## KAP-161 — Build / lint / typecheck

**Status:** OPEN

Run all available repository checks after code changes.

## KAP-162 — Desktop/mobile visual QA

**Status:** OPEN

Verify at minimum:

- desktop landing + transaction path
- mobile landing + transaction path
- board
- QUEST detail / BID
- recommendation / confirmation
- result
- reduced motion

No horizontal overflow, broken touch targets, missing labels or unreadable hero sequence.

## KAP-163 — Preview QA

**Status:** OPEN

When Vercel preview access is available:

- verify the actual deployed URL
- inspect hero timing/compositing
- verify copy/state matches D-032
- record remaining weaknesses honestly

---

# P1 — Application proof

## KAP-170 — 60-second 1R demo path

**Status:** OPEN

Target:

```text
Landing
→ GM creates QUEST
→ PLAYER finds work
→ PRICE + DELIVERY BID
→ KAPAPI recommendation
→ GM confirmation
→ execution/result
→ accept/revise
→ future Outcome Layer
```

## KAP-171 — Preserve honest prototype boundaries

**Status:** OPEN

Do not imply production availability of:

- escrow/payment custody
- tax settlement
- universal identity verification
- universal auto-routing
- universal SLA/outcome guarantee
- subjective AI quality judgment

---

# Completion condition

The alignment pass is complete when a new reviewer can describe KAPAPI as:

> **“일이 먼저 올라오는 Task Market에서 시작해서, 거래 데이터를 쌓아 추천·배정·복구를 발전시키고 결국 일을 넣으면 결과가 돌아오는 시스템으로 가는 서비스.”**

and no canonical document or current v2 user-facing flow materially contradicts that description.
