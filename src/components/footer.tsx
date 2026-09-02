import Link from "next/link";
import s from "./footer.module.css";

/** Claim hygiene: no escrow, no completion guarantee, no AI quality judgment. */
export function SiteFooter() {
  return (
    <footer className={s.footer}>
      <div className={`frame ${s.grid}`}>
        <div>
          <p className={s.brand}>KAPAPI</p>
          <p className={s.tag}>의뢰를 등록하면 전문가 배정부터 결과 전달까지 카파피가 진행합니다.</p>
        </div>
        <div>
          <p className={s.colTitle}>이용하기</p>
          <ul className={s.list}>
            <li><Link href="/#work">의뢰 등록</Link></li>
            <li><Link href="/board">작업 찾기</Link></li>
            <li><Link href="/my">내 의뢰</Link></li>
            <li><Link href="/how">이용 방법</Link></li>
          </ul>
        </div>
        <div>
          <p className={s.colTitle}>사례</p>
          <ul className={s.list}>
            <li><Link href="/quest/0001">현황도 정리 의뢰</Link></li>
            <li><Link href="/board/0211">마감이 급한 작업</Link></li>
          </ul>
        </div>
      </div>
      <div className={`frame ${s.note}`}>
        <p>
          이 사이트는 카파피 프로토타입입니다. 표시된 의뢰와 제안, 전문가 정보는 제품 설명을 위한 예시입니다.
          현재 대금 보관과 완료 보장 기능은 제공하지 않으며, 결과의 최종 확인은 의뢰한 사람이 합니다.
        </p>
        <p className="hud">PROTOTYPE V2 · 2026</p>
      </div>
    </footer>
  );
}
