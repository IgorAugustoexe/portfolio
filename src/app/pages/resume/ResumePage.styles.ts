"use client";

import styled from "styled-components";

export const ResumeGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xxl};
`;

export const Section = styled.section``;

export const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.fonts.size.lg};
  font-weight: ${({ theme }) => theme.fonts.weight.semibold};

  &::before {
    content: "";
    width: 12px;
    height: 12px;
    background: ${({ theme }) => theme.colors.accent.primary};
    border-radius: ${({ theme }) => theme.radius.round};
    box-shadow: 0 0 0 7px ${({ theme }) => theme.colors.background.elevated};
  }
`;

export const Timeline = styled.ol`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
  padding-left: 1.3rem;
  border-left: 1px solid ${({ theme }) => theme.colors.border.default};
`;

export const TimelineEntry = styled.li`
  position: relative;
  padding-left: ${({ theme }) => theme.spacing.lg};

  &::before {
    content: "";
    position: absolute;
    top: 0.55rem;
    left: calc(-1.3rem - 5px);
    width: 9px;
    height: 9px;
    background: ${({ theme }) => theme.colors.accent.primary};
    border-radius: ${({ theme }) => theme.radius.round};
  }
`;

export const EntryTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.size.md};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
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
  padding: ${({ theme }) => theme.spacing.lg};
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
  height: 8px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background.panel};
  border-radius: ${({ theme }) => theme.radius.round};
`;

export const SkillFill = styled.div<{ $level: number }>`
  width: ${({ $level }) => `${$level}%`};
  height: 100%;
  background: ${({ theme }) => theme.gradients.accent};
  border-radius: inherit;
`;
