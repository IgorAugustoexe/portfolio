import type { StaticImageData } from "next/image"
import type { LocalizedText } from "@/shared/i18n/getLocalizedText"

export type ProjectCategory = "mobile" | "web" | "academic"
export type ProjectFilter = "all" | ProjectCategory

export interface Technology {
    name: string
    color?: string
}

export interface ProjectImage {
    src: StaticImageData
    alt: LocalizedText
}

export interface ProjectContent {
    summary: string
    description: string
    challenges: string
    learnings: string
}

export interface Project {
    slug: string
    title: string
    category: ProjectCategory
    technologies: Technology[]
    images: ProjectImage[]
    content: Record<"pt" | "en", ProjectContent>
}
