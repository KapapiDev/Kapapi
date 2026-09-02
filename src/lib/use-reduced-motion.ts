"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

const getSnapshot = () => window.matchMedia(QUERY).matches;

/** The server has no media query, so it always renders the motion-on markup. */
const getServerSnapshot = () => false;

/**
 * `prefers-reduced-motion`, safe to read during render.
 *
 * motion/react's own hook reads the media query on the client's first render,
 * which makes the hydrated markup differ from the server's and triggers a
 * hydration error for anyone who has reduced motion enabled. `useSyncExternalStore`
 * hydrates with the server snapshot and then re-renders with the real value.
 */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
