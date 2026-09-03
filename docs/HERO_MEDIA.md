# KAPAPI Hero Media / Product-Movie Specification

Status: **current v2 hero media authority**  
Updated: **2026-09-03**

The hero movie should visually support the current D-032 transaction without baking fake generated product UI into the film.

## 1. Narrative thesis

The human story is simple:

```text
SUBMIT WORK
→ KAPAPI MARKET ACTIVITY APPEARS
→ RECOMMENDATION
→ GM CONFIRMS
→ WORK / RESULT
→ QUICK RESULT CHECK
→ QUIET SATISFACTION
```

The current prototype does **not** claim that a GM can always disappear immediately after submission while KAPAPI universally auto-routes everything.

The cinematic sequence may compress the GM confirmation into one clean product beat, but it must remain semantically present.

---

## 2. Product behavior represented

Current middle sequence:

```text
BIDs arrive
→ eligibility / PRICE × DELIVERY / trust evidence resolves
→ KAPAPI recommendation
→ GM confirmation
→ assignment
→ work progress
→ result ready
```

Ending:

```text
result ready
→ result view
→ accept / revision path
```

Long-term `work in → result out` may appear only as a clearly future-oriented product evolution message outside or after the current transaction proof.

---

## 3. Current repository assets

The v2 branch currently contains:

- `/public/media/kapapi-hero.mp4`
- `/public/media/kapapi-hero-poster.jpg`

The application references these through a media constant rather than temporary local filenames.

Historical source-generation/rough-cut notes may remain in research files, but generated readable UI is never product truth.

---

## 4. Generated UI is disposable

If source footage contains:

- fake product text
- incorrect brand names
- distorted buttons
- generic dashboards
- unreadable AI-generated UI

replace, cover or cut away from it.

Preferred final structure:

```text
LIVE ACTION
→ CAMERA APPROACHES LAPTOP
→ REAL KAPAPI HTML/CSS UI
   BIDS → FILTER → RECOMMENDATION → GM CONFIRMED → RESULT
→ LIVE ACTION / RESULT PAYOFF
```

---

## 5. Website integration

The task-entry surface remains the strongest above-the-fold product object.

Video/product movie is supporting proof.

Media component should support:

- muted
- playsInline
- poster
- reduced-motion/static fallback
- responsive crop
- mobile fallback
- no layout shift
- primary text/input before heavy media dependency

Do not make autoplay media the primary interaction.

---

## 6. Laptop screen replacement

When the laptop screen is visible and sufficiently large, real KAPAPI UI should be integrated through one of:

1. browser-layer perspective overlay;
2. robust precomposited replacement;
3. clean editorial cut into full-frame real UI.

Do not build fragile browser CV tracking merely to show complexity.

On mobile/narrow layouts where the laptop is cropped, direct full-frame product UI is acceptable and preferred.

---

## 7. Current hero UI choreography

Canonical sequence:

```text
QUEST CREATED
→ BIDS 01 / 02 / 03 / 04
→ ELIGIBILITY CHECK
→ RECOMMENDATION READY
→ GM CONFIRMED
→ RESULT READY
```

Useful visible evidence:

- PRICE
- DELIVERY
- relevant completion history
- on-time rate
- revision rate

Inside the cinematic UI, keep the explanation compact. The detailed interactive route may show full rationale and alternatives.

Do not use `PLAYER ASSIGNED` before `GM CONFIRMED` in the current product narrative.

---

## 8. Category neutrality

Hero task examples and product imagery must not make KAPAPI look like an Architecture/CAD service.

The set should suggest multiple forms of bounded digital work, such as:

- PDF/data/spreadsheet
- image/e-commerce
- document/PPT
- CAD/skilled support

A detailed CAD case may live below the hero.

---

## 9. Human payoff

The ending should be quiet and believable.

Do not use:

- `GOOD DONE`
- `SUCCESS!`
- exaggerated celebration
- testimonial copy
- confetti/trophy imagery

The result object and subtle human reaction carry the payoff.

---

## 10. Responsive / reduced motion

Desktop may use the laptop compositing effect.

Mobile may cut directly to product UI when device framing makes compositing meaningless.

Reduced-motion path should show a strong static/poster state and preserve:

- task-entry action
- current product promise
- result-oriented meaning

No critical product fact should exist only inside autoplay motion.

---

## 11. Verification

Before current hero is considered visually verified:

- capture desktop and mobile states;
- inspect film/composite/full-frame timing;
- verify recommendation occurs before confirmation/assignment;
- verify no generated fake readable UI is authoritative;
- verify first paint/task input does not depend on video download;
- verify fallback/reduced-motion behavior;
- verify actual deployed Preview when current Vercel access is available.

Historical `d003027` Preview QA does not prove the latest D-032-aligned branch head.
