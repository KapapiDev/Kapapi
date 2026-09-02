# ReUI Timeline / Stepper / Progress — KAPAPI motion reference

Status: **captured**  
Decision: **ADOPT STATE MODEL / P0 for QUEST_PROGRESS, REMIX visuals**  
Primary KAPAPI use: **QUEST_PROGRESS / workroom status / delivery lifecycle**

---

## Captured reference families

The supplied source set contains multiple implementations of the same underlying state model:

1. ReUI `Timeline` vertical milestones
2. ReUI `Timeline` data-driven roadmap
3. ReUI `Timeline` activity history with per-step icons and timestamps
4. ReUI `Timeline` pipeline with `completed / active / pending`, badges, spinner, expandable detail
5. ReUI horizontal timeline
6. ReUI horizontal release/status timeline with `released / current / upcoming`
7. PatternFly `ProgressStepper` with explicit `success / danger / pending`
8. PatternFly step popovers
9. ReUI `Stepper` with `completed / loading / inactive`, panels and navigation
10. ReUI compact vertical `Stepper`
11. Progress bar with changing status copy
12. Static progress bar
13. Progress bar + completed-step checklist

The most useful KAPAPI references are #4, #6, #7, #9 and #13.

---

## Best source pattern: pipeline timeline

The strongest supplied pattern is the data-driven pipeline model:

```tsx
const pipelineSteps = [
  {
    id: 1,
    title: "Source Code Checkout",
    duration: "12s",
    status: "completed",
    description: "Successfully fetched latest changes from the main branch.",
  },
  {
    id: 2,
    title: "Dependency Installation",
    duration: "1m 45s",
    status: "completed",
  },
  {
    id: 3,
    title: "Unit & Integration Tests",
    duration: "Running",
    status: "active",
  },
  {
    id: 4,
    title: "Production Build",
    duration: "Pending",
    status: "pending",
  },
]
```

with explicit visual states:

```tsx
function StatusIcon({ status }: { status: string }) {
  if (status === "completed") return <CheckIcon className="size-3.5" />
  if (status === "active") return <Spinner className="size-3.5" />
  return <CircleIcon className="size-3.5" />
}
```

This is much more useful to KAPAPI than a generic chronological timeline because it encodes **operational state**, not just dates.

---

## KAPAPI mapping

Use the state model, not the CI/CD visual styling.

Recommended QUEST lifecycle:

```text
PLAYER SELECTED
→ WORK STARTED
→ IN PROGRESS
→ FILE DELIVERED
→ GM REVIEW
→ QUEST COMPLETE
```

Possible exception states:

```text
REVISION REQUESTED
BLOCKED: INPUT NEEDED
PLAYER REPLACED
DELIVERY LATE
DISPUTE / SUPPORT
```

For the first prototype, exception states should remain visually possible but not dominate the main happy-path demo.

---

## State semantics

### Completed
- check or filled indicator
- metadata becomes quieter after completion
- exact timestamp may appear
- should feel locked, not celebrated

### Active
- strongest current-state emphasis
- compact status label
- subtle activity motion allowed
- only the active state should continuously move

### Pending
- visible but low contrast
- no motion
- no fake countdown or artificial urgency

### Failed / blocked
The PatternFly reference is valuable because it proves the timeline should not assume every step succeeds:

```tsx
<ProgressStep variant="danger" isCurrent>
  Fourth step
</ProgressStep>
<ProgressStep variant="pending">
  Fifth step
</ProgressStep>
```

KAPAPI should preserve a distinct blocked/failure model instead of turning every problem into the same amber badge.

---

## KAPAPI animation direction

The supplied ReUI examples are primarily **state/UI references**, not complete motion systems. Do not pretend they provide a signature animation by themselves.

KAPAPI should animate state progression using the Motion primitives already captured elsewhere:

```text
CURRENT STATE changes
→ indicator moves / state label changes
→ connector resolves forward
→ previous state settles
→ next state becomes legible
```

Suggested behavior:

