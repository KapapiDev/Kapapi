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
발주자  →  카파피  →  결과
```

입찰 and 선정 happen inside the middle node, so the film's job is not to narrate
a marketplace. It carries the human half of the composition while the action —
upload, describe, 맡기기 — sits beside it in real UI, not in the footage.

The prototype still does not claim escrow, completion guarantee, or that a result
is guaranteed once submitted.

---

## 2. Product behavior represented

```text
가격 + 완료시간 제안 도착
→ 필수요건 / 작업이력 / 가격 × 완료시간 확인
→ KAPAPI 선정
→ 작업자 배정
→ 수행
→ 결과 도착
```

The client sees none of the first four lines as steps. They are the middle node.

Ending:

```text
결과 도착
→ 결과 보기
→ 수락 / 수정 요청
```

Long-term `work in → result out` appears only as clearly future-oriented product evolution.

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
real `route()` output:

```text
01 업무를 올립니다     파일 · 마감 · 원하는 가격
02 카파피가 배정합니다  선정된 작업자 · 선정 근거      ← the step the client does not do
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

There is no `발주자 확정` step (D-035). On the 발주자 surface, `작업자 배정` is shown
as something KAPAPI did, together with the criteria that produced it.

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
