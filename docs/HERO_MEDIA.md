# KAPAPI Hero Media / Product-Movie Specification

Status: **current v2 hero media authority**  
Updated: **2026-09-03**

The hero movie should visually support the current transaction without baking fake generated product UI into the film.

## 1. Narrative thesis

```text
업무 등록
→ 제안 도착
→ KAPAPI 추천
→ 발주자 확정
→ 수행 / 결과
→ 결과 확인
```

The current prototype does not claim a client can always disappear immediately after submission while KAPAPI universally auto-routes everything.

---

## 2. Product behavior represented

```text
가격 + 완료시간 제안 도착
→ 필수요건 / 작업이력 / 가격 × 완료시간 확인
→ KAPAPI 추천
→ 발주자 확정
→ 작업자 배정
→ 수행
→ 결과 도착
```

Ending:

```text
결과 도착
→ 결과 보기
→ 수락 / 수정 요청
```

Long-term `work in → result out` appears only as clearly future-oriented product evolution.

---

## 3. Generated UI is disposable

If source footage contains fake product text, incorrect brand names, distorted buttons, generic dashboards or unreadable AI-generated UI, replace, cover or cut away from it.

Preferred final structure:

```text
LIVE ACTION
→ CAMERA APPROACHES LAPTOP
→ REAL KAPAPI HTML/CSS UI
   제안 → 조건 확인 → 추천 → 발주자 확정 → 결과
→ LIVE ACTION / RESULT PAYOFF
```

---

## 4. Website integration

The work-entry surface remains the strongest above-the-fold product object. Video is supporting proof.

Media must support muted, playsInline, poster, reduced-motion/static fallback, responsive crop, mobile fallback, no layout shift and primary text/input before heavy media dependency.

---

## 5. Current hero UI choreography

Canonical sequence:

```text
업무 등록
→ 제안 1 / 2 / 3 / 4건 도착
→ 조건 확인
→ 추천 준비
→ 발주자 확정
→ 결과 도착
```

Useful evidence:

- 가격
- 완료시간
- 유사 업무 완료 건수
- 정시완료율
- 수정 요청률

Do not use special role/state vocabulary, progression levels or experience points.

Do not show `작업자 배정` before `발주자 확정`.

---

## 6. Category neutrality

Hero examples must not make KAPAPI look like an Architecture/CAD service. Suggest multiple forms of bounded digital work such as PDF/data/spreadsheet, image/e-commerce, document/PPT and skilled support.

---

## 7. Human payoff

The ending should be quiet and believable. Do not use success slogans, exaggerated celebration, confetti/trophy imagery or gamified completion rewards. The result object and subtle human reaction carry the payoff.

---

## 8. Responsive / reduced motion

Desktop may use laptop compositing. Mobile may cut directly to product UI. Reduced-motion should show a strong static/poster state and preserve task-entry action, current product promise and result-oriented meaning.

---

## 9. Verification

Before approval:

- capture desktop and mobile states
- verify recommendation occurs before confirmation/assignment
- verify no generated fake readable UI is authoritative
- verify no special/game terminology appears
- verify first paint/task input does not depend on video download
- verify fallback/reduced-motion behavior
- verify the actual deployed Preview for the latest branch head when available
