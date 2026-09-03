# KAPAPI Prototype v2 — Hero Screen Compositing Authority

Status: **SUPERSEDED — 2026-09-03, by founder direction**  
Updated: **2026-09-03**

> **This document no longer governs the hero.** The founder supplied the hero film
> directly and instructed that it be used exactly as delivered: the file is served
> byte-for-byte, and it is never cropped, filtered, or drawn over. Compositing the
> product surface onto the laptop screen inside the footage — the technique this
> document made mandatory — is therefore prohibited, along with `object-fit: cover`,
> the legibility veil, and the headline overlay.
>
> The hero is now a two-column composition: the action on the left, the whole film
> on the right at its own 16:9 ratio. `scripts/hero-qa.mjs` holds the current rules
> and asserts them against the rendered page.
>
> **SUPERSEDED in full:** the old product choreography and vocabulary below are
> historical too. Current behavior follows D-033.1–.12, D-034 and D-035: execution-contract
> approval, internal procurement/assignment, then result acceptance/revision.
> `HERO_MEDIA.md`, `KAPAPI_MOTION.md` and `QA_CHECKLIST.md` govern current work.
> The homography work and prior acceptance criteria are preserved only as a record.

## 0. Intended hero effect

The laptop display inside the approved footage is an intended stage for real KAPAPI product UI.

Current visual story:

```text
user submits work
→ camera approaches laptop
→ real KAPAPI UI appears inside the laptop display
→ BIDs arrive
→ PRICE × DELIVERY / trust signals resolve
→ RECOMMENDATION READY
→ GM CONFIRMED
→ PLAYER ASSIGNED / WORK STARTED
→ RESULT READY
→ return to user / result check
→ subtle satisfied reaction
```

Do not replace this with a detached generic dashboard card beside the film.

Do not depict recommendation as autonomous assignment before GM confirmation.

---

## 1. Laptop screen is the primary compositing target

When the laptop screen is visible and large enough, prefer:

1. browser-layer overlay clipped/masked and perspective-transformed to the laptop quadrilateral;
2. robust precomposited screen replacement;
3. clean editorial cut from the laptop display into full-frame real KAPAPI UI and back.

Use keyframed transforms if camera movement requires it and tooling can do so robustly.

Do not build fragile tracking merely to demonstrate technical cleverness.

---

## 2. Honest fallback

If high-quality screen replacement is not reliable:

- preserve clean source footage;
- cut deliberately into real KAPAPI UI;
- return to live action for the payoff;
- record the limitation honestly.

A clean cut is better than a visibly fake overlay.

Never fake compliance with an unrelated floating panel.

---

## 3. Product UI choreography

Keep screen text extremely concise.

Preferred state sequence:

```text
QUEST CREATED
BIDS 01 → 02 → 03 → 04
ELIGIBILITY CHECK
₩118,000 · 5H
RECOMMENDATION READY
GM CONFIRMED
WORK STARTED
RESULT READY
```

The recommendation step may surface a few visible evidence signals such as:

- relevant completion history
- on-time rate
- revision rate
- PRICE
- DELIVERY

Do not show long explanations inside the cinematic sequence.

Do not show opaque AI-magic labels.

Do not skip directly from BIDs to `PLAYER ASSIGNED` in the current prototype story.

---

## 4. Relationship to the actual interactive flow

The cinematic hero can compress time, but it must preserve the same semantics as the interactive product:

```text
BIDs
→ KAPAPI recommendation
→ GM confirmation
→ assignment
```

The detailed interactive route may expose `왜 추천하나요?` and `다른 제안 보기`; the cinematic screen only needs enough evidence to make the recommendation feel grounded.

Long-term default routing is future evolution and should not be presented as current universal behavior.

---

## 5. Phone/result screen

Where the result is checked on a phone, show the real result state if technically practical:

- result object/file
- concise status
- delivery timing
- `결과 확인` / `수정 요청` where appropriate

If phone replacement is not robust, prioritize the laptop/full-frame product sequence and keep the final reaction natural.

---

## 6. Acting / ending

The user sees the result and gives only a small believable satisfied reaction.

Do not overlay:

- `GOOD DONE`
- `SUCCESS!`
- celebration language
- exaggerated testimonial/reaction copy
- confetti/trophy effects

Let the result state and acting carry the ending.

---

## 7. Composition rule

The movie and product UI should feel like one art-directed object.

Reject:

- video on one side + generic dashboard card on the other;
- arbitrary floating UI detached from the device/story;
- giant explanatory copy covering the film;
- fake generated readable device UI left as product truth;
- choreography whose states contradict the interactive product.

---

## 8. Mobile behavior

Below widths where the laptop screen is cropped or too small for a credible composite, a direct full-frame cut is acceptable and preferred.

Mobile does not need to reproduce desktop perspective compositing if doing so reduces readability or visual quality.

Both paths must preserve the same transaction semantics.

---

## 9. Technical proof before founder review

Before marking the current hero verified:

1. capture film / handover / recommendation / result beats;
2. inspect desktop compositing or deliberate cut;
3. inspect mobile crop/cut;
4. verify recommendation occurs before confirmation/assignment;
5. verify generated/fake readable UI is not authoritative;
6. verify first paint is not blocked by video download;
7. verify reduced-motion/poster fallback still communicates the primary task-entry action.

If perspective, clipping, timing or readability visibly fails, use the clean-cut fallback.