- state switch: ~180–280ms
- connector fill/change: ~220–350ms
- active indicator: sparse low-amplitude activity only
- completed indicators: static
- pending indicators: static
- no bouncing checkmarks
- no confetti
- no continuous full-timeline animation

The active step may use a precise spinner or restrained pulse. Everything else should become quieter, producing a sense of forward operational certainty.

---

## Horizontal vs vertical

### Vertical timeline
Best for:
- Workroom
- detailed QUEST progress
- timestamps / notes / files / revision events
- mobile

### Horizontal stepper
Best for:
- compact QUEST summary
- desktop header/status strip
- prototype demo where the entire lifecycle needs to be understood instantly

Recommended prototype approach:

```text
QUEST detail header: compact horizontal lifecycle
Workroom: richer vertical event history
```

Do not duplicate two equally prominent progress systems on the same screen.

---

## Why the pipeline example is stronger than a normal timeline

The basic timeline examples such as:

```text
Project Initialized
Beta Release
Official Launch
```

are useful only structurally. They describe historical milestones.

KAPAPI needs an **operational state machine**, closer to the supplied pipeline and stepper references:

```text
completed
active
pending
failed/blocked
```

That distinction matters because the GM's question is not “what happened historically?” but:

> Where is my work right now, and will I get a usable result on time?

---

## Progress bar assessment

The supplied progress examples are secondary references only.

A numeric progress bar like `70%` should **not** be shown for professional work unless the percentage has a real, defensible meaning. Fake 63% completion creates false precision.

Use progress bars only for truly measurable operations such as:

- file upload
- file processing
- export
- verification

For human professional work, prefer discrete states and timestamps.

The changing-status progress example is still useful as a copy-pattern reference:

```text
Initializing...
Verifying...
Processing...
Finalizing...
Complete
```

but KAPAPI should map this only to machine-verifiable sub-processes, not pretend a PLAYER's design/CAD work is 72% complete.

---

## Expandable detail assessment

The collapsible pipeline card is useful for keeping the main timeline compact while exposing detail on demand.

Potential KAPAPI detail contents:

- PLAYER status note
- delivered file
- requested input
- revision message
- timestamp
- verification result

Avoid turning every timeline step into a large card. The lifecycle line should remain scannable in under a few seconds.

---

## Visual rules for KAPAPI

Keep:
- explicit completed/current/pending semantics
- timestamps
- state-specific indicator
- connector between states
- optional concise detail
- horizontal + vertical variants for different contexts
- failure/block state

Redesign/remove:
- generic colorful badges
- large rounded SaaS cards
- avatar on every step
- excessive icons
- decorative status colors everywhere
- spinning elements outside the current active state
- generic roadmap aesthetics
- fake percent completion for human work

KAPAPI treatment should use neutral surfaces, hairlines, restrained state accent, compact mono metadata, and strong status typography.

---

## Signature QUEST_PROGRESS concept

The final KAPAPI motion should not literally copy ReUI's timeline.

A recommended sequence:

```text
PLAYER SELECTED       14:06   ✓
        │
WORK STARTED          14:12   ✓
        │
IN PROGRESS           NOW     ●
        │
FILE DELIVERED        —       ○
        │
GM REVIEW             —       ○
        │
QUEST COMPLETE        —       ○
```

When progress advances:

1. current indicator resolves
2. connector advances to next node
3. previous node settles to completed
4. next state becomes current
5. metadata/timestamp updates

For the flagship prototype, the final transition should land in the separately defined `QUEST_COMPLETE` signature rather than ending with a generic green check.

---

## Decision

**ADOPT STATE MODEL / P0 for QUEST_PROGRESS**

This closes the main missing motion/system slot in the KAPAPI reference set.

The timeline/stepper references should supply **state semantics and information architecture**. The actual motion language should be synthesized from the previously captured Motion layout/shared-layout primitives and KAPAPI timing rules.

No additional timeline/stepper references are required before writing the canonical `KAPAPI_MOTION.md`.
