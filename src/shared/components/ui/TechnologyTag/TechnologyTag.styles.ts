"use client"

import styled from "styled-components"

export const Tag = styled.span<{ $color?: string }>`
    display: inline-flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    padding: 0.45rem 0.75rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.fonts.size.sm};
    background: ${({ theme }) => theme.colors.background.elevated};
    border: 1px solid ${({ $color, theme }) => $color ?? theme.colors.border.default};
    border-radius: ${({ theme }) => theme.radius.round};

    &::before {
        content: "";
        width: 7px;
        height: 7px;
        background: ${({ $color, theme }) => $color ?? theme.colors.accent.primary};
        border-radius: ${({ theme }) => theme.radius.round};
    }
`
