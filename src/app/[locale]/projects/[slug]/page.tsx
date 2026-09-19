import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getProjectBySlug, projects } from "@/app/pages/projects/data/projects.mock"
import { ProjectDetailsPage } from "@/app/pages/projects/ProjectDetailsPage"
import { isLocale } from "@/shared/i18n/config"

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
    const { locale, slug } = await params
    const project = getProjectBySlug(slug)

    if (!project || !isLocale(locale)) return {}

    return {
        title: project.title,
        description: project.content[locale].summary
    }
}

export default async function LocalizedProjectDetailsPage({
    params
}: {
    params: Promise<{ locale: string; slug: string }>
}) {
    const { locale, slug } = await params
    const project = getProjectBySlug(slug)

    if (!project || !isLocale(locale)) notFound()

    return <ProjectDetailsPage project={project} locale={locale} />
}
