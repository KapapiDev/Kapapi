# Upwork First-Touch Reference for KAPAPI

Status: **first-touch UX reference**  
Product authority: D-033.1–.12, D-034 and D-035
Updated: 2026-09-03

The Upwork reference observation recorded on 2026-09-02 informs KAPAPI's entry simplicity: a broad professional-work marketplace presented through a simple first action.

This is not a directive to copy Upwork's visual design. It is a behavioral and information-hierarchy reference.

## 1. What KAPAPI should learn from Upwork

The observed Upwork homepage made the user's intent obvious with:

- a large, plain-language headline,
- a clear `I want to hire / I want to work` role split,
- one central input for describing the needed work,
- familiar examples/popular searches,
- trust and category depth revealed after the primary action.

The page does not require a new visitor to understand marketplace mechanics before taking the first step.

KAPAPI should be even simpler on the 발주자 side.

## 2. KAPAPI first-touch principle

The first viewport must answer one question:

> **What work do you want to hand off?**

The visual center should be a task-entry surface, not a dashboard preview.

Recommended conceptual structure:

```text
KAPAPI

오늘은 어떤 일을 끝낼까요?
파일을 업로드하고 간단하게 설명해 주세요.

[ 파일을 업로드하고 간단하게 설명해 주세요.             ]
[ 파일 첨부 ]                                  [ 맡기기 → ]

업무 입력 → 실행 계약 승인 → KAPAPI 실행 → 결과 → 수락 / 수정 요청
```

The execution contract contains the deliverable, price, completion time, revision
boundary and recovery boundary. KAPAPI handles proposal comparison and worker
selection internally. 작업자 entry remains available through the header view toggle:

```text
발주자 / 작업자
```

## 3. Three-second test

A first-time visitor must understand within roughly three seconds:

> **"여기에 내가 맡길 일을 적으면 되는구나."**

Fail the design if the visitor must first decode:

- 업무,
- 제안,
- 작업자,
- 긴급 업무,
- dashboard navigation,
- Autopilot architecture.

Those concepts can appear after the core action is understood.

## 4. Light-first rule

KAPAPI is a two-sided professional-work marketplace, not a developer console.

Public default:

- white / off-white background,
- black / graphite typography,
- restrained borders,
- one signal accent,
- generous whitespace,
- high readability.

Dark surfaces are secondary and contextual, for example:

- 긴급 업무,
- active Workroom / operational state,
- selected narrative section,
- brand contrast moment.

Do not make the landing page or core marketplace dark by default.

Principle:

> **Light marketplace first. Dark operational moments second.**

## 5. What must not appear in the first viewport

Default OFF:

- mini dashboard wall,
- multiple 제안 cards competing with the input,
- trust charts,
- category rainbow,
- animated network globe,
- enterprise logo wall above the main action,
- dense navigation,
- 긴급 업무 countdown,
- Autopilot diagram,
- gaming terminology that must be learned before action.

The first viewport is an entry point, not a product-tour collage.

## 6. KAPAPI differentiation from Upwork

Upwork still frames the first task as hiring talent.

KAPAPI should move one step closer to the result:

```text
Upwork: describe what you need to hire for
KAPAPI: describe the work you want completed
```

KAPAPI's current client UX centers on approving the execution contract and reviewing
the result. Worker selection, AI, automation, QA and recovery belong to the internal
execution mechanism; capability expands with evidence.

This is consistent with the product north star:

> **DROP WORK. GET RESULTS.**

## 7. Implementation acceptance criteria

Before approving the public hero:

1. One obvious 발주자 primary action exists.
2. The action is understandable without KAPAPI vocabulary.
3. The task-entry surface is the strongest visual object above the fold.
4. The page is light-first by default.
5. A new user can explain the service after one glance in ordinary language.
6. 작업자 entry is available but does not compete with the 발주자 action. In the shipped build it is the header toggle.
7. Internal transaction mechanics appear in the worker surface and mechanism explainer; the client flow shows the execution contract, progress and result.
8. The design remains premium through typography, spacing, responsiveness and motion, not through visual complexity.

## 8. Reference authority

Use Upwork as the behavioral reference for first-touch simplicity and role clarity.

Do not copy:

- exact copy,
- exact layout,
- brand colors,
- card shapes,
- navigation structure,
- marketplace taxonomy.

KAPAPI must be easier, more result-oriented and more direct.
