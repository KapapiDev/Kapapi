# KAPAPI 개선안 — 실시간 업무 실행 시장

Status: **PROMOTED / integrated into current canon**  
Branch: `개선안`  
Updated: 2026-09-03

This file was the original alternative proposal that challenged the previous recommendation-first KAPAPI flow.

The proposal has now been **accepted as the stronger product direction** and incorporated into the canonical documents on this branch.

Current authority:

1. `docs/DECISIONS.md` — D-033
2. `docs/PRODUCT.md`
3. `docs/ROADMAP.md`
4. `docs/VALIDATION.md`
5. `docs/PROTOTYPE_SPEC.md`
6. `docs/PROGRAM_2026_MODU.md`
7. `docs/LEGAL.md`
8. `TASK_QUEUE.md`

The complete original 728-line proposal remains available in Git history at commit:

`d713a0f233df7b4bba30f5e565508fc59adc1d71`

## Promoted thesis

> **PLAYER에게는 일이 먼저 보이는 시장, GM에게는 사람을 고르지 않아도 되는 실행 서비스.**

GM-facing North Star:

> **해야 할 일을 넣으면, 결과가 나온다.**

Canonical product split:

```text
GM
work request
→ structured SOW
→ RESULT + PRICE + COMPLETION TIME
→ approve
→ KAPAPI orchestrates
→ result

PLAYER
QUEST
→ PRICE + DELIVERY BID / Offer
→ execute
→ REWARD

KAPAPI INTERNAL
human / AI / automation / partner procurement
→ routing / QA / recovery
```

The original proposal is no longer an alternative branch thesis. It is now historical design rationale for D-033.
