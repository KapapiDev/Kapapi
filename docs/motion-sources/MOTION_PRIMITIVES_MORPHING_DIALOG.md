# Motion Primitives Morphing Dialog — source capture and KAPAPI assessment

Status: **captured**  
Decision: **ADOPT PATTERN / P1**  
Primary KAPAPI use: **QUEST card → QUEST detail / PLAYER card → PLAYER profile**

---

## Why this reference matters

This pattern is materially useful because it preserves object continuity. Instead of clicking a card and hard-cutting to a modal or new page, the same visual object expands into its detailed state using shared `layoutId` identities.

That is a better fit for KAPAPI than a generic modal animation because the user should feel that they are opening the same QUEST or PLAYER object they just selected.

---

## Captured implementation traits

The full source uses:

- `motion/react`
- `AnimatePresence`
- `MotionConfig`
- React portal via `createPortal`
- shared `layoutId` between trigger and dialog content
- shared `layoutId` for title, subtitle, image and optional description
- backdrop fade
- focus trapping
- Escape-to-close
- click-outside-to-close
- body scroll lock while open
- focus restoration to the trigger on close
- semantic dialog roles and ARIA state

These are important because the reference is not merely a visual trick. It includes interaction and accessibility behavior that should be preserved when KAPAPI adapts the pattern.

---

## Core implementation pattern

The useful primitive is the shared-layout relationship:

```tsx
<motion.button layoutId={`dialog-${uniqueId}`}>
  ...
</motion.button>
```

and:

```tsx
<motion.div layoutId={`dialog-${uniqueId}`} role="dialog">
  ...
</motion.div>
```

with nested shared elements such as:

```tsx
layoutId={`dialog-title-container-${uniqueId}`}
layoutId={`dialog-subtitle-container-${uniqueId}`}
layoutId={`dialog-img-${uniqueId}`}
```

This lets the object visually transform rather than disappear and be replaced.

---

## Captured demo variants

### Demo A — card to rich detail

Transition:

```ts
{
  type: 'spring',
  bounce: 0.05,
  duration: 0.25,
}
```

The trigger is a compact card and the detail view is a larger bordered panel. Extra description content enters separately with:

```ts
initial: { opacity: 0, scale: 0.8, y: 100 }
animate: { opacity: 1, scale: 1, y: 0 }
exit: { opacity: 0, scale: 0.8, y: 100 }
```

KAPAPI note: **do not copy the large `y: 100` / `scale: 0.8` treatment.** The shared-object morph is valuable; the dramatic content pop is not.

### Demo B — compact row to scrollable detail

Transition:

```ts
{
  type: 'spring',
  stiffness: 200,
  damping: 24,
}
```

This is closer to a KAPAPI QUEST/PLAYER row becoming a detailed inspection surface.

### Demo C — image to fullscreen detail

Transition:

```ts
{
  duration: 0.3,
  ease: 'easeInOut',
}
```

Useful only as evidence that shared-element morphing does not require spring motion. KAPAPI should generally prefer restrained mechanical timing when a spring is not adding meaning.

---

## KAPAPI adaptation

### Primary application A — QUEST card → QUEST detail

```text
QUEST card selected
→ card bounds expand or morph into detail surface
→ QUEST title remains visually continuous
→ TIME ATTACK / deadline / budget remain anchored
→ additional brief, files and BID activity appear
```

The user should perceive:

> “I opened this QUEST.”

not:

> “A modal appeared on top of the site.”

### Primary application B — PLAYER card → PLAYER profile

```text
PLAYER identity / name / trust summary
→ same identity persists into expanded profile
→ relevant career, completed QUESTS, on-time rate and recent history appear
```

This can make trust inspection feel fast and tactile without forcing a full navigation change.

### Possible application C — delivered file preview

A small delivered-file thumbnail or file row may morph into a larger preview/review surface, but only if the prototype includes a meaningful preview state.

---

## What to keep

- shared `layoutId` object continuity
- short transition around 200–300ms as baseline
- very low or zero bounce
- stable title / identity continuity
- separate fade for backdrop
- focus trap
- Escape close
- click-outside close where appropriate
- return focus to trigger
- scroll lock while true modal is active
- ARIA dialog semantics

---

## What to remove or redesign

- oversized 12px → 24px radius morph if it conflicts with KAPAPI's tighter radius system
- dramatic description entrance (`scale: 0.8`, `y: 100`)
- image-gallery/product-card aesthetics
- excessive modal use
- large blur backdrop if it weakens the operational product feel
- spring bounce that makes the interface feel playful

---

## KAPAPI motion recommendation

For a QUEST/PLAYER morph, start with something close to:

```ts
{
  type: 'spring',
  bounce: 0,
  visualDuration: 0.24,
}
```

or a non-spring equivalent around `220–280ms` with KAPAPI's standard easing.

This is a design recommendation, not a requirement copied from the source. Final timing belongs in `KAPAPI_MOTION.md`.

The expansion should feel like a precision instrument opening, not a card zooming toward the user.

---

## Important product rule

Do not use morphing dialogs simply because they look polished.

Use them only where **object continuity reduces cognitive load**:

- QUEST summary → same QUEST detail
- PLAYER summary → same PLAYER detail
- potentially file result → same result preview

Ordinary settings, confirmations, forms and legal dialogs should use simpler transitions.

---

## Accessibility note

The captured implementation includes meaningful accessibility behavior beyond animation:

- keyboard activation
- `aria-haspopup="dialog"`
- `aria-expanded`
- `aria-controls`
- `role="dialog"`
- `aria-modal="true"`
- `aria-labelledby`
- `aria-describedby`
- Escape handling
- tab-cycle focus trap
- focus restoration

KAPAPI should preserve these behaviors if the pattern is implemented rather than rebuilding only the visual morph.

---

## Final decision

**ADOPT PATTERN / P1**

This becomes the strongest current reference for KAPAPI's object-to-detail transition.

It is not a signature marketing animation. It is a **product-quality interaction primitive** that can make the prototype feel substantially more coherent and deliberate.
