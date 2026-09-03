# KAPAPI Prototype Specification

Status: **canonical implementation scope for the current public prototype**  
Updated: 2026-09-03

This document translates the current product canon into a buildable prototype. Universal automatic routing is a later earned capability.

---

# 1. Prototype objective

Build the smallest public product that makes KAPAPI's differentiated transaction obvious, credible and memorable.

A first-time viewer should understand:

### 작업자

> **할 수 있는 일을 골라서, 끝내고, 돈 번다.**

### 발주자

> **사람을 찾지 말고, 할 일을 올린다.**

### North Star

> **해야 할 일을 올리면, 결과로 돌아온다.**

Current client flow:

```text
업무 요청 (파일 + 한 줄)
→ 작업조건 정리
→ 업무 등록
→ (카파피: 제안 도착 · 필수요건 확인 · 선정 · 배정 · 수행)
→ 결과
→ 수락 / 수정 요청
```

Three nodes from the 발주자's side: 발주자 → 카파피 → 결과.

Worker flow:

```text
업무 탐색
→ 범위/마감 확인
→ 가격 + 완료시간 제안
→ 선정/배정
→ 수행
→ 결과 제출
→ 작업대금 + 작업이력
```

Future direction:

```text
transactions
→ trust data
→ better recommendation
→ default routing
→ recovery
→ human + AI + automation + partners
→ work in → result out
```

---

# 2. Prototype success test

After roughly 30–60 seconds, a reviewer should be able to answer:

1. What is KAPAPI?
2. Why does work appear before the worker/profile?
3. What can a worker do here?
4. What do workers compete on?
5. Why is price × completion time different from lowest-price bidding?
6. How does the client choose without studying a giant freelancer directory?
7. What happens when work returns?
8. How can this evolve beyond a conventional marketplace?

Correct short answer:

> **“카파피에는 일이 먼저 올라옵니다. 할 수 있는 사람이 가격과 완료시간을 제안하고, 카파피가 조건과 실제 작업이력을 보고 추천해줘서 발주자가 빠르게 확정합니다. 거래가 쌓이면 추천·배정·복구를 점점 고도화하고 결국 일을 넣으면 사람·AI·자동화 중 적합한 실행수단을 통해 결과를 받는 구조로 발전합니다.”**

---

# 3. Product identity and terminology

KAPAPI is **task-first**, not profile-first.

Do not make the public product feel like:

- a seller storefront catalog
- a portfolio social network
- a generic expert directory
- a cheap microtask/clickwork board
- a CAD/construction-only service
- a magical AI auto-outsourcing product with no evidence

The core object is **업무**: a bounded, finishable unit of work. Bounded does not mean cheap or trivial.

Use ordinary Korean terms only:

- 발주자
- 작업자
- 업무
- 제안
- 가격
- 완료시간
- 작업대금
- 긴급 업무
- 작업이력 / 정시완료율 / 수정률
- 업무 완료

Do not introduce fictional role names, progression levels, experience points or a separate glossary.

One account may be a client in one transaction and a worker in another. Do not create permanent buyer/seller account classes.

---

# 4. First-touch public UX

## 4.1 Three-second rule

Client path:

> **“사람부터 찾는 게 아니라, 할 일을 적으면 되는구나.”**

Worker path:

> **“작업 찾기”**

## 4.2 Above-the-fold hierarchy

Required:

1. KAPAPI identity
2. category-neutral plain-language promise
3. large work-entry surface
4. file attachment
5. primary CTA
6. short reassurance about the next step
7. secondary `작업 찾기`
8. supporting product/media proof

Shipped (D-035):

```text
[발주자 | 작업자]                        내 업무   이용 방법   회원가입

오늘은 어떤 일을 끝낼까요?               [ the founder's film, whole ]

[ + | 파일을 업로드하고 간단하게 설명해 주세요. ]

[ 맡기기 ]
```

The client's model is **발주자 → 카파피 → 결과**: three nodes. 입찰 and 선정 happen
inside the middle one, so proposal lists and a worker-selection step are not
client screens. The market and its 가격 + 완료시간 mechanism stay fully visible on
the 작업자 surface, and `이용 방법` may open the box to explain the mechanism.

