# KAPAPI Prototype v2 — Content Necessity Audit

Status: **SUPERSEDED — historical rendered-content audit**
Branch: `feat/prototype-v2`
Updated: **2026-09-03**

> The tables and checks below describe an earlier rendered build and preserve its
> audit evidence. They do not specify current navigation, contract flow, terminology
> or passing tests. Current content rules remain in `PROTOTYPE_V2_CONTENT_GOVERNANCE.md`;
> D-033.1–.12, D-034, D-035, `PROTOTYPE_SPEC.md` and `QA_CHECKLIST.md` govern the
> execution-contract flow and current review. Recheck the current build before reusing
> any assertion or measurement below.

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
| `발주자 / 작업자` toggle | 1 PRODUCT REQUIRED | The two surfaces of one account. A view switch, not a signup fork (IDENTITY_ROLE_MODEL §1). Asserted present by `loop.mjs`. |
| `내 업무`, `이용 방법` | 1 PRODUCT REQUIRED | The account's own work and the explainer. Desktop only; both stay reachable on a phone from the page body. |
| `회원가입` (button) | 1 PRODUCT REQUIRED | One door, not two. The role comes from each 업무, so there is no 의뢰인/전문가 split — the thing Kmong, Wishket and Soomgo all do and this must not. `loop.mjs` asserts no second signup door exists. |

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

### Sections — 발주자 surface (`/`)

| Section | Heading | Justification |
|---|---|---|
| ResultFlowSection | `올리고 나면, 결과가 옵니다` | 1 PRODUCT REQUIRED. D-035's whole claim, as three beats from real `route()` output: 업무를 올립니다 → 카파피가 배정합니다 → 결과가 도착합니다. Beat 02 is the only one carrying the accent, because it is the step the client does not do. |
| AccountSection | `일을 맡기던 사람이, 다른 일을 할 수도 있습니다` | 1 PRODUCT REQUIRED. Universal identity, shown as three concurrent rows on one account. Also the route to `/my` on a phone, where the header links are hidden. |

The `이용 방법 자세히 보기` control at the end of the flow section is 1 PRODUCT
REQUIRED: below 860px the header's text links are hidden, so it is the only route
to `/how`. It is a 44px control rather than an inline link for that reason.

### Sections — 작업자 surface (`/board`)

The work list itself, not a page in front of it. Open 업무 with 보수 range,
완료시간, 마감, 제안 count and per-item eligibility, plus the 내가 할 수 있는 작업 and
오늘 마감 filters. This is where 가격 + 완료시간 lives after D-035 moved it off the
client's screen.

### Not currently rendered

- **UrgentSection** (`오늘 안에 끝나야 하는 작업`). Lost its surface when the 작업자
  landing was removed. 긴급 업무 is named canon, so it is held rather than deleted.
- **RoutingProof**, **CaseSection**, **EvolutionSection**. Superseded on the client
  surface by ResultFlowSection and by `이용 방법`, which now carries the full
  mechanism including the excluded bids.

### Footer

| Element | Justification |
|---|---|
| Wordmark and one-line description | 3 BRAND-WORLD |
| ~~`이용하기` / `사례` columns~~ | **Removed** by founder direction. The header carries navigation; repeating it here was a sitemap the page did not need. `/my` is reached from the account section and `/how` from the flow section's closing control. |
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
| Arbitrary avatar / fake logged-in state | No | The header is brand, toggle and `회원가입`; no avatar element exists |
| Meaningless ONLINE / system-status decoration | No | The only state labels are the flow section's beats, which read off real `route()` output |
| Unjustified fixed 4-chip row | No | There are no chips. The hero asks for one sentence instead of offering four |
| `할 일을 던져주세요.` | No | `loop.mjs` landing assertion |
| `일 던져놔. 결과만 받아.` / `Good. Done.` / `GOOD DONE` | No | Absent from the tree; all Korean copy rewritten in `research/copy-final.md` |
| Paragraph-wall or 01-02-03-04 numbered-column landing | No | Landing measures **173 characters** in the first viewport, against Notion's 124, Vercel's 204 and Clerk's 1420. The flow section is numbered 01–03, but it is three real states of one work item rather than a feature grid |
| Detached black dashboard card beside the video | No | Nothing sits beside or on the film, asserted at five sample points by `hero-qa.mjs` |

## 3. Considered and deleted

Recorded so the reasoning is not re-litigated.

- **A statistics band** (`거래 12,400건`, `평균 배정 4분`). Would have been invented numbers with no fixture behind them. Kmong and Soomgo both carry counted trust evidence, so it is reference-supported in form — but only when the count is real. Deleted until there is one.
- **Category tiles for the four routing categories.** A tile grid is the templated-marketplace pattern the first-viewport measurement was adopted to avoid, and the field takes free text precisely so the visitor does not have to pick a category first.
- **A testimonial row.** No real customers exist. Fabricated ones fail all three tests.
- **`전문가 등록` / `고수 가입` as a second CTA.** The buyer/seller signup split Kmong, Wishket and Soomgo all use, and that IDENTITY_ROLE_MODEL §1 forbids. 숨고's worker landing was measured for this audit and is the clearest example: a dedicated sparse page whose single CTA is `고수 가입하기`. The structure was worth taking; that door was not. `loop.mjs` searches the whole page for `작업자 가입`, `고수 가입` and `전문가 등록` and requires zero matches.
- **A progress percentage on running work.** Not observable, so it would be fiction. `loop.mjs` asserts no `n% 완료 / 진행` string appears.
- **A celebration state on completion.** Asserted absent by `loop.mjs`; the work is a delivery, not an achievement.
