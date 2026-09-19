import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { AboutPage } from "@/app/pages/about/AboutPage"
import { isLocale } from "@/shared/i18n/config"

export const metadata: Metadata = { title: "About" }

export default async function LocalizedAboutPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params

    if (!isLocale(locale)) notFound()

    return <AboutPage locale={locale} />
}
