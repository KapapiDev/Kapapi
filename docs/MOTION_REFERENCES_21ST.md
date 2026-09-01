# KAPAPI Motion References — 21st.dev

Status: **prototype motion reference board**  
Purpose: Give Claude Code concrete 21st.dev MCP search targets and adaptation rules before implementation.  
Rule: **These are motion references, not a component shopping list. Do not paste visual styles wholesale. KAPAPI_DESIGN remains the visual authority.**

---

## 1. Why this document exists

KAPAPI's prototype quality depends heavily on motion. The goal is not to make every section move. Motion should make the product feel alive, clarify state changes, and communicate the core transaction model without making the site feel like a game launcher or an effects demo.

Claude Code has access to the 21st.dev MCP. Before implementing any motion listed below:

1. Search 21st.dev MCP using the exact component name and author in this document.
2. Inspect the preview, implementation, dependencies, and motion behavior.
3. Extract the useful motion principle or implementation pattern.
4. Rebuild or remix it inside KAPAPI's own design system.
5. Do not copy colors, typography, radii, shadows, gradients, or unrelated component chrome from the reference.
6. Reject the reference if it conflicts with KAPAPI's product clarity, performance, accessibility, or visual restraint.

The desired output is:

> **KAPAPI motion language informed by 21st.dev, not a collage of 21st.dev components.**

---

# 2. Priority motion references

## REF-21-001 — Number Flow

**21st.dev search:** `Number Flow by Maxwell Barvian`  
**Component:** Number Flow  
**Author:** Maxwell Barvian  
**Priority:** P0 / direct implementation candidate

### Why KAPAPI needs it

Numbers are core product objects:

- BID price
- DELIVERY TIME
- TIME ATTACK countdown
- BID count
- completed QUEST count
- on-time rate
- LEVEL / EXP
- delivery performance

Static number replacement makes the interface feel mocked. Smooth numeric transitions can make state changes feel real without adding decorative animation.

### KAPAPI adaptation

Use the underlying number-transition behavior for:

- `BIDS 06 → 07`
- `₩150,000 → ₩220,000` when comparison focus changes
- trust metrics such as `98% → 99% ON TIME`
- EXP increment after completion
- optional countdown segments where appropriate

### Do not copy

- demo typography
- demo layout
- click-anywhere behavior
- exaggerated rolling for every number on screen

### Motion rule

Only animate a number when its value actually changes or when it first becomes the focal state. Persistent stats should remain still.

### Acceptance test

A changing BID or EXP value should feel like live product state, not a slot-machine effect.

---

## REF-21-002 — Animate Card Animation

**21st.dev search:** `Animate Card Animation by Jessi`  
**Component:** Animate Card Animation  
**Author:** Jessi  
**Priority:** P0 / pattern reference

### Why KAPAPI needs it

The most important KAPAPI signature motion is a new BID entering the market.

The user should visually understand:

`new proposal arrived → comparison set changed → GM can make a decision`

without reading an explanatory paragraph.

### KAPAPI adaptation

Study the card-stack entry/exit/reposition pattern and adapt it to BID cards.

Desired sequence:

```text
BID RECEIVED
     ↓
new PLAYER card inserts into the comparison set
     ↓
existing cards shift just enough to make space
     ↓
PRICE / DELIVERY TIME / TRUST become legible
     ↓
layout settles
```

The new card should feel **inserted into a system**, not thrown onto a stage.

### Do not copy

- playful stacked-card styling
- large rotation
- dramatic 3D tilt
- springy overshoot
- swipe/deck metaphors if they obscure comparison

### Motion rule

Prefer low-amplitude transform + opacity + layout transition. The GM must be able to compare all BIDs immediately after the transition.

### Acceptance test

A first-time viewer should understand that a new professional has submitted a proposal before any label explains it.

---

## REF-21-003 — Animated Feature Carousel

**21st.dev search:** `Animated Feature Carousel by Le Thanh`  
**Component:** Animated Feature Carousel  
**Author:** Le Thanh  
**Priority:** P0 / narrative-motion reference

### Why KAPAPI needs it

The hero should not be a static screenshot. It should demonstrate one transaction loop in roughly 10–15 seconds.

This reference is useful for studying:

- staged visual progression
- transition between related product states
- preserving one stable frame while content changes
- controlled sequencing

### KAPAPI adaptation

Do **not** implement a literal feature carousel.

Use the sequencing pattern to build a hero transaction narrative:

```text
QUEST CREATED
→ BID RECEIVED
→ multiple BID comparison
→ PLAYER SELECTED
→ DELIVERED
→ QUEST COMPLETE
```

The surrounding shell should remain stable while the transaction state evolves inside it.

