import { css } from "styled-components";

export const contentReveal = css<{ $textVisible: boolean }>`
  opacity: ${({ $textVisible }) => $textVisible ? 1 : 0};
  transition: opacity ${({ theme }) => theme.motion.cardReveal.contentDuration}ms ease-out !important;
`;

export const cardReveal = css<{ $textVisible: boolean }>`
  [data-reveal-content] {
    ${contentReveal}
  }
`;
