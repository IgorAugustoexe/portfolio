"use client"

import styled from "styled-components"

export const Tag = styled.span`
    display: inline-flex;
    align-items: center;
    max-width: 100%;
    padding: 0.35rem 0.65rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.fonts.size.sm};
    background: ${({ theme }) => theme.colors.background.soft};
    border: 1px solid ${({ theme }) => theme.colors.border.default};
    border-radius: ${({ theme }) => theme.radius.sm};
`
