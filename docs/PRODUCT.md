# KAPAPI Product Design

Status: **canonical product direction on `개선안`**  
Updated: 2026-09-03

## 1. Product definition

KAPAPI is a **work execution market** for bounded digital work.

GM-side North Star:

> **해야 할 일을 넣으면, 결과가 나온다.**

A GM should not need to shop for a freelancer, compare profiles, negotiate with several people, or repeat the search when execution fails.

The GM buys an **Execution Contract**:

`defined result + price + completion time + acceptance/revision boundary + recovery terms`

The PLAYER side remains task-first:

> **할 수 있는 일을 골라서, 끝내고, 돈 번다.**

PLAYERs do not need to build storefronts and wait to be discovered. Work exists first as a `QUEST`; qualified PLAYERs can discover or receive it and commit **PRICE + DELIVERY TIME**.

The two views are intentionally asymmetric:

```text
GM VIEW
work request
→ KAPAPI structures scope
→ one execution offer: RESULT + PRICE + COMPLETION TIME
→ approve/pay
→ KAPAPI orchestrates
→ result
→ accept / revise

KAPAPI INTERNAL MARKET
structured QUEST
→ human / AI / automation options
→ PRICE × DELIVERY / cost / trust / availability / risk
→ route / monitor / recover / QA

PLAYER VIEW
find or receive suitable QUEST
→ BID / accept offer with PRICE + DELIVERY
→ execute
→ submit
→ earn + build verified history
```

KAPAPI is therefore not primarily a freelancer directory. It is a market-backed **work-to-result layer**.

---

## 2. Founder-origin problem remains canonical

KAPAPI began from a concrete PLAYER-side problem:

> “퇴근 후 남는 시간에 내가 할 수 있는 작은 온라인 업무를 골라 끝내고 돈 벌고 싶다. 프리랜서 상점을 만들거나 고정 알바를 잡고 싶은 건 아니다.”

The mirrored GM problem is:

> “끝내야 하는 일이 있지만, 직접 사람을 찾고 비교하고 설명하고 관리하기에는 일이 너무 작거나 불규칙하다.”

KAPAPI connects:

- unused time + usable skill
- unresolved work + insufficient current capacity

The founder-origin explains **how supply is bootstrapped**. It does not require the GM to experience a conventional marketplace.

---

## 3. What KAPAPI sells

The user-facing product is not:

- a PLAYER profile;
- a service storefront;
- a list of bids;
- a promise to introduce a professional.

The user-facing product is:

> **a completed-work commitment.**

Minimum Execution Contract fields:

- source/input material;
- exact scope;
- expected deliverable;
- output format;
- price;
- completion time or deadline;
- objective acceptance checks where possible;
- revision boundary;
- confidentiality/security conditions;
- cancellation/failure/refund/recovery rule.

A `QUEST` remains the internal and PLAYER-facing bounded work unit. An **Execution Contract** is the GM-facing commercial representation of that work.

---

## 4. Early market wedge

KAPAPI is category-independent in vision but category-specific in execution.

Do **not** define the first market as merely “simple work.” Very low-value mechanical work can be absorbed by AI or leave too little margin for QA, recovery and support.

Preferred early wedge:

> **AI에게 그대로 맡기기엔 불안하고, 사람을 직접 찾아 계약하기엔 작은, 범위와 결과 검수가 가능한 디지털 업무.**

Strong early task properties:

- digitally transferable input/output;
- bounded and specifiable scope;
- visible deliverable;
- minutes to roughly one day of execution initially;
- mistakes are revisable;
- objective or semi-objective checks can be defined;
- low irreversible liability;
- multiple credible execution resources can exist;
- AI/automation can sometimes reduce cost or time, but human accountability still has value;
- enough value remains to support execution, QA/recovery and KAPAPI margin.

Examples of good shapes:

- many documents → specified fields → checked XLSX;
- messy spreadsheet → defined cleanup/merge rules → verified output;
- PPT/document → specified formatting standard → checked deliverable;
- e-commerce assets/data → defined normalization/listing rules → completed batch;
- research inputs → predefined evidence table/summary format → source-linked result;
- subtitle/content cleanup with explicit style rules;
- defined CAD/drawing production support under appropriate responsibility;
- small code/web fixes with clear reproduction and acceptance criteria.

