/**
 * Canon propagation audit.
 *
 * A decision is not propagated when it is written down — it is propagated when no
 * document still says the opposite. This walks every doc and reports, per file,
 * which class of stale statement it still carries.
 *
 *   A  legacy vocabulary removed by D-034 (GM / PLAYER / QUEST / BID / LEVEL / EXP)
 *   B  the confirmation flow removed by D-035
 *   C  describes the client flow without the 실행 계약 required by D-033.1
 *   D  the superseded hero (compositing, the old hero copy, 의뢰 등록)
 *   E  예산 상한 as the client's input, replaced by the contract price
 *
 * A file whose header declares it SUPERSEDED or HISTORICAL is skipped: keeping the
 * record is the point. Negations ("there is no …", "do not write …") are exempt
 * too, because stating that something is forbidden is how the canon forbids it.
 *
 *   node scripts/canon-audit.mjs
 */
import { readFileSync, globSync } from "node:fs";

const files = [...globSync("docs/*.md"), ...globSync("*.md")]
  .filter((f) => !/^(AGENTS|CLAUDE)\.md$/.test(f));

const CLASSES = [
  ["A vocab(D-034)", /\bGM\b|\bPLAYER\b|\bQUEST\b|\bBID\b|\bREWARD\b|\bEXP\b|TIME ATTACK|\bLV\.|LEVEL \/ EXP/],
  ["B removed-flow(D-035)", /발주자 확정|발주자가 확정|이 작업자로 진행|다른 제안 보기|추천을 확인|client confirms|GM confirm/],
  ["D stale-hero", /사람을 찾지 말고, 할 일을 올리세요|의뢰 등록|합성|compositing onto|laptop screen/],
  ["E budget-ceiling", /예산 상한/],
];

const EXEMPT = /Historical|previously used|D-03[0-9]|Superseded|superseded|no longer|~~|QUEST NETWORK|imported from|restated|not a failure|unaffected|zero matches|querying|capability ladder|back-office|not a claim|Removing|삭제됨|removed by|removed the|제거|없습니다|아닙니다|nowhere|not on the|There is no|Do \*\*not\*\*|Explicitly \*\*not\*\*|Do not/;

/**
 * Reviewed exceptions: lines that match a pattern but are correct as written.
 * Each needs a reason. Loosening the patterns instead would make this tool green
 * by making it blind.
 */
const REVIEWED = new Map([
  ["docs/DECISIONS.md", "D-028 and D-032 flow blocks — decision history, annotated in place as superseded by D-035"],
  ["docs/PRODUCT.md", "the capability ladder — the business plan, not the prototype surface"],
  ["docs/ROADMAP.md", "the capability ladder — same"],
  ["TASK_QUEUE.md", "lists 이 작업자로 진행 / 다른 제안 보기 as explicitly forbidden on the 발주자 surface"],
  ["docs/HERO_MEDIA.md", "records the superseded compositing structure it replaced"],
  ["docs/PROTOTYPE_V2_CONTENT_NECESSITY_AUDIT.md", "records what was removed from the hero"],
  ["docs/PROTOTYPE_V2_LIVE_REFERENCE_AUDIT.md", "quotes vocabulary observed on other Korean marketplaces, not KAPAPI copy"],
  ["docs/PROTOTYPE_V2_TOOL_AUDIT.md", "records the research that tracked the laptop screen"],
]);

const rows = [];
for (const f of files) {
  const txt = readFileSync(f, "utf8");
  if (/^Status:\s*\*\*(SUPERSEDED|HISTORICAL)/mi.test(txt.slice(0, 900))) continue;

  const lines = txt.split("\n");
  const hits = [];
  for (const [name, re] of CLASSES) {
    const n = lines.filter((l) => re.test(l) && !EXEMPT.test(l)).length;
    if (n) hits.push(`${name}:${n}`);
  }
  const describesClientFlow = /업무 등록|work request|발주자.*→|client flow/.test(txt);
  if (describesClientFlow && !/실행 계약|Execution Contract/.test(txt)) hits.push("C no-contract");
  if (hits.length && !REVIEWED.has(f.split("\\").join("/"))) rows.push([f, hits.join("  ")]);
}

if (rows.length === 0) {
  console.log(`\n${files.length} docs checked. Canon fully propagated.\n`);
} else {
  const w = Math.max(...rows.map((r) => r[0].length));
  for (const [f, h] of rows) console.log(`${f.padEnd(w)}  |  ${h}`);
  console.log(`\n${rows.length} of ${files.length} docs still carry a stale statement.\n`);
  process.exitCode = 1;
}
