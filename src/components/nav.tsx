"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./nav.module.css";

/**
 * The landing header carries the brand and the account entry, nothing else: the
 * first screen has to read as "put a file here and describe the job", and a row
 * of section links is the thing that makes a visitor start reading instead.
 * 작업 찾기 and 이용 방법 stay reachable from the sections below and the footer.
 *
 * One 회원가입 door, not two — the role comes from each work item, not the account.
 */
const INNER_LINKS = [
  { href: "/board", label: "작업 찾기" },
  { href: "/how", label: "이용 방법" },
];

export function Nav() {
  const pathname = usePathname();
  const onLanding = pathname === "/";
  return (
    <header className={s.bar}>
      <nav className={`frame ${s.inner}`} aria-label="주요 메뉴">
        <Link href="/" className={s.brand}>KAPAPI</Link>
        {onLanding ? null : (
          <ul className={s.links}>
            {INNER_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={`${s.link} ${pathname.startsWith(l.href) ? s.active : ""}`}>{l.label}</Link>
              </li>
            ))}
          </ul>
        )}
        <div className={s.right}>
          <Link href="/my" className={s.signin}>로그인</Link>
          <Link href="/my" className={s.cta}>회원가입</Link>
        </div>
      </nav>
    </header>
  );
}
