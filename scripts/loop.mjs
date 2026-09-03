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
  assert.match(home, /맡기기/, "primary action missing");
  assert.match(home, /올리고 나면, 결과가 옵니다/, "D-035 result-return proof missing");
  assert.match(home, /카파피가 배정합니다/, "assignment beat missing");
  // D-035: the client landing must not sell the comparison it no longer has.
  for (const banned of ["제안 비교", "가장 적합한 후보를 추천", "QUEST NETWORK", "RESET", "이런 일들이 올라옵니다"]) {
    assert.ok(!home.includes(banned), `stale product copy on landing: ${banned}`);
  }
  // The 작업자 surface must be reachable from the same account, one toggle away.
  const modes = await p.evaluate(() =>
    [...document.querySelectorAll('[role="group"] button')].map((b) => b.textContent.trim()));
  assert.deepEqual(modes, ["발주자", "작업자"], `mode toggle missing: ${modes}`);
  const signupDoors = await p.evaluate(() =>
    [...document.querySelectorAll("a, button")].map((e) => (e.textContent || "").trim())
      .filter((t) => /작업자\s*(가입|등록)|고수\s*가입|전문가\s*등록/.test(t)));
  assert.deepEqual(signupDoors, [], `second signup door: ${signupDoors}`);
  ok("랜딩: 업무 입력 → 배정 → 결과, 모드 토글 하나, 가입 문 하나");

  // 2 — describe work and verify structured QUEST/SOW
  await p.type("#work", "대외비 손그림 도면 3장을 현황도로 오늘 저녁 7시까지 정리해 주세요. DWG와 PDF 모두 필요합니다.");
  await click(p, "맡기기");
  await p.waitForFunction(() => location.pathname === "/new", { timeout: 6000 });
  await sleep(500);

  const scope = await text(p);
  for (const f of ["작업 범위", "제출 형식", "확인 기준", "마감", "예산 상한"]) assert.match(scope, new RegExp(f), `SOW field missing: ${f}`);
  assert.match(scope, /보안 서약 필요/, "confidential request should raise the security flag");
  assert.match(scope, /카파피가 그중에서 배정하고/, "post-submit model copy missing");
  ok("작업 사양: 범위·형식·확인 기준·마감·예산 정리됨");

  // 3 — post the work
  await click(p, "이대로 등록하기");
  await sleep(500);
  const created = await text(p);
  assert.match(created, /업무가 등록되었습니다/, "confirmation missing");
  assert.match(created, /발주자가 제안을 비교하거나 고를 필요는 없습니다/, "D-035 promise missing");
  ok("등록 완료: 비교 없이 배정된다고 약속");

  // 4 — D-035: KAPAPI assigns. The client is never asked to choose a worker.
  await click(p, "진행 상황 보기");
  await p.waitForFunction(() => location.pathname.startsWith("/quest/"), { timeout: 6000 });
  await p.waitForFunction(() => document.body.innerText.includes("배정된 작업자"), { timeout: 15000 });
  const assigned = await text(p);
  assert.match(assigned, /왜 이 작업자인가요/, "assignment rationale missing");
  for (const banned of ["이 작업자로 진행", "다른 제안 보기", "카파피 추천"]) {
    assert.ok(!assigned.includes(banned), `client was asked to choose: ${banned}`);
  }
  const pickers = await p.evaluate(() =>
    [...document.querySelectorAll("main button, main a[href], main input[type=radio], main select")]
      .map((e) => (e.textContent || e.getAttribute("aria-label") || "").trim())
      .filter((t) => /작업자\s*(선택|고르|선정|확정)|이\s*작업자로|제안\s*선택|낙찰/.test(t)));
  assert.deepEqual(pickers, [], `worker-selection control on client surface: ${pickers}`);
  ok("배정: 카파피가 배정하고 근거만 보여줌, 고르는 컨트롤 없음");

  // 5 — work runs through to the result without another client step
  await p.waitForFunction(() => document.body.innerText.includes("작업을 시작했습니다"), { timeout: 10000 });
  await p.waitForFunction(() => document.body.innerText.includes("결과 파일이 도착했습니다"), { timeout: 14000 });
  const delivered = await text(p);
  assert.ok(!/\d{1,3}%[ 	]*(완료|진행)/.test(delivered), "fake progress percentage found");
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
  ok("내 업무: 한 계정이 발주자/작업자/제안 참여 역할을 동시에 가질 수 있음");

  // 10 — claim hygiene
  const foot = await text(p);
  assert.match(foot, /대금 보관과 완료 보장 기능은 제공하지 않습니다/, "current-stage disclaimer missing");
  ok("푸터: 현재 추천 모델과 미제공 기능을 정직하게 고지");

  console.log(`\n데모 루프\n${pass.join("\n")}\n\n${pass.length} checks passed.\n`);
} catch (e) {
  console.log(`\n데모 루프\n${pass.join("\n")}`);
  console.error("\nFAILED:", e.message);
  process.exitCode = 1;
} finally {
  await browser.close();
}
