"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { useMode, type Mode } from "@/lib/mode";
import s from "./nav.module.css";

/**
 * Brand, the 발주자 / 작업자 toggle, and the account entry.
 *
 * The toggle is a surface switch on one account, not a second signup door
 * (IDENTITY_ROLE_MODEL §1), so it sits beside the brand rather than being sold
 * as a destination — and 회원가입 stays one button for both sides.
 */

const MODES: { k: Mode; label: string }[] = [
  { k: "client", label: "발주자" },
  { k: "worker", label: "작업자" },
];

/**
 * Which mode a route belongs to, so the toggle never lies about where you are.
 * The landing is deliberately not listed: it renders both surfaces, so there the
 * toggle follows the stored preference rather than the URL.
 */
function modeOf(pathname: string): Mode | null {
  if (pathname.startsWith("/board")) return "worker";
  if (pathname.startsWith("/new") || pathname.startsWith("/quest")) return "client";
  return null;
}

export function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const { mode, setMode } = useMode();
  const current = modeOf(pathname) ?? mode;

  // The landing serves both surfaces, so switching there is a re-render. From an
  // inner route it returns to the landing, because the page you were on belongs
  // to the surface you just left.
  function go(m: Mode) {
    setMode(m);
    if (pathname !== "/") router.push("/");
  }

  return (
    <header className={s.bar}>
      <nav className={s.inner} aria-label="주요 메뉴">
        <Link href="/" className={s.brand}>KAPAPI</Link>

        <div className={s.modes} role="group" aria-label="화면 전환">
          {MODES.map((m) => (
            <button
              key={m.k}
              type="button"
              className={`${s.mode} ${current === m.k ? s.modeOn : ""}`}
              aria-pressed={current === m.k}
              onClick={() => go(m.k)}
            >
              {m.label}
            </button>
          ))}
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
