# KAPAPI Prototype v2 — Tool Audit

Status: **record of what was actually run**
Branch: `feat/prototype-v2`
Updated: **2026-09-03**

The v2 directive required that every available capability be genuinely attempted, and
that "unavailable" be a finding rather than an assumption. This file records the
result of each attempt: what was used, what it produced, and — where a tool did not
work — the specific failure that was observed rather than a guess.

## 1. Used, with the work it produced

| Tool | Invocation | What it produced |
|---|---|---|
| `ui-ux-pro-max` (skill) | `search.py "korean two-sided marketplace landing" --design-system`, plus `--domain ux` / `--domain typography` / `--stack nextjs` passes | Palette and type direction cross-checked against the measured reference set. Its accessibility priorities (contrast, 44px targets, reduced-motion) became the assertions in `scripts/shots.mjs`. |
| `korean-skills:grammar-checker` (skill) | Full pass over `research/copy-draft-v1.md` | Corrections carried into `research/copy-final.md` and then into the components. Notably the 가운뎃점 rule: `·` is for paired/elided compounds, not for listing independent alternatives. |
| Chrome via `puppeteer-core` | `research/capture.mjs`, `research/shoot.mjs`, `research/screen-track.mjs`, `scripts/shots.mjs`, `scripts/loop.mjs` | 38 live sites opened, scrolled and measured at 1440×900 and 390×844; the three directions rendered and captured; the laptop screen tracked; the app captured and audited on 6 routes × 2 viewports; 14 canon invariants asserted end to end. |
| `ffmpeg` / `ffprobe` | Hero film compression and frame extraction | `public/media/kapapi-hero.mp4` at 836 KB, plus the still frames the corner tracking was solved against. |
| `sharp` | Screenshot crops and zooms during critique | The side-by-side and zoom evidence in `research/` used to reject Directions B and C, and to find the mobile panel defects. |
| Vercel MCP | `list_deployments`, `get_deployment` | Located the v2 Preview, confirmed `target: null` and `READY`, and read back the deployed SHA. |
| `node` / `npm` | `build`, `typecheck`, `lint`, `audit` | Clean on every commit pushed to the branch. |

## 2. Attempted and genuinely unavailable

These were called, not assumed. The observed failure is recorded so the next session
does not spend the same time rediscovering it.

| Tool | What happened | Consequence |
|---|---|---|
| `refero` MCP (`refero_search_screens`) | Returned `NO_SUBSCRIPTION` on a real call | Design references came from live sites opened in a browser instead, which the directive prefers anyway. |
| `browser-use` MCP | Server failed to connect: `CONNECTION_CLOSED` | Not needed; `puppeteer-core` drives the locally installed Chrome and covers the same ground. |
| Figma / Linear / Notion / Slack / Asana / Atlassian / Intercom MCPs | Require an interactive OAuth flow this session cannot run | No design source of record exists in those tools for this project, so nothing was lost. |
| Hyperstudio (reference site) | DNS failure, recorded in the audit rather than silently dropped | 37 of the 38 intended sites captured; the mandatory ten are otherwise complete. |

## 3. One failure that was mine, not the tool's

The `ui-ux-pro-max` skill message carried a script path that did not exist on this
machine. The directive's instruction not to declare a tool unavailable after one or
two failures is the reason this is in the "used" table rather than the "unavailable"
one: locating the real path (`~/.claude/skills/ui-ux-pro-max/scripts/search.py`) took
one `find`, and the skill then worked normally.

The same applies to the prototype capture harness. Video seeking returned 0 and the
first read was "Chrome will not seek a local file". The actual cause was my own static
server advertising `Accept-Ranges` while never implementing Range, so Chrome correctly
refused. Implementing 206 partial responses in `research/shoot.mjs` fixed it.

## 4. What no tool caught

Recorded because it is the useful part of an audit. Every automated harness passed
green — build, types, lint, `npm audit`, 6 routes × 2 viewports with no overflow, no
undersized touch target and no unnamed control, and 14/14 canon invariants — while the
hero's product panel was unreadable on a phone and its controls collided on a desktop.

The harnesses sample the landing at load. Nothing in them ever looked at the hero four
seconds in, which is where the entire product demonstration happens. The defects were
found by watching the deployed preview and screenshotting specific beats of the
timeline, then by measuring the video clock against the phase timeline directly. Green
automation described the parts of the page that were not the point.
