# KAPAPI Motion System

Status: **canonical motion specification for Prototype v1**  
Updated: **2026-09-02**  
Authority: this document overrides provisional motion-reference priority when they conflict.

KAPAPI motion exists to explain work moving through a system.

> **The product should feel alive because a QUEST is changing state, not because the website is performing tricks.**

This document converts the collected references into one KAPAPI-native motion language. Reference components are evidence and implementation material, not a component shopping list.

---

## 1. Motion goals

Every meaningful animation must do at least one of the following:

1. explain a product state change,
2. make live market activity legible,
3. clarify a GM decision,
4. preserve object continuity between views,
5. communicate the result-first product thesis,
6. add tactile quality without competing with the work itself.

If an animation does none of these, remove it.

KAPAPI's motion character is:

- **precise** rather than playful,
- **mechanical** rather than bouncy,
- **low-amplitude** rather than theatrical,
- **state-driven** rather than decorative,
- **fast enough to feel operational** but not nervous,
- **quiet at rest**.

The interface should spend most of its time still.

---

## 2. Core motion principles

### 2.1 State before spectacle

Animation begins because something real happened:

- a BID arrived,
- a PLAYER was selected,
- a delivery commitment changed,
- a file was delivered,
- a QUEST advanced,
- a QUEST completed.

Do not animate simply because a section entered the viewport.

### 2.2 Objects should appear to persist

When the same object exists before and after an interaction, preserve continuity.

Examples:

- QUEST card → QUEST detail
- PLAYER card → PLAYER profile
- selected BID → selected PLAYER state
- timeline stage → completed stage

Prefer shared-layout / morphing behavior over destroying one object and fading in an unrelated replacement.

### 2.3 Motion amplitude must be small

Most product-state motion should use:

- opacity,
- small Y/X translation,
- border/background/state changes,
- layout reflow,
- number interpolation.

Avoid large scale changes, 3D rotation, floating cards, dramatic depth, or overshoot.

### 2.4 One focal motion at a time

At any moment, the viewer should know what changed.

Do not let:

- hero autoplay,
- countdown pulses,
- animated diagrams,
- list insertion,
- decorative beams

all compete simultaneously.

As a general composition rule, only a small minority of the visible viewport should be moving at once.

### 2.5 Motion teaches hierarchy

The sequence should follow product importance.

For a BID:

`BID RECEIVED → PLAYER → PRICE × DELIVERY → TRUST → settled comparison`

For completion:

`QUEST COMPLETE → result file → delivery proof → verification → EXP`

The most important information resolves first.

---

## 3. Canonical timing system

These are Prototype v1 defaults. Individual interactions may vary when usability requires it, but deviations should be deliberate.

| Token | Target | Use |
| --- | ---: | --- |
| `MOTION_MICRO` | **140ms** | hover, press, focus, small affordance |
| `MOTION_STATE` | **220ms** | selected state, status change, BID entry shell |
| `MOTION_LAYOUT` | **260ms** | meaningful reflow/reordering |
| `MOTION_MAJOR` | **340ms** | dialog/object morph, delivery/completion panel |
| `MOTION_NARRATIVE` | **560ms** | one hero/Autopilot story step |
| `MOTION_AMBIENT` | **3–6s** | rare low-frequency live signal only |

### Easing

Primary product ease:

`cubic-bezier(0.4, 0, 0.2, 1)`

Primary settle/out ease:

`cubic-bezier(0.16, 1, 0.3, 1)`

Primary enter ease:

`cubic-bezier(0.22, 1, 0.36, 1)`

### Spring rule

Springs are allowed mainly for layout continuity where they improve spatial understanding.

Preferred character:

- high damping,
- little or no visible bounce,
- fast settling,
- no elastic overshoot.

A practical starting point for Motion layout work is approximately:

- stiffness: **300–340**
- damping: **30–36**
- mass: **0.7–0.9**

Tune visually. The target is not to expose the spring. The target is to make repositioning feel physically continuous.

---

# 4. Signature KAPAPI motions

## MOTION-A — `BID_ARRIVAL`

**Priority: P0**  
Primary building blocks: Magic UI Animated List + Motion `layout` / reordering + Number Flow.

