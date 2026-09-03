# 2026 모두의 창업 프로젝트 — KAPAPI Strategy

Updated: 2026-09-03

## 1. Application strategy

The application should not present KAPAPI as a finished marketplace, a CAD service, a generic “Korean Upwork,” a game-like work service, or a magical AI outsourcing system.

The strongest story is the actual founder-origin problem and the growth logic that follows from it.

### Founder-origin story

> **퇴근 후 남는 시간에 할 수 있는 작은 온라인 부업을 찾고 싶었다. 하지만 기존 선택지는 고정 알바, 장기 프리랜서 활동, 또는 내가 먼저 서비스 상품을 만들어 판매하는 방식에 가까웠다. 내가 원한 것은 이미 존재하는 업무를 골라 끝내고 바로 대가를 받는 방식이었다.**

This leads to a task-first supply market:

```text
업무가 먼저 존재
→ 작업자가 할 수 있는 업무 선택
→ 가격 + 완료시간 제안
→ 배정
→ 수행
→ 작업대금 + 검증된 작업이력
```

발주자 쪽은 이 시장을 들여다보지 않습니다. 발주자는 업무와 파일을 올리고, 카파피가
제시한 **실행 계약**(결과물 + 가격 + 완료시간 + 수정 경계 + 복구 경계)을 승인하고,
결과를 받습니다. 제안 비교와 작업자 선정은 카파피가 합니다 (D-033.1).

The mirrored client problem is:

> **회사나 개인에게는 누군가 끝내야 하지만 채용이나 복잡한 외주 절차를 밟기에는 작거나 불규칙하거나 긴급한 업무가 생긴다.**

KAPAPI connects unused skill/time with unresolved work.

---

## 2. Differentiation story

Do not sell the idea as “the same marketplace, reversed.”

Explain the differentiation as a sequence:

1. **Task-first instead of storefront-first** — work is the primary object.
2. **가격 × 완료시간** — worker availability and client urgency inform KAPAPI's internal procurement, quoting and routing.
3. **업무별 신뢰 데이터** — completed work creates evidence about who reliably finishes which kind of work.
4. **실행 계약** — 발주자는 결과물·가격·완료시간·수정 경계·복구 경계가 적힌 계약을 승인하고 결과를 받습니다. 제안 비교와 작업자 선정은 KAPAPI 내부에서 처리합니다.
5. **복구 고도화** — with enough evidence, KAPAPI increasingly handles failure recovery as well as selection.
6. **업무 실행 레이어** — the same contract-and-result UX is supported by increasingly reliable quoting, execution, QA and recovery across proven categories.

Internal execution may combine human workers, AI, deterministic automation, specialist partners and hybrid workflows where supported. The long-term change is their proven range, reliability and economics.

---

## 3. What to say KAPAPI is

Recommended short description:

> **카파피는 해야 할 일을 맡기면 결과로 돌려주는 업무 실행 플랫폼입니다. 발주자는 파일과 설명을 올리고, 결과물·가격·완료시간·수정 경계·복구 경계가 담긴 실행 계약을 승인합니다. 카파피는 내부에서 작업자의 가격·완료시간 제안과 사람·AI·자동화 등 적합한 실행수단을 활용해 업무를 수행하고 결과를 반환합니다. 실제 수행 데이터가 쌓일수록 견적·배정·QA·복구를 고도화합니다.**

Shorter:

> **업무를 입력하고 실행 계약을 승인하면 결과가 돌아옵니다. 카파피가 내부의 작업시장·AI·자동화를 활용해 수행과 복구를 맡습니다.**

North Star:

> **해야 할 일을 올리면, 결과로 돌아온다.**

---

## 4. Submission terminology rule

For the application, presentation and public prototype, use only immediately understandable work-market language:

- 발주자
- 작업자
- 업무
- 제안
- 가격
- 완료시간
- 작업대금
- 긴급 업무
- 작업이력 / 정시완료율 / 수정률
- 업무 완료

Do not introduce a separate game-like glossary, fictional roles, progression levels, experience points or special completion labels.

KAPAPI should be memorable because of **task-first discovery + 가격 × 완료시간 + work-to-result evolution**, not because judges must learn new nouns.

---

## 5. 1R framing priority

Recommended order:

