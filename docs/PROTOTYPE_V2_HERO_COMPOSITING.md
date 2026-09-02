# KAPAPI Prototype v2 — Hero Screen Compositing Authority

Status: **mandatory hero-media implementation rule for `feat/prototype-v2`**  
Updated: **2026-09-02**

This document overrides any weaker or ambiguous hero-media interpretation in older files.

## 0. Intended hero effect

The laptop display inside the approved live-action hero footage is not decorative empty space.

**It is the intended stage for the KAPAPI product UI demonstration.**

The desired visual story is:

```text
user submits work
→ user leaves / camera approaches laptop
→ KAPAPI UI appears INSIDE the laptop display
→ BIDs arrive
→ PRICE × DELIVERY / trust signals resolve
→ ROUTING
→ PLAYER ASSIGNED
→ WORK STARTED / RESULT READY
→ cut/return to user elsewhere
→ result check
→ subtle satisfied reaction
```

Do not replace this idea with a separate dashboard card placed beside the video.

## 1. Laptop screen is the primary compositing target

When the laptop screen is visible and large enough, make a real attempt to place the real KAPAPI UI **within the screen quadrilateral**.

Preferred approaches, in order:

1. robust browser-layer overlay clipped/masked and perspective-transformed to the laptop screen;
2. precomposited screen replacement using available video/editing/FFmpeg/compositing tools;
3. clean editorial cut at the moment the laptop screen fills enough of the frame, transitioning into full-frame real KAPAPI UI and then back to live action.

If the camera movement requires multiple corner positions, use keyframed transforms or another robust technique if the available tooling can do it reliably.

Do not build fragile computer-vision tracking in the browser merely to show technical cleverness.

## 2. Honest fallback rule

If high-quality screen replacement is technically infeasible in the available environment:

- say so in the implementation report,
- keep the laptop screen neutral/clean or preserve the source footage,
- use a deliberate clean cut into real KAPAPI UI,
- then return to live action for the payoff.

**Never fake compliance by putting an unrelated UI panel beside the video.**

A clean cut is better than a visibly fake overlay.

## 3. Product UI shown inside the laptop

The laptop UI should visually demonstrate the product, not explain it with paragraphs.

Use concise state choreography such as:

```text
QUEST CREATED
BIDS 01 → 02 → 03
₩118,000 · 5H
₩132,000 · 6H
eligibility / trust indicators resolve
ROUTING
PLAYER ASSIGNED
WORK STARTED
RESULT READY
```

Keep text extremely short. The screen should feel like a real product in motion.

Do not show GM manual selection.

Do not show long routing explanations.

Do not show fake AI magic labels without evidence.

## 4. Phone screen

Where the result is checked on a phone, use the same principle if technically practical:

- real KAPAPI result/completion UI inside the phone,
- concise status,
- result object,
- `결과 확인` / `수정 요청` where appropriate.

If phone replacement is not robust, prioritize the laptop screen replacement and keep the final human reaction natural.

## 5. Acting / ending rule

The ending is visual, not verbal.

The user sees the work is complete and gives only a **small, believable satisfied reaction**.

Do not overlay or write:

- `GOOD DONE`
- `Good. Done.`
- `SUCCESS!`
- celebration language
- exaggerated relief
- testimonial-style copy

The face/reaction should carry the meaning.

## 6. Composition rule

The movie and product UI must feel like one art-directed object.

Reject:

- video on one side + generic black dashboard card on the other,
- arbitrary floating UI detached from the device,
- demo UI that does not align with the camera/story,
- giant explanatory text covering the film,
- fake generated device text left visible as product truth.

The transition should make the viewer feel that **KAPAPI continues working inside the device after the user leaves.**

## 7. Technical proof before founder review

Before marking the hero ready:

1. capture at least three frames from the laptop sequence,
2. verify the KAPAPI UI is convincingly contained in the screen or that the fallback cut is deliberate,
3. inspect at full desktop size and mobile crop,
4. verify no fake/garbled generated UI remains authoritative,
5. verify the first paint does not depend on video download,
6. verify reduced-motion/poster fallback still communicates the task-entry action.

If the screen replacement visibly breaks perspective, clipping, timing, or readability, reject it and use the clean-cut fallback.
