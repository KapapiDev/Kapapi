# Prototype v2 — Visual-First Communication Rules

Status: **mandatory for `feat/prototype-v2`**  
Updated: **2026-09-03**

KAPAPI v2 must follow one core rule:

> **If the product can show it, do not explain it in a paragraph.**

The public landing page is not a strategy memo, product-spec page, pitch deck or documentation site.

## 1. Visual proof before prose

For every public section, ask in this order:

1. Can the idea be understood through a real product state?
2. Can motion/transition show it?
3. Can one strong product artifact carry it?
4. Can short labels/captions finish the explanation?
5. Only then use a short supporting sentence.

Paragraphs are the last resort.

---

## 2. Public copy budget

Default per section:

- one short headline
- 0–1 short supporting sentence by default
- product UI / media / files / data for the rest

Reject:

`headline → paragraph → paragraph → numbered explanation columns → more paragraph`

If a section needs that structure, redesign the visual.

---

## 3. Show the current KAPAPI transaction truthfully

Current prototype behavior under D-032:

```text
[GM posts bounded work]
          ↓
[QUEST CREATED]
          ↓
[PLAYERs find the QUEST]
          ↓
[BIDs arrive: PRICE × DELIVERY]
          ↓
[ineligible options fall away]
          ↓
[KAPAPI RECOMMENDATION]
          ↓
[GM CONFIRMS]
          ↓
[ASSIGNED / WORK STARTED]
          ↓
[RESULT READY]
          ↓
[ACCEPT / REVISE]
```

Use product UI, files, timing, states and motion so this can be understood without a long explanation.

Do **not** visually collapse `RECOMMENDATION` and `ASSIGNED` into the same state. The GM confirmation is the current-stage bridge between them.

---

## 4. Demonstrate KAPAPI's present differentiation

The current differentiation is not “the GM never chooses anything from day one.”

Show instead:

- work exists first, not a PLAYER storefront;
- PLAYERs compete with PRICE + DELIVERY;
- KAPAPI removes invalid/ineligible options;
- task-specific trust/history matters;
- KAPAPI recommends one strongest fit;
- the GM can confirm with one clear action;
- alternatives remain available without forcing a giant comparison wall;
- the result closes the QUEST and creates better future data.

The recommendation surface should itself reduce decision burden.

---

## 5. Demonstrate the evolution visually

The long-term Outcome Layer is important, but it is future evolution.

Preferred visual progression:

```text
QUEST COMPLETE
→ PRICE / DELIVERY / fit / on-time / revision data
→ stronger task-specific trust
→ better recommendation
→ default routing
→ replacement/recovery
→ repeat capacity
→ WORK IN → RESULT OUT
```

If execution resources are shown, the mature layer may include:

- HUMAN PLAYER
- AI
- AUTOMATION
- SPECIALIST PARTNER
- HYBRID

Do not depict universal autonomous routing or SLA guarantees as current production behavior.

---

## 6. World-building is visual grammar

Use real state objects:

- `QUEST #0182`
- `BIDS 04`
- `PRICE`
- `DELIVERY`
- `TIME ATTACK`
- `RECOMMENDATION READY`
- `GM CONFIRMED`
- `PLAYER ASSIGNED`
- `LV.12`
- `QUEST COMPLETE`

Do not write essays explaining the world.

Do not invent pseudo-lore that has no product meaning.

---

## 7. Use believable work artifacts

Prefer:

- uploaded PDF/DWG/images/spreadsheets
- result ZIP/PDF/DWG/XLSX
- BID price + delivery values
- deadline timestamps
- task-specific history
- on-time/revision evidence
- recommendation rationale
- status transitions
- result checks
- video footage

The page should feel like a product in use, not a brochure about a future product.

---

## 8. Task-first supply proof

The PLAYER side is part of the product thesis, not a hidden implementation detail.

Show that a PLAYER can:

```text
작업 찾기
→ open QUESTs
→ 내가 할 수 있는 작업
→ inspect scope/deadline
→ BID PRICE + DELIVERY
```

Do not require a storefront-building visual before the earning opportunity exists.

---

## 9. Reference-site lesson

When studying strong global and Korean references, identify what they communicate through:

- scale
- product visuals
- imagery/video
- visual hierarchy
- progressive disclosure
- interaction
- concise labels

Do not extract only headings and rebuild them as prose-heavy sections.

---

## 10. Mandatory deletion pass

After implementing each landing section, temporarily remove supporting prose and ask:

- Is the main idea still understandable?
- Does one dominant visual artifact carry it?
- Can a short caption replace the paragraph?

If meaning collapses, improve the visual before restoring copy.

---

## 11. Rejection conditions

Reject a public section if:

- more than half its meaning is carried by prose;
- the product UI is secondary to explanation;
- it looks like documentation or a pitch-deck slide;
- it needs a numbered paragraph grid to feel complete;
- recommendation and assignment are visually indistinguishable;
- it implies day-one universal auto-routing;
- CAD/construction dominates category perception;
- the PLAYER supply path is reduced to generic seller/profile marketing.

---

## 12. Final visual communication QA

For each major section, answer YES to:

- Can the main idea be understood in 2–3 seconds?
- Is there one dominant product/media object?
- Does the actual UI demonstrate the claim?
- Is current behavior clearly distinguished from future evolution?
- Is recommendation clearly before GM confirmation/assignment?
- Is copy supporting rather than replacing the visual?
- Does the section feel like a premium product rather than documentation?

One-line rule:

> **Show the work moving. Let text label what the eye already understands.**
