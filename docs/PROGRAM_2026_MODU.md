# 2026 모두의 창업 프로젝트 — KAPAPI Strategy

Updated: 2026-09-03

## 1. Application strategy

Do not present KAPAPI as:

- a finished marketplace;
- a CAD/construction service;
- a Korean Upwork/Kmong clone;
- a magical AI outsourcing product;
- a universal SLA service.

The strongest application story combines the **real founder-origin problem** with the **stronger GM-side product model**.

### Founder-origin story

> 퇴근 후 남는 시간에 내가 할 수 있는 작은 온라인 업무를 골라 끝내고 돈 벌고 싶었다. 하지만 기존 선택지는 고정 알바, 장기 프리랜서 활동, 또는 내가 먼저 서비스 상품을 만들어 판매하는 방식에 가까웠다.

That creates a task-first PLAYER market:

```text
work exists first
→ PLAYER chooses suitable QUEST
→ PLAYER commits PRICE + DELIVERY TIME
→ executes
→ REWARD + verified history
```

The mirrored GM problem is:

> 회사나 개인에게는 누군가 끝내야 하지만, 사람을 찾고 비교하고 설명하고 관리하기에는 너무 작거나 불규칙한 일이 계속 생긴다.

The product insight is the bridge between them:

> **PLAYER에게는 일이 먼저 보이는 시장을 만들되, GM에게는 그 시장을 직접 쇼핑하게 하지 않는다.**

---

## 2. What KAPAPI is

Primary definition:

> **카파피는 작은 디지털 업무를 입력하면 작업 조건을 구조화하고 가격과 완료시각을 제시한 뒤, 내부의 사람·AI·자동화를 조달해 결과까지 전달하는 업무 실행 시장입니다.**

Short version:

> **해야 할 일을 넣으면, 결과가 나온다.**

PLAYER-side explanation:

> **할 수 있는 일을 골라서, 끝내고, 돈 번다.**

KAPAPI therefore has two deliberately different experiences:

```text
GM
업무 입력 → 결과/가격/완료시각 확인 → 맡기기 → 결과

PLAYER
QUEST 확인 → PRICE + DELIVERY 제안/수락 → 실행 → 보상
```

The marketplace remains inside the engine. The GM buys completed-work conditions rather than a freelancer-search experience.

---

## 3. Differentiation story

Do **not** describe the differentiation as merely “the marketplace is reversed.”

Explain it as responsibility transfer:

### Existing marketplace-style behavior

```text
customer posts work
→ compares people/proposals
→ chooses provider
→ coordinates
→ if failure occurs, searches again
```

### KAPAPI

```text
customer submits work
→ KAPAPI structures an Execution Contract
→ customer sees RESULT + PRICE + COMPLETION TIME
→ KAPAPI procures/routs execution internally
→ KAPAPI handles defined recovery
→ result
```

The core differentiated mechanisms are:

1. **Task-first PLAYER supply** — work exists before the seller storefront.
2. **PRICE × DELIVERY** — fragmented availability and urgency become internal procurement data.
3. **Execution Contract** — GM buys a defined result/price/time boundary.
4. **Selection removal** — GM normally does not compare several PLAYERs.
5. **Recovery responsibility** — a failed executor should not force the GM back into supplier search.
6. **Resource-neutral execution** — human PLAYER, AI, automation and partners can be combined.
7. **Execution data flywheel** — completed transactions improve scope, quote, routing and recovery.

---

## 4. Initial market wedge

Do not pitch the initial market as “all simple tasks.”

That creates an obvious AI-substitution objection and can imply weak transaction economics.

Preferred framing:

> **AI에게 그대로 맡기기엔 불안하고, 사람을 직접 찾아 계약하기엔 작은, 범위와 검수가 가능한 디지털 업무.**

Examples should be expressed as **completed outcomes**, not generic labor:

- several PDFs → specified fields → checked XLSX;
- messy spreadsheet → defined merge/cleanup rules → verified workbook;
- PPT/report → specified house style → finished deliverable;
- product/content batch → explicit rules → completed normalized output;
- source material → predefined research/evidence table → source-linked result;
- defined CAD/drawing production support under clear responsibility;
- small code/web fix with reproducible acceptance criteria.

Do not lead with ultra-cheap mechanical data entry, broad consulting, full creative branding or regulated professional judgment.

---

## 5. Why the founder story still fits

The stronger GM experience does not erase the original insight.

The founder problem creates the **supply-side bootstrap**:

> people have fragmented spare time and useful skills but do not necessarily want to become full-time freelancers.

The GM problem creates the **demand-side transaction**:

> businesses and individuals have bounded unresolved work that is not worth a full hiring/procurement process.

KAPAPI's innovation is:

> **make supply behave like a task market while making demand feel like buying an outcome.**

This is stronger than retrofitting an unrelated enterprise story onto the founder problem.

---

## 6. 1R prototype target

The prototype should demonstrate the new canonical flow honestly.

### GM demo

```text
1. 업무 입력 + 파일 첨부
2. KAPAPI가 SOW/결과 조건 구조화
3. RESULT + PRICE + COMPLETION TIME 제시
4. `이 조건으로 맡기기`
5. 내부 실행 상태
6. 결과 전달
7. 승인 / 수정
```

The prototype may use deterministic/mock quotes and manual/concierge execution behind the scenes. It must clearly avoid claiming production instant pricing or universal automatic execution.

