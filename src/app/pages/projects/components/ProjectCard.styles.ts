"use client";

import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";

const verticalImageLayout = css`
  min-height: 0;
  aspect-ratio: 16 / 9;
  border-right: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.subtle};
`;

export const ProjectLink = styled(Link)<{ $vertical: boolean }>`
  display: grid;
  grid-template-columns: ${({ $vertical }) =>
    $vertical ? "minmax(0, 1fr)" : "minmax(0, 42%) minmax(0, 1fr)"};
  height: 100%;
  overflow: hidden;
  background: ${({ theme }) => theme.gradients.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.subtle};
  border-radius: ${({ theme }) => theme.radius.md};
  transition: border-color ${({ theme }) => theme.transitions.normal};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-color: ${({ theme }) => theme.colors.border.projectHover};
    }
  }

  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.border.projectHover};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: border-color ${({ theme }) => theme.transitions.normal} !important;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const ProjectImageFrame = styled.div<{ $vertical: boolean; $compact: boolean }>`
  position: relative;
  min-height: 280px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.projectImage};
  border-right: 1px solid ${({ theme }) => theme.colors.border.subtle};

  ${({ $vertical }) => $vertical && verticalImageLayout}

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    ${verticalImageLayout}
  }

  ${({ $compact }) =>
    $compact &&
    css`
      height: clamp(160px, 14vw, 180px);
      aspect-ratio: auto;
    `}
`;

export const ProjectImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${({ theme }) => theme.transitions.projectImageZoom};

  @media (hover: hover) and (pointer: fine) {
    ${ProjectLink}:hover & {
      transform: scale(1.1);
    }
  }

  ${ProjectLink}:focus-visible & {
    transform: scale(1.1);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: transform ${({ theme }) => theme.transitions.projectImageZoom} !important;
  }
`;

export const ProjectImageOverlay = styled.span`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background: rgba(8, 10, 13, 0.56);
  opacity: 0;
  pointer-events: none;
  transition: opacity ${({ theme }) => theme.transitions.normal};

  @media (hover: hover) and (pointer: fine) {
    ${ProjectLink}:hover & {
      opacity: 1;
    }
  }

  ${ProjectLink}:focus-visible & {
    opacity: 1;
  }

  @media (hover: none) {
    background: transparent;
    opacity: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: opacity ${({ theme }) => theme.transitions.normal} !important;
  }
`;

export const ProjectViewIcon = styled.span`
  display: grid;
  width: 60px;
  height: 60px;
  place-items: center;
  color: ${({ theme }) => theme.colors.accent.primary};
  background: ${({ theme }) => theme.gradients.iconTile};
  border: 1px solid ${({ theme }) => theme.colors.border.iconTile};
  border-radius: ${({ theme }) => theme.radius.md};

  svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 56px;
    height: 56px;
  }
`;

export const ProjectContent = styled.div<{ $compact: boolean }>`
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: ${({ theme, $compact }) =>
    $compact ? theme.spacing.md : theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const ProjectHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
`;

export const ProjectTitle = styled.h2<{ $compact: boolean }>`
  min-width: 0;
  font-size: ${({ theme, $compact }) =>
    $compact ? theme.fonts.size.md : theme.fonts.size.lg};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  overflow-wrap: anywhere;
  transition: color ${({ theme }) => theme.transitions.fast};

  @media (hover: hover) and (pointer: fine) {
    ${ProjectLink}:hover & {
      color: ${({ theme }) => theme.colors.accent.primary};
    }
  }

  ${ProjectLink}:focus-visible & {
    color: ${({ theme }) => theme.colors.accent.primary};
  }
`;

export const ProjectCategory = styled.p`
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: ${({ theme }) => theme.fonts.size.sm};
`;

export const ProjectSummary = styled.p<{ $compact: boolean }>`
  margin-top: ${({ theme, $compact }) =>
    $compact ? theme.spacing.sm : theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.muted};
`;

export const ProjectTechnologyList = styled.ul<{ $compact: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme, $compact }) =>
    $compact ? theme.spacing.xs : theme.spacing.sm};
  margin-top: auto;
  padding-top: ${({ theme, $compact }) =>
    $compact ? theme.spacing.sm : theme.spacing.lg};

  ${({ $compact, theme }) =>
    $compact &&
    css`
      & > li > span {
        padding: 0.2rem 0.5rem;
        font-size: ${theme.fonts.size.xs};
      }
    `}
`;
