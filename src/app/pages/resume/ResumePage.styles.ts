"use client";

import styled from "styled-components";
import { IconTile } from "@/shared/components/ui/IconTile/IconTile";

export const ResumeGrid = styled.div`
  display: grid;
  gap: clamp(2.5rem, 5vw, 4rem);
`;

export const Section = styled.section``;

export const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: clamp(1.4rem, 2vw, 1.8rem);
  font-weight: ${({ theme }) => theme.fonts.weight.semibold};

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    background: ${({ theme }) => theme.colors.accent.primary};
    border-radius: ${({ theme }) => theme.radius.round};
    box-shadow: 0 0 0 6px rgba(255, 219, 134, 0.09);
  }
`;

export const TimelineSectionTitle = styled(SectionTitle)`
  &::before {
    display: none;
  }
`;

export const TimelineTitleIcon = styled(IconTile)`
  position: relative;
  z-index: 2;
`;

export const Timeline = styled.ol`
  --timeline-gutter: calc(${({ theme }) => theme.spacing.xxl} + ${({ theme }) => theme.spacing.sm});
  --timeline-gap: ${({ theme }) => theme.spacing.lg};
  --timeline-axis: 24px;
  --timeline-title-lead: 48px;
  --timeline-marker-offset: calc(${({ theme }) => theme.spacing.lg} + 14px);

  display: grid;
  gap: var(--timeline-gap);
  padding-left: var(--timeline-gutter);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    --timeline-gutter: calc(${({ theme }) => theme.spacing.xl} + ${({ theme }) => theme.spacing.sm});
    --timeline-axis: 20px;
    --timeline-title-lead: 44px;
  }
`;

export const TimelineEntry = styled.li`
  position: relative;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.gradients.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.subtle};
  border-radius: ${({ theme }) => theme.radius.md};

  &::before {
    content: "";
    position: absolute;
    top: -15px;
    bottom: -12px;
    left: calc(var(--timeline-axis) - var(--timeline-gutter));
    width: 1px;
    background: ${({ theme }) => theme.colors.border.default};
  }

  &:first-child::before {
    top: calc(-1 * var(--timeline-title-lead));
  }

  &:last-child::before {
    bottom: calc(100% - var(--timeline-marker-offset) + 2px);
  }

  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    top: calc(var(--timeline-marker-offset) - 6px);
    left: calc(var(--timeline-axis) - var(--timeline-gutter) - 5.5px);
    width: 12px;
    height: 12px;
    background: ${({ theme }) => theme.gradients.accent};
    border-radius: ${({ theme }) => theme.radius.round};
    box-shadow: 0 0 0 7px ${({ theme }) => theme.colors.background.soft};
  }
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

export const LanguageSkillRow = styled.li`
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
