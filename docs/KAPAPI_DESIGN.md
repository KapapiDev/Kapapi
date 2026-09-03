# KAPAPI Design System

Status: **canonical visual specification for the current prototype**  
Updated: **2026-09-03**

KAPAPI should feel like serious, premium work-execution software.

> **Outside: sharp and memorable. Inside: calm, clear and trustworthy.**

## 1. Product meaning before style

Current visual transaction:

```text
WORK EXISTS
→ 발주자 creates work
→ 작업자들이 discover it
→ 가격 × 완료시간 proposals arrive
→ KAPAPI filters/ranks
→ RECOMMENDATION
→ 발주자 CONFIRMS
→ ASSIGNED / WORK
→ RESULT
```

Future evolution:

```text
completed-work data
→ trust
→ recommendation
→ routing / recovery
→ repeat capacity
→ WORK IN → RESULT OUT
```

The design must not imply universal auto-routing is already solved.

---

## 2. Core visual priorities

1. **work-object clarity** — task/file/result are concrete objects
2. **task-first discovery** — open work is primary on worker surfaces
3. **price × completion-time legibility**
4. **recommendation confidence**
5. **confirmation clarity** — recommended is distinct from assigned
6. **trust evidence** — relevant history beats decorative status
7. **delivery proof** — files, timestamps and checks dominate completion
8. **future evolution** — show data → trust → routing without overclaiming

---

## 3. Visual character

KAPAPI should feel precise, editorial, operational, premium, slightly competitive, technically sophisticated, quiet at rest and alive when work state changes.

It should not feel like fantasy/game UI, crypto RGB, generic AI startup, stock dashboard, generic freelancer directory or CAD vertical SaaS.

---

## 4. Reference synthesis

Use references as principles, not layouts to clone:

- Linear: precision, grids, hierarchy
- Hyperstudio: editorial confidence
- Factory: operational work-state clarity
- Vercel: transaction/form restraint
- Mercury: trustworthy B2B data presentation
- Raycast: tactile micro-interactions
- Korean marketplaces: familiar request/budget/deadline/delivery/revision language

---

## 5. Theme architecture

### Public landing / work creation
- white/off-white base
- black/graphite typography
- disciplined whitespace
- restrained hairlines
- one signal accent family

### Open work / worker discovery
- scannable light surface
- category/deadline/requirements metadata
- work title and outcome above profile decoration

### Proposal / recommendation
- price × completion time prominent
- relevant history/on-time/revision immediately legible
- recommended worker clear without theatrical winner effects
- alternatives quieter but inspectable

### Active work / urgent work
Dark contextual treatment may be used when it improves operational clarity.

### Completion
Return to bright/clean result surface. File/result proof dominates.

---

## 6. Typography

Use a strong editorial role for major headlines, high-readability Korean sans for product/body and restrained mono for IDs, numeric comparisons, states and timing where useful.

No novelty game fonts or pseudo-terminal language.

---

## 7. Core object hierarchy

### Work card
1. work title/result
2. deadline / urgent state
3. payment/range
4. requirements/category
5. proposal count/state

### Proposal
1. price
2. completion time
3. task-relevant history/career
4. reliability
5. short note if useful

### Assignment record (발주자 surface)
1. `배정`
2. worker identity
3. price + completion time
4. `왜 이 작업자인가요?` with the criteria
5. — no action. D-035: the client is not asked to choose.

### Assigned/work state
`배정`, `작업 시작` and the timeline follow KAPAPI's selection directly. There is no
confirmation step to gate them behind.

### Result
1. delivered file/result
2. delivery timing
3. objective checks performed
4. `결과 확인` / `수정 요청`
5. work-history update only when it reflects real evidence

---

## 8. Worker discovery

```text
지금 열려 있는 작업
[전체] [내가 할 수 있는 작업] [오늘 마감]
→ 업무 rows/cards
```

Do not require seller-storefront creation first.

One account may issue and perform different work. Avoid a permanent buyer/seller **account** split: no second signup, no onboarding fork, no separate login. A 발주자 / 작업자 **view** toggle is permitted and is what ships — it changes which surface is on screen, never which account the person has (IDENTITY_ROLE_MODEL §1, §4).

---

## 9. Operational metadata grammar

Allowed when real:

- 업무 번호 or short task ID
- 제안 수
- 가격
- 완료시간
- 긴급
- 마감까지 남은 시간
- 유사 업무 완료 건수
- 정시완료율
- 수정 요청률
- 추천 / 확정 / 배정 / 수행 / 결과 / 완료

Do not use fictional role names, experience points, levels, rarity, coins, swords or pseudo-lore.

---

## 10. Interaction hierarchy

The assignment record has no action. The 발주자's only actions in the whole flow are
at the two ends:

> **맡기기** — at the start

> **결과 확인** / **수정 요청** — at the end

The primary should feel consequential but not celebratory.

---

## 11. Hero design

The work-entry surface is the protagonist.

Copy direction:

> **사람을 찾지 말고, 할 일을 올리세요.**  
> 카파피가 작업 조건을 정리하고 맞는 제안을 추천합니다.

Product-movie states:

```text
업무 등록
→ (카파피: 제안 도착 · 조건 확인 · 선정 · 배정)
→ 결과 도착
```

---

## 12. Category neutrality

Use a balanced example set including PDF/spreadsheet/data, document/PPT, image/e-commerce, language/media, CAD/skilled production and small web/code tasks.

---

## 13. Future execution-layer visual

```text
MARKET
→ TRUST
→ RECOMMEND
→ ROUTE / RECOVER
→ OUTCOME
```

Potential mature resources:

`HUMAN WORKER · AI · AUTOMATION · SPECIALIST PARTNER · HYBRID`

This must read as product evolution, not current universal capability.

---

## 14. Accessibility / responsive

- semantic structure
- visible keyboard focus
- touch-safe controls
- sufficient contrast
- status never color-only
- reduced-motion path
- no horizontal overflow
- recommendation/confirmation remains understandable on mobile

---

## 15. Rejection gate

Reject a screen if it looks like a generic dashboard/template, makes work less prominent than profile decoration, makes recommendation and assignment indistinguishable, implies universal day-one auto-routing, lets CAD define the product, uses gamified decoration instead of real trust evidence, or needs paragraphs to explain what the UI should show.
