# KAPAPI Motion System

Status: **canonical motion specification for the current prototype**  
Updated: **2026-09-03**

KAPAPI motion exists to explain work moving through a system.

> **The product should feel alive because real work changes state, not because the website performs tricks.**

## 1. Motion goals

Every meaningful animation should do at least one of:

1. explain a real product state change
2. make market activity legible
3. clarify execution-contract approval and KAPAPI's internal assignment
4. preserve object continuity
5. communicate work moving toward a result
6. add tactile quality without competing with the work

Motion character: precise, low-amplitude, mechanical rather than bouncy, state-driven, fast but calm and mostly still at rest.

---

## 2. Core principles

### State before spectacle

Animate because something happened:

- 업무 요청
- 실행 계약 승인
- 제안 도착
- 필수요건 확인
- 작업자 배정
- 작업 시작
- 결과 전달
- 결과 수락/수정
- 업무 완료

The 발주자 sees 업무 요청, 실행 계약 승인, 진행 상황, 결과 전달 and 수락 / 수정 요청.
Proposal competition, selection, assignment, QA and recovery happen inside KAPAPI;
assignment details may be disclosed as information.

### Object continuity

Preserve continuity for request → execution contract → progress, internal proposal row → selection → assignment, and result object → result detail.

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

### MOTION-C — Internal selection

```text
eligible proposals
→ evidence resolves
→ one row gains KAPAPI 선정 state
→ rationale appears
→ assignment is recorded
```

Show this sequence only in internal procurement or the mechanism explainer. The
client has already approved the execution contract; no worker-selection action appears.

### MOTION-D — Assignment

After execution-contract approval, KAPAPI selects and assigns execution. The
발주자 is told it happened.

```text
실행 계약 승인됨
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
업무 요청 (파일 + 한 줄)
→ 실행 계약 승인 (결과물 · 가격 · 완료시간 · 수정 경계 · 복구 경계)
→ (카파피: 제안 도착 · 조건 확인 · 선정 · 배정)
→ 결과 도착
```

The selection-to-assignment transition is internal. Execution-contract approval
precedes procurement; result acceptance/revision follows delivery (D-033.1, D-035).

### MOTION-J — Outcome evolution

Future internal-capability narrative:

```text
업무 완료
→ DATA
→ TRUST
→ RECOMMENDATION
→ ROUTING / RECOVERY
→ HUMAN + AI + AUTOMATION + PARTNER
→ RESULT
```

Keep capability improvements clearly future-oriented. The client continues to
approve the execution contract and accept or request revision of the result.

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
- preserve contract terms and assignment evidence
- use poster/static hero fallback where appropriate

---

## 8. Mobile motion

Prefer shorter, clearer transitions and direct full-frame product states. Touch feedback should use subtle state changes, not scale bounce.

---

## 9. Performance

Favor transform/opacity/layout techniques that do not damage first interaction. Hero media must not block primary work-entry rendering.

---

## 10. Rejection conditions

Reject motion if it asks the 발주자 to select a worker, skips execution-contract approval or result acceptance, uses celebration to fake satisfaction, creates fake progress certainty, distracts from price × completion time or result proof, looks excessively gamified, or moves merely because a section entered the viewport.

Desired feeling:

> **the work is moving, and the interface is calmly showing what changed.**
