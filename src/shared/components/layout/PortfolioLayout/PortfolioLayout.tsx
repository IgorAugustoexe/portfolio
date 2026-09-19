"use client"

import type { PropsWithChildren } from "react"
import type { Locale } from "@/shared/i18n/config"
import { getDictionary } from "@/shared/i18n/dictionaries"
import { Navbar } from "../Navbar/Navbar"
import { Sidebar } from "../Sidebar/Sidebar"
import { Content, MobileFooter, Shell } from "./PortfolioLayout.styles"

interface PortfolioLayoutProps extends PropsWithChildren {
    locale: Locale
}

export function PortfolioLayout({ locale, children }: PortfolioLayoutProps) {
    const dictionary = getDictionary(locale)

    return (
        <Shell>
            <Sidebar locale={locale} />
            <Content>
                <Navbar locale={locale} />
                {children}
            </Content>
            <MobileFooter>
                <p>{dictionary.footer.message}</p>
                <p>© 2026 Igor Augusto</p>
            </MobileFooter>
        </Shell>
    )
}
