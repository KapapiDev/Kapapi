# Spotlight Card / GlowCard Demo

Status: **partial source only**  
Source type: **demo wrapper, not underlying component implementation**  
Current decision: **DEFAULT REJECT / EXPERIMENTAL ONLY**

## Demo source

```tsx
import { GlowCard } from "@/components/ui/spotlight-card";

export function Default(){
  return(
    <div className="w-screen h-screen flex flex-row items-center justify-center gap-10 custom-cursor">
      <GlowCard />
      <GlowCard />
      <GlowCard />
    </div>
  );
};
```

## What this proves

This snippet only proves that a reusable `GlowCard` component exists and is rendered in a row. It does **not** expose the actual spotlight/glow motion logic, pointer tracking, blur radius, easing, transition duration, GPU cost, or accessibility behavior.

## KAPAPI judgment

Default decision: **reject for production prototype unless isolated visual QA proves a clear product benefit**.

Why:

- cursor-following glow is easy to make portfolio-like
- can compete with QUEST/BID information for attention
- may add continuous GPU work
- the demo itself adds `custom-cursor`, which is a warning sign for product usability if overused
- KAPAPI should feel like a live professional-work system, not an effects showcase

## Possible narrow use

A restrained spotlight may be tested only in one dark hero/product-preview surface if it helps reveal functional UI underneath the pointer.

Allowed experiment:

```text
pointer enters dark hero product frame
→ extremely soft local highlight reveals hairlines / status details
→ effect disappears immediately when pointer leaves
```

Not allowed:

- site-wide cursor follower
- visible glowing orb
- strong chromatic bloom
- custom cursor that harms native interaction cues
- glow on every card
- reduced readability

## Evidence needed before reconsideration

Obtain the actual `spotlight-card` / `GlowCard` implementation if possible and inspect:

- pointer event frequency
- CSS variables or React state used for coordinates
- blur/filter usage
- requestAnimationFrame usage if any
- transition timing
- mobile fallback
- `prefers-reduced-motion`
- GPU/compositing cost

Until then this remains an experimental reference, not a recommended KAPAPI primitive.
