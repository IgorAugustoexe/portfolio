"use client"

import styled from "styled-components"

export const Introduction = styled.div`
    display: grid;
    gap: ${({ theme }) => theme.spacing.md};
    max-width: 74ch;
    color: ${({ theme }) => theme.colors.text.secondary};
`

export const SectionHeading = styled.h2`
    margin: ${({ theme }) => theme.spacing.xxl} 0 ${({ theme }) => theme.spacing.lg};
    font-size: ${({ theme }) => theme.fonts.size.lg};
    font-weight: ${({ theme }) => theme.fonts.weight.semibold};
`

export const ServiceGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${({ theme }) => theme.spacing.lg};

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
        grid-template-columns: 1fr;
    }
`

export const ServiceCard = styled.li`
    display: grid;
    grid-template-columns: 48px minmax(0, 1fr);
    gap: ${({ theme }) => theme.spacing.md};
    padding: ${({ theme }) => theme.spacing.lg};
    background: ${({ theme }) => theme.gradients.surface};
    border: 1px solid ${({ theme }) => theme.colors.border.subtle};
    border-radius: ${({ theme }) => theme.radius.md};
    box-shadow: ${({ theme }) => theme.shadows.button};
`

export const ServiceIcon = styled.span`
    display: grid;
    width: 48px;
    height: 48px;
    place-items: center;
    color: ${({ theme }) => theme.colors.accent.primary};
    font-weight: ${({ theme }) => theme.fonts.weight.semibold};
    background: ${({ theme }) => theme.colors.background.panel};
    border-radius: ${({ theme }) => theme.radius.md};

    svg {
        width: 22px;
        height: 22px;
    }
`

export const ServiceTitle = styled.h3`
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.fonts.size.md};
    font-weight: ${({ theme }) => theme.fonts.weight.medium};
`

export const ServiceDescription = styled.p`
    color: ${({ theme }) => theme.colors.text.muted};
    font-size: ${({ theme }) => theme.fonts.size.sm};
`
