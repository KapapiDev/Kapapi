# KAPAPI Design System

Status: **canonical visual specification for the current prototype**  
Updated: **2026-09-03**

Product meaning comes from the latest product canon, especially D-032. This document defines how that meaning should look.

KAPAPI should feel like a serious work-execution product with a restrained game/state layer, not a game UI wearing business clothes.

> **Outside: sharp, memorable, alive. Inside: calm, clear, trustworthy.**

## 1. Product meaning before style

Current visual transaction:

```text
WORK EXISTS
→ GM creates a QUEST
→ PLAYERs discover it
→ PRICE × DELIVERY BIDs arrive
→ KAPAPI filters/ranks
→ RECOMMENDATION
→ GM CONFIRMS
→ ASSIGNED / WORK
→ RESULT
```

Future evolution:

```text
QUEST COMPLETE data
→ trust
→ recommendation
→ routing / recovery
→ repeat capacity
→ WORK IN → RESULT OUT
```

The design must not visually imply that universal auto-routing is already solved.

---

## 2. Core visual priorities

Optimize for:

1. **work-object clarity** — QUEST/file/result are concrete objects;
2. **task-first discovery** — open work is visually primary on PLAYER surfaces;
3. **PRICE × DELIVERY legibility** — the two dimensions are obvious together;
4. **recommendation confidence** — one candidate can be understood quickly;
5. **confirmation clarity** — recommended is distinct from assigned;
6. **trust evidence** — relevant history beats decorative gamification;
7. **delivery proof** — files, timestamps and checks dominate completion;
8. **future evolution** — show data → trust → routing without overclaiming.

---

## 3. Visual character

KAPAPI should feel:

- precise
- editorial
- operational
- premium
- slightly competitive
- technically sophisticated
- quiet at rest
- alive when work changes state

KAPAPI should not feel:

- fantasy RPG
- crypto/gamer RGB
- generic AI startup
- stock shadcn/Tailwind dashboard
- black-card developer console
- generic freelancer-directory beige
- CAD/construction vertical SaaS

---

## 4. Reference synthesis

Use references as principles, not layouts to clone.

### Linear

Use precision, grid discipline, thin separators, compact information hierarchy.

### Hyperstudio

Use editorial confidence, art-directed composition and intentional whitespace.

### Factory

Use work-as-object/state thinking and operational clarity.

### Vercel

Use transaction/form restraint, obvious actions and quiet hierarchy.

### Mercury

Use trustworthy B2B calm and polished data modules.

### Raycast

Use tactile micro-interactions and restrained HUD energy.

### Korean marketplaces

Use familiar request/budget/deadline/delivery/revision language and mobile transaction expectations where they improve comprehension.

Never copy exact brand geometry, layouts or assets.

---

## 5. Theme architecture

### Public landing / QUEST creation

- white/off-white base
- black/graphite typography
- generous but disciplined whitespace
- restrained hairlines
- one signal accent family

### Open QUEST / PLAYER discovery

- scannable light surface
- compact category/deadline/eligibility metadata
- task title and outcome above decorative identity

### BID / recommendation

- calm comparison surface
- PRICE × DELIVERY prominent
- relevant history/on-time/revision immediately legible
- recommended candidate visually clear without theatrical winner effects
- alternatives quieter but inspectable

### Workroom / TIME ATTACK

Dark contextual treatment may be used when it improves active operational state.

### Completion

Return to a bright/clean result surface. File/result proof dominates.

### Outcome Layer direction

Use progressively fewer visible objects to communicate complexity collapsing behind KAPAPI, but label it clearly as future evolution.

---

## 6. Color philosophy

Use a disciplined neutral system plus one signal accent family.

Reference neutral relationships:

```text
near black / ink / graphite
white / off-white paper
hairline light/dark borders
muted text with sufficient contrast
```

Signal color should:

- work on light and dark
- feel technical, not playful
- be used in small quantities
- indicate action/state, not decorate empty space

Semantic warning/success colors may exist where state requires them.

---

## 7. Typography

Use:

- strong editorial/display role for major public headlines
- high-readability Korean sans for product/body
- restrained mono/HUD role for IDs, PRICE/DELIVERY, states and timing

Rules:

- ordinary Korean stays readable at all relevant widths;
- no novelty game font;
- no tiny gray startup copy;
- HUD typography is seasoning, not the whole product voice.

