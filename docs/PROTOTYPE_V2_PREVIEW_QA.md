# KAPAPI Prototype v2 — Preview and live QA

Status: **SUPERSEDED — historical preview and QA snapshot**
Branch: `main`
Updated: **2026-09-04** (deployment facts only; the QA body below is 2026-09-03)

> This records a previous preview session, not verification of the latest branch
> HEAD or the current destination of the preview alias. The build and test claims
> below are historical, including any flow that omits contract approval.
> Current requirements follow D-033.1–.12, D-034, D-035, `PROTOTYPE_SPEC.md` and
> `QA_CHECKLIST.md`; a current preview report requires a fresh deployment/QA check.

## Deployment

The branch this file was written against no longer exists. On 2026-09-04 the
repository was consolidated onto a single branch by founder direction: `main` was
fast-forwarded to `bb81af0` — the same tree, no merge commit — and
`feat/prototype-v1`, `feat/prototype-v2` and `개선안` were deleted. The first and
last are preserved as the tags `archive/prototype-v1` and
`archive/improvement-canon`, so their history survives without a branch.

| | |
|---|---|
| Production | <https://kapapi.vercel.app> |
| Project | `prj_OE2VU0XUNFCnjGebuJLeVkKhEy5s` (`kapapi`, team `team_cuJFcIPj1zvkSmGeDk3hckZd`) |
| Target | `production` — promoted by founder direction |

The old preview alias still resolves to the last deployment it was given, but no
push will ever update it again. Use the production domain.

The three harnesses were re-run against the production URL after the promotion:
`loop.mjs` 10/10, `hero-qa.mjs` no video-rule violation across five viewports,
`shots.mjs` 6 routes × 2 viewports all ok. That covers the deployment only — the
historical claims in the rest of this file are unchanged.

## What the build demonstrates

D-035 as amended by D-033.1. The 발주자's model is three nodes:

```text
발주자  →  실행 계약 승인  →  카파피  →  결과
```

The 발주자 acts once — they describe the work and approve the **실행 계약**
(결과물 + 가격 + 완료시간 + 수정 경계 + 복구 경계). The price is derived from the
proposals that category is actually receiving and the basis is shown on screen
(D-033.6). 입찰 and 선정 happen inside the middle node. The 작업자 surface (`/board`) carries
the market, because proposing 가격 + 완료시간 is what that person is there to do,
and `이용 방법` opens the box to explain the mechanism.

The two surfaces are one account, switched by the header toggle. `/` is 발주자 and
`/board` is 작업자, so the active side is read off the URL rather than stored.

## Harnesses

All three run against the deployed URL, not localhost.

| Harness | Covers |
|---|---|
| `scripts/loop.mjs` | 10 canon invariants |
| `scripts/hero-qa.mjs` | the film's rules at 1920, 1440, 1280, tablet, mobile |
| `scripts/shots.mjs` | 6 routes × desktop and mobile: overflow, touch targets, unnamed controls, first-viewport density |

### What `loop.mjs` asserts

- the landing is 업무 입력 → 배정 → 결과, with no `제안 비교` or `가장 적합한 후보를 추천`;
- the 발주자 / 작업자 toggle exists, and **no second signup door** does — `작업자 가입`,
  `고수 가입`, `전문가 등록` are all searched for and must be absent (숨고's
  `고수 가입하기` is the pattern this rules out);
- posting work promises assignment without comparison;
- the 발주자 surface reaches 배정된 작업자 with 왜 이 작업자인가요, and carries **no**
  `이 작업자로 진행`, `다른 제안 보기` or `카파피 추천`, verified by querying the DOM for
  any worker-selection control;
- work runs to the result without another client step;
- no fabricated progress percentage;
- revision and acceptance still work;
- 작업 찾기 browses open work with no storefront and no separate account;
- 가격 + 완료시간 are both required and validated against the deadline;
- one account holds 발주자 / 작업자 / 제안 참여 at once;
- the footer states what is not provided.

### What `hero-qa.mjs` asserts

The founder's file is used as delivered, so this measures the rendered element
rather than trusting the CSS: the original path and resolution, rendered ratio
within 0.02 of the source, `object-fit` never `cover`, **zero** elements painted
over the frame at five sample points, no filter, no controls, actually playing, no
horizontal scroll, and the film at 50–55% of the viewport on desktop / stacked
under the action on a phone.

## Known gaps

- `UrgentSection` (긴급 업무, 가격 × 완료시간) is built but not rendered anywhere. It lost
  its surface when the 작업자 landing was removed. 긴급 업무 is named canon and
  `PROTOTYPE_SPEC` §5 lists it, so it is waiting for a surface rather than deleted.
- The 발주자 landing was reduced to hero + one proof section + the account section.
  `PROTOTYPE_SPEC` S01 has been amended to match, but the reduction was a founder
  direction ("완전히 비우고"), not a measured result.
- No live QA has been run against a Production deployment, because there has
  deliberately not been one for this branch.
