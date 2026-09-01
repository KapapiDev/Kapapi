# KAPAPI Legal / Product Boundaries

Updated: 2026-09-01

> This document is a product-design risk register, **not formal legal advice**. Commercial launch requires Korean legal/accounting review.

---

## 1. Core legal architecture

KAPAPI should be designed around **independent result-based professional work**, not employment, part-time-job placement or worker dispatch.

Working structure:

- **GM ↔ PLAYER**: actual service/work contract parties as appropriate
- **KAPAPI**: matching and transaction-support platform

The product should trade a **QUEST/result**, not a worker's controlled time.

---

## 2. PLAYER independence

PLAYER should generally retain control over:

- whether to BID
- price
- committed delivery time
- when and where the work is performed
- work method, subject to deliverable requirements

GM should specify:

- desired result
- source materials
- deadline
- output format
- objective requirements

Avoid designing KAPAPI around:

- attendance
- fixed daily working hours
- workplace control
- shift scheduling
- strong day-to-day supervision
- exclusivity
- hourly employee-like management

Contract labels alone do not determine worker status; actual operating behavior matters.

---

## 3. Payment / escrow

For a commercial product, KAPAPI should not hold customer funds directly in its ordinary operating bank account.

Preferred commercial direction:

- registered PG/payment provider
- compliant escrow/safe-payment structure where required/appropriate
- platform transaction records
- clear cancellation/refund/dispute rules

Early test mode may avoid platform custody of money while validating demand, subject to legal/accounting review.

---

## 4. Taxes and evidence

Do **not** hard-code a universal “3.3%” tax treatment.

PLAYER may be:

- an individual freelancer
- sole proprietor
- corporation
- other taxable/exempt participant type

Commercial settlement/evidence flows must be reviewed with an accountant/tax specialist.

A major GM value hypothesis is reduced administrative burden, so correct transaction evidence eventually matters to product retention.

---

## 5. Confidential files and NDA

Professional QUESTs may contain confidential client/project data.

KAPAPI should support, as appropriate:

- QUEST-specific confidentiality terms
- NDA execution
- no third-party disclosure
- no portfolio/public use without GM permission
- defined data-retention/deletion rules
- access control
- audit trail of file transfer and delivery
- clear remedies/claims process for breach

Security claims must not exceed actual technical/legal protection.

---

## 6. Intellectual property

Do not assume payment automatically transfers every copyright/IP right.

QUEST contract design should define:

- ownership of source materials
- GM's authority to upload/provide those materials
- ownership/license of deliverables
- permitted reuse by PLAYER
- portfolio-use permission
- third-party asset restrictions

Moral rights and other non-transferable rights must be handled accurately rather than promised away by simplistic wording.

---

## 7. Architecture-specific boundary

Initial architecture/CAD experiments must distinguish **production/support work** from legally regulated architectural professional services.

Potentially suitable support categories, subject to exact facts:

- CAD digitization of materials supplied by the GM
- edits to confirmed drawings under the responsible professional's direction
- 3D modeling
- rendering
- presentation/panel production
- data cleanup

Do not casually market unlicensed PLAYERs as independently providing statutory architectural design or other legally reserved professional acts.

If regulated professional work is ever supported, credential verification and responsibility structure require dedicated legal review.

---

## 8. Autopilot changes the responsibility profile

Marketplace Mode:

> GM selects PLAYER and the platform primarily facilitates the transaction.

Autopilot Mode:

> KAPAPI may promise that work will be completed to a defined quality/time outcome regardless of which PLAYER executes it.

The more KAPAPI controls routing, replacement, QA and outcome promises, the more legal/commercial responsibility may shift toward KAPAPI.

Before strong SLA/outcome guarantees, review:

- platform/intermediary status
- service-provider responsibility
- consumer/commercial transaction obligations
- liability allocation
- insurance needs
- refund/compensation rules
- subcontracting structure

Autopilot must not be launched merely by changing marketing copy.

---

## 9. Marketplace disclosure and dispute handling

Do not rely on “KAPAPI is only an intermediary” as a blanket liability shield.

Commercial product design should clearly disclose:

- identities/roles of transaction parties
- what KAPAPI does and does not guarantee
- fees
- cancellation/refund process
- complaint/dispute handling
- prohibited QUEST types
- reporting/sanction process

Exact Korean e-commerce/intermediary obligations must be checked before launch.

---

## 10. Initial prohibited / gated work

Until reviewed, block or gate:

- regulated professional judgments requiring specific licenses
- illegal or infringing work
- work using confidential material without authority
- dangerous/high-liability instructions
- employment-like shift/dispatch arrangements
- tasks where KAPAPI cannot reasonably define transaction responsibility

---

## 11. MVP legal posture

Recommended early validation posture:

- adult users initially
- business/professional-oriented GM use cases
- result-based fixed-price QUESTs
- no hourly shift marketplace
- clear GM/PLAYER role disclosure
- basic terms + privacy + QUEST contract + NDA
- minimal personal-data collection
- no direct KAPAPI custody of funds in early test mode
- exclude regulated professional tasks unless separately verified

---

## 12. Legal questions to resolve before production payment launch

1. Exact Korean online intermediary / e-commerce registration and disclosure requirements
2. PG/escrow structure and refund flow
3. PLAYER settlement and tax evidence by participant type
4. Standard QUEST contract and NDA enforceability
5. Architecture/professional-service category boundaries
6. Personal-data/security requirements for uploaded project files
7. IP/deliverable ownership defaults
8. Platform liability in Assist and Autopilot modes
9. Appropriate insurance/indemnity design for confidential or high-value work
10. Trademark/name conflict review for KAPAPI before commercialization
