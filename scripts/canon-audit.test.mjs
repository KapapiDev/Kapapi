import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve, dirname, basename } from "node:path";
import { auditDocument, runAudit } from "./canon-audit.mjs";

const findings = (text, file) => auditDocument(text, file).findings;
const has = (text, rule) => findings(text).some((hit) => hit.rule.startsWith(rule));

test("retired labels include LEVEL, plurals and motion identifiers", () => {
  for (const label of ["GM", "PLAYER", "QUEST", "BID", "REWARD", "LEVEL", "EXP", "TIME ATTACK", "QUEST_PROGRESS", "PLAYER_SELECTED", "QUESTS"]) {
    assert.ok(has("Show " + label + " on the card.", "A"), label);
  }
});

test("the original BIDs label is retired while ordinary English bids stays valid", () => {
  assert.ok(has("Show BIDs on the current proposal card.", "A"));
  assert.deepEqual(findings("KAPAPI evaluates bids during internal procurement."), []);
});

test("ordinary technical English and internal procurement remain valid", () => {
  assert.deepEqual(findings([
    "Use CSS top-level selectors; skill level is informational.",
    "The video player makes a requestAnimationFrame call.",
    "Workers bid on suitable tasks; internal bid procurement informs routing.",
    "KAPAPI recommendation/routing improves with task history.",
    "Internal flow: work request → worker proposal → assignment → execution.",
  ].join("\n")), []);
});

test("client choice in Korean and English is reported with its real line", () => {
  for (const text of [
    "KAPAPI 추천 → 발주자 확정",
    "client confirms recommendation",
    "Client confirms the recommended worker.",
    "The client compares several proposals.",
    "Client can choose a worker.",
    "발주자가 작업자를 선택한다.",
    "발주자는 제안을 비교한 뒤 선택한다.",
    "발주자가 추천 작업자를 확정한다.",
    "이 작업자로 진행",
    "다른 제안 보기",
    "Client mental model: define work → receive recommendation → confirm → result",
    "receive proposals/recommendation → confirm",
    "client manually chooses → KAPAPI recommends → client confirms",
    "DEFINE WORK → RECEIVE RECOMMENDATION → CONFIRM → RESULT",
  ]) {
    const hits = findings("# Current\n\n" + text, "docs/PRODUCT.md");
    assert.ok(hits.some((hit) => hit.rule.startsWith("B") && hit.line === 3 && hit.file === "docs/PRODUCT.md"), text);
  }
});

test("contract and result approval are not worker choice", () => {
  assert.deepEqual(findings("Client confirms the execution contract.\nClient confirms the result.\n실행 계약은 발주자가 확정한다.\n발주자는 결과를 수락하거나 수정 요청한다."), []);
});

test("confirming price, time, scope and acceptance criteria is legitimate", () => {
  assert.deepEqual(findings("The client confirms the price and completion time.\nThe client confirms the scope and acceptance criteria."), []);
  assert.ok(has("The client confirms the recommended worker at that price.", "B"));
});

test("subjectless recommendation chains are caught across lines and after a negative clause", () => {
  assert.ok(has("# Client flow\ndefine work\n→ receive recommendation\n→ confirm\n→ result", "B"));
  assert.ok(has("No GM labels. Receive recommendation → confirm → result", "B"));
});

test("the original bilingual recommendation diagram is a stale client flow", () => {
  assert.ok(has("RECOMMENDATION → 발주자 CONFIRMS", "B"));
  assert.ok(has("# Client flow\nRECOMMENDATION\n→ 발주자 CONFIRMS\n→ ASSIGNED", "B"));
});

test("local prohibitions pass but mixed negative/positive clauses still fail", () => {
  assert.deepEqual(findings("Do not show PLAYER.\nThere is no 발주자 확정 step.\n발주자는 작업자를 비교하지 않습니다.\nDo not use:\n\n- GM\n- LEVEL / EXP"), []);
  assert.deepEqual(findings("Explicitly **not** on the 발주자 surface: proposal list, ranked comparison,\n`이 작업자로 진행`, `다른 제안 보기`."), []);
  for (const text of [
    "Do not show GM; client confirms recommendation.",
    "No PLAYER cards. Client chooses a worker.",
    "The client does not choose a worker, but client confirms recommendation.",
    "Do not use GM, client chooses a worker.",
    "Do not use GM, but show LEVEL.",
    "Do not show worker choice and client confirms recommendation.",
    "Removed comparison screens leave a flow where client chooses a worker.",
    "The old screen was removed and client confirms recommendation.",
    "Do not show a worker selector,\nClient confirms recommendation.",
  ]) assert.ok(findings(text).length > 0, text);
});

test("mentions of decisions, history, removals elsewhere do not exempt a document", () => {
  for (const file of ["docs/DECISIONS.md", "docs/PRODUCT.md", "docs/ROADMAP.md", "TASK_QUEUE.md"]) {
    assert.ok(findings("D-035 applies. Previously used copy was removed.\nClient confirms recommendation.", file).some((hit) => hit.rule.startsWith("B")), file);
  }
});

