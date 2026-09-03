# KAPAPI Documentation

This directory is the product/business/design canon for KAPAPI.

## Current product thesis

> **해야 할 일을 올리면, 결과로 돌아온다.**

KAPAPI gives clients **업무 입력 → KAPAPI → 결과** from the first prototype. Before execution, the client approves one **실행 계약**: deliverable + price + completion time + revision boundary + recovery boundary. KAPAPI then procures, assigns, checks and recovers execution internally; the client accepts the result or requests a revision.

The **task-first worker market** supplies that execution: work exists first, workers choose work they can finish, and every proposal commits **price + completion time**. This competition runs inside KAPAPI. Early operations may be concierge-assisted; real transactions improve scoping, quotes, internal routing, QA and recovery.

Canonical capability growth path, behind the same result-oriented client surface:

```text
Task Marketplace
→ Trusted Work Market
→ Intelligent Routing
→ Repeat Business Capacity
→ Outcome / Execution Layer
```

KAPAPI is category-independent in vision and category-specific in execution. Architecture/CAD is a founder-domain testbed, not the product identity. Early work may range from ordinary office/support tasks to skilled professional support work when it is bounded, digitally transferable and inspectable.

Execution may use human workers, AI, deterministic automation, specialist partners or hybrid workflows where category evidence supports them. Resource choice is internal; the user-facing unit is the **result**. Near-instant quotes and stronger guarantees are earned category by category.

---

## Canonical reading order

1. `docs/DECISIONS.md` — D-033.1–.12, D-034 and D-035 govern the current execution contract, internal market, terminology and client surface
2. `docs/ORIGIN_AND_GROWTH_THESIS.md`
3. `docs/PRODUCT.md`
4. `docs/ROADMAP.md`
5. `docs/VALIDATION.md`
6. `docs/PROTOTYPE_SPEC.md`
7. `docs/PROGRAM_2026_MODU.md`
8. `docs/LEGAL.md`
9. visual/interaction documents
10. `TASK_QUEUE.md`
11. `CLAUDE_HANDOFF.md`

If an older visual, copy or behavior example conflicts with these files, the newer canon wins.

---

## Terminology policy

Current public/canonical language is deliberately ordinary:

- **발주자**
- **작업자**
- **업무**
- **제안**
- **가격**
- **완료시간**
- **작업대금**
- **긴급 업무**
- **작업이력 / 정시완료율 / 수정률**
- **업무 완료**

There is no separate fictional/game vocabulary layer. Do not reintroduce special role names, progression levels, experience points or branded completion labels.

---

## Current non-negotiable product rules

1. **Task first, not profile first.** Work is the core public object, not a worker storefront.
2. **Price + completion time are mandatory** in every proposal.
3. **Result-based/fixed-price first.** Do not drift into controlled hourly staffing as the core model.
4. **Do not pretend routing intelligence exists before the data exists.** Behind the contract, early procurement can be concierge/manual with human review (D-033.5). What the prototype shows is fixed — 발주자 → 실행 계약 승인 → 카파피 → 결과 — and it is not a claim that the selection is already automated at scale, or that a quote is instant in every category (D-033.6).
5. **Routing capability and responsibility grow with evidence.** KAPAPI handles routing internally from the start; completion, on-time, revision, failure, availability and category-liquidity evidence support greater automation and stronger commitments.
6. **The client remains the final result judge** through accept/revise. Stronger recovery commitments do not remove that decision.
7. **Architecture/CAD is a testbed, not the market identity.**
8. **KAPAPI is broader than professional work.** Ordinary office/support work and skilled professional support work can share the same bounded-work engine.
9. **Use standard work terminology only.**
10. **One universal identity.** A user may issue one task and perform another.
11. **AI is initially an aid, not a magical judge.**
12. **Execution is resource-agnostic.** Human workers, AI, automation, partners or hybrid execution are possible when qualified for the work.
13. **Strong outcome/SLA guarantees are earned category by category.**
14. **The strongest proof is real paid work completed and accepted**, not signup count.

---

## Current prototype execution contract (D-033.1, D-035)

The client journey is:

```text
업무 입력 → SOW 정리 → 실행 계약 승인 → 카파피 수행·검수·복구 → 결과 → 수락 / 수정 요청
```

The 발주자 describes the work, approves the **실행 계약** and later accepts the result or requests a revision. The contract contains 결과물 + 가격 + 완료시간 + 수정 경계 + 복구 경계 (D-033.1). It requires no worker selection or proposal comparison.

The 작업자 surface supports proposals and assigned work. `이용 방법` may explain the internal mechanism:

```text
업무 등록
→ 작업자들이 가격 + 완료시간 제안
→ KAPAPI 필수요건 확인 / 정렬 / 선정
→ 작업자 배정
→ 수행
→ QA / 필요 시 복구
→ 결과
```

Future direction:

```text
transactions → trust data → more accurate selection → instant quoting in proven categories → recovery → execution layer
```
