# Prototype v2 — Visual-First Communication Rules

Status: **mandatory for `feat/prototype-v2`**  
Updated: **2026-09-03**

KAPAPI v2 must follow one core rule:

> **If the product can show it, do not explain it in a paragraph.**

The public landing page is not a strategy memo, product-spec page, pitch deck or documentation site.

## 1. Visual proof before prose

For every public section, ask in this order:

1. Can the idea be understood through a real product state?
2. Can motion/transition show it?
3. Can one strong product artifact carry it?
4. Can short labels/captions finish the explanation?
5. Only then use a short supporting sentence.

Paragraphs are the last resort.

---

## 2. Public copy budget

Default per section:

- one short headline
- 0–1 short supporting sentence by default
- product UI / media / files / data for the rest

Reject:

`headline → paragraph → paragraph → numbered explanation columns → more paragraph`

If a section needs that structure, redesign the visual.

---

## 3. Show the current KAPAPI transaction truthfully

Current prototype behavior under D-035. What the 발주자 sees is three nodes:

```text
[발주자: 파일 + 한 줄 설명]
          ↓
[      카파피      ]
          ↓
[     결과 도착     ]
          ↓
[   수락 / 수정 요청  ]
```

Inside the middle node, and visible on the 작업자 surface and `이용 방법`:

```text
[업무 등록] → [작업자들이 PRICE × DELIVERY 입찰]
           → [자격·마감·예산·보안 미충족 제외]
           → [KAPAPI 선정] → [작업자 배정] → [수행]
```

Use product UI, files, timing, states and motion so this can be understood without
a long explanation.

Do **not** put the bid list, a ranked comparison, or a selection control on the
발주자 surface. There is no confirmation bridge to visualize — 선정 and 배정 are one
state, and the client is shown the result of it with its criteria attached.

---

## 4. Demonstrate KAPAPI's present differentiation

The differentiation is that the 발주자 never chooses a worker, and that this is
still inspectable rather than opaque.

Show:

- work exists first, not a 작업자 storefront;
- 작업자 compete with PRICE + DELIVERY;
- KAPAPI removes invalid/ineligible options and says which condition each missed;
- task-specific trust and work history decide, not the lowest price;
- KAPAPI selects, and the criteria stay on the record;
- the 발주자 does nothing between uploading and receiving;
- acceptance and the revision request remain the client's;
- the result closes the 업무 and creates better future data.

The selection surface should carry no decision burden at all on the client side.

---

## 5. Demonstrate the evolution visually

The long-term Outcome Layer is important, but it is future evolution.

Preferred visual progression:

```text
업무 완료
→ PRICE / DELIVERY / fit / on-time / revision data
→ stronger task-specific trust
→ better recommendation
→ default routing
→ replacement/recovery
→ repeat capacity
→ WORK IN → RESULT OUT
```

If execution resources are shown, the mature layer may include:

- HUMAN WORKER
- AI
- AUTOMATION
- SPECIALIST PARTNER
- HYBRID

Do not depict universal autonomous routing or SLA guarantees as current production behavior.

---

## 6. World-building is visual grammar

Use real state objects:

- `업무 #0182`
- `제안 4건`
- `가격`
- `완료시간`
- `긴급 업무`
- `작업자 배정`
- `결과 도착`
- `업무 완료`

Korean labels are set in the sans face without letter-spacing. The mono treatment
was designed for latin small-caps and splits Hangul into detached glyphs.

Do not write essays explaining the world.

Do not invent pseudo-lore that has no product meaning.

---

## 7. Use believable work artifacts

Prefer:

- uploaded PDF/DWG/images/spreadsheets
- result ZIP/PDF/DWG/XLSX
- 제안 가격 + 완료시간
- deadline timestamps
- task-specific history
- on-time/revision evidence
- recommendation rationale
- status transitions
- result checks
- video footage

The page should feel like a product in use, not a brochure about a future product.

---

## 8. Task-first supply proof

The 작업자 side is part of the product thesis, not a hidden implementation detail. D-035 moved the market off the client's screen, not out of the product.

Show that a 작업자 can:

```text
작업 찾기
→ open 업무
→ 내가 할 수 있는 작업
→ inspect scope/deadline
→ 제안: 가격 + 완료시간
```

Do not require a storefront-building visual before the earning opportunity exists.

---

## 9. Reference-site lesson

When studying strong global and Korean references, identify what they communicate through:

- scale
- product visuals
- imagery/video
- visual hierarchy
- progressive disclosure
- interaction
- concise labels

Do not extract only headings and rebuild them as prose-heavy sections.

---

## 10. Mandatory deletion pass

After implementing each landing section, temporarily remove supporting prose and ask:

- Is the main idea still understandable?
- Does one dominant visual artifact carry it?
- Can a short caption replace the paragraph?

If meaning collapses, improve the visual before restoring copy.

---

## 11. Rejection conditions

Reject a public section if:

- more than half its meaning is carried by prose;
- the product UI is secondary to explanation;
- it looks like documentation or a pitch-deck slide;
- it needs a numbered paragraph grid to feel complete;
- recommendation and assignment are visually indistinguishable;
- it implies day-one universal auto-routing;
- CAD/construction dominates category perception;
- the 작업자 supply path is reduced to generic seller/profile marketing.

---

## 12. Final visual communication QA

For each major section, answer YES to:

- Can the main idea be understood in 2–3 seconds?
- Is there one dominant product/media object?
- Does the actual UI demonstrate the claim?
- Is current behavior clearly distinguished from future evolution?
- Is the 발주자 surface free of any control that picks a worker?
- Is copy supporting rather than replacing the visual?
- Does the section feel like a premium product rather than documentation?

One-line rule:

> **Show the work moving. Let text label what the eye already understands.**


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
