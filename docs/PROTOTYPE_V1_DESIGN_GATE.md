# Prototype v1 — Pre-Code Design Gate

Status: **implementation record for `feat/prototype-v1`**
Produced: 2026-09-02
Required by: `CLAUDE_HANDOFF.md` mandatory pre-code design gate, `TASK_QUEUE.md` KAP-020

This file records the text-only design decisions made before implementation began.

---

# A. Three hero information structures

## H1 — "The Desk" · centered single-column work entry

```text
nav: KAPAPI  ·  일 맡기기  ·  일 찾기  ·  내 QUEST  ·  프로필

                    할 일을 던져주세요.
          전문가들이 가격과 완료시간을 제안하고,
      카파피가 가장 적합한 작업자를 자동으로 배정합니다.

   ┌───────────────────────────────────────────────┐
   │  맡길 일을 적어주세요…                          │
   │  [ 파일 첨부 ]                    [ 일 맡기기 → ]│
   └───────────────────────────────────────────────┘
     예시 chips: 손그림 도면 CAD 정리 / 상세페이지 이미지 / PPT 정리

   일 등록 → KAPAPI 자동 배정 → 작업 → 결과 확인
   일하러 오셨나요?  일 찾기 →

   (hero film moves below the fold)
```

Maximum first-touch simplicity. Also the closest composition to the Upwork benchmark,
which is exactly the clone risk `KAPAPI_ART_DIRECTION.md` section 15 rejects.

## H2 — "Hand-off / Machine" · asymmetric editorial split

```text
LEFT  (~58%)                          RIGHT (~42%)
KAPAPI wordmark + QUEST NETWORK       one product-proof frame:
할 일을 던져주세요.                      hero film plays (GM submits, leaves)
plain-language promise                       ↓ cross-fade in the same frame
[ work-entry surface        ]         real KAPAPI HTML/CSS transaction sequence
[ 파일 첨부 ]   [ 일 맡기기 → ]          WORK SUBMITTED → BIDS RECEIVED
example chips                          → ROUTING → PLAYER ASSIGNED
일 등록 → 자동 배정 → 작업 → 결과 확인    → WORK STARTED → RESULT READY
일하러 오셨나요? 일 찾기 →
```

The left column owns the action; the right column is *evidence that the middle disappears*.
The film and the real product UI occupy **one** frame, so media never becomes a second protagonist.
Mobile stacks in the canon priority order (promise → input → attach → CTA → process → media → 일 찾기).

## H3 — "Full-bleed film with floating entry card"

Video as a full-width background band with the entry surface floating on top.
Dramatic, but the media dominates the input, contrast over moving footage is fragile,
and the composition is a generic startup hero.

---

# B. Scoring

| Criterion | H1 | H2 | H3 |
| --- | ---: | ---: | ---: |
| 3-second comprehension | 10 | 9 | 6 |
| Primary-action clarity | 10 | 9 | 6 |
| Product differentiation | 5 | 9 | 6 |
| World-building potential | 4 | 9 | 5 |
| Premium visual potential | 6 | 9 | 7 |
| Mobile clarity | 9 | 9 | 5 |
| Universal-user compatibility | 8 | 9 | 7 |
| Distance from Upwork composition (10 = safest) | 4 | 9 | 6 |
| **Total (of 80)** | **56** | **72** | **48** |

**Chosen: H2**, with H1's example chips absorbed (the Upwork reference is right that
category examples reduce blank-page anxiety — the mechanic is adopted, the layout is not).

Discipline applied to H2 so the film cannot compete:

- the entry surface is the only object carrying the sapphire signal above the fold,
- the film is muted, poster-first, and never larger than the entry surface's optical weight,
- the right frame carries **no** dashboard density — one state line at a time,
- text and input paint before the video byte is fetched.

---

# C. World-building map

Pattern everywhere: `plain language → product state → KAPAPI term`, at the intensity each surface can carry.

