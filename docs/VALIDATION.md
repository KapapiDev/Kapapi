# KAPAPI Validation

Updated: 2026-09-03

KAPAPI is **not market-validated yet**.

This document separates observed evidence, working hypotheses and experiments. Do not convert founder intuition, interviews, prototype behavior or subsidized usage into market proof.

---

## 1. Primary validation question

The early problem is two-sided:

### Supply

> **Will people with spare time + useful skills actually choose bounded online QUESTs, commit PRICE + DELIVERY TIME, complete them and return for more work?**

### Demand

> **Will GMs actually externalize bounded work, pay for accepted results and return with more QUESTs?**

### Market

> **Can those two behaviors meet with enough category-specific liquidity, trust and economics to create repeat transactions?**

The strongest proof is not signup count.

> **real GM + real QUEST + real PLAYER + real completion + accepted result + real payment**

Stronger still:

> **both sides return without subsidy.**

---

## 2. Founder-origin supply hypothesis

KAPAPI began from this unmet behavior:

> “퇴근 후 남는 시간에 내가 할 수 있는 작은 온라인 업무를 골라 끝내고 돈 벌고 싶다. 프리랜서 상점을 만들거나 고정 알바를 잡고 싶은 건 아니다.”

This creates explicit PLAYER hypotheses:

- P-01: people want task-level side income without creating a storefront
- P-02: bounded digital work is easier to evaluate than open-ended freelance projects
- P-03: PRICE + DELIVERY lets people monetize fragmented availability
- P-04: visible real work is a stronger activation trigger than “create your seller profile”
- P-05: task-specific history can compound into better future opportunities
- P-06: repeat PLAYER participation depends on effective earnings, clear scope and fair GM behavior

These are not proven yet.

---

## 3. GM hypotheses

KAPAPI's mirrored demand problem is:

> “누군가 끝내야 하지만, 채용이나 복잡한 외주 절차를 밟기에는 애매한 일이 있다.”

Working hypotheses:

- GM-01: capacity/deadline/skill/employment gaps create bounded external-work demand
- GM-02: self-completion/overtime is a major competitor
- GM-03: posting/explanation/selection friction suppresses outsourcing
- GM-04: PRICE + DELIVERY creates meaningful trade-offs, especially under urgency
- GM-05: relevant career/task history lowers delegation anxiety
- GM-06: existing vendor relationships do not remove all need for new/backup supply
- GM-07: repeat QUESTs can move KAPAPI from discovery into external capacity
- GM-08: recommendation/routing can eventually reduce decision burden
- GM-09: each work category has separate liquidity
- GM-10: there is a viable band between “do it myself/AI” and “large project procurement”

---

## 4. Observed founder-domain evidence

The initial architecture/CAD interview remains useful as **hypothesis formation**, not market proof.

Observed themes:

- overlapping projects created temporary capacity pressure
- straightforward work was still completed personally because delegation felt bothersome
- under real deadline pressure, willingness to pay rose materially
- relevant career signaled lower explanation burden
- confidentiality/NDA materially affected willingness to send files
- trusted vendors may be reused directly, creating disintermediation risk
- existing vendors are often contacted first, but new supply remains useful when availability/quality/specialty changes
- the strongest desired GM outcome was ultimately “put the work in and inspect the finished result”

Do not generalize one founder-domain interview to all SMEs or all categories.

---

## 5. PRICE × DELIVERY validation

Test whether PRICE + committed DELIVERY TIME changes real choices rather than merely looking differentiated in a prototype.

Measure:

- distribution of PRICE bids
- distribution of DELIVERY commitments
- relationship between urgency and willingness to pay
- whether faster bids win a premium
- whether lowest price actually wins
- whether task-specific trust outweighs small price differences
- whether players make different bids depending on their available time

Kill/rethink this mechanism if real transactions show DELIVERY adds little information or increases confusion without improving allocation.

---

## 6. Task-first discovery experiment

Compare PLAYER activation between:

### A. Task-first

`open QUESTs → choose suitable work → BID`

### B. Storefront/profile-first control where practical

`create seller/service profile → wait/search for leads`

Measure:

- browse → BID conversion
- time to first BID
- abandonment before earning opportunity
- willingness to return
- effective hourly earnings after clarification/revision time
- PLAYER preference

The product thesis requires task-first behavior to create materially lower activation friction.

---

## 7. GM posting / SOW experiment

Compare:

### A. Conventional manual posting

GM manually writes scope.

### B. KAPAPI-assisted posting

GM uploads files + rough instruction; KAPAPI structures the QUEST and asks only missing questions.

Measure:

- minutes to valid QUEST
- follow-up questions
- corrections before posting
- PLAYER clarification requests
- revisions caused by scope ambiguity
- GM preference

This may be more important early than sophisticated AI price prediction.

---

## 8. Selection experiment: recommendation before auto-routing

D-032 makes universal auto-routing a later earned capability.

