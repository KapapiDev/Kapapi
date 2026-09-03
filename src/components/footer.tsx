import Link from "next/link";
import s from "./footer.module.css";

/** Claim hygiene: no universal auto-routing, escrow, completion guarantee or AI quality judgment. */
export function SiteFooter() {
  return (
    <footer className={s.footer}>
      <div className={`frame ${s.grid}`}>
        <div>
          <p className={s.brand}>KAPAPI</p>
          <p className={s.tag}>일이 먼저 올라오고, 할 수 있는 사람이 가격과 완료시간을 제안합니다. 카파피가 맞는 제안을 추천합니다.</p>
        </div>
        <div>
          <p className={s.colTitle}>이용하기</p>
          <ul className={s.list}>
            <li><Link href="/#work">업무 등록</Link></li>
            <li><Link href="/board">작업 찾기</Link></li>
            <li><Link href="/my">내 업무</Link></li>
            <li><Link href="/how">이용 방법</Link></li>
          </ul>
        </div>
        <div>
          <p className={s.colTitle}>사례</p>
          <ul className={s.list}>
            <li><Link href="/quest/0001">현황도 정리 업무</Link></li>
            <li><Link href="/board/0211">마감이 급한 작업</Link></li>
          </ul>
        </div>
      </div>
      <div className={`frame ${s.note}`}>
        <p>
          이 사이트는 카파피 프로토타입입니다. 표시된 업무와 제안, 작업자 정보는 제품 설명을 위한 예시입니다.
          카파피가 제안을 비교해 작업자를 배정하는 흐름을 보여주며, 실제 대금 보관과 완료 보장 기능은 제공하지 않습니다.
          결과의 최종 확인은 업무를 맡긴 사람이 합니다.
        </p>
        <p className="hud">PROTOTYPE V2 · 2026</p>
      </div>
    </footer>
  );
}
