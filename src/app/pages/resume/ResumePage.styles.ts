"use client";

import styled from "styled-components";

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

export const TimelineTitleIcon = styled.span`
  position: relative;
  z-index: 2;
  display: grid;
  flex: 0 0 auto;
  width: 48px;
  height: 48px;
  place-items: center;
  color: ${({ theme }) => theme.colors.accent.primary};
  background:
    linear-gradient(rgba(255, 219, 134, 0.04), rgba(255, 219, 134, 0.04)),
    ${({ theme }) => theme.colors.background.page};
  border: 1px solid rgba(255, 219, 134, 0.2);
  border-radius: ${({ theme }) => theme.radius.md};

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 40px;
    height: 40px;
  }
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

export const SkillsCard = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: clamp(1rem, 3vw, 2rem);
  background: ${({ theme }) => theme.gradients.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.subtle};
  border-radius: ${({ theme }) => theme.radius.md};
`;

export const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fonts.size.sm};
`;

export const SkillTrack = styled.div`
  height: 7px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background.soft};
  border-radius: ${({ theme }) => theme.radius.round};
`;

export const SkillFill = styled.div<{ $level: number }>`
  width: ${({ $level }) => `${$level}%`};
  height: 100%;
  background: ${({ theme }) => theme.gradients.accent};
  border-radius: inherit;
`;
