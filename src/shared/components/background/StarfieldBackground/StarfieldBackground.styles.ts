"use client"

import styled, { keyframes } from "styled-components"

const subtleDrift = keyframes`
    from {
        transform: translate3d(0, 0, 0) scale(1);
    }

    to {
        transform: translate3d(var(--star-travel-x), var(--star-travel-y), 0) scale(1.012);
    }
`

const softTwinkle = keyframes`
    0%,
    100% {
        opacity: var(--star-opacity-min);
    }

    38% {
        opacity: var(--star-opacity-max);
    }

    67% {
        opacity: var(--star-opacity-rest);
    }
`

export const Starfield = styled.div`
    position: fixed;
    z-index: -1;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    background: ${({ theme }) => theme.gradients.starfield};
`

export const StarLayer = styled.span<{
    $duration: number
    $tone: "dim" | "soft" | "cool"
    $twinkleDelay: number
    $twinkleDuration: number
}>`
    position: absolute;
    inset: -4%;
    color: ${({ theme, $tone }) => theme.colors.starfield[$tone]};
    background-repeat: no-repeat;
    opacity: var(--star-opacity-rest);
    animation:
        ${subtleDrift} ${({ $duration }) => $duration}s ease-in-out infinite alternate,
        ${softTwinkle} ${({ $twinkleDuration }) => $twinkleDuration}s ease-in-out
            ${({ $twinkleDelay }) => $twinkleDelay}s infinite;
    will-change: transform, opacity;

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
`

export const Vignette = styled.span`
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, transparent 35%, rgba(0, 0, 0, 0.26) 100%);
`
