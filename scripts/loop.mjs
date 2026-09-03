/**
 * Walk the prototype as a reviewer and assert the current D-032 invariants:
 * task-first discovery, PRICE + DELIVERY bids, KAPAPI recommendation, GM
 * confirmation before assignment, one universal account and honest claims.
 */
import assert from "node:assert/strict";
import puppeteer from "puppeteer-core";

const BASE = process.env.KAPAPI_BASE ?? "http://localhost:3220";
const CHROME = process.env.CHROME_PATH ?? "C:/Program Files/Google/Chrome/Application/chrome.exe";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const pass = [];
const ok = (m) => pass.push(`  PASS  ${m}`);

const text = (p) => p.evaluate(() => document.body.innerText);
const click = (p, needle) =>
  p.evaluate((n) => {
    const els = [...document.querySelectorAll("main button"), ...document.querySelectorAll("main a")];
    const el = els.find((b) => b.textContent?.includes(n));
    if (!el) throw new Error(`no control containing "${n}"`);
    el.click();
  }, needle);

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "shell",
  args: ["--autoplay-policy=no-user-gesture-required"],
});
const p = await browser.newPage();
await p.setViewport({ width: 1440, height: 900 });

try {
  // 1 — landing: current-stage claim + task-first supply entry
  await p.goto(BASE, { waitUntil: "networkidle2" });
  await sleep(1200);
  const home = await text(p);
  assert.match(home, /오늘은 어떤 일을 끝낼까요/, "hero headline missing");
  assert.match(home, /맞는 제안을 추천합니다/, "recommendation promise missing");
  assert.match(home, /의뢰 등록/, "primary action missing");
  assert.match(home, /작업 찾기/, "task-first supply entry missing");
  assert.match(home, /시장은 시작점입니다/, "outcome evolution proof missing");
  assert.match(home, /HUMAN WORKER · AI · AUTOMATION/, "resource-agnostic outcome proof missing");
  for (const banned of ["전문가 배정부터 결과 전달까지 카파피가 진행합니다", "QUEST NETWORK", "RESET", "이런 일들이 올라옵니다"]) {
    assert.ok(!home.includes(banned), `stale product copy on landing: ${banned}`);
  }
  ok("랜딩: task-first + recommendation + future outcome story");

  // 2 — describe work and verify structured QUEST/SOW
  await p.type("#work", "대외비 손그림 도면 3장을 현황도로 오늘 저녁 7시까지 정리해 주세요. DWG와 PDF 모두 필요합니다.");
  await click(p, "맡기기");
  await p.waitForFunction(() => location.pathname === "/new", { timeout: 6000 });
  await sleep(500);

  const scope = await text(p);
  for (const f of ["작업 범위", "제출 형식", "확인 기준", "마감", "예산 상한"]) assert.match(scope, new RegExp(f), `SOW field missing: ${f}`);
  assert.match(scope, /보안 서약 필요/, "confidential request should raise the security flag");
  assert.match(scope, /제안이 모이면 카파피가 가장 적합한 후보를 추천/, "post-submit model copy missing");
  ok("작업 사양: 범위·형식·확인 기준·마감·예산 정리됨");

  // 3 — post the QUEST
  await click(p, "이대로 등록하기");
  await sleep(500);
  const created = await text(p);
  assert.match(created, /업무가 등록되었습니다/, "confirmation missing");
  assert.match(created, /제안이 모이면 카파피가/, "recommendation expectation missing");
  assert.ok(!created.includes("결과가 준비되면 확인만"), "stale auto-routing promise survived");
  ok("등록 완료: 제안 → 추천 → 확인 흐름을 약속");

  // 4 — recommendation must exist before assignment
  await click(p, "제안과 추천 보기");
  await p.waitForFunction(() => location.pathname.startsWith("/quest/"), { timeout: 6000 });
  await p.waitForFunction(() => document.body.innerText.includes("카파피 추천"), { timeout: 12000 });
  const rec = await text(p);
  assert.match(rec, /왜 추천하나요/, "recommendation rationale missing");
  assert.match(rec, /이 작업자로 진행/, "GM confirmation control missing");
  assert.match(rec, /다른 제안 보기/, "alternatives control missing");
  assert.ok(!rec.includes("확정된 작업자"), "assignment happened before GM confirmation");
  ok("추천: 근거와 대안을 보여주고 아직 배정하지 않음");

  // 5 — GM confirms, then work starts and result arrives
  await click(p, "이 작업자로 진행");
  await sleep(300);
  const confirmed = await text(p);
  assert.match(confirmed, /확정된 작업자/, "confirmation did not create assignment");
  ok("확정: GM 확인 후 ASSIGNED");

  await p.waitForFunction(() => document.body.innerText.includes("작업을 시작했습니다"), { timeout: 8000 });
  await p.waitForFunction(() => document.body.innerText.includes("결과 파일이 도착했습니다"), { timeout: 12000 });
  const delivered = await text(p);
  assert.ok(!/\d{1,3}%[ \t]*(완료|진행)/.test(delivered), "fake progress percentage found");
  ok("작업 진행: 관찰 가능한 상태만, 가짜 퍼센트 없음");

  // 6 — revision, then acceptance
  await click(p, "수정 요청");
  await sleep(300);
  await click(p, "수정 요청 보내기");
  await sleep(400);
  assert.match(await text(p), /수정을 요청했습니다/, "revision state missing");
  await p.waitForFunction(() => document.body.innerText.includes("수정본이 도착했습니다"), { timeout: 12000 });
  await click(p, "결과 확인");
  await sleep(400);
  const complete = await text(p);
  assert.match(complete, /업무가 완료되었습니다/, "completion missing");
  assert.ok(!/축하|🎉/.test(complete), "celebration copy found");
  ok("결과: 수정/완료 루프 유지");

  // 7 — task-first supply side, same account
  await p.goto(`${BASE}/board`, { waitUntil: "networkidle2" });
  await sleep(500);
  const board = await text(p);
  assert.match(board, /지금 열려 있는 작업/, "open work board missing");
  assert.match(board, /내가 할 수 있는 작업/, "fit filter missing");
  assert.match(board, /참여 가능/, "eligibility state missing");
  const secondAccount = await p.evaluate(() =>
    [...document.querySelectorAll("button, a[href]")]
      .map((e) => (e.textContent || "").trim())
      .filter((t) => /전문가\s*등록|고수\s*가입|작업자\s*계정|계정\s*전환|모드/i.test(t)),
  );
  assert.deepEqual(secondAccount, [], `second-account control: ${secondAccount}`);
  ok("작업 찾기: storefront 없이 열린 QUEST를 탐색, 별도 계정 없음");

  // 8 — bid needs both PRICE + DELIVERY and does not imply automatic selection
  await p.goto(`${BASE}/board/0214`, { waitUntil: "networkidle2" });
  await sleep(400);
  await p.type("#price", "140000");
  await click(p, "제안 보내기");
  await sleep(200);
  assert.match(await text(p), /완료 시간을 시간 단위로/, "delivery must be required");
  await p.type("#hours", "40");
  await click(p, "제안 보내기");
  await sleep(200);
  assert.match(await text(p), /마감은 26시간/, "a bid past the deadline must be rejected");
  await p.evaluate(() => {
    const el = document.querySelector("#hours");
    el.value = "";
    el.dispatchEvent(new Event("input", { bubbles: true }));
  });
  await p.type("#hours", "18");
  await click(p, "제안 보내기");
  await sleep(400);
  const bid = await text(p);
  assert.match(bid, /제안을 보냈습니다/, "bid submission failed");
  assert.match(bid, /₩140,000 \/ 18시간/, "price x delivery pair not echoed");
  assert.match(bid, /추천 후보를 정리합니다/, "bid aftermath should describe recommendation, not auto-assignment");
  ok("제안: PRICE + DELIVERY 필수, 추천 전 참여 상태 유지");

  // 9 — one account, both sides at once
  await p.goto(`${BASE}/my`, { waitUntil: "networkidle2" });
  await sleep(500);
  const mine = await text(p);
  assert.match(mine, /내가 맡긴 업무/, "issued group missing");
  assert.match(mine, /내가 수행 중인 업무/, "executing group missing");
  assert.match(mine, /제안을 보낸 업무/, "bidding group missing");
  ok("내 의뢰: 한 계정이 GM/PLAYER/BIDDER 역할을 동시에 가질 수 있음");

  // 10 — claim hygiene
  const foot = await text(p);
  assert.match(foot, /보편 자동배정·완료 보장 기능은 제공하지 않습니다/, "current-stage disclaimer missing");
  ok("푸터: 현재 추천 모델과 미제공 기능을 정직하게 고지");

  console.log(`\n데모 루프\n${pass.join("\n")}\n\n${pass.length} checks passed.\n`);
} catch (e) {
  console.log(`\n데모 루프\n${pass.join("\n")}`);
  console.error("\nFAILED:", e.message);
  process.exitCode = 1;
} finally {
  await browser.close();
}
