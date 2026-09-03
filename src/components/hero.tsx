"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { useDemo } from "@/lib/demo";
import { useNarrowStage, useReducedMotion } from "@/lib/use-reduced-motion";
import { COMPOSITE_IN, COMPOSITE_OUT, transformFor } from "@/lib/screen-quad";
import { HeroScreen } from "./hero-screen";
import s from "./hero.module.css";

export const HERO_MEDIA = {
  src: "/media/kapapi-hero.mp4",
  poster: "/media/kapapi-hero-poster.jpg",
} as const;

const CHIPS = [
  "PDF 20개 내용을 스프레드시트로 정리",
  "상세페이지 이미지 규격 맞추기",
  "회사소개서 서식 통일",
  "손그림 도면을 현황도로 정리",
];

const UI_W = 1280;
const UI_H = 720;

/**
 * Hero timeline. The film runs, the real product UI appears inside the laptop as
 * the camera pushes in, then the shot cuts to the current transaction proof.
 */
const T_CUT = COMPOSITE_OUT;
const T_FULL_END = T_CUT + 5.2;
const T_PAYOFF_IN = 5.6;
const T_PAYOFF_END = 8.0;
const LOOP_REST = 1400;
const CYCLE_MS = (T_FULL_END + (T_PAYOFF_END - T_PAYOFF_IN)) * 1000 + LOOP_REST;

