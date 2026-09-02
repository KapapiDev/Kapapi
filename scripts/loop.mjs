/**
 * Walks the whole prototype the way a reviewer would and asserts the canon
 * invariants: nothing ever offers to pick a worker, no second account exists,
 * PRICE and DELIVERY are both required, and the same account holds both roles.
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
    const els = [
      ...document.querySelectorAll("main button"),
      ...document.querySelectorAll("main a"),
    ];
    const el = els.find((b) => b.textContent?.includes(n));
    if (!el) throw new Error(`no control containing "${n}"`);
    el.click();
  }, needle);

/** No surface may offer the issuer a way to choose a worker. */
async function noPicker(p, where) {
  const bad = await p.evaluate(() =>
    [...document.querySelectorAll("button, a[href], input[type=radio], select")]
      .map((e) => (e.textContent || e.getAttribute("aria-label") || "").trim())
      .filter((t) => /전문가\s*(선택|고르|선정)|이\s*전문가로|작업자\s*선택|낙찰|Choose|Pick winner/i.test(t)),
  );
  assert.deepEqual(bad, [], `picker on ${where}: ${bad}`);
  ok(`${where}: 전문가를 고르는 컨트롤 없음`);
}

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "shell",
  args: ["--autoplay-policy=no-user-gesture-required"],
});
const p = await browser.newPage();
await p.setViewport({ width: 1440, height: 900 });