Early comparison:

### Mode A — lightweight GM choice

GM sees a compact set of eligible BIDs.

### Mode B — KAPAPI recommendation + GM confirmation

KAPAPI highlights one recommendation with visible rationale; alternatives remain available.

### Mode C — concierge/manual routing

Used only in controlled experiments where helpful.

Measure:

- decision time
- recommendation acceptance rate
- override rate
- GM confidence/regret
- completion/on-time/revision outcomes
- GM management minutes
- whether users ask to see more/less detail

Preferred prototype default is **Mode B** because it reduces burden without pretending routing intelligence is already proven.

---

## 9. Founder-funded supply experiment

Founder-originated real QUESTs may seed early supply and exercise the transaction engine.

Architecture/CAD is useful because the founder can originate realistic tasks and inspect results.

Measure:

- qualified PLAYER acquisition
- valid BID density
- PRICE / DELIVERY distributions
- completion/on-time/revision
- willingness to BID again
- PLAYER effective earnings

Rule:

> **Founder-funded QUESTs validate supply and transaction mechanics, not external GM demand.**

Do not mix them into demand KPIs.

---

## 10. External paid GM experiment

Target real GMs with real bounded tasks.

Strong evidence:

> external GM spends own money on an accepted result.

Stronger:

> same GM returns with another self-funded QUEST.

If first-QUEST subsidies are used, measure the self-funded second transaction rather than celebrating subsidized usage.

---

## 11. Category strategy experiment

KAPAPI is category-independent in vision but category-specific in execution.

For each category track:

- external paid demand
- qualified active supply
- eligible BIDs per QUEST
- time to first valid BID
- PRICE / DELIVERY distributions
- completion and on-time rates
- revision/dispute rates
- backup supply
- repeat GM / repeat PLAYER behavior
- transaction contribution after support/recovery costs

Do not open a category merely because users are registered globally.

---

## 12. Quality / recovery experiment

Initial quality architecture:

1. objective automated preflight where reliable
2. GM acceptance/revision
3. platform dispute/recovery only where needed

Measure:

- percentage of checks objectively automatable
- GM inspection time
- revision rate
- dispute rate
- staff minutes per failure/dispute
- replacement success
- recovery cost

A low-value category may be unattractive if support/recovery costs repeatedly consume the transaction economics.

---

## 13. AI / automation execution experiments

The long-term Outcome Layer is resource-agnostic, but do not force AI into work where it is unreliable.

For suitable categories test:

- human PLAYER only
- AI/automation only
- AI first pass + human verification
- human execution + automated preflight

Measure:

- cost to completion
- turnaround
- revision/error rate
- GM acceptance
- human review minutes
- failure/recovery cost

This determines where KAPAPI can improve margin and speed without weakening trust.

---

## 14. Disintermediation / retention

Matching alone may leak repeat work off-platform.

Test whether users stay for:

- contracts/NDA
- payment/admin evidence
- vendor/task history
- recommendation
- availability
- backup supply
- replacement/recovery
- reusable templates
- organization workflow
- eventual outcome assurance

Do not assume hiding contact details solves retention.

---

## 15. Metrics that matter

### Supply

- qualified active PLAYERs per category
- browse → valid BID conversion
- time to first valid BID
- repeat PLAYER rate
- effective PLAYER earnings

### Demand

- external paid QUEST count
- self-funded repeat GM rate
- GM repeat frequency
- actual transaction value
- GM management time

### Marketplace

- eligible BIDs per QUEST
- assignment/selection rate
- PRICE / DELIVERY distributions
- category liquidity

### Execution

- completion rate
- on-time rate
- acceptance rate
- revision/rework rate
- failure/dispute rate
- replacement/recovery rate and cost

### Friction/trust

- time to valid SOW
- clarification count
- security objection rate
- recommendation acceptance/override

Vanity when isolated:

- total signups
- pageviews
- total PLAYER count across unrelated categories

---

## 16. Go / Pivot / Kill

### GO

Evidence repeatedly shows:

- useful PLAYERs choose and complete bounded work
- GMs externalize and pay for it
- PRICE × DELIVERY creates useful allocation information
- task definitions are manageable
- trust/security are sufficient
- transaction economics survive revisions/recovery
- both sides repeat

### PIVOT

Demand exists but one mechanism fails, for example:

- only certain categories work
- GM wants more/less selection control
- existing-partner management beats open-market discovery
- AI/automation handles some categories better than human-only execution
- only certain price bands support viable economics

### KILL / major rethink

Repeated real tests show:

- useful PLAYER supply does not participate at viable economics
- GMs still prefer self-completion despite reduced friction
- scope/coordination cost erases value
- quality/recovery cost is structurally too high
- PRICE × DELIVERY adds little value
- most target tasks are either trivially automated or too complex for bounded transactions
- repeat value leaks off-platform and platform services do not justify retention

Do not protect the idea from negative evidence.
