"use client"

import type { Project } from "@/app/pages/projects/models/project.model"
import { ProjectCarousel } from "@/app/pages/projects/components/ProjectCarousel/ProjectCarousel"
import { PagePanel } from "@/shared/components/ui/PagePanel/PagePanel"
import { TechnologyTag } from "@/shared/components/ui/TechnologyTag/TechnologyTag"
import type { Locale } from "@/shared/i18n/config"
import { getDictionary } from "@/shared/i18n/dictionaries"
import {
    BackLink,
    Description,
    Information,
    Overview,
    ResultCard,
    ResultGrid,
    SmallTitle,
    TechnologyList
} from "./ProjectDetailsPage.styles"

export function ProjectDetailsPage({ project, locale }: { project: Project; locale: Locale }) {
    const dictionary = getDictionary(locale).projects
    const content = project.content[locale]

    return (
        <PagePanel title={project.title}>
            <BackLink href={`/${locale}/projects`}>← {dictionary.title}</BackLink>
            <Overview>
                <Information>
                    <SmallTitle>{dictionary.technologies}</SmallTitle>
                    <TechnologyList>
                        {project.technologies.map((technology) => (
                            <TechnologyTag key={technology.name} technology={technology} />
                        ))}
                    </TechnologyList>
                    <Description>{content.description}</Description>
                </Information>
                <ProjectCarousel images={project.images} locale={locale} />
            </Overview>

            <ResultGrid>
                <ResultCard>
                    <SmallTitle>{dictionary.challenges}</SmallTitle>
                    <p>{content.challenges}</p>
                </ResultCard>
                <ResultCard>
                    <SmallTitle>{dictionary.learnings}</SmallTitle>
                    <p>{content.learnings}</p>
                </ResultCard>
            </ResultGrid>
        </PagePanel>
    )
}
