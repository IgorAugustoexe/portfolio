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
import { useSequentialCardReveal } from "@/shared/hooks/useSequentialCardReveal"
import {
    BackLink,
    Description,
    Information,
    Overview,
    ProjectIntroduction,
    ProjectLogoStamp,
    ResultCard,
    ResultGrid,
    ResultHeading,
    SmallTitle,
    TechnologyList
} from "./ProjectDetailsPage.styles"

export function ProjectDetailsPage({ project, locale }: { project: Project; locale: Locale }) {
    return <ProjectDetailsContent key={`${project.slug}-${locale}`} project={project} locale={locale} />
}

function ProjectDetailsContent({ project, locale }: { project: Project; locale: Locale }) {
    const dictionary = getDictionary(locale).portfolio
    const content = project.content[locale]
    const { listRef, isTextVisible } = useSequentialCardReveal<HTMLDivElement>(4, "[data-reveal-block]")
    const technologiesReveal = useSequentialCardReveal<HTMLDivElement>(project.technologies.length)

    return (
        <PagePanel title={project.title} animate>
            <BackLink href={`/${locale}/projects`}>
                <AppIcon name="back" />
                {dictionary.title}
            </BackLink>
            <div ref={listRef}>
                <ProjectIntroduction>
                    {project.logo && (
                        <ProjectLogoStamp
                            image={project.logo}
                            imageSizes={`(max-width: ${theme.breakpoints.mobile}) ${theme.projectLogoStamp.mobileSize}, ${theme.projectLogoStamp.size}`}
                        />
                    )}
                    <Information data-reveal-block $textVisible={isTextVisible(0)}>
                        <Description $textVisible={isTextVisible(0)}>{content.description}</Description>
                    </Information>
                </ProjectIntroduction>
                {project.images.length > 0 && (
                    <ProjectCarousel key={project.images.length} images={project.images} locale={locale} />
                )}
                <Overview>
                    <Information data-reveal-block $textVisible={isTextVisible(1)}>
                        <SmallTitle data-reveal-content>{dictionary.technologies}</SmallTitle>
                        <TechnologyList ref={technologiesReveal.listRef}>
                            {project.technologies.map((technology, index) => (
                                <TechnologyTag
                                    key={technology.name}
                                    technology={technology}
                                    textVisible={technologiesReveal.isTextVisible(index)}
                                />
                            ))}
                        </TechnologyList>
                    </Information>
                </Overview>

                <ResultGrid>
                    <ResultCard data-reveal-block $textVisible={isTextVisible(2)}>
                        <ResultHeading>
                            <IconTile name="challenges" />
                            <SmallTitle data-reveal-content>{dictionary.challenges}</SmallTitle>
                        </ResultHeading>
                        <p data-reveal-content>{content.challenges}</p>
                    </ResultCard>
                    <ResultCard data-reveal-block $textVisible={isTextVisible(3)}>
                        <ResultHeading>
                            <IconTile name="learnings" />
                            <SmallTitle data-reveal-content>{dictionary.learnings}</SmallTitle>
                        </ResultHeading>
                        <p data-reveal-content>{content.learnings}</p>
                    </ResultCard>
                </ResultGrid>
            </div>
        </PagePanel>
    )
}
