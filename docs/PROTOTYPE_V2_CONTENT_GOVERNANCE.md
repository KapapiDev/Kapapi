# KAPAPI Prototype v2 — Content & Surface Governance

Status: **mandatory authority for `main`**  
Updated: **2026-09-03**

This document exists to prevent Prototype v1's content mistakes from returning through new implementation choices.

## 0. Core rule

**Nothing visible in the public product may exist merely because it was easy to invent.**

Every visible surface, label, persona, example, badge, state, subtitle, utility, chip, status line, profile identity, number, CTA, decorative system label or navigation item must have a defensible product reason.

A visible element is allowed only when at least one of the following is true:

1. it is required by current product behavior or an explicit canonical decision;
2. it is supported by observed reference / Korean-market convention and materially improves usability or trust;
3. it was explicitly approved as a KAPAPI brand element for the relevant surface and follows D-034's ordinary work terminology.

If none applies, do not ship it.

## 1. Examples in documents are not automatically product content

Names, copy, numbers, labels, screenshots, snippets, ASCII examples and illustrative states in older documents are **examples unless explicitly marked REQUIRED / canonical / approved**.

Do not promote an example into public UI merely because it appears in a canon document.

In particular, the following Prototype v1 artifacts must not be copied into v2 unless separately justified by a new design decision:

- `김도현` or any other arbitrary current-user persona in the public landing header;
- an invented work-network sub-brand or persistent logo suffix;
- a fictional network-status hero eyebrow;
- `RESET` or any other demo/debug control in public navigation;
- `이런 일들이 올라옵니다` as an assumed landing-section label;
- a fixed row of arbitrary example chips merely because Upwork uses examples;
- fake login/avatar state on the first public visit;
- meaningless system-status decoration that does not change user understanding or action.

These are Prototype v1 implementation decisions, not product truths.

## 2. Public landing starts from a neutral visitor state

Unless a specific prototype route intentionally demonstrates a signed-in state, the public landing should behave visually as a neutral first visit.

Do not show an arbitrary person's:

- name,
- initials/avatar,
- organization,
- decorative progression status,
- profile,
- transaction history,

in the global landing header merely to make the prototype feel populated.

Personas are useful only where a concrete transaction, routing, trust or profile demonstration requires them.

## 3. Demo controls are not product navigation

Debug/development affordances must not appear in founder-facing public UI.

Examples:

- reset demo state,
- fixture switcher,
- developer status,
- test-user picker,
- routing-debug toggles,
- internal environment labels.

If such controls are needed, keep them in a hidden/dev-only mechanism, query parameter, keyboard command, dedicated debug route or clearly separated reviewer tooling.

## 4. Labels require meaning

KAPAPI terms are not decoration.

**D-034:** Use 업무 / 제안 / 작업자 / 발주자 / 작업대금 / 긴급 업무 /
작업이력·신뢰지표 / 업무 완료. Fictional roles, game states and progression terminology
are not current product vocabulary.

A label is allowed only when the object or state it names actually exists in the
current data — 제안 4건 when there are four, 마감 6시간 when that is the deadline.

Do not invent adjacent lore such as:

- an invented work-network sub-brand,
- fictional command-center labels,
- decorative online-network labels,
- pseudo-terminal metadata,
- fake system-health language,

under the current product canon.

Product identity should emerge from real work states, not from logo-adjacent flavor text.

## 5. New-element necessity test

Before adding a new visible element, answer:

> **If this element disappeared, what would the user no longer understand, trust, or be able to do?**

If the answer is effectively `nothing`, remove it.

For decorative/brand elements, the alternate test is:

> **Does this materially strengthen KAPAPI's identity without making the interface harder to understand?**

If not, remove it.

## 6. Example-content rule

Examples can help reduce blank-page anxiety, but they must earn their place.

Before adding example tasks / chips / prompts:

1. inspect how Upwork, Kmong, Wishket, Soomgo and strong contemporary products solve first-entry anxiety;
2. determine whether KAPAPI's final hero actually needs examples;
3. if examples are used, keep them concise, category-neutral as a set, natural in Korean, and visually subordinate to the primary action;
4. do not add a heading such as `이런 일들이 올라옵니다` unless live-reference evidence and the chosen visual direction support it;
5. examples must never make the service look CAD-only or like a classifieds feed.

The default is not `examples must exist`. The default is `use them only if the chosen design benefits from them`.

## 7. Persona rule

Fixture names are test data, not brand content.

When a persona is needed for routing / profile / result demonstration:

- choose ordinary neutral Korean names;
- do not reuse a fixture name in global chrome merely for continuity;
- do not imply the viewer is that person;
- do not make one profession/persona define KAPAPI's market identity;
- clearly separate transaction example content from site navigation/brand identity.

## 8. Public-header rule

The public landing header should contain only elements that a first-time visitor genuinely needs.

Possible categories:

- KAPAPI brand,
- essential navigation,
- sign-in / account entry if implemented,
- one clear primary action when appropriate.

Do not fill visual emptiness with labels, user fixtures, debug controls or fake network state.

The header must be evaluated against actual Upwork / Kmong / Wishket / Soomgo / Mercury / other selected reference headers.

## 9. Copy governance

All visible Korean copy follows `PROTOTYPE_V2_KOREAN_UX_WRITING.md`.

Additional rule:

**Do not invent a label to explain a layout weakness.**

If a section needs a sentence like `이런 일들이 올라옵니다`, `카파피 네트워크`, `현재 온라인`, or similar simply to make otherwise unrelated UI objects feel connected, re-evaluate the composition first.

## 10. Founder-review audit

Before declaring v2 ready, inspect every visible first-page element and record one of:

- `PRODUCT REQUIRED`
- `REFERENCE-SUPPORTED UX`
- `APPROVED BRAND`

Anything that cannot receive one of those tags should be removed before founder review.

Also run a dedicated negative audit for Prototype v1 leakage:

- no arbitrary current-user identity in landing chrome;
- no invented work-network pseudo-sub-brand;
- no `RESET` in public navigation;
- no arbitrary example-section heading inherited from v1;
- no copy copied only because it existed in v1 fixtures/components;
- no meaningless system-status ornament.

## 11. One-sentence rule

> **KAPAPI may invent new visual forms, but it may not invent meaningless product content.**
