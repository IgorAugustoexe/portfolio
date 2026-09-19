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

export const Timeline = styled.ol`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  padding-left: 0;
  border-left: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`;

export const TimelineEntry = styled.li`
  position: relative;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.gradients.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.subtle};
  border-radius: ${({ theme }) => theme.radius.md};
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
