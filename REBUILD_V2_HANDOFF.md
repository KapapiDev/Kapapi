# KAPAPI Prototype v2 — FROM-SCRATCH REBUILD HANDOFF

Status: **mandatory execution entry point for `feat/prototype-v2`**  
Baseline: documentation-only commit `5d2ba56ee04e10fd86148243dbdd63e1d63e63bc`

## 0. Why this rebuild exists

Prototype v1 is rejected as a visual implementation. **Do not reuse its application code, components, CSS, layout, screenshots, or visual composition.** It may be inspected only as a negative example of what not to repeat.

The v2 branch intentionally starts from the last documentation-only canon state before app implementation.

Preserve the product canon. Rebuild the product implementation from zero.

---

# 1. Mandatory tool / skill inventory BEFORE design

Before writing application code, inspect the actual Claude Code environment and enumerate every installed tool, skill, plugin, MCP, browser/computer-use capability, and design/frontend aid relevant to:

- web design
- UI/UX
- frontend design
- visual QA
- browser automation
- screenshots
- responsive testing
- animation/motion

**Actually invoke relevant installed capabilities.** Do not merely mention them.

If `ui-ux-pro-max` is installed, use it. Also use any installed equivalent such as frontend-design/web-design/UI critique/browser visual QA tools.

Record in `docs/PROTOTYPE_V2_TOOL_AUDIT.md`:

- capability name
- whether available
- how it was used
- output/decision it influenced

If a relevant expected capability is unavailable, record the concrete lookup/call attempted and the failure. Do not silently skip it.

---

# 2. Mandatory LIVE reference study

The repository's reference documents are not enough by themselves.

Before designing, use a browser/computer-use capable tool to **open the current live sites** and visually inspect them at desktop width:

1. https://www.upwork.com/
2. https://linear.app/
3. https://vercel.com/
4. https://www.factory.ai/ (or the current canonical Factory site if redirected)
5. https://www.raycast.com/
6. https://hyperstudio.co/ (or the live Hyperstudio site referenced by canon if the domain redirects)

Also read and follow `docs/PROTOTYPE_V2_REFERENCE_ADDENDUM.md` for all additional mandatory references, including Mercury and Korean marketplace references such as Kmong, Wishket, and Soomgo.

For each reachable site, capture or inspect the actual rendered homepage/landing experience. Do not rely on memory, text summaries, page source alone, or repository notes alone.

Create `docs/PROTOTYPE_V2_LIVE_REFERENCE_AUDIT.md` with concrete observations of:

- first viewport composition
- hero scale
- grid and alignment
- whitespace rhythm
- typography scale/weight/line breaks
- navigation density
- CTA hierarchy
- image/video framing
- border/radius/shadow treatment
- use of light/dark contrast
- motion/interaction behavior
- what feels premium vs templated
- what KAPAPI should borrow as a principle
- what KAPAPI must not copy
- **what the reference communicates visually that Prototype v1 tried to explain with prose**

For Upwork specifically, compare against the current live first page, not just `UPWORK_FIRST_TOUCH_REFERENCE.md`.

**No application implementation may start until this live-reference audit exists.**

---

# 3. Canon read order

After tool inventory and live reference capture, read:

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
11. **`docs/PROTOTYPE_V2_VISUAL_COMMUNICATION_RULES.md`**
12. `docs/QA_CHECKLIST.md`
13. `TASK_QUEUE.md`
14. `docs/LEGAL.md`
15. `docs/VALIDATION.md`
16. `docs/REFERENCE_BOARD.md`

Product behavior comes from the latest product canon. Identity roles are universal-user / per-QUEST roles. Public UX is light-first. Default GM flow uses KAPAPI auto-routing.

`PROTOTYPE_V2_VISUAL_COMMUNICATION_RULES.md` is mandatory for all public landing surfaces.

---

# 4. Do NOT reuse Prototype v1 implementation

Forbidden sources for v2 implementation:

- v1 React/Next application code
- v1 CSS/tokens
- v1 component hierarchy
- v1 hero split composition
- v1 black routing card composition
- v1 visual QA score as evidence of quality
- v1 screenshots as a layout template

You may inspect v1 only after the live-reference audit, and only to document failures such as:

- visually generic B2B/internal-tool appearance
- weak hero/media integration
- insufficient brand/world presence
- overly safe typography/spacing
- generic SaaS blue CTA feeling
- public landing reading like logged-in product chrome
- **explaining the product with headings, paragraphs and numbered columns instead of visually demonstrating it**

Do not perform a cosmetic reskin. **Start over.**

---

# 5. Visual exploration BEFORE code

Do not repeat the v1 `text-only hero structures → immediately scaffold` workflow.

Before application code, create **three genuinely different visual directions** for the landing experience using the strongest available design capability in the environment.

Each direction must be visually inspectable, not only prose. Depending on available tools this may be:

- rendered HTML prototype
- disposable visual prototype route
- high-fidelity design artifact
- screenshot/mock composition produced with an appropriate design tool

Do not use these as final code yet.

All three must satisfy product truth but should explore materially different art direction/composition.

Evaluate each beside live reference screenshots/observations on:

- immediate visual impact
- 3-second comprehension
- KAPAPI distinctiveness
- world-building potential
- premium quality
- task-entry dominance
- video integration
- universal-user coherence
- mobile viability
- distance from generic SaaS/template output
- **ability to communicate the product visually with minimal prose**

Choose the strongest only after visual comparison.

Record this in `docs/PROTOTYPE_V2_VISUAL_GATE.md`.

**If none looks clearly better than Prototype v1, do not proceed. Iterate the directions first.**

