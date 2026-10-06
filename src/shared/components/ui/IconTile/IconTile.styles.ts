"use client";

import styled from "styled-components";

export const Tile = styled.span<{ $size: "standard" | "large" }>`
  display: grid;
  flex: 0 0 auto;
  width: ${({ theme, $size }) => theme.iconTile[$size].size};
  height: ${({ theme, $size }) => theme.iconTile[$size].size};
  place-items: center;
  color: ${({ theme }) => theme.colors.accent.primary};
  background: ${({ theme }) => theme.gradients.iconTile};
  border: 1px solid ${({ theme }) => theme.colors.border.iconTile};
  border-radius: ${({ theme }) => theme.radius.md};

  svg {
    width: ${({ theme, $size }) => theme.iconTile[$size].iconSize};
    height: ${({ theme, $size }) => theme.iconTile[$size].iconSize};
  }

  img {
    width: 70%;
    height: 70%;
    object-fit: contain;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: ${({ theme, $size }) => theme.iconTile[$size].mobileSize};
    height: ${({ theme, $size }) => theme.iconTile[$size].mobileSize};
  }
`;
