# KAPAPI — Implementation Handoff

Status: **current implementation handoff**  
Authority branch: `docs/initial-product-design`  
Current visual implementation branch: `feat/prototype-v2`

## Mission

Build and maintain a high-polish KAPAPI prototype that makes the present transaction understandable in seconds and the long-term execution layer credible without pretending it already exists.

The product is **not** a freelancer directory, a gamified work service, a CAD marketplace or a magical auto-outsourcing demo.

Current product story:

```text
TASK FIRST
발주자가 bounded work 등록
→ 작업자가 open work 탐색
→ 가격 + 완료시간 제안
→ KAPAPI 필수요건 확인 / 정렬 / 추천
→ 발주자 확정
→ 작업자 수행
→ 결과 전달
→ 발주자 수락/수정
```

Growth story:

```text
transactions → trust data → recommendation → routing → recovery → repeat capacity → execution layer
```

North Star:

> **해야 할 일을 올리면, 결과로 돌아온다.**

---

## Mandatory reading order

1. `docs/ORIGIN_AND_GROWTH_THESIS.md`
2. `docs/DECISIONS.md` — D-032 through D-034 are current authority
3. `docs/PRODUCT.md`
4. `docs/ROADMAP.md`
5. `docs/VALIDATION.md`
6. `docs/PROTOTYPE_SPEC.md`
7. `docs/PROGRAM_2026_MODU.md`
8. `docs/LEGAL.md`
9. current visual/content documents
10. `TASK_QUEUE.md`

Older copy or behavior that conflicts with current canon must be replaced.

---

## Non-negotiable product truths

1. **Task first, not profile first.** Work is the core marketplace object.
2. A client must understand within seconds that they can submit work here.
3. Workers need a clear `작업 찾기` path to real open work.
4. Workers do not need a storefront before earning.
5. Every proposal requires **price + committed completion time**.
6. Preferred early default is **KAPAPI recommendation + client confirmation**.
7. Alternatives may be visible through `다른 제안 보기`; do not force a giant comparison wall.
8. Universal automatic routing is later, earned from transaction/trust/liquidity/recovery data.
9. Client remains final result judge through accept/revise.
10. Architecture/CAD is one founder-domain proof case, not the hero category.
11. Early categories may include ordinary office/support and skilled professional-support work.
12. **Use standard terminology only:** 발주자 / 작업자 / 업무 / 제안 / 가격 / 완료시간 / 작업대금 / 긴급 업무 / 작업이력 / 업무 완료.
13. Do not use fictional roles, special glossary, levels, experience points or gamified completion labels.
14. One universal account; client/worker are contextual transaction roles.
15. AI initially helps scope, missing information, fit and objective checks. It is not an infallible selector or subjective quality judge.
16. Long-term execution may use human workers, AI, automation, specialist partners or hybrid workflows.
17. Strong SLA/outcome guarantees are earned category by category.

---

## Current client UX

```text
LANDING
→ task input / files
→ KAPAPI structures work
→ client confirms posting
→ proposals arrive
→ KAPAPI recommendation appears
→ client confirms recommended worker
→ execution status
→ delivered result
→ accept / revise
```

Recommendation surface should show deadline/budget feasibility, relevant history/career, on-time/revision signals, price + completion-time trade-off and short rationale.

Primary action: **이 작업자로 진행**

Secondary: **다른 제안 보기**

---

## Current worker UX

```text
작업 찾기
→ open work board
→ filter by fit / deadline
→ inspect bounded scope
→ propose price + completion time
→ assignment
→ execute
→ submit result
→ get paid / verified work history
```

---

## Hero requirement

The first viewport remains category-neutral and action-led.

Approved semantic direction:

```text
사람을 찾지 말고, 할 일을 올리세요.
카파피가 작업 조건을 정리하고 맞는 제안을 추천합니다.

[ 어떤 작업이 필요하신가요?                         ]
[ 파일 첨부 ]                              [ 의뢰 등록 → ]

작업을 찾고 있나요? → 작업 찾기
```

The long-term `work in → result out` story belongs below current transaction proof or in a clearly future-oriented beat.

---

## Landing narrative

1. task-entry hero
2. task-first open-work proof
3. price × completion time
4. recommendation + client confirmation
5. completed-work case
6. urgent work
7. result / accept-revise
8. worker trust/history
9. future progression: transactions → trust → routing → execution layer

---

## Visual authority

- light-first public UX
- dark as contextual operational punctuation
- premium typography and spacing
- real operational metadata only
- no fantasy/game vocabulary or visuals
- no levels/experience points
- no generic SaaS dashboard wall
- real product states drive motion

---

## Technical posture

Continue Next.js App Router + TypeScript unless a real blocker requires change.

Prefer typed deterministic fixtures, stable replayable demo states, accessible forms/navigation, responsive desktop/mobile behavior, reduced-motion path and real QA against deployed preview when available.

Do not build production database/payment/auth complexity merely to simulate the 1R transaction.

---

## Definition of done

The prototype is ready for review when:

- task-first identity is unmistakable
- ordinary online-work examples appear, not just CAD
- `작업 찾기` visibly supports worker discovery
- price + completion-time proposals are clear
- KAPAPI recommendation is visible and evidence-backed
- client confirmation exists
- no page claims universal automatic routing is solved
- result/revision loop is visible
- future routing/execution layer is clearly framed as earned evolution
- no special/game terminology appears in user-facing copy
- no decorative level/experience system remains
- architecture/CAD is example only
- current visual polish is preserved
- desktop/mobile/reduced-motion remain credible
- build/lint/typecheck/tests available to the repository pass

Desired reaction:

> **“카파피는 일이 먼저 올라오는 시장에서 시작해서, 거래 데이터를 쌓아 결국 일을 넣으면 결과가 나오는 시스템으로 가는구나.”**

---

## Working protocol

1. Fetch latest target branch before changes.
2. Do not implement against stale assumptions.
3. Follow current canon above older screenshots/copy.
4. Keep code and docs aligned.
5. Run available build/typecheck/lint/tests.
6. Verify actual UI visually when preview is available.
7. Do not merge to `main` automatically unless explicitly instructed.
8. Do not make the user act as a technical courier when connected tools can perform the work.
