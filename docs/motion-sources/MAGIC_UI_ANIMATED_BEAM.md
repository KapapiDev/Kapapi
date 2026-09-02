# Magic UI Animated Beam — source capture and KAPAPI assessment

Status: **captured**  
Decision: **REMIX / P1**  
Primary KAPAPI use: **AUTOPILOT workflow / work-routing explanation**

---

## Core implementation captured

The component draws an SVG quadratic Bézier path between two live DOM elements (`fromRef` → `toRef`) inside a measured container. It uses `ResizeObserver` to recompute coordinates, then animates a moving linear gradient along that path with Motion.

Important implementation controls:

- `curvature`
- `reverse`
- `pathColor`
- `pathWidth`
- `pathOpacity`
- `gradientStartColor`
- `gradientStopColor`
- `delay`
- `duration`
- `repeat`
- `repeatDelay`
- start/end X/Y offsets

Default motion:

```ts
transition={{
  delay,
  duration,
  ease: [0.16, 1, 0.3, 1],
  repeat,
  repeatDelay,
}}
```

The animated gradient travels from one endpoint to the other; `reverse` swaps gradient direction.

---

## Demo patterns captured

### A. Single route

```text
USER → SYSTEM
```

One path between two nodes, typically around `duration={3}` in the demo.

### B. Bidirectional route

Two beams between the same endpoints with opposite curvature and one reversed:

```text
USER ⇄ SYSTEM
```

Useful only when two-way exchange is semantically real. Do not add double beams as decoration.

### C. Many inputs converging to one engine

Several external nodes route into a central processing node. Captured demos use multiple `AnimatedBeam` instances with different curvature/offset values.

```text
INPUT A ─┐
INPUT B ─┼→ ENGINE
INPUT C ─┘
```

### D. Many inputs → engine → output

The strongest KAPAPI-relevant demo topology:

```text
INPUTS → ENGINE → RESULT / USER
```

The source demos show several refs feeding a central node and the central node feeding one output node.

---

## Why it matters for KAPAPI

This is not a good primitive for ordinary product UI. It is useful because KAPAPI has one hard story to communicate visually:

> A GM should not have to manually coordinate every professional, document, contract, status, and delivery step. KAPAPI should absorb that orchestration and return a result.

The beam topology can help explain that orchestration before `AUTOPILOT_COLLAPSE` removes visible complexity.

Potential narrative:

```text
FILE
DEADLINE
QUALITY TARGET
        ↓
      KAPAPI
   ↙    ↓    ↘
PLAYER  NDA  QA
   ↘    ↓    ↙
      RESULT
```

Then, as the section progresses, PLAYER / NDA / QA / routing details disappear behind KAPAPI until the GM-facing view becomes:

```text
FILE + DEADLINE
      ↓
    KAPAPI
      ↓
    RESULT
```

That final collapse is KAPAPI-native. Animated Beam is only a visual primitive for the earlier orchestration state.

---

## Keep

- real endpoint measurement via refs
- quadratic path geometry
- dynamic path updates via `ResizeObserver`
- directional motion when direction has product meaning
- curved routes for legibility
- restrained path opacity
- one coherent motion stack using Motion

---

## Redesign / reject from reference

Do not copy the demo literally.

Reject or redesign:

- rainbow orange→purple gradients
- service-logo constellation aesthetic
- circles-with-logo integration-diagram look
- thick glowing paths
- perpetual animation on every route
- multiple beams moving at the same phase forever
- decorative two-way traffic
- generic “AI in the middle” visual language

KAPAPI is not an automation-integration SaaS. The section must communicate professional-work orchestration and result delivery, not app integrations.

---

## KAPAPI adaptation

### Visual language

Use KAPAPI design tokens rather than Magic UI defaults:

- hairline/static paths
- low-opacity graphite/neutral routes
- one restrained signal color only when the moving unit needs emphasis
- compact rectangular work objects instead of logo circles
- labels such as `QUEST`, `PLAYER`, `NDA`, `QA`, `DELIVERY`, `RESULT`
- no vendor logos unless a real integration is being explained

### Motion behavior

Prefer **event-driven traversal**, not endless ambient flow.

Example:

```text
1. FILE enters KAPAPI
2. scope resolves
3. route lights toward PLAYER
4. QA route resolves
5. RESULT exits
6. all paths settle to static
```

If used in an autoplay narrative, run one controlled cycle and pause. Re-loop only after a meaningful delay or explicit replay.

### Timing

The source defaults around 3–5 seconds are too slow for many product-state interactions, but can work for an explanatory narrative.

Provisional KAPAPI recommendation:

- route activation: ~500–900ms
- multi-step orchestration sequence: ~2.5–4s total
- no infinite repeat for core narrative
- use the captured `[0.16, 1, 0.3, 1]` ease only after visual QA, not as an unquestioned global token

---

## Performance / implementation notes

`ResizeObserver` + `getBoundingClientRect()` are appropriate for a small explanatory graph but should not be multiplied across large product surfaces.

Rules:

- keep beam count small
- do not run on hidden/inactive sections if avoidable
- pause or simplify under reduced motion
- prefer static connectors on mobile if motion adds clutter
- no beam animations in QUEST lists, BID tables, forms, or routine workroom UI

---

## Relationship to KAPAPI signature motion

### `AUTOPILOT_COLLAPSE`

Animated Beam is a **supporting primitive**, not the final motion.

Phase 1:

```text
GM INPUTS → KAPAPI → visible orchestration nodes → RESULT
```

Phase 2:

```text
orchestration nodes contract / fade / move behind KAPAPI
```

Phase 3:

```text
FILE + DEADLINE → KAPAPI → RESULT
```

The visual message must be:

> **KAPAPI gets better by removing GM-visible coordination.**

Not:

> “KAPAPI connects lots of apps.”

---

## Decision

**REMIX / P1**

High value for one strategic storytelling section. Low value for day-to-day application UI.

Use the geometry/path engine, discard the integration-SaaS styling, and combine it with the KAPAPI-native `AUTOPILOT_COLLAPSE` narrative.
