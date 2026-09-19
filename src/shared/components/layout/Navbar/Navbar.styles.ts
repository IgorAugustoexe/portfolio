"use client"

import Link from "next/link"
import styled from "styled-components"

export const Navigation = styled.nav`
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    width: fit-content;
    margin-left: auto;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.background.elevated};
    border: 1px solid ${({ theme }) => theme.colors.border.default};
    border-top: 0;
    border-right: 0;
    border-radius: 0 ${({ theme }) => theme.radius.lg} 0 ${({ theme }) => theme.radius.lg};
    box-shadow: ${({ theme }) => theme.shadows.button};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        position: fixed;
        top: auto;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        margin-left: 0;
        padding-left: 0;
        padding-bottom: env(safe-area-inset-bottom);
        overflow: hidden;
        border-right: 0;
        border-bottom: 0;
        border-left: 0;
        border-radius: ${({ theme }) => theme.radius.lg} ${({ theme }) => theme.radius.lg} 0 0;
        box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.3);
    }
`

export const NavigationList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 108px);
    flex: 0 0 auto;
    align-items: center;

    li {
        width: 108px;
        min-width: 108px;
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
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 64px;
    padding: 0 ${({ theme }) => theme.spacing.sm};
    color: ${({ $active, theme }) => ($active ? theme.colors.accent.primary : theme.colors.text.secondary)};
    font-size: ${({ theme }) => theme.fonts.size.sm};
    font-weight: ${({ theme }) => theme.fonts.weight.medium};
    white-space: nowrap;
    transition: color ${({ theme }) => theme.transitions.fast};

    &:hover {
        color: ${({ theme }) => theme.colors.accent.primary};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 0 ${({ theme }) => theme.spacing.xs};
        font-size: ${({ theme }) => theme.fonts.size.xs};
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
    height: 64px;
    padding: 0 ${({ theme }) => theme.spacing.sm};
    border-left: 1px solid ${({ theme }) => theme.colors.border.default};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-basis: 108px;
        width: 108px;
        min-width: 108px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-basis: 92px;
        width: 92px;
        min-width: 92px;
        gap: ${({ theme }) => theme.spacing.xs};
        padding: 0 ${({ theme }) => theme.spacing.xs};
    }
`

export const LanguageOption = styled.span<{ $active: boolean }>`
    display: inline-block;
    width: 18px;
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
        width: 32px;

        &::after {
            width: 12px;
            height: 12px;
        }

        ${LanguageInput}:not(:checked) + &::after {
            transform: translateX(14px);
        }
    }
`
