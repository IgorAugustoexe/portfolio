"use client"

import Image from "next/image"
import styled from "styled-components"

export const Container = styled.aside`
    position: sticky;
    top: ${({ theme }) => theme.layout.viewportSpacingVertical};
    display: flex;
    flex-direction: column;
    min-height: ${({ theme }) => theme.layout.desktopCardMinHeight};
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg}
        ${({ theme }) => theme.spacing.md} 0;
    border-right: 1px solid ${({ theme }) => theme.colors.border.subtle};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        position: static;
        display: grid;
        grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
        align-items: center;
        gap: ${({ theme }) => theme.spacing.md};
        width: 100%;
        min-height: 0;
        padding: ${({ theme }) => theme.spacing.lg} 0;
        border-right: 0;
        border-bottom: 1px solid ${({ theme }) => theme.colors.border.subtle};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
        gap: ${({ theme }) => theme.spacing.sm};
    }
`

export const ProfileHeader = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% + ${({ theme }) => theme.spacing.lg});
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100%;
    }
`

export const Avatar = styled(Image)`
    width: 148px;
    height: 148px;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    object-fit: cover;
    background: ${({ theme }) => theme.gradients.surface};
    border-radius: ${({ theme }) => theme.radius.md};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 128px;
        height: 128px;
        margin-bottom: ${({ theme }) => theme.spacing.md};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: min(100%, 112px);
        height: auto;
        aspect-ratio: 1;
    }
`

export const Name = styled.h2`
    font-size: clamp(1.15rem, 2vw, 1.45rem);
    font-weight: ${({ theme }) => theme.fonts.weight.semibold};
    line-height: 1.3;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 1.05rem;
    }
`

export const Role = styled.p`
    width: fit-content;
    margin-top: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.text.muted};
    font-size: ${({ theme }) => theme.fonts.size.sm};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 0.78rem;
    }
`

export const MobileLanguageSlot = styled.div`
    display: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: flex;
        justify-content: flex-end;
        margin-bottom: ${({ theme }) => theme.spacing.md};
    }
`

export const Details = styled.div`
    margin-top: ${({ theme }) => theme.spacing.xl};
    padding-top: ${({ theme }) => theme.spacing.lg};
    border-top: 1px solid ${({ theme }) => theme.colors.border.subtle};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        min-width: 0;
        margin-top: 0;
        padding: 0 0 0 ${({ theme }) => theme.spacing.md};
        border-top: 0;
        border-left: 1px solid ${({ theme }) => theme.colors.border.subtle};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding-left: ${({ theme }) => theme.spacing.sm};
    }
`

export const ContactList = styled.ul`
    display: grid;
    gap: ${({ theme }) => theme.spacing.md};
`

export const ContactItem = styled.li`
    display: grid;
    grid-template-columns: 36px minmax(0, 1fr);
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};

    > div {
        container-type: inline-size;
        min-width: 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        grid-template-columns: 32px minmax(0, 1fr);
        gap: ${({ theme }) => theme.spacing.sm};
    }
`

export const IconBox = styled.span`
    display: grid;
    width: 36px;
    height: 36px;
    place-items: center;
    color: ${({ theme }) => theme.colors.accent.primary};
    font-weight: ${({ theme }) => theme.fonts.weight.semibold};
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid ${({ theme }) => theme.colors.border.subtle};
    border-radius: ${({ theme }) => theme.radius.md};

    svg {
        width: 16px;
        height: 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 32px;
        height: 32px;
    }
`

export const ContactValue = styled.span`
    display: block;
    width: 100%;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.profileContacts.fontSize};
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
    text-align: left;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: none;
    }
`

export const SidebarCopyright = styled.p`
    color: ${({ theme }) => theme.colors.text.secondary};
`

export const SidebarFooterMessage = styled.p`
    line-height: 1.55;
`
