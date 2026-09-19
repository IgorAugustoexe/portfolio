"use client"

import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"

export const FilterList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing.sm};
    margin-bottom: ${({ theme }) => theme.spacing.xl};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: none;
    }
`

export const FilterButton = styled.button<{ $active: boolean }>`
    min-height: 42px;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    color: ${({ theme, $active }) =>
        $active ? theme.colors.accent.primary : theme.colors.text.muted};
    background: ${({ $active }) => $active ? "rgba(255, 219, 134, 0.08)" : "rgba(255, 255, 255, 0.03)"};
    border: 1px solid ${({ $active, theme }) => $active ? theme.colors.border.highlighted : theme.colors.border.default};
    border-radius: ${({ theme }) => theme.radius.round};
    font: inherit;
    font-size: ${({ theme }) => theme.fonts.size.sm};
    font-weight: ${({ theme, $active }) =>
        $active ? theme.fonts.weight.semibold : theme.fonts.weight.regular};
    cursor: pointer;
    transition: color ${({ theme }) => theme.transitions.fast}, border-color ${({ theme }) => theme.transitions.fast};

    &:hover,
    &:focus-visible {
        color: ${({ theme }) => theme.colors.accent.primary};
    }
`

export const FilterSelectLabel = styled.label`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
`

export const FilterSelect = styled.select`
    display: none;
    width: 100%;
    min-height: 44px;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text.secondary};
    background: ${({ theme }) => theme.colors.background.panel};
    border: 1px solid ${({ theme }) => theme.colors.border.default};
    border-radius: ${({ theme }) => theme.radius.sm};
    font: inherit;

    &:focus-visible {
        border-color: ${({ theme }) => theme.colors.border.highlighted};
        outline: 2px solid ${({ theme }) => theme.colors.accent.primary};
        outline-offset: 2px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: block;
    }
`

export const ProjectGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${({ theme }) => theme.spacing.lg};

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
        grid-template-columns: 1fr;
    }
`

export const ProjectLink = styled(Link)`
    display: block;
    height: 100%;
    overflow: hidden;
    background: ${({ theme }) => theme.gradients.surface};
    border: 1px solid ${({ theme }) => theme.colors.border.subtle};
    border-radius: ${({ theme }) => theme.radius.md};
    transition:
        transform ${({ theme }) => theme.transitions.normal},
        border-color ${({ theme }) => theme.transitions.normal};

    &:hover {
        transform: translateY(-4px);
        border-color: ${({ theme }) => theme.colors.border.highlighted};
    }
`

export const ProjectImage = styled(Image)`
    width: 100%;
    height: clamp(190px, 22vw, 270px);
    object-fit: cover;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.subtle};
`

export const ProjectTitle = styled.h2`
    margin: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg} 0;
    font-size: ${({ theme }) => theme.fonts.size.lg};
    font-weight: ${({ theme }) => theme.fonts.weight.medium};
`

export const ProjectCategory = styled.p`
    margin: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.accent.primary};
    font-size: ${({ theme }) => theme.fonts.size.sm};
`

export const ProjectSummary = styled.p`
    margin: 0 ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.text.muted};
`

export const DetailsLabel = styled.span`
    display: inline-block;
    margin: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.fonts.size.sm};
    font-weight: ${({ theme }) => theme.fonts.weight.medium};
`

export const EmptyState = styled.p`
    padding: ${({ theme }) => theme.spacing.xl};
    color: ${({ theme }) => theme.colors.text.muted};
    background: ${({ theme }) => theme.colors.background.elevated};
    border: 1px solid ${({ theme }) => theme.colors.border.subtle};
    border-radius: ${({ theme }) => theme.radius.md};
    text-align: center;
`
