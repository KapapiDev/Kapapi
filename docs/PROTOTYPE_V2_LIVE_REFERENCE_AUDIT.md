# Prototype v2 — Live Reference Audit

Method: each site was opened in a real headless Chrome at 1440×900 and 390×844, scrolled
through its full length, screenshotted at the hero, through mid-page and at the footer, and
**measured in the DOM** — heading scale, font stacks, container width, nav height, section
padding, radii, shadows, saturated-colour usage, card-like block count, and the character
count of visible text inside the first viewport.

Evidence: `research/evidence/<slug>/` (screenshots + `measure.json`). Harness: `research/capture.mjs`.

- Mandatory set captured: 9 of 10 (Hyperstudio's domain does not resolve — `ERR_NAME_NOT_RESOLVED`)
- Additional candidates screened: 29
- Total sites captured and measured: **38**

---

# 1. The measurement that changed the design

Sorting every captured site by **visible text in the first viewport** separates premium from
templated more cleanly than any subjective read:

| Site | h1 | first-viewport chars | card-like blocks |
| --- | ---: | ---: | ---: |
| Toss | 80 | **42** | 0 |
| Notion (KR) | 96 | **124** | 6 |
| Polar | 72 | 141 | 0 |
| Lovable | 48 | 185 | 8 |
| Vercel | 64 | 204 | 4 |
| Factory | 49 | 218 | 1 |
| Kmong | 40 | 266 | 0 |
| Anthropic | 61 | 376 | 0 |
| … | | | |
| Upwork | 72 | 941 | 19 |
| Mercury | 49 | 1155 | 0 |
| Clerk | 64 | 1420 | **62** |
| Cursor | 26 | 2247 | 11 |
| Railway | 54 | 3879 | 5 |

Two rules fall out of this, and both are testable against our own build:

1. **The strongest first viewports carry 40–400 characters.** Prototype v1's landing carried
   far more and read as documentation. This is now a measurable acceptance gate, not taste.
2. **Card count in the first viewport is an inverse quality signal.** The sites that feel
   templated (Clerk 62, Raycast 49, Soomgo 41) are card walls. The ones that feel expensive
   (Toss 0, Mercury 0, Kmong 0, Anthropic 0, Polar 0) put **one object** on screen.

---

# 2. Mandatory global references

## Upwork — h1 72px Neue Montreal, container 1440, nav 64, 941 chars, 19 cards

The founder-favoured first touch. What actually produces the "easy, big, alive" feeling:

- The hero is **one large rounded photographic panel**, not a split layout. Headline is
  overlaid on the photo, left-aligned, 72px, three lines.
- **The primary action floats on the image** — a white rounded-full search pill sitting over
  the photograph, with small outlined category chips beneath it.
- The photo is a real person at a desk with a laptop in warm natural light. The emotional
  register, not the copy, is what makes it feel human.
- Sticky nav gains a search field once you scroll past the hero.
- "How it works" is **three video clips with one short label each** — no paragraphs at all.
- One deliberate near-black rounded panel mid-page as the contrast moment.

Borrow: media-panel hero with the action floating on it; motion clips instead of explanatory
columns; a single dark panel rather than a dark page.
Do not copy: green brand, category taxonomy, talent-search model, dropdown-heavy nav.

## Mercury — h1 49px arcadiaDisplay, container 1440, nav 72, **0 cards**

The clearest lesson in premium restraint:

- Full-bleed cinematic image occupying the entire first viewport; transparent nav floating on it.
- Headline is **only 49px** and centred. Trust comes from calm and space, not scale.
- The action is **one rounded-full container holding input + primary + secondary button**,
  floating over the image.
- Zero cards. Legal disclaimer parked in a dark pill at the bottom edge.
- Subject matter: a desk and laptop in a landscape — aspirational but quiet.

Borrow: full-bleed media first viewport, transparent nav, one composite action pill,
restrained headline size, zero cards.
Do not copy: banking metaphor, the surreal landscape treatment, brand indigo.

## Linear — h1 64px Inter Variable, container 1344, nav 73

- Dark. Left-aligned 64px headline, one short supporting line, then **the real product UI at
  very large scale, cropped by the bottom of the viewport**.
- No hero CTA button at all; the product screenshot is the argument.
- Hairline separators, small radii, near-zero decorative shadow.

Borrow: let real product UI occupy a large, precisely-rendered area cropped by the viewport;
the product is the proof. Do not copy: dark-first (canon requires light-first), the exact palette.

## Vercel — h1 64px GeistSans, **204 chars**, logo row pinned to the hero's bottom edge

Three-part asymmetric hero: headline + two buttons left, a luminous mark centre, three
four-word value lines right. Extreme text economy. Customer logos anchored at the fold.

Borrow: radical first-viewport text economy; proof row anchored at the fold.
Do not copy: dark field, the glow motif.

## Stripe — h1 48px sohne-var, container 1232, nav 76

Light. Left-aligned headline where the second sentence drops to a lighter grey-blue. The only
visual is a colour ribbon bleeding from the right edge. **Visible hairline vertical rules mark
the container edges** — a strong, cheap premium signal that costs no cards. Logo row inside
the hero, separated by hairlines.

Borrow: visible container hairlines; two-tone headline where the second clause de-emphasises.
Do not copy: gradient ribbon, indigo, developer-first IA.

## Factory — h1 49px Geist, 218 chars, 1 card · Raycast — h1 64px Inter, 49 cards

Factory confirms terse operational language with almost no chrome. Raycast is the counter-example:
49 card-like blocks reads busy and consumer-ish; canon's "tactile HUD energy" should be taken as
micro-interaction quality, not as Raycast's card density.

## Hyperstudio — NOT REACHABLE

`https://hyperstudio.co/` fails DNS resolution (`ERR_NAME_NOT_RESOLVED`). Recorded rather than
silently skipped. Its canonical role — editorial black/off-white contrast and oversized but
controlled type — is covered by Sanity (112px), Pitch (180px) and Notion (96px) in the
additional pool, which were reachable and measured.

---

# 3. KOREAN MARKETPLACE PATTERN EXTRACTION

## Kmong — h1 40px **Pretendard**, container 1200, nav 76, 266 chars, 0 cards

- Two-line bold headline: context clause + action clause, ending `-세요`.
- Primary action is a **large rounded-full search input**.
- **A row of grey rounded-full category chips sits directly under the input with no heading
  above it.** This is the reference evidence that chips are legitimate — and that v1's
  invented `이런 일들이 올라옵니다` label was not.
- Category icon row with Korean labels. Right-side promo carousel card.
- Nav right side: `엔터프라이즈 · 전문가 등록 · 로그인 · 회원가입`.

## Wishket — container 1080, nav 104, 19 cards

- Nav is literally **`프로젝트 등록` / `프로젝트 찾기`** — the real Korean demand/supply verb pair.
- Hero: bold two-line headline, supporting line, **filled + outlined CTA pair**.
- Right side: floating expert cards showing `평점 4.8점 · 계약한 프로젝트 48건 · 포트폴리오 80건`
  plus skill chips. This is the Korean trust grammar: rating → transaction count → portfolio → skills.
- Trust order: claim sentence → client logo row → hard numbers (`123,957명`, `22,849개`).
- Supporting copy says `이제 편하게 선택만 하세요` — the user compares and selects. **KAPAPI is the
  opposite**, and that contrast is the product's whole point.

## Soomgo — container 1084, nav 72, 41 cards

- Headline is a **polite question with an inline location selector**: `강남구 ▾ 에서 어떤 서비스가 필요하세요?`
- Search input + `AI 견적 요청` button, then a 12-item category icon grid.
- Highest card density of the Korean set; reads busy.

### 1. Proven patterns KAPAPI should preserve

- **Pretendard** as the Korean type foundation (Kmong, Wanted both ship it).
- Headline register: short, bold, `-세요` invitation or a polite question. Never a slogan.
- A single large input as the primary action.
- Unlabelled chips beneath the input to defeat blank-page anxiety.
- Trust expressed as **counted evidence** (건수, 평점, 비율) rather than adjectives.
- Action-verb navigation pairs (`등록` / `찾기`).
- Filled primary + outlined secondary CTA pairing.

### 2. Friction KAPAPI should remove

- Kmong/Soomgo bury the user in category taxonomy before anything happens.
- Wishket's promise is *more proposals to compare*; KAPAPI's promise is *no comparison at all*.
- All three run promo/coupon banners in prime hero real estate.
- Soomgo's 41-card first viewport.

### 3. Patterns superseded by KAPAPI auto-routing

- Expert browsing and profile-shopping surfaces.
- "Compare quotes / select yourself" (`비교 견적`, `선택만 하세요`).
- Sorting freelancers by price.

### 4. Patterns superseded by universal-user identity

- `전문가 등록`, `고수가입`, `파트너스 찾기` as separate signup doors. KAPAPI has one account;
  the supply-side entry is another **action**, not another registration.

### 5. Korean language and trust conventions worth carrying

`의뢰 등록 · 작업 찾기 · 견적 · 마감 · 납품 · 수정 요청 · 정시 · 평점 · 건`, and the reassurance
habit of stating what happens with money, revisions and deadlines in plain sentences.

---

# 4. Additional deep inspections (beyond the mandatory list)

**Toss** — h1 80px, **42 chars**, 0 cards. The single most transferable reference: a full-bleed
rounded media panel inset from the page edges, nav on white above it, and a huge white Korean
headline sitting along the film's lower edge. A real Korean person, calm, not performing at the
camera. Proves to a Korean audience that a cinematic media hero reads as premium rather than as
a stock template.

**Notion (KR)** — h1 96px, 124 chars. Korean headline as a noun phrase with a pill highlight on
one word; one `-하세요` supporting line; filled + pale CTA pair; then a large product screenshot
cropped by the fold; Korean client logo row at the bottom edge.

**Wanted** — Pretendard Variable, container 1296. Korean professional-work marketplace; confirms
Pretendard and the counted-evidence trust habit in our exact category.

**Daangn** — 224 chars, 1 card, container 1308. Korean C2C marketplace; extreme simplicity.

**Anthropic / Polar** — 376 and 141 chars, **0 cards**, generous light fields. Proof that a
light page with almost no chrome can feel expensive.

**Pitch (180px), Sanity (112px), Webflow (80px)** — the oversized-editorial end of the scale.
Legible as art direction, but too loud for a transaction product handling money and deadlines.

**Clerk (62 cards) / Raycast (49) / Gamma (27) / Supabase (26)** — the templated end. Card walls
correlate with the generic feeling canon rejects.

**Contra** — 1523 chars, GT Standard. A freelance marketplace that reads editorial rather than
transactional; useful as a warning that too much editorial voice weakens transaction clarity.

**Cursor (2247) / Railway (3879)** — text-dense heroes. Both are developer products where the
audience reads; a Korean transaction product cannot borrow this.

---

# 5. What references communicate visually that Prototype v1 explained in prose

| v1 explained in text | Reference shows it visually |
| --- | --- |
| "01 일을 적습니다 / 02 전문가들이 제안합니다 / 03 카파피가 배정합니다 / 04 결과만 확인합니다" | Upwork: three silent video clips, one label each |
| "맡기고 나면 할 일이 하나 남습니다" + paragraph | Linear: the real product UI at huge scale, cropped by the fold |
| Dark routing card with bullet list beside it | Toss/Mercury: one full-bleed media object carrying the whole idea |
| Paragraphs about trust | Wishket: `평점 4.8점 · 계약 48건 · 포트폴리오 80건` as counted evidence |
| "예시 chips" under an invented heading | Kmong: the same chips with **no heading at all** |

---

# 6. Measured design decisions carried into KAPAPI v2

| Decision | Evidence |
| --- | --- |
| Full-bleed rounded media panel as the hero | Toss, Upwork, Mercury |
| First viewport under ~400 visible characters | Toss 42, Notion 124, Vercel 204, Anthropic 376 |
| Zero cards in the first viewport | Toss, Mercury, Kmong, Anthropic, Polar |
| Headline 56–80px, not 96–180px | Upwork 72, Toss 80, Linear 64, Mercury 49; Pitch 180 rejected as too loud for money/deadlines |
| Pretendard for Korean | Kmong, Wanted, Notion KR |
| Action as one composite rounded container over the media | Mercury, Upwork |
| Chips under the action with no heading | Kmong |
| Visible container hairlines | Stripe |
| Counted trust evidence, not adjectives | Wishket, Wanted |
| Action-verb nav pair, but one account | Wishket's `등록`/`찾기` verbs, with its `전문가 등록` door removed |
| Proof row anchored at the fold | Vercel, Notion, Stripe |
| Real product UI cropped by the viewport | Linear, Notion |
