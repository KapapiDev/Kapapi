# Motion/UI Source Pools

Status: **reference registry**  
Branch: `docs/initial-product-design`

These are source pools for implementation research. They are not visual style authorities and must not override `docs/KAPAPI_DESIGN.md` or the final `docs/KAPAPI_MOTION.md`.

## 1. ReUI

Source: https://reui.io/components

Role: **production UI/state pattern source**

Useful areas for KAPAPI:
- Timeline / Stepper / Progress
- File Upload
- Dialog / Sheet / Empty State
- Data Grid / List / Filters
- Profile / Stats / Onboarding

Why it is useful:
- copy-and-own shadcn-based source
- realistic product-flow compositions rather than only isolated primitives
- strong reference pool for states, workflows, and dense B2B UI

KAPAPI rule:
- borrow structure, state semantics, accessibility and product behavior
- do not inherit generic shadcn dashboard styling
- redesign with KAPAPI hairlines, typography, spacing, status hierarchy and motion tokens

## 2. PatternFly v4 archive

Source: https://v4-archive.patternfly.org/v4/components/application-launcher

Role: **enterprise interaction / accessibility / failure-state reference**

Useful areas for KAPAPI:
- Progress Stepper
- Alert / Empty State
- Drag and Drop
- Drawer / Dropdown / Popover
- File Upload
- Navigation / Toolbar
- accessibility guidance and explicit state semantics

Important limitation:
- this is the PatternFly **v4 archive**, not a current style or API target
- use it for mature enterprise behavior, accessibility, edge cases, and state modeling
- do not copy its visual language or depend on archived implementation APIs without separate verification

## 3. Magic UI

Source: https://magicui.design/docs/components

Role: **motion primitive / marketing interaction source**

Already captured KAPAPI references include:
- Animated List → `BID_ARRIVAL`
- Animated Beam → `AUTOPILOT` explanation
- Blur Fade → sparse supporting reveal

Potential utility-only references:
- Number Ticker
- Border Beam / Shine Border
- Progressive Blur
- Morphing Text / Text Animate
- Scroll Progress

KAPAPI rule:
- extract the smallest useful motion primitive
- remove neon, glow, rainbow, glass, generic AI-SaaS visual language
- never use effects merely because they look animated

## 4. Motion Primitives

Source: https://motion-primitives.com/docs/accordion

Role: **product-grade motion primitive source**

Useful areas for KAPAPI:
- Accordion / Disclosure
- Animated Background
- Dialog / Morphing Dialog
- Transition Panel
- Text Morph
- Animated / Sliding Number
- Toolbar transitions

The Accordion reference exposes configurable Motion `transition` and expanded/collapsed `variants`, making it useful for restrained state transitions where content must expand without generic fade-up effects.

KAPAPI rule:
- prefer Motion Primitives when the interaction is part of real product UI rather than decoration
- retain accessible state continuity and low-amplitude motion
- avoid tilt, spotlight, magnetic, glow, and other novelty interactions unless a specific product meaning justifies them

---

# Priority order

For KAPAPI implementation research:

1. **Motion official examples** — layout, shared layout, reordering foundations
2. **Motion Primitives** — product-grade transition primitives
3. **ReUI** — workflow/state composition
4. **Magic UI** — selective marketing/signature motion primitives
5. **PatternFly archive** — accessibility, enterprise state and edge-case reference

This ordering is about **behavioral authority**, not aesthetics.

# Stop rule

The motion reference collection is already sufficient for Prototype v1. Do not continue collecting components by default.

Only return to these pools when implementation exposes a concrete missing interaction, state, accessibility issue, or performance problem. New references must answer a named product problem rather than expand the collection for its own sake.
