# KAPAPI Decisions

Updated: 2026-09-01

This file records durable product/business decisions and the reason behind them. New evidence may reverse a decision; when that happens, add a new decision instead of silently erasing history.

---

## D-001 — KAPAPI is the service name

**Decision:** Use **KAPAPI / 카파피** as the marketplace/service name.

**Reason:** Strong memorability and existing brand familiarity. The product itself should carry the KAPAPI name rather than hiding behind a separate service brand.

---

## D-002 — World terminology

**Decision:** Use:

- GM = client / issuer
- PLAYER = professional worker
- QUEST = task
- BID = proposal
- REWARD = compensation
- TIME ATTACK = urgent task
- LEVEL / EXP = reputation/history

**Reason:** Creates a memorable product world while keeping the underlying transaction serious.

**Constraint:** Do not use “NPC.” Do not use “운영자” as the primary Korean label for GM because it can conflict with platform-admin meaning.

---

## D-003 — Price + delivery time are mandatory in every BID

**Decision:** A PLAYER proposal must include both **price and committed elapsed delivery time**.

**Reason:** GM value is not only low cost. Urgent work creates meaningful willingness to pay for earlier completion.

**Clarification:** Delivery time means elapsed time from acceptance to delivery, not estimated labor hours.

---

## D-004 — Fixed-price/result-based first

**Decision:** Initial KAPAPI should focus on fixed-price, result-based QUESTs rather than hourly work.

**Reason:** Better aligns with independent professional work, easier MVP scope, clearer GM value and lower risk of drifting toward employee-like control.

---

## D-005 — Architecture/CAD is an initial wedge, not the market definition

**Decision:** Use architecture/CAD to test the transaction mechanism first.

**Reason:** Founder domain knowledge allows realistic task creation, credible GM interviews and quality judgment.

**Correction:** Architecture support tasks are not “work too trivial for employees.” They are normal project work that becomes a bottleneck when capacity is temporarily insufficient.

---

## D-006 — GM definition changed

**Old framing:** one-person/small business owner.

**Current framing:**

> A person or small organization that has a professional task exceeding current internal capacity.

**Reason:** Initial GM interview suggests the demand trigger is more accurately explained by capacity/deadline/skill/employment gaps than by company size alone.

---

## D-007 — The main competitor may be “I will just do it myself”

**Decision:** Treat self-completion/overtime as a primary alternative, not only Kmong/Wishket/Soomgo/Upwork.

**Reason:** For easy tasks, search + explanation + management can feel more expensive than simply doing the work personally.

**Product implication:** KAPAPI must reduce delegation overhead, not merely improve expert discovery.

---

## D-008 — Relevant career is a key trust signal

**Decision:** PLAYER profiles should emphasize relevant industry career and task-specific history, not generic ratings alone.

**Reason:** An architecture GM seeing “5 years at an architecture office” infers lower explanation burden and higher contextual understanding.

---

## D-009 — Existing external vendors should be brought into KAPAPI

**Decision:** Future product should allow GMs to save/import existing partners and compare them against open-market PLAYERs.

**Reason:** Real firms often contact trusted vendors first. Fighting this behavior creates unnecessary adoption friction. KAPAPI should become the layer through which both existing and new supply are managed.

---

## D-010 — Disintermediation is real and not solved by hiding contact details

**Decision:** Do not assume repeat transactions will remain on-platform merely because KAPAPI made the first match.

**Reason:** Real professional-vendor relationships can persist for years once trust is built.

**Response:** Earn repeated use through contracts/NDA, tax/admin convenience, vendor history, comparison access, backup supply, availability, dispute support and eventually outcome assurance.

---

## D-011 — Long-term product shifts from “find a PLAYER” to “get a result”

**Decision:** The long-term north star is:

> **GM drops work → KAPAPI orchestrates → GM receives result.**

**Reason:** The strongest GM interview response was that PLAYER identity and price are secondary if the required quality result arrives by the required time, and an automated process would be strongly preferred.

This changes KAPAPI from a simple freelancer marketplace toward a professional-work orchestration platform.

---

## D-012 — Marketplace → Assist → Autopilot

**Decision:** Do not jump directly to full Autopilot.

Product stages:

1. **Marketplace Mode** — QUEST → BID → GM selection
2. **Assist Mode** — files/instruction → AI QUEST → recommendation → GM approval
3. **Autopilot Mode** — work drop → orchestration → result

**Reason:** Marketplace activity creates the supply, trust and transaction data required before KAPAPI can safely automate routing and promise outcomes.

---

## D-013 — AI is initially a scoping/orchestration aid, not the final judge

**Decision:** Early AI should help turn vague GM input/files into a structured work instruction and identify missing information.

**Do not initially position AI as:**

- authoritative final price setter
- subjective final quality judge
- replacement for regulated professional judgment

**Reason:** These claims exceed current evidence and create unnecessary risk.

---

## D-014 — Security/NDA is part of core value for professional work

**Decision:** Treat confidentiality, project-data handling and contractual safeguards as product features rather than legal footer work.

**Reason:** Architecture GM willingness to send files to an unknown PLAYER materially increased when NDA, leakage responsibility and documented safeguards were assumed.

---

## D-015 — 1R prototype should be thin

**Decision:** Before the 모두의 창업 1R application, build only enough product to clearly demonstrate the core mechanism.

Include:

- QUEST creation
- price + delivery BID
- GM comparison/selection
- PLAYER career/history
- TIME ATTACK
- LEVEL / EXP
- NDA/security concept

Defer production payment, tax automation, deep dispute tooling and Autopilot guarantees.

**Reason:** 1R is idea review; 2R is the stage designed to support serious MVP production and market validation.

---

## D-016 — 1R success criterion is not “finished platform”

**Decision:** Optimize the pre-1R product for understanding and credibility, then use 1R to validate external GM demand.

**Reason:** The critical business uncertainty is demand/liquidity, not whether the team can build a large feature set.

---

## D-017 — Current 1R mentor-institution working choice: Mokwon University

**Decision:** Current Daejeon working choice is **Mokwon University Industry-Academic Cooperation Foundation**.

**Reason:** Its published indicators strongly align with founder experience, problem definition, differentiation, target customer/market, BM feasibility and MVP/market-validation plan.

**Status:** Re-evaluate if application-volume/T/O information becomes available before submission.

---

## D-018 — main is the project canon after review

**Decision:** Design work is prepared on `docs/initial-product-design`, but approved documentation should ultimately be merged into `main` alongside the deployable prototype.

**Reason:** Future developers/AI agents should recover product intent from the repository without searching chat history. Permanent docs-only divergence would create design/code drift.
