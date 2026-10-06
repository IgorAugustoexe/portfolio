"use client"

import type { Project } from "@/app/pages/projects/models/project.model"
import { ProjectCarousel } from "@/app/pages/projects/components/ProjectCarousel/ProjectCarousel"
import { PagePanel } from "@/shared/components/ui/PagePanel/PagePanel"
import { TechnologyTag } from "@/shared/components/ui/TechnologyTag/TechnologyTag"
import { IconTile } from "@/shared/components/ui/IconTile/IconTile"
import { AppIcon } from "@/shared/components/ui/AppIcon/AppIcon"
import type { Locale } from "@/shared/i18n/config"
import { getDictionary } from "@/shared/i18n/dictionaries"
import { theme } from "@/shared/styles/theme"
import {
    BackLink,
    Description,
    Information,
    Overview,
    ProjectLogoStamp,
    ResultCard,
    ResultGrid,
    ResultHeading,
    SmallTitle,
    TechnologyList
} from "./ProjectDetailsPage.styles"

export function ProjectDetailsPage({ project, locale }: { project: Project; locale: Locale }) {
    const dictionary = getDictionary(locale).projects
    const content = project.content[locale]

    return (
        <PagePanel title={project.title}>
            <BackLink href={`/${locale}/projects`}>
                <AppIcon name="back" />
                {dictionary.title}
            </BackLink>
            <Overview>
                <Information>
                    <ResultHeading>
                        {project.logo ? (
                            <ProjectLogoStamp
                                image={project.logo}
                                imageSizes={`(max-width: ${theme.breakpoints.mobile}) ${theme.projectLogoStamp.mobileSize}, ${theme.projectLogoStamp.size}`}
                            />
                        ) : (
                            <SmallTitle>{dictionary.technologies}</SmallTitle>
                        )}
                    </ResultHeading>
                    <TechnologyList>
                        {project.technologies.map((technology) => (
                            <TechnologyTag key={technology.name} technology={technology} />
                        ))}
                    </TechnologyList>
                    <Description>{content.description}</Description>
                </Information>
                {project.images.length > 0 && (
                    <ProjectCarousel key={project.images.length} images={project.images} locale={locale} />
                )}
            </Overview>

            <ResultGrid>
                <ResultCard>
                    <ResultHeading>
                        <IconTile name="challenges" />
                        <SmallTitle>{dictionary.challenges}</SmallTitle>
                    </ResultHeading>
                    <p>{content.challenges}</p>
                </ResultCard>
                <ResultCard>
                    <ResultHeading>
                        <IconTile name="learnings" />
                        <SmallTitle>{dictionary.learnings}</SmallTitle>
                    </ResultHeading>
                    <p>{content.learnings}</p>
                </ResultCard>
            </ResultGrid>
        </PagePanel>
    )
}
