# KAPAPI Validation

Updated: 2026-09-01

This document separates **observed evidence** from **current hypotheses**.

KAPAPI is **not market-validated yet**.

---

## 1. Primary business question

The dominant risk is not PLAYER acquisition.

It is:

> **Will GMs repeatedly submit real professional work and pay to have it completed through KAPAPI?**

A marketplace with abundant PLAYERs and weak GM demand fails.

---

## 2. Initial GM interview — architecture

Source: founder acting as an architecture GM, 2026-09-01.

This is a single qualitative interview. It is useful for hypothesis formation, not proof.

### Observed situation

- Multiple projects overlapped.
- A new project required converting a hand-drawn/current-condition building drawing into CAD.
- The work was straightforward for a competent CAD user.
- Because other projects overlapped, the GM wanted someone else to do it.
- In reality the GM completed it personally, taking roughly two days.

### Why the GM did not outsource

- Explaining/delegating felt bothersome.
- The work was easy enough that “I will just get it done” felt faster.
- The GM also attempted to solve the task through an AI-skill approach before doing it manually.

### Conditions that would trigger outsourcing

The GM said outsourcing becomes attractive when:

- even working late may not meet the deadline
- a more important design task would be sacrificed
- 3–4 projects overlap
- outsourcing price is acceptable
- the PLAYER can understand the task with little explanation

### Willingness-to-pay signal

For an approximately 8-hour CAD-like task under pressure:

- natural willingness: roughly KRW 100k–200k
- stated maximum under urgency: roughly KRW 300k

Hypothetical choice:

- A: KRW 100k, next morning, rating 4.8, 42 completions
- B: KRW 150k, 23:00 today, rating 4.9, 87 completions
- C: KRW 220k, 19:00 today, rating 4.9, 156 completions

The GM chose **C**.

Reasoning:

1. looked most competent
2. fastest
3. largest completion history
4. price was acceptable because the GM could inspect the result after dinner and leave work

### Implication

The GM was not minimizing price.

The GM was buying:

- deadline certainty
- confidence in quality
- preserved time for more important work
- reduced overtime

Price can become secondary when urgency and task value are high enough.

---

## 3. Trust/security findings

The GM was reluctant to send project materials to an unknown external worker because architecture projects can contain confidential client/project data.

Willingness to delegate increased when the hypothetical platform provided:

- NDA / confidentiality agreement
- clear non-disclosure obligations
- project-data handling restrictions
- compensation/liability terms for leakage
- documented contractual safeguards

### Career is a major trust shortcut

For a current-condition CAD task, a profile such as:

> “5 years at an architecture office”

was highly meaningful because the GM inferred:

> “I can probably hand over the source drawing without explaining every professional convention.”

Relevant career is therefore not only prestige. It is a proxy for **lower delegation overhead**.

---

## 4. Repeat-trade and disintermediation finding

The GM initially saw value in repeat transactions inside KAPAPI because:

- tax/evidence handling matters to a business
- contracting matters
- administrative work is reduced
- the platform fee can be embedded in the total quoted cost

However, when presented with a realistic direct-deal scenario involving a previously trusted PLAYER, the GM said direct trade would likely win if the relationship was already trusted and cheaper.

### Real company example

The GM's company used the same CG vendor for roughly ten years.

That relationship began as ad-hoc/part-time outsourced work, then grew into a long-term vendor relationship through successful work and referrals.

More recently, the company tested another vendor because of quality concerns. The new vendor had much better quality, so the company now uses:

- newer vendor for quality-sensitive work
- older vendor for urgent/simple work

### Implication

Professional outsourcing behaves like a **vendor portfolio**, not necessarily one permanent winner.

KAPAPI can create value when:

- a preferred vendor is unavailable
- quality falls
- a new task requires a different specialty
- the GM wants comparison pricing
- the GM wants to discover a better vendor

But long-term disintermediation remains a material risk.

---

## 5. Existing-partner workflow finding

When a new task appears, the GM said they would likely contact existing vendors first and also use KAPAPI for comparison.

Speed of the first bid was **not** the main issue in that scenario.

When offered a hypothetical workflow where KAPAPI can:

- include existing partners
- request their proposals automatically
- expose the task to new PLAYERs
- compare all proposals in one place

