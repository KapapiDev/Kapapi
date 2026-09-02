# KAPAPI Decisions

Updated: 2026-09-02

This file records durable product/business decisions and the reason behind them. New evidence may reverse a decision; when that happens, add a new decision instead of silently erasing history.

---

## D-001 — KAPAPI is the service name

**Decision:** Use **KAPAPI / 카파피** as the marketplace/service name.

**Reason:** Strong memorability and category independence. The product itself should carry the KAPAPI name rather than hiding behind a separate service brand.

**Open item:** commercial trademark / same-name conflict clearance remains required.

---

## D-002 — World terminology

**Decision:** Use:

- GM = client / issuer
- PLAYER = independent professional
- QUEST = task
- BID = price + delivery proposal
- REWARD = compensation
- TIME ATTACK = urgent task
- LEVEL / EXP = reputation/history
- QUEST COMPLETE = completion

**Constraint:** Do not use “NPC.” Do not use “운영자” as the primary Korean label for GM because it can conflict with platform-admin meaning.

**Communication rule:** explain the platform in plain language first, then introduce KAPAPI world terms. World-building must not become an onboarding barrier.

---

## D-003 — Price + delivery time are mandatory in every BID

**Decision:** A PLAYER proposal must include both **price and committed elapsed delivery time**.

**Reason:** GM value is not only low cost. Urgent work creates meaningful willingness to pay for earlier completion.

**Clarification:** Delivery time means elapsed time from acceptance/contract to delivery, not estimated labor hours.

---

## D-004 — Fixed-price/result-based first

**Decision:** Initial KAPAPI should focus on fixed-price, result-based QUESTs rather than hourly work.

**Reason:** Clearer GM value, simpler MVP scope, stronger fit with independent professional work and lower risk of drifting toward employee-like control.

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

**Reason:** Capacity/deadline/skill/employment gaps explain outsourcing demand better than company size alone.

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

**Response:** Earn repeated use through contracts/NDA, safe payment, tax/admin convenience, vendor history, comparison access, backup supply, availability, dispute support and eventually outcome assurance.

---

## D-011 — Long-term product shifts from “find a PLAYER” to “get a result”

**Decision:** The long-term north star is:

> **GM drops work → KAPAPI orchestrates → GM receives result.**

**Reason:** The strongest GM interview response was that PLAYER identity and price become secondary when the required-quality result reliably arrives by the required time.

This changes KAPAPI from a simple freelancer marketplace toward a professional-work orchestration platform.

---

## D-012 — Marketplace → Assist → Autopilot

**Decision:** Do not jump directly to full Autopilot.

Product stages:

1. **Marketplace Mode** — QUEST → BID → GM selection
2. **Assist Mode** — files/instruction → AI QUEST/SOW → recommendation → GM approval
3. **Autopilot Mode** — work drop → orchestration → result

**Reason:** Marketplace activity creates the supply, trust and transaction data required before KAPAPI can safely automate routing and promise outcomes.

**Superseded for GM selection by D-031.** The data-building logic remains valid, but default GM proposal comparison/selection is no longer the intended primary flow.

---

## D-013 — AI is initially a scoping/orchestration aid, not the final judge

**Decision:** Early AI should turn vague GM input/files into a structured work instruction and identify missing information.

**Do not initially position AI as:**

- authoritative final price setter
- subjective final quality judge
- replacement for regulated professional judgment

**Reason:** These claims exceed current evidence and fail on real-world context/edge cases.

---

## D-014 — Security/NDA is part of core value for professional work

**Decision:** Treat confidentiality, project-data handling and contractual safeguards as product features rather than legal footer work.

**Reason:** Architecture GM willingness to send files to an unknown PLAYER materially increased when NDA, leakage responsibility and documented safeguards were assumed.

---

## D-015 — 1R prototype should be thin

**Decision:** Before the 모두의 창업 1R application, build only enough product to clearly demonstrate the core mechanism.

Original include list:

- QUEST creation
- price + delivery BID
- GM comparison/selection
- PLAYER career/history
- TIME ATTACK
- LEVEL / EXP
- NDA/security concept
- simple delivery/completion flow

Defer production payment, tax automation, deep dispute tooling and Autopilot guarantees.

**Superseded for prototype GM selection by D-031.** The prototype should still expose price + delivery competition, but routine GM comparison/selection should be hidden behind KAPAPI routing in the default demo.

