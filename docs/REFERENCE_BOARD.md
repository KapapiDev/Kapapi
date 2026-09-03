# KAPAPI Reference Board

Status: **design evidence / non-canonical reference map**  
Updated: **2026-09-02**

This document records what KAPAPI intentionally extracts from external design and motion references.

It exists to prevent two failure modes:

1. blindly cloning a reference,
2. forgetting why a reference was useful and later mixing incompatible styles.

Canonical authorities remain:

- `PRODUCT.md` for product meaning,
- `KAPAPI_DESIGN.md` for visual language,
- `KAPAPI_MOTION.md` for motion language.

---

## 1. Visual reference matrix

| Reference | Extract | Best KAPAPI use | Do not copy |
| --- | --- | --- | --- |
| **Linear** | precision, compact information hierarchy, hairlines, product-tool density | 작업자 업무 목록, KAPAPI 내부 제안 비교, Workroom, trust modules | exact dark palette, lime accent, recognizable app layout |
| **Hyperstudio** | editorial black/off-white contrast, art direction, oversized regular typography, print-like composition | landing, brand statements, major narrative sections | agency-portfolio experimentation, decorative composition over product clarity |
| **Factory** | operational dark surfaces, live work objects, terse status, terminal-war-room discipline | active 업무, 긴급 업무, Workroom | developer-tool cosplay, code-terminal aesthetic everywhere |
| **Vercel** | white-paper restraint, type hierarchy, neutral hairlines, transaction/settings clarity | forms, 제안 선정, file/result, contracts/review concepts | sterile sameness, literal Vercel geometry |
| **Mercury** | premium B2B trust, restrained data surfaces, calm confidence | 작업자 프로필, reliability, future payment/admin | banking metaphors, finance-dashboard styling |
| **Raycast** | tactile power-tool feeling, micro HUD, compact affordances, polished interaction | small controls, state indicators, micro-interactions | colorful utility grid, glass-heavy macOS mimicry |

### Combined formula

```text
Linear precision
+ Hyperstudio editorial confidence
+ Factory operational work state
+ Vercel transaction clarity
+ Mercury trust
+ Raycast tactile energy
= KAPAPI
```

This is a synthesis formula, not a visual collage.

---

## 2. Screen-to-reference map

### Landing / Hero

Primary influence:

- Hyperstudio
- Linear

Secondary:

- Raycast micro detail

Desired result:

> editorial brand page with a credible live product instrument inside it.

### 업무 목록

Primary:

- Linear
- Factory

Desired result:

> dense enough to scan real work, quiet enough to make urgency meaningful.

### 작업자 업무 상세 / 제안 · KAPAPI 내부 조달

Primary:

- Vercel
- Linear

Secondary:

- Mercury

Desired result:

> a worker proposal and internal procurement surface where PRICE × DELIVERY TIME is legible; clients approve an execution contract containing the result, price, completion time, revision and recovery boundaries.

### 작업자 프로필

Primary:

- Mercury
- Linear

Desired result:

> proof of execution, not a social profile.

### Workroom

Primary:

- Factory
- Linear

Secondary:

- Vercel

Desired result:

> mission control for one professional task, not a chat app.

### Completion

Primary:

- Vercel
- Factory restraint

Desired result:

> the visual system gets quieter because the work is finished.

### Autopilot vision

Primary:

- Hyperstudio editorial narrative
- Vercel reduction

Motion support:

- Magic UI Animated Beam concept

Desired result:

> procurement and execution complexity stays inside KAPAPI while client contract approval and result acceptance/revision remain visible.

---

# 3. Motion reference matrix

