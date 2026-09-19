"use client"

import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html {
        min-width: 320px;
        min-height: 100%;
        overflow-y: scroll;
        background: ${({ theme }) => theme.colors.starfield.base};
        scrollbar-color: ${({ theme }) => theme.colors.scrollbar.thumb}
            ${({ theme }) => theme.colors.scrollbar.track};
        scrollbar-gutter: stable;
        scrollbar-width: thin;
    }

    html::-webkit-scrollbar {
        width: 10px;
    }

    html::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.scrollbar.track};
    }

    html::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.scrollbar.thumb};
        border: 2px solid ${({ theme }) => theme.colors.scrollbar.track};
        border-radius: ${({ theme }) => theme.radius.round};
    }

    html::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.colors.scrollbar.thumbHover};
    }

    body {
        position: relative;
        isolation: isolate;
        min-height: 100dvh;
        margin: 0;
        padding: ${({ theme }) => theme.layout.viewportSpacingVertical}
            ${({ theme }) => theme.layout.viewportSpacingHorizontal};
        background: transparent;
        color: ${({ theme }) => theme.colors.text.primary};
        font-family: ${({ theme }) => theme.fonts.family.primary};
        font-size: ${({ theme }) => theme.fonts.size.md};
        font-weight: ${({ theme }) => theme.fonts.weight.regular};
        line-height: 1.65;
        -webkit-font-smoothing: antialiased;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        body {
            padding: ${({ theme }) => theme.spacing.md};
            padding-bottom: calc(64px + ${({ theme }) => theme.spacing.xl} + env(safe-area-inset-bottom));
        }
    }

    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    ul,
    ol {
        margin: 0;
    }

    ul,
    ol {
        padding: 0;
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button,
    input,
    textarea,
    select {
        color: inherit;
        font: inherit;
    }

    button {
        border: 0;
        cursor: pointer;
    }

    img {
        display: block;
        max-width: 100%;
    }

    :focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.accent.primary};
        outline-offset: 4px;
    }

    ::selection {
        background: ${({ theme }) => theme.colors.accent.primary};
        color: ${({ theme }) => theme.colors.text.inverse};
    }

    @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
        }
    }
`
