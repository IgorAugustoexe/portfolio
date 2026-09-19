"use client"

import styled from "styled-components"

export const Shell = styled.main`
    display: grid;
    grid-template-columns: minmax(205px, 250px) minmax(0, 1fr);
    align-items: start;
    gap: clamp(2rem, 4vw, 5rem);
    width: min(100%, ${({ theme }) => theme.layout.maxWidth});
    min-height: ${({ theme }) => theme.layout.desktopCardMinHeight};
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
        grid-template-columns: 205px minmax(0, 1fr);
        gap: ${({ theme }) => theme.spacing.xl};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 0;
        gap: 0;
    }
`

export const Content = styled.section`
    position: relative;
    min-width: 0;
    min-height: ${({ theme }) => theme.layout.desktopCardMinHeight};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100%;
        min-height: 0;
    }
`

export const MobileFooter = styled.footer`
    display: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: grid;
        gap: ${({ theme }) => theme.spacing.sm};
        width: 100%;
        padding: ${({ theme }) => theme.spacing.lg} 0;
        color: ${({ theme }) => theme.colors.text.muted};
        border-top: 1px solid ${({ theme }) => theme.colors.border.subtle};
        font-size: ${({ theme }) => theme.fonts.size.xs};
        text-align: center;
    }
`
