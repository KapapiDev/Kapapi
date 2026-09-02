# Motion layout / reorder examples — source capture and KAPAPI assessment

Status: **captured**  
Source class: **Motion official examples / React Native comparison snippets supplied during design research**  
Decision summary: **REORDER + SHARED LAYOUT are P0/P1 references. Toggle/LayoutAnchor are secondary. React Native examples are rejected for the web prototype.**

---

## 1. Layout animation — simple toggle

```tsx
"use client"

import * as motion from "motion/react-client"
import { useState } from "react"

export default function LayoutAnimation() {
    const [isOn, setIsOn] = useState(false)

    const toggleSwitch = () => setIsOn(!isOn)

    return (
        <button
            className="toggle-container"
            style={{
                ...container,
                justifyContent: "flex-" + (isOn ? "start" : "end"),
            }}
            onClick={toggleSwitch}
        >
            <motion.div
                className="toggle-handle"
                style={handle}
                layout
                transition={{
                    type: "spring",
                    visualDuration: 0.2,
                    bounce: 0.2,
                }}
            />
        </button>
    )
}

const container = {
    width: 100,
    height: 50,
    backgroundColor: "var(--hue-3-transparent)",
    borderRadius: 50,
    cursor: "pointer",
    display: "flex",
    padding: 10,
}

const handle = {
    width: 50,
    height: 50,
    backgroundColor: "var(--hue-3)",
    borderRadius: "50%",
}
```

### KAPAPI assessment

Decision: **REMIX / P2 utility**

Useful primitive:
- `layout`
- short spring with `visualDuration: 0.2`
- state moves because layout changed, not because absolute x/y values were hand-scripted

Potential use:
- tiny selection indicator
- active filter / segmented state
- compact GM decision control

Do not use the pill-toggle visual itself as KAPAPI identity.

---

## 2. Reordering — automatic layout reflow

```tsx
"use client"

import { Transition } from "motion/react"
import * as motion from "motion/react-client"
import { useEffect, useState } from "react"

export default function Reordering() {
    const [order, setOrder] = useState(initialOrder)

    useEffect(() => {
        const timeout = setTimeout(() => setOrder(shuffle(order)), 1000)
        return () => clearTimeout(timeout)
    }, [order])

    return (
        <ul style={container}>
            {order.map((backgroundColor) => (
                <motion.li
                    key={backgroundColor}
                    layout
                    transition={spring}
                    style={{ ...item, backgroundColor }}
                />
            ))}
        </ul>
    )
}

const initialOrder = [
    "var(--hue-1)",
    "var(--hue-2)",
    "var(--hue-3)",
    "var(--hue-4)",
]

function shuffle([...array]: string[]) {
    return array.sort(() => Math.random() - 0.5)
}

const spring: Transition = {
    type: "spring",
    damping: 20,
    stiffness: 300,
}

const container: React.CSSProperties = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    width: 300,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
}

const item: React.CSSProperties = {
    width: 100,
    height: 100,
    borderRadius: "10px",
}
```

### KAPAPI assessment

Decision: **ADOPT PATTERN / P0**

This is the cleanest technical reference so far for the missing half of `BID_ARRIVAL`:

```text
new BID enters
→ ranking/comparison order changes
→ existing BID cards move to new positions
→ no card teleports
```

Keep:
- stable React keys
- `layout`
- layout-driven reflow
- spring only as a physical solver, not a decorative bounce

KAPAPI adaptation:
- ranking may change by GM sort mode such as recommended / delivery / price
- insertion can place the new BID into the correct sorted location
- nearby cards should shift just enough to make space
- target motion should be tighter and more mechanical than the demo if the spring visibly overshoots

Provisional tuning target for KAPAPI:
- start testing around `stiffness 300 / damping 20`
- increase damping if any bounce is visible
- pair with short opacity + low-amplitude Y entry for the new BID only

This should be combined with Magic UI Animated List's `AnimatePresence + layout` pattern.

---

## 3. Shared layout animation

