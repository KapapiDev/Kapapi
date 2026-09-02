# Animated Feature Carousel by Le Thanh

Source type: 21st.dev component + demo
Status: **REMIX / P0 narrative-motion reference**
Primary KAPAPI use: **Hero transaction sequence**

## Source-backed assessment

This component is genuinely useful for KAPAPI, but not as a literal carousel.

The strongest transferable pattern is a **stable shell with synchronized state progression**:

- `AUTO_PLAY_INTERVAL = 3000`
- one current state at a time
- a vertical status/index list that moves in sync with the main visual
- `prev / active / next` card states
- the active state receives full opacity and scale while adjacent states remain visible but subordinate
- `AnimatePresence` introduces only the active state's supporting copy
- autoplay pauses on hover

For KAPAPI, this maps naturally to:

```text
QUEST CREATED
→ BID RECEIVED
→ BID COMPARISON
→ PLAYER SELECTED
→ DELIVERED
→ QUEST COMPLETE
```

The important idea is that the **product frame stays stable while the transaction state evolves inside it**. This is much stronger than presenting six unrelated marketing slides.

## Motion primitives worth reusing

### 1. Synchronized state rail

The left-side feature labels are positioned by state distance:

```ts
y: wrappedDistance * ITEM_HEIGHT
opacity: 1 - Math.abs(wrappedDistance) * 0.25
```

This can become a restrained KAPAPI transaction rail such as:

```text
01 QUEST
02 BIDS
03 SELECTED
04 WORKING
05 DELIVERED
06 COMPLETE
```

Do not copy the large pill styling.

### 2. Active / prev / next hierarchy

The main cards use explicit state roles:

```ts
x: active ? 0 : prev ? -100 : next ? 100 : 0
scale: active ? 1 : prev || next ? 0.85 : 0.7
opacity: active ? 1 : prev || next ? 0.4 : 0
rotate: prev ? -3 : next ? 3 : 0
```

For KAPAPI this should be **calmer**:

- reduce x displacement
- remove or nearly remove rotation
- reduce scale delta
- preserve operational readability

### 3. Controlled spring transitions

Reference values:

```ts
transition={{
  type: "spring",
  stiffness: 260,
  damping: 25,
  mass: 0.8,
}}
```

Useful as a starting reference, not a final token. KAPAPI should test a more damped, less playful variant.

The left state rail uses a softer spring:

```ts
transition={{
  type: "spring",
  stiffness: 90,
  damping: 22,
  mass: 1,
}}
```

### 4. Active-state copy reveal

```ts
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: 10 }}
```

Potentially useful for small state-specific explanatory text. Do not turn this into site-wide fade-up behavior.

### 5. Autoplay pause on interaction

The carousel pauses on hover. KAPAPI's hero narrative should similarly yield control to the user immediately.

## KAPAPI adaptation

Recommended hero structure:

```text
┌─────────────────────────────────────────────┐
│ QUEST #0182                    TIME ATTACK   │
│ 기존 건물 현황도 CAD 작성                  │
│                                             │
│   [stable product frame]                    │
│                                             │
│ 01 QUEST                                    │
│ 02 BIDS          ← active state rail        │
│ 03 SELECTED                                 │
│ 04 WORKING                                  │
│ 05 DELIVERED                                │
│ 06 COMPLETE                                 │
└─────────────────────────────────────────────┘
```

Inside the stable product frame, the actual product state changes:

- QUEST specification appears
- BID A arrives
- BID B / C appear
- GM selection locks
- work state progresses
- file arrives
- QUEST COMPLETE resolves

The sequence should feel like **one transaction happening live**, not a feature slideshow.

## Remove / reject from the reference

Do not copy:

- bright blue palette
- Unsplash photography
- large rounded `2.5rem / 4rem` shell
- giant pill navigation
- photo-card metaphor
- ±3° card rotation as a default
- aggressive `scale: 0.85`
- grayscale/blur image treatment
- `Live Session` decoration
- autoplay that continues while the user is actively interacting