| Surface | Plain-language layer | KAPAPI layer | Intensity | Visual state language | Motion role |
| --- | --- | --- | --- | --- | --- |
| **Landing / first touch** | 할 일을 던져주세요 · 일 맡기기 · 결과 확인 | `QUEST NETWORK`, one `QUEST #0182` inside the proof frame | **LOW ~20%** | paper white, hairlines, graphite type, sapphire only on CTA/focus | one hero sequence; page otherwise still |
| **Scope confirmation** | 이렇게 정리했습니다 · 확인 후 맡기기 | `QUEST DRAFT`, `SOW`, `NDA ON` | **LOW** | white sheet, ruled rows, missing info marked amber not red | rows resolve once, no theatre |
| **Hands-off confirmation** | 맡겼습니다. 이제 하시던 일 하세요. | `QUEST #0182 CREATED` | LOW→MED | localized sapphire confirmation ~0.28s | one confirmation pulse, then stillness |
| **GM orchestration** | 입찰 7건이 도착했습니다 · 작업자를 배정했습니다 | `7 BIDS RECEIVED`, `ROUTING`, `PLAYER ASSIGNED` | **MED ~40%** | dark operational panel for the routing moment only | BID arrival reflow, routing scan, assignment lock |
| **QUEST Board** | 지금 열린 일 · 보수 · 마감 | `QUEST BOARD`, `REWARD`, `TIME ATTACK`, `BIDS 05` | **STRONG ~70%** | light board, dark TIME ATTACK chip, mono metadata | hover and focus only; countdown ticks |
| **QUEST detail / BID** | 얼마에, 언제까지 하시겠어요? | `BID`, `PRICE × DELIVERY`, `REWARD` | STRONG | paired price/delivery fields, live summary line | value settles on input |
| **Profile** | 관련 경력 · 유사 작업 이력 | `LV.12`, `+240 EXP`, `QUESTS COMPLETE 42` | STRONG but subordinate | career block is the largest type on the page; LEVEL is a hairline chip | numbers interpolate on first paint only |
| **Workroom** | 작업 진행 상황 | `ASSIGNED → WORK STARTED → IN PROGRESS → FILE DELIVERED → GM REVIEW → COMPLETE` | MED | dark operational timeline, timestamps, no percentages | one step resolves at a time |
| **Result / acceptance** | 작업이 완료되었습니다 · 결과 확인 / 수정 요청 | `QUEST COMPLETE`, `18 MIN EARLY` | **LOW ~10%** | back to bright paper; the file object is the largest thing on screen | checks stagger ~80ms, then stop |

Rule enforced everywhere: **the Korean sentence is readable first, the KAPAPI term sits beside it as mono metadata.**

---

# D. Role model map

One universal identity. Role is derived from the current user's relationship to each QUEST.

| Surface | Current user's QUEST relationship | Role in that context | Role visible in copy? | Permanent-account risk |
| --- | --- | --- | --- | --- |
| Landing | none yet | neutral KAPAPI user | no | none — `일 맡기기` and `일 찾기` are two actions, not two doors |
| Navigation | none | neutral | no | action-oriented IA; no MODE switch |
| Scope confirmation | about to issue | becoming GM for this QUEST | implicit | none |
| Orchestration / Workroom (issued) | issuer | **GM for that QUEST** | yes, scoped to the QUEST | labelled per QUEST, never per account |
| QUEST Board | eligible participant | prospective PLAYER | soft | eligibility gate is per QUEST, shown as 참여 가능 / 자격 미충족 |
| QUEST detail / BID | bidder | **PLAYER for that QUEST** | yes, scoped | none |
| 내 QUEST | mixed | GM on some rows, PLAYER on others, **simultaneously** | yes, as a per-row chip | this surface is the proof: one list, two role chips |
| Profile | self | both reputation domains on one page | yes, as two labelled sections | reputation is split, identity is not |
| Result | issuer | GM judging the result | yes | after `QUEST COMPLETE` the chip disappears; the user returns to neutral |

Confirmed absent from the implementation:

- no permanent GM account or PLAYER account,
- no signup role fork, no onboarding role gate,
- no `GM MODE / PLAYER MODE` switch,
- no second account for supply-side participation,
- qualification restrictions are per-QUEST eligibility, never identity.

The demo user is deliberately **GM on one QUEST and PLAYER on two others at the same time**,
and 내 QUEST shows all of them in a single list.

---

# E. Upwork-clone check

| Upwork property | KAPAPI decision |
| --- | --- |
| Centered hero, headline over a single search-like input | rejected — asymmetric editorial split |
| `I want to hire / I want to work` role fork | **rejected outright** — violates the universal-identity rule |
| Talent search and freelancer cards | rejected — no person-browsing surface exists |
| Client compares proposals and picks | rejected — KAPAPI routes; no GM selection control exists |
| Green brand, rounded card grid, testimonial and logo walls | rejected — paper, graphite, hairlines, one sapphire signal |
| Category examples that lower blank-page anxiety | **adopted as a mechanic**, in KAPAPI's own form |
| Light-theme trust, one dominant first action, short copy | **adopted as behaviour** |

Formula: *Upwork-like ease at the door, KAPAPI's work-world once the task starts,
universal identity underneath, Vercel/Linear precision where files, money and deadlines become real.*

---

# F. Stack decision

- **Next.js App Router + TypeScript** — canon-preferred.
- **Hand-written CSS token system + CSS Modules.** Tailwind was considered and rejected:
  canon requires that the visual identity not come from a utility framework's defaults,
  and the editorial/hairline/asymmetric language is cheaper to express in real CSS than to
  fight out of utility classes. This also removes any recognisable stock-theme smell.
- **`motion/react`** for presence, layout continuity and state transitions.
- **`@number-flow/react`** for PRICE, BID count and EXP only.
- **Typed deterministic fixtures plus a pure routing function.** No database, no auth, no payment.
