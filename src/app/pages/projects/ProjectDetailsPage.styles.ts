"use client";

import Link from "next/link";
import styled from "styled-components";
import { IconTile } from "@/shared/components/ui/IconTile/IconTile";
import { cardReveal, contentReveal } from "@/shared/styles/cardReveal";

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  min-height: 44px;
  padding: 0 ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  background: transparent;
  font-size: ${({ theme }) => theme.fonts.size.sm};
  font-weight: ${({ theme }) => theme.fonts.weight.semibold};
  transition: color ${({ theme }) => theme.transitions.fast};

  svg {
    width: ${({ theme }) => theme.fonts.size.sm};
    height: ${({ theme }) => theme.fonts.size.sm};
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: ${({ theme }) => theme.colors.accent.primary};
    }
  }

  &:active {
    color: ${({ theme }) => theme.colors.accent.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent.primary};
    outline-offset: 3px;
  }
`;

export const Overview = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: start;
  margin-top: ${({ theme }) => theme.spacing.xxl};
  padding-top: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.border.subtle};
  text-align: center;
`;

export const Information = styled.div<{ $textVisible: boolean }>`
  ${cardReveal}
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  min-width: 0;

`;

export const ProjectIntroduction = styled.header`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const SmallTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size.lg};
  font-weight: ${({ theme }) => theme.fonts.weight.semibold};
`;

export const ProjectLogoStamp = styled(IconTile)`
  width: ${({ theme }) => theme.projectLogoStamp.size};
  height: ${({ theme }) => theme.projectLogoStamp.size};
  background: ${({ theme }) => theme.colors.background.soft};
  border-color: ${({ theme }) => theme.colors.border.subtle};

  img {
    width: ${({ theme }) => theme.projectLogoStamp.imageSize};
    height: ${({ theme }) => theme.projectLogoStamp.imageSize};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-inline: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: ${({ theme }) => theme.projectLogoStamp.mobileSize};
    height: ${({ theme }) => theme.projectLogoStamp.mobileSize};
  }
`;

export const TechnologyList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Description = styled.p<{ $textVisible: boolean }>`
  ${contentReveal}
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const ResultGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: start;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ResultCard = styled.section<{ $textVisible: boolean }>`
  ${cardReveal}
  padding: clamp(1.25rem, 3vw, 2rem);
  background: ${({ theme }) => theme.gradients.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.subtle};
  border-radius: ${({ theme }) => theme.radius.md};

  p {
    margin-top: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text.muted};
  }
`;

export const ResultHeading = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;
