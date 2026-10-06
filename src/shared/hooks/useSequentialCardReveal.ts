"use client";

import { useEffect, useRef, useState } from "react";
import { theme } from "@/shared/styles/theme";

type Step = { index: number; phase: "idle" | "content" | "done" };

export function useSequentialCardReveal<T extends HTMLElement = HTMLUListElement>(count: number, itemSelector?: string) {
  const listRef = useRef<T>(null);
  const [visible, setVisible] = useState<Set<number>>(() => new Set());
  const [step, setStep] = useState<Step>({ index: 0, phase: "idle" });

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const cards = itemSelector ? list.querySelectorAll(itemSelector) : list.children;
    const indices = new Map(Array.from(cards).map((card, index) => [card, index]));
    const observer = new IntersectionObserver((entries) => {
      const arrived = entries.filter((entry) => entry.isIntersecting);
      if (!arrived.length) return;
      arrived.forEach((entry) => observer.unobserve(entry.target));
      setVisible((previous) => {
        const next = new Set(previous);
        arrived.forEach((entry) => {
          const index = indices.get(entry.target);
          if (index !== undefined) {
            // A restored scroll position can skip the earlier blocks entirely.
            for (let previousIndex = 0; previousIndex <= index; previousIndex++) next.add(previousIndex);
          }
        });
        return next;
      });
    }, { threshold: 0 });
    indices.forEach((_, card) => observer.observe(card));
    return () => observer.disconnect();
  }, [count, itemSelector]);

  const currentVisible = visible.has(step.index);
  useEffect(() => {
    if (!count || step.phase === "done" || (step.phase === "idle" && !currentVisible)) return;
    const timing = theme.motion.cardReveal;
    const duration = step.phase === "idle"
      ? (step.index === 0 ? timing.startDelay : 0)
      : timing.contentDuration;
    const timer = setTimeout(() => {
      setStep((current) => {
        if (current.phase === "idle") return { ...current, phase: "content" };
        if (current.index + 1 < count) return { index: current.index + 1, phase: "idle" };
        return { ...current, phase: "done" };
      });
    }, duration);
    return () => clearTimeout(timer);
  }, [count, currentVisible, step]);

  const isTextVisible = (index: number) =>
    index < step.index || (index === step.index && step.phase !== "idle");

  return { listRef, isTextVisible };
}