### Product meaning

A new professional has committed a real PRICE and DELIVERY TIME to the QUEST.

### Sequence

```text
BID RECEIVED
→ new BID enters the comparison set
→ existing BIDs move only enough to make room
→ PRICE / DELIVERY values resolve
→ TRUST becomes readable
→ comparison set settles
```

### Required behavior

- new BID insertion must not cover or throw away existing BIDs,
- existing cards reflow through layout animation,
- newest BID may receive a short restrained state accent,
- numeric values may use Number Flow when they genuinely change,
- GM can compare immediately after the transition.

### KAPAPI entry treatment

Prefer:

- `opacity 0 → 1`,
- small vertical translation such as roughly 6–10px,
- layout-driven repositioning,
- hairline/state emphasis that settles.

Avoid:

- `scale 0 → 1` pop-in,
- card bounce,
- 3D tilt,
- z-axis launch,
- glow burst,
- notification-app semantics.

### Acceptance test

A first-time viewer should understand that **another PLAYER has submitted a BID** before reading explanatory copy.

---

## MOTION-B — `BID_DECISION`

**Priority: P0**

### Product meaning

The GM has chosen who will execute the QUEST.

### Sequence

```text
GM selects BID C
→ C gains selected state
→ A / B reduce emphasis, but remain inspectable
→ selection control locks
→ DELIVERY commitment becomes primary
→ PLAYER SELECTED appears
```

### Motion rules

- use state color/border/background before scale,
- if an indicator moves between BIDs, shared `layoutId` behavior is preferred,
- non-selected BIDs should mute, not fly away,
- the selected BID must not jump to a new unexplained location,
- the interaction should complete around `MOTION_STATE` to `MOTION_LAYOUT` range.

### Never use

- confetti,
- cards ejecting from the screen,
- victory bursts,
- fantasy/game reward effects.

The decision should feel consequential, not celebratory.

---

## MOTION-C — `TIME_ATTACK`

**Priority: P0 when TIME ATTACK is shown**

### Product meaning

Time is genuinely scarce.

Urgency should come from **time moving**, not from the interface screaming.

### Allowed motion

- Number Flow for meaningful countdown segment changes,
- one restrained state escalation when a real threshold is crossed,
- rare low-frequency availability/live signal where justified.

### Forbidden motion

- constant flashing red,
- permanently pulsing entire cards,
- shaking countdowns,
- slot-machine number effects,
- arbitrary urgency animation when no deadline pressure exists.

### Accessibility

Do not announce every visual countdown tick through a live region. Screen-reader announcements must be coarse and meaningful rather than noisy.

---

## MOTION-D — `QUEST_PROGRESS`

**Priority: P0**  
Primary building blocks: ReUI Timeline / Stepper state semantics, PatternFly failure-state thinking.

### Canonical stages

Prototype default:

```text
PLAYER SELECTED
→ WORK STARTED
→ IN PROGRESS
→ FILE DELIVERED
→ GM REVIEW
→ QUEST COMPLETE
```

The exact stages may be simplified per QUEST, but status must represent observable product state.

### State vocabulary

At minimum the component architecture must tolerate:

- completed,
- active,
- pending,
- blocked,
- revision requested,
- late/risk,
- failed/cancelled where applicable.

### Critical rule: no fake percentage

Do **not** display `37%`, `72%`, or similar pseudo-progress for human professional work unless a real measurable process supports it.

A CAD drawing, presentation, translation, or design task is not trustworthy simply because the UI claims it is 73% complete.

Prefer:

- stage,
- timestamp,
- deadline,
- last event,
- delivery status,
- actual checks.

### Motion behavior

- completed step resolves once and becomes still,
- current step receives restrained emphasis,
- pending steps remain quiet,
- transition between steps should take roughly `MOTION_STATE`,
- connector progression may animate once on state change,
- continuous spinner is allowed only for a real system operation, not to pretend a human PLAYER is continuously processing.

---

## MOTION-E — `QUEST_COMPLETE`

**Priority: P0**

### Product meaning

A usable result has arrived and KAPAPI can prove what was delivered.

### Target sequence

