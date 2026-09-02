# KAPAPI Prototype v1 — Art Direction & World-Building

Status: **current canonical art-direction layer for Prototype v1**  
Updated: **2026-09-02**

This document exists to prevent a technically correct KAPAPI implementation from becoming visually generic, game-cosplay, dark-first, or structurally similar to a conventional freelancer marketplace.

It is the **current visual/brand interpretation layer** for Prototype v1.

Authority order when visual examples conflict:

1. latest `DECISIONS.md` + `PRODUCT.md` + `PROTOTYPE_SPEC.md` define product behavior,
2. **this document defines current public art direction and world-building intensity,**
3. `KAPAPI_DESIGN.md` supplies detailed component/material/layout rules,
4. `KAPAPI_MOTION.md` supplies motion timing/behavior.

Any legacy example in `KAPAPI_DESIGN.md` or `KAPAPI_MOTION.md` that shows routine **GM BID comparison / GM PLAYER selection** is superseded for the default flow. The current default is KAPAPI auto-routing.

---

# 1. The visual thesis

KAPAPI should combine two properties that usually fight each other:

> **Upwork-level first-touch simplicity + a distinctive KAPAPI work-world.**

The visitor should first think:

> **“여기에 내가 맡길 일을 적으면 되는구나.”**

Then, while using the product, they should gradually realize that KAPAPI has its own operating language:

> work becomes a `QUEST`,  
> professionals are `PLAYERs`,  
> proposals are `BIDs`,  
> urgent work becomes `TIME ATTACK`,  
> execution history becomes `LEVEL / EXP`,  
> completion becomes `QUEST COMPLETE`.

The world must be **felt through product grammar**, not explained through fantasy decoration.

Desired reaction:

> “처음엔 엄청 쉬운 업무 위임 서비스인데, 쓰다 보니 KAPAPI라는 하나의 세계 안에서 일이 돌아간다.”

---

# 2. Public landing benchmark — Upwork

Reference URL:

> `https://www.upwork.com/`

Use the current Upwork homepage only as a **first-touch UX benchmark**, especially for:

- immediate comprehension,
- one strong hero idea,
- obvious next action,
- clean light-theme trust,
- generous hero scale,
- restrained navigation,
- short supporting copy,
- category/example shortcuts that lower blank-page anxiety,
- a hero that feels approachable rather than like enterprise software.

Do **not** copy:

- Upwork layout geometry,
- exact component arrangement,
- colors,
- copy,
- typography,
- illustrations/video composition,
- talent-search model,
- manual freelancer-selection flow.

KAPAPI must be easier on the GM side because the GM is not expected to routinely browse talent or choose among proposals.

Repository canon always overrides Upwork.

---

# 3. Above-the-fold art direction

The first viewport must have **one protagonist: the act of handing off work.**

Required semantic hierarchy:

```text
KAPAPI identity
→ plain-language result promise
→ large work-entry surface
→ file attachment
→ primary CTA: 일 맡기기
→ tiny reassurance/process line
→ secondary PLAYER entry
→ supporting product movie / proof
```

The visitor must not need to understand `QUEST`, `BID`, `PLAYER`, `LEVEL`, `EXP`, routing scores or dashboards before typing.

Good direction:

```text
할 일을 던져주세요.
전문가들이 가격과 완료시간을 제안하고,
KAPAPI가 가장 적합한 작업자를 자동으로 배정합니다.

[ 맡길 일을 적어주세요...                         ]
[ 파일 첨부 ]                         [ 일 맡기기 → ]

일 등록 → KAPAPI 자동 배정 → 작업 → 결과 확인
```

Secondary PLAYER entry may appear as:

> `일하러 오셨나요? → 일 찾기`

The hero may use real human footage, but the input/CTA remains more important than the movie.

Do not build a mini dashboard above the fold.

---

# 4. World-building is a core differentiator

World-building is **not decoration** and is **not optional polish**.

It should make KAPAPI recognizable even if the logo were temporarily hidden.

The world is created through five systems:

1. **language** — QUEST / PLAYER / BID / REWARD / TIME ATTACK / LEVEL / EXP,
2. **state** — CREATED / BIDS RECEIVED / ROUTING / ASSIGNED / COMPLETE,
3. **reputation** — task-specific history + LEVEL / EXP,
4. **motion** — work visibly enters, routes, resolves and completes,
5. **visual metadata** — compact IDs, timestamps, deadlines and machine-like operational labels.

Do not create the world through medieval/fantasy visual metaphors.

---

# 5. Layered language rule

The canonical language pattern is:

> **plain-language meaning → product state → KAPAPI world term**

Examples:

```text
업무 등록 완료
QUEST #0182 CREATED
```

```text
입찰 7건이 도착했습니다
7 BIDS RECEIVED
```

```text
KAPAPI가 작업자를 배정했습니다
PLAYER ASSIGNED
```

