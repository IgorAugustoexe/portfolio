"use client"

import type { Technology } from "@/app/pages/projects/models/project.model"
import { Tag } from "./TechnologyTag.styles"

export function TechnologyTag({ technology }: { technology: Technology }) {
    return <Tag $color={technology.color}>{technology.name}</Tag>
}