```text
QUEST COMPLETE

현황도.dwg
Delivered 18:42
18 MIN EARLY

✓ FILE RECEIVED
✓ FORMAT VERIFIED
✓ DELIVERY RECORDED

+240 EXP
```

The exact checks depend on the QUEST. Never invent verification that the system did not perform.

### Motion choreography

1. completion state locks,
2. result file appears,
3. delivery time resolves,
4. objective verification rows resolve sequentially,
5. EXP may increment last through Number Flow.

Checks may resolve with short mechanical staggering, approximately 60–100ms apart, without a reward explosion.

### Never use

- confetti,
- coins,
- fireworks,
- trophy popups,
- bouncing checkmarks,
- full-screen celebration.

Completion is satisfying because **the work is done**.

---

## MOTION-F — `OBJECT_MORPH`

**Priority: P1**  
Primary building block: Motion Primitives Morphing Dialog / shared layout.

### Use for

- QUEST card → QUEST detail,
- PLAYER card → PLAYER profile,
- compact result object → focused result detail where appropriate.

### Target feel

The user should perceive:

> “I opened this object.”

not:

> “The app replaced the page with another modal.”

### Implementation behavior to preserve

- shared container continuity,
- shared title/image continuity where meaningful,
- Escape close,
- focus trapping in modal contexts,
- body scroll lock,
- focus return to trigger,
- outside-click behavior only when safe.

### Timing

Use roughly `MOTION_MAJOR` as an upper default. The reference demos are useful structurally, but KAPAPI should reduce visible bounce to nearly zero.

---

## MOTION-G — `HERO_TRANSACTION`

**Priority: P0 narrative motion**  
Primary building block: Animated Feature Carousel sequencing principles, not its literal carousel UI.

### Goal

Explain one transaction loop without requiring scrolling.

### Stable-shell sequence

```text
QUEST CREATED
→ BID RECEIVED
→ BIDS COMPARED
→ PLAYER SELECTED
→ FILE DELIVERED
→ QUEST COMPLETE
```

### Rules

- this is one product state evolving inside one stable frame,
- it must not look like six marketing slides,
- no carousel dots unless a genuine control need appears,
- user interaction always wins over autoplay,
- pause when the user is actively inspecting/interacting,
- never block CTA or navigation,
- do not restart aggressively every time the viewport changes.

### Duration

Target total story length: roughly **10–15 seconds**.

Individual transitions use narrative timing, but important states should remain still long enough to read.

### Reduced motion

Show a coherent static or manually stepped version. Do not simply disable content and leave an empty hero.

---

## MOTION-H — `AUTOPILOT_COLLAPSE`

**Priority: P1 narrative motion**  
Primary building block: Animated Beam concept + KAPAPI-native layout/state removal.

This motion explains the long-term thesis:

> **KAPAPI improves by removing GM decisions.**

### Start state

Visible marketplace complexity may include:

```text
QUEST
BID A / B / C
PLAYER
NDA
CONTRACT
STATUS
FILES
QA
```

### End state

```text
FILE + DEADLINE
      ↓
    KAPAPI
      ↓
    RESULT
```

### Choreography

1. show the real Marketplace Mode structure,
2. route meaningful relationships through KAPAPI,
3. progressively move coordination/admin objects behind KAPAPI,
4. leave the GM-facing input and result,
5. settle completely.

### Animated Beam usage

Beam/connector motion is allowed only where it explains routing or orchestration.

Do not copy:

- app-logo constellation demos,
- rainbow/neon gradients,
- permanent infinite traffic,
- generic “AI integrations” diagrams.

Prefer one-shot or limited routing movement and then stillness.

### Important product rule

Autopilot is a north star. This animation must communicate direction without falsely implying every depicted automated function already exists in Prototype v1.

---

## MOTION-I — `SUPPORT_REVEAL`

**Priority: P2 / utility only**  
Primary building block: Blur Fade.

Allowed for:

- rare editorial statement,
- one supporting headline,
- selected Autopilot explanatory copy,
- a transition where complexity intentionally disappears.

Not allowed as the default entrance animation for:

- cards,
- QUEST lists,
- forms,
- every heading,
- every page section.

Generic staggered fade-up pages are explicitly rejected.

---

## MOTION-J — `TRUST_DATA`

