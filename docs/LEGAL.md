# KAPAPI Legal / Product Boundaries

Updated: 2026-09-03

> This document is a product-design risk register, **not formal legal advice**. Commercial launch requires Korean legal/accounting review.

## 1. Core legal architecture

KAPAPI should begin around **independent result-based bounded work**, not controlled worker-hours, shift staffing or employee dispatch.

Working early structure:

- **발주자 ↔ 작업자**: actual work/service contract parties as appropriate
- **KAPAPI**: work marketplace, recommendation and transaction-support platform

The traded unit is defined work/result.

Current preferred prototype selection flow:

```text
작업자들이 독립적으로 가격 + 완료시간 제안
→ KAPAPI 필수요건 확인 / 정렬 / 선정
→ 작업자 배정
```

**D-035 changed this and the change is legally material.** Removing 발주자 확정 moves
the selection from the client to KAPAPI, so KAPAPI can no longer describe itself as
a venue whose user made the choice. Before any commercial launch, review with
counsel:

- who is the contracting party for the work once KAPAPI selects the 작업자;
- whether selecting creates a duty of care in the selection itself;
- what KAPAPI owes when a selected 작업자 fails, and what recovery is promised;
- how the selection criteria are disclosed, retained and explained on dispute;
- whether the client's remaining acceptance/revision right is sufficient to keep
  final quality judgement with them.

The prototype mitigates none of this by itself. What it does do is keep the
selection inspectable — the criteria and the excluded 제안 are shown — and keep
final acceptance with the client, which is the minimum the disclosure above
assumes.

Universal platform-controlled routing remains a later capability and continues to
change KAPAPI's responsibility profile as it grows.

---

## 2. Worker independence

Workers should generally retain control over:

- whether to submit a proposal
- requested price
- committed completion time
- whether to accept/continue where a separate acceptance step is required
- when and where work is performed
- work method, subject to deliverable requirements

The client/KAPAPI should specify what is necessary for the result:

- desired result
- source materials
- deadline
- output format
- objective requirements
- budget/security constraints

Avoid designing around attendance, fixed daily working hours, workplace control, shift scheduling, strong day-to-day supervision, exclusivity or employee-like absence management.

Actual operation matters more than contract labels.

---

## 3. Hourly / fractional staffing remains deferred

Do not currently sell controlled blocks such as “20 worker hours per month” as the core product.

Current unit:

> **defined work/result + worker-set price + worker-set completion commitment**

If retained/fractional capacity is revisited later, conduct separate labor/intermediary legal review.

---

## 4. Early recommendation vs later routing responsibility

### Stage A — Task marketplace + recommendation

> Client defines work/constraints; workers propose; KAPAPI selects (D-035); client judges result and holds the revision right.

### Stage B — Default routing

> KAPAPI increasingly selects/routes by default under explicit client constraints, with override/recovery.

### Stage C — Outcome / Execution Layer

> KAPAPI may additionally orchestrate replacement, QA and defined delivery/outcome responsibility across human/AI/automation/partner execution.

These are legally/commercially different levels of platform control.

---

## 5. Recommendation transparency

Early recommendation should be grounded in inspectable factors such as:

- hard eligibility/credentials
- security/NDA requirements
- client deadline/budget
- price + completion time
- relevant task history/career
- on-time/revision/failure history
- availability

Do not market an opaque AI-only “best worker” judgment as authoritative.

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
- direct 발주자↔작업자 payment where a real pre-commercial payment is needed

This is a temporary validation posture, not final settlement architecture.

---

## 7. Taxes and transaction evidence

Do not hard-code universal “3.3%” treatment.

Workers may be individuals, sole proprietors, corporations or other participant types with different tax/evidence rules.

Commercial settlement/tax flows require accounting review.

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

As KAPAPI takes more control over provider selection, recovery, QA and outcomes, legal responsibility may increase.

---

## 9. Confidential files / NDA

Support appropriate confidentiality controls:

- task-specific confidentiality terms
- NDA where needed
- no unauthorized third-party disclosure
- portfolio-use restrictions
- retention/deletion rules
- access control
- file-transfer/delivery audit trail
- breach/remedy process

Security claims must match actual protection.

---

## 10. Intellectual property

Work contracts should clarify:

- ownership/authority over source material
- deliverable ownership/license
- permitted worker reuse
- portfolio permission
- third-party asset restrictions

Do not assume payment automatically transfers every IP right.

---

## 11. Regulated professional work

Architecture/CAD support must distinguish production/support work from regulated statutory professional judgment.

Potential support examples, depending on facts:

- CAD digitization of client-provided materials
- edits under responsible professional direction
- 3D modeling/rendering
- presentation production
- data cleanup

Do not market unlicensed workers or AI as independently providing reserved professional services.

Each regulated category requires category-specific credential/responsibility review.

---

## 12. Personal data / file security

Design for data minimization, secure authentication, access-controlled files, appropriate logging/audit, retention/deletion policy and privacy disclosures matching actual processing.

---

## 13. Clear work specification reduces risk

Define as appropriate:

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
2. client approval/revision
3. platform recovery/replacement where promised
4. dispute process when needed

Do not claim AI can conclusively adjudicate subjective professional quality.

---

## 14. Long-term resource-agnostic execution adds new legal questions

The mature execution layer may combine:

- human workers
- AI agents/models
- deterministic automation
- specialist partner organizations
- hybrid/multi-worker workflows

Before commercializing each execution mode/category, review contracting party, subcontracting disclosure/consent, data-sharing boundaries, IP, AI output responsibility, professional qualifications, replacement/recovery responsibility, liability/insurance and refund/compensation rules.

---

## 15. Initial prohibited / gated work

Until reviewed, block or gate:

- regulated professional judgment requiring licenses
- illegal/infringing work
- confidential material supplied without authority
- dangerous/high-liability instructions
- employee-like shift/dispatch arrangements
- work where scope/responsibility cannot reasonably be bounded
- categories where KAPAPI cannot safely evaluate eligibility/security

---

## 16. MVP legal posture

Recommended early posture:

- adults initially
- bounded result-based work
- no hourly shift marketplace
- no controlled fractional-hours product
- clear 발주자/작업자/KAPAPI role disclosure
- worker sets price + completion time
- KAPAPI recommends using transparent evidence
- KAPAPI selects, with the criteria and the excluded 제안 disclosed
- client remains final acceptance/revision authority
- no claim AI guarantees the best worker or result
- no universal routing/SLA guarantee
- minimal personal-data collection
- basic terms/privacy/task terms/NDA as needed
- fee 0 during initial mechanism tests if appropriate
- no KAPAPI custody of funds during simple pre-commercial validation
- regulated work gated/excluded without review

---

## 17. Later routing / execution-layer legal gate

Before KAPAPI moves from recommendation to default routing, and again before stronger outcome guarantees, review platform/intermediary classification, provider-selection implications, consumer/commercial duties, subcontracting, liability, insurance, replacement responsibility, refund/compensation, routing disclosure, AI/automation responsibility and category-specific regulated-work boundaries.

---

## 18. Questions before production launch

1. Korean online intermediary/e-commerce registration and disclosures
2. standard work contract/NDA structure
3. PG/escrow/payment authorization/refund design
4. participant tax/settlement evidence
5. uploaded-file privacy/security obligations
6. IP/deliverable defaults
7. regulated-professional category rules
8. legal implications of KAPAPI recommendations
9. implications when KAPAPI later routes by default
10. AI/automation/subcontractor responsibility
11. insurance/indemnity needs
12. KAPAPI trademark/name clearance
