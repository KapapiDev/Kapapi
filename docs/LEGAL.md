# KAPAPI Legal / Product Boundaries

Updated: 2026-09-01

> This document is a product-design risk register, **not formal legal advice**. Commercial launch requires Korean legal/accounting review.

---

## 1. Core legal architecture

KAPAPI should be designed around **independent result-based professional work**, not employment, part-time-job placement or worker dispatch.

Working structure:

- **GM ↔ PLAYER**: actual service/work contract parties as appropriate
- **KAPAPI**: matching and transaction-support platform

The product trades a **defined QUEST/result**, not controlled worker-hours.

This legal boundary also matches the product philosophy: GM specifies what result is needed and by when; PLAYER decides whether and how to perform it.

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
- employee-like absence/attendance management
- hourly staffing sold as a substitute employee

Contract labels alone do not determine worker status; actual operating behavior matters.

---

## 3. Fractional Employee / time-purchase concept is deferred

An earlier roadmap concept considered allowing a GM to reserve or “buy” recurring blocks of PLAYER time, such as 20 hours per month.

**Current decision: remove/defer that model from the KAPAPI roadmap.**

Reason:

- it weakens the clear QUEST/result-based transaction boundary
- recurring time control can create additional worker-status / job-placement / labor-supply questions
- it is unnecessary to validate the current marketplace thesis

If a future KAPAPI revisits retained/fractional professional capacity, it requires a separate legal/product review before implementation.

Current KAPAPI should optimize:

> **defined result + PLAYER-set price + PLAYER-set delivery commitment**

not controlled person-hours.

---

## 4. Payment / escrow

For a commercial product, KAPAPI should **not hold customer funds directly in its ordinary operating bank account**.

Preferred commercial direction:

- registered PG/payment provider
- compliant escrow/safe-payment structure where required/appropriate
- platform transaction records
- clear cancellation/refund/dispute rules

A commercial fixed-price marketplace will likely benefit materially from pre-funded/safe-payment protection because it addresses both sides' fears:

- PLAYER: “What if I work and do not get paid?”
- GM: “What if I pay and the PLAYER disappears?”

But the implementation must use a compliant provider rather than KAPAPI casually acting as a payment custodian.

---

## 5. Early validation payment posture

For pre-commercial transaction testing, the current recommended posture is intentionally simple:

- adults initially
- result-based fixed-price QUEST
- KAPAPI fee: **0** during initial mechanism testing
- GM ↔ PLAYER direct payment if a real payment is needed
- KAPAPI does not custody money
- no promise that this early flow is the final commercial settlement design

This allows demand/supply testing without prematurely building a regulated payment stack.

Before production payment launch, obtain legal/accounting review and implement an appropriate PG/escrow structure.

---

## 6. Taxes and transaction evidence

Do **not** hard-code a universal “3.3%” tax treatment.

PLAYER may be:

- an individual freelancer
- sole proprietor
- corporation
- another taxable/exempt participant type

Tax treatment, withholding, evidence and settlement may differ by participant and transaction structure.

Commercial settlement/evidence flows must be reviewed with an accountant/tax specialist.

A major GM value hypothesis is reduced administrative burden, so correct transaction evidence is a product feature, not merely back-office accounting.

---

## 7. Marketplace/intermediary posture

Do not rely on “KAPAPI is only an intermediary” as a blanket liability shield.

Commercial product design should clearly disclose:

- identities/roles of transaction parties
- whether GM and PLAYER contract directly
- what KAPAPI facilitates
- what KAPAPI does and does not guarantee
- fees
- cancellation/refund process
- complaint/dispute handling
- prohibited/gated QUEST types
- reporting/sanction process

Exact Korean e-commerce/intermediary registration, disclosure and dispute obligations must be checked before launch.

---

## 8. Confidential files and NDA

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

For early architecture work, the GM should confirm they have authority to provide the uploaded source files/materials.

---

## 9. Intellectual property

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

## 10. Architecture-specific boundary

Initial architecture/CAD experiments must distinguish **production/support work** from legally regulated architectural professional services.

Potentially suitable support categories, subject to exact facts:

- CAD digitization of materials supplied by the GM
- edits to confirmed drawings under the responsible professional's direction
- 3D modeling
- rendering
- presentation/panel production
- data cleanup

Do not casually market unlicensed PLAYERs as independently providing statutory architectural design or other legally reserved professional acts.

For MVP validation:

- block clearly regulated architecture QUESTs unless separately reviewed
- if a regulated category is later supported, require appropriate credential/responsibility design
- distinguish work produced as support under the responsible professional from independent statutory professional judgment

If KAPAPI later expands into law, medicine, tax or other regulated professions, treat each as a separate gated category requiring dedicated review.

---

## 11. Personal data and project-file security

Product should be designed around data minimization.

Baseline direction:

- collect only needed personal information
- do not store raw passwords insecurely
- minimize KAPAPI handling of payment details by delegating payment processing to the provider
- role-based file access
- logs/audit trail appropriate to the service
- retention/deletion policy
- privacy policy matched to actual processing

Privacy/security documents must be refreshed against the law and actual technical design before commercial launch.

---

## 12. SOW / dispute design reduces legal and operational risk

A clear QUEST/SOW should define, as appropriate:

- scope
- inputs
- deliverables
- deadline
- acceptance criteria
- revision boundary
- confidentiality conditions
- payment amount

This turns later disagreements from vague “quality was bad” disputes toward more concrete questions of whether agreed requirements were met.

Product quality architecture should initially be:

1. objective technical preflight where reliable
2. GM approval / revision request
3. platform dispute process when necessary

Do not promise that AI can conclusively adjudicate subjective professional quality.

---

## 13. Autopilot changes the responsibility profile

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
- responsibility for replacement PLAYERs

Autopilot must not be launched merely by changing marketing copy.

---

## 14. Initial prohibited / gated work

Until reviewed, block or gate:

- regulated professional judgments requiring specific licenses
- illegal or infringing work
- work using confidential material without authority
- dangerous/high-liability instructions
- employment-like shift/dispatch arrangements
- tasks where KAPAPI cannot reasonably define transaction responsibility

---

## 15. MVP legal posture

Recommended early validation posture:

- adult users initially
- business/professional-oriented GM use cases
- result-based fixed-price QUESTs
- no hourly shift marketplace
- no Fractional Employee / controlled time blocks
- clear GM/PLAYER role disclosure
- PLAYER sets price and delivery commitment
- basic terms + privacy + QUEST contract + NDA
- minimal personal-data collection
- KAPAPI fee 0 for initial transaction-engine tests
- no direct KAPAPI custody of funds
- direct GM↔PLAYER payment when a real pre-commercial payment is required
- exclude regulated professional tasks unless separately verified

---

## 16. Legal questions to resolve before production payment launch

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
11. Whether any future retained/fractional-capacity product changes worker/intermediary classification

---

## 17. Trademark / brand clearance

KAPAPI is the chosen working brand/service name, but commercial use should not assume name availability merely because domains or GitHub handles exist.

Before commercialization:

- formal KIPRIS/trademark search
- relevant class strategy
- domestic/overseas same-name service review
- major app-store/social-handle conflicts where relevant
- filing strategy if the brand is to be scaled

Brand clearance is separate from product-name preference.