1. **Founder problem** — wanted bounded online side work, not a storefront or fixed shift
2. **Mirrored client problem** — unresolved work that does not justify hiring or heavy procurement
3. **Why existing behavior is awkward** — profile/service-first discovery and delegation friction
4. **KAPAPI product and mechanism** — client approves the execution contract and receives a result; KAPAPI internally uses task-first supply, price × completion-time proposals, AI and automation
5. **Transaction proof** — real work moves from unresolved to completed
6. **Data flywheel** — transactions create task-specific trust and liquidity data
7. **Growth path** — selection quality → recovery → repeat capacity → execution layer
8. **Founder/domain execution ability** — architecture/CAD as one credible higher-skill testbed, not market definition
9. **Concrete validation plan** — both worker supply and external paid client demand

---

## 6. Pre-1R prototype target

The prototype should visibly demonstrate:

- category-neutral work-entry hero
- `작업 찾기` worker entry
- open work feed, not seller storefronts
- ordinary bounded work examples plus one higher-skill founder-domain example
- worker **가격 + 완료시간 제안**
- task-specific career/history signals
- 실행 계약: 결과물 · 가격 · 완료시간 · 수정 경계 · 복구 경계, with the price's basis disclosed
- internal KAPAPI selection with disclosed criteria and excluded 제안 in `이용 방법`; the client sees an informational rationale, with no proposal comparison step
- genuine urgent-work state
- result delivery + accept/revise
- future path from transaction data → selection quality → recovery → execution layer

The worker surface and `이용 방법` show KAPAPI's internal selection. What they must not claim is that selection is
already automated at scale, or that a quote is instant in every category — D-033.5
allows a concierge back office as scaffolding and D-033.6 says an instant quote is
earned per category.

Do not spend pre-1R effort on production payment custody, tax automation, broad category backend, deep dispute tooling or SLA guarantees.

---

## 7. 1R validation plan

### Worker validation

Test whether people will:

- browse real bounded work
- submit proposals without needing a storefront
- trade off price vs completion time according to availability
- complete reliably
- return for more work

### Client validation

Test whether external clients will:

- submit bounded work they currently do themselves, delay or send to existing vendors
- pay real money
- accept the result
- return with another self-funded task

### Market validation

Track:

- time to first valid proposal
- eligible proposals per task
- price / completion-time distributions
- assignment rate
- completion / on-time / revision
- contract approval rate and re-quote requests
- worker effective earnings
- client management time
- operator minutes for scoping, quoting, procurement, QA and recovery
- completed-outcome contribution after execution, payment, support, revision and recovery costs
- repeat worker / repeat client

Strongest proof:

> **external client + real work + real worker + accepted result + real payment + repeat**

Founder-originated CAD work may validate supply/engine behavior but must not be counted as external client-demand proof.

---

## 8. Growth story for judges

```text
Founder cannot find the kind of side work he wants
↓
Build a market where work exists first
↓
People convert spare time + skill into completed work
↓
Organizations convert irregular unresolved work into external capacity
↓
Transactions create price, completion-time, fit and performance data
↓
KAPAPI's selection becomes more reliable
↓
KAPAPI increasingly handles recovery as well as assignment
↓
Repeat businesses use KAPAPI as external capacity
↓
Human + AI + automation + partners expand execution capacity
↓
WORK IN → RESULT OUT
```

Each stage creates evidence required for the next internal capability. The client-facing contract-and-result flow applies throughout.

---

## 9. Current mentor-institution posture

The existing Mokwon University Industry-Academic Cooperation Foundation choice can remain a working choice unless new reliable competition/application-volume information materially changes expected fit.

Optimize the final application for:

- authenticity of founder problem
- problem-solution linkage
- differentiation that is easy to understand
- clear target users and market
- realistic validation
- founder execution ability
- business-model feasibility
- credible growth logic without unsupported day-one claims

---

## 10. Final application thesis

> **카파피의 전면 경험은 업무 입력 → KAPAPI → 결과 반환입니다. 발주자는 결과물·가격·완료시간·수정 경계·복구 경계를 담은 실행 계약을 승인합니다. 내부에서는 작업자가 이미 존재하는 업무에 가격과 완료시간을 제안하고, 카파피가 사람·AI·자동화·전문 파트너 중 적합한 실행수단을 활용해 조달·선정·배정·수행·QA·복구를 처리합니다. 실제 수행 데이터와 완료 건별 수익성을 검증하며 견적과 실행 능력을 높여, 더 많은 업무를 안정적으로 끝내는 실행 인프라로 성장합니다.**
