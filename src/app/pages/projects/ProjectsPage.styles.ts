"use client";

import styled from "styled-components";
import { popIn } from "@/shared/styles/popIn";

export const FilterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const FilterButton = styled.button<{ $active: boolean }>`
  min-height: 42px;
  padding: 0 ${({ theme }) => theme.spacing.xs};
  color: ${({ theme, $active }) => ($active ? theme.colors.accent.primary : theme.colors.text.secondary)};
  background: transparent;
  font: inherit;
  font-size: ${({ theme }) => theme.fonts.size.sm};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  cursor: pointer;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover:not([aria-pressed="true"]) {
    color: ${({ theme }) => theme.colors.text.muted};
  }

  &:disabled {
    cursor: auto;
    opacity: 1;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.text.secondary};
    outline-offset: 2px;
  }
`;

export const ProjectGrid = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const ProjectItem = styled.li`
  min-width: 0;
  ${popIn}
`;

export const EmptyState = styled.p`
  padding: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text.muted};
  background: ${({ theme }) => theme.colors.background.elevated};
  border: 1px solid ${({ theme }) => theme.colors.border.subtle};
  border-radius: ${({ theme }) => theme.radius.md};
  text-align: center;
`;