---

## 8. Core object hierarchy

### QUEST card

Priority:

1. work title/result
2. deadline / TIME ATTACK
3. reward/range
4. eligibility/category
5. BID count/state

Do not make issuer/avatar the visual protagonist.

### BID

Priority:

1. PRICE
2. DELIVERY
3. task-relevant history/career
4. reliability
5. short note if useful

### Recommendation

Priority:

1. `추천`
2. recommended PLAYER identity
3. PRICE + DELIVERY
4. why/relevant evidence
5. `이 작업자로 진행`
6. `다른 제안 보기`

Before confirmation, do not use the visual language of final assignment.

### Assigned/work state

Only after GM confirmation should the UI use `확정`, `ASSIGNED`, `WORK STARTED` semantics.

### Result

Priority:

1. delivered file/result
2. delivery timing
3. objective checks performed
4. `결과 확인` / `수정 요청`
5. restrained history/EXP update

---

## 9. Task-first PLAYER surfaces

PLAYER discovery should visibly begin with open work.

Preferred pattern:

```text
지금 열려 있는 작업
[전체] [내가 할 수 있는 작업] [오늘 마감]
→ QUEST rows/cards
```

Do not require seller-storefront creation as the first visual step.

One account may issue and perform different QUESTs. Avoid permanent buyer/seller mode-switch design.

---

## 10. World grammar

Allowed when real:

- QUEST #...
- BID
- TIME ATTACK
- LEVEL / EXP
- REWARD
- QUEST COMPLETE

Current state grammar may also include:

- RECOMMENDATION READY
- GM CONFIRMED
- PLAYER ASSIGNED

Never use:

- fantasy art
- coins/swords
- rarity systems
- fake network-online lore
- arbitrary pseudo-terminal labels

World energy should come from real work state and verified history.

---

## 11. Spacing / radii / borders

- disciplined grid and rhythm
- restrained radii
- subtle/rare shadows
- hairlines before floating-card effects
- avoid giant rounded-card walls
- enough negative space for hierarchy, not emptiness

---

## 12. Interaction hierarchy

Current recommendation surface:

Primary:

> **이 작업자로 진행**

Secondary:

> **다른 제안 보기**

The primary should feel consequential but not celebratory.

The GM should be able to understand the recommendation without reading every alternative.

---

## 13. Hero design

The task-entry surface is the protagonist.

Current semantic copy direction:

> **맡길 일을 적어주세요.**  
> 카파피가 작업 조건을 정리하고 맞는 제안을 추천합니다.

Product-movie states:

```text
QUEST CREATED
→ BIDS RECEIVED
→ ELIGIBILITY CHECK
→ RECOMMENDATION READY
→ GM CONFIRMED
→ RESULT READY
```

The laptop/video treatment must remain subordinate to the action and truthful to this flow.

---

## 14. Category neutrality

The public first impression must not be dominated by Architecture/CAD.

Use a balanced example set including ordinary office/support and skilled work:

- PDF/spreadsheet/data
- document/PPT
- image/e-commerce
- language/media
- CAD/skilled production
- small web/code tasks

CAD may be the detailed founder-domain case lower on the page.

---

## 15. Future Outcome Layer visual

If shown, make the progression understandable:

```text
MARKET
→ TRUST
→ RECOMMEND
→ ROUTE / RECOVER
→ OUTCOME
```

Potential mature execution resources:

`HUMAN PLAYER · AI · AUTOMATION · SPECIALIST PARTNER · HYBRID`

This section must read as product evolution, not current universal capability.

---

## 16. Accessibility / responsive

- semantic structure
- visible keyboard focus
- touch-safe controls
- sufficient contrast
- status never color-only
- reduced-motion path
- no horizontal overflow
- recommendation/confirmation remains understandable on mobile

---

## 17. Rejection gate

Reject a screen if:

- it looks like a generic dashboard/template;
- task/work is less prominent than people/profile decoration;
- recommendation and assignment are indistinguishable;
- it implies universal day-one auto-routing;
- CAD defines the product visually;
- world decoration obscures professional trust;
- the design needs paragraphs to explain what the UI should show.

Desired visual reaction:

> **“일이 먼저 있고, 카파피가 선택을 쉽게 만들어주며, 거래가 쌓일수록 더 많은 실행을 맡게 되는 제품.”**
