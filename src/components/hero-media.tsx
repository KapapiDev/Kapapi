"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { useReducedMotion } from "@/lib/use-reduced-motion";
import s from "./hero-media.module.css";

/**
 * Hero product movie (docs/HERO_MEDIA.md).
 *
 * Asset config lives here, not inline in the page, so a replacement master can
 * be dropped in without touching the hero layout.
 */
export const HERO_MEDIA = {
  src: "/media/kapapi-hero.mp4",
  poster: "/media/kapapi-hero-poster.jpg",
  /** The film cuts to the empty desk here; the real product UI takes the frame. */
  handoffAtSec: 4.4,
  /** Where the film resumes for the human payoff (result checked elsewhere). */
  payoffAtSec: 6.2,
} as const;

/**
 * The real KAPAPI transaction, rendered in HTML/CSS.
 * Video-generated UI is never treated as authoritative product UI.
 */
const SEQUENCE = [
  { ko: "업무가 등록되었습니다", en: "WORK SUBMITTED", ms: 900 },
  { ko: "입찰 3건이 도착했습니다", en: "3 BIDS RECEIVED", ms: 1800 },
  { ko: "카파피가 배정을 검토합니다", en: "ROUTING", ms: 1300 },
  { ko: "카파피가 작업자를 배정했습니다", en: "PLAYER ASSIGNED", ms: 1500 },
  { ko: "작업이 시작되었습니다", en: "WORK STARTED", ms: 1000 },
  { ko: "결과가 도착했습니다", en: "RESULT READY", ms: 2000 },
] as const;

const BIDS = [
  { name: "노아린", price: "₩96,000", delivery: "8H" },
  { name: "윤가람", price: "₩118,000", delivery: "5H" },
  { name: "배소윤", price: "₩132,000", delivery: "6H" },
] as const;

/** Index of the routed BID. Fixed, because the demo must replay identically. */
const ROUTED = 1;

const FILM_MS = HERO_MEDIA.handoffAtSec * 1000;
const SEQUENCE_MS = SEQUENCE.reduce((sum, step) => sum + step.ms, 0);
const PAYOFF_MS = 1800;
const REST_MS = 900;