The GM preferred starting in KAPAPI and described it as meaningfully convenient, though not yet necessarily indispensable.

---

## 6. Strongest desired product outcome

The GM identified value in:

1. uploading files and having AI create the QUEST/work instruction
2. comparing recent price/delivery from existing vendors
3. showing reference market price
4. showing availability of frequent vendors
5. automating contract/NDA/tax evidence
6. recommending a replacement PLAYER when a preferred partner is unavailable
7. managing all outsourced work/vendor history in one place
8. bidding
9. ultimately: **throw the work in and receive the finished result; the GM only inspects**

This produced the strongest product insight so far:

> **The GM does not fundamentally want to find a PLAYER. The GM wants the right-quality result by the required time. If the process can be automated, that is substantially more valuable.**

---

## 7. Current GM hypotheses

### GM-01 — Capacity/deadline gaps recur

Small professional firms repeatedly encounter short bursts where required work exceeds available internal capacity.

### GM-02 — “I will just do it myself” is a primary competitor

For easy tasks, search/explanation/management friction can exceed the perceived benefit of outsourcing.

### GM-03 — Delegation overhead can be reduced enough to change behavior

AI-generated work instructions, career signals, standardized security and transaction administration can reduce the cost of delegation.

### GM-04 — Price + delivery time is useful

Urgent GMs may rationally choose a higher-priced PLAYER when earlier completion protects higher-value work or prevents overtime/deadline failure.

### GM-05 — Relevant career matters more than generic ratings for some professional tasks

Industry experience tells the GM how much explanation will be required.

### GM-06 — Existing vendors do not eliminate market need

GMs still need alternatives when vendors are unavailable, quality changes, specialization changes or comparison is useful.

### GM-07 — KAPAPI may become an external-work operating layer

If existing partners and new PLAYERs can be managed together, KAPAPI can enter the GM's workflow before the vendor decision is made.

### GM-08 — Outcome orchestration could be materially stronger than marketplace UX

If KAPAPI can reliably produce the required output on time with minimal GM management, the value proposition becomes fundamentally stronger.

---

## 8. Tests to run before 2R

### Interview test

Target: 15–30 external GMs in one narrow segment.

Ask about **real past behavior**, not hypothetical enthusiasm.

Record:

- last capacity/deadline gap
- what the GM actually did
- alternatives considered
- actual spend
- delegation barriers
- security concerns
- explanation burden
- vendor-selection criteria
- price vs deadline tradeoff
- whether an existing partner was available

### Real QUEST test

Run actual tasks with external PLAYERs.

Measure:

- QUEST creation time
- first valid BID time
- number of valid BIDs
- chosen price/time combination
- completion time
- revision count
- GM management minutes
- outcome acceptance

### External-GM paid test

Founder-originated CAD tasks are useful for mechanism testing but should **not** be counted as primary demand proof.

Best evidence:

> an external GM spends their own money on a QUEST.

Stronger evidence:

> the same external GM returns with another QUEST.

### Existing-partner test

Allow a GM to include an existing vendor alongside open-market PLAYERs and observe whether this changes the GM's starting behavior.

### Assist test

Compare:

A. normal QUEST writing  
B. upload + one sentence → generated work instruction

Measure GM time and correction burden.

---

## 9. Metrics that matter

Primary:

- external paid QUEST count
- external GM repeat rate
- completion rate
- on-time rate
- GM acceptance rate
- GM management time per QUEST
- revision/rework rate
- valid BIDs per QUEST
- time to first valid BID

Secondary:

- PLAYER registrations
- browsing traffic
- social engagement

Do not confuse supply/activity with demand validation.

---

## 10. Kill / pivot signals

KAPAPI should be challenged aggressively if repeated external interviews/tests show:

- “I would rather work overnight than outsource” even in true deadline/capacity crises
- unknown external professionals remain unacceptable despite strong NDA/trust safeguards
- explaining the job consistently costs as much time as doing it
- most relevant work cannot be scoped as a short independent result
- real GMs refuse to pay at economics that also attract competent PLAYERs
- qualified supply cannot provide sufficient liquidity
- quality/revision risk destroys unit economics
- direct vendor relationships eliminate enough repeated platform value that acquisition economics become untenable

Do not protect the idea from negative evidence.
