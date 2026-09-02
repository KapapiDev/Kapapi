"use client";

import { useSyncExternalStore } from "react";

/**
 * Safe to read during render. Reading a media query directly on the client's
 * first render would make the hydrated markup differ from the server's, so the
 * server snapshot is always the "false" branch and the real value arrives on the
 * first commit.
 */
function useMedia(query: string): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

export function useReducedMotion(): boolean {
  return useMedia("(prefers-reduced-motion: reduce)");
}

/**
 * The hero stage turns from 16:9 to 4:5 here. `object-fit: cover` then crops the
 * film hard enough that the laptop no longer reads as a laptop, so the composite
 * onto its screen is dropped below this width and the product cut carries the
 * sequence instead. Matches the 900px breakpoint in hero.module.css.
 */
export function useNarrowStage(): boolean {
  return useMedia("(max-width: 900px)");
}
