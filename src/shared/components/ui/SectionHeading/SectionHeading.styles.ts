"use client";

import styled from "styled-components";

export const Heading = styled.h2`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: ${({ theme }) => theme.fonts.weight.semibold};
  line-height: 1.2;

  &::before {
    content: "";
    flex: 0 0 30px;
    width: 30px;
    height: 2px;
    background: ${({ theme }) => theme.colors.accent.primary};
    border-radius: ${({ theme }) => theme.radius.round};
  }
`;