---

# 6. Visual-first communication is mandatory

Follow `docs/PROTOTYPE_V2_VISUAL_COMMUNICATION_RULES.md`.

Core rule:

> **If the product can show it, do not explain it in a paragraph.**

The public landing page is not documentation, a strategy memo, or a pitch-deck text slide.

The user must not have to read long copy to understand KAPAPI.

Show the thesis through:

- real product states
- files and result artifacts
- BID arrival
- PRICE × DELIVERY
- routing
- eligibility/trust evidence
- PLAYER assignment
- work state
- notification/result arrival
- motion and transitions
- hero footage

Use text to label what the visual has already made understandable.

For every public section:

1. make one dominant visual object / interaction carry the idea,
2. keep the headline short,
3. use at most 0–2 short supporting sentences by default,
4. avoid long body paragraphs,
5. avoid four-column numbered explanation grids unless the content genuinely cannot be demonstrated visually,
6. perform a copy-deletion pass after implementation.

If deleting the paragraph makes the section unintelligible, improve the visual communication before restoring prose.

The rejected Prototype v1 section pattern is:

`large headline → paragraph → 01/02/03/04 columns → paragraphs → more explanatory text`.

Do not repeat it.

---

# 7. Hero requirement

The hero must no longer read as:

`left form | right black dashboard card`.

That specific v1 composition is rejected.

The target is a coherent premium first-view experience where:

- task hand-off is immediately understandable
- media feels art-directed rather than inserted as a widget
- real KAPAPI UI can emerge from or connect to the film naturally
- KAPAPI world/state becomes visible as work starts moving
- the page is light-first
- sapphire behaves as a signal, not generic SaaS blue decoration
- the public header feels like a landing experience, not an authenticated internal app

Use the user-provided approved hero footage as the human narrative source when available.

Generated/abstract device UI is not product truth. Replace/cover it with real KAPAPI UI where needed.

Narrative:

`user hands off work → user leaves / does something else → KAPAPI handles the messy middle → result reaches user → user checks it → subtle satisfaction`.

No `GOOD DONE`, celebration copy, confetti, trophy, or exaggerated reaction.

---

# 8. KAPAPI world / identity rules

World-building is structural, not decorative.

Use gradual language/state grammar:

- normal Korean first
- `QUEST #... CREATED`
- `BIDS RECEIVED`
- `ROUTING`
- `PLAYER ASSIGNED`
- `TIME ATTACK`
- `QUEST COMPLETE`
- LEVEL/EXP stronger on execution-side surfaces

Never use fantasy/RPG art, coins, swords, rarity tiers, gamer RGB, game-launcher composition.

KAPAPI has **one universal user identity**.

GM and PLAYER are contextual roles per QUEST, never permanent account classes. No signup role fork, no separate GM/PLAYER account, no mode switch that changes identity.

---

# 9. Core product behavior

Default flow:

`work request → scope confirmation → submit → GM routine sourcing ends → PRICE × DELIVERY BIDs → KAPAPI auto-routing → execution → result → accept/revision`.

Do not restore routine GM manual PLAYER selection.

Routing must look inspectable and evidence-based, not opaque AI magic.

Architecture/CAD is a concrete proof case below the hero, not the brand/category identity.

---

# 10. Implementation discipline

After the visual gate passes:

- scaffold a fresh application on `feat/prototype-v2`
- use clean custom components and design tokens derived from the approved visual direction
- do not copy v1 files
- implement the deterministic prototype loop
- implement desktop and mobile together
- use motion only for state/continuity
- keep public first paint independent from hero video download
- preserve accessibility/reduced-motion paths

Use the repository task queue as scope guidance, but when old task wording conflicts with this rebuild handoff or current canon, current canon/rebuild rules win.

---

# 11. Mandatory rendered comparison loop

After each major public surface, use browser/computer visual inspection against the **actual rendered app**.

For the landing in particular:

1. capture desktop screenshot
2. capture mobile screenshot
3. compare to live reference audit
4. compare to approved v2 visual direction
5. explicitly ask: `Does this still look like a generic B2B/SaaS template?`
6. explicitly ask: `Am I explaining something in prose that should be shown visually?`
7. remove unnecessary copy and check whether the visual still communicates the idea
8. if either answer reveals a weakness, redesign before continuing

Compilation is not visual QA.

Do not self-award a 9/10 visual score without screenshots and comparative evidence.

---

# 12. Preview deployment

When local implementation passes:

- push `feat/prototype-v2`
- deploy to Vercel Preview
- do not merge main
- do not promote Production intentionally
- inspect the actual deployed Preview on desktop/mobile
- verify hero video, fonts, animation, responsive behavior and core loop

Stop at founder visual review.

---

# 13. Final rejection gate

Do NOT call v2 ready if the first screen or any major public section primarily reads as any of:

- generic B2B internal tool
- generic SaaS
- stock Next.js/Tailwind/shadcn demo
- Upwork clone
- Kmong clone
- developer console
- black-card dashboard composition
- purple AI startup
- game launcher
- CAD-only service
- documentation page
- strategy memo
- pitch-deck text slide
- numbered explanatory grid with paragraph walls

Reject a section if more than half of its meaning is carried by prose instead of interface, media, motion, or product artifacts.

The founder should be able to look at the first viewport and feel both:

1. `여기에 일을 맡기면 되는구나.`
2. `이건 KAPAPI라는 자기 세계가 있는 제품이다.`

And for subsequent sections:

> **The eye should understand first. The text should only confirm what the eye already understood.**

The target is not merely correct. It must be visually compelling enough to survive side-by-side comparison with the reference sites.