| Reference | KAPAPI decision | Extract | KAPAPI use |
| --- | --- | --- | --- |
| Number Flow / Maxwell Barvian | **ADOPT / P0** | live numeric interpolation | 가격, 완료시간, 제안 수, 작업이력 |
| Magic UI Animated List | **REMIX / P0** | insertion + `AnimatePresence` + layout reflow | 제안 도착 / live event insertion |
| Motion official Layout/Reordering | **ADOPT PATTERN / P0** | spatial continuity during reorder | 제안 목록 reflow / 순위 변화 |
| Animated Feature Carousel / Le Thanh | **REMIX / P0** | stable shell + sequential narrative states | transaction story outside the unmodified hero film |
| Motion Primitives Morphing Dialog | **ADOPT PATTERN / P1** | shared object continuity, accessibility behavior | 업무 상세, 작업자 프로필 |
| Magic UI Animated Beam | **REMIX / P1** | meaningful routing between DOM objects | Autopilot orchestration story |
| ReUI Timeline / Stepper | **ADOPT SEMANTICS / P0** | completed/active/pending/failure states | 업무 진행 |
| Blur Fade | **REMIX / P2** | sparse editorial reveal | rare supporting copy only |
| Animated Card Chart / badtz | **TBD / low priority** | only if historical pattern matters | 작업자 작업이력, if justified |
| Animated Card Diagram / badtz | **TBD / low priority** | possible concept diagram pattern | future evolution story only if source merits it |
| Jessi Animate Card Animation | **REJECT AS PRIMARY** | limited entry/stagger implementation ideas | not 제안 카드 styling |
| Spotlight Card / cursor glow | **DEFAULT REJECT** | possible tiny experimental spotlight only | no normal product use |

---

# 4. Reference decisions in plain language

## Number Flow

Keep because KAPAPI has real numbers that change.

Do not turn every number into a slot machine.

## Animated List + Motion layout

Keep because it maps directly to the signature event:

```text
another 작업자 submits a 제안
```

The important part is not the demo card appearance. It is insertion plus coherent reflow.

## Morphing Dialog

Keep because KAPAPI contains objects users inspect repeatedly.

An 업무 card should feel like it became the 업무 상세 rather than disappearing into a generic modal.

## Animated Beam

Keep only for product storytelling.

It is dangerous because app-logo beams instantly look like generic automation SaaS. KAPAPI must replace integration-logo constellations with actual work objects and let the animation stop after it explains routing.

## Timeline / Stepper

Keep the state model, not the default component skin.

Human professional work should show observable stages, timestamps and risk states, not fake percentages.

## Blur Fade

Use as punctuation, never grammar.

A KAPAPI page where every section blur-fades is a failed design.

## Spotlight / 3D card effects

Useful mainly as a boundary marker.

They show where “premium interaction” becomes “portfolio effect.” KAPAPI should remain on the product side of that line.

---

# 5. Source pools for future gaps

Reference collection for Prototype v1 is closed by default.

If implementation exposes a named missing interaction, consult in this order:

1. Motion official examples
2. Motion Primitives
3. ReUI
4. Magic UI
5. PatternFly archive for enterprise/accessibility state thinking

See:

`docs/motion-sources/MOTION_SOURCE_POOLS.md`

A new reference is allowed only when it answers a concrete problem such as:

- file upload state is unclear,
- blocked/revision flow lacks semantics,
- mobile comparison interaction fails,
- dialog accessibility needs a proven pattern,
- state transition performance is poor.

Do not collect components simply because they look impressive.

---

# 6. Anti-cloning checklist

Before adapting any reference, ask:

1. What product problem does this solve?
2. What is the smallest useful structural or motion principle?
3. Can KAPAPI express it with its existing tokens?
4. Does the reference introduce a second visual language?
5. Does it make the work, deadline, decision or result clearer?
6. Would a reviewer remember the effect more than KAPAPI's transaction model?

If question 5 is no, reject it.

If question 6 is yes, reduce it or reject it.

---

# 7. Final reference principle

KAPAPI is not designed **from** references.

References help solve individual problems, but the final product language comes from the transaction itself:

```text
CLIENT: 업무 입력 → 실행 계약 승인 → KAPAPI 진행 상황 → 결과 → 수락 / 수정 요청
KAPAPI INTERNAL: 제안 → PRICE × DELIVERY / trust → procurement / assignment → execution → QA / recovery
```

That sequence is the real design system.
