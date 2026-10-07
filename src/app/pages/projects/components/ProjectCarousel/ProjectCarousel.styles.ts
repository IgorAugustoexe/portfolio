"use client";

import Image from "next/image";
import styled, { css, keyframes } from "styled-components";
import { popIn } from "@/shared/styles/popIn";

const imageEnter = keyframes`
  from { opacity: 0; transform: translateX(calc(var(--carousel-slide) * var(--carousel-direction))); }
  to { opacity: 1; transform: translateX(0); }
`;

const imageExit = keyframes`
  from { opacity: 1; transform: translateX(0); }
  to { opacity: 0; transform: translateX(calc(var(--carousel-slide) * var(--carousel-direction) * -1)); }
`;

const captionEnter = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const cardFadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: var(--card-opacity); }
`;

const cardRecycle = keyframes`
  from { opacity: var(--card-opacity); transform: var(--previous-card-transform); }
  40% { opacity: 0; transform: var(--exiting-card-transform); }
  41% { opacity: 0; transform: var(--current-card-transform); }
  80%, to { opacity: var(--card-opacity); transform: var(--current-card-transform); }
`;

const cardTransform = (position: number, scale: number) =>
  `translate(-50%, -50%) translateX(calc(100% * var(--showcase-offset) * ${position} + var(--showcase-gap) * ${position})) scale(${position === 0 ? 1 : scale})`;

export const Carousel = styled.div<{ $revealed: boolean }>`
  min-width: 0;
  opacity: ${({ $revealed }) => $revealed ? 1 : 0};
  ${({ $revealed }) => $revealed && popIn}
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

export const Showcase = styled.div<{ $aspectRatio: number; $landscape: boolean }>`
  position: relative;
  --showcase-gap: ${({ $landscape, theme }) => $landscape ? "0px" : theme.spacing.xl};
  --showcase-columns: ${({ $landscape, theme }) =>
    1 + 2 * theme.projectCarousel.previewScale * ($landscape ? theme.projectCarousel.deckPreviewVisible : 1)};
  --showcase-offset: ${({ $landscape, theme }) => $landscape
    ? (1 - theme.projectCarousel.previewScale) / 2 + theme.projectCarousel.previewScale * theme.projectCarousel.deckPreviewVisible
    : (1 + theme.projectCarousel.previewScale) / 2};
  width: 100%;
  max-width: ${({ $aspectRatio, $landscape, theme }) => $landscape
    ? `calc(${theme.projectCarousel.landscapeWidth} * ${1 + 2 * theme.projectCarousel.previewScale * theme.projectCarousel.deckPreviewVisible})`
    : `calc(${theme.projectCarousel.portraitHeight} * ${$aspectRatio * (1 + 2 * theme.projectCarousel.previewScale)} + ${theme.spacing.xl} * 2)`};
  margin-inline: auto;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    width: calc((100% - var(--showcase-gap) * 2) / var(--showcase-columns));
    aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    --showcase-gap: 0px;
    --showcase-columns: ${({ theme }) => 1 + 2 * theme.projectCarousel.previewScale * theme.projectCarousel.deckPreviewVisible};
    --showcase-offset: ${({ theme }) => (1 - theme.projectCarousel.previewScale) / 2 + theme.projectCarousel.previewScale * theme.projectCarousel.deckPreviewVisible};
    max-width: ${({ $aspectRatio, $landscape, theme }) => $landscape
      ? `calc(${theme.projectCarousel.landscapeWidth} * var(--showcase-columns))`
      : `calc(${theme.projectCarousel.portraitHeight} * ${$aspectRatio} * var(--showcase-columns))`};
  }
`;

export const ShowcaseCard = styled(ImageFrame)<{ $position: number; $incoming: boolean; $recycled: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc((100% - var(--showcase-gap) * 2) / var(--showcase-columns));
  max-width: none;
  margin: 0;
  --card-opacity: ${({ $position, theme }) => Math.abs($position) > 1
    ? 0 : $position === 0 ? 1 : theme.projectCarousel.previewOpacity};
  opacity: var(--card-opacity);
  z-index: ${({ $position }) => $position === 0 ? 3 : Math.abs($position) === 1 ? 2 : 1};
  --current-card-transform: ${({ $position, theme }) => cardTransform($position, theme.projectCarousel.previewScale)};
  transform: var(--current-card-transform);
  transition:
    transform ${({ theme }) => theme.motion.projectCarousel.imageDuration}ms ${({ theme }) => theme.motion.projectCarousel.imageEasing},
    opacity ${({ theme }) => theme.motion.projectCarousel.imageDuration}ms ${({ theme }) => theme.motion.projectCarousel.imageEasing} !important;

  ${({ $recycled, $incoming, $position, theme }) => $recycled ? css`
    --previous-card-transform: ${cardTransform(-$position, theme.projectCarousel.previewScale)};
    --exiting-card-transform: ${cardTransform(-$position * 2, theme.projectCarousel.previewScale)};
    animation: ${cardRecycle} ${theme.motion.projectCarousel.imageDuration}ms
      ${theme.motion.projectCarousel.imageEasing} both !important;
  ` : $incoming && css`
      animation: ${cardFadeIn} ${theme.motion.projectCarousel.previewFadeDuration}ms ease-out
        ${$position === 0 ? 0 : theme.motion.projectCarousel.previewFadeDelay}ms both !important;
    `}
`;

export const SingleShowcase = styled.div<{ $withCards: boolean; $landscape: boolean }>`
  display: ${({ $withCards }) => $withCards ? "none" : "block"};
  max-width: ${({ $landscape, theme }) => $landscape ? theme.projectCarousel.landscapeWidth : "none"};
  margin-inline: auto;
`;

export const GalleryCaption = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  overflow-wrap: anywhere;

  > div {
    animation: ${captionEnter} ${({ theme }) => theme.motion.cardReveal.contentDuration}ms ease-out both;
  }

  h2 {
    font-size: ${({ theme }) => theme.fonts.size.lg};
    font-weight: ${({ theme }) => theme.fonts.weight.semibold};
  }

  p {
    margin-top: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.text.muted};
  }
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
        ${theme.motion.projectCarousel.imageEasing} both !important;
      will-change: transform, opacity;
    `}

`;

export const Controls = styled.div`
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr) 44px;
  align-items: baseline;
  gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;
  max-width: ${({ theme }) => theme.projectCarousel.controlsWidth};
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

  &:disabled {
    cursor: default;
    opacity: 0.5;
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
