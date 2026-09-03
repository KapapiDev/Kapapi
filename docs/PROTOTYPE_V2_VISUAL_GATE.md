# Prototype v2 — Visual Direction Gate

Status: **HISTORICAL record of the direction gate**

> The chosen direction's hero — real KAPAPI UI composited onto the laptop screen
> inside the footage — is superseded. The founder supplied the hero film and
> directed that it be used exactly as delivered, so nothing is composited into it
> now. See `HERO_MEDIA.md` for the current rule and `PROTOTYPE_V2_HERO_COMPOSITING.md`
> for the superseded technique. This file is kept as the record of how the
> direction was chosen, which still stands.

Three directions were **built and rendered**, not described. Sources in `research/proto/`,
captures in `research/directions/`. Each was judged beside the live-reference evidence in
`PROTOTYPE_V2_LIVE_REFERENCE_AUDIT.md`, at 1440×900 and 390×844, with the real hero footage
and the real Korean copy in place.

---

## A · 필름 — full-bleed film panel

Toss / Mercury / Upwork lineage. One rounded media panel fills the first viewport, nav on
paper above it, Korean headline along the film's lower-left, the work-entry action floating on
the film, chips beneath. The laptop screen inside the footage carries the real KAPAPI UI.

**Verdict: chosen.**

- Only direction where the first viewport is *alive* rather than a layout.
- Film and product become one object instead of neighbours — the exact failure v1 was rejected for.
- Matches Korean expectations (Toss proves a cinematic media hero reads premium to this audience)
  while hitting global polish (Mercury's floating action, Upwork's action-on-photo).
- Carries the world naturally: the state grammar appears *inside the device*, where it is real.

## B · 지면 — Swiss editorial sheet

Stripe / Linear lineage. Visible container hairlines, 68px headline, inline entry, stat row,
film as a cinematic band below the fold.

**Verdict: rejected.** The first viewport is type + form + numbers with no product and no life —
structurally the same mistake as v1, just better set. Pushing the film below the fold wastes the
one asset that makes KAPAPI feel real. It also exposed a concrete typographic rule: **Korean must
never be set in the mono face with letter-spacing** (`전문 업무 위탁`, `평균 제안` rendered as
spaced-out fragments). Carried into the build as a hard rule.

## C · 작업대 — centred worksheet

Notion lineage. Centred headline with a pill highlight, a large "의뢰서" sheet with a textarea,
chips centred beneath, film below.

**Verdict: rejected.** A big empty centred textarea is the default 2026 AI-product landing. It
reads generic on sight, carries no KAPAPI world, and leaves the first viewport visually empty.

---

## Evidence the choice is not arbitrary

| Measure | A | B | C | Reference target |
| --- | --- | --- | --- | --- |
| Product visible in first viewport | yes | no | no | Linear, Notion |
| Media integrated, not adjacent | yes | no | no | Toss, Mercury |
| Cards in first viewport | 0 | 0 | 1 | Toss 0, Mercury 0, Kmong 0 |
| Reads Korean-familiar | yes | partly | no | Kmong, Toss |
| Distinct from generic SaaS/AI landing | yes | partly | **no** | — |

---

## Hero compositing: the preferred technique works

`docs/PROTOTYPE_V2_HERO_COMPOSITING.md` asks for a real attempt at putting KAPAPI UI **inside**
the laptop screen, with a clean cut allowed only as an honest fallback. The fallback was not needed.

Frame analysis of the approved footage (`research/screen-track.mjs`) found that from
**t≈4.1s to t≈5.45s** the camera pushes into a **blank, near-front-on laptop screen** — no
generated fake UI to fight, and only mild perspective. The screen's inner quadrilateral was
tracked every 0.1s:

```
t=4.1  tl=354,192  tr=927,192   →  573 × 372
t=4.9  tl=221,93   tr=1059,93   →  838 × 549
t=5.45 tl=202,78   tr=1078,78   →  876 × 576
```

The real UI is placed with a projective transform solved from those corners
(`research/proto/screen.js`, `quadToMatrix3d`) and interpolated between keyframes. Verified by
capturing frames at t=4.3 / 4.9 / 5.4 with the UI composited: it sits inside the bezel and
tracks the push-in correctly.

This is keyframed from measured frames, not live computer vision — robust for this specific
take, and exactly what the authority asks for over "fragile computer-vision tracking".

Refinements carried into the build:

- grade the composited UI to the screen (cool tint, slightly lifted black, faint bloom) so it
  emits rather than looks pasted;
- fade the hero headline out during the composite window so it never collides with the screen;
- after the push-in peaks, cut to full-frame real UI for the routing sequence, then return to
  the film for the payoff.
