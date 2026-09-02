import Link from "next/link";

import s from "./footer.module.css";

/**
 * Claim hygiene lives here (docs/QA_CHECKLIST.md section G, docs/LEGAL.md).
 * The prototype must not imply escrow, SLA guarantees or AI quality judgment.
 */
export function SiteFooter() {
  return (
    <footer className={s.footer}>
      <div className={`k-frame ${s.grid}`}>
        <div>
          <p className={s.brand}>KAPAPI</p>
          <p className={s.tagline}>
            일 던져놔. 결과만 받아. 짧은 전문 업무를 등록하면 카파피가 배정부터 결과 전달까지
            처리합니다.
          </p>
        </div>

        <div>
          <p className={s.colTitle}>할 수 있는 것</p>
          <ul className={s.list}>
            <li>
              <Link href="/" className={s.link}>
                일 맡기기
              </Link>
            </li>
            <li>
              <Link href="/board" className={s.link}>
                일 찾기
              </Link>
            </li>
            <li>
              <Link href="/my" className={s.link}>
                내 QUEST
              </Link>
            </li>
            <li>
              <Link href="/profile" className={s.link}>
                프로필
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className={s.colTitle}>사례</p>
          <ul className={s.list}>
            <li>
              <Link href="/quest/0001" className={s.link}>
                QUEST #0001 · 현황도 정리
              </Link>
            </li>
            <li>
              <Link href="/board/0211" className={s.link}>
                TIME ATTACK QUEST
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={`k-frame ${s.disclaimer}`}>
        <p className={s.notice}>
          이 사이트는 KAPAPI Prototype v1입니다. 표시된 QUEST·입찰·작업자·결과는 제품 설명을
          위한 예시 데이터이며, 현재 결제 대금 보관(에스크로), 완료 보장(SLA), AI 품질 판정
          기능은 제공하지 않습니다. 결과의 최종 확인은 일을 맡긴 사용자가 합니다.
        </p>
        <p className="k-hud">PROTOTYPE V1 · 2026</p>
      </div>
    </footer>
  );
}