**Priority: P1/P2 depending on screen**

PLAYER trust should move only when movement adds information.

Use Number Flow for:

- completion count changes,
- on-time rate changes,
- EXP changes,
- focused comparison changes.

Use a chart only when **historical pattern** matters, such as delivery reliability or revision trend.

A static number is better than an animated chart when one number answers the question.

The trust module must help the GM answer:

> **Can I hand this work over with little explanation and still expect a usable result on time?**

---

# 5. Screen-level motion map

## Landing / Hero

Primary:

- `HERO_TRANSACTION`

Secondary:

- very limited `SUPPORT_REVEAL`
- Number Flow only for live product state inside the demo

Default OFF:

- cursor spotlight,
- decorative 3D cards,
- constant ambient effects.

## QUEST Board

Primary:

- small hover/focus affordances,
- `TIME_ATTACK` when truly relevant,
- `OBJECT_MORPH` or direct navigation continuity where useful.

QUEST Board should otherwise be calm and scannable.

## QUEST Detail

Primary:

- `BID_ARRIVAL`,
- Number Flow,
- `BID_DECISION`,
- shared selected-state indicator.

This is one of the most motion-rich product surfaces because market activity is actually occurring.

## PLAYER Profile

Primary:

- `OBJECT_MORPH`,
- restrained `TRUST_DATA`.

Avoid dashboard-chart theatre.

## Workroom

Primary:

- `QUEST_PROGRESS`,
- file/status events,
- objective delivery states.

Workroom movement should feel like an operational log, not chat-app notification spam.

## Completion

Primary:

- `QUEST_COMPLETE`.

Once resolved, the screen becomes still.

## Autopilot Vision

Primary:

- `AUTOPILOT_COLLAPSE`.

This is a narrative section, not a claim that the current prototype already performs every hidden operation.

---

# 6. Motion density and autoplay rules

1. **No more than one narrative animation should demand attention at a time.**
2. Continuous ambient motion is default OFF.
3. Hero autoplay must pause or yield immediately to user interaction.
4. Infinite loops require a product-state justification. Decorative loops are rejected.
5. Countdown motion is allowed because time changes; fake “live” motion is not.
6. A section that has already explained itself should settle.
7. Do not use scroll-jacking.
8. Do not make the user scrub a long animation timeline just to read content.
9. Scroll-triggered one-shot narrative reveal is allowed when ordinary scrolling remains ordinary.

---

# 7. Performance rules

Motion quality is part of product quality only when the product remains fast.

### Prefer

- transform,
- opacity,
- shared-layout transforms,
- SVG path/gradient animation where necessary,
- GPU-friendly operations,
- event-driven motion.

### Use carefully

- blur/filter,
- backdrop blur,
- many simultaneous layout animations,
- ResizeObserver-driven connector diagrams,
- large SVG networks,
- continuous gradients.

### Avoid

- animating layout properties on large trees when transform/layout projection can solve it,
- heavy blur on low-end/mobile devices,
- multiple infinite GPU effects,
- animation that causes CLS,
- animation that meaningfully worsens INP/LCP.

### Animated Beam specific

Mount only where the diagram is visible/needed. Do not run a site-wide hidden network of ResizeObservers.

---

# 8. Reduced motion and accessibility

`prefers-reduced-motion` is a product requirement, not a polish item.

When reduced motion is requested:

- remove nonessential translation/scale,
- replace morphs with immediate or short opacity/state changes,
- stop autoplay narrative movement,
- render the same information in a stable state,
- preserve Number Flow legibility without prolonged rolling,
- remove decorative beam travel,
- preserve all status semantics.

Dialog/object morph implementations must preserve:

- keyboard activation,
- Escape close,
- focus trap when modal,
- focus return,
- correct `aria` relationships,
- usable content with motion disabled.

Do not make animation the only way to perceive state.

---

# 9. Final reference decisions

