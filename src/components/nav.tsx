"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./nav.module.css";

/** Action-oriented, one account. No GM/PLAYER doors — the roles come from each QUEST. */
const LINKS = [
  { href: "/board", label: "작업 찾기" },
  { href: "/how", label: "이용 방법" },
];

export function Nav() {
  const pathname = usePathname();
  return (
    <header className={s.bar}>
      <nav className={`frame ${s.inner}`} aria-label="주요 메뉴">
        <Link href="/" className={s.brand}>KAPAPI</Link>
        <ul className={s.links}>
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={`${s.link} ${pathname.startsWith(l.href) ? s.active : ""}`}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <div className={s.right}>
          <Link href="/my" className={s.signin}>로그인</Link>
          <Link href="/#work" className={s.cta}>의뢰 등록</Link>
        </div>
      </nav>
    </header>
  );
}
