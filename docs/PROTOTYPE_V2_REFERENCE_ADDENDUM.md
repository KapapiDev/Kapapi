# Prototype v2 — Live Reference Addendum

Status: **mandatory for `feat/prototype-v2` rebuild**  
Updated: 2026-09-03

This addendum extends `REBUILD_V2_HANDOFF.md`.

The v2 rebuild must study both **global premium-product references** and **real Korean marketplace products**. KAPAPI is intended for the Korean market first, so proven Korean marketplace interaction patterns, language, trust cues, category/navigation conventions, transaction affordances and mobile expectations must be treated as first-class evidence rather than ignored in favor of global SaaS aesthetics.

---

# 1. Mandatory global live references

Before visual design or application implementation, Claude Code must open and visually inspect the current live homepages of:

1. https://www.upwork.com/
2. https://linear.app/
3. https://vercel.com/
4. https://www.factory.ai/ (or the current canonical Factory site if redirected)
5. https://www.raycast.com/
6. https://hyperstudio.co/ (or the current Hyperstudio site referenced by canon if redirected)
7. https://mercury.com/

Mercury is especially relevant to KAPAPI for **premium B2B calm, trust, visual restraint, typography, spacing, and polished product/data surfaces**. Do not copy banking metaphors, finance-specific UI, brand colors, or recognizable Mercury compositions.

---

# 2. Mandatory Korean marketplace live references

Claude Code must also open and directly inspect the current live Korean products below before designing:

1. **크몽 / Kmong** — https://kmong.com/
2. **위시켓 / Wishket** — https://www.wishket.com/
3. **숨고 / Soomgo** — https://soomgo.com/

These are not optional competitor notes. They are mandatory product/UX references for how Korean users already understand:

- outsourcing / service purchase,
- expert discovery,
- request creation,
- categories,
- trust and reviews,
- profile credibility,
- price / estimate expectations,
- task/project descriptions,
- mobile information density,
- Korean CTA wording,
- transaction reassurance,
- empty-state and onboarding language,
- marketplace navigation.

Where publicly accessible without login, inspect more than only the homepage. At minimum, attempt to inspect:

- homepage / first viewport,
- category or discovery surface,
- service / project / expert detail surface,
- request/posting entry flow,
- trust/review/profile treatment.

If login or anti-bot protection blocks a surface, record the attempted access and use the reachable public surfaces instead. Do not silently replace live inspection with memory or text summaries.

---

# 3. Korean-market extraction rule

KAPAPI should **reuse proven Korean marketplace conventions when they solve a real Korean user problem and do not conflict with current canon**.

This means Claude should actively ask:

> “What does Kmong/Wishket/Soomgo already teach Korean users, and what should KAPAPI preserve rather than reinvent?”

Examples of things that may be worth borrowing as product conventions:

- familiar Korean marketplace wording,
- category labels and browsing logic,
- trust evidence ordering,
- review and transaction-history presentation,
- request-posting expectations,
- quote / budget / deadline framing,
- profile credibility cues,
- reassurance around payment, revisions, delivery and disputes,
- mobile interaction patterns,
- density and hierarchy that Korean users already tolerate or expect.

But do not blindly copy:

- brand colors,
- logos,
- exact page layouts,
- exact card geometry,
- exact copy,
- recognizable illustrations,
- proprietary assets,
- client-side freelancer-selection mechanics that conflict with execution-contract approval and KAPAPI's internal procurement,
- permanent buyer/seller account assumptions that conflict with universal identity.

The target is **familiar transaction grammar + unmistakably KAPAPI execution**.

---

# 4. Reference analysis requirements

Analyze every mandatory live reference using the criteria in `REBUILD_V2_HANDOFF.md`:

- first viewport composition,
- hero scale,
- grid and alignment,
- whitespace rhythm,
- typography scale, weight and line breaks,
- navigation density,
- CTA hierarchy,
- image/video/product framing,
- border/radius/shadow treatment,
- light/dark contrast,
- motion and interaction behavior,
- information density,
- trust mechanics,
- mobile behavior where inspectable,
- what feels premium vs templated,
- what feels familiar to Korean users,
- what KAPAPI should borrow as a principle,
- what KAPAPI must not copy.

Create a distinct section in `docs/PROTOTYPE_V2_LIVE_REFERENCE_AUDIT.md` called:

> `KOREAN MARKETPLACE PATTERN EXTRACTION`

It must explicitly compare Kmong, Wishket and Soomgo and record:

1. proven patterns KAPAPI should preserve,
2. friction KAPAPI should remove,
3. patterns superseded by execution-contract approval and KAPAPI's internal procurement,
4. patterns superseded by universal-user identity,
5. Korean-language and trust conventions worth carrying into KAPAPI.

---

# 5. Visual-direction gate requirement

The three v2 visual directions are incomplete unless they have been evaluated against **both groups**:

- global premium references,
- Korean marketplace references.

A direction should fail if it looks beautiful beside Linear/Mercury but feels alien to Korean marketplace users.

A direction should also fail if it looks familiar beside Kmong/Wishket/Soomgo but visually collapses into a generic Korean marketplace clone.

The desired balance is:

> **Korean marketplace familiarity at the transaction layer + premium global product quality at the visual layer + KAPAPI's execution-contract and result experience.**

The final design should feel like a Korean user immediately knows how to use it, while also feeling materially more premium, simpler and more alive than incumbent local marketplaces.
