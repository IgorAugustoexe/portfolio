"use client"

import styled, { keyframes } from "styled-components"

const pageFade = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`

export const Panel = styled.article`
    min-height: ${({ theme }) => theme.layout.desktopCardMinHeight};
    padding: clamp(2.5rem, 5vw, 4rem) clamp(0.5rem, 2vw, 1.5rem) ${({ theme }) => theme.spacing.xxl};

    animation: ${pageFade} ${({ theme }) => theme.motion.pageFade.duration}ms
        ${({ theme }) => theme.motion.pageFade.easing} both !important;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        min-height: 0;
        padding: clamp(2rem, 7vw, 3rem) 0 ${({ theme }) => theme.spacing.xxl};
    }
`

export const Title = styled.h1`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
    margin-bottom: ${({ theme }) => theme.spacing.xxl};
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: clamp(2.2rem, 4vw, 3.6rem);
    font-weight: ${({ theme }) => theme.fonts.weight.semibold};
    letter-spacing: -0.04em;
    line-height: 1.12;

    &::before {
        content: "";
        flex: 0 0 30px;
        width: 30px;
        height: 2px;
        border-radius: ${({ theme }) => theme.radius.round};
        background: ${({ theme }) => theme.gradients.accent};
    }
`
