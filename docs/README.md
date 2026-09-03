# KAPAPI Documentation

This directory is the product/business/design canon for KAPAPI.

## Current product thesis

> **해야 할 일을 올리면, 결과로 돌아온다.**

KAPAPI starts as a **task-first online work market**: work exists first, workers choose work they can finish, and every proposal commits both **price + completion time**.

The marketplace is the bootstrap, not the final destination. Real transactions create the price, completion-time, task-fit, trust, failure and recovery data needed for KAPAPI to evolve toward recommendation, routing, repeat external capacity and eventually a **work-to-result execution layer**.

Canonical growth path:

```text
Task Marketplace
→ Trusted Work Market
→ Intelligent Recommendation / Routing
→ Repeat Business Capacity
→ Outcome / Execution Layer
```

KAPAPI is category-independent in vision and category-specific in execution. Architecture/CAD is a founder-domain testbed, not the product identity. Early work may range from ordinary office/support tasks to skilled professional support work when it is bounded, digitally transferable and inspectable.

At maturity, execution may be performed by human workers, AI, deterministic automation, specialist partners or hybrid workflows. The user-facing unit is the **result**.

---

## Canonical reading order

1. `docs/ORIGIN_AND_GROWTH_THESIS.md`
2. `docs/DECISIONS.md` — D-032 through D-035 are current authority for market, routing, terminology and what the client surface shows
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
4. **Do not pretend routing intelligence exists before the data exists.** Behind the scenes, early selection can be KAPAPI recommendation with human review, lightweight client choice or concierge routing. D-035 governs what the prototype *shows* — 발주자 → 카파피 → 결과 — not a claim that the routing is already automated at scale.
5. **Routing responsibility grows with evidence.** Verified completion, on-time, revision, failure, availability and category-liquidity data enable stronger recommendations and later default routing.
6. **The client remains the final result judge** through accept/revise until category-specific evidence justifies stronger guarantees.
7. **Architecture/CAD is a testbed, not the market identity.**
8. **KAPAPI is broader than professional work.** Ordinary office/support work and skilled professional support work can share the same bounded-work engine.
9. **Use standard work terminology only.**
10. **One universal identity.** A user may issue one task and perform another.
11. **AI is initially an aid, not a magical judge.**
12. **Long-term execution is resource-agnostic.** Human workers, AI, automation, partners or hybrid execution are all possible.
13. **Strong outcome/SLA guarantees are earned category by category.**
14. **The strongest proof is real paid work completed and accepted**, not signup count.

---

## Current prototype selection posture (D-035)

What the 발주자 sees is three nodes:

```text
발주자  →  실행 계약 승인  →  카파피  →  결과  →  수락 / 수정 요청
```

The 발주자 acts once: they describe the work and approve the **실행 계약** —
결과물 + 가격 + 완료시간 + 수정 경계 + 복구 경계 (D-033.1). Approving a price and a
completion time is not choosing a worker, so the model stays three nodes.

What happens inside the middle node, visible on the 작업자 surface and `이용 방법`:

```text
업무 등록
→ 작업자들이 가격 + 완료시간 제안
→ KAPAPI 필수요건 확인 / 정렬 / 선정
→ 작업자 배정
→ 수행
→ 결과
```

Future direction:

```text
transactions → trust data → better recommendations → default routing → recovery → execution layer
```