export function Hero() {
  const router = useRouter();
  const { startDraft } = useDemo();

  const videoRef = useRef<HTMLVideoElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const uiRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const timers = useRef<number[]>([]);
  const phaseRef = useRef<"film" | "composite" | "full" | "payoff">("film");

  const [text, setText] = useState("");
  const [files, setFiles] = useState<{ name: string; size: string }[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState(-1);
  const [phase, setPhase] = useState<"film" | "composite" | "full" | "payoff">("film");
  const reduced = useReducedMotion();
  const narrow = useNarrowStage();
  const [filmOk, setFilmOk] = useState(true);

  const clearTimers = useCallback(() => {
    timers.current.forEach(window.clearTimeout);
    timers.current = [];
  }, []);

  const setPhaseBoth = useCallback((p: "film" | "composite" | "full" | "payoff") => {
    phaseRef.current = p;
    setPhase(p);
  }, []);

  const paintRef = useRef<() => void>(() => {});
  const paint = useCallback(() => {
    const v = videoRef.current;
    const stage = stageRef.current;
    const ui = uiRef.current;
    if (v && stage && ui && phaseRef.current === "composite") {
      const box = stage.getBoundingClientRect();
      ui.style.transform = transformFor(v.currentTime, box, UI_W, UI_H);
    }
    rafRef.current = requestAnimationFrame(() => paintRef.current());
  }, []);
  useEffect(() => { paintRef.current = paint; }, [paint]);

  const run = useCallback(() => {
    clearTimers();
    const v = videoRef.current;
    setStep(-1);
    setPhaseBoth("film");
    if (v) {
      try { v.currentTime = 0; } catch { /* not seekable yet */ }
      void v.play().catch(() => { /* autoplay may be blocked; poster carries it */ });
    }

    const at = (ms: number, fn: () => void) => timers.current.push(window.setTimeout(fn, ms));

    at(COMPOSITE_IN * 1000, () => {
      if (narrow) videoRef.current?.pause();
      setPhaseBoth(narrow ? "full" : "composite");
      setStep(0);
    });
    at((COMPOSITE_IN + 0.5) * 1000, () => setStep(1));
    at((COMPOSITE_IN + 1.0) * 1000, () => setStep(2));

    at(T_CUT * 1000, () => {
      videoRef.current?.pause();
      setPhaseBoth("full");
      setStep(3);
    });
    at((T_CUT + 1.9) * 1000, () => setStep(4));
    at((T_CUT + 3.0) * 1000, () => setStep(5));

    at(T_FULL_END * 1000, () => {
      setPhaseBoth("payoff");
      setStep(-1);
      const vid = videoRef.current;
      if (vid) {
        try { vid.currentTime = T_PAYOFF_IN; } catch { /* ignore */ }
        void vid.play().catch(() => {});
      }
    });
    at((T_FULL_END + (T_PAYOFF_END - T_PAYOFF_IN)) * 1000, () => videoRef.current?.pause());
  }, [clearTimers, setPhaseBoth, narrow]);

  useEffect(() => {
    if (reduced) { clearTimers(); return; }
    const node = stageRef.current;
    if (!node) return;
    let onScreen = false;
    let loop: number | null = null;
    const stopLoop = () => { if (loop) window.clearInterval(loop); loop = null; };
    const sync = () => {
      if (onScreen && !document.hidden) {
        rafRef.current ??= requestAnimationFrame(paint);
        run();
        stopLoop();
        loop = window.setInterval(run, CYCLE_MS);
      } else {
        stopLoop();
        clearTimers();
        videoRef.current?.pause();
      }
    };
    const io = new IntersectionObserver((e) => {
      const next = e[0]?.isIntersecting ?? false;
      if (next === onScreen) return;
      onScreen = next;
      sync();
    }, { threshold: 0.2 });
    io.observe(node);
    document.addEventListener("visibilitychange", sync);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
      stopLoop();
      clearTimers();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [reduced, paint, clearTimers, run]);

  function submit() {
    if (text.trim().length < 4) {
      setError("맡길 업무를 한 줄만 적어주세요");
      return;
    }
    setError(null);
    startDraft(text.trim(), files);
    router.push("/new");
  }

  const showComposite = phase === "composite";
  const showFull = phase === "full";
  const copyHidden = showComposite || showFull;

  return (
    <section className={s.wrap} aria-labelledby="hero-h">
      <div className={s.stage} ref={stageRef}>
        {filmOk ? (
          <video
            ref={videoRef}
            className={`${s.film} ${showFull ? s.filmOut : ""}`}
            src={HERO_MEDIA.src}
            poster={HERO_MEDIA.poster}
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            onError={() => setFilmOk(false)}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img className={s.film} src={HERO_MEDIA.poster} alt="" aria-hidden="true" />
        )}

        <div className={`${s.veil} ${showFull ? s.veilOut : ""}`} aria-hidden="true" />

        <div className={`${s.screenLayer} ${showComposite ? s.screenOn : ""}`} aria-hidden="true">
          <div className={s.screenUI} ref={uiRef} style={{ width: UI_W, height: UI_H }}>
            <HeroScreen step={step} />
          </div>
        </div>

        {showFull ? (
          <div className={`${s.full} ${s.fullOn}`} aria-hidden="true">
            <HeroScreen step={step} />
          </div>
        ) : null}

        <div className={`${s.copy} ${copyHidden ? s.copyOut : ""}`}>
          <h1 className={s.headline} id="hero-h">맡길 일을 적어주세요</h1>
          <p className={s.sub}>카파피가 작업 조건을 정리하고 맞는 제안을 추천합니다.</p>
        </div>

        {!reduced ? (
          <button type="button" className={`${s.replay} ${showFull ? s.replayLight : ""}`} onClick={run}>
            다시 보기
          </button>
        ) : null}
      </div>

      <div className={s.actionWrap}>
        <div className={s.action}>
          <label className="sr" htmlFor="work">맡길 업무</label>
          <input
            id="work"
            className={s.input}
            placeholder="어떤 작업이 필요하신가요?"
            value={text}
            onChange={(e) => { setText(e.target.value); if (error) setError(null); }}
            onKeyDown={(e) => { if (e.key === "Enter") submit(); }}
            aria-invalid={error ? true : undefined}
          />
          <input
            id="file"
            type="file"
            multiple
            className={s.fileInput}
            onChange={(e) => {
              const picked = Array.from(e.target.files ?? []).map((f) => ({
                name: f.name,
                size: f.size >= 1048576 ? `${(f.size / 1048576).toFixed(1)} MB` : `${Math.max(1, Math.round(f.size / 1024))} KB`,
              }));
              setFiles((prev) => [...prev, ...picked].slice(0, 4));
              e.target.value = "";
            }}
          />
          <label htmlFor="file" className={s.attach}><span aria-hidden="true">＋</span> 파일 첨부</label>
          <button type="button" className={s.submit} onClick={submit}>
            의뢰 등록 <span aria-hidden="true">→</span>
          </button>

          {files.length > 0 ? (
            <div className={s.files}>
              {files.map((f, i) => (
                <span key={`${f.name}-${i}`} className={s.file}>
                  <span className={s.fileName}>{f.name}</span>
                  <span className="num">{f.size}</span>
                  <button type="button" className={s.fileX} aria-label={`${f.name} 첨부 취소`}
                    onClick={() => setFiles((p) => p.filter((_, x) => x !== i))}>×</button>
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {error ? <p className={s.err} role="alert">{error}</p> : null}

      <div className={s.chips}>
        {CHIPS.map((c) => (
          <button key={c} type="button" className={s.chip} onClick={() => { setText(c); setError(null); }}>
            {c}
          </button>
        ))}
      </div>
    </section>
  );
}
