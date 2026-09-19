"use client"

import Image from "next/image"
import Link from "next/link"
import styled, { keyframes } from "styled-components"

const orbitDrift = keyframes`
    from { transform: rotate(-18deg); }
    to { transform: rotate(-13deg); }
`

const lightPulse = keyframes`
    0%, 100% { opacity: 0.55; box-shadow: 0 0 14px rgba(255, 219, 134, 0.5); }
    50% { opacity: 1; box-shadow: 0 0 28px rgba(255, 219, 134, 0.8); }
`

const satelliteOrbit = keyframes`
    from { transform: rotate(-18deg); }
    to { transform: rotate(342deg); }
`

export const AboutCanvas = styled.article`
    padding: 0 clamp(0.5rem, 2vw, 1.5rem) ${({ theme }) => theme.spacing.xxl};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 0 0 ${({ theme }) => theme.spacing.xxl};
    }
`

export const Hero = styled.header`
    position: relative;
    display: flex;
    align-items: center;
    min-height: clamp(405px, 39vw, 525px);
    overflow: hidden;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        min-height: 0;
        padding: clamp(2.25rem, 8vw, 4rem) 0 ${({ theme }) => theme.spacing.xxl};
    }
`

export const HeroContent = styled.div`
    position: relative;
    z-index: 1;
    width: min(100%, 700px);
`

export const AccentLine = styled.span`
    display: inline-block;
    flex: 0 0 30px;
    width: 30px;
    height: 2px;
    background: ${({ theme }) => theme.colors.accent.primary};
    border-radius: ${({ theme }) => theme.radius.round};
`

export const HeroKicker = styled.p`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.accent.primary};
    font-size: ${({ theme }) => theme.fonts.size.xs};
    font-weight: ${({ theme }) => theme.fonts.weight.medium};
    letter-spacing: 0.24em;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 0.65rem;
        letter-spacing: 0.16em;
    }
`

export const HeroTitle = styled.h1`
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    font-size: clamp(2.75rem, 5.5vw, 5rem);
    font-weight: ${({ theme }) => theme.fonts.weight.semibold};
    letter-spacing: -0.055em;
    line-height: 1.08;

    span {
        color: ${({ theme }) => theme.colors.accent.primary};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: clamp(2.5rem, 11vw, 3.6rem);
    }
`

export const HeroIntro = styled.div`
    display: grid;
    gap: ${({ theme }) => theme.spacing.sm};
    max-width: 58ch;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.fonts.size.md};
    line-height: 1.7;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        line-height: 1.6;
    }
`

export const PrimaryAction = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing.xl};
    min-height: 48px;
    margin-top: ${({ theme }) => theme.spacing.lg};
    padding: 0 ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.text.inverse};
    font-size: ${({ theme }) => theme.fonts.size.sm};
    font-weight: ${({ theme }) => theme.fonts.weight.semibold};
    background: ${({ theme }) => theme.gradients.accent};
    border-radius: ${({ theme }) => theme.radius.round};
    box-shadow: 0 8px 26px rgba(255, 187, 92, 0.16);
    transition: transform ${({ theme }) => theme.transitions.normal};

    &:hover { transform: translateY(-3px); }
`

export const OrbitalArt = styled.div`
    position: absolute;
    top: 14%;
    right: -4%;
    width: min(49vw, 550px);
    height: 340px;
    pointer-events: none;
    opacity: 0.8;

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
        right: -15%;
        opacity: 0.25;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        top: 2rem;
        right: -30%;
        width: 330px;
        height: 270px;
        opacity: 0.3;
    }
`

export const Orbit = styled.span`
    position: absolute;
    inset: 30px 0;
    border: 1px solid rgba(255, 219, 134, 0.28);
    border-radius: 50%;
    transform: rotate(-18deg);
    animation: ${orbitDrift} 24s ease-in-out infinite alternate;

    @media (prefers-reduced-motion: reduce) { animation: none; }
`

export const Planet = styled.span`
    position: absolute;
    top: 55px;
    left: 32%;
    width: 230px;
    aspect-ratio: 1;
    background: ${({ theme }) => theme.gradients.planet};
    border: 1px solid rgba(255, 219, 134, 0.16);
    border-radius: 50%;
    box-shadow:
        inset -19px -22px 40px rgba(0, 0, 0, 0.55),
        inset -7px 8px 13px rgba(255, 219, 134, 0.22),
        5px -3px 24px rgba(255, 219, 134, 0.1);

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        top: 52px;
        left: 20%;
        width: 175px;
    }
