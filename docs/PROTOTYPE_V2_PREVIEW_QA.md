# KAPAPI Prototype v2 — Vercel Preview and its live QA

Status: **record of the deployed preview**
Updated: **2026-09-03**

## Deployment

| | |
|---|---|
| Preview URL | <https://kapapi-git-feat-prototype-v2-calcome.vercel.app> |
| Branch | `feat/prototype-v2` |
| Deployed commit | `d003027` |
| Deployment | `dpl_HgXvmC8stwQDbGazfy2ySsCvKpFb` |
| Project | `prj_OE2VU0XUNFCnjGebuJLeVkKhEy5s` (`kapapi`, team `team_cuJFcIPj1zvkSmGeDk3hckZd`) |
| Target | `null` — **preview, not production** |

`main` is untouched at `4cd13ab`. Nothing was merged and nothing was promoted. The
production deployment on the project is still the v1-era one the founder chose to
leave in place; this work did not alter it.

The branch alias always points at the newest v2 preview, so the URL above stays
current across redeploys.

## What was run against the deployed URL, not localhost

| Harness | Result |
|---|---|
| `scripts/loop.mjs` | **14/14** canon invariants: no picker anywhere, no second account, PRICE and DELIVERY both required and validated against the deadline, one account holding issued and executed work at once, no fake progress percentage, no celebration, claim disclaimer present, no v1 copy leakage |
| `scripts/shots.mjs` | 6 routes × desktop 1440×900 and mobile 390×844. No horizontal overflow, no touch target under 44px, no unnamed control. Landing measures **210 chars / 0 cards** desktop, 202 / 1 mobile |
| `scripts/hero-qa.mjs` | The four beats of the hero timeline captured at both viewports — film, hand-over, eligibility filter, delivered result |
| Media | `/media/kapapi-hero.mp4` served 200 with `Accept-Ranges: bytes`, 836 KB; poster 200 |

## Hero timeline, measured on the preview

The phase timeline is driven by wall-clock timers while the film is decoded from the
CDN, so the first question was whether the two stay together over the network. They do:

```
ms      video.currentTime   paused   composite transform
3401    3.96                false    none
3609    4.16                false    matrix3d(0.459999, …)   ← composite in
4802    5.36                false    matrix3d(0.673349, …)
5001    5.42                true     …                        ← cut, film pauses
10204   5.72                false    …                        ← payoff resumes
12603   7.98                true
14002   0.12                false                             ← loop
```

The composited UI appears and disappears exactly on the tracked window (4.1s–5.45s),
the cut lands on the pause, and the cycle repeats on time.

## Behaviour that differs by viewport, deliberately

Desktop keeps the compositing treatment: the real product surface is placed on the
laptop screen with a solved homography while the camera pushes in, then the shot cuts
to the same surface full-frame.

Below 900px the stage turns 4:5 and `object-fit: cover` crops the laptop out of the
shot, so compositing onto its screen is meaningless. Phones cut straight from the film
to the full-frame product at the same beat. Both paths show the same routing sequence
from the same `route()` output; only the framing differs.

## What the preview caught that local QA did not

Every automated harness was green while four separate defects sat in the hero. They
are recorded in `PROTOTYPE_V2_TOOL_AUDIT.md` §4 — the short version is that the route
harness samples the page at load, and the product demonstration happens four seconds
later. `scripts/hero-qa.mjs` now covers that window.

## Known remaining weaknesses

- The panel's variable region is optically centred, so the delivered-result step still
  carries generous space above and below its file row. It reads as air rather than as
  a gap now that the acceptance checks are shown, but it is the least dense beat.
- Below ~360px the panel is legible but tight; there is roughly 40px of vertical slack
  at 320px, which is enough but not comfortable.
- The replay control is desktop only. On a phone the composer takes the full width and
  there is no free corner; the sequence loops on its own.