try {
  // 1 — landing
  await p.goto(BASE, { waitUntil: "networkidle2" });
  await sleep(1200);
  const home = await text(p);
  assert.match(home, /맡길 업무만 등록하세요/, "hero headline missing");
  assert.match(home, /의뢰 등록/, "primary action missing");
  assert.match(home, /작업 찾기/, "supply entry missing");
  for (const banned of ["할 일을 던져주세요", "QUEST NETWORK", "RESET", "이런 일들이 올라옵니다", "김도현"]) {
    assert.ok(!home.includes(banned), `v1 leakage on landing: ${banned}`);
  }
  ok("랜딩: v2 카피, v1 잔재 없음");
  await noPicker(p, "랜딩");

  // 2 — describe work
  await p.type("#work", "대외비 손그림 도면 3장을 현황도로 오늘 저녁 7시까지 정리해 주세요. DWG와 PDF 모두 필요합니다.");
  await click(p, "의뢰 등록");
  await p.waitForFunction(() => location.pathname === "/new", { timeout: 6000 });
  await sleep(500);

  const scope = await text(p);
  for (const f of ["작업 범위", "제출 형식", "확인 기준", "마감", "예산 상한"]) {
    assert.match(scope, new RegExp(f), `SOW field missing: ${f}`);
  }
  assert.match(scope, /보안 서약 필요/, "confidential request should raise the security flag");
  ok("작업 사양: 범위·형식·확인 기준·마감·예산 정리됨");

  // 3 — hand off
  await click(p, "이대로 등록하기");
  await sleep(700);
  const done = await text(p);
  assert.match(done, /의뢰가 등록되었습니다/, "confirmation missing");
  assert.ok(!done.includes("전문가 선택"), "hand-off must not ask to pick anyone");
  ok("등록 완료: 이후 과정은 카파피가 진행");

  // 4 — routing → assignment → result
  await click(p, "진행 상황 보기");
  await p.waitForFunction(() => location.pathname.startsWith("/quest/"), { timeout: 6000 });
  await sleep(800);
  await noPicker(p, "진행 상황");
  await p.waitForFunction(() => document.body.innerText.includes("전문가가 배정되었습니다"), { timeout: 20000 });
  const routed = await text(p);
  assert.match(routed, /왜 이 전문가인가요/, "routing rationale missing");
  assert.match(routed, /같은 유형 작업/, "history evidence missing");
  assert.match(routed, /정시 납품/, "on-time evidence missing");
  ok("배정: 카파피가 배정하고 근거를 보여줌");

  await p.waitForFunction(() => document.body.innerText.includes("결과 파일이 도착했습니다"), { timeout: 25000 });
  const delivered = await text(p);
  // Must not span a newline: "수정 요청 6%" sits directly above the "완료" stage chip.
  assert.ok(!/\d{1,3}%[ 	]*(완료|진행)/.test(delivered), "fake progress percentage found");
  ok("작업 진행: 관찰 가능한 상태만, 가짜 퍼센트 없음");

  // 5 — revision, then acceptance
  await click(p, "수정 요청");
  await sleep(400);
  await click(p, "수정 요청 보내기");
  await sleep(600);
  assert.match(await text(p), /수정을 요청했습니다/, "revision state missing");
  ok("수정 요청: 합의 범위 기준");

  await p.waitForFunction(() => document.body.innerText.includes("수정본이 도착했습니다"), { timeout: 12000 });
  await click(p, "결과 확인");
  await sleep(600);
  const complete = await text(p);
  assert.match(complete, /작업이 완료되었습니다/, "completion missing");
  assert.ok(!/축하|🎉/.test(complete), "celebration copy found");
  ok("완료: 축하 연출 없음");

  // 6 — supply side, same account
  await p.goto(`${BASE}/board`, { waitUntil: "networkidle2" });
  await sleep(600);
  const board = await text(p);
  assert.match(board, /참여 가능/, "eligibility state missing");
  assert.match(board, /조건 미충족/, "ineligible state missing");
  const secondAccount = await p.evaluate(() =>
    [...document.querySelectorAll("button, a[href]")]
      .map((e) => (e.textContent || "").trim())
      .filter((t) => /전문가\s*등록|고수\s*가입|작업자\s*계정|계정\s*전환|모드/i.test(t)),
  );
  assert.deepEqual(secondAccount, [], `second-account control: ${secondAccount}`);
  ok("작업 찾기: 의뢰별 자격, 별도 계정 없음");

  await p.goto(`${BASE}/board/0211`, { waitUntil: "networkidle2" });
  await sleep(500);
  assert.match(await text(p), /계정 종류의 문제가 아닙니다/, "eligibility must be scoped to the quest");
  ok("자격 미충족: 계정이 아니라 의뢰 조건 문제로 설명");

  // 7 — bid needs both values, validated against the deadline
  await p.goto(`${BASE}/board/0214`, { waitUntil: "networkidle2" });
  await sleep(500);
  await p.type("#price", "140000");
  await click(p, "제안 보내기");
  await sleep(300);
  assert.match(await text(p), /완료 시간을 시간 단위로/, "delivery must be required");
  await p.type("#hours", "40");
  await click(p, "제안 보내기");
  await sleep(300);
  assert.match(await text(p), /마감은 26시간/, "a bid past the deadline must be rejected");
  await p.evaluate(() => {
    const el = document.querySelector("#hours");
    el.value = "";
    el.dispatchEvent(new Event("input", { bubbles: true }));
  });
  await p.type("#hours", "18");
  await click(p, "제안 보내기");
  await sleep(600);
  const bid = await text(p);
  assert.match(bid, /제안을 보냈습니다/, "bid submission failed");
  assert.match(bid, /₩140,000 \/ 18시간/, "price x delivery pair not echoed");
  ok("제안: 금액과 완료 시간 모두 필수, 마감 대비 검증");

  // 8 — one account, both roles at once
  await p.goto(`${BASE}/my`, { waitUntil: "networkidle2" });
  await sleep(600);
  const mine = await text(p);
  assert.match(mine, /내가 맡긴 의뢰/, "issued group missing");
  assert.match(mine, /내가 수행 중인 작업/, "executing group missing");
  assert.match(mine, /제안을 보낸 의뢰/, "bidding group missing");
  const counts = await p.evaluate(() =>
    [...document.querySelectorAll("section")].map((sec) => ({
      title: sec.querySelector("h2")?.textContent ?? "",
      rows: sec.querySelectorAll("a[href^='/quest/'], a[href^='/board/']").length,
    })),
  );
  assert.ok(counts.find((c) => c.title.includes("맡긴") && c.rows > 0), "no issued quest");
  assert.ok(counts.find((c) => c.title.includes("수행") && c.rows > 0), "no executed quest");
  ok("내 의뢰: 한 계정이 맡긴 쪽과 수행하는 쪽을 동시에 가짐");

  // 9 — claim hygiene
  const foot = await text(p);
  assert.match(foot, /대금 보관과 완료 보장 기능은 제공하지 않으며/, "claim disclaimer missing");
  ok("푸터: 에스크로·완료 보장·AI 품질 판정 주장 없음");

  console.log(`\n데모 루프\n${pass.join("\n")}\n\n${pass.length} checks passed.\n`);
} catch (e) {
  console.log(`\n데모 루프\n${pass.join("\n")}`);
  console.error("\nFAILED:", e.message);
  process.exitCode = 1;
} finally {
  await browser.close();
}
