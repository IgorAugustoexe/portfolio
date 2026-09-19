import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ResumePage } from "@/app/pages/resume/ResumePage"
import { isLocale } from "@/shared/i18n/config"

export const metadata: Metadata = { title: "Resume" }

export default async function LocalizedResumePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params

    if (!isLocale(locale)) notFound()

    return <ResumePage locale={locale} />
}