`작업 찾기` is not a secondary CTA here — 작업자 is a route (`/board`) reached by
the header toggle, so this surface carries one action.

Do not claim escrow, completion guarantee or AI quality judgement.

---

# 5. Required screens / surfaces

## S01 — Landing

Required on the 발주자 surface:

- task-entry hero: one question, one field with file attachment, `맡기기`
- the 발주자 / 작업자 toggle
- one end-to-end completed-work example showing 업무 입력 → 카파피 → 결과, with the
  assignment's criteria visible as a record
- result acceptance/revision
- one account holding both roles

Required on the 작업자 surface (`/board`):

- open work with 보수 range, 완료시간, 마감, 제안 count and eligibility state
- `내가 할 수 있는 작업` and `오늘 마감` filters
- 가격 + 완료시간 bidding, with no storefront to build first

The **가격 × 완료시간** comparison scene and the selection proof belong to `이용 방법`
and the 작업자 surface. Putting the comparison on the client's first screen is what
D-035 removed.

Do not lead with CAD or ultra-cheap prices.

## S02 — 업무 초안 / 조건 확인

A vague input such as:

> “이 PDF들 표로 정리해서 오늘 안에 주세요.”

may be structured into:

- request summary
- files
- scope
- deliverables
- output format
- deadline
- acceptance criteria
- revision boundary
- optional budget ceiling
- confidentiality/security
- missing information

Primary action: **`이대로 등록하기`**

## S03 — 업무 목록 / 작업자 탐색

Required metadata:

- plain-language title
- category
- compensation/range where appropriate
- deadline
- `긴급` when genuine
- brief scope
- source/files indicator
- requirements
- proposal count
- status

Useful filters:

- 전체
- 내가 할 수 있는 작업
- 오늘 마감

Workers must be able to browse real work without first creating a storefront.

## S04 — 업무 상세 / 제안

Required:

- exact deliverable
- deadline
- input/source files
- acceptance criteria
- confidentiality/security
- relevant requirements

Proposal requires:

- **가격**
- **완료시간**
- optional short relevant note

No long cover letter.

## S05 — 선정 (not a client screen)

D-035 removed the comparison step from the 발주자 surface. What was S05 is now two
different things depending on who is looking.

**Inside the product**, selection runs without the client:

```text
제안 도착
→ 필수요건 확인 (자격 · 마감 · 예산 · 보안)
→ 통과한 제안만 가격 × 완료시간 × 작업이력으로 정렬
→ KAPAPI 선정
→ 작업자 배정
```

**On the 발주자 surface**, the only trace of this is a record after the fact: who
was assigned, and the criteria that produced it. It is information, never a
decision. There is no `이 작업자로 진행`, no `다른 제안 보기`, no ranked list.

**On `이용 방법`**, the box may be opened, because explaining the mechanism is that
page's job. It shows the arriving bids, the selected one with its criteria, and
the excluded ones with the condition each missed:

| 작업자 | 가격 | 완료시간 | 유사 업무 완료 | 정시완료율 |
| --- | ---: | ---: | ---: | ---: |
| A | ₩32,000 | 5시간 | 18건 | 97% |
| B | ₩40,000 | 2시간 | 51건 | 99% |
| C | ₩55,000 | 45분 | 12건 | 96% |

It must stay clear that cheapest, fastest or highest-rated does not automatically
win. Do not present fake scientific certainty, and do not present the selection as
unexplained — `PRODUCT.md` §13 rules out AI as a sole and opaque selector, and an
inspectable selection is the answer to that, not a weaker claim.

## S06 — 작업 진행

Core:

- work identity
- assigned worker
- deadline
- state timeline
- files
- latest event
- revision state
- security/NDA indicator

States:

```text
배정 완료
→ 작업 시작
→ 작업 중
→ 결과 전달
→ 발주자 확인
→ 업무 완료
```

No fake human-work progress percentage unless genuinely measurable.