test("a document banner exempts the document and a section banner stops at the next peer heading", () => {
  assert.deepEqual(findings("# Old draft\n\nStatus: **SUPERSEDED — by D-033.1**\n\nGM → PLAYER\n## Old flow\nclient confirms recommendation"), []);
  const hits = findings("# Mixed\n\n## Old flow\nStatus: **SUPERSEDED by D-033.1**\nGM → client confirms recommendation\n\n## Current flow\nclient confirms recommendation");
  assert.deepEqual(hits.map((hit) => [hit.line, hit.rule]), [[8, "B client-choice"]]);
  const old = auditDocument("# QUEST draft\n\nStatus: **SUPERSEDED — by D-033.1**\n\n# GM view\nclient confirms recommendation");
  assert.deepEqual(old.findings, []);
  assert.equal(old.historicalDocument, true);
  assert.ok(has("# SUPERSEDED draft\nClient chooses a worker.", "B"));
  assert.deepEqual(findings("# Mixed\n## QUEST old flow\nStatus: **SUPERSEDED**\nGM\n## Current\n실행 계약 승인"), []);
});

test("bounded history can sit beside current text; missing close never hides it", () => {
  const open = "<!-- canon-audit: historical-start superseded by D-033.1 -->";
  const closed = open + "\nGM → client confirms recommendation\n<!-- canon-audit: historical-end -->\nClient selects a worker.";
  assert.deepEqual(findings(closed).map((hit) => [hit.line, hit.rule]), [[4, "B client-choice"]]);
  const hits = findings(open + "\nClient selects a worker.");
  assert.ok(hits.some((hit) => hit.rule.startsWith("H")));
  assert.ok(hits.some((hit) => hit.rule.startsWith("B")));
});

test("a late status cannot retroactively exempt a current section", () => {
  const hits = findings("# Current\nClient chooses a worker.\nStatus: **SUPERSEDED**");
  assert.ok(hits.some((hit) => hit.rule.startsWith("H")));
  assert.ok(hits.some((hit) => hit.rule.startsWith("B")));
});

test("history status inside a code sample cannot exempt current prose", () => {
  const text = "# Current\n```text\nStatus: **SUPERSEDED**\n```\nClient chooses a worker.";
  assert.ok(has(text, "B"));
  assert.equal(auditDocument(text).historicalDocument, false);
});

test("detailed client flows require a contract within that flow", () => {
  for (const text of [
    "업무 입력 → KAPAPI → 진행 상황 → 결과",
    "발주자 화면: 업무 등록 → 배정 → 결과",
    "## Client flow\n업무 요청\n→ KAPAPI\n→ 진행 상황\n→ 결과",
    "실행 계약 승인 is canonical.\n\n업무 입력 → KAPAPI → 진행 상황 → 결과",
    "발주자 화면: 업무 입력 → 배정 → 결과\n작업자 화면: 업무 목록 → 제안 → 실행 계약 → 수행",
    "The client uploads files and describes the work, and the next thing shown is progress and then the result.",
  ]) assert.ok(has(text, "C"), text);
});

test("shorthand, canonical flows and documents that do not explain the client flow pass", () => {
  for (const text of [
    "업무 입력 → KAPAPI → 결과",
    "## 발주자\n업무 입력 → 실행 계약 승인 → KAPAPI → 진행 상황 → 결과",
    "Client flow: work request → contract approval → assignment → result",
    "작업자 화면: 업무 목록 → 가격 + 완료시간 제안 → 배정 → 수행 → 제출",
    "내부 시장: 업무 등록 → 제안 → KAPAPI 선정 → 배정 → 결과",
    "Internal procurement: receive proposals → confirm → assignment",
    "The client uploads files, approves the execution contract, then sees progress and the result.",
    "The work request needs a title and files.",
  ]) assert.deepEqual(findings(text), [], text);
});

test("recursive discovery includes current research and root instructions; counts preserve history", () => {
  const root = mkdtempSync(join(tmpdir(), "kapapi-canon-audit-"));
  try {
    mkdirSync(join(root, "docs", "motion-sources"), { recursive: true });
    mkdirSync(join(root, "research", "nested"), { recursive: true });
    mkdirSync(join(root, "node_modules"));
    writeFileSync(join(root, "CLAUDE.md"), "Client chooses a worker.");
    writeFileSync(join(root, "docs", "motion-sources", "current.md"), "Show LEVEL.");
    writeFileSync(join(root, "research", "nested", "current.md"), "Show QUEST_PROGRESS.");
    writeFileSync(join(root, "docs", "old.md"), "# Old\nStatus: **HISTORICAL**\nShow GM.");
    writeFileSync(join(root, "node_modules", "ignored.md"), "Show PLAYER.");
    const results = runAudit(root);
    assert.equal(results.length, 4);
    assert.equal(results.flatMap((result) => result.findings).length, 3);
    assert.equal(results.filter((result) => result.historicalLines > 0).length, 1);
    assert.ok(results.some((result) => result.file === "research/nested/current.md"));
  } finally {
    const cleanupTarget = resolve(root);
    assert.equal(dirname(cleanupTarget), resolve(tmpdir()));
    assert.ok(basename(cleanupTarget).startsWith("kapapi-canon-audit-"));
    rmSync(root, { recursive: true, force: true });
  }
});
