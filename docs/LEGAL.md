# KAPAPI Legal / Product Boundaries

Updated: 2026-09-03

> This document is a product-design risk register, **not formal legal advice**. Commercial launch requires Korean legal/accounting review.

## 1. Core legal architecture

KAPAPI should begin around **independent result-based bounded work**, not controlled worker-hours, shift staffing or employee dispatch.

Working early structure:

- **GM ↔ PLAYER**: actual work/service contract parties as appropriate
- **KAPAPI**: task marketplace, recommendation and transaction-support platform

The traded unit is a defined QUEST/result.

Current preferred prototype selection flow:

```text
PLAYERs independently BID PRICE + DELIVERY
→ KAPAPI filters/ranks and recommends
→ GM confirms
→ PLAYER is assigned
```

Universal platform-controlled routing is a later capability and changes KAPAPI's responsibility profile as it grows.

---

## 2. PLAYER independence

PLAYER should generally retain control over:

- whether to BID
- requested price
- committed delivery time
- whether to accept/continue where a separate acceptance step is required
- when and where work is performed
- work method, subject to deliverable requirements

GM/KAPAPI should specify what is necessary for the transaction/result:

- desired result
- source materials
- deadline
- output format
- objective requirements
- budget/security constraints

Avoid designing around:

- attendance
- fixed daily working hours
- workplace control
- shift scheduling
- strong day-to-day supervision
- exclusivity
- employee-like absence management
- recurring controlled hours sold as substitute employees

Actual operation matters more than contract labels.

---

## 3. Hourly / fractional staffing remains deferred

Do not currently sell controlled blocks such as “20 PLAYER hours per month” as the core KAPAPI product.

Current unit:

> **defined QUEST/result + PLAYER-set PRICE + PLAYER-set DELIVERY commitment**

If retained/fractional capacity is revisited later, conduct a separate labor/intermediary legal review first.

---

## 4. Early recommendation vs later routing responsibility

KAPAPI now has staged responsibility levels.

### Stage A — Task marketplace + recommendation

> GM defines work/constraints; PLAYERs BID; KAPAPI recommends; GM confirms; GM judges result.

### Stage B — Default routing

> KAPAPI increasingly selects/routes by default under explicit GM constraints, with override/recovery.

### Stage C — Outcome Layer

> KAPAPI may additionally orchestrate replacement, QA and defined delivery/outcome responsibility across human/AI/automation/partner execution.

These are legally/commercially different levels of platform control.

Do not treat recommendation, default provider selection and outcome assurance as legally identical.

---

## 5. Recommendation transparency

Early recommendation should be grounded in inspectable factors such as:

- hard eligibility/credentials
- security/NDA requirements
- GM deadline/budget
- PRICE + DELIVERY
- relevant task history/career
- on-time/revision/failure history
- availability

Do not market an opaque AI-only “best worker” judgment as authoritative.

The GM should understand that the current recommendation is decision support and that confirmation creates assignment.

---

## 6. Payment / escrow

For commercial launch, KAPAPI should not casually hold customer funds in an ordinary operating bank account.

Preferred direction:

- compliant PG/payment provider
- escrow/safe-payment structure where required/appropriate
- clear transaction records
- cancellation/refund/dispute rules

Early mechanism testing may use:

- KAPAPI fee = 0
- no KAPAPI custody of funds
- direct GM↔PLAYER payment where a real pre-commercial payment is needed

This is a temporary validation posture, not final commercial settlement architecture.

Before later default routing, ensure KAPAPI never routes a BID outside the commercial amount/rule the GM has authorized.

---

## 7. Taxes and transaction evidence

Do not hard-code universal “3.3%” treatment.

PLAYERs may be individuals, sole proprietors, corporations or other participant types with different tax/evidence rules.

Commercial settlement/tax flows require accounting review.

Administrative convenience may itself become part of KAPAPI's repeat-use value.

---

## 8. Marketplace / intermediary posture

Do not rely on “KAPAPI is only an intermediary” as a blanket shield.

Commercial product should clearly disclose, as applicable:

- transaction parties
- KAPAPI's recommendation/routing role
- high-level recommendation/routing criteria
- what KAPAPI facilitates
- what it does/does not guarantee
- fees
- cancellation/refund
- complaints/disputes
- replacement/recovery policy
- gated/prohibited categories

As KAPAPI takes more control over provider selection, recovery, QA and outcome promises, legal responsibility may increase.

Exact Korean e-commerce/intermediary obligations require formal review before launch.

---

## 9. Confidential files / NDA

KAPAPI should support appropriate confidentiality controls for work containing project/client data:

- QUEST-specific confidentiality terms
- NDA where needed
- no unauthorized third-party disclosure
- portfolio-use restrictions
- retention/deletion rules
- access control
- file-transfer/delivery audit trail
- breach/remedy process