`

export const OrbitDot = styled.span`
    position: absolute;
    inset: 30px 0;
    border-radius: 50%;
    animation: ${satelliteOrbit} 100s linear infinite;

    &::after {
        content: "";
        position: absolute;
        top: 18%;
        right: 13%;
        width: 11px;
        height: 11px;
        background: ${({ theme }) => theme.colors.accent.primary};
        border-radius: 50%;
        animation: ${lightPulse} 6s ease-in-out infinite;
    }

    @media (prefers-reduced-motion: reduce) {
        animation: none;
        &::after { animation: none; }
    }
`

export const SectionTitleRow = styled.div`
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing.lg};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
`

export const SectionHeading = styled.h2`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    font-weight: ${({ theme }) => theme.fonts.weight.semibold};
    line-height: 1.2;
`

export const ServiceGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: ${({ theme }) => theme.spacing.md};

    @media (max-width: ${({ theme }) => theme.breakpoints.wide}) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
        grid-template-columns: 1fr;
    }
`

export const ServiceCard = styled.li`
    display: grid;
    grid-template-columns: 48px minmax(0, 1fr);
    gap: ${({ theme }) => theme.spacing.md};
    min-height: 190px;
    padding: ${({ theme }) => theme.spacing.lg};
    background: ${({ theme }) => theme.gradients.surface};
    border: 1px solid ${({ theme }) => theme.colors.border.subtle};
    border-radius: ${({ theme }) => theme.radius.md};
    transition: border-color ${({ theme }) => theme.transitions.normal};

    &:hover { border-color: ${({ theme }) => theme.colors.border.highlighted}; }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        min-height: 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 40px minmax(0, 1fr);
        padding: ${({ theme }) => theme.spacing.md};
    }
`

export const ServiceIcon = styled.span`
    display: grid;
    width: 48px;
    height: 48px;
    place-items: center;
    color: ${({ theme }) => theme.colors.accent.primary};
    background: rgba(255, 219, 134, 0.04);
    border: 1px solid rgba(255, 219, 134, 0.2);
    border-radius: ${({ theme }) => theme.radius.md};

    svg { width: 20px; height: 20px; }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 40px;
        height: 40px;
    }
`

export const ServiceTitle = styled.h3`
    font-size: ${({ theme }) => theme.fonts.size.md};
    font-weight: ${({ theme }) => theme.fonts.weight.semibold};
    line-height: 1.4;
`

export const ServiceDescription = styled.p`
    margin-top: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.text.muted};
    font-size: ${({ theme }) => theme.fonts.size.sm};
`

export const TechnologyList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing.sm};
    margin-top: ${({ theme }) => theme.spacing.md};

    li {
        padding: 0.15rem 0.55rem;
        color: ${({ theme }) => theme.colors.text.secondary};
        border: 1px solid ${({ theme }) => theme.colors.border.default};
        border-radius: ${({ theme }) => theme.radius.round};
        font-size: ${({ theme }) => theme.fonts.size.xs};
    }
`

export const FeaturedSection = styled.section`
    margin-top: clamp(3rem, 6vw, 5rem);
    padding-top: ${({ theme }) => theme.spacing.xl};
    border-top: 1px solid ${({ theme }) => theme.colors.border.subtle};
`

export const SectionIntro = styled.p`
    max-width: 55ch;
    margin-top: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.text.muted};
    font-size: ${({ theme }) => theme.fonts.size.sm};
`

export const FeaturedLink = styled(Link)`
    flex: 0 0 auto;
    display: inline-flex;
    gap: ${({ theme }) => theme.spacing.sm};
    min-height: 44px;
    align-items: center;
    color: ${({ theme }) => theme.colors.accent.primary};
    font-size: ${({ theme }) => theme.fonts.size.sm};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
    }
`

export const FeaturedGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${({ theme }) => theme.spacing.lg};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
`

export const FeaturedCard = styled(Link)`
    display: block;
    height: 100%;
    overflow: hidden;
    background: ${({ theme }) => theme.gradients.surface};
    border: 1px solid ${({ theme }) => theme.colors.border.subtle};
    border-radius: ${({ theme }) => theme.radius.md};
    transition: border-color ${({ theme }) => theme.transitions.normal};

    &:hover { border-color: ${({ theme }) => theme.colors.border.highlighted}; }
`

export const FeaturedImage = styled(Image)`
    width: 100%;
    height: clamp(160px, 20vw, 245px);
    object-fit: cover;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.subtle};
`

export const FeaturedCopy = styled.div`
    display: grid;
    gap: ${({ theme }) => theme.spacing.xs};
    padding: ${({ theme }) => theme.spacing.md};

    strong { font-weight: ${({ theme }) => theme.fonts.weight.semibold}; }
    span { color: ${({ theme }) => theme.colors.text.muted}; font-size: ${({ theme }) => theme.fonts.size.sm}; }
`
