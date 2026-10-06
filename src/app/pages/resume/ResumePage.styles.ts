"use client";

import styled, { css } from "styled-components";
import { IconTile } from "@/shared/components/ui/IconTile/IconTile";
import { cardReveal } from "@/shared/styles/cardReveal";

export const ResumeGrid = styled.div`
  display: grid;
  gap: clamp(2.5rem, 5vw, 4rem);
`;

export const Section = styled.section``;

export const TimelineSectionTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: clamp(1.4rem, 2vw, 1.8rem);
  font-weight: ${({ theme }) => theme.fonts.weight.semibold};
`;

export const TimelineTitleIcon = styled(IconTile)`
  position: relative;
  z-index: 2;
`;

export const TimelineViewport = styled.div`
  position: relative;
`;

export const TimelinePath = styled.span<{ $visible: boolean }>`
  position: absolute;
  width: ${({ theme }) => theme.resumeTimeline.lineWidth};
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.border.default};
  pointer-events: none;
  transition: height ${({ theme }) => theme.motion.resumeTimeline.travelDuration}ms
    ${({ theme }) => theme.motion.resumeTimeline.travelEasing} !important;
`;

const markerAppearance = css`
  position: absolute;
  z-index: 1;
  width: ${({ theme }) => theme.resumeTimeline.markerSize};
  height: ${({ theme }) => theme.resumeTimeline.markerSize};
  background: ${({ theme }) => theme.gradients.accent};
  border-radius: ${({ theme }) => theme.radius.circle};
  box-shadow: 0 0 0 ${({ theme }) => theme.resumeTimeline.markerHalo} ${({ theme }) => theme.colors.background.soft};
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

export const TimelineMarker = styled.span`
  ${markerAppearance}
`;

export const TimelineBall = styled.span<{ $visible: boolean }>`
  ${markerAppearance}
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  transition: ${({ $visible, theme }) => $visible
    ? `top ${theme.motion.resumeTimeline.travelDuration}ms ${theme.motion.resumeTimeline.travelEasing}`
    : "none"} !important;
`;

export const Timeline = styled.ol`
  --timeline-gutter: calc(${({ theme }) => theme.spacing.xxl} + ${({ theme }) => theme.spacing.sm});
  --timeline-gap: ${({ theme }) => theme.spacing.lg};

  display: grid;
  gap: var(--timeline-gap);
  padding-left: var(--timeline-gutter);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    --timeline-gutter: calc(${({ theme }) => theme.spacing.xl} + ${({ theme }) => theme.spacing.sm});
  }
`;

export const TimelineEntry = styled.li<{ $visible: boolean }>`
  position: relative;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.gradients.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.subtle};
  border-radius: ${({ theme }) => theme.radius.md};
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  transition: opacity ${({ theme }) => theme.motion.resumeTimeline.cardDuration}ms ease-out !important;
`;

export const TimelineContent = styled.div<{ $visible: boolean }>`
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  transition: opacity ${({ theme }) => theme.motion.resumeTimeline.contentDuration}ms ease-out
    ${({ $visible, theme }) => $visible ? theme.motion.resumeTimeline.cardDuration : 0}ms !important;
`;

export const EntryTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.size.md};
  font-weight: ${({ theme }) => theme.fonts.weight.semibold};
`;

export const EntryMeta = styled.p`
  margin: ${({ theme }) => theme.spacing.xs} 0 ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.accent.primary};
  font-size: ${({ theme }) => theme.fonts.size.sm};
`;

export const EntryDescription = styled.p`
  max-width: 74ch;
  color: ${({ theme }) => theme.colors.text.muted};
`;

export const LanguageHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const LanguageSubtitle = styled.p`
  margin-top: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: ${({ theme }) => theme.fonts.size.md};
`;

export const LanguageSkillList = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const LanguageSkillRow = styled.li<{ $textVisible: boolean }>`
  ${cardReveal}
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr) auto;
  grid-template-areas:
    "icon title level"
    "icon description level";
  align-items: center;
  column-gap: ${({ theme }) => theme.spacing.md};
  row-gap: ${({ theme }) => theme.spacing.xs};
  min-width: 0;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.gradients.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.subtle};
  border-radius: ${({ theme }) => theme.radius.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 40px minmax(0, 1fr) auto;
    grid-template-areas:
      "icon title level"
      "description description description";
    gap: ${({ theme }) => theme.spacing.sm};
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const LanguageSkillIcon = styled(IconTile)`
  grid-area: icon;
`;

export const LanguageLevelBadge = styled.span`
  grid-area: level;
  display: grid;
  min-width: 44px;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  place-items: center;
  color: ${({ theme }) => theme.colors.accent.primary};
  background: ${({ theme }) => theme.gradients.iconTile};
  border: 1px solid ${({ theme }) => theme.colors.border.iconTile};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: ${({ theme }) => theme.fonts.size.sm};
  font-weight: ${({ theme }) => theme.fonts.weight.semibold};
`;

export const LanguageTitle = styled.h3`
  grid-area: title;
  min-width: 0;
  font-size: ${({ theme }) => theme.fonts.size.md};
  font-weight: ${({ theme }) => theme.fonts.weight.semibold};
`;

export const LanguageDescription = styled.p`
  grid-area: description;
  min-width: 0;
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: ${({ theme }) => theme.fonts.size.md};
  line-height: 1.6;
`;