## Timing guidance

The source changes states every 3000ms. That is useful evidence, but KAPAPI should not blindly use one interval for every narrative step.

Suggested exploration:

- QUEST established: 1.8–2.4s
- each BID arrival: 1.4–2.0s
- comparison pause: 2.0–3.0s
- PLAYER SELECTED: 1.5–2.0s
- delivery / complete: 2.0–3.0s

The full hero loop should remain understandable rather than fast merely to look dynamic.

## Accessibility / interaction requirements

- respect `prefers-reduced-motion`
- if reduced motion is enabled, show a static representative state or simple crossfade
- pause autoplay on hover and keyboard focus
- allow the user to interact without the next autoplay step stealing state
- do not rely on motion alone to communicate current status

## Final decision

**REMIX / P0.**

This is one of the strongest source-backed references so far for KAPAPI's hero because it solves a real problem: **how to show a multi-step product story while keeping the visual frame coherent.**

---

## Original source supplied by user

```tsx
// --- Component ---
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Pizza04Icon,
  CommandFreeIcons,
  GlobalSearchIcon,
  AiCloudIcon,
  SmartPhone01Icon,
  CheckmarkCircle01Icon,
  DashboardSquare01Icon,
  MagicWandIcon,
} from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";

// Change Here
const FEATURES = [
  {
    id: "sustainable",
    label: "Sustainable Sourcing",
    icon: Pizza04Icon,
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200",
    description: "Ethically sourced ingredients from local farmers.",
  },
  {
    id: "community",
    label: "Community Focused",
    icon: CommandFreeIcons,
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200",
    description: "Building stronger bonds through shared experiences.",
  },
  {
    id: "global",
    label: "Global Reach",
    icon: GlobalSearchIcon,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200",
    description: "Connecting visionaries across all continents.",
  },
  {
    id: "award",
    label: "Award Winning",
    icon: CheckmarkCircle01Icon,
    image:
      "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?q=80&w=1200",
    description: "Recognized excellence in design and innovation.",
  },
  {
    id: "cloud",
    label: "Cloud Ready",
    icon: AiCloudIcon,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
    description: "Scale your infrastructure with seamless ease.",
  },
  {
    id: "mobile",
    label: "Mobile First",
    icon: SmartPhone01Icon,
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200",
    description: "A world-class experience on every single device.",
  },
  {
    id: "analytics",
    label: "Real-time Analytics",
    icon: DashboardSquare01Icon,
    image:
      "https://images.unsplash.com/photo-1551288049-bbda38a10ad5?q=80&w=1200",
    description: "Insights at your fingertips, updated in real-time.",
  },
  {
    id: "security",
    label: "Enterprise Security",
    icon: CheckmarkCircle01Icon,
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
    description: "Bank-grade security protocols for your data.",
  },
  {
    id: "magic",
    label: "Magic Automations",
    icon: MagicWandIcon,
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200",
    description: "Let AI handle the repetitive tasks for you.",
  },
  {
    id: "local",
    label: "Locally Owned",
    icon: CheckmarkCircle01Icon,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200",
    description: "Supporting local businesses and creators.",
  },
];

const AUTO_PLAY_INTERVAL = 3000;
const ITEM_HEIGHT = 65;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function FeatureCarousel() {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex =
    ((step % FEATURES.length) + FEATURES.length) % FEATURES.length;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + FEATURES.length) % FEATURES.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = FEATURES.length;

    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  return (
    <div className="w-full max-w-7xl mx-auto md:p-8">
      <div className="relative overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] flex flex-col lg:flex-row min-h-[600px] lg:aspect-video border border-border/40">
        <div className="w-full lg:w-[40%] min-h-[350px] md:min-h-[450px] lg:h-full relative z-30 flex flex-col items-start justify-center overflow-hidden px-8 md:px-16 lg:pl-16 bg-[#62B2FE] ">
          <div className="absolute inset-x-0 top-0 h-12 md:h-20 lg:h-16 bg-gradient-to-b from-[#62B2FE] via-[#62B2FE]/80 to-transparent z-40" />
          <div className="absolute inset-x-0 bottom-0 h-12 md:h-20 lg:h-16 bg-gradient-to-t from-[#62B2FE] via-[#62B2FE]/80 to-transparent z-40" />
          <div className="relative w-full h-full flex items-center justify-center lg:justify-start z-20">
            {FEATURES.map((feature, index) => {
              const isActive = index === currentIndex;
              const distance = index - currentIndex;
              const wrappedDistance = wrap(
                -(FEATURES.length / 2),
                FEATURES.length / 2,
                distance
              );

              return (
                <motion.div
                  key={feature.id}
                  style={{
                    height: ITEM_HEIGHT,
                    width: "fit-content",
                  }}
                  animate={{
                    y: wrappedDistance * ITEM_HEIGHT,
                    opacity: 1 - Math.abs(wrappedDistance) * 0.25,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 22,
                    mass: 1,
                  }}
                  className="absolute flex items-center justify-start"
                >
                  <button
                    onClick={() => handleChipClick(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={cn(
                      "relative flex items-center gap-4 px-6 md:px-10 lg:px-8 py-3.5 md:py-5 lg:py-4 rounded-full transition-all duration-700 text-left group border",
                      isActive
                        ? "bg-white text-[#62B2FE] border-white z-10"
                        : "bg-transparent text-white/60 border-white/20 hover:border-white/40 hover:text-white"
                    )}
                  >
                    <div
                      className={cn(
                        "flex items-center justify-center transition-colors duration-500",
                        isActive ? "text-[#62B2FE]" : "text-white/40"
                      )}
                    >
                      <HugeiconsIcon
                        icon={feature.icon}
                        size={18}
                        strokeWidth={2}
                      />
                    </div>

                    <span className="font-normal text-sm md:text-[15px] tracking-tight whitespace-nowrap uppercase">
                      {feature.label}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="flex-1 min-h-[500px] md:min-h-[600px] lg:h-full relative bg-secondary/30 flex items-center justify-center py-16 md:py-24 lg:py-16 px-6 md:px-12 lg:px-10 overflow-hidden border-t lg:border-t-0 lg:border-l border-border/20">
          <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center">
            {FEATURES.map((feature, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";

              return (
                <motion.div
                  key={feature.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -100 : isNext ? 100 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.85 : 0.7,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.4 : 0,
                    rotate: isPrev ? -3 : isNext ? 3 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 25,
                    mass: 0.8,
                  }}
                  className="absolute inset-0 rounded-[2rem] md:rounded-[2.8rem] overflow-hidden border-4 md:border-8 border-background bg-background origin-center"
                >
                  <img
                    src={feature.image}
                    alt={feature.label}
                    className={cn(
                      "w-full h-full object-cover transition-all duration-700",
                      isActive
                        ? "grayscale-0 blur-0"
                        : "grayscale blur-[2px] brightness-75"
                    )}
                  />

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute inset-x-0 bottom-0 p-10 pt-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end pointer-events-none"
                      >
                        <div className="bg-background text-foreground px-4 py-1.5 rounded-full text-[11px] font-normal uppercase tracking-[0.2em] w-fit shadow-lg mb-3 border border-border/50">
                          {index + 1} • {feature.label}
                        </div>
                        <p className="text-white font-normal text-xl md:text-2xl leading-tight drop-shadow-md tracking-tight">
                          {feature.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div
                    className={cn(
                      "absolute top-8 left-8 flex items-center gap-3 transition-opacity duration-300",
                      isActive ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]" />
                    <span className="text-white/80 text-[10px] font-normal uppercase tracking-[0.3em] font-mono">
                      Live Session
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCarousel


// --- Demo ---
"use client";
import FeatureCarousel from "@/components/ui/feature-carousel";

export default function Demo() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-background p-8">
      <FeatureCarousel />
    </div>
  );
}
```