```tsx
"use client"

import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import { useState } from "react"

export default function SharedLayoutAnimation() {
    const [selectedTab, setSelectedTab] = useState(tabs[0])

    return (
        <div style={container}>
            <nav style={nav}>
                <ul style={tabsContainer}>
                    {tabs.map((item) => (
                        <motion.li
                            key={item.label}
                            initial={false}
                            animate={{
                                backgroundColor:
                                    item === selectedTab ? "#eee" : "#eee0",
                            }}
                            style={tab}
                            onClick={() => setSelectedTab(item)}
                        >
                            {`${item.icon} ${item.label}`}
                            {item === selectedTab ? (
                                <motion.div
                                    style={underline}
                                    layoutId="underline"
                                    id="underline"
                                />
                            ) : null}
                        </motion.li>
                    ))}
                </ul>
            </nav>
            <main style={iconContainer}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedTab ? selectedTab.label : "empty"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={icon}
                    >
                        {selectedTab ? selectedTab.icon : "😋"}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    )
}

const container: React.CSSProperties = {
    width: 480,
    height: 360,
    maxWidth: "calc(100% - 40px)",
    maxHeight: "calc(100% - 40px)",
    borderRadius: 10,
    background: "white",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
}

const nav: React.CSSProperties = {
    background: "#fdfdfd",
    padding: "5px 5px 0",
    borderRadius: "10px",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottom: "1px solid #eeeeee",
    height: 44,
}

const tabsStyles: React.CSSProperties = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    fontWeight: 500,
    fontSize: 14,
}

const tabsContainer: React.CSSProperties = {
    ...tabsStyles,
    display: "flex",
    width: "100%",
}

const tab: React.CSSProperties = {
    ...tabsStyles,
    borderRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: "100%",
    padding: "10px 15px",
    position: "relative",
    background: "white",
    cursor: "pointer",
    height: 24,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    minWidth: 0,
    userSelect: "none",
    color: "var(--black)",
}

const underline: React.CSSProperties = {
    position: "absolute",
    bottom: -2,
    left: 0,
    right: 0,
    height: 2,
    background: "var(--accent)",
}

const iconContainer: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
}

const icon: React.CSSProperties = {
    fontSize: 128,
}

const allIngredients = [
    { icon: "🍅", label: "Tomato" },
    { icon: "🥬", label: "Lettuce" },
    { icon: "🧀", label: "Cheese" },
]

const [tomato, lettuce, cheese] = allIngredients
const tabs = [tomato, lettuce, cheese]
```

### KAPAPI assessment

Decision: **ADOPT PATTERN / P1**

Important primitives:
- `layoutId` to preserve the identity of a moving selection marker
- `AnimatePresence mode="wait"`
- compact `200ms` state-content transition

Potential KAPAPI uses:
- selected BID indicator moving between PLAYER proposals
- filter/sort selection state
- workroom status tab
- GM / PLAYER contextual navigation

For `BID_DECISION`, a shared selected-state marker could move from one BID to another without redrawing the entire UI.

Do not copy emoji/tab visual language.

---

## 4. Layout Anchor

```tsx
"use client"

import { useState } from "react"
import { motion } from "motion/react"

function LayoutAnchor({
    anchorX = 0.5,
    anchorY = 0.5,
}) {
    const [expanded, setExpanded] = useState(false)

    return (
        <div style={container}>
            <motion.div
                layout
                layoutDependency={expanded}
                style={{
                    ...parent,
                    width: expanded ? 300 : 150,
                    height: expanded ? 300 : 150,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                onClick={() => setExpanded(!expanded)}
            >
                <motion.div
                    layout
                    layoutDependency={expanded}
                    layoutAnchor={{ x: anchorX, y: anchorY }}
                    style={{
                        ...child,
                        width: expanded ? 100 : 70,
                        height: expanded ? 100 : 70,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                        delay: 0.8,
                    }}
                >
                    <motion.div
                        layout
                        layoutDependency={expanded}
                        style={{
                            ...crosshair,
                            left: `${anchorX * 100}%`,
                            top: `${anchorY * 100}%`,
                        }}
                        transition={{
                            duration: 0.8,
                            ease: "easeInOut",
                            delay: 0.8,
                        }}
                    >
                        <div style={crosshairH} />
                        <div style={crosshairV} />
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default LayoutAnchor
```

### KAPAPI assessment

Decision: **REMIX / P2 research reference**

Interesting primitive:
- `layoutAnchor`
- `layoutDependency`
- preserving a specific visual anchor during expansion

