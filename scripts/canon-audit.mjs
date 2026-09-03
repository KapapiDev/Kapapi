/**
 * Targeted checks for D-033.1 / D-034 / D-035; not a semantic proof of canon.
 * Run: node scripts/canon-audit.mjs [repository-root]
 * Test: node --test scripts/canon-audit.test.mjs
 *
 * Scans root Markdown and all Markdown under docs/ and research/. A Status:
 * **SUPERSEDED ...** / **HISTORICAL ...** banner immediately after a heading
 * exempts that heading's section (a document-title banner covers the document).
 * Smaller historical excerpts require a reason and a matching closing marker:
 * <!-- canon-audit: historical-start superseded by D-033.1 -->
 * ...
 * <!-- canon-audit: historical-end -->
 * Unclosed/malformed markers fail the audit, rather than hiding current text.
 */
import { readFileSync, readdirSync } from "node:fs";
import { resolve, relative, join } from "node:path";
import { fileURLToPath } from "node:url";

const VOCAB = /(?<![A-Za-z0-9])(?:GM|PLAYERS?|QUESTS?|BID[Ss]?|REWARDS?|LEVEL|EXP|LV\.|TIME[ _-]ATTACK)(?![A-Za-z0-9])/g;
const CONTRACT = /실행\s*계약|execution\s+contract|계약\s*(?:승인|수락|확정)|contract\s*(?:approval|acceptance|approved)|(?:approv|accept)\w*\s+(?:the\s+)?contract/i;
const CHOICE = [
  /이 작업자로 진행|다른 제안 보기|추천을 확인/g,
  /발주자(?:가|는)?\s*(?:여러\s*)?(?:작업자|제안|후보|프로필)[^.!?;\n]{0,45}?(?:비교|선택|선정|확정)/g,
  /발주자(?:가|는)?\s*추천[^.!?;\n]{0,35}?(?:확인|확정|승인|수락)/g,
  /\b(?:client|customer|issuer)s?\s+(?:(?:can|must|should|will|may|then|still|optionally|now|also)\s+)*(?:compares?|chooses?|picks?|selects?|confirms?|approves?|accepts?)\s+(?:the\s+|a\s+|recommended\s+|several\s+|multiple\s+)*(?:workers?|providers?|proposals?|profiles?|recommendations?)\b/gi,
];
const BARE_CONFIRM = /발주자(?:가|는)?\s*확정|\bclient\s+confirms?\b(?=\s*(?:$|→|->|[.!?;,:]))/gi;
const RECOMMENDATION_FLOW = /(?:receive(?:s|d)?\s+(?:the\s+)?(?:proposals?(?:\/recommendations?)?|recommendations?)|(?:KAPAPI|카파피)\s*(?:추천|recommends?|recommendation)|recommendations?)\s*(?:→|->)\s*(?:(?:the\s+)?client\s+|발주자\s+)?(?:confirms?|확정)/i;

// Negation is local to a clause. A negative sentence must not pardon a later
// positive instruction on the same line, or any other part of the document.
function clauses(line) {
  return line.split(/(?<=[.!?;])\s+|\s+(?:but|however|instead|하지만|그러나)\s+|,\s*(?:but|however)\s+|,\s*(?=(?:the\s+)?client\b|발주자)|\s+and\s+(?=(?:the\s+)?client\b|발주자)/i);
}

function prohibited(text) {
  const plain = text.replace(/[*\x60~]/g, "");
  return /\b(?:do not|does not|must not|should not|cannot|never|no longer|not allowed|not permitted|forbidden)\b|\b(?:is|are|was|were|has been|have been)\s+(?:removed|rejected)\b|\bno\s+(?:GM|PLAYER|QUEST|BID|REWARD|LEVEL|EXP|TIME|client|worker|proposal)|there is no\b|explicitly not (?:on|in|for)|not (?:a|the) (?:client|worker|selection)|(?:금지|삭제|제거)(?:됨|된|한다|합니다|할 것|하라)?|(?:하지|시키지|요구하지|보이지|노출하지|선택하지|비교하지|확정하지)\s*않|(?:쓰지|넣지|표시하지)\s*(?:마|않)|없(?:다|습니다)/i.test(plain);
}

function forbiddenIntro(text) {
  const plain = text.trim().replace(/\*/g, "");
  return /^#{1,6}\s+(?:Forbidden|Banned|금지|사용 금지|삭제 대상)(?:\b|:)/i.test(plain)
    || /^(?:Forbidden|Banned|Do not (?:use|show|include)(?: the following)?|Never (?:use|show)|금지|사용 금지|삭제 대상)\s*:\s*$/i.test(plain);
}

