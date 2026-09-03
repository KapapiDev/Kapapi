# Number Flow by Maxwell Barvian — Verified Motion Source

Status: **source captured from 21st.dev by user**  
Reference type: **direct implementation candidate**  
KAPAPI motion reference: `REF-21-001`

## Original component source

https://number-flow.barvian.me/

## Original 21st.dev demo

```tsx
'use client';

import { useState } from 'react';
import NumberFlow, { type Value } from "@number-flow/react";

const values: Value[] = [398.43, -3243.5, 1435237];

function NumberFlowDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex((prev) => (prev + 1) % values.length);
  };

  return (
    <div
      onClick={handleClick}
      className="min-h-screen w-full min-w-[100vw] flex flex-col items-center justify-center cursor-pointer text-[40px]"
    >
      <div className="pointer-events-none">
        <NumberFlow value={values[currentIndex]} trend={false} />
      </div>
      <p className="absolute bottom-6 text-sm text-gray-500 pointer-events-none">
        Click anywhere to change values
      </p>
    </div>
  );
}

export default { NumberFlowDemo };
```

## What is actually verified from the source

The useful primitive is deliberately small:

```tsx
<NumberFlow value={value} trend={false} />
```

The demo itself only changes the React value on interaction. The number-transition behavior is delegated to `@number-flow/react` rather than hand-authored Framer Motion code.

Therefore KAPAPI should treat this as a **specialized numeric-state component**, not as inspiration for unrelated page animation.

## KAPAPI adaptation candidates

High-confidence uses, only where the underlying state is actually shown on that surface:

- internal-mechanism demo 제안 count: `6 → 7`
- internal-mechanism demo price when a focal proposal changes
- 작업자 completed-업무 count
- on-time percentage when animated as part of a staged demo
- delivery performance metrics

Conditional use:

- 긴급 업무 countdown, only after checking whether Number Flow behaves cleanly at one-second cadence and does not create distracting digit churn

Do not use for:

- static currency values that never change
- every metric on initial render
- decorative rolling numbers
- decorative progression scores
- slot-machine-like repeated looping

## Implementation decision

**ADOPT / P0**, subject to prototype dependency review.

Claude Code should first test `@number-flow/react` in an isolated KAPAPI metric component and verify:

1. Korean locale/currency formatting compatibility where needed.
2. Stable width/layout while digits change.
3. Decimal and negative-value behavior.
4. Reduced-motion behavior.
5. One-second countdown performance before using it in 긴급 업무.
6. No conflict with KAPAPI numeric typography or tabular-number requirements.

## Design principle

> Animate numbers because the underlying product state changed, not because numbers happen to be visible.
