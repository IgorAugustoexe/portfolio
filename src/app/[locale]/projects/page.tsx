import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ProjectsPage } from "@/app/pages/projects/ProjectsPage"
import { isLocale } from "@/shared/i18n/config"

export const metadata: Metadata = { title: "Projects" }

export default async function LocalizedProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params

    if (!isLocale(locale)) notFound()

    return <ProjectsPage locale={locale} />
}
