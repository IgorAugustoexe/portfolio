"use client"

import type { CSSProperties } from "react"
import { Starfield, StarLayer, Vignette } from "./StarfieldBackground.styles"

interface StarLayerDefinition {
    count: number
    duration: number
    maxSize: number
    maxOpacity: number
    minSize: number
    minOpacity: number
    seed: number
    tone: "dim" | "soft" | "cool"
    travelX: string
    travelY: string
    twinkleDelay: number
    twinkleDuration: number
}

type StarLayerStyle = CSSProperties & {
    "--star-opacity-max": string
    "--star-opacity-min": string
    "--star-opacity-rest": string
    "--star-travel-x": string
    "--star-travel-y": string
}

function createRandom(seed: number) {
    let state = seed >>> 0

    return () => {
        state = (state * 1664525 + 1013904223) >>> 0
        return state / 4294967296
    }
}

function createStarTexture({ count, maxSize, minSize, seed }: StarLayerDefinition) {
    const random = createRandom(seed)

    return Array.from({ length: count }, () => {
        const x = (random() * 100).toFixed(2)
        const y = (random() * 100).toFixed(2)
        const size = minSize + random() * (maxSize - minSize)
        const fade = size + 0.65

        return `radial-gradient(circle at ${x}% ${y}%, currentColor 0, currentColor ${size.toFixed(2)}px, transparent ${fade.toFixed(2)}px)`
    }).join(",")
}

const layerDefinitions: StarLayerDefinition[] = [
    {
        count: 82,
        duration: 180,
        maxOpacity: 0.64,
        maxSize: 0.72,
        minOpacity: 0.38,
        minSize: 0.36,
        seed: 17,
        tone: "dim",
        travelX: "0.7%",
        travelY: "-1.1%",
        twinkleDelay: -3,
        twinkleDuration: 17
    },
    {
        count: 68,
        duration: 215,
        maxOpacity: 0.7,
        maxSize: 0.82,
        minOpacity: 0.36,
        minSize: 0.4,
        seed: 41,
        tone: "dim",
        travelX: "-0.8%",
        travelY: "0.9%",
        twinkleDelay: -11,
        twinkleDuration: 23
    },
    {
        count: 52,
        duration: 245,
        maxOpacity: 0.72,
        maxSize: 0.88,
        minOpacity: 0.4,
        minSize: 0.45,
        seed: 83,
        tone: "dim",
        travelX: "0.45%",
        travelY: "0.8%",
        twinkleDelay: -7,
        twinkleDuration: 29
    },
    {
        count: 38,
        duration: 270,
        maxOpacity: 0.82,
        maxSize: 1.02,
        minOpacity: 0.46,
        minSize: 0.54,
        seed: 109,
        tone: "soft",
        travelX: "-0.55%",
        travelY: "-0.75%",
        twinkleDelay: -5,
        twinkleDuration: 19
    },
    {
        count: 28,
        duration: 300,
        maxOpacity: 0.9,
        maxSize: 1.16,
        minOpacity: 0.5,
        minSize: 0.62,
        seed: 137,
        tone: "soft",
        travelX: "0.65%",
        travelY: "0.6%",
        twinkleDelay: -13,
        twinkleDuration: 31
    },
    {
        count: 20,
        duration: 285,
        maxOpacity: 0.88,
        maxSize: 1.22,
        minOpacity: 0.46,
        minSize: 0.68,
        seed: 173,
        tone: "cool",
        travelX: "-0.5%",
        travelY: "0.7%",
        twinkleDelay: -9,
        twinkleDuration: 13
    },
    {
        count: 14,
        duration: 320,
        maxOpacity: 1,
        maxSize: 1.35,
        minOpacity: 0.54,
        minSize: 0.76,
        seed: 211,
        tone: "cool",
        travelX: "0.4%",
        travelY: "-0.55%",
        twinkleDelay: -2,
        twinkleDuration: 11
    }
]

const layers = layerDefinitions.map((definition) => ({
    ...definition,
    texture: createStarTexture(definition)
}))

export function StarfieldBackground() {
    return (
        <Starfield aria-hidden="true">
            {layers.map((layer) => {
                const restingOpacity = (layer.minOpacity + layer.maxOpacity) / 2
                const style: StarLayerStyle = {
                    "--star-opacity-max": String(layer.maxOpacity),
                    "--star-opacity-min": String(layer.minOpacity),
                    "--star-opacity-rest": String(restingOpacity),
                    "--star-travel-x": layer.travelX,
                    "--star-travel-y": layer.travelY,
                    backgroundImage: layer.texture
                }

                return (
                    <StarLayer
                        key={layer.seed}
                        $duration={layer.duration}
                        $tone={layer.tone}
                        $twinkleDelay={layer.twinkleDelay}
                        $twinkleDuration={layer.twinkleDuration}
                        style={style}
                    />
                )
            })}
            <Vignette />
        </Starfield>
    )
}
