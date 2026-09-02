# Prototype v2 — Visual-First Communication Rules

Status: **mandatory for `feat/prototype-v2`**  
Updated: **2026-09-02**

This document exists because Prototype v1 repeatedly explained the product with paragraphs, step lists, and dense copy where the interface should have demonstrated the idea visually.

KAPAPI v2 must follow this rule:

> **If the product can show it, do not explain it in a paragraph.**

The public landing page is not a strategy memo, product-spec page, pitch deck, or documentation site.

---

# 1. Visual proof before prose

For every public section, ask in this order:

1. Can this idea be understood through a real product state?
2. Can it be understood through motion / transition / before→after?
3. Can it be understood through one strong artifact, screenshot, video, card, timeline, file object, or interaction?
4. Can short labels/captions finish the explanation?
5. Only if all of the above fail, use a short explanatory sentence.

A paragraph is the last resort.

---

# 2. Public copy budget

The landing page should not contain long explanatory blocks.

Default copy limits per section:

- eyebrow / label: 1 short line
- headline: preferably 1–2 lines
- supporting copy: 0–2 short sentences
- body explanation: avoid by default
- bullets: use only when the visual artifact cannot carry the meaning

If a section needs multiple paragraphs to make sense, redesign the section instead of adding more text.

Do not stack:

`headline → paragraph → paragraph → 4 numbered explanations → another paragraph`

That is a visual-design failure condition.

---

# 3. Show KAPAPI's product thesis visually

Bad pattern:

```text
맡기고 나면, 할 일이 하나 남습니다

[long explanation of how the user no longer compares bids]

01 일을 접수합니다
02 전문가들이 제안합니다
03 카파피가 배정합니다
04 결과만 확인합니다
```

This is documentation disguised as a landing page.

Preferred pattern:

```text
[GM drops file]
          ↓
[QUEST CREATED]
          ↓
[BIDs arrive visually]
          ↓
[ROUTING resolves]
          ↓
[PLAYER ASSIGNED]
          ↓
[GM is visibly absent from the middle]
          ↓
[RESULT READY reaches GM]
```

Use motion, product UI, real files, timing, state labels, and composition to make the thesis self-evident.

A visitor should be able to understand the section even if most body copy is removed.

---

# 4. The 'messy middle' must be demonstrated, not described

The core differentiation is that KAPAPI handles the sourcing/selection middle.

Do not explain that difference mainly with paragraphs.

Show it using an actual visual sequence such as:

- multiple BIDs entering
- PRICE × DELIVERY resolving
- qualification/trust evidence appearing
- ineligible BIDs falling away
- routing state activating
- one PLAYER being assigned
- the original GM not clicking anything
- work progressing
- result arriving

The absence of a GM-selection control should itself communicate the product difference.

---

# 5. World-building is visual grammar

Do not write essays explaining the KAPAPI world.

Use the world through live product objects:

- `QUEST #0182`
- `BIDS 07`
- `TIME ATTACK · 04:18:22`
- `PLAYER ASSIGNED`
- `REWARD ₩120,000`
- `DELIVERY ≤ 6H`
- `LV.12`
- `+240 EXP`
- `QUEST COMPLETE`

World-building should be visible in labels, states, timing, motion, hierarchy and reputation data.

If a section has to say “KAPAPI has a game-like world” in prose, the section has failed.

---

# 6. Use real visual artifacts

Prefer visible, believable work objects over descriptive text:

- uploaded DWG/PDF/image files
- result ZIP/PDF/DWG
- annotated preview
- submission timestamp
- delivery delta
- BID price + time
- profile career evidence
- routing evidence
- task status
- notification/result moment
- video footage

The page should feel like a product in use, not a brochure explaining a future product.

---

# 7. Reference-site lesson

When studying Upwork, Kmong, Wishket, Soomgo, Mercury, Linear, Vercel, Factory, Raycast and Hyperstudio, pay attention to how strong landing pages **show** value through:

- scale
- product visuals
- imagery/video
- visual hierarchy
- composition
- progressive disclosure
- interaction
- short copy

Do not extract only text hierarchy and then rebuild it as headings + paragraphs.

Reference analysis must explicitly identify:

> What is communicated visually here that KAPAPI v1 would have tried to explain in text?

---

# 8. Mandatory deletion pass

After implementing each landing section, perform a **copy-deletion pass**.

Temporarily remove the supporting paragraphs and ask:

- Is the concept still understandable?
- Does the visual artifact communicate the point?
- Can one short caption replace the paragraph?

If removing text destroys comprehension, improve the visual communication before restoring prose.

Target:

> the page should become stronger, not weaker, when unnecessary copy is deleted.

---

# 9. Rejection conditions

Reject and redesign any public section that resembles:

- documentation
- a strategy memo
- a pitch-deck text slide
- an FAQ answer
- a four-column numbered explanation grid with paragraphs
- a dense feature-comparison article
- a product manual

Also reject if:

- more than half the section's meaning is carried by prose
- the product UI is secondary to explanatory text
- a user has to read every sentence to understand the interaction
- the section is visually empty after paragraphs are removed
- the section uses numbers (`01 / 02 / 03 / 04`) merely to disguise a wall of text

---

# 10. Final visual communication QA

For every major landing section, Claude Code must be able to answer YES to:

- Can I understand the main idea in 2–3 seconds without reading the body copy?
- Is there one dominant visual object or interaction?
- Does the actual KAPAPI product state demonstrate the claim?
- Is copy supporting the visual rather than replacing it?
- Could at least 30–50% of the explanatory text be deleted without losing the idea?
- Does the section feel like premium web design rather than documentation?

If not, redesign before founder review.

One-line rule:

> **Show the work moving. Let text label what the eye already understands.**
