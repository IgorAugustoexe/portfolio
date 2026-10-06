"use client";

import styled from "styled-components";

export const SelectBox = styled.div`
  display: none;
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const SelectTrigger = styled.button<{ $open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  width: 100%;
  min-height: 48px;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  background: ${({ theme }) => theme.colors.background.panel};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.radius.projectFilter};
  text-align: left;
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.border.projectHover};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.border.projectHover};
    outline-offset: 2px;
  }

  svg {
    width: ${({ theme }) => theme.fonts.size.xs};
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.text.muted};
    transform: rotate(${({ $open }) => ($open ? "180deg" : "0deg")});
    transition: transform ${({ theme }) => theme.transitions.fast};
  }
`;

export const SelectList = styled.ul`
  position: absolute;
  top: calc(100% + ${({ theme }) => theme.spacing.xs});
  left: 0;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xs};
  z-index: 2;
  color: ${({ theme }) => theme.colors.text.secondary};
  background: ${({ theme }) => theme.colors.background.panel};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.radius.projectFilter};
  box-shadow: ${({ theme }) => theme.shadows.button};
`;

export const SelectOption = styled.li<{ $active: boolean }>`
  display: flex;
  align-items: center;
  min-height: 44px;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.background.soft : "transparent"};
  cursor: pointer;
  transition: background ${({ theme }) => theme.transitions.fast};
`;
