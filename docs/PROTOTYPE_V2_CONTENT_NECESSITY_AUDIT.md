# KAPAPI Prototype v2 — Content Necessity Audit

Status: **evidence for `PROTOTYPE_V2_CONTENT_GOVERNANCE.md` §0**
Branch: `feat/prototype-v2`
Updated: **2026-09-03**

Governance §0 says a visible element ships only if it is **(1) PRODUCT REQUIRED**,
**(2) REFERENCE-SUPPORTED UX**, or **(3) APPROVED BRAND-WORLD** — otherwise it is
deleted. This file walks every visible element of the public landing and names which
one applies. Anything that could not be classified is listed in §3 as deleted.

## 1. Landing, element by element

### Global navigation

| Element | Class | Justification |
|---|---|---|
| `KAPAPI` wordmark | 3 BRAND-WORLD | The product's own name, linking home. |
| `작업 찾기` | 1 PRODUCT REQUIRED | The supply entry. D-032 gives one account both roles, so the supply side must be reachable without a second identity. |
| `이용 방법` | 2 REFERENCE-SUPPORTED | Wishket and Kmong both carry an explanatory entry in primary nav; a marketplace with a non-obvious routing model needs one more than they do. |
| `로그인` | 1 PRODUCT REQUIRED | The only account affordance. There is deliberately no signup split — see §2. |
| `의뢰 등록` (button) | 1 PRODUCT REQUIRED | The primary demand action, repeated from the hero because the nav persists past it. |

No avatar, no name, no level, no organisation. The landing renders as a first visit.

### Hero

| Element | Justification |
|---|---|
| Film | 3 BRAND-WORLD. Approved hero media; carries the human payoff the product surface cannot. |
| `맡길 업무만 등록하세요` | 1 PRODUCT REQUIRED. States the one thing the user does. |
| `전문가 배정부터 결과 전달까지 카파피가 진행합니다.` | 1 PRODUCT REQUIRED. States D-031 auto-routing in the only place a first-time visitor will read it. |
| Product panel inside the laptop, then full-frame | 1 PRODUCT REQUIRED. Every row, exclusion and rationale is `route()` output on fixture `#0182`, not written copy. This is the "show, don't explain" obligation discharged. |
| `다시 보기` | 2 REFERENCE-SUPPORTED. Replay control for a sequence that carries argument, not decoration. Desktop only; on a phone the composer takes the full width, and the sequence loops on its own. |
| Composer: input, `파일 첨부`, `의뢰 등록` | 1 PRODUCT REQUIRED. Work description plus source files is the whole input to routing; the file affordance is not optional, since `nda` and the scope draft both key off attachments. |
| Four example chips | 2 REFERENCE-SUPPORTED, and **not** the v1 pattern. Kmong sets unlabelled chips under its input; these are four because the routing model has exactly four categories (`cad`, `image`, `data`, `doc` in `src/lib/kapapi.ts`), one example each. They fill the composer when clicked. A fifth would have no category behind it. |

### Sections

| Section | Heading | Justification |
|---|---|---|
| RoutingProof | `제안은 경쟁합니다. 비교는 하지 않으셔도 됩니다.` | 1 PRODUCT REQUIRED. D-031 says the issuer never picks; the inspectable ranking with its six weights and hard filters is the proof. The one deliberate dark surface, because it is the only place machine work is shown running. |
| CaseSection | `실제로 오간 의뢰 한 건` | 1 PRODUCT REQUIRED. One complete transaction with real scope, outputs and acceptance criteria. The 건축·도면 note is the stated beachhead, not decoration. |
| UrgentSection | `오늘 안에 끝나야 하는 작업` | 1 PRODUCT REQUIRED. Committed delivery time is half of the mandatory PRICE × DELIVERY pair; a live countdown is the only honest way to show a deadline binding. |
| ResultSection | `마지막 판단은 의뢰한 사람이 합니다` | 1 PRODUCT REQUIRED. Bounds the claim: KAPAPI checks files, formats and arrival time only. Prevents the AI-quality-judgement claim the footer also disclaims. |
| AccountSection | `같은 계정으로 작업을 받을 수도 있습니다` | 1 PRODUCT REQUIRED. D-032 universal identity, shown as three concurrent rows on one account rather than asserted in prose. |

### Footer

| Element | Justification |
|---|---|
| Wordmark and one-line description | 3 BRAND-WORLD |
| `이용하기` column (의뢰 등록 / 작업 찾기 / 내 의뢰 / 이용 방법) | 1 PRODUCT REQUIRED. Every route the prototype has. |
| `사례` column | 1 PRODUCT REQUIRED. Direct links to the two demonstrated quests. |
| Claim disclaimer | 1 PRODUCT REQUIRED. States that escrow and completion guarantee are not provided and that final acceptance is the issuer's. Asserted by `scripts/loop.mjs`. |
| `PROTOTYPE V2 · 2026` | 3 BRAND-WORLD. Machine metadata in the `.hud` treatment, which is documented as never carrying Korean prose. |

## 2. Negative audit — v1 leakage

Every banned artifact from governance §1, checked against the built landing. The first
five are asserted on every run by `scripts/loop.mjs`, so a regression fails the suite
rather than waiting for a reviewer.

| Banned in v1 | Present in v2 | How verified |
|---|---|---|
| `김도현` in the landing header | No | `loop.mjs` landing assertion |
| `QUEST NETWORK` | No | `loop.mjs` landing assertion |
| `QUEST NETWORK · ONLINE` eyebrow | No | Substring of the above |
| `RESET` or any public debug control | No | `loop.mjs` landing assertion |
| `이런 일들이 올라옵니다` | No | `loop.mjs` landing assertion |
| Arbitrary avatar / fake logged-in state | No | Nav renders `로그인` only; no avatar element exists |
| Meaningless ONLINE / system-status decoration | No | The only machine metadata is the step label inside the product panel (`4 BIDS RECEIVED`), which changes with real state |
| Unjustified fixed 4-chip row | No | Four chips, one per routing category — see §1 |
| `할 일을 던져주세요.` | No | `loop.mjs` landing assertion |
| `일 던져놔. 결과만 받아.` / `Good. Done.` / `GOOD DONE` | No | Absent from the tree; all Korean copy rewritten in `research/copy-final.md` |
| Paragraph-wall or 01-02-03-04 numbered-column landing | No | Landing measures 210 characters and 0 cards in the first viewport |
| Detached black dashboard card beside the video | No | The product surface is composited into the laptop screen, then cuts full-frame; it never sits beside the film |

## 3. Considered and deleted

Recorded so the reasoning is not re-litigated.

- **A statistics band** (`거래 12,400건`, `평균 배정 4분`). Would have been invented numbers with no fixture behind them. Kmong and Soomgo both carry counted trust evidence, so it is reference-supported in form — but only when the count is real. Deleted until there is one.
- **Category tiles for the four routing categories.** The chips already carry them, and a tile grid is the templated-marketplace pattern the first-viewport measurement was adopted to avoid.
- **A testimonial row.** No real customers exist. Fabricated ones fail all three tests.
- **`전문가 등록` / `고수 가입` as a second CTA.** This is exactly the buyer/seller signup split that Kmong, Wishket and Soomgo all use and that D-032 forbids. `loop.mjs` asserts no such control exists on `/board`.
- **A progress percentage on running work.** Not observable, so it would be fiction. `loop.mjs` asserts no `n% 완료 / 진행` string appears.
- **A celebration state on completion.** Asserted absent by `loop.mjs`; the work is a delivery, not an achievement.
