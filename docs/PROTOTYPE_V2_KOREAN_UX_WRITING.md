# KAPAPI Prototype v2 — Korean UX Writing Authority

Status: **mandatory copy authority for `feat/prototype-v2`**  
Updated: **2026-09-02**

This document overrides public-facing Korean copy examples in older KAPAPI documents when they conflict.

## 0. Reset rule

**Rewrite all public-facing Korean copy from zero for Prototype v2.**

Older phrases were useful as internal product shorthand, but several are not appropriate as polished Korean web-service copy. Do not preserve wording merely because it appears in `PRODUCT.md`, `KAPAPI_ART_DIRECTION.md`, `UPWORK_FIRST_TOUCH_REFERENCE.md`, `HERO_MEDIA.md`, old prompts, or Prototype v1.

The product idea is canon. The old Korean phrasing is not.

## 1. Internal language that must NOT be used as public hero copy

Do not ship these as public-facing headline/CTA copy:

- `할 일을 던져주세요.`
- `일 던져놔. 결과만 받아.`
- literal Korean variants of `DROP WORK. GET RESULTS.`
- `맡겼습니다. 이제 하시던 일 하세요.`
- `일하러 오셨나요?` when it sounds like a role/class split
- `Good. Done.` / `GOOD DONE` or any translated equivalent

These may remain as **internal strategic shorthand only** if useful to the team.

Do not turn KAPAPI world terms into unnatural Korean sentences just to show the world-building.

## 2. Mandatory Korean-language research before writing

Before finalizing public copy:

1. inspect the actual live Korean wording used by **Kmong, Wishket, and Soomgo** across homepage, request creation, search/category, detail, profile/trust, quote/budget/deadline, delivery/revision, and empty/onboarding states where reachable;
2. inspect at least several high-quality Korean SaaS/product sites beyond marketplaces for contemporary Korean product-writing tone;
3. inventory every installed Korean-language, Korean copywriting, UX-writing, localization, writing, editing, or product-copy skill/plugin/tool in the Claude Code environment;
4. **actually invoke the relevant Korean-language capability if available** and record how it changed the copy;
5. do not rely on English-first copy translated literally into Korean.

If a Korean writing skill is installed, using it is mandatory.

## 3. Public Korean tone

Target tone:

- natural Korean web-service language,
- concise,
- professional but not stiff,
- familiar to Korean marketplace users,
- confident without overclaiming,
- action-first,
- low explanation burden,
- no startup jargon,
- no internal-team slang,
- no awkward game-language exposition.

Prefer familiar verbs such as:

- `의뢰하기`
- `업무 맡기기`
- `의뢰 등록`
- `작업 찾기`
- `결과 확인`
- `수정 요청`

Choose the final wording only after live Korean-market inspection. These are examples, not mandatory labels.

## 4. Hero copy direction

The first view should communicate, in ordinary Korean:

1. **what the user can do here**,
2. **what KAPAPI handles after submission**,
3. **what the user receives**.

Good semantic directions include:

- `필요한 업무를 맡겨보세요.`
- `의뢰를 등록하면, 카파피가 적합한 전문가를 배정합니다.`
- `업무를 등록하고 결과를 받아보세요.`
- `필요한 작업을 등록하면 전문가 배정부터 결과 전달까지 카파피가 진행합니다.`

These are **directional examples only**. Do not blindly ship them. Compare real Korean marketplace language and choose the shortest natural version that fits the final visual composition.

The headline must not sound like a slogan invented in a brainstorming chat.

## 5. Copy density rule

Public landing copy must support the visual system, not replace it.

For each section:

- one headline,
- at most one short supporting sentence when genuinely needed,
- labels/status/data for the rest.

Avoid explanatory paragraph walls.

If a concept can be shown through product UI, motion, object transformation, media, timeline, state change, numbers, or direct manipulation, **show it instead of explaining it in prose**.

Perform a copy-deletion pass: remove supporting paragraphs and verify the visual still communicates the idea. If meaning collapses, improve the visual composition first.

## 6. World terminology rule

KAPAPI world terms remain important, but they should appear as concise state language and metadata after ordinary Korean makes the action clear.

Good:

`의뢰가 등록되었습니다`  
`QUEST #0182 CREATED`

`전문가 배정 완료`  
`PLAYER ASSIGNED`

`작업 완료`  
`QUEST COMPLETE`

Bad:

long Korean paragraphs that explain what QUEST, BID, GM, PLAYER, LEVEL or EXP mean.

## 7. Whole-product rewrite pass

Before founder review, audit and rewrite **every visible Korean string** across:

- navigation,
- hero,
- task input and placeholder,
- upload/file controls,
- scope confirmation,
- submit confirmation,
- QUEST board,
- BID entry,
- routing proof,
- profile/trust,
- workroom,
- result/delivery,
- revision/acceptance,
- empty states,
- validation/error messages,
- mobile labels,
- final CTA,
- accessibility labels where Korean is exposed.

Do not limit the rewrite to the hero.

## 8. Final copy acceptance

Reject copy if it feels like:

- internal team slang,
- literal translation from English SaaS copy,
- pitch-deck prose,
- AI-generated Korean,
- game exposition,
- legalistic bureaucracy where ordinary Korean would work,
- unnecessarily cute language for professional transactions.

A Korean user should read it and think **“이 서비스에서 원래 쓰는 말 같다”**, not **“AI가 카피를 썼다.”**
