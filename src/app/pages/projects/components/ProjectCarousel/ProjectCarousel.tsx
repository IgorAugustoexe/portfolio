"use client"

import { useEffect, useRef, useState } from "react"
import type { TouchEvent } from "react"
import type { ProjectImage } from "@/app/pages/projects/models/project.model"
import { AppIcon } from "@/shared/components/ui/AppIcon/AppIcon"
import type { Locale } from "@/shared/i18n/config"
import { getDictionary } from "@/shared/i18n/dictionaries"
import { getLocalizedText } from "@/shared/i18n/getLocalizedText"
import { theme } from "@/shared/styles/theme"
import {
    Carousel,
    CarouselImage,
    GalleryCaption,
    ControlButton,
    Controls,
    ImageFrame,
    Indicator,
    Indicators,
    ShowcaseCard,
    Showcase,
    SingleShowcase
} from "./ProjectCarousel.styles"

interface ProjectCarouselProps {
    images: ProjectImage[]
    locale: Locale
}

export function ProjectCarousel({ images, locale }: ProjectCarouselProps) {
    const carouselRef = useRef<HTMLDivElement>(null)
    const [isRevealed, setIsRevealed] = useState(false)
    const [navigation, setNavigation] = useState({
        selectedIndex: 0,
        previousIndex: null as number | null,
        direction: 1,
        ready: false,
    })
    const { selectedIndex, previousIndex, direction, ready } = navigation
    const touchStart = useRef<{ x: number; y: number } | null>(null)
    const loadedImages = useRef(new Set<number>())
    const dictionary = getDictionary(locale).projects
    const selectedImage = images[selectedIndex]
    const previousImage = previousIndex === null ? null : images[previousIndex]
    const aspectRatio = selectedImage.src.width / selectedImage.src.height
    const isLandscape = aspectRatio >= 1
    const imageSizes = `(max-width: ${theme.breakpoints.tablet}) 100vw, ${isLandscape ? "45vw" : "35vw"}`
    const showPreviews = images.length > 2
    const getCardIndices = (index: number) => [
        (index + images.length - 1) % images.length,
        index,
        (index + 1) % images.length,
    ]
    const currentCards = getCardIndices(selectedIndex)
    const previousCards = previousIndex === null ? [] : getCardIndices(previousIndex)
    const cardIndices = Array.from(new Set([...previousCards, ...currentCards]))

    useEffect(() => {
        const carousel = carouselRef.current
        if (!carousel || !ready || isRevealed) return

        const observer = new IntersectionObserver((entries) => {
            if (!entries.some((entry) => entry.isIntersecting)) return
            setIsRevealed(true)
            observer.disconnect()
        }, { threshold: 0.1 })

        observer.observe(carousel)
        return () => observer.disconnect()
    }, [ready, isRevealed])

    useEffect(() => {
        if (previousIndex === null || !ready) return
        const timer = setTimeout(() => {
            setNavigation((current) => current.selectedIndex === selectedIndex
                ? { ...current, previousIndex: null }
                : current)
        }, theme.motion.projectCarousel.imageDuration)
        return () => clearTimeout(timer)
    }, [selectedIndex, previousIndex, ready])

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
                ready: loadedImages.current.has(index),
            }
        })
    }

    const selectPrevious = () => selectImage("previous")
    const selectNext = () => selectImage("next")

    const handleImageLoad = (index: number) => {
        loadedImages.current.add(index)
        setNavigation((current) => current.selectedIndex === index && !current.ready
            ? { ...current, ready: true }
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
        <Carousel ref={carouselRef} $revealed={isRevealed} aria-label={`${dictionary.imagePosition} ${selectedIndex + 1} / ${images.length}`}>
            {showPreviews && (
                <Showcase $aspectRatio={aspectRatio} $landscape={isLandscape}>
                    {cardIndices.map((index) => {
                        const image = images[index]
                        const targetSlot = currentCards.indexOf(index)
                        const previousSlot = previousCards.indexOf(index)
                        const position = !ready && previousIndex !== null
                            ? (previousSlot === -1 ? direction * 2 : previousSlot - 1)
                            : (targetSlot === -1 ? direction * -2 : targetSlot - 1)
                        const isSelected = index === selectedIndex

                        return (
                            <ShowcaseCard
                                key={index}
                                $aspectRatio={image.src.width / image.src.height}
                                $position={position}
                                $incoming={ready && previousIndex !== null && previousSlot === -1}
                                $recycled={ready && previousIndex !== null && previousSlot !== -1 && targetSlot !== -1 && Math.abs(targetSlot - previousSlot) === 2}
                                aria-hidden={!isSelected}
                                onTouchStart={isSelected ? handleTouchStart : undefined}
                                onTouchEnd={isSelected ? handleTouchEnd : undefined}
                                onTouchCancel={() => { touchStart.current = null }}
                            >
                                <CarouselImage
                                    src={image.src}
                                    alt={isSelected ? getLocalizedText(image.alt, locale) : ""}
                                    fill
                                    sizes={isLandscape ? `(max-width: ${theme.breakpoints.tablet}) 65vw, 45vw` : "35vw"}
                                    unoptimized={image.src.width < image.src.height}
                                    priority={index === 0}
                                    $animation="none"
                                    $direction={direction}
                                    onLoad={() => handleImageLoad(index)}
                                    onError={() => handleImageLoad(index)}
                                />
                            </ShowcaseCard>
                        )
                    })}
                </Showcase>
            )}
            <SingleShowcase $withCards={showPreviews} $landscape={isLandscape}>
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
                            sizes={imageSizes}
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
                        sizes={imageSizes}
                        unoptimized={aspectRatio < 1}
                        priority={selectedIndex === 0}
                        $animation={previousImage ? (ready ? "enter" : "pending") : "none"}
                        $direction={direction}
                        onLoad={() => handleImageLoad(selectedIndex)}
                        onError={() => handleImageLoad(selectedIndex)}
                    />
                </ImageFrame>
            </SingleShowcase>
            <GalleryCaption aria-live="polite" aria-atomic="true">
                <div key={`${selectedIndex}-${locale}`}>
                    <h2>{getLocalizedText(selectedImage.title, locale)}</h2>
                    <p>{getLocalizedText(selectedImage.description, locale)}</p>
                </div>
            </GalleryCaption>
            <Controls>
                <ControlButton type="button" onClick={selectPrevious} aria-label={dictionary.previousImage} disabled={images.length < 2}>
                    <AppIcon name="back" />
                </ControlButton>
                <Indicators role="group" aria-label={dictionary.imagePosition}>
                    {images.map((image, index) => (
                        <Indicator
                            key={image.src.src}
                            type="button"
                            $active={index === selectedIndex}
                            aria-pressed={index === selectedIndex}
                            aria-label={`${dictionary.imagePosition} ${index + 1}: ${getLocalizedText(image.title, locale)}`}
                            disabled={index === selectedIndex}
                            onClick={() => selectImage(index)}
                        />
                    ))}
                </Indicators>
                <ControlButton type="button" onClick={selectNext} aria-label={dictionary.nextImage} disabled={images.length < 2}>
                    <AppIcon name="forward" />
                </ControlButton>
            </Controls>
        </Carousel>
    )
}
