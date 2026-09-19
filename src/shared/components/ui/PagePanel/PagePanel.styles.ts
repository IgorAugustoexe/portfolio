"use client"

import styled from "styled-components"

export const Panel = styled.article`
    min-height: 100%;
    padding: clamp(1.5rem, 4vw, 2.5rem);
`

export const Title = styled.h1`
    position: relative;
    width: fit-content;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: clamp(1.75rem, 4vw, ${({ theme }) => theme.fonts.size.title});
    font-weight: ${({ theme }) => theme.fonts.weight.semibold};
    line-height: 1.25;

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -0.75rem;
        width: 2.5rem;
        height: 0.3rem;
        border-radius: ${({ theme }) => theme.radius.round};
        background: ${({ theme }) => theme.gradients.accent};
    }
`
