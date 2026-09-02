# KAPAPI Documentation

This directory is the product/business design canon for KAPAPI.

The implementation handoff also uses two root-level files:

- [`../CLAUDE_HANDOFF.md`](../CLAUDE_HANDOFF.md) — Claude Code master handoff, reading order, implementation protocol and definition of done
- [`../TASK_QUEUE.md`](../TASK_QUEUE.md) — ordered Prototype v1 implementation queue

## Core documents

- [DECISIONS.md](./DECISIONS.md) — durable decisions and why they were made; later decisions explicitly supersede earlier ones where stated
- [PRODUCT.md](./PRODUCT.md) — product definition, GM/PLAYER/QUEST world, default auto-routing transaction mechanics, Routing Intelligence and Outcome Autopilot architecture
- [PROTOTYPE_SPEC.md](./PROTOTYPE_SPEC.md) — canonical buildable scope for Prototype v1: screens, states, routing fixtures, first-touch behavior and demo loop
- [KAPAPI_ART_DIRECTION.md](./KAPAPI_ART_DIRECTION.md) — **current Prototype v1 public art direction and world-building authority**: Upwork first-touch benchmark, light-first rule, sapphire signal system, layered KAPAPI vocabulary, world-building intensity and visual QA gates
- [KAPAPI_DESIGN.md](./KAPAPI_DESIGN.md) — detailed Prototype v1 component/material/layout system; interpret legacy examples through `KAPAPI_ART_DIRECTION.md`, D-031 and `PROTOTYPE_SPEC.md`
- [KAPAPI_MOTION.md](./KAPAPI_MOTION.md) — canonical Prototype v1 motion language, signature motions, timing, accessibility, performance and QA rules; legacy GM-selection choreography is superseded by current auto-routing behavior
- [HERO_MEDIA.md](./HERO_MEDIA.md) — approved hero product-movie narrative, current footage status, real-UI replacement rules and website integration behavior
- [QA_CHECKLIST.md](./QA_CHECKLIST.md) — Prototype v1 release/review gate
- [ROADMAP.md](./ROADMAP.md) — current 1R routed-marketplace prototype phase through validation, commercial beta, Routing Intelligence and Outcome Autopilot
- [VALIDATION.md](./VALIDATION.md) — observed GM interview evidence, hypotheses, tests, metrics and kill signals
- [LEGAL.md](./LEGAL.md) — legal/product boundaries, payment/security/IP/professional-service and routing-responsibility risk
- [PROGRAM_2026_MODU.md](./PROGRAM_2026_MODU.md) — 2026 모두의 창업 project strategy and current 1R assumptions

## Supporting reference documents

- [UPWORK_FIRST_TOUCH_REFERENCE.md](./UPWORK_FIRST_TOUCH_REFERENCE.md) — first-touch simplicity research; `KAPAPI_ART_DIRECTION.md` contains the current implementation interpretation and the explicit `https://www.upwork.com/` benchmark rule
- [REFERENCE_BOARD.md](./REFERENCE_BOARD.md) — what KAPAPI intentionally extracts from Linear, Hyperstudio, Factory, Vercel, Mercury, Raycast and the motion reference set; non-canonical evidence map
- [MOTION_REFERENCES_21ST.md](./MOTION_REFERENCES_21ST.md) — provisional reference research; `KAPAPI_MOTION.md` overrides it when priorities or decisions conflict
- [`motion-sources/`](./motion-sources/) — captured source code, demos and assessment notes used to derive the canonical motion system

## Implementation reading order

For Prototype v1 implementation, use this order:

1. `docs/README.md`
2. `docs/DECISIONS.md`
3. `docs/PRODUCT.md`
4. `docs/PROTOTYPE_SPEC.md`
5. `docs/KAPAPI_ART_DIRECTION.md`
6. `docs/KAPAPI_DESIGN.md`
7. `docs/KAPAPI_MOTION.md`
8. `docs/UPWORK_FIRST_TOUCH_REFERENCE.md`
9. `docs/HERO_MEDIA.md`
10. `docs/QA_CHECKLIST.md`
11. `TASK_QUEUE.md`
12. `docs/LEGAL.md`
13. `docs/VALIDATION.md`
14. `docs/REFERENCE_BOARD.md`

`CLAUDE_HANDOFF.md` at the repository root is the implementation entry point and repeats the priority rules in operational form.

## Canon rules

1. Chat discussion is not the final source of truth once a decision has been recorded here.
2. New evidence may change KAPAPI. Major changes must be recorded in `DECISIONS.md`.
3. `VALIDATION.md` must distinguish observed evidence from hypotheses.
4. Architecture/CAD is the initial wedge and testbed, not the final market boundary.
5. **Default GM transaction behavior is defined by `PRODUCT.md` + the latest applicable `DECISIONS.md` + `PROTOTYPE_SPEC.md`.** As of D-031, routine BID comparison / PLAYER selection is KAPAPI's job after a valid QUEST is submitted.
6. Strong SLA/outcome guarantees remain a later Autopilot threshold; default auto-routing does not itself prove an outcome guarantee.
7. **Public Prototype v1 is light-first.** Landing and core marketplace surfaces default to white/off-white; dark surfaces are contextual operational moments.
8. **`KAPAPI_ART_DIRECTION.md` is the current public visual/world-building interpretation authority.** It overrides conflicting legacy visual examples in `KAPAPI_DESIGN.md` and `KAPAPI_MOTION.md`, including dark-first readings, routine GM selection, old first-touch `QUEST 등록하기` examples, generic purple/AI styling and underpowered world-building.
9. `KAPAPI_DESIGN.md` remains the detailed component/material/layout reference where it does not conflict with current product/art direction.
10. `KAPAPI_MOTION.md` remains the timing/interaction authority, but any legacy `GM selects BID` choreography is interpreted as **KAPAPI routes/selects** for the default flow.
11. `HERO_MEDIA.md` governs the hero product-movie narrative and asset integration. Generated-video UI is not authoritative product UI; real KAPAPI HTML/CSS should replace it where necessary.
12. `QA_CHECKLIST.md` plus the mandatory visual/world QA gate in `KAPAPI_ART_DIRECTION.md` define the final review standard.
13. `REFERENCE_BOARD.md` explains source influence but is not an implementation style authority.
14. After review, approved documentation should be merged into `main` so product intent and implementation remain together.
