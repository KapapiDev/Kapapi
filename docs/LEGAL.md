# KAPAPI Legal / Product Boundaries

Updated: 2026-09-03

> This document is a product-design risk register, **not formal legal advice**. Commercial launch requires Korean legal/accounting review.

## 1. Core legal/product change

The new canonical product direction changes KAPAPI's responsibility profile.

GM-facing product:

> **defined result + price + completion time + revision/recovery boundary**

Default GM experience does not require selecting a specific PLAYER.

Internally KAPAPI may procure execution through:

- independent PLAYERs;
- AI/automation;
- specialist partners;
- hybrid/multi-resource execution.

This is materially different from a pure recommendation marketplace.

Do **not** assume that simply calling KAPAPI an intermediary will determine its legal status or liability.

The actual commercial flow, contracting parties, payment structure, routing control, representations and recovery obligations matter.

---

## 2. Early work boundary

KAPAPI should begin around **bounded result-based digital work**, not controlled worker-hours, shift staffing or employee dispatch.

Strong early properties:

- defined output;
- limited execution window;
- objective/semi-objective acceptance criteria;
- revisable mistakes;
- low irreversible liability;
- no reserved professional judgment unless the execution/legal structure supports it.

Avoid designing around:

- attendance;
- fixed daily hours;
- workplace control;
- shift scheduling;
- exclusivity;
- employee-like supervision;
- recurring controlled hours sold as substitute employees.

Actual operation matters more than labels.

---

## 3. PLAYER independence remains important

When human PLAYERs participate, they should generally retain meaningful independent choice over:

- whether to BID or accept an Offer;
- requested/accepted compensation;
- committed DELIVERY TIME;
- whether to accept a task;
- when and where work is performed;
- work method, subject to deliverable/security requirements.

KAPAPI may define or enforce the result boundary needed for the GM Execution Contract:

- scope;
- deliverable;
- deadline/completion promise;
- output format;
- objective checks;
- security/confidentiality;
- revision terms.

The more KAPAPI controls method, schedule, worker behavior and continuity, the more carefully labor/intermediation implications must be reviewed.

---

## 4. Contracting architecture is now a research-load-bearing question

Previous documents could assume an early `GM ↔ PLAYER` service contract with KAPAPI as marketplace/recommender.

The Outcome UX creates multiple possible commercial structures, none of which should be treated as legally settled without review.

Potential structures include, depending on category and law:

### A. Marketplace/intermediary structure

- GM contract ultimately forms with PLAYER/provider;
- KAPAPI quotes/routes under authorized rules;
- KAPAPI provides platform/recovery support.

### B. Principal/contractor structure

- GM buys the completed service from KAPAPI;
- KAPAPI subcontracts execution to PLAYER/partner/resources.

### C. Hybrid/category-specific structure

Different execution categories may require different contracting/disclosure rules.

Before commercial launch, obtain Korean legal/accounting review on:

- intermediary vs principal characterization;
- subcontracting consent/disclosure;
- platform-controlled provider selection;
- refund/liability allocation;
- consumer/commercial transaction duties;
- taxes/invoicing/settlement;
- worker/intermediation implications.

Do not hard-code a business model in software until this structure is reasonably clear.

---

## 5. Execution Contract disclosure

The GM-facing Execution Contract should disclose what is necessary for informed agreement, including as applicable:

- exact result/scope;
- price;
- completion time/deadline;
- acceptance/revision boundary;
- cancellation/refund rule;
- recovery/reassignment rule;
- security/confidentiality conditions;
- whether subcontracting or mixed human/AI/automation execution may occur;
- credentialed/regulated requirements;
- KAPAPI's role and responsibility boundary.

Do not promise broader outcome guarantees than the commercial/legal architecture can support.

---

## 6. Executor disclosure and consent

Outcome UX does not mean hiding information that must be disclosed.

Depending on work, KAPAPI may need to disclose or obtain consent for:

- named human provider/partner;
- professional credentials;
- subcontracting;
- overseas processing;
- AI/model processing;
- third-party file/data access;
- security-relevant execution location or method.

Default UX can remain non-shopping-oriented while still exposing legally/security-relevant facts.

---

## 7. Payment / escrow / custody

KAPAPI should not casually hold customer funds in an ordinary operating account.

Commercial launch should evaluate:

- compliant PG/payment provider;
- escrow/safe-payment where required/appropriate;
- payment authorization timing;
- executor settlement;
- refund/recovery reserve;
- chargebacks/disputes;
- transaction evidence.

If KAPAPI sells an all-in execution price and later pays subcontracted executors, the accounting/tax/cash-flow structure may differ materially from a simple marketplace fee.

Early pre-commercial validation may use a simplified lawful flow, but it must not be mistaken for the production architecture.

---

## 8. Taxes and evidence

Do not hard-code universal `3.3%` treatment.

Participants may be:

- individuals;
- sole proprietors;
- corporations;
- partner organizations;
- overseas providers in future.

Tax/invoice/withholding evidence depends on the actual contracting structure and participant type.

Accounting review is required before commercial settlement automation.

---

## 9. Confidential files / NDA

KAPAPI's internal routing makes data handling more important, not less.

Support appropriate controls for:

- QUEST/Execution Contract confidentiality;
- NDA where needed;
- least-privilege file access;
- executor-specific access;
- AI/model processing disclosure and restrictions;
- third-party/subcontractor disclosure;
- retention/deletion;
- access logs;
- portfolio-use prohibition by default where appropriate;
- breach/remedy process.

Never route sensitive work to a resource that does not satisfy the authorized security boundary.

---

## 10. Intellectual property

Execution Contract design should clarify:

- GM authority over source materials;
- deliverable ownership/license;
- PLAYER/partner reuse rights;
- portfolio permission;
- third-party asset restrictions;
- AI-generated or third-party component considerations where relevant.

Do not assume payment automatically transfers every right.

---

## 11. Regulated professional work

KAPAPI must distinguish production/support execution from reserved professional judgment.

Architecture/CAD examples that may be suitable depending on facts:

- CAD digitization from supplied material;
- edits under responsible professional instruction;
- 3D modeling/rendering;
- presentation production;
- data/document production support.

Do not market unqualified PLAYERs, KAPAPI or AI as independently providing reserved professional services.

Architecture, law, medicine, tax and other regulated areas require category-specific credential/responsibility review before launch.

---

## 12. AI / automation execution

Before using AI/automation in a commercial task, evaluate:

- whether user data may be sent to the model/service;
- model/provider terms;
- confidentiality restrictions;
- copyright/IP risk;
- accuracy/reliability boundary;
- human review requirement;
- disclosure/consent;
- prohibited regulated judgment;
- fallback/recovery path.

Technical ability to automate a task does not remove responsibility for the delivered result.

Do not claim AI is the authoritative final judge of subjective quality.

---

## 13. Quality / recovery liability

KAPAPI's promise to internalize failure can create additional responsibility.

Define category-specific rules for:

- normal in-scope revision;
- executor late/failure;
- reassignment;
- backup execution;
- KAPAPI-caused delay;
- non-performance;
- partial completion;
- refund/credit;
- consequential-loss exclusions/limits where lawful;
- dispute process.

Do not promise universal deadline guarantees before the product can price and legally support the risk.

---

## 14. Personal data / security

Design for minimization and role-based access:

- collect only necessary data;
- secure authentication;
- separate payment data via compliant provider where possible;
- access-controlled task files;
- executor access limited to assigned work;
- appropriate logging/audit;
- retention/deletion policy;
- privacy policy matching actual processing;
- incident process.

Refresh privacy/legal documents against the real production architecture before launch.

---

## 15. Initial prohibited / gated work

Until category review, block or gate:

- regulated professional judgment requiring licenses;
- illegal/infringing work;
- confidential material supplied without authority;
- dangerous/high-liability instructions;
- employee-like shift/dispatch arrangements;
- work with unbounded scope/responsibility;
- tasks where KAPAPI cannot enforce the authorized security boundary;
- work where irreversible harm is disproportionate to the transaction;
- categories where recovery/QA responsibility is legally unclear.

---

## 16. MVP legal posture

Recommended prototype/validation posture:

- adults initially;
- bounded result-based work;
- no controlled hourly staffing;
- PLAYERs independently bid/accept Offers;
- GM sees a clearly defined Execution Contract;
- KAPAPI may manually/concierge route for validation;
- no claim of universal instant quote;
- no universal SLA;
- GM retains result acceptance/revision authority;
- minimal data collection;
- regulated work gated/excluded;
- payment/custody kept deliberately simple and lawful until production review;
- execution method disclosure when legally/security-relevant.

The prototype may simulate payment or routing states. Do not imply commercial legal infrastructure is already complete.

---

## 17. Production legal gate

Before paid commercial launch, resolve at minimum:

1. Korean intermediary/principal/service-provider structure;
2. subcontracting/routing disclosure and consent;
3. e-commerce/online platform obligations;
4. PG/escrow/payment/refund architecture;
5. tax/invoice/settlement evidence;
6. worker/labor/intermediation implications;
7. uploaded-file/privacy/security obligations;
8. IP/deliverable defaults;
9. AI/automation processing responsibility;
10. category-specific professional rules;
11. recovery/liability limitations;
12. insurance/indemnity needs;
13. KAPAPI trademark/name clearance.

---

## 18. Product principle

The new canon should be legally honest:

> **KAPAPI may remove supplier shopping from the GM experience, but it cannot remove the legal responsibility created by controlling more of the execution.**

The product should earn stronger responsibility category by category, with corresponding contract, pricing, security and recovery design.
