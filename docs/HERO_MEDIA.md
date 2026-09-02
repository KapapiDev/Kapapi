# KAPAPI Hero Media / Product-Movie Specification

Status: **Prototype v1 hero media integration authority**  
Updated: **2026-09-02**

This document records the approved hero-media concept and how Claude Code should integrate it without baking fake product UI into generated video.

---

## 1. Narrative thesis

The hero movie should communicate one idea visually:

> **The GM hands off the work, leaves, KAPAPI handles the messy middle, and the result returns while the GM continues with other work.**

Human story:

```text
SUBMIT WORK
→ WALK AWAY
→ KAPAPI HANDLES IT
→ RESULT ARRIVES
→ QUICK REVIEW
→ BACK TO LIFE / OTHER WORK
```

The GM should visibly stop managing the transaction after submission.

---

## 2. Product behavior represented

The middle of the story represents:

```text
BIDs arrive
→ eligibility / PRICE × DELIVERY / trust / task-fit evaluation
→ KAPAPI auto-routing
→ assignment
→ work progress
→ result ready
```

This is not a GM BID-comparison scene. The GM is absent while routing happens.

The ending represents:

```text
completion notification
→ result view
→ accept / revision path
```

The emotional payoff is quiet confidence, not celebration.

---

## 3. Current footage status

The current conversation produced usable source material, but the binary assets are **not yet committed to this repository**.

Current working assets:

### A — Google Flow primary live-action source

Working filename used in the session:

`Man_using_laptop_and_smartphone_202609021606.mp4`

Useful content:

- GM at laptop
- final submission/click moment
- subtle sapphire/blue confirmation signal
- GM stands/leaves
- camera approaches laptop
- cut to GM in a different professional setting using a phone

Assessment during review: strongest overall live-action master source.

### B — Dreamina human payoff / continuation

Working filename:

`dreamina-2026-09-02-4899-Create an 8-second, 16_9, ultra-realisti....mp4`

Useful content:

- similar GM identity / grey top
- different professional setting
- completion notification
- `View Result` / revision concept
- result check
- restrained satisfied reaction

This is useful as an alternate/final human payoff cut if it edits better than the Flow ending.

### C — Dreamina clean transition source

Working filename:

`dreamina-2026-09-02-1990- Create an 8-second, 16_9, ultra-realist....mp4`

Actual generated duration was approximately four seconds because the generation UI was accidentally left on 4s.

Useful content:

- empty office / desk
- open laptop
- push-in toward laptop screen

This can be used as an optional transition plate if it improves continuity. It is not mandatory if the Flow push-in is cleaner.

### D — working rough cut

A local rough cut was assembled in the conversation:

`KAPAPI_hero_rough_cut_v1.mp4`

Approximate duration: **15.33s**.

It combined:

```text
Flow submit/leave
→ Dreamina clean transition
→ Dreamina payoff
```

This rough cut is a structural reference, not a final production asset.

---

## 4. Critical implementation rule: generated UI is disposable

AI-video-generated laptop/phone UI is **not** authoritative KAPAPI UI.

If generated footage contains:

- fake product text,
- incorrect brand names,
- distorted buttons,
- generic dashboards,
- unreadable AI text,

replace or cover it in post/compositing/product implementation.

Preferred final structure:

```text
LIVE ACTION
GM submits / leaves

→ CAMERA APPROACHES LAPTOP

REAL KAPAPI HTML/CSS UI
BID ARRIVAL → ROUTING → ASSIGNED → PROGRESS → RESULT READY

→ LIVE ACTION
GM receives result elsewhere
```

The KAPAPI UI segment should be real browser/product UI, not text rendered by a video model.

---

## 5. Website integration strategy

### Hero priority

The task-entry surface remains the strongest object above the fold.

Approximate visual emphasis target:

- task/promise/action: **~60%**
- video/product movie: **~40%**

This is a guideline, not a rigid CSS ratio.

Do not let autoplay media steal focus from `일 맡기기`.

### Recommended implementation

Build a media component that supports:

- `<video>` source when final asset becomes available
- `muted`
- `playsInline`
- autoplay only when appropriate
- poster image
- reduced-motion/static fallback
- mobile fallback
- clean aspect-ratio behavior
- no layout shift

Suggested component responsibility:

`HeroProductMovie`

Do not hard-wire the page to a temporary filename. Use an explicit asset constant/config.

---

## 6. Real UI overlay / transition concept

When the laptop display becomes large enough, transition visually into the real KAPAPI product shell.

Acceptable techniques:

1. hard/soft cut at a near-full-screen display frame,
2. masked/corner-pinned screen replacement in final edited media,
3. browser-layer overlay timed to the footage,
4. shared visual composition where the video fades and real UI inherits the same screen field.

For the web prototype, option 3 or 4 is preferred if it remains robust and performant.

Do **not** spend prototype time building complex computer-vision tracking in the browser.

A convincing editorial transition is better than fragile technical theatre.

---

## 7. KAPAPI UI choreography inside hero

Current semantic sequence:

```text
WORK SUBMITTED
→ BIDS 01 / 02 / 03 arrive
→ routing signals resolve
→ KAPAPI assigns best-fit PLAYER
→ WORK STARTED
→ FILE DELIVERED
→ RESULT READY
```

Make the sequence readable without requiring paragraph text.

Useful visible evidence:

- PRICE
- DELIVERY
- relevant history
- on-time rate
- small routing rationale

Do not show the GM pressing a selection button.

The selected PLAYER state is a system-routing state.

---

## 8. Signature click feedback

The sapphire/blue click feedback from the video experiments was approved as a useful brand interaction direction.

Use it as a restrained KAPAPI submission confirmation:

- roughly 0.2–0.4s
- localized around the confirmed control/screen interaction
- no room-wide blue wash
- no neon/cyberpunk treatment
- no repeated pulsing

The real web CTA may echo this behavior in a subtle KAPAPI-native form.

Do not literally imitate a video-model artifact if it conflicts with accessibility or the visual system.

---

## 9. Category neutrality

The master hero video must not become CAD-specific, coding-specific, design-specific or any other profession-specific story.

The hero should represent **professional work being handed off**, not one category.

Specific CAD material belongs in the flagship case study below the hero.

For the result screen in hero media, keep output visually generic or abstract enough that the viewer reads `work result`, not `CAD service`.

---

## 10. Acting / cinematography tone

Target:

- photorealistic
- premium Korean tech-commercial feel
- calm
- restrained
- believable professional environment
- natural light
- no stock-ad grin
- no celebration
- no looking at camera
- no exaggerated relief

The final human reaction should mean:

> “Good. Done.”

not:

> “This app changed my life!”

---

## 11. Prototype behavior while final media is unavailable

Do not block implementation waiting for the final MP4.

Until the approved media asset is placed in the repository/project:

- implement the final media container and responsive behavior,
- use a neutral placeholder/poster with the correct composition,
- implement the real KAPAPI UI animation separately,
- expose a clear asset path/config location,
- document where the final video should be dropped.

Do not replace the missing video with a random stock clip.

Do not invent a new AI-generated hero image.

---

## 12. Final asset acceptance

Before an MP4 becomes the public hero master, verify:

- same GM identity reads consistently enough across cuts,
- no sudden appearing/disappearing props that are visually distracting,
- no visible AI-video watermark,
- no third-party logos requiring removal,
- no authoritative fake KAPAPI UI remains visible,
- transition into real product UI is believable,
- media does not make the service look category-specific,
- mobile crop does not destroy the story,
- text/task entry remains dominant,
- loading behavior does not harm first paint.

The final media is supporting evidence for the product thesis, not the product itself.
