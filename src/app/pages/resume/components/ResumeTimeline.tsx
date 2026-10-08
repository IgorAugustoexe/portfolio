"use client";

import { useEffect, useRef, useState } from "react";
import type { TimelineItem } from "../models/resume.model";
import type { AppIconName } from "@/shared/components/ui/AppIcon/AppIcon";
import type { Locale } from "@/shared/i18n/config";
import { getLocalizedText } from "@/shared/i18n/getLocalizedText";
import { theme } from "@/shared/styles/theme";
import {
  EntryDescription,
  EntryMeta,
  EntryTitle,
  Section,
  Timeline,
  TimelineBall,
  TimelineContent,
  TimelineEntry,
  TimelineMarker,
  TimelinePath,
  TimelineSectionTitle,
  TimelineTitleIcon,
  TimelineViewport,
} from "../ResumePage.styles";

type Phase = "idle" | "moving" | "arrived" | "done";
interface Geometry {
  axis: number;
  origin: number;
  stops: number[];
}

export function ResumeTimeline({
  title,
  items,
  locale,
  icon,
}: {
  title: string;
  items: TimelineItem[];
  locale: Locale;
  icon: AppIconName;
}) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const [geometry, setGeometry] = useState<Geometry | null>(null);
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState<{ index: number; phase: Phase }>({ index: 0, phase: "idle" });

  useEffect(() => {
    const heading = headingRef.current;
    const viewport = viewportRef.current;
    const list = listRef.current;
    const icon = heading?.querySelector("span");
    if (!heading || !viewport || !list || !icon) return;
    let mounted = true;

    const measure = () => {
      if (!mounted) return;
      const bounds = viewport.getBoundingClientRect();
      const iconBounds = icon.getBoundingClientRect();
      setGeometry({
        axis: iconBounds.left + iconBounds.width / 2 - bounds.left,
        origin: iconBounds.top + iconBounds.height / 2 - bounds.top,
        stops: Array.from(list.children).map(
          (entry) =>
            entry.getBoundingClientRect().top -
            bounds.top +
            parseFloat(getComputedStyle(entry).paddingTop) +
            theme.resumeTimeline.markerTitleOffset,
        ),
      });
    };

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(viewport);
    resizeObserver.observe(heading);
    Array.from(list.children).forEach((entry) => resizeObserver.observe(entry));
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          intersectionObserver.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    intersectionObserver.observe(heading);
    measure();
    document.fonts.ready.then(measure);

    return () => {
      mounted = false;
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [items, locale]);

  const ready = geometry !== null && geometry.stops.length === items.length && items.length > 0;

  useEffect(() => {
    if (!ready || !visible || step.phase === "done") return;
    const timing = theme.motion.resumeTimeline;
    const duration = {
      idle: timing.startDelay,
      moving: timing.travelDuration,
      arrived: timing.stepPause,
    }[step.phase];

    const timer = setTimeout(() => {
      setStep((current) => {
        if (current.phase === "idle") return { ...current, phase: "moving" };
        if (current.phase === "moving") return { ...current, phase: "arrived" };
        if (current.index + 1 < items.length) return { index: current.index + 1, phase: "moving" };
        return { ...current, phase: "done" };
      });
    }, duration);
    return () => clearTimeout(timer);
  }, [ready, visible, step, items.length]);

  const started = ready && step.phase !== "idle";
  const currentPosition = started ? geometry.stops[step.index] : (geometry?.origin ?? 0);
  const arrived = step.phase === "arrived" || step.phase === "done";

  return (
    <Section data-timeline-phase={step.phase} data-timeline-active={step.index}>
      <TimelineSectionTitle ref={headingRef}>
        <TimelineTitleIcon name={icon} />
        {title}
      </TimelineSectionTitle>
      <TimelineViewport ref={viewportRef}>
        <TimelinePath
          aria-hidden="true"
          $visible={started}
          style={{
            left: geometry?.axis ?? 0,
            top: geometry?.origin ?? 0,
            height: started ? Math.max(0, currentPosition - geometry.origin) : 0,
          }}
        />
        {geometry?.stops.slice(0, step.index).map((position, index) => (
          <TimelineMarker key={index} aria-hidden="true" style={{ left: geometry.axis, top: position }} />
        ))}
        <TimelineBall
          aria-hidden="true"
          $visible={started}
          style={{ left: geometry?.axis ?? 0, top: currentPosition }}
        />
        <Timeline ref={listRef}>
          {items.map((item, index) => (
            <TimelineEntry
              key={`${item.organization}-${item.period}-${index}`}
              $visible={index < step.index || (index === step.index && arrived)}
            >
              <TimelineContent $visible={index < step.index || (index === step.index && arrived)}>
                <EntryTitle>{getLocalizedText(item.title, locale)}</EntryTitle>
                <EntryMeta>
                  {item.organization} · {item.period}
                </EntryMeta>
                <EntryDescription>{getLocalizedText(item.description, locale)}</EntryDescription>
              </TimelineContent>
            </TimelineEntry>
          ))}
        </Timeline>
      </TimelineViewport>
    </Section>
  );
}
