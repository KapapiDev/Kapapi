# KAPAPI Prototype Specification

Status: **canonical implementation scope for the current public prototype**  
Updated: 2026-09-03

This document translates the current product canon into a buildable prototype. `DECISIONS.md` D-032 supersedes older prototype assumptions that universal automatic routing must already be solved.

---

# 1. Prototype objective

Build the smallest public product that makes KAPAPI's differentiated transaction obvious, credible and memorable.

A first-time viewer should understand two things:

### PLAYER

> **할 수 있는 일을 골라서, 끝내고, 돈 번다.**

### GM

> **해야 할 일을 올리면, 누군가 끝내준다.**

The prototype must prove the present transaction and clearly hint at the future Outcome Layer without pretending the future is already production reality.

Current GM flow:

```text
work request
→ scope confirmation
→ QUEST posted
→ BIDs arrive
→ KAPAPI recommendation
→ GM confirms
→ execution
→ result
→ accept / revise
```

PLAYER flow:

```text
QUEST discovery
→ understand scope/deadline
→ BID PRICE + DELIVERY
→ selected/assigned
→ execute
→ submit
→ earn + build history
```

Future direction:

```text
transactions
→ trust data
→ better recommendation
→ default routing
→ recovery
→ work in → result out
```

---

# 2. Prototype success test

After roughly 30–60 seconds, a reviewer should be able to answer:

1. What is KAPAPI?
2. Why does the work appear before the worker/profile?
3. What can a PLAYER do here?
4. What do PLAYERs compete on?
5. How does the GM choose without studying a giant freelancer directory?
6. What happens when work returns?
7. How can this evolve beyond a conventional marketplace?

Correct short answer:

> “카파피에는 일이 먼저 올라옵니다. 할 수 있는 사람이 가격과 완료시간을 제안하고, 카파피가 조건과 이력을 보고 추천해줘서 의뢰자가 빠르게 확정합니다. 거래가 쌓이면 추천·배정·복구가 점점 자동화되고 결국 일을 넣으면 결과를 받는 구조로 발전합니다.”

---

# 3. Product identity

KAPAPI is **task-first**, not profile-first.

Do not make the public product feel like:

- a seller storefront catalog
- a portfolio social network
- a generic expert directory
- a CAD/construction-only service
- a magical AI auto-outsourcing product with no evidence

The core object is the QUEST.

One account may be GM in one QUEST and PLAYER in another. Do not create permanent buyer/seller account classes.

---

# 4. First-touch public UX

## 4.1 Three-second rule

The GM path must immediately communicate:

> **“여기에 내가 맡길 일을 적으면 되는구나.”**

The PLAYER path must also be discoverable without competing with the primary GM action:

> **“작업 찾기”**

Do not require a visitor to understand QUEST / BID / LEVEL / EXP / TIME ATTACK before taking action.

## 4.2 Above-the-fold hierarchy

Required:

1. KAPAPI identity
2. category-neutral plain-language promise
3. large task-entry surface
4. file attachment
5. primary CTA
6. short reassurance about the next step
7. secondary `작업 찾기`
8. supporting product/media proof

Recommended semantic direction, not mandatory copy:

```text
맡길 일을 적어주세요.
카파피가 작업 조건을 정리하고, 맞는 제안을 추천합니다.

[ 어떤 작업이 필요하신가요?                         ]
[ 파일 첨부 ]                              [ 의뢰 등록 → ]

작업을 찾고 있나요? → 작업 찾기
```

Do not say that KAPAPI will universally auto-assign and return only the result as if this is already proven.

---

# 5. Required screens / surfaces

## S01 — Landing

Purpose: explain task-first KAPAPI in seconds and provide both market entrances.

Required:

- task-entry hero
- file attachment
- `의뢰 등록` / equivalent primary CTA
- `작업 찾기` secondary path
- examples across ordinary office/support + skilled work
- concise explanation that PLAYERs BID PRICE + DELIVERY
- a recommendation/selection proof module
- one end-to-end completed QUEST example
- TIME ATTACK example
- result acceptance/revision
- future evolution toward routing/Outcome Layer, clearly labeled as direction

