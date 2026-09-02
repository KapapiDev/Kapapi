# KAPAPI Design System

Status: **canonical visual specification for Prototype v1**  
Updated: **2026-09-02**  
Authority: this document is the visual source of truth for the public prototype. `KAPAPI_MOTION.md` is the motion authority. Product meaning comes from `PRODUCT.md`.

KAPAPI should look like a serious professional-work system that happens to have game-like energy, not a game UI pretending to be business software.

> **Outside: sharp, memorable, alive. Inside: calmer, clearer, more trustworthy than a typical freelancer marketplace.**

Working synthesis:

> **Editorial Tech × Mission Control**

Reference blend:

- Linear precision
- Hyperstudio editorial black
- Factory work-as-object / operational war-room feeling
- Vercel transaction clarity
- Mercury B2B trust
- Raycast tactile HUD and micro-interaction energy

These are directional ingredients, not pages to clone.

---

## 1. Product meaning before visual style

KAPAPI is not primarily a freelancer directory.

The prototype must visually communicate:

```text
WORK EXISTS
→ GM turns it into a QUEST
→ PLAYERs compete with PRICE × DELIVERY TIME
→ GM selects
→ work progresses
→ result arrives
```

Long-term direction:

```text
FILE + DEADLINE
→ KAPAPI orchestrates
→ RESULT
```

Therefore the design must optimize for:

1. **work object clarity**,
2. **fast comparison**,
3. **delivery confidence**,
4. **visible state change**,
5. **professional trust**,
6. **low delegation friction**.

A screen may be visually impressive only if those remain obvious.

---

# 2. The KAPAPI visual character

KAPAPI should feel:

- precise,
- editorial,
- operational,
- premium,
- slightly competitive,
- technically sophisticated,
- calm when nothing is changing,
- visibly alive when work is moving.

KAPAPI should **not** feel:

- fantasy-game themed,
- crypto,
- gamer RGB,
- generic AI startup,
- generic shadcn dashboard,
- freelancer-directory beige,
- mobile-game reward economy,
- creative-agency effects showcase.

### The governing contradiction

The shell can say:

> **WORK IS A QUEST.**

The transaction UI must still say:

> **You can trust this with real work, real files, real money and a real deadline.**

That tension is the brand.

---

# 3. Brand hierarchy

## 3.1 Primary public language

Primary brand statements:

- **KAPAPI**
- **WORK IS A QUEST.**
- **DROP WORK. GET RESULTS.**

Korean product north star:

> **일 던져놔. 결과만 받아.**

Supporting explanation may use:

> 전문가를 찾지 마세요. 결과를 주문하세요.

Do not force every KAPAPI world term into first-touch copy.

Rule:

> **normal language → concept → KAPAPI term**

Example:

```text
오늘 안에 CAD 정리가 필요하신가요?
작업을 등록하면 전문가들이 가격과 납기를 제안합니다.
KAPAPI에서는 이 작업을 QUEST라고 부릅니다.
```

Never make a first-time reviewer decode game vocabulary before understanding the business.

---

# 4. Reference synthesis

## 4.1 Linear → structural base

Extract:

- dense but breathable layout discipline,
- thin separators,
- compact information hierarchy,
- disciplined spacing,
- small radii,
- dark precision-tool feeling,
- product UI that looks engineered rather than decorated.

Use for:

- QUEST Board,
- BID comparison,
- PLAYER trust modules,
- Workroom,
- navigation shell.

Do not copy:

- exact dark palette,
- exact accent color,
- recognizable component composition.

## 4.2 Hyperstudio → public brand / landing

Extract:

- editorial confidence,
- black/off-white field contrast,
- oversized but controlled typography,
- art-directed rather than template-built landing composition,
- almost-print-like whitespace and rule lines.

Use for:

- landing hero,
- brand statements,
- major section transitions,
- Autopilot thesis section.

Do not copy:

- agency portfolio layouts,
- decorative experimentation that hides product UI.

## 4.3 Factory → operational QUEST state

Extract:

- work feels like an active object,
- terminal/mission-control density,
- clear live status,
- dark operational surfaces,
- small bright state signals,
- almost zero ornamental chrome.

Use for:

- TIME ATTACK,
- active QUEST detail,
- Workroom,
- live status areas.

Do not copy:

- developer-tool jargon,
- code-terminal fetish,
- permanently dark site-wide treatment.

## 4.4 Vercel → transaction clarity

Extract:

- typography-first hierarchy,
- white-paper clarity,
- neutral hairlines,
- extreme restraint,
- obvious primary action,
- credible settings/transaction surfaces.

