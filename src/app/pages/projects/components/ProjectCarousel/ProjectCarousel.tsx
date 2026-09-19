"use client"

import { useState } from "react"
import type { ProjectImage } from "@/app/pages/projects/models/project.model"
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
    const [selectedIndex, setSelectedIndex] = useState(0)
    const dictionary = getDictionary(locale).projects
    const selectedImage = images[selectedIndex]

    const selectPrevious = () => {
        setSelectedIndex((current) => (current === 0 ? images.length - 1 : current - 1))
    }

    const selectNext = () => {
        setSelectedIndex((current) => (current === images.length - 1 ? 0 : current + 1))
    }

    return (
        <Carousel aria-label={`${dictionary.imagePosition} ${selectedIndex + 1} / ${images.length}`}>
            <ImageFrame>
                <CarouselImage
                    key={selectedImage.src.src}
                    src={selectedImage.src}
                    alt={getLocalizedText(selectedImage.alt, locale)}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                />
            </ImageFrame>
            <Controls>
                <ControlButton type="button" onClick={selectPrevious} aria-label={dictionary.previousImage}>
                    ←
                </ControlButton>
                <Indicators aria-hidden="true">
                    {images.map((image, index) => (
                        <Indicator key={image.src.src} $active={index === selectedIndex} />
                    ))}
                </Indicators>
                <ControlButton type="button" onClick={selectNext} aria-label={dictionary.nextImage}>
                    →
                </ControlButton>
            </Controls>
        </Carousel>
    )
}
