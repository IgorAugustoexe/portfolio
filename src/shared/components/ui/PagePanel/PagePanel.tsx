"use client"

import type { PropsWithChildren } from "react"
import { Panel, Title } from "./PagePanel.styles"

interface PagePanelProps extends PropsWithChildren {
    title: string
    className?: string
    animate?: boolean
}

export function PagePanel({ title, children, className, animate = false }: PagePanelProps) {
    return (
        <Panel className={className} $animate={animate}>
            <Title>{title}</Title>
            {children}
        </Panel>
    )
}