Do not lead with CAD.

## S02 — QUEST draft / scope confirmation

Purpose: reduce posting/explanation friction.

GM input may be vague:

> “이 PDF들 표로 정리해서 오늘 안에 주세요.”

Prototype may deterministically/mock structure:

- request summary
- files
- task scope
- deliverables
- output format
- deadline
- acceptance criteria
- revision boundary
- optional budget ceiling
- confidentiality/security
- missing information

AI behavior may be mocked, but do not claim authoritative price or subjective quality judgment.

Primary action:

**`이대로 등록하기`**

## S03 — QUEST Board / PLAYER discovery

Purpose: prove the founder-origin and task-first supply behavior.

Required QUEST metadata:

- plain-language title
- category
- compensation/range where appropriate
- deadline
- TIME ATTACK when genuine
- brief scope
- files/source indicator
- eligibility
- BID count
- status

Useful filters:

- 전체
- 내가 할 수 있는 작업
- 오늘 마감

A PLAYER should be able to browse real work without first creating a storefront.

## S04 — QUEST Detail / PLAYER BID

Required:

- exact deliverable
- deadline
- input/source files
- acceptance criteria
- confidentiality/security
- relevant requirements

BID requires:

- PRICE
- committed DELIVERY TIME
- optional short relevant note

No long Upwork-style cover letter.

## S05 — BID / recommendation state

Purpose: show what KAPAPI adds beyond simply collecting proposals.

Sequence:

```text
BIDS RECEIVED
→ ELIGIBILITY FILTER
→ KAPAPI RECOMMENDATION
→ GM CONFIRMATION
→ ASSIGNED
```

Show multiple BIDs with visible PRICE + DELIVERY and task-relevant trust.

Recommendation may consider:

- hard eligibility/security
- deadline/budget feasibility
- relevant career/history
- on-time/revision indicators
- availability
- PRICE × DELIVERY trade-off

Default prototype UX:

- one clearly recommended PLAYER
- short `왜 추천하나요?` rationale
- primary `이 작업자로 진행`
- secondary `다른 제안 보기`

Do not present a fake scientific routing score as truth.

Do not present universal auto-assignment as already solved.

## S06 — Assignment / Workroom

Purpose: know what is happening without micromanaging.

Core:

- QUEST identity
- assigned PLAYER
- deadline
- state timeline
- files
- latest event
- revision state
- security/NDA indicator

States:

```text
ASSIGNED
→ WORK STARTED
→ IN PROGRESS
→ FILE DELIVERED
→ GM REVIEW
→ COMPLETE
```

Support fixtures for blocked / late / revision requested / cancelled when useful.

No fake percentage for human work unless genuinely measurable.

## S07 — Result / acceptance

Prioritize:

- delivered files
- delivery timestamp vs deadline
- objective checks actually performed
- result preview where feasible
- accept / QUEST COMPLETE
- request revision

Revision should refer to agreed scope.

## S08 — PLAYER trust/profile

Trust hierarchy:

1. relevant career
2. task-specific completion history
3. on-time rate
4. revision/rework rate
5. completion count
6. rating
7. failure/dispute signals where appropriate
8. LEVEL / EXP as secondary brand layer

Profile answers:

> “이 사람이 이 종류의 일을 제대로 끝낼 가능성이 높은가?”

## S09 — Future direction / Outcome Layer proof

This can be a landing module, not a fake production feature.

Explain the earned progression:

```text
more completed QUESTs
→ better task-specific trust data
→ better recommendations
→ default routing
→ backup/recovery
→ work in → result out
```

At maturity, execution may use human PLAYERs, AI, automation, specialist partners or hybrid workflows.

Label this as **future direction / product evolution**, not current universal capability.

---

# 6. Demo fixtures

Use category-neutral variety.

At minimum include:

### Ordinary bounded work

- PDF → spreadsheet extraction
- PPT formatting cleanup
- e-commerce image resizing/product listing

