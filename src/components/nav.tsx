"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { CURRENT_USER_ID, USERS, useDemo } from "@/lib/demo-store";
import s from "./nav.module.css";

/**
 * Action-oriented navigation (docs/IDENTITY_ROLE_MODEL.md section 4).
 *
 * These are four *actions*, not two account worlds. There is deliberately no
 * "GM MODE / PLAYER MODE" control anywhere in the product.
 */
const LINKS = [
  { href: "/", label: "일 맡기기" },
  { href: "/board", label: "일 찾기" },
  { href: "/my", label: "내 QUEST" },
  { href: "/profile", label: "프로필" },
];

export function Nav() {
  const pathname = usePathname();
  const { reset } = useDemo();
  const me = USERS[CURRENT_USER_ID];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" || pathname === "/new" : pathname.startsWith(href);

  return (
    <header className={s.bar}>
      <nav className={`k-frame ${s.inner}`} aria-label="주요 메뉴">
        <Link href="/" className={s.brand}>
          KAPAPI
          <span className={s.brandMark}>
            <span className={s.live} aria-hidden="true" />
            QUEST NETWORK
          </span>
        </Link>

        <ul className={s.links}>
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${s.link} ${isActive(link.href) ? s.active : ""}`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={s.who}>
          <button type="button" className={s.reset} onClick={reset} title="데모 상태를 처음으로 되돌립니다">
            RESET
          </button>
          <Link href="/profile" className={s.avatar} aria-label={`${me.name} 프로필`}>
            {me.initials}
          </Link>
          <span className={s.whoName}>{me.name}</span>
        </div>
      </nav>
    </header>
  );
}
