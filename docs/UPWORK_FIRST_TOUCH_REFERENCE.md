# Upwork First-Touch Reference for KAPAPI

Status: **first-touch UX reference**  
Branch: `docs/initial-product-design`  
Updated: 2026-09-02

Upwork is the strongest current reference for KAPAPI's public entry experience because it presents a broad professional-work marketplace through a very simple first action.

This is not a directive to copy Upwork's visual design. It is a behavioral and information-hierarchy reference.

## 1. What KAPAPI should learn from Upwork

Upwork's current homepage first makes the user's intent obvious with:

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

할 일을 던져주세요.
전문가들이 가격과 완료시간을 제안합니다.

[ 손그림 도면을 CAD로 정리해주세요...                  ]
[ 파일 첨부 ]                                  [ 일 맡기기 → ]

일 등록 → 가격·완료시간 제안 → 선택 → 결과 받기
```

작업자 entry should remain available but secondary:

```text
일하러 오셨나요? → 일 찾기
```

## 3. Three-second test

A first-time visitor must understand within roughly three seconds:

> **"여기에 내가 맡길 일을 적으면 되는구나."**

Fail the design if the visitor must first decode:

- 업무,
- BID,
- 작업자,
- LEVEL / EXP,
- TIME ATTACK,
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

- TIME ATTACK,
- active Workroom / operational state,
- selected narrative section,
- brand contrast moment.

Do not make the landing page or core marketplace dark by default.

Principle:

> **Light marketplace first. Dark operational moments second.**

## 5. What must not appear in the first viewport

Default OFF:

- mini dashboard wall,
- multiple BID cards competing with the input,
- trust charts,
- category rainbow,
- animated network globe,
- enterprise logo wall above the main action,
- dense navigation,
- TIME ATTACK countdown,
- LEVEL / EXP,
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

KAPAPI's long-term UX should increasingly reduce the importance of choosing a person and increase the importance of specifying the result.

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
7. Dashboard or transaction mechanics appear only after the visitor understands what to do.
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