Weak early shapes:

- trivial work fully commoditized by deterministic tools with near-zero WTP;
- broad strategy consulting;
- subjective full-brand creative work;
- long open-ended software projects;
- regulated professional judgment without the required qualified structure;
- work where one failure can create large irreversible harm;
- bespoke work whose value is mainly relationship-specific judgment.

Architecture/CAD remains a founder-domain testbed, not the brand boundary.

---

## 5. Core market mechanism: PRICE × DELIVERY TIME

PRICE × DELIVERY remains canonical, but its primary role changes.

It is no longer mainly a GM comparison UI. It is the **internal supply and price-discovery signal** KAPAPI uses to procure execution.

PLAYER commitments:

1. **PRICE** — compensation required;
2. **DELIVERY TIME** — committed elapsed time after assignment/acceptance.

KAPAPI may combine this with:

- hard eligibility / credentials / security;
- relevant task history;
- on-time rate;
- revision/rework rate;
- failure history;
- current availability;
- backup capacity;
- expected QA/recovery burden;
- automation or AI execution cost;
- GM-authorized commercial/deadline boundary.

KAPAPI is not a lowest-price auction. The goal is reliable completed outcome economics.

---

## 6. GM experience: Outcome UX from day one

Preferred GM flow:

```text
rough request + files
→ KAPAPI creates structured SOW
→ missing questions only
→ execution offer appears
   - expected result
   - price
   - completion time
   - revision/recovery terms
→ GM approves
→ KAPAPI handles executor selection
→ progress / exception handling
→ result
→ accept / revise
```

GM should not normally see:

- a giant PLAYER catalog;
- several profile cards to compare;
- public BID competition;
- proposal theatre;
- executor re-search after a failure.

When law, security, credentials, customer preference or contract structure requires disclosure/control, KAPAPI must expose the necessary information without turning the default experience back into freelancer shopping.

---

## 7. PLAYER experience: task-first market remains

PLAYER supply can use three mechanisms.

### A. Open QUEST market

`PLAYER browses eligible work → submits PRICE + DELIVERY BID`

Best for:

- supply activation;
- founder-origin side-job experience;
- price discovery;
- uncertain/heterogeneous work.

### B. Targeted Offer

PLAYER pre-registers:

- eligible task types;
- verified skills/career;
- minimum compensation;
- availability;
- capacity;
- urgent-work preference.

KAPAPI sends a defined offer and the PLAYER accepts or rejects it.

### C. Hybrid

Use targeted offers for standardized/liquid work and internal BIDs when market price, availability or task complexity is uncertain.

KAPAPI should preserve PLAYER independence: a PLAYER chooses whether to bid/accept and normally controls how/when the result is produced subject to the Execution Contract.

---

## 8. Execution resources are resource-agnostic

KAPAPI may fulfill a task using:

- human PLAYER;
- AI model/agent;
- deterministic automation;
- specialist partner organization;
- AI + human hybrid;
- multiple PLAYERs / decomposed sub-QUESTs.

Example:

```text
100 source documents
→ deterministic extraction where safe
→ AI structure/first pass
→ PLAYER verification of ambiguous rows
→ automated merge/preflight
→ delivered result
```

The GM does not need to design this pipeline. KAPAPI chooses the credible execution path within security, legal, quality, price and completion constraints.

---

## 9. Quote architecture: do not fake instant pricing

The hardest early product problem is committing price and completion time before KAPAPI has enough historical data.

### Phase A — Assisted Quote

```text
GM request
→ SOW structure
→ KAPAPI/operator checks execution feasibility and live supply
→ price + completion time offered
```

The UX can feel simple while the back office is concierge/manual.

### Phase B — Market-informed Quote

Use:

- historical accepted PRICE × DELIVERY;
- live supply/availability;
- expected execution cost;
- QA/revision distribution;
- recovery reserve;
- payment/support variable cost;
- KAPAPI margin.

### Phase C — Near-instant Quote

Only standardized categories with sufficient transaction and failure data earn near-instant quoting.

Instant quote is an **earned automation level**, not a day-one claim.

---

## 10. Quality and recovery are core product responsibilities

The strongest differentiation is not “we recommend the right person.”

It is:

> **execution failure should not throw the supplier-search problem back to the GM.**

Recovery loop:

```text
assigned
→ monitor deadline/risk
→ detect blocked/late/failure
→ backup or alternative execution path
→ reassign / parallel recover when justified
→ complete
→ deliver
```

Quality architecture:

1. objective automated preflight where reliable;
2. task-specific QA when unit economics support it;
3. GM acceptance / in-scope revision;
4. recovery/dispute process for failure.

Do not claim that AI can conclusively judge subjective professional quality.

---

## 11. The core data flywheel

KAPAPI should learn **how work gets completed**, not merely who has good stars.

Important data:

- task/category;
- scope shape;
- inputs and acceptance conditions;
- offered GM price/completion time;
- internal accepted PRICE × DELIVERY;
- executor/resource type;
- actual completion time;
- revision count;
- failure cause;
- replacement/recovery action;
- QA/support minutes;
- recovery cost;
- GM acceptance;
- repeat GM behavior.

Flywheel:

```text
request
→ structured SOW
→ quote
→ procurement
→ execution
→ QA/recovery
→ acceptance
→ better scope / quote / routing / recovery
```

The durable asset is increasingly:

> **which execution configuration reliably completes which work under which price/time/risk conditions.**

---

## 12. Business model

The primary long-term economic model should be evaluated as **completed-outcome economics**, not only marketplace take rate.

Possible GM economics:

```text
GM price
- executor/AI/automation cost
- payment cost
- QA/support variable cost
- expected revision/recovery cost
= completed-outcome contribution margin
```

KAPAPI may use:

- all-in execution price with embedded margin;
- transaction/service fee where legally/commercially appropriate;
- repeat-business/admin subscription;
- category-specific hybrid pricing.

Do not lock a universal percentage fee before real transaction economics are observed.

North-star unit metric for an early category:

> **contribution margin per accepted completed outcome.**

---

## 13. Category liquidity and expansion

A broad member count is not liquidity.

Each category is a micro-market and should be evaluated for:

- external paid demand;
- qualified active supply;
- response/acceptance speed;
- PRICE × DELIVERY distribution;
- predictable task specification;
- completion/on-time/revision distribution;
- backup/recovery capacity;
- AI/automation leverage;
- completed-outcome margin;
- repeat GM and PLAYER behavior.

Open a new category only when KAPAPI can protect the user promise and economics in that category.

Expansion path:

```text
narrow repeatable execution categories
→ higher-value skilled support
→ recurring organizational workflows
→ multi-step/decomposable work
→ work execution infrastructure
```

---

## 14. Product guardrails

KAPAPI should not drift into:

- generic expert directory;
- storefront clone;
- profile/portfolio social network;
- long-project IT outsourcing board;
- employee-like hourly dispatch/staffing;
- manual low-margin outsourcing agency with no path to automation;
- universal regulated-professional marketplace;
- fake AI/autopilot claims;
- universal SLA promises before category economics and recovery are proven.

Every major feature should answer at least one:

1. Does it make it easier for a GM to turn unresolved work into an accepted result?
2. Does it make it easier for a PLAYER to convert spare capacity + skill into completed paid work?
3. Does it improve scope, quote, procurement, execution, QA or recovery economics?
4. Does it create data that makes future execution more reliable or cheaper?

If not, it is probably not core KAPAPI.

---

## 15. Strategic summary

```text
FOUNDER WANTS REAL SMALL WORK TO PICK UP
↓
TASK-FIRST PLAYER MARKET
↓
GM DOES NOT SHOP FOR PEOPLE
↓
KAPAPI SELLS RESULT + PRICE + COMPLETION TIME
↓
INTERNAL PRICE × DELIVERY / AI / AUTOMATION PROCUREMENT
↓
EXECUTION + QA + RECOVERY
↓
COMPLETED OUTCOMES CREATE DATA
↓
BETTER QUOTE / ROUTING / RECOVERY / MARGIN
↓
MORE CATEGORIES
↓
WORK IN → RESULT OUT
```

Short form:

> **PLAYER에게는 일이 먼저 보이는 시장, GM에게는 사람을 고르지 않아도 되는 실행 서비스.**

North Star:

> **해야 할 일을 넣으면, 결과가 나온다.**
