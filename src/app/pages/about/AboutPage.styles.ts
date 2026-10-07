"use client";

import styled, { css } from "styled-components";
import type { SkillLevel } from "./data/skills.mock";
import { cardReveal } from "@/shared/styles/cardReveal";

const skillWidths: Record<SkillLevel, string> = {
  basic: "0%",
  intermediate: "50%",
  advanced: "100%",
};

export const AboutIntro = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  max-width: 58ch;
  margin-bottom: clamp(3rem, 6vw, 5rem);
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fonts.size.md};
  line-height: 1.7;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    line-height: 1.6;
  }
`;

export const SectionTitleRow = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const ServiceGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.wide}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled.li<{ $textVisible: boolean }>`
  ${cardReveal}
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  min-height: 190px;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.gradients.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.subtle};
  border-radius: ${({ theme }) => theme.radius.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 40px minmax(0, 1fr);
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const ServiceTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.size.md};
  font-weight: ${({ theme }) => theme.fonts.weight.semibold};
  line-height: 1.4;
`;

export const ServiceDescription = styled.p`
  margin-top: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: ${({ theme }) => theme.fonts.size.sm};
`;

export const TechnologyList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const SkillsSection = styled.section`
  margin-top: clamp(3rem, 6vw, 5rem);
  padding-top: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.border.subtle};
`;

export const SkillsCard = styled.div`
  container: skills / inline-size;
  --skill-label-width: clamp(120px, 14vw, 180px);
  --skill-marker-size: 10px;

  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: clamp(1rem, 3vw, 2rem);
  background: ${({ theme }) => theme.gradients.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.subtle};
  border-radius: ${({ theme }) => theme.radius.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    --skill-label-width: 112px;
    column-gap: ${({ theme }) => theme.spacing.sm};
  }
`;

export const SkillScale = styled.div`
  display: grid;
  grid-template-columns: var(--skill-label-width) minmax(0, 1fr);
  column-gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    column-gap: ${({ theme }) => theme.spacing.sm};
  }

  @container skills (max-width: ${({ theme }) => theme.skillScale.stackedMaxWidth}) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const SkillScaleLabels = styled.div`
  container-type: inline-size;
  grid-column: 2;
  position: relative;
  min-height: 1.5em;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fonts.size.sm};

  > span {
    position: absolute;
    top: 0;
    font-size: ${({ theme }) => theme.skillScale.labelFontSize};
    white-space: nowrap;
  }

  > span:first-child { left: 0; }
  > span:nth-child(2) { left: 50%; transform: translateX(-50%); }
  > span:last-child { right: 0; }

  @container skills (max-width: ${({ theme }) => theme.skillScale.stackedMaxWidth}) {
    grid-column: 1;
  }
`;

export const SkillList = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const SkillRow = styled.li`
  display: grid;
  grid-template-columns: var(--skill-label-width) minmax(0, 1fr);
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: ${({ theme }) => theme.spacing.sm};
  }

  @container skills (max-width: ${({ theme }) => theme.skillScale.stackedMaxWidth}) {
    grid-template-columns: minmax(0, 1fr);
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

export const SkillName = styled.span`
  min-width: 0;
  font-size: ${({ theme }) => theme.fonts.size.md};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  text-align: left;
`;

export const SkillTrack = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.spacing.lg};
`;

export const SkillLine = styled.div`
  position: absolute;
  left: calc(var(--skill-marker-size) / 2);
  right: calc(var(--skill-marker-size) / 2);
  height: 2px;
  background: ${({ theme }) => theme.colors.border.default};
`;

export const SkillFill = styled.div<{ $level: SkillLevel; $animate: boolean }>`
  width: ${({ $level, $animate }) => $animate ? skillWidths[$level] : "0%"};
  height: 100%;
  background: ${({ theme }) => theme.colors.accent.primary};
  /* Preserve the explicitly configured entrance timing over the global motion reduction. */
  transition: width ${({ theme }) => theme.transitions.skillFill} !important;
`;

export const SkillMarker = styled.span<{
  $active: boolean;
  $current: boolean;
  $animate: boolean;
  $delay: number;
}>`
  position: relative;
  width: var(--skill-marker-size);
  height: var(--skill-marker-size);
  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.radius.round};
  background: ${({ theme }) => theme.colors.border.projectHover};

  ${({ $active, $current, $animate, $delay, theme }) => $active && css`
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background: ${theme.colors.accent.primary};
      box-shadow: ${$current ? `0 0 0 5px ${theme.colors.border.default}` : "none"};
      opacity: ${$animate ? 1 : 0};
      transition: opacity ${theme.motion.skills.markerDuration}ms ease ${$animate ? $delay : 0}ms !important;
    }
  `}
`;