### Skilled support work

- defined CAD/drawing support
- rendering
- small code/web fix

Architecture/CAD may be the detailed founder-domain case, but it must not dominate the hero or overall category impression.

---

# 7. Recommendation fixture

Example:

| PLAYER | PRICE | DELIVERY | Relevant history | On-time |
| --- | ---: | ---: | --- | ---: |
| A | ₩50,000 | 18H | 31 similar QUESTs | 97% |
| B | ₩70,000 | 8H | 84 similar QUESTs | 99% |
| C | ₩90,000 | 4H | 12 similar QUESTs | 96% |

A deadline-sensitive fixture may recommend B because it satisfies the deadline with stronger task history/reliability at acceptable cost.

The UI should make clear that cheapest, fastest or highest-rated does not automatically win in every case.

---

# 8. State model

Prototype should support at least:

```text
DRAFT
SCOPE_READY
OPEN
BIDDING
RECOMMENDATION_READY
CONFIRMED
ASSIGNED
IN_PROGRESS
DELIVERED
REVIEW
REVISION_REQUESTED
COMPLETE
BLOCKED
CANCELLED
```

Demo transitions must be deterministic and replayable.

---

# 9. Hero/media behavior

Hero media supports the action; it is not the product itself.

Rules:

- category-neutral master story
- real KAPAPI UI rather than fake generated readable UI
- no message implying universal auto-routing already exists
- motion may show `submit → bids → recommendation → confirmation → work → result`
- future `work in → result out` may appear as a clearly future-oriented closing beat
- mobile/reduced-motion paths must preserve understanding without video

---

# 10. Landing narrative order

Recommended:

1. Hero: submit work / find work
2. Task-first distinction: work exists first
3. PRICE × DELIVERY market proof
4. KAPAPI recommendation + GM confirmation
5. real completed QUEST case
6. TIME ATTACK
7. result loop
8. PLAYER trust / LEVEL-EXP as evidence layer
9. future evolution: data → routing → Outcome Layer
10. PLAYER entry / open QUESTs

Avoid turning the landing page into a pitch deck or card wall.

---

# 11. Visual rules

Keep current v2 visual authority unless product behavior conflicts.

- public UX light-first
- dark only as contextual operational punctuation
- premium typography
- restrained HUD/world language
- no fantasy RPG imagery
- no generic SaaS dashboard collage
- no invented public labels without product meaning

World-building should come from real states such as QUEST, BID, TIME ATTACK, LEVEL / EXP and QUEST COMPLETE.

---

# 12. Accessibility / responsive / performance

Required:

- semantic headings/landmarks
- keyboard-operable controls
- visible focus
- labeled files and form controls
- sufficient contrast
- reduced-motion path
- status not color-only
- touch-safe mobile controls
- no horizontal overflow
- text/action must render before heavy hero media
- poster/fallback for video
- no layout shifts caused by media

---

# 13. Explicit non-goals before 1R

Do not build or claim:

- production escrow/custody
- tax settlement engine
- universal identity verification automation
- deep dispute center
- full messaging suite
- broad category marketplace backend
- native apps
- authoritative AI pricing
- subjective AI final quality judgment
- universal automatic PLAYER routing
- universal SLA/outcome guarantee
- controlled hourly staffing
- unqualified regulated professional judgment

---

# 14. 60-second demo target

```text
00–08s   Landing: task-first promise + task input
08–16s   GM input becomes a clear QUEST draft
16–24s   PLAYER board: real work exists first
24–32s   PLAYER submits PRICE + DELIVERY BID
32–42s   BIDs filtered → KAPAPI recommends → GM confirms
42–52s   Work progresses → result delivered
52–58s   GM accepts / requests revision
58–60s   Future: transactions → trust → routing → Outcome Layer
```

Desired reviewer reaction:

> **“지금은 일이 먼저 올라오는 거래시장이고, 이 거래 데이터를 쌓아서 결국 일을 넣으면 결과가 나오는 시스템으로 가려는 거구나.”**
