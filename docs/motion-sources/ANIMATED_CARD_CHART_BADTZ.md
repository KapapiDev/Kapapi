# Animated Card Chart by badtz

Status: **demo wrapper captured; implementation source missing**  
Current decision: **TBD / hold for source verification**

## Demo code

```tsx
import {
  AnimatedCard,
  CardBody,
  CardDescription,
  CardTitle,
  CardVisual,
} from "@/components/ui/animated-card-chart"
import { Visual3 } from "@/components/ui/animated-card-chart"

export default function AnimatedCard3Demo() {
  return (
    <AnimatedCard>
      <CardVisual>
        <Visual3 mainColor="#ff6900" secondaryColor="#f54900" />
      </CardVisual>
      <CardBody>
        <CardTitle>Just find the right caption</CardTitle>
        <CardDescription>
          This card will tell everything you want
        </CardDescription>
      </CardBody>
    </AnimatedCard>
  )
}
```

## What this demo proves

The public/demo wrapper exposes a composition built from:

- `AnimatedCard`
- `CardVisual`
- `CardBody`
- `CardTitle`
- `CardDescription`
- `Visual3`

The visual accepts `mainColor` and `secondaryColor` props.

## What is still unknown

This wrapper does **not** reveal the actual animation implementation. We still need the source of `animated-card-chart` / `Visual3` before deciding whether the reference is appropriate for KAPAPI.

Unknowns include:

- animation trigger
- duration / easing / spring parameters
- chart drawing behavior
- hover/scroll/autoplay behavior
- motion dependencies
- runtime/performance cost
- reduced-motion behavior

Therefore do not treat this file as implementation guidance yet.

## Possible KAPAPI role if the underlying motion is good

Potential use is limited to **historical trust/reliability visualization**, such as:

- recent 업무 completion history
- on-time performance over time
- revision/rework trend
- category-specific 작업자 reliability

Do not use charts merely to decorate 작업자 profiles. If a single number communicates the decision better, prefer Number Flow or static typography.

## Visual adaptation rules

If later adopted:

- do not copy orange colors from the demo
- use KAPAPI design tokens
- avoid crypto/dashboard aesthetics
- keep chart data sparse and decision-relevant
- motion must answer a trust question, not simply make the card feel alive

## Acceptance question

Any client-facing chart should provide concise execution evidence, without becoming a worker-comparison surface. Internal operations may use worker reliability trends for routing. The client-facing question is:

> Do the proposed result, price, completion time and revision/recovery boundaries fit this work?

Until the full component source is inspected, final classification remains **TBD**.
