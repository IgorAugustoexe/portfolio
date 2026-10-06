"use client";

import Image from "next/image";
import styled, { css, keyframes } from "styled-components";

const imageEnter = keyframes`
  from { opacity: 0; transform: translateX(calc(var(--carousel-slide) * var(--carousel-direction))); }
  to { opacity: 1; transform: translateX(0); }
`;

const imageExit = keyframes`
  from { opacity: 1; transform: translateX(0); }
  to { opacity: 0; transform: translateX(calc(var(--carousel-slide) * var(--carousel-direction) * -1)); }
`;

export const Carousel = styled.div`
  min-width: 0;
`;

export const ImageFrame = styled.figure<{ $aspectRatio: number }>`
  position: relative;
  width: 100%;
  max-width: ${({ $aspectRatio, theme }) =>
    $aspectRatio < 1 ? `calc(${theme.projectCarousel.portraitHeight} * ${$aspectRatio})` : "none"};
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
  margin-inline: auto;
  overflow: hidden;
  touch-action: pan-y;
  background: ${({ theme }) => theme.colors.background.panel};
  border: 1px solid ${({ theme }) => theme.colors.border.subtle};
  border-radius: ${({ theme }) => theme.radius.md};
`;

export const CarouselImage = styled(Image)<{
  $animation: "none" | "pending" | "enter" | "exit";
  $direction: number;
}>`
  object-fit: cover;
  pointer-events: none;
  --carousel-slide: ${({ theme }) => theme.projectCarousel.imageSlideDistance};
  --carousel-direction: ${({ $direction }) => $direction};
  opacity: ${({ $animation }) => ($animation === "pending" ? 0 : 1)};

  ${({ $animation, theme }) =>
    ($animation === "enter" || $animation === "exit") &&
    css`
      animation: ${$animation === "enter" ? imageEnter : imageExit} ${theme.motion.projectCarousel.imageDuration}ms
        cubic-bezier(0.22, 1, 0.36, 1) both !important;
      will-change: transform, opacity;
    `}
`;

export const Controls = styled.div`
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr) 44px;
  align-items: baseline;
  gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;
  max-width: 100%;
  margin-top: ${({ theme }) => theme.spacing.md};
  margin-inline: auto;

  > button {
    grid-row: 1;
  }

  > button:first-child {
    grid-column: 1;
  }
  > button:last-child {
    grid-column: 3;
  }
`;

export const ControlButton = styled.button`
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  background: ${({ theme }) => theme.colors.background.panel};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.radius.md};
  transition:
    color ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast};

  svg {
    width: ${({ theme }) => theme.fonts.size.sm};
    height: ${({ theme }) => theme.fonts.size.sm};
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: ${({ theme }) => theme.colors.accent.primary};
    }
  }

  &:active {
    color: ${({ theme }) => theme.colors.accent.primary};
    border-color: ${({ theme }) => theme.colors.accent.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent.primary};
    outline-offset: 3px;
  }
`;

export const Indicators = styled.div`
  --indicator-target-size: ${({ theme }) =>
    `max(${theme.projectCarousel.indicatorTarget}, calc(${theme.projectCarousel.indicatorSize} * ${theme.projectCarousel.indicatorHaloScale} + ${theme.spacing.xs}))`};
  grid-row: 1;
  grid-column: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-self: center;
  width: 100%;
  max-width: ${({ theme }) => `calc(var(--indicator-target-size) * ${theme.projectCarousel.indicatorsPerRow})`};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    --indicator-target-size: ${({ theme }) =>
      `max(${theme.projectCarousel.indicatorMobileTarget}, calc(${theme.projectCarousel.indicatorSize} * ${theme.projectCarousel.indicatorHaloScale} + ${theme.spacing.xs}))`};
  }
`;

export const Indicator = styled.button<{ $active: boolean }>`
  position: relative;
  isolation: isolate;
  display: grid;
  flex: 0 0 var(--indicator-target-size);
  width: var(--indicator-target-size);
  height: var(--indicator-target-size);
  padding: 0;
  place-items: center;
  --indicator-base: ${({ theme }) => theme.colors.border.default};
  background: radial-gradient(
    circle,
    var(--indicator-base) 0 calc(${({ theme }) => theme.projectCarousel.indicatorSize} / 2),
    transparent calc(${({ theme }) => theme.projectCarousel.indicatorSize} / 2)
  );
  border: 0;
  border-radius: ${({ theme }) => theme.radius.md};

  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    inset: 0;
    margin: auto;
    width: ${({ theme }) => theme.projectCarousel.indicatorSize};
    height: ${({ theme }) => theme.projectCarousel.indicatorSize};
    background: ${({ theme }) => theme.colors.accent.primary};
    border-radius: ${({ theme }) => theme.radius.circle};
    transform: scale(${({ $active }) => ($active ? 1 : 0)});
    transition: transform ${({ theme }) => theme.motion.projectCarousel.indicatorFillDuration}ms ease-out !important;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: 0;
    inset: 0;
    margin: auto;
    width: ${({ theme }) =>
      `calc(${theme.projectCarousel.indicatorSize} * ${theme.projectCarousel.indicatorHaloScale})`};
    height: ${({ theme }) =>
      `calc(${theme.projectCarousel.indicatorSize} * ${theme.projectCarousel.indicatorHaloScale})`};
    background: ${({ theme }) => theme.colors.background.soft};
    border-radius: ${({ theme }) => theme.radius.circle};
    opacity: ${({ $active }) => ($active ? 1 : 0)};
    transform: scale(${({ $active }) => ($active ? 1 : 0)});
    transition:
      transform ${({ theme }) => theme.motion.projectCarousel.indicatorHaloDuration}ms ease-out,
      opacity ${({ theme }) => theme.motion.projectCarousel.indicatorHaloDuration}ms ease-out !important;
    transition-delay: ${({ $active, theme }) =>
      $active ? theme.motion.projectCarousel.indicatorHaloDelay : 0}ms !important;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover:not(:disabled) {
      --indicator-base: ${({ theme }) => theme.colors.accent.primary};
    }
  }

  &:disabled {
    cursor: auto;
    opacity: 1;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent.primary};
    outline-offset: 1px;
  }
`;
