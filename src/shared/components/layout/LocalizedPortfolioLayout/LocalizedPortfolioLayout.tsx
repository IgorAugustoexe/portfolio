import type { ReactNode } from "react"
import { DocumentLanguage } from "@/shared/components/DocumentLanguage"
import { PortfolioLayout } from "@/shared/components/layout/PortfolioLayout/PortfolioLayout"
import type { Locale } from "@/shared/i18n/config"

interface LocalizedPortfolioLayoutProps {
    children: ReactNode
    locale: Locale
}

export function LocalizedPortfolioLayout({ children, locale }: LocalizedPortfolioLayoutProps) {
    return (
        <>
            <DocumentLanguage locale={locale} />
            <PortfolioLayout locale={locale}>{children}</PortfolioLayout>
        </>
    )
}
