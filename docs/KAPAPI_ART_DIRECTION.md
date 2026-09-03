# KAPAPI Prototype v2 — Art Direction

Status: **current canonical art-direction layer**  
Updated: **2026-09-03**

Product behavior follows the current canon, especially D-032 through D-034.

## 1. Visual thesis

KAPAPI should combine:

> **very easy first touch + precise, premium work-state visualization.**

The first client thought should be:

> **“여기에 내가 맡길 일을 적으면 되는구나.”**

The first worker thought should be:

> **“여기에는 내가 할 수 있는 실제 작업이 올라오는구나.”**

Product identity should come from real work moving through real states, not from fictional vocabulary or game decoration.

---

## 2. Product story the art direction must support

```text
업무 등록
→ 작업자들이 가격 + 완료시간 제안
→ 필수요건 확인
→ KAPAPI 선정
→ 작업자 배정
→ 수행
→ 결과
→ 업무 완료
```

On the 발주자 surface this is three nodes — 발주자 → 카파피 → 결과. The lines between
업무 등록 and 결과 are the middle node, visible on the 작업자 surface and `이용 방법`.

On the 작업자 surface, do not visually imply assignment before it has happened.
On the 발주자 surface, D-035 removes the confirmation step: assignment is shown
as something KAPAPI did, with its rationale available as information.

Future direction:

```text
completed transactions
→ trust data
→ better recommendation
→ routing/recovery
→ repeat capacity
→ execution layer
```

---

## 3. Public first-touch

The first viewport has one protagonist: **the work-entry action**.

```text
KAPAPI
→ 발주자 / 작업자 surface toggle
→ one-line Korean question
→ single-line work field with file attachment
→ primary `맡기기`
→ the founder's film, whole, beside it
```

Copy direction:

> **오늘은 어떤 일을 끝낼까요?**  
> 파일을 업로드하고 간단하게 설명해 주세요.

`작업 찾기` is not a secondary CTA on this surface. The 작업자 side is a route of
its own (`/board`) reached by the header toggle, so the client's first screen
carries one action.

---

## 4. Task-first distinction

Worker surfaces begin from open work:

```text
지금 열려 있는 작업
→ 전체 / 내가 할 수 있는 작업 / 오늘 마감
→ 업무 목록
→ 제안
```

The work object should be visually stronger than profile self-promotion.

---

## 5. Operational metadata only

Use real, immediately understandable work evidence:

- 가격
- 완료시간
- 제안 수
- 마감까지 남은 시간
- 관련 경력
- 유사 업무 완료 건수
- 정시완료율
- 수정 요청률
- 업무 상태

Do not use fictional role names, progression levels, experience points, game-like completion labels or decorative pseudo-lore.

---

## 6. Visual material

Public KAPAPI is primarily:

- white/off-white
- black/graphite
- cool neutral gray
- thin hairlines
- one restrained signal accent family

Dark surfaces are operational punctuation, not the global theme. Use them selectively for genuine urgent work or active operational contrast.

Avoid purple AI gradients, neon/cyberpunk, glassmorphism ecosystems, random 3D decoration and giant rounded-card walls.

---

## 7. Premium quality comes from composition

Use typography, editorial composition, whitespace, grid discipline, hairlines, realistic work artifacts, exact interaction details and restrained motion.

Avoid relying on effects to create identity.

---

## 8. Recommendation visual grammar

```text
제안 도착
→ 부적합 제안 제외 (사유와 함께)
→ 가격 × 완료시간 + 작업이력 확인
→ KAPAPI 선정
→ 배정
```

This sequence belongs to `이용 방법` and the 작업자 surface. On the 발주자 surface only
its outcome appears: 배정된 작업자 with 왜 이 작업자인가요. There is no
`이 작업자로 진행` control anywhere (D-035).

Before confirmation, label `추천`, not `배정`. Keep alternatives available. Do not use winner celebration or locked-assignment visuals.

Never use opaque “AI BEST MATCH” magic as sufficient explanation.

---

## 9. Open-work and trust examples

A good open-work object:

```text
긴급 · 마감까지 04:18:22

상세페이지 이미지 규격 정리
예상 작업대금 ₩80,000–₩120,000
완료시간 ≤ 6시간
제안 5건
```

A good worker trust block:

```text
관련 경력
유사 업무 42건
정시완료 98%
수정 요청 4%
```

No decorative level or experience meter.

---

## 10. Result grammar

```text
결과가 도착했습니다

result.zip
전달 18:42
마감 18분 전

✓ 파일 수신
✓ 요청 형식 포함

[ 결과 확인 ]  [ 수정 요청 ]
```

After acceptance: **업무 완료**.

No confetti, trophy, coin or progression animation.

---

## 11. Hero media

Current real-UI sequence:

```text
업무 등록
→ (카파피: 제안 도착 · 조건 확인 · 선정 · 배정)
→ 결과 도착
```

Generated video UI is disposable. Real HTML/CSS UI should replace or cover fake readable UI.

---

## 12. Category neutrality

Use a mixed example set:

- PDF/data/spreadsheet
- document/PPT
- image/e-commerce
- language/media
- CAD/skilled support
- small web/code fixes

Architecture/CAD may appear as a detailed founder-domain proof case below the hero.

---

## 13. Future execution layer

Future progression:

```text
MARKET
→ TRUST
→ RECOMMEND
→ ROUTE / RECOVER
→ OUTCOME
```

Potential execution resources:

`HUMAN WORKER · AI · AUTOMATION · SPECIALIST PARTNER · HYBRID`

Make it visually obvious this is earned evolution, not today's universal guarantee.

---

## 14. Landing narrative

발주자 surface (`/`):

1. task-entry hero — one question, one field, `맡기기`
2. 업무 입력 → 카파피 → 결과 as three beats of one real work item
3. one account, both roles

작업자 surface (`/board`):

1. open work with 보수, 완료시간, 마감, 제안 count, eligibility
2. price × completion time bidding

`이용 방법` carries the full mechanism, including the excluded 제안.
9. data → routing/recovery → execution layer
10. worker entry

---

## 15. Rejection conditions

Reject implementation if it reads primarily as a freelancer directory, generic AI SaaS/dashboard, developer console, gamified work app, CAD-only service or pitch-deck page.

Reject if the 발주자 surface shows a ranked comparison or any control that picks a worker, the assignment arrives with no visible criteria, price × completion time is visually weak on the surfaces that carry it, decorative progression outranks real work evidence, or future execution capability is presented as current magic.

Desired reaction:

> **“일이 먼저 올라오고, 카파피가 가격·완료시간과 실제 작업이력으로 선택을 쉽게 만들며, 거래가 쌓일수록 더 많은 실행을 맡게 되는 제품.”**

---

## 실행 계약의 시각 처리 (D-033.1)

발주자가 승인하는 대상은 작업자가 아니라 **실행 계약**입니다. 계약면은 다음을 담습니다:

```text
결과물 · 가격 · 완료시간 · 수정 경계 · 완료되지 않을 때의 처리
+ 이 가격이 무엇을 근거로 나왔는지
```

계약면에 작업자는 등장하지 않습니다. 가격과 완료시간은 그 화면에서 가장 큰 값이어야
하고, 근거 문장은 그보다 작게 붙습니다 — 금액을 크게 쓰되 어디서 나왔는지 숨기지 않는
것이 이 화면의 신뢰를 만듭니다.

강조색은 계약면 하나에만 씁니다. 발주자가 한 번 행동하는 지점이기 때문입니다.
