"use client"

import Link from "next/link"
import styled from "styled-components"

export const BackLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.accent.primary};
    font-size: ${({ theme }) => theme.fonts.size.sm};
`

export const Overview = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: ${({ theme }) => theme.spacing.xl};
    align-items: start;

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
        grid-template-columns: 1fr;
    }
`

export const Information = styled.div`
    display: grid;
    gap: ${({ theme }) => theme.spacing.lg};
    padding: clamp(1.25rem, 3vw, 2rem);
    background: ${({ theme }) => theme.gradients.surface};
    border: 1px solid ${({ theme }) => theme.colors.border.subtle};
    border-radius: ${({ theme }) => theme.radius.md};
`

export const SmallTitle = styled.h2`
    font-size: ${({ theme }) => theme.fonts.size.lg};
    font-weight: ${({ theme }) => theme.fonts.weight.semibold};
`

export const TechnologyList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing.sm};
`

export const Description = styled.p`
    color: ${({ theme }) => theme.colors.text.secondary};
`

export const ResultGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${({ theme }) => theme.spacing.lg};
    margin-top: ${({ theme }) => theme.spacing.xxl};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        grid-template-columns: 1fr;
    }
`

export const ResultCard = styled.section`
    padding: clamp(1.25rem, 3vw, 2rem);
    background: ${({ theme }) => theme.gradients.surface};
    border: 1px solid ${({ theme }) => theme.colors.border.subtle};
    border-radius: ${({ theme }) => theme.radius.md};

    p {
        margin-top: ${({ theme }) => theme.spacing.md};
        color: ${({ theme }) => theme.colors.text.muted};
    }
`
