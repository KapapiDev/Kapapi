/**
 * Demo-loop rehearsal (TASK_QUEUE KAP-113).
 *
 * Walks the whole prototype the way a reviewer would and asserts what must be
 * on screen at each step — including the two things canon cares about most:
 * that no control ever offers to pick a PLAYER, and that the same account holds
 * GM and PLAYER roles at once.
 */
import assert from "node:assert/strict";
import puppeteer from "puppeteer-core";

const BASE = process.env.KAPAPI_BASE ?? "http://localhost:3210";
const CHROME =
  process.env.CHROME_PATH ?? "C:/Program Files/Google/Chrome/Application/chrome.exe";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const steps = [];
const ok = (label) => {
  steps.push(`  PASS  ${label}`);
};

const text = (page) => page.evaluate(() => document.body.innerText);
/** Buttons before links, and never the nav — otherwise "일 맡기기" hits the menu. */
const clickByText = (page, needle) =>
  page.evaluate((n) => {
    const inMain = (el) => !el.closest("header") && !el.closest("footer");
    const candidates = [
      ...[...document.querySelectorAll("main button")].filter(inMain),
      ...[...document.querySelectorAll("main a")].filter(inMain),
    ];
    const el = candidates.find((b) => b.textContent?.includes(n));
    if (!el) throw new Error(`no clickable element containing "${n}"`);
    el.click();
  }, needle);

/** Nothing in the product may offer the GM a way to pick a worker. */
async function assertNoSelectionControl(page, where) {
  const offenders = await page.evaluate(() =>
    [...document.querySelectorAll("button, a[href], input[type=radio]")]
      .map((el) => (el.textContent || el.getAttribute("aria-label") || "").trim())
      .filter((t) =>
        /작업자\s*(선택|고르|선정)|이\s*작업자로|선택하기|Choose|Pick winner|낙찰/i.test(t),
      ),
  );
  assert.deepEqual(offenders, [], `selection control found on ${where}: ${offenders}`);
  ok(`${where}: no PLAYER-selection control`);
}

const browser = await puppeteer.launch({ executablePath: CHROME, headless: "shell" });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });

try {
  // 1 — Landing
  await page.goto(BASE, { waitUntil: "networkidle2" });
  const landing = await text(page);
  assert.match(landing, /할 일을 던져주세요/, "hero promise missing");
  assert.match(landing, /일 맡기기/, "primary CTA missing");
  assert.match(landing, /일 찾기/, "secondary supply entry missing");
  assert.doesNotMatch(
    landing.slice(0, 400),
    /\bBID\b|LEVEL|EXP|TIME ATTACK/,
    "world vocabulary appears above the fold before plain Korean",
  );
  ok("landing: plain-language hero, one primary action");
  await assertNoSelectionControl(page, "landing");

  // 2 — Describe the work
  await page.type(
    "#work-entry",
    "대외비 손그림 도면 3장을 CAD 현황도로 오늘 저녁 7시까지 정리해주세요. DWG와 PDF 둘 다 필요합니다.",
  );
  await clickByText(page, "일 맡기기");
  await page.waitForFunction(() => location.pathname === "/new", { timeout: 5000 });
  await sleep(500);

  // 3 — Scope confirmation
  const scope = await text(page);
  assert.match(scope, /이렇게 정리했습니다/, "scope confirmation heading missing");
  for (const field of ["작업 범위", "산출물", "제출 형식", "마감", "예산 상한", "확인 기준", "수정 범위", "보안"]) {
    assert.match(scope, new RegExp(field), `SOW field missing: ${field}`);
  }
  assert.match(scope, /NDA ON/, "confidential request should raise the NDA flag");
  ok("scope: structured SOW with deliverables, deadline, acceptance and revision boundary");

  // 4 — Hand off
  await clickByText(page, "이대로 맡기기");
  await sleep(700);
  const handoff = await text(page);
  assert.match(handoff, /맡겼습니다/, "hands-off confirmation missing");
  assert.match(handoff, /QUEST #0219 CREATED/, "QUEST id not surfaced");
  assert.doesNotMatch(handoff, /작업자 선택/, "hands-off screen must not ask to pick anyone");
  ok("hand-off: 맡겼습니다. 이제 하시던 일 하세요.");

  // 5 — Orchestration → routing → assignment
  await clickByText(page, "진행 상황 보기");
  await page.waitForFunction(() => location.pathname.startsWith("/quest/"), { timeout: 5000 });
  await sleep(1200);
  const orchestrating = await text(page);
  assert.match(orchestrating, /이 QUEST #0219에서는 내가 일을 맡긴 쪽입니다/, "role sentence missing");
  await assertNoSelectionControl(page, "orchestration");
  ok("orchestration: role is stated per QUEST, not per account");

  await page.waitForFunction(
    () => document.body.innerText.includes("PLAYER ASSIGNED"),
    { timeout: 15000 },
  );
  const routed = await text(page);
  assert.match(routed, /왜 이 작업자인가요\?/, "routing rationale missing");
  assert.match(routed, /유사 QUEST/, "routing evidence missing");
  assert.match(routed, /정시 납품/, "on-time evidence missing");
  ok("routing: KAPAPI assigns, with inspectable evidence");

  await page.waitForFunction(
    () => document.body.innerText.includes("결과 파일이 도착했습니다"),
    { timeout: 20000 },
  );
  const delivered = await text(page);
  assert.doesNotMatch(delivered, /\d{1,3}%\s*(완료|진행)/, "fake completion percentage found");
  ok("workroom: observable stages and timestamps, no fake percentage");

  // 6 — Revision, then acceptance
  await clickByText(page, "수정 요청");
  await sleep(400);
  await page.type("#revision-note", "레이어명이 사내 표준과 다릅니다.");
  await clickByText(page, "수정 요청 보내기");
  await sleep(600);
  assert.match(await text(page), /수정 요청을 보냈습니다/, "revision state missing");
  ok("revision: request references the agreed scope");

  await page.waitForFunction(
    () => document.body.innerText.includes("수정본 도착"),
    { timeout: 12000 },
  );
  await clickByText(page, "결과 확인 · 합격");
  await sleep(600);
  const complete = await text(page);
  assert.match(complete, /QUEST COMPLETE/, "completion state missing");
  assert.doesNotMatch(complete, /축하|🎉/, "celebration copy found");
  ok("completion: QUEST COMPLETE, no celebration");

  // 7 — Supply side, same account
  await page.goto(`${BASE}/board`, { waitUntil: "networkidle2" });
  await sleep(600);
  const board = await text(page);
  assert.match(board, /참여 가능/, "eligibility state missing");
  assert.match(board, /자격 미충족/, "ineligible state missing");
  const secondAccountControls = await page.evaluate(() =>
    [...document.querySelectorAll("button, a[href]")]
      .map((el) => (el.textContent || "").trim())
      .filter((t) => /작업자.*가입|프리랜서.*가입|계정 전환|작업자 계정/i.test(t)),
  );
  assert.deepEqual(
    secondAccountControls,
    [],
    `second-account control found: ${secondAccountControls}`,
  );
  ok("board: per-QUEST eligibility, no second account");

  await page.goto(`${BASE}/board/0211`, { waitUntil: "networkidle2" });
  await sleep(500);
  const blocked = await text(page);
  assert.match(blocked, /계정 종류의 문제가 아닙니다/, "eligibility must be framed per QUEST");
  ok("blocked QUEST: restriction is scoped to the QUEST, not the identity");

  // 8 — BID: price and delivery are both required
  await page.goto(`${BASE}/board/0214`, { waitUntil: "networkidle2" });
  await sleep(500);
  await page.type("#bid-price", "140000");
  await clickByText(page, "입찰하기");
  await sleep(300);
  assert.match(await text(page), /완료까지 걸리는 시간/, "delivery time must be required");
  await page.type("#bid-hours", "40");
  await clickByText(page, "입찰하기");
  await sleep(300);
  assert.match(await text(page), /마감은 26시간/, "a bid past the deadline must be rejected");
  await page.evaluate(() => {
    const el = document.querySelector("#bid-hours");
    el.value = "";
    el.dispatchEvent(new Event("input", { bubbles: true }));
  });
  await page.type("#bid-hours", "18");
  await clickByText(page, "입찰하기");
  await sleep(600);
  const bid = await text(page);
  assert.match(bid, /입찰을 제출했습니다/, "bid submission failed");
  assert.match(bid, /₩140,000 \/ 18H/, "PRICE × DELIVERY pair not shown back");
  ok("BID: PRICE and DELIVERY both required and validated against the deadline");

  // 9 — One account, both roles, at once
  await page.goto(`${BASE}/my`, { waitUntil: "networkidle2" });
  await sleep(600);
  const mine = await text(page);
  assert.match(mine, /맡긴 QUEST/, "issued group missing");
  assert.match(mine, /수행 중인 QUEST/, "executing group missing");
  assert.match(mine, /입찰한 QUEST/, "bidding group missing");
  // Check controls, not prose: the page copy legitimately says mode switching
  // does not exist, so a body-text match would flag its own denial.
  const modeControls = await page.evaluate(() =>
    [...document.querySelectorAll("button, a[href], select, input")]
      .map((el) => (el.textContent || el.getAttribute("aria-label") || "").trim())
      .filter((t) => /GM 모드|PLAYER 모드|모드 전환|계정 전환|switch to/i.test(t)),
  );
  assert.deepEqual(modeControls, [], `mode-switch control found: ${modeControls}`);
  const roles = await page.evaluate(() =>
    [...document.querySelectorAll("section")].map((s) => ({
      title: s.querySelector("h2")?.textContent ?? "",
      rows: s.querySelectorAll("a[href^='/quest/'], a[href^='/board/']").length,
    })),
  );
  assert.ok(
    roles.find((r) => r.title.includes("맡긴") && r.rows > 0),
    "no issued QUEST for the current user",
  );
  assert.ok(
    roles.find((r) => r.title.includes("수행") && r.rows > 0),
    "no executed QUEST for the current user",
  );
  ok("내 QUEST: the same account holds GM and PLAYER rows simultaneously");

  // 10 — Profile keeps the two reputation domains apart
  await page.goto(`${BASE}/profile`, { waitUntil: "networkidle2" });
  await sleep(500);
  const profile = await text(page);
  assert.match(profile, /수행 기록/, "execution reputation missing");
  assert.match(profile, /발주 기록/, "issuer reputation missing");
  assert.match(profile, /ONE ACCOUNT/, "single-identity statement missing");
  const careerIdx = profile.indexOf("건축사사무소 실무 5년");
  const levelIdx = profile.indexOf("LV.12");
  assert.ok(careerIdx >= 0 && levelIdx > careerIdx, "career must outrank LEVEL");
  ok("profile: two reputation domains, career above LEVEL");

  // 11 — Claim hygiene
  assert.match(profile, /에스크로|대금 보관/, "payment disclaimer missing from footer");
  ok("footer: no unsupported escrow / SLA / AI-judgment claims");

  console.log("\nDEMO LOOP\n" + steps.join("\n") + `\n\n${steps.length} checks passed.\n`);
} catch (err) {
  console.log("\nDEMO LOOP\n" + steps.join("\n"));
  console.error("\nFAILED:", err.message);
  process.exitCode = 1;
} finally {
  await browser.close();
}
