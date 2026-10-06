"use client"

import { useRef, useState } from "react"
import type { TouchEvent } from "react"
import type { ProjectImage } from "@/app/pages/projects/models/project.model"
import { AppIcon } from "@/shared/components/ui/AppIcon/AppIcon"
import type { Locale } from "@/shared/i18n/config"
import { getDictionary } from "@/shared/i18n/dictionaries"
import { getLocalizedText } from "@/shared/i18n/getLocalizedText"
import {
    Carousel,
    CarouselImage,
    ControlButton,
    Controls,
    ImageFrame,
    Indicator,
    Indicators
} from "./ProjectCarousel.styles"

interface ProjectCarouselProps {
    images: ProjectImage[]
    locale: Locale
}

export function ProjectCarousel({ images, locale }: ProjectCarouselProps) {
    const [navigation, setNavigation] = useState({
        selectedIndex: 0,
        previousIndex: null as number | null,
        direction: 1,
        ready: false,
    })
    const { selectedIndex, previousIndex, direction, ready } = navigation
    const touchStart = useRef<{ x: number; y: number } | null>(null)
    const dictionary = getDictionary(locale).projects
    const selectedImage = images[selectedIndex]
    const previousImage = previousIndex === null ? null : images[previousIndex]
    const aspectRatio = selectedImage.src.width / selectedImage.src.height

    const selectImage = (target: number | "previous" | "next") => {
        setNavigation((current) => {
            const index = target === "previous"
                ? (current.selectedIndex + images.length - 1) % images.length
                : target === "next"
                    ? (current.selectedIndex + 1) % images.length
                    : target

            if (index === current.selectedIndex) return current

            return {
                selectedIndex: index,
                previousIndex: current.ready ? current.selectedIndex : current.previousIndex,
                direction: target === "previous" ? -1 : target === "next" ? 1 : index > current.selectedIndex ? 1 : -1,
                ready: false,
            }
        })
    }

    const selectPrevious = () => selectImage("previous")
    const selectNext = () => selectImage("next")

    const handleImageLoad = () => {
        setNavigation((current) => current.selectedIndex === selectedIndex
            ? { ...current, ready: true }
            : current)
    }

    const handleTransitionEnd = () => {
        setNavigation((current) => current.selectedIndex === selectedIndex
            ? { ...current, previousIndex: null }
            : current)
    }

    const handleTouchStart = (event: TouchEvent<HTMLElement>) => {
        const touch = event.touches[0]
        touchStart.current = touch ? { x: touch.clientX, y: touch.clientY } : null
    }

    const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
        const start = touchStart.current
        touchStart.current = null
        const touch = event.changedTouches[0]

        if (!start || !touch || images.length < 2) return

        const deltaX = touch.clientX - start.x
        const deltaY = touch.clientY - start.y

        if (Math.abs(deltaX) < 50 || Math.abs(deltaX) <= Math.abs(deltaY)) return

        if (deltaX < 0) selectNext()
        else selectPrevious()
    }

    return (
        <Carousel aria-label={`${dictionary.imagePosition} ${selectedIndex + 1} / ${images.length}`}>
            <ImageFrame
                $aspectRatio={aspectRatio}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={() => { touchStart.current = null }}
            >
                {previousImage && (
                    <CarouselImage
                        key={`previous-${previousIndex}`}
                        src={previousImage.src}
                        alt=""
                        aria-hidden="true"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        unoptimized={previousImage.src.width < previousImage.src.height}
                        $animation={ready ? "exit" : "none"}
                        $direction={direction}
                    />
                )}
                <CarouselImage
                    key={`selected-${selectedIndex}`}
                    src={selectedImage.src}
                    alt={getLocalizedText(selectedImage.alt, locale)}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized={aspectRatio < 1}
                    priority={selectedIndex === 0}
                    $animation={previousImage ? (ready ? "enter" : "pending") : "none"}
                    $direction={direction}
                    onLoad={handleImageLoad}
                    onAnimationEnd={handleTransitionEnd}
                    onError={handleTransitionEnd}
                />
            </ImageFrame>
            <Controls>
                <ControlButton type="button" onClick={selectPrevious} aria-label={dictionary.previousImage}>
                    <AppIcon name="back" />
                </ControlButton>
                <Indicators role="group" aria-label={dictionary.imagePosition}>
                    {images.map((image, index) => (
                        <Indicator
                            key={image.src.src}
                            type="button"
                            $active={index === selectedIndex}
                            aria-pressed={index === selectedIndex}
                            aria-label={`${dictionary.imagePosition} ${index + 1}: ${getLocalizedText(image.alt, locale)}`}
                            disabled={index === selectedIndex}
                            onClick={() => selectImage(index)}
                        />
                    ))}
                </Indicators>
                <ControlButton type="button" onClick={selectNext} aria-label={dictionary.nextImage}>
                    <AppIcon name="forward" />
                </ControlButton>
            </Controls>
        </Carousel>
    )
}
