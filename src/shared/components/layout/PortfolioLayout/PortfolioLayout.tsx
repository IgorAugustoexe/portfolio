"use client"

import type { PropsWithChildren } from "react"
import type { Locale } from "@/shared/i18n/config"
import { Navbar } from "../Navbar/Navbar"
import { Sidebar } from "../Sidebar/Sidebar"
import { Content, Shell } from "./PortfolioLayout.styles"

interface PortfolioLayoutProps extends PropsWithChildren {
    locale: Locale
}

export function PortfolioLayout({ locale, children }: PortfolioLayoutProps) {
    return (
        <Shell>
            <Sidebar locale={locale} />
            <Content>
                <Navbar locale={locale} />
                {children}
            </Content>
        </Shell>
    )
}