Security claims must match actual technical/legal protection.

Security eligibility should be checked before a candidate is recommended or later routed.

---

## 10. Intellectual property

Do not assume payment automatically transfers every IP right.

QUEST contract design should clarify:

- ownership/authority over source material
- deliverable ownership/license
- permitted PLAYER reuse
- portfolio permission
- third-party asset restrictions

Avoid simplistic promises that conflict with non-transferable rights or actual law.

---

## 11. Regulated professional work

Architecture/CAD support must distinguish production/support tasks from regulated statutory professional judgment.

Potentially suitable support examples, depending on facts:

- CAD digitization of GM-provided materials
- edits under responsible professional direction
- 3D modeling/rendering
- presentation production
- data cleanup

Do not market unlicensed PLAYERs or AI as independently providing reserved professional services.

If KAPAPI later enters architecture, law, medicine, tax or other regulated areas, each needs category-specific credential/responsibility review.

---

## 12. Personal data / file security

Design for data minimization:

- collect only necessary personal information
- secure credentials/authentication
- delegate payment details to compliant provider where possible
- access-controlled files
- appropriate logging/audit
- retention/deletion policy
- privacy policy matching actual processing

Refresh legal/privacy documents against the real production architecture before commercial launch.

---

## 13. SOW clarity reduces risk

A clear QUEST/SOW should define as appropriate:

- scope
- inputs
- deliverables
- deadline
- output format
- acceptance criteria
- revision boundary
- confidentiality conditions
- authorized payment/budget rule

Initial quality architecture:

1. objective technical preflight where reliable
2. GM approval/revision
3. platform recovery/replacement where promised
4. dispute process when needed

Do not claim AI can conclusively adjudicate subjective professional quality.

---

## 14. Long-term resource-agnostic execution adds new legal questions

The mature Outcome Layer may combine:

- human PLAYERs
- AI agents/models
- deterministic automation
- specialist partner organizations
- hybrid/multi-PLAYER workflows

Before commercializing each execution mode/category, review:

- who is the contracting/service provider
- subcontracting disclosure/consent
- data-sharing boundaries
- IP ownership
- AI output responsibility
- professional-qualification requirements
- replacement/recovery responsibility
- liability/insurance
- refund/compensation rules

Do not let the technical ability to automate a task outrun legal responsibility for the result.

---

## 15. Initial prohibited / gated work

Until reviewed, block or gate:

- regulated professional judgment requiring licenses
- illegal/infringing work
- confidential material supplied without authority
- dangerous/high-liability instructions
- employee-like shift/dispatch arrangements
- tasks where scope/responsibility cannot reasonably be bounded
- categories where KAPAPI cannot safely evaluate eligibility/security

---

## 16. MVP legal posture

Recommended early posture:

- adults initially
- bounded result-based QUESTs
- no hourly shift marketplace
- no controlled fractional-hours product
- clear GM/PLAYER/KAPAPI role disclosure
- PLAYER sets PRICE + DELIVERY
- KAPAPI recommends using transparent evidence
- GM confirms current recommendation
- GM remains final acceptance/revision authority
- no claim that AI guarantees the best performer or result
- no universal routing/SLA guarantee
- minimal personal-data collection
- basic terms/privacy/QUEST terms/NDA as needed
- fee 0 during initial mechanism tests if appropriate
- no KAPAPI custody of funds during simple pre-commercial validation
- regulated work gated/excluded without review

---

## 17. Later routing / Outcome Layer legal gate

Before KAPAPI moves from recommendation to default routing, and again before stronger Outcome Layer guarantees, review:

- platform/intermediary classification
- implications of platform-controlled provider selection
- consumer/commercial transaction duties
- subcontracting structure
- liability allocation
- insurance
- replacement responsibility
- refund/compensation policy
- recommendation/routing disclosure
- AI/automation responsibility
- category-specific regulated-work boundaries

D-032 deliberately makes this responsibility **earned in stages**, which allows legal/commercial review to progress with real evidence rather than assuming the final model on day one.

---

## 18. Questions before production launch

1. Korean online intermediary/e-commerce registration and disclosures
2. Standard QUEST contract/NDA structure
3. PG/escrow/payment authorization/refund design
4. participant tax/settlement evidence
5. uploaded-file privacy/security obligations
6. IP/deliverable defaults
7. regulated-professional category rules
8. legal implications of KAPAPI recommendations
9. additional implications when KAPAPI later routes by default
10. AI/automation/subcontractor responsibility in Outcome Layer
11. insurance/indemnity needs
12. KAPAPI trademark/name clearance

---

## 19. Trademark / brand clearance

KAPAPI is the chosen working brand, but commercial use should still include:

- formal KIPRIS/trademark search
- class strategy
- domestic/overseas same-name service review
- relevant app/social conflicts
- filing strategy where appropriate
