# KAPAPI Hero Media / Product-Movie Specification

Status: **current v2 hero media authority**  
Updated: **2026-09-03**

The hero film is the founder's own file, used exactly as delivered: served
byte-for-byte, shown whole at its own ratio, never cropped, filtered, or drawn
over. Nothing is composited into it — not product UI, not a headline, not a
gradient. `scripts/hero-qa.mjs` asserts this against the rendered page at five
viewports, so the rule is enforced rather than remembered.

## 1. Narrative thesis

What the client experiences is three nodes:

```text
업무 입력  →  실행 계약 승인  →  카파피  →  결과  →  수락 / 수정 요청
```

Proposal competition and selection happen inside KAPAPI, so the film's job is not to narrate
a marketplace. It carries the human half of the composition while the action —
upload, describe, 맡기기 — sits beside it in real UI, not in the footage.

The prototype still does not claim escrow, completion guarantee, or that a result
is guaranteed once submitted.

---

## 2. Product behavior represented

```text
업무 요청 / 파일 → 작업 조건 정리
→ 실행 계약 승인 (결과물 · 가격 · 완료시간 · 수정 경계 · 복구 경계)
→ [KAPAPI 내부] 가격 + 완료시간 제안 도착
→ 필수요건 / 작업이력 / 가격 × 완료시간 확인
→ KAPAPI 선정
→ 작업자 배정
→ 수행
→ QA / 필요 시 계약 경계에 따른 복구
→ 결과 도착
```

The client approves the execution contract, then sees progress and the result.
Proposal comparison, selection, assignment, QA and recovery remain KAPAPI's execution mechanism.

Ending:

```text
결과 도착
→ 결과 보기
→ 수락 / 수정 요청
```

The current outcome UX follows the contract. Universal instant quotes, autonomous
execution and broad completion guarantees remain earned future capabilities.

---

## 3. Generated UI is disposable

Source footage is used as delivered. If a frame contains a generic dashboard or
unreadable on-screen UI, that is the footage's own content and it stays: covering
it would mean compositing onto the film, which is exactly what is forbidden. The
answer to unusable footage is different footage, not a patch over it.

Final structure:

```text
LEFT   오늘은 어떤 일을 끝낼까요?
       [ + | 파일을 업로드하고 간단하게 설명해 주세요. ]
       [ 맡기기 ]

RIGHT  the film, whole, 16:9, ~52% of the viewport
```

Superseded: the earlier structure composited real KAPAPI UI onto the laptop screen
inside the footage and cut full-frame. `PROTOTYPE_V2_HERO_COMPOSITING.md` records
that work and is marked superseded.

---

## 4. Website integration

The work-entry surface remains the strongest above-the-fold product object. Video is supporting proof.

Media must support muted, playsInline, autoplay, loop, a reduced-motion static
first frame, no layout shift, and the text/input being usable before the film has
loaded. It must **not** use responsive crop: `object-fit: cover` would cut the
founder's frame, so the element takes the file's own ratio and the height follows
the width. Below 860px the film moves under the action rather than being cropped
to fit beside it. Decoding stops when the hero scrolls out of view.

---

## 5. Where the transaction is shown instead

The hero no longer animates a sequence — the film plays and the action sits beside
it. The transaction is shown one section down, as three static beats built from
real request, contract and result objects:

```text
01 업무와 조건을 확인합니다  파일 · 실행 계약 · 승인
02 카파피가 실행합니다    진행 상황 · 배정 근거
03 결과가 도착합니다    결과 파일 · 검수 항목 · 도착 시각
```

Beat 02 is the only one carrying the accent colour, because it is the whole claim
of the section.

Useful evidence:

- 가격
- 완료시간
- 유사 업무 완료 건수
- 정시완료율
- 수정 요청률

Do not use special role/state vocabulary, progression levels or experience points.

The 발주자 approves the execution contract before KAPAPI procures execution.
`작업자 배정` is then shown as something KAPAPI did, together with its criteria.

---

## 6. Category neutrality

Hero examples must not make KAPAPI look like an Architecture/CAD service. Suggest multiple forms of bounded digital work such as PDF/data/spreadsheet, image/e-commerce, document/PPT and skilled support.

---

## 7. Human payoff

The ending should be quiet and believable. Do not use success slogans, exaggerated celebration, confetti/trophy imagery or gamified completion rewards. The result object and subtle human reaction carry the payoff.

---

## 8. Responsive / reduced motion

Desktop keeps the complete film beside the action; mobile stacks the complete film
below it. Reduced-motion uses a static first frame and preserves task entry, contract
approval and result-oriented meaning. No viewport uses compositing or a product-UI cut into the film.

---

## 9. Verification

Before approval:

- capture desktop and mobile states
- verify execution-contract approval precedes internal procurement and assignment
- verify the client is never asked to compare proposals or select an executor
- verify no generated fake readable UI is authoritative
- verify no special/game terminology appears
- verify first paint/task input does not depend on video download
- verify fallback/reduced-motion behavior
- verify the actual deployed Preview for the latest branch head when available
