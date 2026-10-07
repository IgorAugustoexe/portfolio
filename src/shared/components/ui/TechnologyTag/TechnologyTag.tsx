"use client"

import { Tag, TagText } from "./TechnologyTag.styles"

export function TechnologyTag({ technology, textVisible = true }: {
    technology: { name: string }
    textVisible?: boolean
}) {
    return <Tag><TagText $textVisible={textVisible}>{technology.name}</TagText></Tag>
}
