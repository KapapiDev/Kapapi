"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useId, useRef, useState } from "react";

import { useDemo } from "@/lib/demo-store";
import type { FileObject } from "@/lib/types";
import { HeroProductMovie } from "./hero-media";
import { Button } from "./ui";
import s from "./hero.module.css";

/**
 * Category-neutral examples. The master hero must never read as a CAD-only
 * service (docs/HERO_MEDIA.md section 9) — the CAD case sits below the fold.
 */
const EXAMPLES = [
  "손그림 도면을 CAD 현황도로 오늘 저녁까지 정리해주세요",
  "상세페이지 이미지 12종 배경 정리하고 규격 맞춰주세요",
  "회사소개서 32페이지 서식을 사내 템플릿으로 통일해주세요",
  "현장 실측 기록 420행을 엑셀로 정리해주세요",
];

const PROCESS = ["일 등록", "카파피 자동 배정", "작업", "결과 확인"];

function toFileObject(file: File): FileObject {
  const ext = file.name.split(".").pop()?.toUpperCase() ?? "FILE";
  const mb = file.size / (1024 * 1024);
  return {
    name: file.name,
    kind: ext.slice(0, 4),
    size: mb >= 1 ? `${mb.toFixed(1)} MB` : `${Math.max(1, Math.round(file.size / 1024))} KB`,
  };
}

export function Hero() {
  const router = useRouter();
  const { startDraft } = useDemo();
  const [text, setText] = useState("");
  const [files, setFiles] = useState<FileObject[]>([]);
  const [error, setError] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputId = useId();
  const errorId = useId();

  function handoff() {
    if (text.trim().length < 4) {
      setError("맡길 일을 한 줄만 적어주세요.");
      textareaRef.current?.focus();
      return;
    }
    setError(null);
    startDraft(text.trim(), files);
    router.push("/new");
  }

  return (
    <section className={s.hero} aria-labelledby="hero-title">
      <div className={`k-frame ${s.grid}`}>
        <div className={s.entryColumn}>
          <p className={s.eyebrow}>
            <span className={s.eyebrowDot} aria-hidden="true" />
            QUEST NETWORK · ONLINE
          </p>

          <h1 className={s.headline} id="hero-title">
            할 일을 던져주세요.
          </h1>

          <p className={s.promise}>
            전문가들이 가격과 완료시간을 제안하고, 카파피가 가장 적합한 작업자를 자동으로
            배정해 결과를 가져옵니다.
          </p>

          <div className={s.entry}>
            <label className="k-sr" htmlFor="work-entry">
              맡길 일을 적어주세요
            </label>
            <textarea
              id="work-entry"
              ref={textareaRef}
              className={s.entryTextarea}
              placeholder="맡길 일을 적어주세요. 예: 손그림 도면을 CAD 현황도로 오늘 저녁까지 정리해주세요"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                if (error) setError(null);
              }}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? errorId : undefined}
            />

            <div className={s.entryBar}>
              <input
                id={fileInputId}
                type="file"
                multiple
                className={s.attachInput}
                onChange={(e) => {
                  const picked = Array.from(e.target.files ?? []).map(toFileObject);
                  setFiles((prev) => [...prev, ...picked].slice(0, 4));
                  e.target.value = "";
                }}
              />
              <label htmlFor={fileInputId} className={s.attach}>
                <span aria-hidden="true">＋</span> 파일 첨부
              </label>

              <Button
                variant="accent"
                size="lg"
                className={s.submit}
                onClick={handoff}
                confirmFeedback
              >
                일 맡기기 <span aria-hidden="true">→</span>
              </Button>
            </div>

            {files.length > 0 ? (
              <div className={s.attached}>
                {files.map((f, i) => (
                  <span key={`${f.name}-${i}`} className={s.attachedItem}>
                    <span className={s.attachedName}>{f.name}</span>
                    <span>{f.size}</span>
                    <button
                      type="button"
                      className={s.attachedRemove}
                      aria-label={`${f.name} 첨부 취소`}
                      onClick={() => setFiles((prev) => prev.filter((_, idx) => idx !== i))}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          {error ? (
            <p className={s.error} id={errorId} role="alert">
              {error}
            </p>
          ) : null}

          <p className={s.examplesLabel}>이런 일들이 올라옵니다</p>
          <div className={s.examples}>
            {EXAMPLES.map((example) => (
              <button
                key={example}
                type="button"
                className={s.example}
                onClick={() => {
                  setText(example);
                  setError(null);
                  textareaRef.current?.focus();
                }}
              >
                {example}
              </button>
            ))}
          </div>

          <div className={s.process}>
            {PROCESS.map((step, i) => (
              <span key={step} style={{ display: "inline-flex", gap: 10, alignItems: "center" }}>
                {i > 0 ? (
                  <span className={s.processArrow} aria-hidden="true">
                    →
                  </span>
                ) : null}
                <span className={s.processStep}>{step}</span>
              </span>
            ))}
          </div>

          <p className={s.secondary}>
            일하러 오셨나요?
            <Link href="/board" className={s.secondaryLink}>
              일 찾기 <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>

        <div className={s.media}>
          <HeroProductMovie />
        </div>
      </div>
    </section>
  );
}
