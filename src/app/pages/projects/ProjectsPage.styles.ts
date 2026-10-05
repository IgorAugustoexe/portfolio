"use client";

import styled from "styled-components";

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

export const FilterSelectLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const FilterSelect = styled.select`
  display: none;
  width: 100%;
  min-height: 44px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  background: ${({ theme }) => theme.colors.background.panel};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.radius.sm};
  font: inherit;

  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.border.highlighted};
    outline: 2px solid ${({ theme }) => theme.colors.accent.primary};
    outline-offset: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const ProjectGrid = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const EmptyState = styled.p`
  padding: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text.muted};
  background: ${({ theme }) => theme.colors.background.elevated};
  border: 1px solid ${({ theme }) => theme.colors.border.subtle};
  border-radius: ${({ theme }) => theme.radius.md};
  text-align: center;
`;
