# KAPAPI Prototype v2 — Korean UX Writing Authority

Status: **mandatory copy authority for `main`**  
Updated: **2026-09-03**

Public Korean copy follows D-033.1–.12, D-034 and D-035. The 발주자 approves an
execution contract; KAPAPI handles procurement, selection, assignment, QA and
recovery internally without claiming unsupported universal automation.

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
업무 요청 (파일 + 한 줄)
→ 작업 조건 정리
→ 실행 계약: 결과물 + 가격 + 완료시간 + 수정 경계 + 복구 경계
→ 발주자 승인
→ (카파피: 제안 · 조건 확인 · 선정 · 배정 · 수행)
→ 결과 확인 / 수정 요청
```

발주자 기준 세 노드: **발주자 → 카파피 → 결과**.

Do not write copy implying the price or completion time is guaranteed beyond the
contract's own terms, and do not imply universal instant pricing — D-033.6 says an
instant quote is earned. Say what the quote was derived from.

Preferred current semantic language includes:

- `맡기기`
- `이 조건으로 맡기기`
- `작업 찾기`
- `제안 보내기`
- `제안이 도착했습니다`
- `조건을 확인합니다`
- `카파피가 작업자를 배정했습니다`
- `왜 이 작업자인가요?`
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

> **오늘은 어떤 일을 끝낼까요?**
> 파일을 업로드하고 간단하게 설명해 주세요.

Input:

> `파일을 업로드하고 간단하게 설명해 주세요.`

Primary CTA:

> `맡기기`

작업자 entry: the 발주자 / 작업자 header toggle, not a CTA on the client's surface.

Do not use hero copy such as:

> `의뢰를 등록하면 카파피가 적합한 전문가를 자동 배정합니다.`

because universal auto-routing is a later earned capability.

---

## 4. Task-first 작업자 language

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

Avoid copy that suggests a 작업자 must first become a “seller,” create a shop or permanently switch account roles.

---

## 5. PRICE × DELIVERY language

Keep the distinction concrete.

Prefer:

- `금액`
- `완료 시간`
- `배정 시점부터 납품까지`

Avoid calling DELIVERY TIME “예상 작업시간” when it is actually the committed elapsed time to submission.

제안은 이렇게 읽혀야 합니다:

> `₩120,000 / 8시간`

No long proposal-letter language is required by default.

---

## 6. Selection language

The 발주자 approves the execution contract before KAPAPI procures and assigns
execution. Approval copy describes the result, price, completion time and
revision/recovery boundaries. Assignment copy reports KAPAPI's action and rationale.

On the 발주자 surface:

- `카파피가 작업자를 배정했습니다`
- `배정된 작업자`
- `왜 이 작업자인가요?`
- `작업을 시작했습니다`

Keep worker-selection and proposal-comparison controls off the 발주자 surface.
Use `이 조건으로 맡기기` for execution-contract approval and `결과 확인` / `수정 요청`
for the delivered result so the object of each action is clear.

`이용 방법` may say `선정` and show the criteria and the excluded 제안, because
explaining the mechanism is that page's job.

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

State labels stay in Korean (D-034):

- `결과 도착`
- `업무 완료`

No confetti, trophy or congratulatory copy is needed for professional transaction completion.

---

## 8. Future Outcome Layer language

Current public product may explain the long-term direction, but it must be framed as evolution.

Good semantic direction:

> 완료된 업무가 쌓일수록 배정이 정확해지고, 검증된 업무부터 카파피가 복구까지 더 많이 맡습니다.

Long-term concept:

> `work in → result out`

Do not write as if current users already receive universal autonomous execution or guaranteed SLA outcomes.

When mentioning future execution, KAPAPI may combine:

- human 작업자
- AI
- automation
- specialist partners
- hybrid workflows

The public message should still focus on the result, not technical orchestration jargon.

---

## 9. State labels

A state label is a short Korean phrase beside the sentence, not a second language.

Good:

`업무가 등록되었습니다`  
`업무 등록`

`카파피가 작업자를 배정했습니다`  
`작업자 배정`

`업무가 완료되었습니다`  
`업무 완료`

Two rules learned from shipping this: the label must be Korean (D-034 removed the
latin state vocabulary), and it must therefore not be set in the mono face with
letter-spacing — that treatment was designed for latin small-caps and splits
Hangul into detached glyphs (`업 무 #0211`, `6시 간`). Sans, no tracking, tabular
figures where numbers need to line up.

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
- 업무 목록
- 업무 상세
- 제안 폼
- execution-contract approval / assignment information
- profile/trust
- workroom
- result/revision
- empty/error states
- footer/disclaimer
- accessibility labels

Reject copy if it feels like internal slang, literal English translation, pitch-deck prose, AI-generated Korean, game exposition or unsupported product claims.

A Korean user should think:

> **“이 서비스에서 원래 쓰는 말 같다.”**
