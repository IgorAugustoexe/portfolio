"use client";

import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";

const verticalImageLayout = css`
  min-height: 0;
  aspect-ratio: 16 / 9;
  border-right: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.subtle};
  border-radius: ${({ theme }) => `calc(${theme.radius.md} - 1px) calc(${theme.radius.md} - 1px) ${theme.radius.projectImage} ${theme.radius.projectImage}`};
`;

export const ProjectLink = styled(Link)`
  display: grid;
  grid-template-columns: minmax(0, 42%) minmax(0, 1fr);
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

export const ProjectImageFrame = styled.div`
  position: relative;
  min-height: 280px;
  overflow: hidden;
  border-radius: ${({ theme }) => `calc(${theme.radius.md} - 1px) ${theme.radius.projectImage} ${theme.radius.projectImage} calc(${theme.radius.md} - 1px)`};
  border-right: 1px solid ${({ theme }) => theme.colors.border.subtle};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    ${verticalImageLayout}
  }
`;

export const ProjectImage = styled(Image)<{ $thumbnailScale: number }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(${({ $thumbnailScale }) => $thumbnailScale});
  transition: transform ${({ theme }) => theme.transitions.projectImageZoom};

  @media (hover: hover) and (pointer: fine) {
    ${ProjectLink}:hover & {
      transform: scale(${({ $thumbnailScale }) => $thumbnailScale * 1.1});
    }
  }

  ${ProjectLink}:focus-visible & {
    transform: scale(${({ $thumbnailScale }) => $thumbnailScale * 1.1});
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

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: ${({ theme }) => theme.spacing.lg};

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

export const ProjectTitle = styled.h2`
  min-width: 0;
  font-size: ${({ theme }) => theme.fonts.size.lg};
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

export const ProjectSummary = styled.p`
  margin-top: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.muted};
`;

export const ProjectTechnologyList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing.lg};
`;