---

## D-016 — 1R success criterion is not “finished platform”

**Decision:** Optimize the pre-1R product for understanding and credibility, then use 1R to validate external GM demand.

**Reason:** The critical uncertainty is demand/liquidity, not whether a large feature set can be built.

---

## D-017 — Current 1R mentor-institution working choice: Mokwon University

**Decision:** Current Daejeon working choice is **Mokwon University Industry-Academic Cooperation Foundation**.

**Reason:** Its published indicators strongly align with founder experience, problem definition, differentiation, target customer/market, BM feasibility and MVP/market-validation plan.

**Status:** Re-evaluate if application-volume/T/O information becomes available before submission.

---

## D-018 — main is the project canon after review

**Decision:** Design work is prepared on `docs/initial-product-design`, but approved documentation should ultimately be merged into `main` alongside the deployable prototype.

**Reason:** Future developers/AI agents should recover product intent from the repository without searching chat history. Permanent docs-only divergence would create design/code drift.

---

## D-019 — Preserve proven Upwork transaction mechanics

**Decision:** Adopt the principle:

> **Upwork에서 검증된 것은 함부로 바꾸지 않는다.**

Commercial transaction design should strongly benchmark:

- post → proposal → client selection
- contract
- pre-funded/safe payment
- milestones when needed
- workroom/messages/files/records
- submit work
- approval/revision
- settlement
- two-sided review
- dispute/payment protection

**Reason:** KAPAPI's differentiation does not require reinventing basic marketplace safety. Innovate in speed, localization, lightweight bidding, AI scoping, gamified UX and outcome orchestration.

**Explicit exception added by D-031:** mandatory client comparison/selection is one proven Upwork mechanic KAPAPI now intentionally removes from the default GM path because eliminating that decision is central to the product thesis.

---

## D-020 — SOW clarity comes before sophisticated QA

**Decision:** Prioritize turning vague requests into clear QUEST/SOW specifications before trying to automate professional-quality judgment.

**Reason:** A clear scope reduces explanation, pricing ambiguity, revisions and disputes, and gives later automation objective criteria to work with.

SOW should define inputs, exact scope, outputs, deadline and acceptance/revision boundaries where appropriate.

---

## D-021 — Initial quality architecture has three layers

**Decision:**

1. objective automated preflight where reliable
2. GM final acceptance / revision
3. platform dispute process only when needed

**Reason:** AI should not act as subjective professional judge, and manual platform inspection of every low-value QUEST would damage unit economics.

---

## D-022 — Early market can be Concierge before it is automated

**Decision:** Allow early validation to operate as a **Concierge Marketplace**.

A GM can send a file + rough request, and KAPAPI can manually/AI-assistively convert it into a QUEST/SOW before PLAYER bidding.

**Reason:** This tests the future “drop work, get result” experience now, learns real requirements and avoids building automation before demand is proven.

---

## D-023 — Founder-funded QUESTs validate supply, not GM demand

**Decision:** Founder-originated real CAD work can seed the first PLAYER pool and exercise the transaction engine.

Working test discussed: approximately 10 real QUESTs with roughly KRW 300k–500k total reward budget.

**Rule:** These transactions are excluded from primary external GM-demand metrics.

**Reason:** They prove supply response and execution, but not independent willingness to pay.

---

## D-024 — Self-funded repeat is the strongest early GM signal

**Decision:** If first-QUEST subsidies are used, measure success by **external GMs who return with their own money**, not by free/subsidized first usage.

**Reason:** Subsidies can buy usage but cannot prove repeat economic demand.

Subsidy amount and conversion threshold remain experiment parameters, not product policy.

---

## D-025 — Trust/reputation is two-sided

**Decision:** Commercial transaction design should include two-sided reviews/reputation.

PLAYER trust includes relevant career, task history, on-time and revision signals.

GM trust may include payment/transaction completion, approval speed, cancellations/disputes and PLAYER ratings.

**Reason:** Qualified PLAYERs also need to judge whether a QUEST/GM is worth accepting.

A user may be GM in one QUEST and PLAYER in another; roles are transaction roles, not permanent account classes.

---

## D-026 — Liquidity is category-specific

**Decision:** Do not use total PLAYER count as evidence that TIME ATTACK or rapid bidding works.

Each category is effectively a separate micro-market.

**Expansion requirement:** repeat GM demand + sufficient qualified active supply in that category.

