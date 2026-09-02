# Prototype v1 — QA Audit

Branch: `feat/prototype-v1`
Gate: `docs/QA_CHECKLIST.md` + the visual/world gate in `docs/KAPAPI_ART_DIRECTION.md` §16 + the role gate in `docs/IDENTITY_ROLE_MODEL.md` §9
Produced: 2026-09-02

Everything below was verified against the running product, not read off the source.
Three repeatable harnesses do the checking:

| Command | What it proves |
| --- | --- |
| `npm run demo:check` | walks the whole loop and asserts the canon invariants (16 checks) |
| `npm run a11y` | measures rendered contrast against painted backgrounds, and tabs every surface |
| `npm run qa` | captures 9 surfaces × 3 viewports + reduced motion, auditing overflow, touch targets and accessible names |
| `npm run perf` | hero paint, LCP and CLS against a production build on a throttled connection |

---

# A. Product clarity

| Item | Result | Evidence |
| --- | --- | --- |
| **A1 3-second test — BLOCKER** | **PASS** | First viewport is `할 일을 던져주세요.` + a work-entry surface + `일 맡기기`. No directory, board, dashboard or console reading. |
| **A2 Plain language first — BLOCKER** | **PASS** | Asserted: no `BID` / `LEVEL` / `EXP` / `TIME ATTACK` in the first 400 characters. The only world signal above the fold is the `QUEST NETWORK · ONLINE` eyebrow. |
| **A3 Result-first promise — BLOCKER** | **PASS** | `전문가들이 가격과 완료시간을 제안하고, 카파피가 가장 적합한 작업자를 자동으로 배정해 결과를 가져옵니다.` |
| **A4 Auto-routing — BLOCKER** | **PASS** | `assertNoSelectionControl` runs on the landing and the orchestration surface and finds no control matching 작업자 선택 / 고르 / 선정 / Choose / Pick winner / 낙찰. No such control exists anywhere in the codebase. |
| **A5 PRICE × DELIVERY — BLOCKER** | **PASS** | The BID form rejects a missing delivery time and a delivery past the deadline. Routing weights price headroom at 0.12 and delivery headroom at 0.08 of six terms; the flagship's cheapest and fastest bids both lose. |
| **A6 Final GM role — BLOCKER** | **PASS** | `결과 확인 · 합격` / `수정 요청` on the result surface; revision returns to work and comes back. |

---

# B. First viewport

| Item | Result | Note |
| --- | --- | --- |
| **B1 One primary action — BLOCKER** | **PASS** | One sapphire control above the fold. Everything else is neutral. |
| **B2 Task-entry dominance — BLOCKER** | **PASS** | Entry surface ~735×290px against a ~505×316px media frame, and it is the only object carrying the accent. |
| B3 PLAYER entry secondary | **PASS** | `일하러 오셨나요? 일 찾기 →` as a text link below the process line. |
| **B4 Not a mini dashboard — BLOCKER** | **PASS** | The proof frame shows one state line at a time. No trust charts, no LEVEL, no Autopilot diagram above the fold. |
| **B5 Category neutrality — BLOCKER** | **PASS** | Hero examples span CAD, image, document and data. The film is a person handing off work, not a CAD session. CAD appears first at section 04. |
| B6 Media integration | **PASS** | Poster-first, muted, `playsInline`, CLS 0.0001, mobile stacks below the CTA, no watermark, no readable generated UI. |
| B7 Sapphire submit feedback | **PASS** | 280ms localized ring on the CTA, once per click. |

---

# C. Visual design

| Item | Result | Note |
| --- | --- | --- |
| **C1 Light-first — BLOCKER** | **PASS** | Paper `#f7f7f4` default. Dark appears on exactly three surfaces: the routing proof, the Workroom timeline, and the hero frame while the product UI holds it. |
| C2 Dark is contextual | **PASS** | Applied per component via `[data-surface="dark"]`; there is no global dark theme. |
| C3 Premium through discipline | **PASS** | Hairlines, 4px rhythm, 2–10px radii, one overlay shadow token that nothing currently uses. |
| **C4 No template smell — BLOCKER** | **PASS** | No utility framework. Nine landing sections, nine different compositions. No card wall, no gradient blob, no glass. |
| C5 Controlled game energy | **PASS** | `QUEST #0182`, `LV.12`, `+240 EXP`, `TIME ATTACK`. No swords, coins, rarity or RGB. |
| C6 Typography | **PASS** | Korean body 15.6px/1.62. Mono is metadata only — Korean prose was moved out of uppercase-tracked mono during QA. |
| C7 Radii / shadows / borders | **PASS** | Hairline-led; nothing floats. |

