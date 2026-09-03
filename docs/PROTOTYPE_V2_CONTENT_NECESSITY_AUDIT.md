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
| `로그인` | 1 PRODUCT REQUIRED | Account entry. |
| `회원가입` (button) | 1 PRODUCT REQUIRED | One door, not two. D-032: the role comes from each QUEST, so there is no 의뢰인/전문가 split — the thing Kmong, Wishket and Soomgo all do and this must not. |

`작업 찾기` and `이용 방법` are **not** in the landing header. The first screen has to
read as "put a file here and describe the job", and a row of section links is what
makes a visitor start reading instead. Both stay in the header on every inner route,
and both are in the footer and in the account section's CTA pair, so the supply side
D-032 requires is still reachable — one scroll lower than before. This is the one
place where the first-screen brief and the supply-entry requirement pull against each
other, and it is recorded here rather than resolved silently.

No avatar, no name, no level, no organisation. The landing renders as a first visit.

### Hero

The hero is the founder's film on the right and the action on the left. Nothing is
composited into the footage and nothing covers it — that rule is enforced per commit
by `scripts/hero-qa.mjs`, which measures the rendered element rather than trusting
the CSS.

| Element | Justification |
|---|---|
| Film (`/media/KAPAPI.mp4`) | 3 BRAND-WORLD. The founder's file, served byte-for-byte at 1920×1080 with no re-encode, shown whole at its own 16:9 ratio. |
| `오늘은 어떤 일을 끝낼까요?` | 1 PRODUCT REQUIRED. The only sentence on the first screen, and it asks for the one input the product takes. Set on one line at every width. |
| Field: `+` upload, `파일을 업로드하고 간단하게 설명해 주세요.` | 1 PRODUCT REQUIRED. Work description plus source files is the entire input to routing; `nda` and the scope draft both key off attachments. The sentence is the field's placeholder, so it clears the moment anyone types. |
| `맡기기` | 1 PRODUCT REQUIRED. The primary action. |

Removed from the previous build, and why: the headline overlay and legibility veil
(text on the film), the product surface composited into the laptop screen, the
full-frame product cut, and the `다시 보기` replay control — all of them either
covered the film or modified how it reads, which the founder's direction forbids.
The example chips went with them: they belonged to a composer that no longer exists,
and the field asks for one sentence rather than offering four.

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
| Meaningless ONLINE / system-status decoration | No | The only machine metadata is the routing section's state label, which changes with real `route()` output |
| Unjustified fixed 4-chip row | No | There are no chips. The hero asks for one sentence instead of offering four |
| `할 일을 던져주세요.` | No | `loop.mjs` landing assertion |
| `일 던져놔. 결과만 받아.` / `Good. Done.` / `GOOD DONE` | No | Absent from the tree; all Korean copy rewritten in `research/copy-final.md` |
| Paragraph-wall or 01-02-03-04 numbered-column landing | No | Landing measures **109 characters and 0 cards** in the first viewport, below Notion's 124 and near Toss's 42 |
| Detached black dashboard card beside the video | No | Nothing sits beside or on the film. The one dark surface on the page is the routing proof, a full section lower |

## 3. Considered and deleted

Recorded so the reasoning is not re-litigated.

- **A statistics band** (`거래 12,400건`, `평균 배정 4분`). Would have been invented numbers with no fixture behind them. Kmong and Soomgo both carry counted trust evidence, so it is reference-supported in form — but only when the count is real. Deleted until there is one.
- **Category tiles for the four routing categories.** A tile grid is the templated-marketplace pattern the first-viewport measurement was adopted to avoid, and the field takes free text precisely so the visitor does not have to pick a category first.
- **A testimonial row.** No real customers exist. Fabricated ones fail all three tests.
- **`전문가 등록` / `고수 가입` as a second CTA.** This is exactly the buyer/seller signup split that Kmong, Wishket and Soomgo all use and that D-032 forbids. `loop.mjs` asserts no such control exists on `/board`.
- **A progress percentage on running work.** Not observable, so it would be fiction. `loop.mjs` asserts no `n% 완료 / 진행` string appears.
- **A celebration state on completion.** Asserted absent by `loop.mjs`; the work is a delivery, not an achievement.
