# KAPAPI Motion System

Status: **canonical motion specification for the current prototype**  
Updated: **2026-09-03**

KAPAPI motion exists to explain work moving through a system.

> **The product should feel alive because a QUEST changes state, not because the website performs tricks.**

Product semantics follow D-032. In particular, recommendation and assignment are different states.

## 1. Motion goals

Every meaningful animation should do at least one of:

1. explain a real product state change;
2. make market activity legible;
3. clarify recommendation/confirmation;
4. preserve object continuity;
5. communicate work moving toward a result;
6. add tactile quality without competing with the work.

If it does none, remove it.

Motion character:

- precise
- low-amplitude
- mechanical rather than bouncy
- state-driven
- fast but calm
- mostly still at rest

---

## 2. Core principles

### State before spectacle

Animate because something happened:

- QUEST created
- BID arrived
- eligibility changed
- recommendation became ready
- GM confirmed
- PLAYER assigned
- work started
- file delivered
- result accepted/revised
- QUEST completed

### Object continuity

Preserve continuity for:

- QUEST card → detail
- BID row → recommendation row
- recommendation → confirmed/assigned state
- result object → result detail

### Small amplitude

Prefer:

- opacity
- 4–10px translation
- border/background/state changes
- layout reflow
- restrained numeric interpolation

Avoid theatrical scale, 3D rotation, bounce and depth tricks.

### One focal motion at a time

Do not run hero video, multiple pulsing cards, countdowns and decorative beams all at once.

---

## 3. Timing system

Recommended defaults:

| Token | Target | Use |
| --- | ---: | --- |
| `MOTION_MICRO` | 140ms | hover, press, focus |
| `MOTION_STATE` | 220ms | status/selection state |
| `MOTION_LAYOUT` | 260ms | list/reorder/reflow |
| `MOTION_MAJOR` | 340ms | object/detail transitions |
| `MOTION_NARRATIVE` | 560ms | one hero/story beat |

Primary ease:

`cubic-bezier(0.4, 0, 0.2, 1)`

Settle:

`cubic-bezier(0.16, 1, 0.3, 1)`

Enter:

`cubic-bezier(0.22, 1, 0.36, 1)`

Springs, when used for layout continuity, should have high damping and no visible bounce.

---

# 4. Signature motions

## MOTION-A — `BID_ARRIVAL`

Meaning: another PLAYER committed real PRICE + DELIVERY.

```text
BID RECEIVED
→ row enters
→ PRICE / DELIVERY resolve
→ trust becomes readable
→ list settles
```

Rules:

- do not cover existing BIDs;
- reflow through layout motion;
- newest BID may get a short state accent;
- no pop/bounce/glow burst.

---

## MOTION-B — `ELIGIBILITY_FILTER`

Meaning: KAPAPI removes candidates that cannot satisfy hard constraints.

```text
BIDS
→ skill/security/deadline/budget checks
→ ineligible rows reduce emphasis
→ eligible set remains
```

Rules:

- excluded options may stay visible enough to explain why;
- do not make rows dramatically fly away;
- filtering should feel inspectable, not magical.

---

## MOTION-C — `RECOMMENDATION_READY`

Meaning: KAPAPI has ranked eligible BIDs and recommends one candidate.

```text
eligible BIDs
→ evidence resolves
→ one row gains RECOMMENDED state
→ rationale appears
→ primary confirmation action becomes available
```

Rules:

- recommendation highlight uses border/state/position before scale;
- alternatives mute but remain accessible;
- do not show `ASSIGNED` yet;
- do not imply an LLM whim produced the result.

---

## MOTION-D — `GM_CONFIRMATION`

Meaning: the GM accepts the recommendation and the transaction becomes assigned.

```text
RECOMMENDED
→ GM presses “이 작업자로 진행”
→ recommendation locks
→ CONFIRMED
→ ASSIGNED
→ work state begins
```

Rules:

- confirmation should feel consequential, not celebratory;
- shared object continuity is preferred;
- no confetti, winner explosion or ejecting alternatives;
- complete around `MOTION_STATE`–`MOTION_LAYOUT`.

