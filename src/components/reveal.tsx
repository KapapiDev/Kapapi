"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import s from "./reveal.module.css";

/**
 * Scroll entry. Elements arrive rather than appearing — a weighted fade-up with a
 * slight blur, on the decelerating curve, staggered when they belong to a group.
 *
 * IntersectionObserver, not a scroll listener: a scroll handler reflows on every
 * frame and is the usual reason a page like this stutters on a phone. Once an
 * element has arrived the observer stops watching it.
 *
 * Reduced motion renders the final state immediately with no transition at all.
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  /** Stagger within a group, in ms. Keep under ~240 or the last item feels late. */
  delay?: number;
  as?: "div" | "section" | "li" | "p";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) { setShown(true); io.disconnect(); }
      },
      // Fire a little before the element reaches the fold, so the motion is
      // already resolving by the time it is properly in view.
      { rootMargin: "0px 0px -12% 0px", threshold: 0.01 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [reduced]);

  const on = reduced || shown;

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement & HTMLParagraphElement & HTMLLIElement>}
      className={`${s.r} ${on ? s.on : ""} ${className}`}
      style={on && !reduced ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
