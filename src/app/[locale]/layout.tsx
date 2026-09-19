import { notFound } from "next/navigation"
import type { ReactNode } from "react"
import { LocalizedPortfolioLayout } from "@/shared/components/layout/LocalizedPortfolioLayout/LocalizedPortfolioLayout"
import { isLocale, locales } from "@/shared/i18n/config"

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
    children,
    params
}: Readonly<{
    children: ReactNode
    params: Promise<{ locale: string }>
}>) {
    const { locale } = await params

    if (!isLocale(locale)) notFound()

    return <LocalizedPortfolioLayout locale={locale}>{children}</LocalizedPortfolioLayout>
}
