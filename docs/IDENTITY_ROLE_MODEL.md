# KAPAPI Identity & Role Model

Status: **canonical identity/role architecture**  
Updated: **2026-09-03** — terminology per D-034, view toggle per D-035

KAPAPI has **one universal user identity**.

발주자 and 작업자 are **contextual transaction roles**, not permanent account types, social classes, onboarding choices, or separate products.

> **A person is a KAPAPI user first. They are 발주자 on work they posted and 작업자 on work they proposed for or are performing.**

Historical note: this file previously used GM/PLAYER. D-034 replaced that vocabulary with 발주자/작업자. The architecture below is unchanged; only the nouns are.

The same user may act as GM and PLAYER at the same time across different QUESTs.

Example:

```text
USER A
├─ QUEST #0104 → issuer → GM
├─ QUEST #0182 → BID accepted → PLAYER
└─ QUEST #0201 → BID pending → PLAYER
```

This is a core product/world rule, not an implementation detail.

---

## 1. Non-negotiable account rule

Do **not** design:

- `GM account` vs `PLAYER account`,
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

The role is derived from the current QUEST relationship.

---

## 2. Product language

GM means:

> the user who issued this QUEST.

PLAYER means:

> the user who is bidding on or executing this QUEST.

Therefore these terms describe **what the user is doing in a transaction**, not who the person permanently is.

World-building implication:

> 오늘은 내가 QUEST를 던지고, 다른 QUEST에서는 PLAYER로 참여할 수 있다.

This makes KAPAPI's world more coherent: GM and PLAYER are roles inside the QUEST system, not RPG classes selected at account creation.

---

## 3. First-touch UX

The public landing may prioritize GM demand because demand/liquidity is the primary validation problem.

That does **not** mean the site defines the visitor as a permanent GM.

Hero hierarchy remains:

```text
할 일을 던져주세요.
[ 맡길 일을 입력 ]
[ 파일 첨부 ] [ 일 맡기기 → ]
```

The supply-side entry should be framed as another action available to the same user, for example:

- `일 찾기 →`
- `다른 QUEST에 참여하기 →`
- `작업할 QUEST 찾기 →`

Copy such as `일하러 오셨나요?` may be used only if it does not imply a separate PLAYER account/class.

Do not create a first-run role gate.

---

## 4. Navigation / information architecture

Prefer action-oriented navigation over identity-oriented navigation.

Good conceptual navigation:

```text
일 맡기기
일 찾기
내 QUEST
프로필
```

or an equivalent structure.

`내 QUEST` should be capable of showing both sides of activity with clear contextual labels, for example:

```text
맡긴 QUEST
수행 중인 QUEST
입찰한 QUEST
완료한 QUEST
```

Avoid a top-level architecture that permanently splits the product into:

```text
GM MODE | PLAYER MODE
```

A temporary filter/view toggle is acceptable if it merely helps organize activity and does not change identity/account semantics.

---

## 5. Profile architecture

One user profile may contain two distinct reputation domains.

### Execution / PLAYER reputation

Examples:

- relevant career
- relevant QUEST completion history
- on-time rate
- revision rate
- dispute/failure history
- availability
- LEVEL / EXP

### Issuer / GM reputation

Examples:

- transaction/payment completion
- approval/review speed
- cancellation/dispute history
- PLAYER ratings of the GM
- clarity of QUEST history where appropriate

Do not collapse these into one meaningless universal score.

`LEVEL / EXP` primarily belongs to execution/progression unless a later decision explicitly defines a separate GM progression system.

---

## 6. Qualification still applies

Universal identity does **not** mean every user is automatically qualified to execute every QUEST.

A user can attempt to participate as PLAYER only where the category's eligibility, credentials, security, experience or other requirements allow it.

Therefore:

```text
universal identity
≠ universal qualification
```

KAPAPI may gate specific QUEST participation based on:

- skills
- verified career
- credentials
- security/NDA requirements
- category restrictions
- availability
- other explicit eligibility rules

The account remains universal even when a QUEST is unavailable to that user.

---

## 7. Demo / prototype rule

Prototype v1 may use deterministic fixtures to demonstrate GM and PLAYER actions, but the UI must not imply those are two separate account species.

It is acceptable for the demo script to temporarily show:

1. a QUEST being issued,
2. the supply-side BID view,
3. KAPAPI routing,
4. the GM result view.

But transitions/copy should make clear these are **transaction perspectives**, not permanent account identities.

Do not add production auth complexity merely to prove this model.

---

## 8. World-building intensity

This role model strengthens, rather than weakens, the world.

KAPAPI vocabulary should feel like roles in an active work system:

```text
QUEST created → issuer is GM for that QUEST
BID submitted → bidder is PLAYER for that QUEST
PLAYER assigned → execution role locks for that QUEST
QUEST COMPLETE → transaction ends, user remains a universal KAPAPI user
```

Never present GM and PLAYER as fantasy classes, factions, teams, or mutually exclusive identities.

---

## 9. Mandatory implementation QA

Prototype v1 FAILS this model if any of the following is true:

- signup requires `GM` or `PLAYER` as a permanent choice,
- a user needs two accounts to issue and execute work,
- navigation suggests mutually exclusive user classes,
- profile architecture cannot represent both issuer and execution history,
- the same user cannot conceptually post one QUEST and BID on another,
- `일 찾기` is treated as entry into a separate product/account rather than another available action.

Prototype v1 PASSES when a reviewer can naturally understand:

> **“카파피에서는 누구나 일을 맡길 수도 있고, 자기가 할 수 있는 다른 일을 받아서 수행할 수도 있구나.”**

---

## 10. One-sentence rule

> **One user identity. GM and PLAYER are roles created by each QUEST.**
