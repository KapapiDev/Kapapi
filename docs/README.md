# KAPAPI Documentation

This directory is the product/business design canon for KAPAPI.

## Core documents

- [PRODUCT.md](./PRODUCT.md) — product definition, GM/PLAYER/QUEST world, default auto-routing transaction mechanics, Routing Intelligence and Outcome Autopilot architecture
- [KAPAPI_DESIGN.md](./KAPAPI_DESIGN.md) — canonical Prototype v1 visual language, screen hierarchy, component styling, responsive/accessibility and anti-template rules
- [KAPAPI_MOTION.md](./KAPAPI_MOTION.md) — canonical Prototype v1 motion language, signature motions, timing, accessibility, performance and QA rules
- [ROADMAP.md](./ROADMAP.md) — current 1R routed-marketplace prototype phase through validation, commercial beta, Routing Intelligence and Outcome Autopilot
- [VALIDATION.md](./VALIDATION.md) — observed GM interview evidence, hypotheses, tests, metrics and kill signals
- [LEGAL.md](./LEGAL.md) — legal/product boundaries, payment/security/IP/professional-service and routing-responsibility risk
- [DECISIONS.md](./DECISIONS.md) — durable decisions and why they were made; later decisions explicitly supersede earlier ones where stated
- [PROGRAM_2026_MODU.md](./PROGRAM_2026_MODU.md) — 2026 모두의 창업 project strategy and current 1R assumptions

## Supporting reference documents

- [UPWORK_FIRST_TOUCH_REFERENCE.md](./UPWORK_FIRST_TOUCH_REFERENCE.md) — first-touch simplicity reference; KAPAPI should be even more result-oriented and default to light-first public UX
- [REFERENCE_BOARD.md](./REFERENCE_BOARD.md) — what KAPAPI intentionally extracts from Linear, Hyperstudio, Factory, Vercel, Mercury, Raycast and the motion reference set; non-canonical evidence map
- [MOTION_REFERENCES_21ST.md](./MOTION_REFERENCES_21ST.md) — provisional reference research; `KAPAPI_MOTION.md` overrides it when priorities or decisions conflict
- [`motion-sources/`](./motion-sources/) — captured source code, demos and assessment notes used to derive the canonical motion system

## Canon rules

1. Chat discussion is not the final source of truth once a decision has been recorded here.
2. New evidence may change KAPAPI. Major changes must be recorded in `DECISIONS.md`.
3. `VALIDATION.md` must distinguish observed evidence from hypotheses.
4. Architecture/CAD is the initial wedge and testbed, not the final market boundary.
5. **Default GM transaction behavior is defined by `PRODUCT.md` + the latest applicable `DECISIONS.md`.** As of D-031, routine BID comparison / PLAYER selection is KAPAPI's job after a valid QUEST is submitted.
6. Strong SLA/outcome guarantees remain a later Autopilot threshold; default auto-routing does not itself prove an outcome guarantee.
7. `KAPAPI_DESIGN.md` is the visual authority for Prototype v1, but visual examples must not override current product behavior. Any legacy GM-manual-selection example is superseded by D-031 until visually consolidated.
8. `KAPAPI_MOTION.md` is the motion authority for Prototype v1, but motion choreography must follow current product behavior. Any legacy `GM selects BID` choreography is superseded by D-031 and should be interpreted as `KAPAPI routes/selects` for the default flow.
9. `REFERENCE_BOARD.md` explains source influence but is not an implementation style authority.
10. After review, approved documentation should be merged into `main` so product intent and implementation remain together.