function historyMask(lines, add) {
  const hidden = new Set();
  let historicalDocument = false;
  const headings = [];
  let fence = null;
  for (let i = 0; i < lines.length; i++) {
    const marker = lines[i].match(/^\s*(\x60{3,}|~{3,})/);
    if (marker) {
      if (!fence) fence = marker[1][0];
      else if (fence === marker[1][0]) fence = null;
      continue;
    }
    if (fence) continue;
    const heading = lines[i].match(/^(#{1,6})\s+/);
    if (heading) headings.push({ line: i, depth: heading[1].length });
    if (!/^\s*(?:>\s*)?Status:\s*\*\*(?:SUPERSEDED|HISTORICAL)\b/i.test(lines[i])) continue;
    const enclosing = headings.at(-1) ?? { line: -1, depth: 0 };
    const preamble = lines.slice(enclosing.line + 1, i);
    if (preamble.some((line) => line.trim() && !/^(?:Updated|Date|Owner):/i.test(line))) {
      add(i, "H history-marker", "History status must precede its section's body.");
      continue;
    }
    let end = lines.length;
    let inCode = null;
    const fileBanner = enclosing.line === -1 || (enclosing.depth === 1 && headings.length === 1
      && lines.slice(0, enclosing.line).every((line) => !line.trim()));
    if (fileBanner) historicalDocument = true;
    for (let j = i + 1; j < lines.length; j++) {
      const code = lines[j].match(/^\s*(\x60{3,}|~{3,})/);
      if (code) {
        if (!inCode) inCode = code[1][0];
        else if (inCode === code[1][0]) inCode = null;
      }
      if (inCode) continue;
      const next = lines[j].match(/^(#{1,6})\s+/);
      if (!fileBanner && next && next[1].length <= enclosing.depth) { end = j; break; }
    }
    for (let j = Math.max(0, enclosing.line); j < end; j++) hidden.add(j);
  }

  let start = null;
  for (let i = 0; i < lines.length; i++) {
    if (!lines[i].includes("canon-audit: historical-")) continue;
    const open = lines[i].match(/^\s*<!-- canon-audit: historical-start (.+?) -->\s*$/);
    if (open && start === null) { start = i; continue; }
    if (/^\s*<!-- canon-audit: historical-end -->\s*$/.test(lines[i]) && start !== null) {
      for (let j = start; j <= i; j++) hidden.add(j);
      start = null;
      continue;
    }
    add(i, "H history-marker", "Malformed, nested, or unmatched history marker.");
  }
  if (start !== null) add(start, "H history-marker", "Historical excerpt has no closing marker.");
  return { hidden, historicalDocument };
}

export function auditDocument(source, file = "document.md") {
  const lines = source.split(/\r?\n/);
  const findings = [];
  const add = (line, rule, message) => {
    if (!findings.some((hit) => hit.line === line + 1 && hit.rule === rule)) {
      findings.push({ file, line: line + 1, rule, message, text: lines[line].trim() });
    }
  };
  const { hidden, historicalDocument } = historyMask(lines, add);
  const active = lines.map((line, i) => hidden.has(i) ? "" : line);
  let forbiddenList = false;
  let section = "";
  let paragraphStart = 0;
  let continuedProhibition = false;

  function checkFlow(text, line, context) {
    const parts = clauses(text);
    if (parts.length > 1) {
      for (const part of parts) checkFlow(part, line, context);
      return;
    }
    if (prohibited(text)) return;
    if (RECOMMENDATION_FLOW.test(text)
      && (/client|발주자/i.test(text + " " + context) || !/internal|내부|worker|작업자|back.office|operator/i.test(text + " " + context))) {
      add(line, "B client-choice", "Recommendation/proposal receipt still leads to client confirmation.");
    }
    if (CONTRACT.test(text)) return;
    const input = /업무\s*(?:입력|등록|요청)|work request|uploads?(?: files)?/i.test(text);
    const detail = /진행\s*(?:상황|상태)?|배정|수행|progress|assignment|execution/i.test(text);
    const client = /발주자|client|customer/i.test(text + " " + context);
    const publicInput = /업무\s*입력|work request/i.test(text)
      && !/작업자\s*(?:화면|흐름)|worker (?:flow|screen)|내부|internal|제안|proposal/i.test(text + " " + context);
    if (input && detail && (client || publicInput)) {
      add(line, "C missing-contract", "Detailed client flow reaches progress/execution without an execution contract.");
    }
  }

  for (let i = 0; i < active.length; i++) {
    const line = active[i];
    if (/^#{1,6}\s+/.test(line)) {
      section = line;
      forbiddenList = forbiddenIntro(line);
    } else if (forbiddenIntro(line)) {
      forbiddenList = true;
    } else if (line.trim() && forbiddenList && !/^\s*(?:[-*]|\d+\.)\s/.test(line)) {
      forbiddenList = false;
    }
    for (const clause of clauses(line)) {
      const negativeContinuation = continuedProhibition && !/^\s*(?:[-*]\s*)?(?:the\s+)?(?:client|발주자|show|use|display)\b/i.test(clause);
      if (prohibited(clause) || forbiddenList || negativeContinuation) continue;
      const vocab = [...clause.matchAll(VOCAB)].map((hit) => hit[0]);
      if (vocab.length) add(i, "A vocabulary", "Retired product vocabulary: " + [...new Set(vocab)].join(", ") + ".");
      const choice = CHOICE.some((pattern) => [...clause.matchAll(pattern)].length > 0);
      const bare = !/contract|계약|result|결과|delivery|납품/i.test(clause)
        && [...clause.matchAll(BARE_CONFIRM)].length > 0;
      if (choice || bare) add(i, "B client-choice", "Client selection or confirmation of a worker/recommendation remains.");
    }
    continuedProhibition = prohibited(line) && /[, :]$/.test(line.trim());

    // Each arrow chain stands alone. A contract in an appendix or a separate
    // flow must not excuse an earlier input -> progress sequence.
    if (/(?:→|->)/.test(line) && !/^\s*(?:→|->)/.test(line)) {
      let flow = line;
      for (let j = i + 1; /^\s*(?:→|->)/.test(active[j] ?? ""); j++) flow += " " + active[j];
      checkFlow(flow, i, section);
    } else if (/^\s*(?:→|->)/.test(line) && !/(?:→|->)/.test(active[i - 1] ?? "")) {
      let flow = active[i - 1] + " " + line;
      for (let j = i + 1; /^\s*(?:→|->)/.test(active[j] ?? ""); j++) flow += " " + active[j];
      checkFlow(flow, i - 1, section);
    }

    if (!line.trim() || /^#{1,6}\s+/.test(line) || i === active.length - 1) {
      const paragraph = active.slice(paragraphStart, i + (i === active.length - 1 ? 1 : 0)).join(" ");
      if (/(?:client|발주자)[\s\S]{0,100}(?:uploads?|입력|업로드|등록)[\s\S]{0,180}(?:next|then|바로|곧바로|즉시)[\s\S]{0,100}(?:progress|result|진행|결과)/i.test(paragraph)
        && !CONTRACT.test(paragraph) && !prohibited(paragraph)) {
        add(paragraphStart, "C missing-contract", "Client input goes directly to progress/result without a contract approval step.");
      }
      paragraphStart = i + 1;
    }
  }
  return { findings, historicalDocument, historicalLines: hidden.size, currentLines: lines.length - hidden.size };
}

export function collectDocuments(root) {
  const files = [];
  function visit(directory, recursive) {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      if (entry.isSymbolicLink()) continue;
      const path = join(directory, entry.name);
      if (entry.isFile() && /\.md$/i.test(entry.name)) files.push(path);
      else if (recursive && entry.isDirectory()) visit(path, true);
    }
  }
  visit(root, false);
  for (const entry of readdirSync(root, { withFileTypes: true })) {
    if (["docs", "research"].includes(entry.name) && entry.isDirectory() && !entry.isSymbolicLink()) {
      visit(join(root, entry.name), true);
    }
  }
  return files.sort();
}

export function runAudit(root) {
  return collectDocuments(root).map((path) => ({
    file: relative(root, path).replaceAll("\\", "/"),
    ...auditDocument(readFileSync(path, "utf8"), relative(root, path).replaceAll("\\", "/")),
  }));
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const results = runAudit(resolve(process.argv[2] ?? "."));
  const findings = results.flatMap((result) => result.findings);
  for (const hit of findings) console.log(hit.file + ":" + hit.line + " [" + hit.rule + "] " + hit.message + "\n  " + hit.text);
  const historical = results.filter((result) => result.historicalLines > 0);
  const archived = results.filter((result) => result.historicalDocument).length;
  console.log("\n" + results.length + " Markdown documents inspected: " + (results.length - archived) + " current/mixed, " + archived + " historical documents.");
  console.log(historical.length + " documents contain explicitly bounded history (" + historical.reduce((sum, result) => sum + result.historicalLines, 0) + " lines excluded).");
  console.log(findings.length + " targeted findings in " + new Set(findings.map((hit) => hit.file)).size + " documents. Manual review remains necessary for semantic consistency.");
  process.exitCode = findings.length ? 1 : 0;
}
