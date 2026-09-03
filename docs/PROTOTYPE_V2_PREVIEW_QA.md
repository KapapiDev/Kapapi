# KAPAPI Prototype v2 — Historical Preview QA

Status: **historical pre-D-032 deployment record**  
Updated: **2026-09-03**

> This file records the live Preview QA performed **before** the product decision changed from day-one automatic routing to the D-032 task-first / recommendation-first model. It is useful evidence about the v2 visual implementation and hero compositing, but its old `no picker anywhere` and universal auto-routing assertions are **not current product requirements**.

Current product behavior is governed by:

1. `ORIGIN_AND_GROWTH_THESIS.md`
2. `DECISIONS.md` D-032
3. `PRODUCT.md`
4. `ROADMAP.md`
5. `PROTOTYPE_SPEC.md`
6. current `scripts/loop.mjs`

## Historical deployment

| | |
|---|---|
| Preview URL | <https://kapapi-git-feat-prototype-v2-calcome.vercel.app> |
| Branch | `feat/prototype-v2` |
| Deployed commit | `d003027` |
| Deployment | `dpl_HgXvmC8stwQDbGazfy2ySsCvKpFb` |
| Project recorded at the time | `prj_OE2VU0XUNFCnjGebuJLeVkKhEy5s` |
| Target | preview, not production |

`main` was not changed by this historical preview work.

## Historical QA results worth retaining

The deployed preview was checked with:

- `scripts/loop.mjs`
- `scripts/shots.mjs`
- `scripts/hero-qa.mjs`
- direct media requests

Useful visual/technical findings that remain relevant:

- the hero video and real-UI compositing timeline stayed synchronized over the deployed CDN path;
- desktop composited the real product surface into the laptop display and then cut full-frame;
- narrow/mobile layouts used a direct full-frame product cut because the laptop screen was cropped out;
- desktop/mobile route captures found no horizontal overflow in the tested viewports;
- the dedicated hero-timeline capture was necessary because ordinary route screenshots could be green while defects existed several seconds into the animation;
- reduced-motion/mobile behavior requires separate visual verification rather than inference from desktop.

## Superseded behavior

The historical harness treated the following as required:

> **no GM worker-selection control anywhere; KAPAPI automatically assigns the PLAYER**

That requirement is superseded by D-032.

Current preferred prototype flow is:

```text
QUEST posted
→ PLAYERs BID PRICE + DELIVERY
→ KAPAPI filters/ranks and recommends
→ GM confirms recommended PLAYER
→ ASSIGNED
→ execution
→ result
→ accept / revise
```

Universal automatic routing is now a later capability that must be earned from transaction, trust, liquidity and recovery data.

## Current QA authority

Use the current `scripts/loop.mjs` for behavioral invariants. It now checks that:

- task-first discovery exists;
- PRICE + DELIVERY are mandatory;
- recommendation appears before assignment;
- GM confirmation creates assignment;
- alternatives remain accessible;
- one universal account can occupy different QUEST roles;
- the product does not claim universal automatic routing or completion guarantees;
- the long-term Outcome Layer is framed as future evolution.

## Current live-QA status

The code and canon were realigned on 2026-09-03 after the historical preview above. A fresh live Vercel Preview verification is still required for the new recommendation/confirmation flow. The previously recorded project/deployment identifiers could not be resolved through the currently connected Vercel access during this alignment pass, so this file must not be read as proof that the latest branch head has been deployed or visually verified.