```text
긴급 업무
TIME ATTACK · 04:18:22
```

```text
작업이 완료되었습니다
QUEST COMPLETE
```

First-time GM copy should never become a glossary.

The system teaches the vocabulary by repeating it beside understandable real-world meaning.

---

# 6. World-building intensity by surface

World-building must not be equally loud everywhere.

Use this approximate intensity model as an art-direction guide, not a literal numeric implementation requirement.

## GM first-touch — LOW, approximately 20%

Primary language is ordinary Korean.

Allowed subtle signals:

- `QUEST NETWORK / ONLINE`,
- one tiny `QUEST` label after the concept is understood,
- restrained technical metadata,
- sapphire confirmation pulse after submit.

Do not lead with game terms.

## GM orchestration / progress — MEDIUM, approximately 40%

This is where the world becomes visible:

- `QUEST #0182`,
- `BIDS RECEIVED`,
- `ROUTING`,
- `PLAYER ASSIGNED`,
- `TIME ATTACK`,
- timestamps and delivery deltas.

Still prioritize comprehensible operational meaning.

## PLAYER surfaces — STRONG, approximately 70%

PLAYERs can enter the world more deeply because competition/progression is useful here.

Examples:

- `QUEST BOARD`,
- `REWARD`,
- `TIME ATTACK`,
- `LV.12`,
- `+240 EXP`,
- `QUESTS COMPLETE 42`,
- `ON-TIME 98%`.

Professional evidence must remain stronger than game status.

## Contracts / NDA / payment / dispute / result acceptance — LOW, approximately 10%

These surfaces become sober and precise.

Use ordinary professional language first.

World-building may survive only as quiet QUEST identity and metadata.

This transition in intensity is intentional:

> **fun at the edge, serious where money/risk rises.**

---

# 7. Core visual material

## Light first

Public KAPAPI is primarily:

- white,
- off-white,
- black,
- graphite,
- cool neutral gray,
- thin hairlines.

Dark surfaces are **operational punctuation**, not the global theme.

Use dark selectively for:

- routing moment,
- active Workroom state,
- TIME ATTACK,
- one deliberate brand/operational contrast transition.

The product must not read as a developer console.

## Signal accent — sapphire blue

Prototype v1 should use a **restrained cool sapphire-blue signal family** as the primary non-semantic accent.

Its job is to indicate meaningful interaction/state, not decorate the page.

Good uses:

- submit confirmation pulse,
- primary focus/active state,
- routing connector/state,
- assigned lock,
- selected system operation,
- small CTA emphasis where hierarchy requires it.

Do not use:

- violet/purple AI gradients,
- purple card ecosystems,
- full-screen blue washes,
- neon electric-blue cyberpunk styling,
- five competing accent colors.

The sapphire click confirmation can become a small signature KAPAPI interaction:

> final submit click → 0.2–0.4s localized sapphire confirmation → work leaves the GM.

---

# 8. Visual identity must come from composition, not effects

The premium quality target comes from:

- typography,
- whitespace,
- editorial composition,
- grid discipline,
- hairlines,
- state hierarchy,
- realistic product artifacts,
- exact interaction details,
- restrained motion.

Use:

- asymmetric editorial composition when useful,
- full-width sections rather than endless centered cards,
- compact product modules embedded in whitespace,
- small radii,
- nearly shadowless surfaces,
- crisp alignment,
- large but controlled display typography.

Avoid:

- generic rounded SaaS cards,
- gradient blobs,
- glass cards,
- random 3D objects,
- excessive illustrations,
- huge font merely for spectacle,
- card walls pretending to be information architecture.

---

# 9. The world should appear as work moves

At rest, KAPAPI is quiet.

As work begins moving, the world becomes more visible.

Example narrative:

```text
맡기기
→ sapphire confirmation
→ QUEST #0182 CREATED
→ 7 BIDS RECEIVED
→ ROUTING
→ PLAYER ASSIGNED
→ WORK STARTED
→ FILE DELIVERED
→ QUEST COMPLETE
→ +240 EXP (PLAYER-side / secondary)
```

This is preferable to placing LEVEL, TIME ATTACK, badges and QUEST terminology all over the landing page before anything happens.

---

# 10. Auto-routing visual grammar

This is one of KAPAPI's signature moments.

The UI must not look like the GM is choosing a winner.

Correct visual sequence:

```text
BIDs arrive
→ cards/rows settle
→ eligibility failures quietly fall away or mute
→ PRICE × DELIVERY + trust evidence resolves
→ KAPAPI routing state activates
→ one candidate receives ASSIGNED lock
→ rationale becomes inspectable
→ work begins
```

The selected state should feel **mechanical and consequential**, not celebratory.

Do not use:

- `Choose` buttons as the default GM path,
- winner podiums,
- confetti,
- trophy effects,
- glowing legendary cards,
- opaque “AI BEST MATCH” magic without evidence.

