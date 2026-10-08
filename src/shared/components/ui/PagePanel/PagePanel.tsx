"use client"

import type { PropsWithChildren } from "react"
import { Panel, Title } from "./PagePanel.styles"

interface PagePanelProps extends PropsWithChildren {
    title: string
}

export function PagePanel({ title, children }: PagePanelProps) {
    return (
        <Panel>
            <Title>{title}</Title>
            {children}
        </Panel>
    )
}
