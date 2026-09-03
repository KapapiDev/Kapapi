# KAPAPI Identity & Role Model

Status: **canonical identity/role architecture**  
Updated: **2026-09-03** — terminology per D-034, view toggle per D-035

KAPAPI has **one universal user identity**.

발주자 and 작업자 are **contextual transaction roles**, not permanent account types, social classes, onboarding choices, or separate products.

> **A person is a KAPAPI user first. They are 발주자 on work they posted and 작업자 on work they proposed for or are performing.**

Historical note: this file previously used GM / PLAYER / QUEST. D-034 replaced that vocabulary with 발주자 / 작업자 / 업무 throughout. The architecture is unchanged; only the nouns are.

The same user may be 발주자 and 작업자 at the same time across different work items.

Example:

```text
USER A
├─ 업무 #0104 → 올린 사람 → 발주자
├─ 업무 #0182 → 제안 선정됨 → 작업자
└─ 업무 #0201 → 제안 대기 중 → 작업자
```

This is a core product/world rule, not an implementation detail.

---

## 1. Non-negotiable account rule

Do **not** design:

- `발주자 계정` vs `작업자 계정`,
- permanent role selection during signup,
- separate identities for hiring and working,
- a required onboarding fork such as `I am a client / I am a freelancer`,
- separate login systems,
- role switching that feels like changing account type.

**A 발주자 / 작업자 view toggle is permitted and is not a role switch.** It changes
which surface of the same account is on screen — what the person is currently
doing — and never which account they have. It must therefore: keep one signup and
one login, never appear during onboarding, never gate work behind "becoming a
작업자", and stay reversible at any moment without consequence. 숨고's `고수 가입하기`
is the pattern this rules out: a second signup door for the supply side.

A user signs up once and may perform either action whenever qualified:

- **일 맡기기**
- **일 찾기**

The role is derived from the person's relationship to the work item in front of them.

---

## 2. Product language

발주자 means:

> the user who posted this work item.

작업자 means:

> the user bidding on or performing this work item.

Therefore these terms describe **what the user is doing in a transaction**, not who the person permanently is.

World-building implication:

> 오늘은 내가 업무를 올리고, 다른 업무에서는 작업자로 참여할 수 있다.

발주자 and 작업자 are positions in a transaction, not account types chosen at signup.

---

## 3. First-touch UX

The public landing prioritizes 발주자 demand because demand/liquidity is the primary validation problem.

That does **not** mean the site defines the visitor as a permanent 발주자.

Hero hierarchy remains:

```text
할 일을 던져주세요.
[ 맡길 일을 입력 ]
[ 파일 첨부 ] [ 일 맡기기 → ]
```

The supply-side entry should be framed as another action available to the same user, for example:

- `일 찾기 →`
- `다른 업무에 참여하기 →`
- `작업할 업무 찾기 →`

Copy such as `일하러 오셨나요?` may be used only if it does not imply a separate 작업자 account/class.

Do not create a first-run role gate.

---

## 4. Navigation / information architecture

Prefer action-oriented navigation over identity-oriented navigation.

Good conceptual navigation:

```text
일 맡기기
일 찾기
내 업무
프로필
```

or an equivalent structure.

`내 업무` should be capable of showing both sides of activity with clear contextual labels, for example:

```text
맡긴 업무
수행 중인 업무
입찰한 업무
완료한 업무
```

Avoid a top-level architecture that permanently splits the product into:

```text
발주자 전용 계정 | 작업자 전용 계정
```

A temporary filter/view toggle is acceptable if it merely helps organize activity and does not change identity/account semantics.

---

## 5. Profile architecture

One user profile may contain two distinct reputation domains.

### Execution / 작업자 reputation

Examples:

- relevant career
- relevant 업무 completion history
- on-time rate
- revision rate
- dispute/failure history
- availability
- ~~LEVEL / EXP~~ (removed by D-034; trust is 작업이력 / 정시완료율 / 수정률)

### Issuer / 발주자 reputation

Examples:

- transaction/payment completion
- approval/review speed
- cancellation/dispute history
- 작업자 ratings of the 발주자
- clarity of 업무 history where appropriate

Do not collapse these into one meaningless universal score.

D-034 removes `LEVEL / EXP` from the product entirely; trust is 작업이력 / 정시완료율 / 수정률, not a score.

---

## 6. Qualification still applies

Universal identity does **not** mean every user is automatically qualified to perform every 업무.

A user can participate as 작업자 only where the category's eligibility, credentials, security, experience or other requirements allow it.

Therefore:

```text
universal identity
≠ universal qualification
```

KAPAPI may gate participation in a specific 업무 based on:

- skills
- verified career
- credentials
- security/NDA requirements
- category restrictions
- availability
- other explicit eligibility rules

The account remains universal even when an 업무 is unavailable to that user.

---

## 7. Demo / prototype rule

The prototype uses deterministic fixtures to demonstrate 발주자 and 작업자 actions,
but the UI must not imply those are two separate account species.

The shipped demonstration shows:

1. 업무 being posted (발주자 surface),
2. the 작업자 surface with open work and 가격 + 완료시간 bidding,
3. KAPAPI selecting,
4. the result arriving back on the 발주자 surface.

The 발주자 / 작업자 header toggle is what moves between 1 and 2. It is a view switch
on one account — `scripts/loop.mjs` asserts that the toggle exists and that no
second signup door (`작업자 가입`, `고수 가입`, `전문가 등록`) appears anywhere.

Transitions and copy must make clear these are **transaction perspectives**, not
permanent account identities.

Do not add production auth complexity merely to prove this model.

---

## 8. Vocabulary

D-034 removed the separate role/state vocabulary. Use 발주자 / 작업자 / 업무 / 제안 / 가격 / 완료시간 / 작업대금 / 업무 완료.

```text
업무 등록     → 올린 사람이 그 업무의 발주자
제안 도착     → 제안한 사람이 그 업무의 작업자 후보
작업자 배정   → 그 업무의 작업자로 확정
업무 완료     → 거래 종료, 계정은 그대로 하나
```

## 9. Mandatory implementation QA

Prototype v1 FAILS this model if any of the following is true:

- signup requires `발주자` or `작업자` as a permanent choice,
- a user needs two accounts to issue and execute work,
- navigation suggests mutually exclusive user classes,
- profile architecture cannot represent both issuer and execution history,
- the same user cannot conceptually post one 업무 and bid on another,
- `일 찾기` is treated as entry into a separate product/account rather than another available action.

Prototype v1 PASSES when a reviewer can naturally understand:

> **“카파피에서는 누구나 일을 맡길 수도 있고, 자기가 할 수 있는 다른 일을 받아서 수행할 수도 있구나.”**

---

## 10. One-sentence rule

> **One user identity. 발주자 and 작업자 are roles created by each 업무.**

발주자가 승인하는 것은 **실행 계약** — 결과물 + 가격 + 완료시간 + 수정 경계 + 복구 경계
— 이지 작업자가 아닙니다 (D-033.1).