export function HeroProductMovie() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);
  const runRef = useRef<() => void>(() => {});
  /**
   * One state drives the whole frame: -1 means the film owns it, 0..n means the
   * product UI owns it. Deriving visibility from the step index rather than a
   * second `phase` state removes any chance of the two desyncing mid-loop.
   */
  const [step, setStep] = useState(-1);
  const reduced = useReducedMotion();
  /** False only when the file itself failed. A blocked autoplay keeps the poster. */
  const [filmOk, setFilmOk] = useState(true);

  const clearTimers = useCallback(() => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  }, []);

  const seekAndPlay = useCallback((seconds: number) => {
    const v = videoRef.current;
    if (!v) return;
    try {
      v.currentTime = seconds;
      void v.play().catch(() => {
        /* Autoplay may be blocked; the poster carries the frame instead. */
      });
    } catch {
      /* Seeking before metadata is loaded is harmless here. */
    }
  }, []);

  /**
   * One timer-driven loop. Independent of whether the video actually plays, so
   * the product story always completes — blocked autoplay, slow network or a
   * missing asset all degrade to the poster plus the real UI sequence.
   */
  const run = useCallback(() => {
    clearTimers();
    setStep(-1);
    seekAndPlay(0);

    // The film runs first; the product UI takes the frame at the hand-off cut.
    timers.current.push(window.setTimeout(() => videoRef.current?.pause(), FILM_MS));

    let t = FILM_MS;
    SEQUENCE.forEach((state, i) => {
      timers.current.push(window.setTimeout(() => setStep(i), t));
      t += state.ms;
    });

    // Back to the film for the human payoff: the result reaches the same person elsewhere.
    timers.current.push(
      window.setTimeout(() => {
        setStep(-1);
        seekAndPlay(HERO_MEDIA.payoffAtSec);
      }, FILM_MS + SEQUENCE_MS),
    );
    timers.current.push(
      window.setTimeout(() => videoRef.current?.pause(), FILM_MS + SEQUENCE_MS + PAYOFF_MS),
    );
    timers.current.push(
      window.setTimeout(
        () => runRef.current(),
        FILM_MS + SEQUENCE_MS + PAYOFF_MS + REST_MS,
      ),
    );
  }, [clearTimers, seekAndPlay]);

  // The loop restarts itself through this ref rather than by naming `run`.
  useEffect(() => {
    runRef.current = run;
  }, [run]);

  /**
   * Run only while the frame is actually on screen and the tab is visible.
   * A hero loop that keeps timers and video decoding alive in a background tab
   * is exactly the ambient motion docs/KAPAPI_MOTION.md section 7 rejects.
   */
  useEffect(() => {
    if (reduced) {
      clearTimers();
      return;
    }
    const node = frameRef.current;
    if (!node) return;

    let onScreen = false;
    const sync = () => {
      if (onScreen && !document.hidden) {
        run();
      } else {
        clearTimers();
        videoRef.current?.pause();
      }
    };

    const io = new IntersectionObserver((entries) => {
      const next = entries[0]?.isIntersecting ?? false;
      if (next === onScreen) return;
      onScreen = next;
      sync();
    });
    io.observe(node);
    document.addEventListener("visibilitychange", sync);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
      clearTimers();
    };
  }, [reduced, run, clearTimers]);

  const active = step >= 0 ? SEQUENCE[step] : null;
  const showBids = step >= 1 && step <= 4;
  const routing = step === 2;
  const assigned = step >= 3;
  const showResult = step === 5;
  const uiVisible = step >= 0;

  // Reduced motion: the same information, held still, nothing autoplaying.
  if (reduced) {
    return (
      <figure style={{ margin: 0 }}>
        <div className={`${s.frame} ${s.frameStatic}`}>
          <Image
            className={s.video}
            src={HERO_MEDIA.poster}
            alt="노트북으로 업무를 맡기고 자리를 뜨는 장면"
            fill
            sizes="(max-width: 980px) 100vw, 42vw"
            priority={false}
          />
          <div className={`${s.ui} ${s.uiVisible} ${s.uiStatic}`}>
            <div className={s.uiHead}>
              <span className={s.questId}>QUEST #0182</span>
              <span className={s.questId}>NDA ON</span>
            </div>
            <p className={s.questTitle}>쇼핑몰 상세페이지 12종 이미지 정리</p>
            <div className={s.staticList}>
              {SEQUENCE.map((state) => (
                <div key={state.en} className={s.staticRow}>
                  <span>{state.ko}</span>
                  <span className={s.staticEn}>{state.en}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <figcaption className={s.caption}>
          <span>맡긴 뒤의 과정은 카파피가 처리합니다.</span>
          <span className={s.captionNote}>STATIC VIEW</span>
        </figcaption>
      </figure>
    );
  }

  return (
    <figure style={{ margin: 0 }}>
      <div className={s.frame} ref={frameRef}>
        {filmOk ? (
          <video
            ref={videoRef}
            className={`${s.video} ${uiVisible ? s.videoHidden : ""}`}
            src={HERO_MEDIA.src}
            poster={HERO_MEDIA.poster}
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            onError={() => setFilmOk(false)}
          />
        ) : (
          <Image
            className={`${s.video} ${uiVisible ? s.videoHidden : ""}`}
            src={HERO_MEDIA.poster}
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 980px) 100vw, 42vw"
          />
        )}

        <div className={`${s.ui} ${uiVisible ? s.uiVisible : ""}`}>
          <div className={s.uiHead}>
            <span className={s.questId}>QUEST #0182</span>
            <span className={s.questId}>NDA ON</span>
          </div>
          <p className={s.questTitle}>쇼핑몰 상세페이지 12종 이미지 정리</p>

          <div className={s.stateLine}>
            {active ? (
              <>
                <span className={s.stateKo}>{active.ko}</span>
                <span className={s.stateEn}>{active.en}</span>
              </>
            ) : null}
          </div>

          {showBids ? (
            <div className={s.rows}>
              {BIDS.map((b, i) => {
                const isRouted = i === ROUTED;
                const muted = (routing || assigned) && !isRouted;
                return (
                  <div
                    key={b.name}
                    className={`${s.row} ${muted ? s.rowMuted : ""} ${
                      assigned && isRouted ? s.rowSelected : ""
                    }`}
                  >
                    <span className={s.rowName}>
                      {b.name}
                      {assigned && isRouted ? (
                        <span className={s.rowFlag}> · ASSIGNED</span>
                      ) : null}
                    </span>
                    <span className={s.rowPrice}>{b.price}</span>
                    <span className={s.rowDelivery}>{b.delivery}</span>
                  </div>
                );
              })}
            </div>
          ) : null}

          {showResult ? (
            <div className={s.result}>
              <span className={s.resultKind} aria-hidden="true">
                ZIP
              </span>
              <span style={{ flex: 1, minWidth: 0 }}>
                <span className={s.resultName} style={{ display: "block" }}>
                  상세페이지_정리본_12종.zip
                </span>
                <span className={s.resultMeta}>DELIVERED · 1H 36M EARLY</span>
              </span>
            </div>
          ) : null}

          <div className={s.track} aria-hidden="true">
            {SEQUENCE.map((state, i) => (
              <span key={state.en} className={`${s.tick} ${i <= step ? s.tickOn : ""}`} />
            ))}
          </div>
        </div>
      </div>

      <figcaption className={s.caption}>
        <span>맡긴 뒤의 과정은 카파피가 처리합니다.</span>
        <button type="button" className={s.captionNote} onClick={run}>
          다시 보기
        </button>
      </figcaption>
    </figure>
  );
}