---

# D. Core screens

| Item | Result | Note |
| --- | --- | --- |
| **D1 Scope confirmation — BLOCKER** | **PASS** | Asserted present: 작업 범위, 산출물, 제출 형식, 마감, 예산 상한, 확인 기준, 수정 범위, 보안, plus missing-information prompts. A request containing 대외비 raises `NDA ON` automatically. |
| **D2 Hands-off confirmation — BLOCKER** | **PASS** | `맡겼습니다. 이제 하시던 일 하세요.` / `QUEST #0219 CREATED`. Next actions are 진행 상황 보기 and 다른 일 맡기기 — never 작업자 선택. |
| **D3 Orchestration — BLOCKER** | **PASS** | BIDS RECEIVED → ELIGIBILITY CHECK → ROUTING → PLAYER ASSIGNED with no decision asked of the user. |
| D4 Routing evidence | **PASS** | Every excluded candidate shows its reason (마감 시간 초과, 필수 기술 요건 미충족, 보안·NDA 요건 미충족). The rationale panel lists deadline, similar-QUEST count, on-time, revision rate and price as a share of the authorised ceiling. |
| D5 QUEST Board | **PASS** | Four open QUESTs with reward range, delivery, deadline, bid count, state and per-QUEST eligibility. |
| **D6 BID form — BLOCKER** | **PASS** | PRICE × DELIVERY paired on one row, both required, validated against the deadline. Optional one-line note; no cover letter. |
| **D7 PLAYER profile — BLOCKER** | **PASS** | Career is the largest supporting line; LEVEL is a chip at the bottom of the execution panel. Asserted: career appears before LEVEL in the document. |
| D8 Workroom | **PASS** | Stage chips + event timeline + files. Not chat-first; there is no chat. |
| **D9 Result surface — BLOCKER** | **PASS** | File object dominates, delivery-vs-deadline stated, three real checks, then the two actions. |
| D10 Flagship CAD proof | **PASS** | QUEST #0001 below the hero, labelled `건축·CAD는 카파피가 거래 방식을 먼저 검증하고 있는 분야입니다. 카파피가 다루는 일의 전부는 아닙니다.` |

---

# E. Motion

| Item | Result | Note |
| --- | --- | --- |
| **E1 State-driven — BLOCKER** | **PASS** | Every animation fires on a product event or a one-shot first view. No page-wide scroll fade-ups. |
| E2 No bounce or spectacle | **PASS** | Opacity, ≤8px translate, layout reflow, border/background state. No spring overshoot, confetti, coins or 3D. |
| E3 BID arrival | **PASS** | Rows insert with layout reflow; nothing is covered or thrown away. |
| **E4 Routing decision — BLOCKER** | **PASS** | Legacy `BID_DECISION` is implemented as KAPAPI routing. Non-selected rows mute to 0.68 and stay inspectable. |
| **E5 Progress semantics — BLOCKER** | **PASS** | Asserted: no `NN% 완료 / 진행` anywhere. Stages, timestamps and events only. |
| E6 Completion | **PASS** | Checks resolve at ~80ms intervals, then the screen is still. |
| **E7 Reduced motion — BLOCKER** | **PASS** | The hero shows the poster plus the full state list; the routing proof renders settled with its rationale; the Autopilot diagram is static. No content is lost. A hydration error affecting every reduced-motion visitor was found and fixed during this pass. |

Deferred: **MOTION-F `OBJECT_MORPH` (P1)** — QUEST card → detail is a route change, so shared-layout continuity needs the View Transitions API, still experimental in this Next release. `KAPAPI_MOTION.md` §7 and the handoff both warn against fragile browser theatre, so this is left for a later pass. Nothing else in the motion table is missing.

---

# F. Routing / data semantics

| Item | Result | Note |
| --- | --- | --- |
| **F1 Deterministic — BLOCKER** | **PASS** | `routeQuest` is pure; a unit test shuffles the bid order and asserts an identical result and ordering. Every fixture's stored assignee is asserted to equal what the policy actually produces. |
| F2 Evidence dimensions | **PASS** | Hard filters on skills, credentials, security, availability, deadline and budget; then task fit, relevant history, on-time, revision rate, price headroom, delivery headroom. |
| F3 No fake certainty | **PASS** | `routingScore` is never displayed. The panel shows the evidence rows and states that the user makes the final call. |
| F4 Manual selection not primary | **PASS** | It does not exist at all in this prototype. |

