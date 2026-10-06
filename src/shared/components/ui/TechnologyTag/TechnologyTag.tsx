"use client"

import { Tag } from "./TechnologyTag.styles"

export function TechnologyTag({ technology }: { technology: { name: string } }) {
    return <Tag>{technology.name}</Tag>
}
