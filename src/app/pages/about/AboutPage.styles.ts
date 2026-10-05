"use client";

import Link from "next/link";
import styled from "styled-components";

export const AccentLine = styled.span`
  display: inline-block;
  flex: 0 0 30px;
  width: 30px;
  height: 2px;
  background: ${({ theme }) => theme.colors.accent.primary};
  border-radius: ${({ theme }) => theme.radius.round};
`;

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

export const SectionHeading = styled.h2`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: ${({ theme }) => theme.fonts.weight.semibold};
  line-height: 1.2;
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

export const ServiceCard = styled.li`
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

export const ServiceIcon = styled.span`
  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;
  color: ${({ theme }) => theme.colors.accent.primary};
  background: ${({ theme }) => theme.gradients.iconTile};
  border: 1px solid ${({ theme }) => theme.colors.border.iconTile};
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

  li {
    padding: 0.15rem 0.55rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    border: 1px solid ${({ theme }) => theme.colors.border.default};
    border-radius: ${({ theme }) => theme.radius.round};
    font-size: ${({ theme }) => theme.fonts.size.xs};
  }
`;

export const FeaturedSection = styled.section`
  margin-top: clamp(3rem, 6vw, 5rem);
  padding-top: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.border.subtle};
`;

export const SectionIntro = styled.p`
  max-width: 55ch;
  margin-top: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: ${({ theme }) => theme.fonts.size.sm};
`;

export const FeaturedLink = styled(Link)`
  flex: 0 0 auto;
  display: inline-flex;
  gap: ${({ theme }) => theme.spacing.sm};
  min-height: 44px;
  align-items: center;
  color: ${({ theme }) => theme.colors.accent.primary};
  font-size: ${({ theme }) => theme.fonts.size.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const FeaturedGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, ${({ theme }) => theme.layout.featuredCardMinWidth}), 1fr));
  grid-auto-rows: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
`;
