# Magic UI Blur Fade — demo captures and KAPAPI assessment

Status: **captured (demo usage only)**  
Decision: **REMIX / P2 utility**  
Primary KAPAPI use: **rare editorial/text reveal only**

---

## Demo A — text reveal

```tsx
import { BlurFade } from "@/components/ui/blur-fade"

export function BlurFadeTextDemo() {
  return (
    <section id="header">
      <BlurFade delay={0.25} inView>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Hello World 👋
        </h2>
      </BlurFade>
      <BlurFade delay={0.25 * 2} inView>
        <span className="text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none">
          Nice to meet you
        </span>
      </BlurFade>
    </section>
  )
}
```

---

## Demo B — staggered image reveal

```tsx
import { BlurFade } from "@/registry/magicui/blur-fade"

const images = Array.from({ length: 9 }, (_, i) => {
  const isLandscape = i % 2 === 0
  const width = isLandscape ? 800 : 600
  const height = isLandscape ? 600 : 800
  return `https://picsum.photos/seed/${i + 1}/${width}/${height}`
})

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="columns-2 gap-4 sm:columns-3">
        {images.map((imageUrl, idx) => (
          <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
            <img
              className="mb-4 size-full rounded-lg object-contain"
              src={imageUrl}
              alt={`Random stock image ${idx + 1}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  )
}
```

---

## What is actually confirmed by these demos

The internal `BlurFade` source has **not** been captured yet, so its exact blur distance, opacity curve, y-offset, duration, easing, viewport implementation, and reduced-motion handling remain unknown.

The demos do confirm the intended API/usage pattern:

- `inView` enables viewport-triggered reveal.
- `delay` can sequence related elements.
- A simple text pair uses `0.25s` and `0.5s` delays.
- A collection can stagger with `0.25 + idx * 0.05`.
- The pattern is designed for reveal choreography, not live product-state transitions.

---

## KAPAPI assessment

### Good uses

- one or two major editorial statements on the landing page
- supporting copy after a major product-state sequence
- restrained internal-execution explanation copy
- occasional visual asset reveal where sequencing materially improves comprehension

### Avoid

- site-wide section fade-up
- 업무 list items
- 제안 cards
- PRICE × DELIVERY values
- 긴급 업무
- 작업자 trust metrics
- form controls
- repeated card grids
- core transaction states

The image-grid demo is especially useful as a **warning**: the stagger mechanism is easy to overuse and can immediately make a product page feel like a template gallery.

---

## KAPAPI adaptation rule

Use Blur Fade only when the reveal itself directs attention to a meaningful narrative beat.

Do not use it as a default entrance animation.

If a section looks equally clear without Blur Fade, remove the effect.

For collection reveals, avoid long cascades. If a stagger is necessary, keep the per-item delta small and the total choreography short enough that the user never waits for content to become readable.

---

## Missing source to inspect before implementation

Capture or inspect the actual `BlurFade` implementation before finalizing `KAPAPI_MOTION.md`, specifically:

- blur radius / filter values
- opacity range
- positional offset
- duration and easing
- viewport threshold / once behavior
- whether it uses Motion/Framer Motion
- `prefers-reduced-motion` behavior
- rendering/GPU cost when many elements are staggered

---

## Decision

**REMIX / P2 utility**

Useful as a restrained editorial helper, but never a KAPAPI signature motion.
