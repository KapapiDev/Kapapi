# KAPAPI Documentation

This directory is the product/business design canon for KAPAPI.

The implementation handoff also uses two root-level files:

- [`../CLAUDE_HANDOFF.md`](../CLAUDE_HANDOFF.md) — Claude Code master handoff, reading order, implementation protocol and definition of done
- [`../TASK_QUEUE.md`](../TASK_QUEUE.md) — ordered Prototype v1 implementation queue

## Core documents

- [DECISIONS.md](./DECISIONS.md) — durable decisions and why they were made; later decisions explicitly supersede earlier ones where stated
- [PRODUCT.md](./PRODUCT.md) — product definition, GM/PLAYER/QUEST world, default auto-routing transaction mechanics, Routing Intelligence and Outcome Autopilot architecture
- [IDENTITY_ROLE_MODEL.md](./IDENTITY_ROLE_MODEL.md) — one universal user identity; GM and PLAYER are contextual QUEST roles, never permanent account types
- [PROTOTYPE_SPEC.md](./PROTOTYPE_SPEC.md) — canonical buildable scope for Prototype v1: screens, states, routing fixtures, first-touch behavior and demo loop
- [KAPAPI_ART_DIRECTION.md](./KAPAPI_ART_DIRECTION.md) — current public art direction and world-building intensity layer
- [KAPAPI_DESIGN.md](./KAPAPI_DESIGN.md) — canonical Prototype v1 visual language, screen hierarchy, component styling, responsive/accessibility and anti-template rules
- [KAPAPI_MOTION.md](./KAPAPI_MOTION.md) — canonical Prototype v1 motion language, signature motions, timing, accessibility, performance and QA rules
- [HERO_MEDIA.md](./HERO_MEDIA.md) — approved hero product-movie narrative, current footage status, real-UI replacement rules and website integration behavior
- [QA_CHECKLIST.md](./QA_CHECKLIST.md) — Prototype v1 release/review gate
- [PROTOTYPE_V1_DESIGN_GATE.md](./PROTOTYPE_V1_DESIGN_GATE.md) — pre-code hero/world/role decisions recorded before implementation
- [PROTOTYPE_V1_QA_REPORT.md](./PROTOTYPE_V1_QA_REPORT.md) — audit of the implemented prototype against the gate above
- [ROADMAP.md](./ROADMAP.md) — current 1R routed-marketplace prototype phase through validation, commercial beta, Routing Intelligence and Outcome Autopilot
- [VALIDATION.md](./VALIDATION.md) — observed GM interview evidence, hypotheses, tests, metrics and kill signals
- [LEGAL.md](./LEGAL.md) — legal/product boundaries, payment/security/IP/professional-service and routing-responsibility risk
- [PROGRAM_2026_MODU.md](./PROGRAM_2026_MODU.md) — 2026 모두의 창업 project strategy and current 1R assumptions

## Supporting reference documents

- [UPWORK_FIRST_TOUCH_REFERENCE.md](./UPWORK_FIRST_TOUCH_REFERENCE.md) — first-touch simplicity reference; KAPAPI should be even more result-oriented and default to light-first public UX
- [REFERENCE_BOARD.md](./REFERENCE_BOARD.md) — what KAPAPI intentionally extracts from Linear, Hyperstudio, Factory, Vercel, Mercury, Raycast and the motion reference set; non-canonical evidence map
- [MOTION_REFERENCES_21ST.md](./MOTION_REFERENCES_21ST.md) — provisional reference research; `KAPAPI_MOTION.md` overrides it when priorities or decisions conflict
- [`motion-sources/`](./motion-sources/) — captured source code, demos and assessment notes used to derive the canonical motion system

## Implementation reading order

For Prototype v1 implementation, use this order:

1. `docs/README.md`
2. `docs/DECISIONS.md`
3. `docs/PRODUCT.md`
4. `docs/IDENTITY_ROLE_MODEL.md`
5. `docs/PROTOTYPE_SPEC.md`
6. `docs/KAPAPI_ART_DIRECTION.md`
7. `docs/KAPAPI_DESIGN.md`
8. `docs/KAPAPI_MOTION.md`
9. `docs/UPWORK_FIRST_TOUCH_REFERENCE.md`
10. `docs/HERO_MEDIA.md`
11. `docs/QA_CHECKLIST.md`
12. `TASK_QUEUE.md`
13. `docs/LEGAL.md`
14. `docs/VALIDATION.md`
15. `docs/REFERENCE_BOARD.md`

`CLAUDE_HANDOFF.md` at the repository root is the implementation entry point and repeats the priority rules in operational form.

## Canon rules

1. Chat discussion is not the final source of truth once a decision has been recorded here.
2. New evidence may change KAPAPI. Major changes must be recorded in `DECISIONS.md`.
3. `VALIDATION.md` must distinguish observed evidence from hypotheses.
4. Architecture/CAD is the initial wedge and testbed, not the final market boundary.
5. **Default GM transaction behavior is defined by `PRODUCT.md` + the latest applicable `DECISIONS.md` + `PROTOTYPE_SPEC.md`.** As of D-031, routine BID comparison / PLAYER selection is KAPAPI's job after a valid QUEST is submitted.
6. **KAPAPI has one universal user identity.** `GM` and `PLAYER` are contextual roles created by a user's relationship to each QUEST, never permanent account types. `IDENTITY_ROLE_MODEL.md` is the implementation authority for this rule.
7. Strong SLA/outcome guarantees remain a later Autopilot threshold; default auto-routing does not itself prove an outcome guarantee.
8. **Public Prototype v1 is light-first.** Landing and core marketplace surfaces default to white/off-white; dark surfaces are contextual operational moments. This rule governs how legacy dark-reference language in `KAPAPI_DESIGN.md` is interpreted.
9. `KAPAPI_ART_DIRECTION.md` is the current public art-direction/world-building interpretation layer and overrides older visual examples where they conflict.
10. `KAPAPI_DESIGN.md` is the detailed visual authority for Prototype v1, but visual examples must not override current product behavior, universal identity, or the light-first public rule. Any legacy GM-manual-selection example is superseded by D-031 / `PROTOTYPE_SPEC.md`.
11. `KAPAPI_MOTION.md` is the motion authority for Prototype v1, but motion choreography must follow current product behavior. Any legacy `GM selects BID` choreography is superseded by D-031 and should be interpreted as `KAPAPI routes/selects` for the default flow.
12. `HERO_MEDIA.md` governs the hero product-movie narrative and asset integration. Generated-video UI is not authoritative product UI; real KAPAPI HTML/CSS should replace it where necessary.
13. `QA_CHECKLIST.md` plus the mandatory role-model QA in `IDENTITY_ROLE_MODEL.md` are final review gates for Prototype v1.
14. `REFERENCE_BOARD.md` explains source influence but is not an implementation style authority.
15. After review, approved documentation should be merged into `main` so product intent and implementation remain together.
