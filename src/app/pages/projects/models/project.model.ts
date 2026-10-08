import type { StaticImageData } from "next/image"
import type { LocalizedText } from "@/shared/i18n/getLocalizedText"

export type ProjectCategory = "mobile" | "web" | "academic"
export type ProjectFilter = "all" | ProjectCategory

export interface Technology {
    name: string
}

interface ProjectCover {
    src: StaticImageData
    alt: LocalizedText
}

export interface ProjectImage extends ProjectCover {
    title: LocalizedText
    description: LocalizedText
}

interface ProjectContent {
    summary: string
    description: string
    challenges: string
    learnings: string
}

export interface Project {
    slug: string
    title: string
    category: ProjectCategory
    logo?: StaticImageData
    cover?: ProjectCover
    technologies: Technology[]
    images: ProjectImage[]
    content: Record<"pt" | "en", ProjectContent>
}
