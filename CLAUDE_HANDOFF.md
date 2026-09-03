# KAPAPI — Implementation Handoff

Status: **current implementation handoff**  
Authority: `docs/DECISIONS.md` D-033.1–.12 (imported from `개선안`), D-034, D-035  
Current visual implementation branch: `feat/prototype-v2`

## Mission

Build and maintain a high-polish KAPAPI prototype that makes the present transaction understandable in seconds and the long-term execution layer credible without pretending it already exists.

The product is **not** a freelancer directory, a gamified work service, a CAD marketplace or a magical auto-outsourcing demo.

Current product story:

```text
발주자가 파일과 한 줄 설명을 올림
→ 카파피가 작업 조건(SOW) 정리
→ 실행 계약: 결과물 + 가격 + 완료시간 + 수정 경계 + 복구 경계
→ 발주자 승인
→ 카파피가 내부적으로 조달·배정·수행
→ 결과 전달
→ 수락 또는 수정 요청
```

발주자 기준으로는 세 노드입니다 — **발주자 → 카파피 → 결과**. 제안과 선정은 발주자가
지나가는 단계가 아니라 가운데 노드 안에서 일어납니다 (D-033.1, D-035).

작업자 쪽에서 같은 거래는 이렇게 보입니다:

```text
열린 업무 탐색
→ 가격 + 완료시간 제안
→ 배정
→ 수행
→ 결과 제출
→ 작업대금 + 작업이력
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
6. What the client approves is the **실행 계약** — 결과물 + 가격 + 완료시간 + 수정 경계 + 복구 경계 (D-033.1).
7. The client never sees a proposal list, a ranked comparison or a worker-selection control.
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
→ KAPAPI structures work (SOW)
→ 실행 계약: 결과물 + 가격 + 완료시간 + 수정 경계 + 복구 경계
→ client approves the contract
→ (KAPAPI: proposals, eligibility, selection, assignment)
→ execution status
→ delivered result
→ accept / revise
```

The contract surface shows the deliverables, the price, the committed completion
time, the revision boundary, what happens if the work is not completed, and the
basis the price was derived from (D-033.6: a market-informed quote shows its
working). It shows no workers.

Primary action: **이 조건으로 맡기기**

There is no secondary action. Approving a price and a completion time is not
choosing a worker — the 발주자's model stays 발주자 → 카파피 → 결과.

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
[발주자 | 작업자]                        내 업무   이용 방법   회원가입

오늘은 어떤 일을 끝낼까요?               [ the founder's film, whole ]

[ + | 파일을 업로드하고 간단하게 설명해 주세요. ]

[ 맡기기 ]
```

`작업 찾기` is not a CTA here. 작업자 is a route (`/board`) reached by the header
toggle, so this surface carries one action.

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