Use for:

- BID selection,
- contract/review concepts,
- file delivery,
- completion,
- forms.

Do not copy:

- sterile sameness,
- Vercel-specific brand geometry.

## 4.5 Mercury → trust

Extract:

- premium B2B calm,
- dark trust surfaces used selectively,
- restrained accent color,
- confidence without financial-dashboard clutter,
- polished profile/data modules.

Use for:

- PLAYER profile,
- trust/reliability,
- GM-facing decision support,
- future payment/contract surfaces.

Do not copy:

- banking metaphors,
- finance-product decoration.

## 4.6 Raycast → tactile energy

Extract:

- power-tool feeling,
- keyboard/HUD precision,
- tiny status affordances,
- satisfying micro-interactions,
- product density without feeling enterprise-old.

Use for:

- compact controls,
- command-like actions,
- small HUD labels,
- selected states,
- tasteful game energy.

Do not copy:

- colorful icon grid as the main visual language,
- macOS utility mimicry,
- glass-heavy surfaces.

---

# 5. Theme architecture

KAPAPI does **not** need one global dark/light aesthetic.

Use visual state to reinforce product state.

## 5.1 Landing / brand

Default:

- off-white / white editorial base,
- strategic near-black sections,
- large black typography,
- thin rules,
- product UI embedded as real proof.

Purpose:

> understand KAPAPI in 30–60 seconds.

## 5.2 QUEST / TIME ATTACK

Default:

- near-black operational field,
- compact white/gray text,
- restrained status accent,
- visible time and live state.

Purpose:

> work is active now.

## 5.3 BID comparison / transaction

Default:

- calmer light or neutral surface,
- strong table/card comparison logic,
- PRICE × DELIVERY visually dominant,
- trust evidence secondary but easy to inspect.

Purpose:

> make a serious decision quickly.

## 5.4 PLAYER profile / trust

Default:

- light neutral or quiet dark depending context,
- career and task-specific proof above decorative LEVEL.

Purpose:

> reduce explanation risk and execution risk.

## 5.5 Workroom

Default:

- mission-control neutral/dark hybrid,
- event timeline and file state,
- not chat-first.

Purpose:

> know what is happening without managing the PLAYER minute by minute.

## 5.6 Completion

Default:

- return to bright/clean result surface,
- file and proof dominate.

Purpose:

> work is done. The interface can become still.

## 5.7 Autopilot vision

Default:

- extremely reduced visual field,
- fewer objects as story progresses,
- end state close to white paper / black type.

Purpose:

> visually demonstrate that KAPAPI improves by removing GM-facing complexity.

---

# 6. Color system

Final implementation may tune exact values after visual QA, but the relationships below are canonical.

## 6.1 Core neutrals

Recommended starting tokens:

```text
--kapapi-black:        #0A0A0A
--kapapi-ink:          #111111
--kapapi-graphite:     #1A1A1B
--kapapi-line-dark:    #2A2A2C
--kapapi-muted-dark:   #8A8A8F

--kapapi-paper:        #F7F7F4
--kapapi-white:        #FFFFFF
--kapapi-line-light:   #E6E6E2
--kapapi-muted-light:  #707073
```

Exact hex values are tunable. Contrast and hierarchy are not.

## 6.2 Accent philosophy

KAPAPI should not have five competing brand colors.

Use one **signal accent family** plus semantic state colors.

The signal accent must:

- work on black and white,
- feel technical rather than playful,
- be visible in small HUD quantities,
- never flood full screens.

Final hue should be selected by visual QA, not by copying Linear lime, Raycast coral, Factory orange or Mercury blue literally.

### Allowed accent use

- primary CTA,
- selected BID indicator,
- one active system state,
- TIME ATTACK threshold,
- active connector / routing moment,
- focus ring.

### Semantic state colors

Use semantic colors only where the state actually exists:

- success / complete,
- warning / deadline risk,
- danger / failed or blocked,
- info / active system operation.

Do not make category cards rainbow-colored.

---

# 7. Typography

Typography carries most of the visual identity.

## 7.1 Font philosophy

Use a high-quality modern grotesk/sans for product and editorial text, plus a restrained mono for machine-like metadata.

Preferred implementation direction:

- primary sans: Geist-like / neutral modern grotesk,
- mono: Geist Mono-like / modern technical mono.

Do not choose novelty gamer fonts.

## 7.2 Typography roles

### Display

For brand statements only.

Characteristics:

- large,
- regular or medium rather than ultra-bold,
- tight tracking,
- strong line breaks,
- editorial scale.

Examples:

```text
WORK IS
A QUEST.
```

and

```text
DROP WORK.
GET RESULTS.
```

### Product heading

Compact, functional, highly scannable.

### Body

Readable Korean and English. Avoid tiny startup-site gray copy.

### Mono / HUD

Use for:

- `QUEST #001`,
- `BIDS 06`,
- `TODAY 19:00`,
- timestamps,
- delivery deltas,
- status labels,
- file metadata.

Mono is seasoning, not the entire interface.

---

# 8. Spacing and grid

## 8.1 Base rhythm

Use a disciplined 4px base grid.

Primary spacing steps may map approximately to:

```text
4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128
```

Avoid arbitrary spacing values unless optical correction requires them.

## 8.2 Desktop page frame

The public site should not be a giant centered card stack.

Use:

- full-width editorial sections,
- a strong central content grid,
- asymmetric layout where it increases identity,
- aligned rules and text columns,
- product UI modules embedded in that grid.

## 8.3 Product density

QUEST/BID screens can be denser than landing screens.

The visual system should transition from:

`editorial breathing room → operational density → result clarity`.

---

# 9. Borders, radius, shadow, depth

## 9.1 Hairlines

Hairlines are a core KAPAPI material.

Use them for:

- cards,
- section boundaries,
- comparison rows,
- timelines,
- selected objects,
- HUD modules.

Prefer subtle border contrast over heavy shadow.

## 9.2 Radius

Default product radii should be small.

Starting hierarchy:

```text
2–4px: dense operational objects
6px: normal controls / cards
8–12px: selected larger panels
12–16px+: rare public/hero composition only
```

Do not make every component a 20–32px rounded rectangle.

## 9.3 Shadows

Default: **off or extremely restrained**.

Use shadow only when it explains real elevation such as:

- modal/dialog,
- floating command surface,
- temporary overlay.

Do not use soft SaaS card shadows as the main visual system.

## 9.4 Glass

Default: **off**.

Backdrop blur is allowed in narrow overlay/navigation contexts if readability remains excellent.

Do not build the product out of glass cards.

---

# 10. Iconography and illustration

## 10.1 Icons

Use simple line icons with consistent stroke.

Icons should support labels, not replace meaning in serious transaction states.

Avoid:

- fantasy symbols,
- swords,
- treasure chests,
- coins,
- pixel hearts,
- shields as trust decoration,
- random emoji.

Game semantics should come from language, progression and status, not cosplay art direction.

## 10.2 Imagery

The prototype should prefer **real work artifacts** over stock photography.

Flagship examples:

- hand-drawn survey image,
- CAD drawing preview,
- file stack,
- result preview,
- real-looking professional task material.

A CAD sheet is more convincing for KAPAPI than a smiling freelancer stock photo.

---

# 11. Core component language

## 11.1 QUEST card

Must answer quickly:

- what work is needed,
- what deliverable is expected,
- deadline,
- category,
- whether it is TIME ATTACK,
- bid count / state,
- optionally reward/range only if real.

Design:

- strong task title,
- compact metadata,
- one dominant deadline/status line,
- thin border,
- little ornament.

Do not make QUEST cards social-feed posts.

## 11.2 TIME ATTACK

TIME ATTACK is a state, not a red skin.

Use:

- one concise label,
- actual deadline/countdown,
- restrained accent,
- increased information priority.

Avoid:

- flashing,
- full red card,
- alarm icon spam,
- fake urgency.

## 11.3 BID card / comparison row

This is a signature KAPAPI object.

Primary visual hierarchy:

```text
PLAYER / relevant proof
PRICE
DELIVERY TIME
TRUST
short note / availability
```

PRICE and DELIVERY should be readable in one glance.

Examples:

```text
₩100,000     18H
₩150,000      8H
₩220,000      4H
```

Avoid hiding delivery inside prose.

### Selection state

Selected BID gains:

- clear border/state indicator,
- stable position,
- primary delivery commitment,
- explicit `PLAYER SELECTED`.

Non-selected BIDs mute but remain inspectable.

## 11.4 PLAYER trust module

Trust priority:

1. relevant career,
2. relevant QUEST completion history,
3. on-time rate,
4. revision/rework history,
5. rating,
6. availability,
7. LEVEL / EXP.

LEVEL/EXP must never visually overpower evidence that helps GM judge real execution risk.

Good:

```text
건축 CAD · 8년
유사 QUEST 156
99% ON TIME
수정 요청 6%
```

Bad:

```text
LEVEL 87 LEGENDARY PLAYER
```

## 11.5 File object

Files are first-class transaction objects.

Display:

- filename,
- type,
- size if useful,
- submitted/delivered timestamp,
- verification status only when actually checked,
- preview when practical.

## 11.6 QUEST progress

Use real stages and timestamps.

Do not display fake human-work completion percentages.

Visual priority:

- current state,
- deadline,
- last event,
- next expected event.

## 11.7 Result / completion card

Result is the visual payoff.

A completion object should prominently show:

```text
QUEST COMPLETE
현황도.dwg
DELIVERED 18:42
18 MIN EARLY
```

Objective checks may follow.

EXP is tertiary and resolves last.

---

# 12. Screen specifications

## 12.1 Landing page

Goal:

> A judge/investor understands the product and sees a credible product loop in 30–60 seconds.

### Hero structure

Recommended information order:

1. KAPAPI wordmark
2. compact world/state chrome such as `QUEST NETWORK / ONLINE`
3. large brand statement
4. plain-language one-sentence explanation
5. primary CTA
6. actual product-state demo

Example hierarchy:

```text
WORK IS A QUEST.

짧은 전문업무를 올리면
전문가들이 가격과 납기를 제안합니다.

[ QUEST 등록하기 ]
```

The hero product demo should execute `HERO_TRANSACTION` from `KAPAPI_MOTION.md`.

### Landing sections

A strong order:

1. Hero transaction loop
2. Why current outsourcing is too much work
3. PRICE × DELIVERY TIME mechanism
4. Flagship CAD QUEST
5. PLAYER trust / relevant career
6. Workroom / result delivery
7. Marketplace → Assist → Autopilot
8. final CTA

Avoid generic `Features / Features / Testimonials / Pricing` SaaS ordering for Prototype v1.

## 12.2 QUEST Board

Goal:

> GM and PLAYER can scan real work quickly.

Desktop:

- editorial product header,
- compact filters,
- task list/grid depending information density,
- TIME ATTACK visually distinct but not noisy.

Mobile:

- single-column list,
- sticky minimal filter/action area if needed,
- deadline and category remain visible.

## 12.3 QUEST Detail

Goal:

> understand task, inspect inputs, compare BIDs, choose with confidence.

Recommended layout:

Desktop:

- left/main: QUEST scope, inputs, file preview, deliverable
- right or lower primary decision surface: BIDs

BID comparison may become a compact table-like layout when 3+ BIDs exist.

The flagship QUEST should be real-looking:

> hand-drawn existing-condition building survey → CAD drawing

Use actual deliverable language and enough detail to prove the founder understands the work.

## 12.4 PLAYER profile

Goal:

> answer “Can I give this person this exact kind of work?”

Above the fold:

- name/identity,
- relevant career,
- current availability,
- category-specific completion evidence,
- on-time / revision signals,
- selected recent work.

Do not start with a giant avatar or decorative XP panel.

## 12.5 Workroom

Goal:

> low-management execution visibility.

Prioritize:

- QUEST terms,
- delivery commitment,
- files,
- progress/event timeline,
- revision state,
- next required GM action.

Messages may exist, but Workroom must not visually collapse into a generic messenger clone.

## 12.6 Completion

Goal:

> make the result and proof feel final.

The completion screen should be among the cleanest screens in the product.

Large result object, deadline performance, objective checks, then optional review/EXP.

No celebration screen.

## 12.7 Autopilot vision

Goal:

> show the long-term thesis without pretending it is already fully implemented.

Start with Marketplace Mode complexity, then remove GM decisions until only:

```text
FILE + DEADLINE
→ KAPAPI
→ RESULT
```

Pair with explicit language such as “long-term direction” / “future orchestration” if public prototype context requires it.

---

# 13. Responsive design

Mobile is not the desktop prototype shrunk down.

## 13.1 Mobile priorities

Preserve:

1. task meaning,
2. deadline,
3. PRICE × DELIVERY,
4. primary action,
5. result status.

Defer/collapse:

- extended trust history,
- secondary metadata,
- dense comparative detail,
- decorative HUD labels.

## 13.2 BID comparison mobile

Do not force a wide table into horizontal scroll as the only solution.

Prefer stacked comparison cards with identical field order:

```text
PLAYER
PRICE | DELIVERY
TRUST
SELECT
```

Switching between desktop table-like and mobile stacked representations must preserve the same decision hierarchy.

## 13.3 Touch targets

Interactive controls should remain comfortably tappable even when visual chrome is compact.

Do not trade accessibility for dense mission-control aesthetics.

---

# 14. Accessibility

Premium visual quality includes accessibility.

Required:

- clear keyboard focus,
- semantic headings,
- high text contrast,
- not relying on color alone for status,
- touch-target discipline,
- readable Korean and English,
- reduced-motion behavior per `KAPAPI_MOTION.md`,
- accessible dialogs/focus management,
- actual labels for icon-only critical actions.

TIME ATTACK must not become an accessibility hazard.

---

# 15. Content and copy design

Copy should be as designed as the UI.

## 15.1 Tone

Short, operational, confident.

Good:

```text
BID RECEIVED
PLAYER SELECTED
FILE DELIVERED
QUEST COMPLETE
18 MIN EARLY
```

Bad:

```text
Awesome! Your amazing quest has been successfully completed! 🎉
```

## 15.2 Data realism

Prototype data must look internally consistent.

Do not fill screens with random metrics.

For flagship BID set, use a coherent scenario such as:

```text
A · ₩100,000 · NEXT DAY
B · ₩150,000 · TONIGHT
C · ₩220,000 · TODAY 19:00
```

and career/trust histories that support the selection logic.

---

# 16. Game layer rules

The game layer exists to improve memorability and engagement without reducing trust.

Allowed:

- QUEST terminology,
- PLAYER,
- LEVEL / EXP,
- TIME ATTACK,
- QUEST COMPLETE,
- progress/history,
- competitive BID context,
- subtle HUD language.

Not allowed by default:

- coins,
- loot boxes,
- fantasy maps,
- swords,
- character classes,
- mascots dominating transaction UI,
- rarity colors,
- achievement popups over work,
- game launcher layout.

Rule:

> **Game semantics, professional materials.**

---

# 17. Anti-template rules

Reject the implementation if it looks like any of these:

### Generic Tailwind startup

Symptoms:

- giant gradient blob,
- centered headline,
- three rounded feature cards,
- logo cloud,
- purple CTA,
- every section fades upward.

### Generic shadcn dashboard

Symptoms:

- left sidebar + card grid + KPI cards everywhere,
- identical radius on every surface,
- muted beige/gray default tokens left untouched,
- charts added merely to fill space.

### Crypto/game launcher

Symptoms:

- neon purple/blue,
- glowing borders,
- large avatars,
- leaderboard-first presentation,
- XP more prominent than career and delivery.

### Agency portfolio

Symptoms:

- cursor effects more memorable than product,
- parallax everywhere,
- huge image experiments,
- difficult navigation,
- form over transaction clarity.

### Freelancer marketplace clone

Symptoms:

- person cards before work,
- gig/service catalog first,
- price-first commodity sorting,
- long seller profiles before task definition.

KAPAPI should remain **work-first, result-first**.

---

# 18. Visual QA thresholds

Prototype target:

- **Visual quality: 9/10+**
- **Product clarity: 10/10**
- **Interaction polish: 9/10**
- Backend breadth may remain intentionally thin.

## 18.1 30-second test

A first-time reviewer should be able to answer:

1. What is KAPAPI?
2. Who posts work?
3. What does a PLAYER submit?
4. Why is delivery time important?
5. How does the GM choose?
6. What happens after selection?

If the design looks beautiful but these answers are unclear, it fails.

## 18.2 Screenshot test

Individual key screenshots should remain understandable without animation:

- hero,
- QUEST Board,
- QUEST Detail + BIDs,
- PLAYER profile,
- Workroom,
- QUEST Complete,
- Autopilot vision.

Motion enhances the system. It must not rescue weak static composition.

## 18.3 Distance test

At a glance, the interface should show:

- where the work object is,
- where the deadline is,
- where the decision is,
- where the result is.

## 18.4 Trust test

Ask:

> Would a real small professional firm upload a real work file here and believe the interface can carry a deadline-sensitive transaction?

If not, remove decorative/game elements until the answer changes.

---

# 19. Implementation authority

For Prototype v1:

- `PRODUCT.md` defines product meaning,
- `KAPAPI_DESIGN.md` defines visual language,
- `KAPAPI_MOTION.md` defines motion language,
- `REFERENCE_BOARD.md` explains what was extracted from references,
- raw reference/source files are non-canonical evidence.

When references conflict with this document, this document wins.

Do not copy a component because its source is convenient.

Build the smallest coherent KAPAPI design system first, then adapt reference mechanics into it.

---

# 20. Final rule

KAPAPI should be memorable because **work itself feels alive**.

A QUEST appears.
BIDs arrive.
PRICE and DELIVERY compete.
A PLAYER is selected.
The work advances.
A result lands.

The design should make that sequence feel inevitable.

> **WORK IS A QUEST. DROP WORK. GET RESULTS.**