| Reference | Final use | Decision |
| --- | --- | --- |
| Number Flow / Maxwell Barvian | PRICE, DELIVERY, BID count, EXP, trust | **ADOPT / P0** |
| Magic UI Animated List | live BID insertion structure | **REMIX / P0** |
| Motion official layout/reordering | BID reflow and state continuity | **ADOPT PATTERN / P0** |
| Motion shared layout / `layoutId` | selected indicator and object continuity | **ADOPT PATTERN / P1** |
| Motion Primitives Morphing Dialog | QUEST/PLAYER object expansion | **ADOPT PATTERN / P1** |
| Animated Feature Carousel / Le Thanh | stable-shell hero sequencing | **REMIX / P0** |
| ReUI Timeline / Stepper | QUEST progress state model | **ADOPT PATTERN / P0** |
| PatternFly step/failure semantics | failure/pending/accessibility reference | **REFERENCE / P1** |
| Magic UI Animated Beam | Autopilot orchestration explanation | **REMIX / P1** |
| Magic UI Blur Fade | rare supporting reveal | **REMIX / P2** |
| Jessi Animate Card Animation | small source-level lessons only | **REJECT as BID reference** |
| Spotlight / Glow Card | optional experiment only | **DEFAULT REJECT** |
| badtz Animated Card Diagram | source incomplete | **DO NOT DEPEND ON** |
| badtz Animated Card Chart | source incomplete | **DO NOT DEPEND ON** |
| React Native LayoutAnimation examples | web prototype | **OUT OF SCOPE** |

This table supersedes older provisional reference-board rankings.

---

# 10. Implementation stack direction

Prototype v1 should prefer one coherent motion stack.

Preferred direction:

- **Motion (`motion/react`)** for layout, presence, shared layout, state and narrative transitions,
- **`@number-flow/react`** for meaningful number transitions,
- copy-own/rebuild small reference primitives only where they solve a named product problem.

Do not install multiple animation frameworks because individual reference demos happen to use them.

Reference component source may be remixed, but KAPAPI owns the final behavior.

---

# 11. Explicit anti-patterns

Reject these by default:

- generic fade-up on every section,
- spring bounce everywhere,
- `hover: scale(1.03+)` cards,
- floating/tilting 3D cards,
- cursor-following glow across the product,
- neon/rainbow beams,
- crypto/dashboard motion language,
- fantasy-game reward motion,
- parallax for decoration,
- scroll-jacking,
- perpetual marquee motion without product meaning,
- loading spinners representing human work,
- fake percentage completion,
- animation that delays access to information,
- motion more memorable than PRICE × DELIVERY or the delivered result.

---

# 12. Prototype QA checklist

For every significant motion, verify:

### Meaning

- What real product event triggered this?
- Can a first-time viewer understand what changed?
- Does the motion improve decision-making or product comprehension?

### Visual restraint

- Is amplitude as small as possible?
- Does it settle quickly?
- Is the surrounding UI mostly still?
- Would removing glow/scale/rotation improve it?

### Interaction

- Can the user interrupt it?
- Does autoplay yield to user input?
- Does focus remain correct?
- Does the underlying object remain easy to compare/read?

### Mobile

- Does the motion still make spatial sense at narrow widths?
- Does reflow avoid jumps and clipping?
- Are blur/GPU effects reduced where needed?

### Accessibility

- Is all information available with reduced motion?
- Is motion not the only state signal?
- Are dialogs/focus/keyboard behavior intact?

### Performance

- No visible CLS caused by the effect?
- No unnecessary continuous observers/timers?
- No obvious input lag?
- No long-running decorative GPU effect?

If the answer is weak, simplify or remove the animation.

---

# 13. Reference collection stop rule

Prototype v1 already has sufficient motion references.

Do **not** continue collecting components by default.

Return to the registered source pools only when implementation exposes a named gap such as:

- missing interaction behavior,
- unclear state transition,
- accessibility problem,
- mobile reflow problem,
- performance problem.

Any new reference must solve that specific gap.

---

# 14. Final north star

KAPAPI is not an animation showcase.

Its motion should make this proposition tangible:

```text
WORK APPEARS
→ MARKET RESPONDS
→ GM DECIDES
→ WORK MOVES
→ RESULT ARRIVES
```

Then, over time:

```text
DROP WORK
→ KAPAPI HANDLES THE COMPLEXITY
→ GET RESULTS
```

Motion succeeds when the user remembers **the work moving and the result arriving**, not the effect used to animate it.
