"use client";

import { useCallback, useState, type ButtonHTMLAttributes, type ReactNode } from "react";

import type { FileObject } from "@/lib/types";
import s from "./ui.module.css";

type ButtonVariant = "primary" | "accent" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Fires the localized sapphire confirmation once, then settles. */
  confirmFeedback?: boolean;
}

export function Button({
  variant = "secondary",
  size = "md",
  confirmFeedback = false,
  className = "",
  onClick,
  children,
  ...rest
}: ButtonProps) {
  const [confirming, setConfirming] = useState(false);

  const handle = useCallback<NonNullable<ButtonHTMLAttributes<HTMLButtonElement>["onClick"]>>(
    (event) => {
      if (confirmFeedback) {
        setConfirming(true);
        window.setTimeout(() => setConfirming(false), 320);
      }
      onClick?.(event);
    },
    [confirmFeedback, onClick],
  );

  const classes = [
    s.btn,
    s[variant],
    size !== "md" ? s[size] : "",
    confirming ? s.confirming : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} onClick={handle} {...rest}>
      {children}
    </button>
  );
}

type ChipTone = "default" | "ink" | "accent" | "ok" | "warn" | "risk";

const TONE_CLASS: Record<ChipTone, string> = {
  default: "",
  ink: s.chipInk,
  accent: s.chipAccent,
  ok: s.chipOk,
  warn: s.chipWarn,
  risk: s.chipRisk,
};

export function Chip({
  tone = "default",
  dot = false,
  children,
  className = "",
}: {
  tone?: ChipTone;
  dot?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={[s.chip, TONE_CLASS[tone], className].filter(Boolean).join(" ")}>
      {dot ? <span className={s.chipDot} aria-hidden="true" /> : null}
      {children}
    </span>
  );
}

export function Field({
  label,
  hint,
  htmlFor,
  children,
}: {
  label: string;
  hint?: string;
  htmlFor?: string;
  children: ReactNode;
}) {
  return (
    <div className={s.field}>
      <label className={s.label} htmlFor={htmlFor}>
        {label}
      </label>
      {children}
      {hint ? <p className={s.hint}>{hint}</p> : null}
    </div>
  );
}

export const inputClass = s.input;
export const textareaClass = s.textarea;

export function SectionHead({
  index,
  title,
  note,
  id,
}: {
  index: string;
  title: string;
  note?: string;
  id?: string;
}) {
  return (
    <div className={s.sectionHead}>
      <div>
        <p className={s.sectionIndex}>{index}</p>
        <h2 className={s.sectionTitle} id={id}>
          {title}
        </h2>
      </div>
      {note ? <p className={s.sectionNote}>{note}</p> : null}
    </div>
  );
}

export function FileRow({ file }: { file: FileObject }) {
  return (
    <div className={s.file}>
      <span className={s.fileKind} aria-hidden="true">
        {file.kind}
      </span>
      <span className={s.fileBody}>
        <span className={s.fileName}>{file.name}</span>
        <span className={s.fileMeta}>
          {file.kind} · {file.size}
          {file.note ? ` · ${file.note}` : ""}
        </span>
      </span>
    </div>
  );
}

export function MetaRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className={s.metaRow}>
      <span className={s.metaKey}>{label}</span>
      <span className={s.metaValue}>{children}</span>
    </div>
  );
}
