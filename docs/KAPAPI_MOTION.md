# KAPAPI Motion System

Status: **canonical motion specification for the current prototype**  
Updated: **2026-09-03**

KAPAPI motion exists to explain work moving through a system.

> **The product should feel alive because real work changes state, not because the website performs tricks.**

## 1. Motion goals

Every meaningful animation should do at least one of:

1. explain a real product state change
2. make market activity legible
3. clarify recommendation/confirmation
4. preserve object continuity
5. communicate work moving toward a result
6. add tactile quality without competing with the work

Motion character: precise, low-amplitude, mechanical rather than bouncy, state-driven, fast but calm and mostly still at rest.

---

## 2. Core principles

### State before spectacle

Animate because something happened:

- 업무 등록
- 제안 도착
- 필수요건 확인
- 작업자 배정
- 작업 시작
- 결과 전달
- 결과 수락/수정
- 업무 완료

The 발주자 sees 업무 등록, 작업자 배정, 결과 전달 and the two acceptance states. The
rest are the middle node.

### Object continuity

Preserve continuity for work card → detail, proposal row → recommendation row, recommendation → confirmed/assigned state and result object → result detail.

### Small amplitude

Prefer opacity, 4–10px translation, border/background/state changes, layout reflow and restrained numeric interpolation.

Avoid theatrical scale, 3D rotation, bounce and depth tricks.

### One focal motion at a time

Do not run hero video, multiple pulsing cards, countdowns and decorative effects all at once.

---

## 3. Timing system

| Token | Target | Use |
| --- | ---: | --- |
| `MOTION_MICRO` | 140ms | hover, press, focus |
| `MOTION_STATE` | 220ms | status/selection state |
| `MOTION_LAYOUT` | 260ms | list/reorder/reflow |
| `MOTION_MAJOR` | 340ms | object/detail transitions |
| `MOTION_NARRATIVE` | 560ms | one hero/story beat |

Primary ease: `cubic-bezier(0.4, 0, 0.2, 1)`

---

## 4. Signature motions

### MOTION-A — Proposal arrival

```text
새 제안 도착
→ row enters
→ 가격 / 완료시간 resolve
→ 작업이력 becomes readable
→ list settles
```

No pop/bounce/glow burst.

### MOTION-B — Eligibility filter

```text
제안 목록
→ 기술/보안/마감/예산 checks
→ 부적합 rows reduce emphasis
→ eligible set remains
```

Filtering should feel inspectable, not magical.

### MOTION-C — Recommendation ready

```text
eligible proposals
→ evidence resolves
→ one row gains 추천 state
→ rationale appears
→ confirmation action becomes available
```

Do not show assigned state yet.

### MOTION-D — Assignment

D-035 removed the client-confirmation beat. The transition is KAPAPI's, and the
발주자 is told it happened.

```text
접수됨
→ (카파피: 제안 · 조건 확인 · 선정)
→ 배정된 작업자 + 왜 이 작업자인가요
→ 작업 시작
```

Nothing here waits on a click. Motion should read as a state arriving, not as a
control resolving.

No confetti or winner effect.

### MOTION-E — Urgent deadline

Use real time itself:

- actual countdown changes
- one restrained threshold escalation
- compact urgency accent

Never use constant flashing, shaking or fake urgency.

### MOTION-F — Work progress

Canonical observable stages:

```text
배정 완료
→ 작업 시작
→ 작업 중
→ 결과 전달
→ 발주자 검토
→ 업무 완료
```

Support blocked, late/risk, revision requested and cancelled/failed.

**No fake percentage for human work.**

### MOTION-G — Completion

```text
결과 도착
→ result file appears
→ delivery time resolves
→ objective checks resolve
→ 발주자 accepts
→ 업무 완료
→ real work-history metrics may update
```

Never invent checks the system did not perform. No confetti, coins, trophies or experience animation.

### MOTION-H — Object morph

Use when spatial continuity helps: work card → work detail, worker row → profile/detail, result object → result focus.

### MOTION-I — Hero transaction

```text
업무 등록
→ (카파피: 제안 도착 · 조건 확인 · 선정 · 배정)
→ 결과 도착
```

선정 and 배정 are one state. There is no confirmation beat between them (D-035).

### MOTION-J — Outcome evolution

Future-direction narrative:

```text
업무 완료
→ DATA
→ TRUST
→ RECOMMENDATION
→ ROUTING / RECOVERY
→ HUMAN + AI + AUTOMATION + PARTNER
→ RESULT
```

Keep it restrained and clearly future-oriented.

---

## 5. Scroll / landing motion

Do not use generic fade-up on every section. Scroll motion is acceptable only where it reveals a meaningful product sequence or object relationship.

---

## 6. Numeric motion

Numeric interpolation is useful for real changing values such as:

- countdown
- proposal count
- price/completion-time comparisons
- on-time rate
- similar-work completion count

Do not animate static numbers for decoration.

---

## 7. Reduced motion

With `prefers-reduced-motion`:

- show settled final states
- do not hide necessary comprehension inside cinematic sequences
- preserve all labels/actions
- preserve recommendation evidence
- use poster/static hero fallback where appropriate

---

## 8. Mobile motion

Prefer shorter, clearer transitions and direct full-frame product states. Touch feedback should use subtle state changes, not scale bounce.

---

## 9. Performance

Favor transform/opacity/layout techniques that do not damage first interaction. Hero media must not block primary work-entry rendering.

---

## 10. Rejection conditions

Reject motion if it implies the 발주자 has a decision to make, uses celebration to fake satisfaction, creates fake progress certainty, distracts from price × completion time or result proof, looks excessively gamified, or moves merely because a section entered the viewport.

Desired feeling:

> **the work is moving, and the interface is calmly showing what changed.**


## 실행 계약 (D-033.1)

발주자가 승인하는 것은 작업자가 아니라 **실행 계약**입니다.

```text
업무 요청 (파일 + 한 줄)
→ 카파피가 작업 조건(SOW) 정리
→ 실행 계약: 결과물 + 가격 + 완료시간 + 수정 경계 + 복구 경계
→ 발주자 승인
→ (카파피: 제안 · 필수요건 확인 · 선정 · 배정 · 수행)
→ 결과 → 수락 / 수정 요청
```

발주자 기준으로는 세 노드입니다 — **발주자 → 카파피 → 결과**. 가격은 해당 유형에 실제로
들어온 제안에서 산출하고 그 근거를 함께 표시합니다(D-033.6: instant quote is earned).