### PLAYER demo

```text
1. 작업 찾기
2. 실제 QUEST 확인
3. PRICE + DELIVERY BID 또는 Offer 수락
4. 실행/제출
5. REWARD + task-specific history
```

### Internal-engine proof

Show concisely that KAPAPI may choose among:

- PLAYER A/B/C;
- AI/automation;
- hybrid execution;
- backup/recovery.

The user-facing story remains outcome-first.

---

## 7. What the prototype must visibly communicate

- work, not seller profile, is the PLAYER-side primary object;
- GM does not need to choose a PLAYER in the default flow;
- KAPAPI offers a defined result + price + completion time;
- PRICE × DELIVERY remains an internal market signal;
- KAPAPI can route to human/AI/automation resources;
- failure recovery is part of the product thesis;
- current automation is intentionally limited and may be concierge/manual;
- Architecture/CAD is one founder-domain proof case only;
- the initial wedge excludes high-risk/subjective/unbounded work;
- the long-term moat is execution data, not a prettier freelancer directory.

---

## 8. Validation plan before submission / next round

### Experiment A — worker-selection removal

Compare:

- multiple PLAYER/BID choice;
- one KAPAPI execution offer.

Measure:

- request → commitment conversion;
- decision time;
- management time;
- trust objections;
- completion/acceptance;
- willingness to pay;
- repeat intent.

### Experiment B — paid external outcome

Strongest evidence:

> **external GM + own money + no PLAYER shopping + accepted result.**

Stronger:

> **same GM returns with another self-funded task.**

### Experiment C — supply

Use real/founder-funded QUESTs where helpful to test:

- qualified PLAYER acquisition;
- PRICE × DELIVERY distribution;
- response speed;
- completion/revision;
- repeat PLAYER behavior.

Founder-funded tasks validate supply/execution, not external GM demand.

### Experiment D — unit economics

Track:

```text
GM revenue
- execution cost
- payment cost
- QA/support
- revision/recovery
= completed-outcome contribution
```

This is a more important early metric than gross transaction volume.

---

## 9. 1R framing priority

Recommended presentation order:

1. **Personal founder problem** — wanted small online work to pick up after work.
2. **Mirrored GM problem** — small unresolved work is costly to delegate through full freelancer/vendor search.
3. **Market insight** — task-first supply can meet that work.
4. **Key product leap** — do not make the GM shop the market.
5. **Execution Contract** — result + price + completion time.
6. **Internal PRICE × DELIVERY market** — people still competitively supply the work.
7. **Recovery** — KAPAPI owns re-routing instead of returning the problem to the GM.
8. **AI/automation leverage** — technology can reduce execution cost where appropriate.
9. **Validation** — prove preference, real payment, positive outcome economics and repeat.
10. **Expansion** — category by category toward work execution infrastructure.

---

## 10. What not to say

Avoid leading with:

- “건설업 외주 플랫폼”;
- “CAD 매칭 서비스”;
- “온라인 전문 부업 플랫폼” alone;
- “게임처럼 일하는 플랫폼” alone;
- “한국형 Upwork”;
- “크몽을 뒤집은 서비스”;
- “AI가 알아서 모든 일을 해결”;
- “모든 업무를 즉시 견적”;
- universal SLA/outcome guarantees.

Game/world terminology is a memorable secondary UX layer after the real business is understood.

---

## 11. Growth story for judges

```text
Founder cannot find the small online work he wants
↓
Create a task-first PLAYER market
↓
GM has small unresolved work but hates supplier shopping
↓
KAPAPI sells RESULT + PRICE + COMPLETION TIME
↓
Internal PRICE × DELIVERY + human/AI/automation execution
↓
Real execution creates cost/time/failure/recovery data
↓
Quotes and routing become more predictable
↓
Recovery and QA become increasingly automated
↓
Repeat GMs send more work through KAPAPI
↓
WORK EXECUTION INFRASTRUCTURE
```

---

## 12. Current application thesis

> **카파피는 프리랜서를 더 잘 고르는 플랫폼이 아니라, 의뢰인이 사람을 고르는 과정 자체를 줄이는 업무 실행 시장입니다. 저는 퇴근 후 남는 시간에 할 수 있는 작은 온라인 업무를 골라 끝내고 돈 벌고 싶었지만, 기존 방식은 고정 알바나 장기 프리랜서 활동, 서비스 상품 판매에 가까웠습니다. 반대로 회사와 개인에게는 누군가 끝내야 하지만 사람을 새로 찾고 비교하고 관리하기에는 작은 업무가 반복됩니다. 카파피에서는 PLAYER가 이런 QUEST를 보고 PRICE와 DELIVERY TIME을 제안하거나 Offer를 수락합니다. 하지만 GM에게는 여러 PLAYER를 보여주는 대신, 카파피가 업무를 구조화해 결과·가격·완료시각을 제시하고 내부에서 사람·AI·자동화를 조달해 결과까지 전달합니다. 거래가 쌓일수록 어떤 업무를 어떤 실행 방식으로 얼마에 얼마나 안정적으로 끝낼 수 있는지 데이터가 축적되고, 견적·배정·복구가 정교해집니다. 최종적으로는 ‘해야 할 일을 넣으면 결과가 나오는’ 업무 실행 인프라를 목표로 합니다.**
