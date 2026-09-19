"use client"

import Image from "next/image"
import styled from "styled-components"

export const Carousel = styled.div`
    min-width: 0;
`

export const ImageFrame = styled.figure`
    position: relative;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.background.soft};
    border: 1px solid ${({ theme }) => theme.colors.border.subtle};
    border-radius: ${({ theme }) => theme.radius.md};
`

export const CarouselImage = styled(Image)`
    object-fit: cover;
`

export const Controls = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: ${({ theme }) => theme.spacing.md};
`

export const ControlButton = styled.button`
    display: grid;
    width: 42px;
    height: 42px;
    place-items: center;
    color: ${({ theme }) => theme.colors.accent.primary};
    background: ${({ theme }) => theme.colors.background.elevated};
    border: 1px solid ${({ theme }) => theme.colors.border.default};
    border-radius: ${({ theme }) => theme.radius.md};
    transition:
        color ${({ theme }) => theme.transitions.fast},
        border-color ${({ theme }) => theme.transitions.fast};

    &:hover {
        color: ${({ theme }) => theme.colors.text.primary};
        border-color: ${({ theme }) => theme.colors.border.highlighted};
    }
`

export const Indicators = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing.sm};
`

export const Indicator = styled.span<{ $active: boolean }>`
    width: ${({ $active }) => ($active ? "22px" : "8px")};
    height: 8px;
    background: ${({ $active, theme }) =>
        $active ? theme.colors.accent.primary : theme.colors.border.default};
    border-radius: ${({ theme }) => theme.radius.round};
    transition: width ${({ theme }) => theme.transitions.normal};
`
