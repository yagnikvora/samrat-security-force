"use client";

import { useEffect, useMemo, useState } from "react";

type AnimatedStatValueProps = {
  value: string;
  delayMs?: number;
  durationMs?: number;
};

type ParsedStatValue = {
  target: number;
  suffix: string;
};

function parseLeadingNumber(value: string): ParsedStatValue | null {
  const normalized = value.trim();
  const match = normalized.match(/^(\d[\d,]*)(.*)$/);

  if (!match) {
    return null;
  }

  const target = Number.parseInt(match[1].replace(/,/g, ""), 10);

  if (!Number.isFinite(target)) {
    return null;
  }

  return {
    target,
    suffix: match[2] ?? "",
  };
}

export function AnimatedStatValue({ value, delayMs = 0, durationMs = 1400 }: AnimatedStatValueProps) {
  const parsed = useMemo(() => parseLeadingNumber(value), [value]);
  const [displayValue, setDisplayValue] = useState<number>(parsed?.target ? 0 : Number.NaN);

  useEffect(() => {
    if (!parsed) {
      return;
    }

    if (typeof window === "undefined") {
      setDisplayValue(parsed.target);
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayValue(parsed.target);
      return;
    }

    let frameId = 0;
    const startAt = performance.now() + delayMs;

    const tick = (now: number) => {
      if (now < startAt) {
        frameId = window.requestAnimationFrame(tick);
        return;
      }

      const elapsed = now - startAt;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValue = Math.round(parsed.target * eased);

      setDisplayValue((current) => (current === nextValue ? current : nextValue));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    setDisplayValue(0);
    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [parsed, delayMs, durationMs]);

  if (!parsed) {
    return value;
  }

  const renderedNumber = Number.isNaN(displayValue) ? 0 : displayValue;
  return `${renderedNumber.toLocaleString()}${parsed.suffix}`;
}
