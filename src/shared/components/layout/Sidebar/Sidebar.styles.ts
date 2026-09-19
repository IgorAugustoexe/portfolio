"use client"

import Image from "next/image"
import styled from "styled-components"

export const Container = styled.aside`
    position: sticky;
    top: ${({ theme }) => theme.layout.viewportSpacingVertical};
    display: flex;
    flex-direction: column;
    min-height: ${({ theme }) => theme.layout.desktopCardMinHeight};
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
    overflow: hidden;
    background: ${({ theme }) => theme.colors.background.panel};
    border: 1px solid ${({ theme }) => theme.colors.border.default};
    border-radius: ${({ theme }) => theme.radius.lg};
    box-shadow: ${({ theme }) => theme.shadows.card};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        position: static;
        width: 100%;
        min-height: 0;
        padding: ${({ theme }) => theme.spacing.lg};
        overflow: hidden;
        border-radius: ${({ theme }) => theme.radius.lg};
    }
`

export const ProfileHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: row;
        width: 100%;
        text-align: left;

        > div {
            min-width: 0;
        }
    }
`

export const Avatar = styled(Image)`
    width: 132px;
    height: 132px;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    object-fit: cover;
    background: ${({ theme }) => theme.gradients.surface};
    border-radius: ${({ theme }) => theme.radius.lg};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 88px;
        height: 88px;
        margin: 0 ${({ theme }) => theme.spacing.lg} 0 0;
    }
`

export const Name = styled.h2`
    font-size: ${({ theme }) => theme.fonts.size.xl};
    font-weight: ${({ theme }) => theme.fonts.weight.medium};
    line-height: 1.3;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: ${({ theme }) => theme.fonts.size.lg};
    }
`

export const Role = styled.p`
    width: fit-content;
    margin: ${({ theme }) => theme.spacing.md} auto 0;
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.fonts.size.sm};
    background: ${({ theme }) => theme.colors.background.soft};
    border-radius: ${({ theme }) => theme.radius.sm};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin-left: 0;
    }
`

export const Details = styled.div`
    margin-top: ${({ theme }) => theme.spacing.xl};
    border-top: 1px solid ${({ theme }) => theme.colors.border.default};
`

export const DetailsToggle = styled.button`
    display: none;
    width: 100%;
    padding-top: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.accent.primary};
    font-size: ${({ theme }) => theme.fonts.size.sm};
    text-align: left;
    background: transparent;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: block;
    }
`

export const DetailsContent = styled.div<{ $open: boolean }>`
    display: block;
    padding-top: ${({ theme }) => theme.spacing.xl};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: ${({ $open }) => ($open ? "block" : "none")};
    }
`

export const ContactList = styled.ul`
    display: grid;
    gap: ${({ theme }) => theme.spacing.lg};
`

export const ContactItem = styled.li`
    display: grid;
    grid-template-columns: 42px minmax(0, 1fr);
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
`

export const IconBox = styled.span`
    display: grid;
    width: 42px;
    height: 42px;
    place-items: center;
    color: ${({ theme }) => theme.colors.icon.primary};
    font-weight: ${({ theme }) => theme.fonts.weight.semibold};
    background: ${({ theme }) => theme.colors.background.elevated};
    border: 1px solid ${({ theme }) => theme.colors.border.subtle};
    border-radius: ${({ theme }) => theme.radius.md};

    svg {
        width: 18px;
        height: 18px;
    }
`

export const ContactLabel = styled.span`
    display: block;
    color: ${({ theme }) => theme.colors.text.muted};
    font-size: ${({ theme }) => theme.fonts.size.xs};
    text-transform: uppercase;
`

export const ContactValue = styled.span`
    display: block;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.fonts.size.sm};
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: color ${({ theme }) => theme.transitions.fast};

    a:hover & {
        color: ${({ theme }) => theme.colors.accent.primary};
    }
`

export const SidebarFooter = styled.footer`
    display: grid;
    gap: ${({ theme }) => theme.spacing.sm};
    margin-top: auto;
    padding-top: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.text.muted};
    border-top: 1px solid ${({ theme }) => theme.colors.border.subtle};
    font-size: ${({ theme }) => theme.fonts.size.xs};
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin-top: ${({ theme }) => theme.spacing.xl};
        text-align: left;
    }
`

export const SidebarCopyright = styled.p`
    color: ${({ theme }) => theme.colors.text.secondary};
`

export const SidebarFooterMessage = styled.p`
    line-height: 1.55;
`