### Do not copy

- marketing-image carousel visuals
- unrelated photos
- generic slide dots
- autoplay controls that make KAPAPI look like a slideshow

### Motion rule

The viewer should perceive one product state evolving, not six separate slides.

### Acceptance test

Without scrolling, the hero alone should explain that KAPAPI receives work, attracts proposals, selects execution, and returns a result.

---

## REF-21-004 — Animated Card Diagram

**21st.dev search:** `Animated Card Diagram by badtz`  
**Component:** Animated Card Diagram  
**Author:** badtz  
**Priority:** P1 / architecture-story reference

### Why KAPAPI needs it

KAPAPI has a difficult strategic story to explain:

```text
Marketplace
→ Assist
→ Autopilot
```

A static three-column feature section can make this look like ordinary feature expansion. The actual idea is that GM-facing complexity progressively disappears.

### KAPAPI adaptation

Use the diagram/card relationship pattern to explain product evolution.

Desired visual logic:

```text
MARKETPLACE
GM sees QUEST + BIDs + PLAYER selection

        ↓ complexity removed

ASSIST
GM gives file + short instruction
KAPAPI structures and recommends

        ↓ complexity removed

AUTOPILOT
FILE + DEADLINE
→ KAPAPI
→ RESULT
```

The animation should progressively remove steps from the GM side.

### Do not copy

- decorative connector lines without meaning
- neon diagram styling
- unnecessary nodes
- infinite looping that makes the product architecture hard to read

### Acceptance test

A reviewer should understand that Autopilot is not 'more features'. It is **fewer GM decisions**.

---

## REF-21-005 — Animated Card Chart

**21st.dev search:** `Animated Card Chart by badtz`  
**Component:** Animated Card Chart  
**Author:** badtz  
**Priority:** P1 / trust-data reference

### Why KAPAPI needs it

PLAYER trust should feel measurable and task-specific, not like decorative game XP.

Useful data includes:

- 156 relevant QUESTS completed
- 99% on-time
- revision rate
- recent completion history
- task/category LEVEL

### KAPAPI adaptation

Study how compact cards reveal changing metrics and micro-visual data.

Potential applications:

- PLAYER profile trust module
- BID comparison trust detail
- recent delivery reliability
- tiny history graph or completion trend

### Do not copy

- arbitrary chart decoration
- bright chart palettes
- crypto/dashboard aesthetics
- charts where a plain number is clearer

### Motion rule

A chart is allowed only when historical pattern matters. Use Number Flow or static text for simple single values.

### Acceptance test

Trust data must answer: **'Can I hand this work over with little explanation and still expect a usable result on time?'**

---

## REF-21-006 — Blur Fade

**21st.dev search:** `Blur Fade by Dillion Verma`  
**Component:** Blur Fade  
**Author:** Dillion Verma / Magic UI  
**Priority:** P2 / utility only

### Why KAPAPI may use it

A restrained reveal can help large editorial sections enter without a harsh cut.

### KAPAPI adaptation

Allowed only for:

- one or two major editorial statements
- selected hero/supporting copy
- an Autopilot transition where complexity visually disappears

### Do not use it for

- every section
- every card
- every heading
- normal form controls
- QUEST list items

### Motion rule

Generic scroll fade-up is specifically forbidden as a site-wide pattern.

### Acceptance test

If removing Blur Fade makes the page feel almost identical, remove it. It should exist only where it improves narrative focus.

---

# 3. Explicitly optional / likely reject

## REF-21-X01 — Spotlight Cursor

**21st.dev search:** `Spotlight Cursor by ui layout`  
**Priority:** Experimental / default OFF

This can look impressive in isolation but is likely too portfolio-like for a professional-work product.

Only consider a highly restrained variant in a single dark hero surface if it helps reveal functional UI underneath the pointer.

Reject immediately if it:

- follows the cursor everywhere
- reduces text contrast
- looks like a creative-agency portfolio
- becomes more memorable than the QUEST/BID interaction
- costs meaningful GPU time on typical laptops

Default decision: **do not implement unless visual QA proves it adds product value.**

---

# 4. KAPAPI signature motion set

The references above should be transformed into the following KAPAPI-native motions.

## MOTION-A — `BID_ARRIVAL`

Primary reference: REF-21-002 + REF-21-001

```text
NEW BID signal
→ card inserted
→ PRICE settles
→ DELIVERY TIME settles
→ TRUST metrics become available
→ comparison set stabilizes
```

Target feel: precise, live, operational.

---

## MOTION-B — `BID_DECISION`

No component should be copied literally. Build from KAPAPI state logic.

When GM selects PLAYER C:

```text
A / B reduce emphasis
C receives selected border/state
selection control locks
DELIVERY commitment becomes primary
PLAYER SELECTED state appears
```

Avoid cards flying away, confetti, or exaggerated scaling.

---

## MOTION-C — `TIME_ATTACK`

Primary reference: REF-21-001 for numeric change.

Elements:

- real countdown
- restrained urgent signal
- no constant flashing
- escalation only near important thresholds

TIME ATTACK should feel urgent because **time is actually moving**, not because the UI is red everywhere.

---

## MOTION-D — `QUEST_PROGRESS`

A calm state machine:

```text
SELECTED
→ IN PROGRESS
→ DELIVERED
→ GM REVIEW
→ COMPLETE
```

Transitions should feel like system state changes, not marketing animation.

---

## MOTION-E — `QUEST_COMPLETE`

Primary references: REF-21-001 plus Factory motion philosophy from KAPAPI design references.

Desired sequence:

```text
QUEST COMPLETE

result.dwg
Delivered 18:42
18 MIN EARLY

✓ FILE RECEIVED
✓ FORMAT VERIFIED
✓ DELIVERY RECORDED

+240 EXP
```

Checks and numbers may resolve sequentially with short mechanical timing.

No fireworks. No coins. No cartoon reward burst.

---

## MOTION-F — `AUTOPILOT_COLLAPSE`

Primary reference: REF-21-004.

This is one of the highest-value storytelling motions.

Start with visible marketplace complexity:

```text
QUEST
BID A / B / C
PLAYER
NDA
CONTRACT
STATUS
FILES
```

Then progressively move those items behind KAPAPI until GM sees only:

```text
FILE + DEADLINE
      ↓
    KAPAPI
      ↓
    RESULT
```

The animation visually explains the product thesis:

> **KAPAPI improves by removing decisions from the GM workflow.**

---

# 5. Global motion constraints

Until `KAPAPI_MOTION.md` defines final tokens, use these provisional limits during exploration only.

| Motion class | Target range | Purpose |
| --- | ---: | --- |
| Micro interaction | 120–180ms | hover, press, focus |
| Product state | 180–280ms | BID arrival, selection, status |
| Major state | 280–420ms | delivery, complete, panel transition |
| Narrative step | 450–800ms | hero/product story |
| Ambient | 2–8s | subtle periodic live state |

Principles:

- Prefer transform and opacity for frequent motion.
- Layout animation is allowed when it materially explains insertion/reordering.
- Avoid gratuitous 3D transforms.
- Avoid generic spring bounce.
- Avoid site-wide parallax.
- Avoid scroll-jacking.
- Avoid 'everything fades up on scroll'.
- Keep animation interruptible where the user interacts.
- Respect `prefers-reduced-motion`.
- Do not let autoplay hero motion block user input.
- Do not sacrifice LCP, CLS, INP, or mobile performance for visual effects.

---

# 6. Claude Code + 21st MCP workflow

Before implementation, Claude Code should run this process for each P0/P1 reference:

```text
1. Search 21st MCP by exact component + author.
2. Inspect preview and source.
3. Identify the smallest useful motion primitive.
4. Record dependency and runtime cost.
5. Decide: ADOPT PATTERN / REMIX / REJECT.
6. Adapt to KAPAPI_DESIGN tokens.
7. Implement behind one isolated demo state first.
8. Run visual QA at desktop and mobile widths.
9. Verify reduced-motion behavior.
10. Only then reuse the motion primitive elsewhere.
```

Do not install five animation libraries because five reference components use different dependencies. Prefer a coherent motion stack for the final prototype.

---

# 7. Reference priority summary

| ID | Reference | KAPAPI use | Decision |
| --- | --- | --- | --- |
| REF-21-001 | Number Flow | PRICE / TIME / EXP / live metrics | **P0** |
| REF-21-002 | Animate Card Animation | BID arrival / insertion | **P0** |
| REF-21-003 | Animated Feature Carousel | hero transaction sequence | **P0** |
| REF-21-004 | Animated Card Diagram | Marketplace → Assist → Autopilot | **P1** |
| REF-21-005 | Animated Card Chart | PLAYER trust history | **P1** |
| REF-21-006 | Blur Fade | rare editorial reveal | **P2** |
| REF-21-X01 | Spotlight Cursor | possible hero experiment | **Default reject** |

---

# 8. Final design rule

A motion is successful only if it does at least one of these:

1. explains a product state,
2. makes live market activity legible,
3. clarifies a decision,
4. communicates KAPAPI's result-first thesis,
5. adds tactile quality without stealing attention.

If it does none of them, remove it.

> **The prototype should feel alive because work is moving through a system, not because the website is performing tricks.**
