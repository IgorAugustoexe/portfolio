import { css, keyframes } from "styled-components";

const popInFrames = keyframes`
  from { opacity: 0; transform: scale(var(--pop-in-scale)); }
  to { opacity: 1; transform: scale(1); }
`;

export const popIn = css`
  --pop-in-scale: ${({ theme }) => theme.motion.projectCardEnter.initialScale};
  animation: ${popInFrames} ${({ theme }) => theme.motion.projectCardEnter.duration}ms
    ${({ theme }) => theme.motion.projectCardEnter.easing} both !important;
`;
