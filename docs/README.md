# KAPAPI Documentation

This directory is the product/business/design canon for KAPAPI.

## Current product thesis

> **해야 할 일을 올리면, 결과로 돌아온다.**

KAPAPI starts as a **task-first online work market**: work exists first, PLAYERs choose QUESTs they can finish, and every BID commits both **PRICE + DELIVERY TIME**.

The marketplace is the bootstrap, not the final destination. Real transactions create the price, delivery, task-fit, trust, failure and recovery data needed for KAPAPI to evolve toward recommendation, routing, repeat external capacity and eventually a **work-to-result Outcome Layer**.

Canonical growth path:

```text
Task Marketplace
→ Trusted Work Market
→ Intelligent Recommendation / Routing
→ Repeat Business Capacity
→ Outcome Layer
```

KAPAPI is category-independent in vision and category-specific in execution. Architecture/CAD is a founder-domain testbed, not the product identity. Early QUESTs may range from ordinary office/support work to skilled professional support work when they are bounded, digitally transferable and inspectable.

At maturity, execution may be performed by human PLAYERs, AI, deterministic automation, specialist partners or hybrid workflows. The user-facing unit is the **result**.

---

## Canonical reading order

For product/business understanding and all new implementation work, read in this order:

1. `docs/ORIGIN_AND_GROWTH_THESIS.md` — why KAPAPI exists, task-first origin, supply/demand bridge and growth logic
2. `docs/DECISIONS.md` — durable decisions; **D-032 is the current selection/routing authority**
3. `docs/PRODUCT.md` — current product mechanics and stage model
4. `docs/ROADMAP.md` — stage-by-stage validation and expansion
5. `docs/VALIDATION.md` — evidence, hypotheses, metrics and kill signals
6. `docs/PROTOTYPE_SPEC.md` — current buildable prototype story
7. `docs/PROGRAM_2026_MODU.md` — 모두의 창업 application strategy
8. `docs/LEGAL.md` — legal/product/payment/security boundaries
9. `docs/IDENTITY_ROLE_MODEL.md` if present — one account, contextual GM/PLAYER roles
10. visual/interaction documents (`KAPAPI_ART_DIRECTION.md`, `KAPAPI_DESIGN.md`, `KAPAPI_MOTION.md`, `HERO_MEDIA.md`, v2 override docs)
11. `TASK_QUEUE.md` — implementation queue
12. `CLAUDE_HANDOFF.md` — operational handoff

If an older visual, copy or behavior example conflicts with D-032, `ORIGIN_AND_GROWTH_THESIS.md`, `PRODUCT.md` or `ROADMAP.md`, the newer task-first canon wins.

---

## Core documents

- [ORIGIN_AND_GROWTH_THESIS.md](./ORIGIN_AND_GROWTH_THESIS.md) — founder-origin problem, task-first market thesis and growth ladder
- [DECISIONS.md](./DECISIONS.md) — durable decisions and supersession history
- [PRODUCT.md](./PRODUCT.md) — current KAPAPI product definition and transaction architecture
- [ROADMAP.md](./ROADMAP.md) — Task Market → Outcome Layer roadmap
- [VALIDATION.md](./VALIDATION.md) — PLAYER + GM + marketplace validation framework
- [PROTOTYPE_SPEC.md](./PROTOTYPE_SPEC.md) — prototype screens, states and demo loop
- [PROGRAM_2026_MODU.md](./PROGRAM_2026_MODU.md) — 2026 모두의 창업 strategy
- [LEGAL.md](./LEGAL.md) — legal/product/security/payment boundaries

## Visual / interaction documents

Prototype v2 visual override documents remain the primary implementation interpretation layer for the current v2 branch. Product behavior always follows the current product canon above.

- `PROTOTYPE_V2_CONTENT_GOVERNANCE.md`
- `PROTOTYPE_V2_VISUAL_RESEARCH_PROTOCOL.md`
- `PROTOTYPE_V2_REFERENCE_ADDENDUM.md`
- `PROTOTYPE_V2_VISUAL_COMMUNICATION_RULES.md`
- `PROTOTYPE_V2_KOREAN_UX_WRITING.md`
- `PROTOTYPE_V2_HERO_COMPOSITING.md`
- `KAPAPI_ART_DIRECTION.md`
- `KAPAPI_DESIGN.md`
- `KAPAPI_MOTION.md`
- `HERO_MEDIA.md`
- `QA_CHECKLIST.md`

---

## Current non-negotiable product rules

1. **Task first, not profile first.** The core public object is the QUEST, not a PLAYER storefront.
2. **PRICE + DELIVERY TIME are mandatory** in every BID.
3. **Result-based/fixed-price first.** Do not drift into controlled hourly staffing as the core model.
4. **Do not pretend routing intelligence exists before the data exists.** Early selection can be KAPAPI recommendation + GM confirmation, lightweight GM choice or concierge routing.
5. **Routing responsibility grows with evidence.** Verified completion, on-time, revision, failure, availability and category liquidity data enable stronger recommendations and later default routing.
6. **The GM remains the final result judge** through accept/revise until category-specific evidence justifies stronger guarantees.
7. **Architecture/CAD is a testbed, not the market identity.**
8. **KAPAPI is broader than “professional work.”** Small office/support work and skilled professional support work can share the same bounded-task engine.
9. **World terms are secondary.** Explain the real action in ordinary Korean before GM / PLAYER / QUEST / BID / LEVEL / EXP.
10. **One universal identity.** A user may issue one QUEST and perform another.
11. **AI is initially an aid, not a magical judge.** Use it for scoping, missing information, fit assistance and objective checks where reliable.
12. **Long-term execution is resource-agnostic.** Human PLAYER, AI, automation, partner or hybrid execution are all possible; the product sells completion.
13. **Strong outcome/SLA guarantees are earned category by category.**
14. **The strongest proof is QUEST COMPLETE with real economics**, not signup count.
15. Approved canon and implementation should ultimately live together on `main`; until then, do not confuse branch separation with product disagreement.

---

## Prototype v2 interpretation

The existing `feat/prototype-v2` visual work remains valuable, but any copy/state that presents universal automatic assignment as already solved must be reframed.

Preferred current prototype selection posture:

```text
QUEST posted
→ PLAYERs BID PRICE + DELIVERY
→ KAPAPI filters/ranks and recommends
→ GM confirms recommended PLAYER (with alternatives available)
→ execution
→ result
→ accept / revise
```

The prototype should also show the future direction without claiming it is already universally available:

```text
transactions → trust data → better recommendations → default routing → recovery → Outcome Layer
```