**Reason:** A platform with 1,000 PLAYERs but only 20 CAD-capable PLAYERs still has a 20-person CAD market.

---

## D-027 — Monetization remains open

**Decision:** Do not lock a 10% take rate or fee side yet.

Validate:

- GM fee vs PLAYER fee
- all-in price vs visible fee
- value of safe payment/admin/backup supply
- support/dispute economics
- direct-trade leakage

**Early test posture:** KAPAPI fee 0, no KAPAPI custody of funds, direct GM↔PLAYER payment if required.

**Reason:** The transaction model should be proven before fee design is optimized.

---

## D-028 — Fractional Employee / PLAYER-hours model is removed from current roadmap

**Decision:** Do not currently sell recurring controlled PLAYER hours such as “20 hours/month” as a KAPAPI product.

**Current unit:** completed QUEST/result.

**Reason:** The time-purchase concept weakens the clear result-based model and creates additional worker-status/labor-intermediation questions. Revisit only with separate legal/product review if KAPAPI later becomes large enough to justify it.

---

## D-029 — Visual direction is premium tech + thin HUD

**Decision:** Use a premium black/white tech-product direction influenced by Linear / Vercel / Raycast, with world-building appearing through thin HUD-like metadata.

Examples:

- `LV.12`
- `+240 EXP`
- `QUEST #0182`
- countdowns

Avoid obvious swords/coins/pixel-RPG motifs.

**Reason:** The service must feel lively and memorable to PLAYERs while remaining credible for professional GMs spending meaningful money.

---

## D-030 — Game world is secondary to the business thesis in external explanation

**Decision:** For judges/investors/new users, explain the real transaction/problem first and the game world second.

Do not lead with “GM makes QUESTs and PLAYERs level up.”

Lead with:

- short online professional work
- client-led posting
- price + delivery-time competition
- lower outsourcing friction
- long-term outcome orchestration

**Reason:** Otherwise KAPAPI risks being dismissed as “gamified Kmong” before the actual business mechanism is understood.

---

## D-031 — Default GM flow is hands-off auto-routing

**Decision:** After a GM submits a valid QUEST with the required result, deadline and commercial constraints, routine BID comparison and PLAYER selection become **KAPAPI's job**, not the GM's job.

Default GM flow:

```text
발주 / QUEST 확정
→ GM routine work ends
→ PLAYERs BID with price + delivery
→ KAPAPI ranks/selects/routes
→ PLAYER executes
→ result delivered
→ GM accepts or requests revision
```

Default PLAYER/internal market flow:

```text
QUEST
→ eligible PLAYERs
→ PRICE × DELIVERY BIDs
→ hard-filter + trust/performance + task-fit ranking
→ KAPAPI assignment
→ execution
```

### Routing rule

KAPAPI selection must not be an opaque LLM-only decision.

Use:

1. hard eligibility / credential / security / deadline / budget filters
2. actual BID price and committed delivery
3. relevant verified career and task history
4. on-time / revision / failure / dispute signals
5. availability
6. AI-assisted semantic task-fit where useful
7. an inspectable routing policy

The GM remains the **final result judge** through acceptance/revision.

### Manual selection

Manual GM BID comparison may remain as:

- exceptional fallback
- trust-building/debug mode during validation
- category-specific requirement where auto-routing is not reliable

It is **not** the primary product promise or default prototype story.

### Why

The product's strongest thesis is not “compare freelancers faster.” It is:

> **일 던져놔. 결과만 받아.**

If the GM must wait for BIDs, study profiles and make the final vendor decision every time, KAPAPI remains structurally close to a faster Upwork/Kmong. Removing routine selection creates a materially different product and aligns the initial experience with the long-term orchestration thesis.

### Validation burden

This is a hypothesis that increases platform responsibility and must be tested.

Track:

- routing decision latency
- GM override / “who did you select?” demand
- on-time rate
- revision rate
- replacement/recovery rate
- final acceptance
- GM management minutes
- repeat self-funded usage

If auto-routing materially increases regret/failure or users insist on choosing themselves, the routing policy or category scope must be adjusted rather than protecting the idea.

### Supersedes

This decision supersedes the **default GM selection** portions of D-012, D-015 and D-019. It does **not** remove bidding, contracts, safe payment, workroom records, approval/revision, settlement, reviews or dispute protection.