---

# 11. PLAYER world grammar

PLAYER surfaces carry more competitive energy.

A good profile hierarchy:

```text
김도현
건축사사무소 경력 5년

LV.12
유사 QUEST 42
ON-TIME 98%
수정 요청 4%
AVAILABLE
```

A good QUEST card might contain:

```text
QUEST #0182
TIME ATTACK · 04:18:22

쇼핑몰 상세페이지 12종 이미지 정리
REWARD ₩120,000
DELIVERY ≤ 6H
BIDS 05
```

The world language makes the work feel active and competitive, but real professional data protects trust.

Never use `LEGENDARY`, rarity tiers or fantasy classes as a substitute for evidence.

---

# 12. Result and completion grammar

Completion is the payoff, not a game reward explosion.

Target hierarchy:

```text
작업이 완료되었습니다
QUEST COMPLETE

result.zip
DELIVERED 18:42
18 MIN EARLY

✓ FILE RECEIVED
✓ FORMAT VERIFIED
✓ DELIVERY RECORDED

[ 결과 확인 ]   [ 수정 요청 ]
```

After GM acceptance, a restrained PLAYER-side EXP update may appear.

No confetti, coins, fireworks or bouncing trophy.

---

# 13. Hero media integration

The current product-movie concept is:

```text
GM submits
→ GM leaves / continues other work
→ KAPAPI handles the messy middle
→ result reaches GM elsewhere
→ GM checks result
```

The generated video is **live-action footage**, not the source of truth for KAPAPI UI.

When the camera reaches a laptop/phone screen:

- replace or cover generated fake UI with real KAPAPI HTML/CSS/product UI where feasible,
- keep generated readable nonsense out of the final public prototype,
- use the real UI sequence to show BID arrival → routing → assignment → progress → result.

Hero movie remains supporting proof. The task-entry CTA is still the protagonist.

---

# 14. Landing-page narrative below the fold

Recommended sequence:

1. **Hero:** hand off work immediately
2. **How it works:** one clean plain-language process
3. **The messy middle disappears:** BIDs + routing + auto-assignment proof
4. **Real QUEST case:** concrete professional task
5. **Trust:** relevant career + task history + delivery reliability
6. **TIME ATTACK:** urgent capacity gap
7. **Result loop:** result / revision / acceptance
8. **World/progression glimpse:** PLAYER LEVEL / EXP / QUEST BOARD
9. **Autopilot direction:** complexity collapses behind KAPAPI
10. **PLAYER entry / final CTA**

Do not repeat one generic card grid for all ten sections.

---

# 15. Visual rejection conditions

Reject the implementation if any of these dominate the first impression:

- “Upwork clone”
- “Kmong clone”
- freelancer directory
- generic AI SaaS
- generic shadcn dashboard
- dark developer tool
- crypto/game launcher
- fantasy RPG
- purple-gradient AI landing
- CAD-only service
- giant card wall

Reject world-building if it feels like:

- terminology pasted on top after design was finished,
- decorative badges unrelated to product state,
- fake gamification with no reputation meaning,
- a game theme that makes professional work less trustworthy.

---

# 16. Mandatory visual/world QA gate

Before Prototype v1 is considered visually ready, evaluate the rendered product against all of the following.

## First-touch

- Can a stranger identify the task-entry action in under 3 seconds?
- Is the landing at least as easy to enter as the Upwork benchmark?
- Is KAPAPI more result-oriented than Upwork rather than merely prettier?

## Identity

- Would the page still feel recognizably KAPAPI without a giant logo?
- Is world-building visible through state/language/motion rather than fantasy art?
- Does the system gradually teach QUEST / BID / PLAYER terminology?

## Visual quality

- Is the public experience unmistakably light-first?
- Is sapphire used as a signal rather than a decorative flood?
- Are typography, grid and hierarchy doing more work than effects?
- Does the design avoid generic component-library composition?
- Are dark operational moments rare enough to feel meaningful?

## Product truth

- Does auto-routing happen without a routine GM selection click?
- Does PRICE × DELIVERY remain visible underneath the simple GM experience?
- Does relevant professional evidence outrank LEVEL / EXP?
- Does completion end in result acceptance/revision, not game celebration?

## Target scores

Claude Code should self-score the final implementation before founder review:

- **3-second comprehension: 10/10 target**
- **product differentiation: 9/10+ target**
- **visual/art-direction quality: 9/10+ target**
- **world-building coherence: 9/10+ target**
- **interaction/motion polish: 9/10+ target**
- **professional trust: 9/10+ target**

Any score below 8 must trigger another refinement pass before declaring the implementation ready.

---

# 17. One-sentence design formula

> **Upwork-like ease at the door, KAPAPI's work-world once the task starts, and Vercel/Linear-level precision everywhere money, files and deadlines become real.**