This motion replaces the old assumption that BIDs automatically become assigned in the current prototype.

---

## MOTION-E — `TIME_ATTACK`

Meaning: time is genuinely scarce.

Use time itself to create urgency:

- real countdown changes
- one restrained threshold escalation
- compact state accent

Never use constant flashing, shaking or fake urgency.

Screen readers should receive coarse meaningful time information, not every tick.

---

## MOTION-F — `QUEST_PROGRESS`

Canonical observable stages:

```text
ASSIGNED
→ WORK STARTED
→ IN PROGRESS
→ FILE DELIVERED
→ GM REVIEW
→ QUEST COMPLETE
```

Support:

- blocked
- late/risk
- revision requested
- cancelled/failed

Critical rule:

> **No fake percentage for human work.**

Use real stage, timestamp, deadline, files and events instead.

---

## MOTION-G — `QUEST_COMPLETE`

Meaning: a usable result has arrived and the transaction can prove what was delivered.

Suggested choreography:

```text
RESULT READY
→ result file appears
→ delivery time resolves
→ objective checks resolve
→ GM accepts
→ QUEST COMPLETE
→ optional restrained history/EXP update
```

Never invent checks the system did not perform.

No confetti, coins, trophy or fireworks.

---

## MOTION-H — `OBJECT_MORPH`

Use when spatial continuity helps:

- QUEST card → QUEST detail
- PLAYER/trust row → profile/detail
- result object → result focus

Preserve focus/accessibility in modal contexts.

---

## MOTION-I — `HERO_TRANSACTION`

Current hero sequence:

```text
QUEST CREATED
→ BIDS RECEIVED
→ ELIGIBILITY CHECK
→ RECOMMENDATION READY
→ GM CONFIRMED
→ RESULT READY
```

The film/composited UI may compress elapsed time, but it must preserve these semantics.

Recommendation and assignment cannot be visually collapsed.

---

## MOTION-J — `OUTCOME_EVOLUTION`

This is a future-direction narrative, not a current transaction state.

Possible sequence:

```text
QUEST COMPLETE
→ DATA
→ TRUST
→ RECOMMENDATION
→ ROUTING / RECOVERY
→ HUMAN + AI + AUTOMATION + PARTNER
→ RESULT
```

Keep it restrained. Do not animate a giant architecture diagram simply because the concept is strategic.

The message should be that user-visible complexity can decrease as KAPAPI earns capability.

---

# 5. Scroll / landing motion

Do not use generic fade-up on every section.

Scroll-triggered motion is acceptable only where it reveals a meaningful product sequence or object relationship.

The landing should spend more time still than moving.

---

# 6. Numeric motion

Numeric interpolation is useful for real changing values such as:

- countdown
- BID count
- PRICE/DELIVERY transitions
- LEVEL/EXP updates

Do not animate static numbers merely for decoration.

---

# 7. Reduced motion

With `prefers-reduced-motion`:

- show settled final states;
- do not auto-run cinematic state sequences that are necessary for comprehension;
- preserve all labels/actions;
- do not hide recommendation evidence behind motion;
- use poster/static hero fallback where appropriate.

---

# 8. Mobile motion

Mobile should not reproduce desktop perspective/compositing if it harms readability.

Prefer shorter, clearer transitions and direct full-frame product states.

Touch feedback should use subtle state changes, not scale bounce.

---

# 9. Performance

Favor transform/opacity/layout techniques that do not damage first interaction.

Hero media must not block primary task-entry rendering.

Avoid heavy simultaneous animations and unnecessary continuous loops.

---

# 10. Rejection conditions

Reject motion if it:

- makes recommendation look assigned before GM confirmation;
- implies universal autonomous routing;
- uses celebration to fake satisfaction;
- creates fake progress certainty;
- distracts from PRICE × DELIVERY or result proof;
- looks like a game launcher or effects showcase;
- moves simply because the section entered the viewport.

Desired feeling:

> **the work is moving, and the interface is calmly showing what changed.**