## S07 — 결과 / 수락

Prioritize:

- delivered files
- delivery timestamp vs deadline
- objective checks actually performed
- result preview where feasible
- accept / complete
- request revision

## S08 — 작업자 이력

Trust hierarchy:

1. relevant career
2. similar-work completion history
3. on-time rate
4. revision/rework rate
5. completion count
6. rating
7. failure/dispute signals where appropriate

Do not display decorative levels or experience points.

## S09 — Future direction

Explain:

```text
more completed work
→ better task-specific trust data
→ better recommendations
→ default routing
→ backup/recovery
→ human + AI + automation + partners
→ work in → result out
```

Label as future direction / product evolution.

---

# 6. Demo fixtures and category families

### Data & Documents

- PDF → spreadsheet extraction
- spreadsheet cleanup/comparison table
- PPT formatting cleanup

### Content & Production

- e-commerce image resizing/product listing
- translation/proofreading
- subtitle/cut editing

### Skilled Support

- defined CAD/drawing support
- rendering
- small code/web fix

Architecture/CAD may be a detailed founder-domain case, but it must not dominate the hero.

---

# 7. Economic presentation guardrail

Do not make KAPAPI's visual identity depend on ultra-low payment amounts.

The product thesis is **clear work units**, not cheap labor units.

No universal minimum payment is canonical yet. Category-specific minimum viable transaction values must be learned from real payment, support, revision and recovery economics.

---

# 8. State model

Internal implementation may use English state identifiers, but user-facing labels should remain ordinary Korean.

Minimum state semantics:

```text
초안
조건 정리 완료
모집 중
제안 도착
작업자 배정
작업 중
결과 전달
검토
수정 요청
완료
보류
취소
```

Demo transitions must be deterministic and replayable.

---

# 9. Hero/media behavior

Rules:

- category-neutral master story
- real KAPAPI UI rather than fake generated readable UI
- no message implying universal auto-routing already exists
- motion may show `업무 등록 → 제안 → 가격 × 완료시간 → 추천 → 확정 → 수행 → 결과`
- future `work in → result out` may appear as a future-oriented closing beat
- mobile/reduced-motion paths must preserve understanding without video

---

# 10. Landing narrative order

발주자 surface:

1. Hero: **오늘은 어떤 일을 끝낼까요?** / 파일 + 한 줄 / `맡기기`
2. 업무 입력 → 카파피 → 결과, as three beats of one real work item
3. one account, both roles

작업자 surface and `이용 방법` carry the task-first distinction, the
**가격 × 완료시간** signature scene, the selection with its criteria and excluded
제안, the completed-work case, urgent work, the result loop and worker trust.
9. future: data → routing → Human/AI/Automation execution layer
10. worker entry / open work

---

# 11. Visual rules

- public UX light-first
- dark only as contextual operational punctuation
- premium typography
- real operational metadata only
- no fantasy/game visual language
- no decorative levels/experience points
- no generic SaaS dashboard collage
- no cheap-microtask-board aesthetic
- no invented public labels without product meaning

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
- text/action renders before heavy hero media
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
- universal automatic worker routing
- universal SLA/outcome guarantee
- controlled hourly staffing
- unqualified regulated professional judgment

---

# 14. 60-second demo target

```text
00–08s   Landing: “사람을 찾지 말고, 할 일을 올린다” + task input
08–16s   발주자 input becomes a clear work draft
16–24s   작업 목록: real work exists first
24–32s   작업자가 가격 + 완료시간 제안
32–42s   가격 × 완료시간 comparison → KAPAPI recommends → 발주자 confirms
42–52s   Work progresses → result delivered
52–58s   발주자 accepts / requests revision
58–60s   Future: transactions → trust → routing → Human/AI/Automation execution layer
```

Desired reviewer reaction:

> **“카파피는 싼 심부름을 모아놓는 곳이 아니라, 끝이 명확한 일을 먼저 올리고 가격과 완료시간으로 거래하면서 결국 일을 넣으면 결과를 받는 실행 레이어로 가는 거구나.”**
