"use client";

import { useSyncExternalStore } from "react";

/**
 * 발주자 / 작업자 view toggle.
 *
 * This is a surface toggle, not a role switch: one account, one signup, one
 * login (IDENTITY_ROLE_MODEL §1). It only decides which side of the same product
 * is on screen — the work you posted, or the work you could take.
 *
 * Kept in localStorage and read through useSyncExternalStore rather than an
 * effect, so the server and the first client render agree and React does not see
 * a setState during commit.
 */

export type Mode = "client" | "worker";

const KEY = "kapapi.mode";
const listeners = new Set<() => void>();

function read(): Mode {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw === "worker" ? "worker" : "client";
  } catch {
    return "client";
  }
}

/** Cached so getSnapshot is referentially stable between writes. */
let snapshot: Mode | null = null;

function subscribe(fn: () => void) {
  listeners.add(fn);
  // Another tab switching mode should not leave this one out of sync.
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) { snapshot = null; fn(); }
  };
  window.addEventListener("storage", onStorage);
  return () => { listeners.delete(fn); window.removeEventListener("storage", onStorage); };
}

function getSnapshot(): Mode {
  snapshot ??= read();
  return snapshot;
}

/** The server has no storage, so it always renders the 발주자 surface. */
const getServerSnapshot = (): Mode => "client";

export function setMode(m: Mode) {
  try { window.localStorage.setItem(KEY, m); } catch { /* storage blocked */ }
  snapshot = m;
  listeners.forEach((fn) => fn());
}

export function useMode(): { mode: Mode; setMode: (m: Mode) => void } {
  // setMode is a module-level function, so it is already stable across renders.
  const mode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return { mode, setMode };
}
