"use client"

import Link from "next/link"
import styled from "styled-components"

export const Navigation = styled.nav`
    position: sticky;
    top: ${({ theme }) => theme.spacing.md};
    z-index: 20;
    display: flex;
    width: fit-content;
    margin-top: 0;
    margin-left: auto;
    overflow: hidden;
    background: rgba(24, 27, 32, 0.92);
    border: 1px solid ${({ theme }) => theme.colors.border.default};
    border-radius: ${({ theme }) => theme.radius.lg};
    box-shadow: ${({ theme }) => theme.shadows.button};
    backdrop-filter: blur(16px);

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        position: fixed;
        top: auto;
        right: 12px;
        bottom: calc(12px + env(safe-area-inset-bottom));
        left: 12px;
        z-index: 100;
        width: auto;
        margin-left: 0;
        padding: ${({ theme }) => theme.spacing.xs};
        overflow: hidden;
        border-radius: ${({ theme }) => theme.radius.lg};
        box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45);
    }
`

export const NavigationList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 104px);
    flex: 0 0 auto;
    align-items: center;

    li {
        width: 104px;
        min-width: 104px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        flex: 1 1 auto;
        min-width: 0;

        li {
            width: auto;
            min-width: 0;
        }
    }
`

export const NavigationLink = styled(Link)<{ $active: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 58px;
    padding: 0 ${({ theme }) => theme.spacing.sm};
    color: ${({ $active, theme }) => ($active ? theme.colors.accent.primary : theme.colors.text.secondary)};
    font-size: ${({ theme }) => theme.fonts.size.sm};
    font-weight: ${({ theme }) => theme.fonts.weight.medium};
    white-space: nowrap;
    transition: color ${({ theme }) => theme.transitions.fast};

    &:hover {
        color: ${({ theme }) => theme.colors.accent.primary};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        height: 68px;
        gap: 0.1rem;
        border-radius: ${({ theme }) => theme.radius.md};
        background: ${({ $active }) => $active ? "rgba(255, 219, 134, 0.08)" : "transparent"};
        font-size: ${({ theme }) => theme.fonts.size.xs};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 0 ${({ theme }) => theme.spacing.xs};
    }
`

export const NavIcon = styled.span`
    display: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: block;
        line-height: 1;

        svg {
            width: 18px;
            height: 18px;
        }
    }
`

export const DesktopLanguageSlot = styled.div`
    display: block;
    border-left: 1px solid ${({ theme }) => theme.colors.border.default};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: none;
    }
`

export const LanguageSelector = styled.div`
    display: flex;
    flex: 0 0 118px;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    width: 118px;
    min-width: 118px;
    height: 58px;
    padding: 0 ${({ theme }) => theme.spacing.sm};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-basis: auto;
        width: auto;
        min-width: 0;
        height: 40px;
        padding: 0 ${({ theme }) => theme.spacing.sm};
        border: 1px solid ${({ theme }) => theme.colors.border.default};
        border-radius: ${({ theme }) => theme.radius.round};
        background: rgba(255, 255, 255, 0.03);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        gap: 0.2rem;
        padding: 0 0.4rem;
    }
`

export const LanguageOption = styled.span<{ $active: boolean }>`
    display: inline-block;
    width: 20px;
    color: ${({ $active, theme }) => ($active ? theme.colors.accent.primary : theme.colors.text.muted)};
    font-size: ${({ theme }) => theme.fonts.size.xs};
    font-weight: ${({ theme }) => theme.fonts.weight.semibold};
    transition: color ${({ theme }) => theme.transitions.fast};
`

export const LanguageSwitch = styled.label`
    position: relative;
    display: inline-flex;
    cursor: pointer;
`

export const LanguageInput = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    white-space: nowrap;
`

export const LanguageTrack = styled.span`
    position: relative;
    display: block;
    width: 38px;
    height: 20px;
    background: ${({ theme }) => theme.colors.background.panel};
    border: 1px solid ${({ theme }) => theme.colors.border.default};
    border-radius: ${({ theme }) => theme.radius.round};
    transition: border-color ${({ theme }) => theme.transitions.fast};

    &::after {
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        width: 14px;
        height: 14px;
        background: ${({ theme }) => theme.gradients.accent};
        border-radius: ${({ theme }) => theme.radius.round};
        transition: transform ${({ theme }) => theme.transitions.normal};
    }

    ${LanguageInput}:not(:checked) + &::after {
        transform: translateX(18px);
    }

    ${LanguageInput}:focus-visible + & {
        outline: 2px solid ${({ theme }) => theme.colors.accent.primary};
        outline-offset: 3px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 30px;

        &::after {
            width: 12px;
            height: 12px;
        }

        ${LanguageInput}:not(:checked) + &::after {
            transform: translateX(14px);
        }
    }
`
