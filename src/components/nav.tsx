"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import s from "./nav.module.css";

/**
 * Brand, the 발주자 / 작업자 toggle, and the account entry.
 *
 * The toggle is a surface switch on one account, not a second signup door
 * (IDENTITY_ROLE_MODEL §1), so it sits beside the brand rather than being sold
 * as a destination — and 회원가입 stays one button for both sides.
 *
 * Each surface is a route, so the toggle is two links and the active one is read
 * off the pathname. There is no stored mode: every route already says which
 * surface it belongs to, and a second remembered answer could only disagree with
 * the page the person is actually looking at.
 */

const MODES = [
  { href: "/", label: "발주자" },
  { href: "/board", label: "작업자" },
] as const;

/** 작업자 owns the board; everything else is the client's side of the account. */
const isWorker = (pathname: string) => pathname.startsWith("/board");

export function Nav() {
  const pathname = usePathname();
  const worker = isWorker(pathname);

  return (
    <header className={s.bar}>
      <nav className={s.inner} aria-label="주요 메뉴">
        <Link href={worker ? "/board" : "/"} className={s.brand}>KAPAPI</Link>

        <div className={s.modes} role="group" aria-label="화면 전환">
          {MODES.map((m) => {
            const on = m.href === "/board" ? worker : !worker;
            return (
              <Link
                key={m.href}
                href={m.href}
                className={`${s.mode} ${on ? s.modeOn : ""}`}
                aria-current={on ? "page" : undefined}
              >
                {m.label}
              </Link>
            );
          })}
        </div>

        <div className={s.right}>
          <Link href="/my" className={s.link}>내 업무</Link>
          <Link href="/how" className={s.link}>이용 방법</Link>
          <Link href="/my" className={s.cta}>회원가입</Link>
        </div>
      </nav>
    </header>
  );
}
