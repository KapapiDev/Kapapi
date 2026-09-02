# Magic UI Animated List — source capture and KAPAPI assessment

Status: **full demo + internal component captured**  
Decision: **REMIX / P0**  
Primary KAPAPI use: **BID ARRIVAL / live activity insertion**

---

## Demo source

```tsx
"use client"

import { cn } from "@/lib/utils"
import { AnimatedList } from "@/registry/magicui/animated-list"

interface Item {
  name: string
  description: string
  icon: string
  color: string
  time: string
}

let notifications = [
  {
    name: "Payment received",
    description: "Magic UI",
    time: "15m ago",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "Magic UI",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Magic UI",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Magic UI",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
]

notifications = Array.from({ length: 10 }, () => notifications).flat()

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{ backgroundColor: color }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center text-lg font-medium whitespace-pre dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  )
}

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t" />
    </div>
  )
}
```

---

## Internal component source

```tsx
"use client"

import React, {
  useEffect,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
} from "react"
import { AnimatePresence, motion, type MotionProps } from "motion/react"

import { cn } from "@/lib/utils"

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations: MotionProps = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  }

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  )
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode
  delay?: number
}

export const AnimatedList = React.memo(
  ({ children, className, delay = 1000, ...props }: AnimatedListProps) => {
    const [index, setIndex] = useState(0)
    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children]
    )

    useEffect(() => {
      let timeout: ReturnType<typeof setTimeout> | null = null

      if (index < childrenArray.length - 1) {
        timeout = setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length)
        }, delay)
      }

      return () => {
        if (timeout !== null) {
          clearTimeout(timeout)
        }
      }
    }, [index, delay, childrenArray.length])

    const itemsToShow = useMemo(() => {
      const result = childrenArray.slice(0, index + 1).reverse()
      return result
    }, [index, childrenArray])

    return (
      <div
        className={cn(`flex flex-col items-center gap-4`, className)}
        {...props}
      >
        <AnimatePresence>
          {itemsToShow.map((item) => (
            <AnimatedListItem key={(item as React.ReactElement).key}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    )
  }
)

AnimatedList.displayName = "AnimatedList"
```

---

## What the implementation actually does

The internal source confirms the useful part of this reference:

1. items are progressively revealed on a timer,
2. the newest item is moved to the top via `reverse()`,
3. `AnimatePresence` handles entering/exiting items,
4. each item has `layout`, so surrounding items reflow when the new item appears,
5. entry/exit uses `scale 0 ↔ 1` plus opacity,
6. the transition uses a spring with `stiffness: 350` and `damping: 40`,
7. default reveal delay is `1000ms`.

This makes it a stronger structural reference for **BID ARRIVAL** than the earlier 3D-card reference.

---

## KAPAPI assessment

### Keep / adopt as a pattern

- `AnimatePresence` for entering/exiting BID rows/cards
- `layout` for natural reflow of existing BIDs
- newest-event-first ordering where appropriate
- stable surrounding frame while market state changes
- discrete event-based insertion rather than decorative continuous movement

### Remix

The reference's `scale: 0 → 1` is too theatrical for KAPAPI if used literally on professional BID cards.

Preferred KAPAPI direction:

```text
NEW BID RECEIVED
→ new BID appears with low-amplitude y/opacity transition
→ existing BID rows move via layout animation
→ PRICE / DELIVERY / TRUST settle immediately
→ whole comparison set becomes static again
```

Likely final motion should use something closer to:

- small Y offset, not zero-scale pop
- opacity transition
- layout reflow
- short, damped transition
- no obvious bounce or overshoot

The exact final values belong in `KAPAPI_MOTION.md`, not here.

### Remove

- `scale: 0` entry
- emoji notification metaphor
- arbitrary bright colors
- large hover scaling
- notification-card visual language
- fake timed feed behavior in real transactional screens
- automatic one-item-per-second insertion outside demo/storytelling contexts

---

## KAPAPI applications

### Primary: BID ARRIVAL

```text
BID RECEIVED
→ PLAYER C enters comparison set
→ A/B shift smoothly to accommodate C
→ C's ₩ PRICE and DELIVERY TIME become legible
→ trust metadata resolves
→ layout rests
```

### Secondary

- QUEST activity feed
- workroom event log
- delivery/check events
- landing-page live-market demonstration

---

## Important implementation distinction

The **prototype hero/demo** may use timed insertion to demonstrate market activity.

The **real product screen** should insert only when an actual state/event occurs. Do not preserve the `setTimeout` reveal mechanism as product behavior.

Similarly, `reverse()` is useful for event feeds but may not be the correct ordering rule for the GM BID comparison screen. BID ranking should follow KAPAPI's decision logic rather than recency alone.

---

## Decision

**REMIX / P0**

This is now a fully captured implementation reference for `BID_ARRIVAL`.

Best primitive to retain:

> **AnimatePresence + layout-driven insertion/reflow**

Best primitive to discard:

> **scale-from-zero notification pop**

KAPAPI should make a new BID feel like it was inserted into an operating market, not popped onto the screen.
