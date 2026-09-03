import s from "./footer.module.css";

/**
 * Claim hygiene only. The link columns are gone by founder direction — the header
 * carries navigation, so repeating it here was a sitemap the page did not need.
 * What stays is the disclaimer, because it is the one thing that must be on every
 * page: no escrow, no completion guarantee, acceptance belongs to the client.
 */
export function SiteFooter() {
  return (
    <footer className={s.footer}>
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
