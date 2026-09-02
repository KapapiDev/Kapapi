# Magic UI Animated List — source capture and KAPAPI assessment

Status: **captured**  
Decision: **REMIX / P0**  
Primary KAPAPI use: **BID ARRIVAL / live activity insertion**

---

## Source

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
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
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

export function AnimatedListDemo({
  className,
}: {
  className?: string
}) {
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

      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
    </div>
  )
}
```

---

## Assessment

This is a materially better **BID ARRIVAL** reference than the earlier 3D card example.

The demo itself does not expose the internal implementation of `AnimatedList`, so the exact insertion transition still needs to be inspected before final implementation. However, the product pattern is already appropriate: a live stream/list where new items appear over time while the surrounding frame stays stable.

### KAPAPI adaptation

Use this pattern for:

```text
BID RECEIVED
→ new PLAYER BID enters the live comparison/activity list
→ PRICE / DELIVERY / TRUST become legible
→ surrounding BID set stays stable
```

Potential secondary uses:

- QUEST activity feed
- workroom status events
- delivery/check events
- limited landing-page live-market demonstration

### Keep

- stable container with changing list content
- short interaction feedback around 200ms as a rough reference
- `transform-gpu` mindset
- clipped feed / controlled viewport
- live-event semantics

### Remove or redesign

- emoji icons
- arbitrary bright per-item colors
- notification-app visual language
- large `hover:scale-[103%]`
- glassy/shadow-heavy card styling
- duplicated fake notification data
- bottom fade if it obscures useful BID comparison

### KAPAPI rule

A BID should feel like it **entered a market**, not like a phone notification popped up.

The list motion can be borrowed, but the visual language must remain KAPAPI: hairlines, restrained state accents, compact data, strong PRICE × DELIVERY hierarchy.

### Missing source

The internal source for:

```tsx
AnimatedList
```

has not been captured yet. Before implementation, Claude Code should inspect the Magic UI component implementation and record:

- entry/exit transition
- delay/stagger behavior
- insertion direction
- layout/reflow behavior
- dependency stack
- reduced-motion behavior
- runtime cost

If the internal component uses decorative spring/bounce behavior, keep only the useful insertion/layout primitive and rebuild it with KAPAPI motion tokens.

---

## Decision

**REMIX / P0**

This becomes a primary candidate for `BID_ARRIVAL`, replacing the earlier assumption that the Jessi 3D card component would serve that role.
