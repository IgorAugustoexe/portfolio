"use client"

import styled from "styled-components"

export const Shell = styled.main`
    display: grid;
    grid-template-columns: minmax(260px, 320px) minmax(0, 1fr);
    align-items: start;
    gap: ${({ theme }) => theme.spacing.xl};
    width: min(100%, ${({ theme }) => theme.layout.maxWidth});
    min-height: ${({ theme }) => theme.layout.desktopCardMinHeight};
    margin: 0 auto;
    overflow: visible;

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
        grid-template-columns: 250px minmax(0, 1fr);
        gap: ${({ theme }) => theme.spacing.lg};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        min-height: 0;
        overflow: visible;
    }
`

export const Content = styled.section`
    position: relative;
    min-width: 0;
    min-height: ${({ theme }) => theme.layout.desktopCardMinHeight};
    overflow: visible;
    background: ${({ theme }) => theme.colors.background.panel};
    border: 1px solid ${({ theme }) => theme.colors.border.default};
    border-radius: ${({ theme }) => theme.radius.lg};
    box-shadow: ${({ theme }) => theme.shadows.card};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100%;
        min-height: 0;
        border-radius: ${({ theme }) => theme.radius.lg};
    }
`