Worked example (QUEST #0001, 6h deadline, ₩180,000 ceiling):

```text
이민재  ₩80,000  12H  → excluded: 마감 시간 초과      (cheapest bid loses)
최유나  ₩95,000   5H  → excluded: 보안·NDA 요건 미충족
한지우  ₩110,000  6H  → ASSIGNED                     (유사 47건, 정시 99%, 수정 4%)
서준호  ₩150,000  4H  → not selected                 (fastest bid loses)
```

---

# G. Legal / claim hygiene

| Item | Result | Note |
| --- | --- | --- |
| **G1 No payment claim — BLOCKER** | **PASS** | Footer states no escrow. The QUEST terms panel repeats it. No payment UI exists. |
| **G2 No SLA guarantee — BLOCKER** | **PASS** | Footer states no completion guarantee. The TIME ATTACK section explicitly says short deadlines cannot always be filled. |
| **G3 AI claim discipline — BLOCKER** | **PASS** | The scope aside states KAPAPI does not set the price and does not judge quality. The Autopilot section carries an amber notice that the later stages are direction, not shipped function. |
| G4 Architecture boundary | **PASS** | The flagship note excludes statutory design judgment from the QUEST scope. |
| G5 Result-based independence | **PASS** | No hours, shifts or attendance language anywhere. |

---

# H. Responsive / mobile

| Item | Result | Note |
| --- | --- | --- |
| **H1 Mobile hero — BLOCKER** | **PASS** | promise → input → attach → CTA → examples → process → 일 찾기 → media, in that DOM order at 390px. |
| H2 No desktop squeeze | **PASS** | BID rows restack to `who / price / delivery / trust`; the BID form's PRICE × DELIVERY pair stacks; stat grids collapse to one column. |
| H3 Touch targets | **PASS** | Audited at all three viewports: no interactive element under 24px remains. Breadcrumbs, footer links, the media caption and links wrapping buttons were all fixed during this pass. |
| H4 Safe viewport | **PASS** | No horizontal overflow at 390 / 834 / 1440. The nav scrolls instead of wrapping; the demo reset moved to the footer to free the row. |

---

# I. Accessibility

| Item | Result | Note |
| --- | --- | --- |
| **I1 Keyboard — BLOCKER** | **PASS** | 16–36 focusable stops per surface, all reachable; the whole loop is operable by keyboard. |
| **I2 Focus — BLOCKER** | **PASS** | One sapphire `:focus-visible` treatment; the work-entry uses a `:focus-within` panel ring. Every tab stop shows a focus treatment. |
| I3 Semantics | **PASS** | `header`/`main`/`footer`, skip link, labelled sections, `aria-pressed` filters, `aria-live="polite"` on the routing state, `role="alert"` on validation. |
| I4 File upload | **PASS** | Real `<input type="file">` with a visible label, a focus ring via `:focus-visible`, and removable attachment chips with per-file labels. |
| **I5 Contrast — BLOCKER** | **PASS** | Measured, not assumed. The whole metadata scale failed at 3.0–3.7:1 and was re-solved numerically against the darkest light surface and the lightest dark surface; every text node now clears 4.5:1, including inside muted BID rows. |
| I6 State beyond colour | **PASS** | Chips carry a dot plus a word; excluded rows carry `제외 · <reason>`; the assigned row carries `PLAYER ASSIGNED`. |
| I7 Countdown | **PASS** | Digits are `aria-hidden`; a coarse `약 N시간 M분 남음` string sits in a non-live region, so nothing is announced per second. |

---

# J. Performance / implementation

Production build, throttled to 1.6 Mbps / 150ms RTT:

| Metric | Value |
| --- | --- |
| First Contentful Paint | **832 ms** |
| Largest Contentful Paint | **1436 ms** |
| Cumulative Layout Shift | **0.0001** |
| Hero film | 539 KB (from 14.8 MB source) |
| Poster | 37 KB |
| Total transfer | 837 KB |

| Item | Result |
| --- | --- |
| **J1 Build — BLOCKER** | **PASS** — `next build` clean, 8 routes |
| **J2 Typecheck — BLOCKER** | **PASS** — `tsc --noEmit` clean |
| J3 Lint / tests | **PASS** — ESLint clean (0 errors, 0 warnings); 7 unit tests pass |
| **J4 First paint — BLOCKER** | **PASS** — hero copy and input render at 832ms; the film is not on the critical path |
| J5 Media | **PASS** — muted, `playsInline`, poster, CLS 0.0001, loop suspended when off-screen or backgrounded |
| J6 No fragile trick | **PASS** — the film→UI hand-off is an editorial cross-fade in one frame; no screen tracking |

`npm audit`: **0 vulnerabilities**.

---

# K. Demo readiness

| Item | Result | Note |
| --- | --- | --- |
| **K1 60-second path — BLOCKER** | **PASS** | Landing → scope → hand-off → routing → result runs in ~25s of scripted state, with a `결과까지 건너뛰기` control. |
| K2 Credible fixtures | **PASS** | Real task shapes, real formats, internally consistent careers and histories. No lorem ipsum. |
| K3 Failure-free reset | **PASS** | State persists to `sessionStorage`, so a reload or a direct QUEST link still works; `데모 상태 초기화` returns to the opening state. A bug where the live QUEST vanished on reload was found and fixed during this pass. |
| K4 One-sentence explanation | **PASS** | `일을 등록하면 전문가들이 가격과 납기로 입찰하고, 카파피가 알아서 배정해서 결과를 가져오는 서비스.` |
| **K5 Differentiation visible — BLOCKER** | **PASS** | Section 03 is titled `입찰을 공부하는 사람은 사용자가 아닙니다` and shows the excluded bids with reasons. No narration required. |

---

# Role-model gate (`IDENTITY_ROLE_MODEL.md` §9)

Fails if any is true — all are **false**:

| Failure condition | Status |
| --- | --- |
| signup requires a permanent GM/PLAYER choice | **absent** — there is no signup, and no role gate anywhere |
| two accounts needed to issue and execute | **absent** — one `User` type; role is derived by `roleInQuest(user, quest)` |
| navigation suggests mutually exclusive classes | **absent** — `일 맡기기 / 일 찾기 / 내 QUEST / 프로필`; asserted no mode-switch control |
| profile cannot hold both histories | **absent** — 수행 기록 and 발주 기록 side by side, never merged into one score |
| the same user cannot post one QUEST and bid another | **absent** — the demo user is GM on #0182 and #0219 **and** PLAYER on #0207 **and** a bidder on #0201, simultaneously |
| `일 찾기` reads as a separate product | **absent** — `김도현 님은 지금도 다른 QUEST에서는 일을 맡기는 쪽입니다.` |

An ineligible QUEST states the reason and adds: `계정 종류의 문제가 아닙니다.`
Qualification restricts a QUEST; it never restricts the identity.

---

# Self-scores

| Dimension | Target | Score |
| --- | --- | --- |
| 3-second comprehension | 10 | **10** |
| Product differentiation | 9+ | **9** |
| Visual / art-direction quality | 9+ | **9** |
| World-building coherence | 9+ | **9** |
| Universal-user coherence | 10 | **10** |
| Interaction / motion polish | 9+ | **9** |
| Professional trust | 9+ | **9** |

Nothing is below 8. Motion polish is held at 9 rather than 10 because `OBJECT_MORPH`
is deferred; the rest of the motion table is implemented.

---

# Known limitations

1. **No backend.** All state is typed fixtures plus a session-scoped store. A fresh tab starts clean by design.
2. **`OBJECT_MORPH` deferred** — see section E.
3. **Semantic task fit is a fixture**, not a model call. It is one weighted term of six, and it is labelled as prototype decision support rather than measurement.
4. **Delivery of the live QUEST is scripted.** Real elapsed time is not simulated; canon permits scripted transitions.
5. **The hero film is one 8-second take.** The KAPAPI UI segment is real HTML/CSS, so no generated product UI ships, but there is no colour grade or edit pass on the live action.
6. **Fixture time is relative.** Deadlines are offsets from page load, so countdowns are live and replayable, but the completed QUESTs carry fixed historical timestamps.

# Deferred production features

Per `PROTOTYPE_SPEC.md` §16, none of these are built or implied: production payment/escrow, platform-held funds, tax settlement, identity verification, dispute centre, messaging, native apps, authoritative AI pricing, AI quality judgment, SLA guarantees, hourly staffing.

---

# Remaining asset dependency

None blocking. The approved hero film is committed at `public/media/kapapi-hero.mp4`
(539 KB) with its poster. A replacement master only needs the two paths in
`HERO_MEDIA` at the top of `src/components/hero-media.tsx`, plus `handoffAtSec`
and `payoffAtSec` if the cut points move.