Potential use:
- QUEST card expanding toward a detail panel without the meaningful origin point drifting
- PLAYER summary expanding into trust details

The 0.8s + delayed 0.8s demo timings are far too slow for KAPAPI operational UI and should not be copied.

---

## 5. Reorder Grid

```tsx
"use client"

import { Reorder } from "motion/react"
import { useState } from "react"

interface Props {
    dragScale?: number
    stiffness?: number
    damping?: number
}

export default function ReorderGrid({
    dragScale = 1.08,
    stiffness = 350,
    damping = 30,
}: Props) {
    const [items, setItems] = useState(initialItems)

    return (
        <main className="reorder-stage">
            <Reorder.Group
                as="div"
                values={items}
                onReorder={setItems}
                className="reorder-grid"
                aria-label="Reorderable grid"
            >
                {items.map((item) => (
                    <Reorder.Item
                        as="div"
                        key={item}
                        value={item}
                        className="reorder-item"
                        transition={{
                            type: "spring",
                            stiffness,
                            damping,
                        }}
                        whileDrag={{ scale: dragScale }}
                        style={{
                            backgroundColor: `var(--hue-${(item % 6) + 1})`,
                        }}
                    >
                        {String(item).padStart(2, "0")}
                    </Reorder.Item>
                ))}
            </Reorder.Group>
            <StyleSheet />
        </main>
    )
}

const initialItems = Array.from({ length: 16 }, (_, index) => index + 1)
```

### KAPAPI assessment

Decision: **REJECT AS PRODUCT INTERACTION / KEEP AS TECHNICAL REFERENCE**

KAPAPI does not currently need GM to drag BID cards into arbitrary order. Ranking should be data/sort driven.

Useful only as a reference for:
- robust reorder physics
- `Reorder.Group` / `Reorder.Item`
- spring settings around `350 / 30`

Do not implement drag-to-rank BIDs in the prototype.

---

# React Native layout animation examples

Three React Native `LayoutAnimation` examples were also captured during research.

They demonstrate:
- `LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)`
- create/update/delete phases
- linear vs spring vs easeInEaseOut presets
- Android `setLayoutAnimationEnabledExperimental`

Decision: **REJECT FOR KAPAPI WEB IMPLEMENTATION**

Reason:
- KAPAPI prototype is web / Next.js
- these examples are useful conceptually but not relevant to the implementation stack
- Motion already provides stronger web-native primitives for the same problems

Do not add React Native solely for animation behavior.

---

# Combined KAPAPI conclusion

These examples materially strengthen the motion design evidence.

## BID ARRIVAL should now be based on

```text
Magic UI AnimatedList
    AnimatePresence
    + layout

Motion official Reordering
    stable keys
    + layout-driven position changes

KAPAPI adaptation
    new BID enters with low-amplitude opacity/Y
    + surrounding BIDs reflow
    + Number Flow resolves PRICE / DELIVERY / live metrics
```

This is a much stronger basis than the earlier Jessi 3D-card reference.

## BID DECISION should consider

```text
shared layoutId selection marker
→ selected PLAYER state moves coherently
→ nonselected proposals reduce emphasis
→ committed delivery becomes primary
```

## Motion principles confirmed by these examples

1. Prefer **layout animation** over hand-coded coordinate choreography when UI objects change order.
2. Use **stable identity** (`key`, `layoutId`) so the interface feels like one object moving, not two objects cross-fading.
3. Springs may solve movement, but KAPAPI should suppress visible bounce.
4. Operational state transitions should usually settle around ~200–300ms, not cinematic 800ms+ timings.
5. Drag reorder is not part of the current KAPAPI product model.

---

## Priority table

| Reference | Decision | KAPAPI role |
| --- | --- | --- |
| Motion Reordering | **P0 ADOPT PATTERN** | BID insertion/re-ranking |
| Magic UI AnimatedList | **P0 REMIX** | BID arrival + list insertion |
| Shared Layout / layoutId | **P1 ADOPT PATTERN** | BID selection / active state |
| Layout toggle | P2 | micro state indicator |
| LayoutAnchor | P2 | expandable card/detail research |
| Reorder Grid | Technical only | reorder physics reference |
| React Native LayoutAnimation | Reject | wrong implementation stack |

> KAPAPI should feel like work objects are moving through a precise system, not like cards are performing animation demos.
