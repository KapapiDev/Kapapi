"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { useDemo } from "@/lib/demo";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import s from "./hero.module.css";

/**
 * The founder's file, used as delivered. It is H.264 / yuv420p in MP4 at
 * 1920x1080, which every current browser decodes, so it is served byte-for-byte
 * rather than re-encoded, and it is never cropped, filtered or drawn over.
 */
export const HERO_MEDIA = { src: "/media/KAPAPI.mp4", w: 1920, h: 1080 } as const;

const MAX_FILES = 5;

function size(bytes: number) {
  return bytes >= 1024 * 1024
    ? `${(bytes / (1024 * 1024)).toFixed(1)} MB`
    : `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

/**
 * Hero: what to do on the left, the film on the right. No headline over the
 * video, no product surface composited into it, nothing covering it.
 */
export function Hero() {
  const router = useRouter();
  const { startDraft } = useDemo();

  const videoRef = useRef<HTMLVideoElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState("");
  const [files, setFiles] = useState<{ name: string; size: string }[]>([]);
  const [error, setError] = useState<string | null>(null);
  const reduced = useReducedMotion();

  /* Hold the film still for reduced-motion, and stop decoding once it scrolls away. */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (reduced) { v.pause(); v.currentTime = 0; return; }

    const play = () => void v.play().catch(() => { /* autoplay may be blocked */ });
    const io = new IntersectionObserver(
      ([e]) => (e?.isIntersecting ? play() : v.pause()),
      { threshold: 0.15 },
    );
    io.observe(v);
    const onVisible = () => (document.hidden ? v.pause() : play());
    document.addEventListener("visibilitychange", onVisible);
    return () => { io.disconnect(); document.removeEventListener("visibilitychange", onVisible); };
  }, [reduced]);

  function addFiles(list: FileList | null) {
    if (!list?.length) return;
    setFiles((prev) => [
      ...prev,
      ...Array.from(list).map((f) => ({ name: f.name, size: size(f.size) })),
    ].slice(0, MAX_FILES));
    setError(null);
  }

  function submit() {
    if (text.trim().length < 4) {
      setError("맡길 일을 한 줄만 적어 주세요.");
      inputRef.current?.focus();
      return;
    }
    setError(null);
    startDraft(text.trim(), files);
    router.push("/new");
  }

  return (
    <section className={s.hero} aria-labelledby="hero-h">
      <div className={s.grid}>
        <div className={s.side}>
          <h1 className={s.headline} id="hero-h">오늘은 어떤 일을 끝낼까요?</h1>

          {/* The heading is the field's label, so the placeholder is not carrying it alone. */}
          <div className={s.field}>
            <label className="sr" htmlFor="work">맡길 일</label>
            <div className={s.box}>
              <input
                id="hero-files"
                className={s.fileInput}
                type="file"
                multiple
                onChange={(e) => { addFiles(e.target.files); e.target.value = ""; }}
              />
              <label htmlFor="hero-files" className={s.plus} title="파일 업로드">
                <span aria-hidden="true">+</span>
                <span className="sr">파일 업로드</span>
              </label>
              <input
                id="work"
                ref={inputRef}
                className={s.input}
                type="text"
                placeholder="파일을 업로드하고 간단하게 설명해 주세요."
                value={text}
                aria-describedby={error ? "hero-err" : undefined}
                onChange={(e) => { setText(e.target.value); if (error) setError(null); }}
                onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); submit(); } }}
              />
            </div>

            {files.length > 0 ? (
              <ul className={s.files}>
                {files.map((f, i) => (
                  <li key={`${f.name}-${i}`} className={s.file}>
                    <span className={s.fileName}>{f.name}</span>
                    <span className={s.fileSize}>{f.size}</span>
                    <button
                      type="button"
                      className={s.fileX}
                      onClick={() => setFiles((p) => p.filter((_, j) => j !== i))}
                    >
                      <span aria-hidden="true">×</span>
                      <span className="sr">{f.name} 첨부 취소</span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          {error ? <p className={s.err} id="hero-err" role="alert">{error}</p> : null}

          <button type="button" className={s.submit} onClick={submit}>맡기기</button>
        </div>

        {/* The file as delivered: full frame, original ratio, nothing on top of it. */}
        <div className={s.media}>
          <video
            ref={videoRef}
            className={s.film}
            src={HERO_MEDIA.src}
            width={HERO_MEDIA.w}
            height={HERO_MEDIA.h}
            autoPlay={!reduced}
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            tabIndex={-1}
          />
        </div>
      </div>
    </section>
  );
}
