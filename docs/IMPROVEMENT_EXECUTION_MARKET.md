# KAPAPI 개선안 — 실시간 업무 실행 시장

Status: **PROMOTED / integrated into current canon**  
Branch: imported to `feat/prototype-v2` on 2026-09-03  
Updated: 2026-09-03

This file was the original alternative proposal that challenged the previous recommendation-first KAPAPI flow. Restated in D-034 vocabulary on import; the substance is unchanged.

The proposal has now been **accepted as the stronger product direction** and incorporated into the canonical documents on this branch.

Current authority:

1. `docs/DECISIONS.md` — D-033.1–.12, D-034, D-035
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

> **작업자에게는 일이 먼저 보이는 시장, 발주자에게는 사람을 고르지 않아도 되는 실행 서비스.**

발주자 대상 North Star:

> **해야 할 일을 넣으면, 결과가 나온다.**

Canonical product split:

```text
발주자
work request
→ structured SOW
→ 실행 계약: 결과물 + 가격 + 완료시간 + 수정 경계 + 복구 경계
→ approve
→ KAPAPI orchestrates
→ result
→ accept / revise

작업자
업무
→ PRICE + DELIVERY 제안 / Offer
→ execute
→ 작업대금

KAPAPI INTERNAL
human / AI / automation / partner procurement
→ routing / QA / recovery
```

The original proposal is no longer an alternative branch thesis. It is now historical design rationale for D-033.
