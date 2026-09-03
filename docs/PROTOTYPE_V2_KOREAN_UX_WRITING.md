# KAPAPI Prototype v2 — Korean UX Writing Authority

Status: **mandatory copy authority for `feat/prototype-v2`**  
Updated: **2026-09-03**

Public Korean copy must follow current D-032 product behavior. Older wording that assumes universal auto-routing is superseded.

## 0. Core writing rule

Write natural Korean product language from the user's immediate action outward.

The product idea is canon. Old slogans and example sentences are not.

Target tone:

- concise
- professional but not stiff
- familiar to Korean web/marketplace users
- action-first
- low explanation burden
- confident without overclaiming
- no startup jargon
- no artificial game exposition

---

## 1. Internal language not approved as public hero copy

Do not automatically ship:

- `할 일을 던져주세요.`
- `일 던져놔. 결과만 받아.`
- literal Korean variants of `DROP WORK. GET RESULTS.`
- `맡겼습니다. 이제 하시던 일 하세요.`
- `Good. Done.` / `GOOD DONE`

These may remain internal strategic shorthand.

The North Star `해야 할 일을 올리면, 결과로 돌아온다.` is a strategy/product-direction sentence, not mandatory hero copy.

---

## 2. Current public product semantics

The current prototype must communicate this honestly:

```text
의뢰 등록
→ 제안 도착
→ 카파피 추천
→ 의뢰자 확인/확정
→ 작업
→ 결과 확인 / 수정 요청
```

Do not write copy implying that KAPAPI universally auto-assigns a worker immediately after posting.

Preferred current semantic language includes:

- `의뢰 등록`
- `작업 찾기`
- `제안 보내기`
- `제안이 도착했습니다`
- `조건을 확인합니다`
- `카파피 추천`
- `왜 추천하나요?`
- `이 작업자로 진행`
- `다른 제안 보기`
- `작업을 시작했습니다`
- `결과가 도착했습니다`
- `결과 확인`
- `수정 요청`

These are product-language directions, not immutable exact strings.

---

## 3. Hero copy direction

The first view should communicate one immediate action:

> **the user can enter the work they need done here.**

Current approved semantic direction:

> **맡길 일을 적어주세요.**  
> 카파피가 작업 조건을 정리하고 맞는 제안을 추천합니다.

Input:

> `어떤 작업이 필요하신가요?`

Primary CTA:

> `의뢰 등록`

PLAYER entry:

> `작업 찾기`

Do not use hero copy such as:

> `의뢰를 등록하면 카파피가 적합한 전문가를 자동 배정합니다.`

because universal auto-routing is a later earned capability.

---

## 4. Task-first PLAYER language

KAPAPI should feel like a place where real work exists before a seller storefront.

Useful labels:

- `지금 열려 있는 작업`
- `내가 할 수 있는 작업`
- `오늘 마감`
- `참여 가능`
- `조건 미충족`
- `제안 보내기`
- `보수`
- `완료`
- `마감`

Avoid copy that suggests a PLAYER must first become a “seller,” create a shop or permanently switch account roles.

---

## 5. PRICE × DELIVERY language

Keep the distinction concrete.

Prefer:

- `금액`
- `완료 시간`
- `작업자로 확정된 시점부터 납품까지`

Avoid calling DELIVERY TIME “예상 작업시간” when it is actually the committed elapsed time to submission.

A BID should read naturally as:

> `₩120,000 / 8시간`

No long proposal-letter language is required by default.

---

## 6. Recommendation language

Recommendation must be clearly different from assignment.

Before GM confirmation:

- `추천`
- `카파피 추천`
- `추천이 준비되었습니다`
- `왜 이 작업자를 추천하나요?`

After GM confirmation:

- `확정`
- `이 작업자로 진행합니다`
- `확정된 작업자`
- `작업을 시작했습니다`

Do not use `배정 완료`, `PLAYER ASSIGNED` or equivalent before confirmation in the current prototype.

Alternatives should remain understandable through simple language such as:

> `다른 제안 보기`

---

## 7. Result / revision language

The result surface should be sober and transactional.

Prefer:

- `결과가 도착했습니다`
- `결과 파일`
- `납품`
- `마감 대비`
- `결과 확인`
- `수정 요청`
- `수정을 요청했습니다`
- `수정본이 도착했습니다`
- `작업이 완료되었습니다`

World layer may accompany ordinary Korean:

- `RESULT READY`
- `QUEST COMPLETE`

No confetti, trophy or congratulatory copy is needed for professional transaction completion.

---

## 8. Future Outcome Layer language

Current public product may explain the long-term direction, but it must be framed as evolution.

Good semantic direction:

> 완료된 QUEST가 쌓일수록 추천이 좋아지고, 검증된 업무부터 카파피가 배정과 복구를 더 많이 맡습니다.

Long-term concept:

> `work in → result out`

Do not write as if current users already receive universal autonomous execution or guaranteed SLA outcomes.

When mentioning future execution, KAPAPI may combine:

- human PLAYERs
- AI
- automation
- specialist partners
- hybrid workflows

The public message should still focus on the result, not technical orchestration jargon.

---

## 9. World terminology

KAPAPI world terms are concise state grammar after ordinary Korean makes the action clear.

Good:

`의뢰가 등록되었습니다`  
`QUEST CREATED`

`추천이 준비되었습니다`  
`RECOMMENDATION READY`

`작업이 완료되었습니다`  
`QUEST COMPLETE`

Avoid paragraphs explaining QUEST/BID/PLAYER/LEVEL/EXP on transactional screens.

---

## 10. Copy density

For public landing sections:

- one short headline
- at most one short supporting sentence by default
- let UI, motion, files, numbers and states carry the rest

If a paragraph is necessary to explain what a product UI is supposed to demonstrate, first improve the UI.

---

## 11. Korean market research

Before a major copy rewrite, inspect current Korean wording used by relevant marketplaces and contemporary Korean product sites where reachable.

Especially review:

- request/commission wording
- budget/deadline terminology
- quote/proposal language
- trust/profile labels
- delivery/revision states
- mobile CTA density

Use familiar conventions where they improve comprehension. Do not copy exact branded language or layouts.

---

## 12. Whole-product audit

Before founder review, inspect every visible Korean string across:

- navigation
- hero
- task input/examples
- upload controls
- scope confirmation
- submit confirmation
- QUEST board
- QUEST detail
- BID form
- recommendation/confirmation
- profile/trust
- workroom
- result/revision
- empty/error states
- footer/disclaimer
- accessibility labels

Reject copy if it feels like internal slang, literal English translation, pitch-deck prose, AI-generated Korean, game exposition or unsupported product claims.

A Korean user should think:

> **“이 서비스에서 원래 쓰는 말 같다.”**
