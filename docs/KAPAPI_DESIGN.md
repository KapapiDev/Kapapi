# KAPAPI Design System

Status: **canonical visual specification for the current prototype**  
Updated: **2026-09-03**

KAPAPI should feel like serious, premium work-execution software.

> **Outside: sharp and memorable. Inside: calm, clear and trustworthy.**

## 1. Product meaning before style

Current visual transaction:

발주자 surface — 업무 입력 → KAPAPI → 결과, with an explicit execution contract:

```text
발주자 describes the work + attaches files
→ 실행 계약: 결과물 · 가격 · 완료시간 · 수정 경계 · 복구 경계 → 승인
→ KAPAPI procures, assigns, checks and recovers execution internally
→ RESULT
→ ACCEPT / REVISE
```

Behind the contract, on the 작업자 surface and in `이용 방법`:

```text
WORK EXISTS
→ 작업자들이 discover it
→ 가격 × 완료시간 proposals arrive
→ KAPAPI filters by 자격 · 마감 · 예산 · 보안
→ KAPAPI SELECTS
→ ASSIGNED / WORK
```

The 발주자 approves the execution contract and later accepts or requests revision of the result. Worker selection and proposal comparison belong to KAPAPI's internal execution process (D-033.1–.5, D-035).

Future internal capability, behind the same client contract-and-result flow:

```text
completed-work data
→ trust
→ more accurate selection
→ instant quoting in proven categories
→ recovery
→ repeat capacity
→ more reliable execution across proven categories
```

The design must not imply universal auto-routing is already solved.

---

## 2. Core visual priorities

1. **work-object clarity** — task/file/result are concrete objects
2. **task-first discovery** — open work is primary on worker surfaces
3. **price × completion-time legibility** — contract terms for clients; proposals for workers and internal procurement
4. **execution-contract clarity** — result, price, completion time, revision and recovery boundaries
5. **assignment evidence** — KAPAPI's selection is recorded after contract approval
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

### Proposal / internal procurement
- price × completion time prominent
- relevant history/on-time/revision immediately legible
- KAPAPI's selected execution path clear without theatrical winner effects
- candidate comparison belongs to internal procurement and the mechanism explainer

### Client execution contract
- deliverable, price and completion time prominent
- acceptance/revision and recovery boundaries visible before approval
- quote basis legible; assisted quotes must not look universally instant

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
After the execution contract is approved, `배정`, `작업 시작` and the timeline follow
KAPAPI's internal selection. The client is informed of assignment without being asked to select an executor.

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
- 접수됨 / 배정 / 수행 / 결과 / 완료

Do not use fictional role names, experience points, levels, rarity, coins, swords or pseudo-lore.

---

## 10. Interaction hierarchy

The assignment record is informational. The 발주자's actions are:

> **맡기기** — at the start

> **이 조건으로 맡기기** — approve the execution contract before procurement and execution

> **결과 확인** / **수정 요청** — at the end

The primary should feel consequential but not celebratory.

---

## 11. Hero design

The work-entry surface is the protagonist.

Copy direction:

> **오늘은 어떤 일을 끝낼까요?**  
> 파일을 업로드하고 간단하게 설명해 주세요.

Product-movie states:

```text
업무 요청 (파일 + 한 줄)
→ 실행 계약 승인 (결과물 · 가격 · 완료시간 · 수정 경계 · 복구 경계)
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

This represents increasing internal reliability and category coverage. The client
contract-and-result flow already applies; universal automation is not a current claim.

---

## 14. Accessibility / responsive

- semantic structure
- visible keyboard focus
- touch-safe controls
- sufficient contrast
- status never color-only
- reduced-motion path
- no horizontal overflow
- execution-contract approval and result acceptance remain understandable on mobile

---

## 15. Rejection gate

Reject a screen if it looks like a generic dashboard/template, makes work less prominent than profile decoration, omits execution-contract approval, turns internal selection into a client action, implies universal day-one auto-routing, lets CAD define the product, uses gamified decoration instead of real trust evidence, or needs paragraphs to explain what the UI should show.
