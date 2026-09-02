import assert from "node:assert/strict";
import { test } from "node:test";

import { FLAGSHIP_QUEST, QUESTS, USERS, bidsForCategory } from "./fixtures";
import { routeQuest } from "./routing";
import { buildScopeDraft, questFromScope } from "./scope";

/**
 * The routing policy is the one piece of real logic in the prototype, so it is
 * the one piece that gets a check. QA_CHECKLIST F1 requires a deterministic,
 * replayable route; F2 requires the decision to rest on more than one dimension.
 */

test("flagship QUEST routes 한지우 — not the cheapest, not the fastest", () => {
  const result = routeQuest(FLAGSHIP_QUEST, USERS);

  assert.equal(result.selected?.player.id, "u-han");

  const cheapest = [...FLAGSHIP_QUEST.bids].sort((a, b) => a.price - b.price)[0];
  const fastest = [...FLAGSHIP_QUEST.bids].sort(
    (a, b) => a.deliveryHours - b.deliveryHours,
  )[0];
  assert.notEqual(result.selected?.bid.id, cheapest.id, "lowest price must not auto-win");
  assert.notEqual(result.selected?.bid.id, fastest.id, "shortest delivery must not auto-win");
});

test("hard filters exclude before ranking, with an inspectable reason", () => {
  const { excluded } = routeQuest(FLAGSHIP_QUEST, USERS);
  const byPlayer = Object.fromEntries(excluded.map((c) => [c.player.id, c.excludedBecause]));

  // 이민재 bid 12H against a 6H deadline.
  assert.equal(byPlayer["u-lee"], "마감 시간 초과");
  // 최유나 has no NDA posture on file — a QUEST-level gate, not an identity gate.
  assert.equal(byPlayer["u-choi"], "보안·NDA 요건 미충족");
  assert.ok(excluded.every((c) => c.routingScore === 0), "excluded candidates are not scored");
});

test("routing is deterministic regardless of bid order", () => {
  const shuffled = { ...FLAGSHIP_QUEST, bids: [...FLAGSHIP_QUEST.bids].reverse() };
  const a = routeQuest(FLAGSHIP_QUEST, USERS);
  const b = routeQuest(shuffled, USERS);

  assert.equal(a.selected?.bid.id, b.selected?.bid.id);
  assert.deepEqual(
    a.eligible.map((c) => c.bid.id),
    b.eligible.map((c) => c.bid.id),
  );
});

test("every routed QUEST exposes rationale rows the GM can inspect", () => {
  for (const quest of Object.values(QUESTS)) {
    if (quest.bids.length === 0) continue;
    const { selected, rationale } = routeQuest(quest, USERS);
    assert.ok(selected, `QUEST #${quest.id} should route a PLAYER`);
    assert.ok(rationale.length >= 3, `QUEST #${quest.id} rationale is too thin`);
  }
});

test("fixtures already-assigned QUESTs agree with the routing policy", () => {
  for (const quest of Object.values(QUESTS)) {
    if (!quest.assigneeId || quest.bids.length === 0) continue;
    const { selected } = routeQuest(quest, USERS);
    assert.equal(
      selected?.player.id,
      quest.assigneeId,
      `QUEST #${quest.id} fixture assignee disagrees with routeQuest`,
    );
  }
});

test("a QUEST built from free text always attracts routable BIDs", () => {
  const samples = [
    "손그림 도면을 CAD 현황도로 오늘 저녁까지 정리해주세요",
    "상세페이지 이미지 12종 배경 정리해주세요",
    "실측 데이터 엑셀로 정리 부탁드립니다",
    "회사소개서 정리해주세요",
  ];

  for (const text of samples) {
    const draft = buildScopeDraft(text, []);
    const quest = questFromScope(draft, { id: "0219", issuerId: "u-kim", files: [] });
    const { selected } = routeQuest(quest, USERS);
    assert.ok(selected, `"${text}" produced no routable BID`);
    assert.ok(selected.routingScore > 0);
    assert.ok(bidsForCategory(draft.categoryId).length >= 3);
  }
});

test("scope structuring surfaces missing information instead of inventing it", () => {
  const vague = buildScopeDraft("도면 좀 정리해주세요", []);
  assert.ok(vague.missingInfo.includes("마감 시각이 명시되지 않았습니다"));
  assert.ok(vague.missingInfo.includes("작업 원본 파일이 첨부되지 않았습니다"));

  const specific = buildScopeDraft(
    "손그림 도면 3장을 DWG 형식으로 오늘 19시까지 정리해주세요",
    [{ name: "a.jpg", kind: "JPG", size: "1 MB" }],
  );
  assert.equal(specific.missingInfo.length, 0);
  assert.equal(specific.categoryId, "cad");
  assert.equal(specific.timeAttack, true);
});
