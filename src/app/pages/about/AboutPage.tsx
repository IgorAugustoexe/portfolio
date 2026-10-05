"use client"

import { aboutContent } from "@/app/pages/about/data/about.mock"
import { ProjectCard } from "@/app/pages/projects/components/ProjectCard"
import { projects } from "@/app/pages/projects/data/projects.mock"
import { AppIcon } from "@/shared/components/ui/AppIcon/AppIcon"
import { PagePanel } from "@/shared/components/ui/PagePanel/PagePanel"
import type { Locale } from "@/shared/i18n/config"
import { getDictionary } from "@/shared/i18n/dictionaries"
import { getLocalizedText } from "@/shared/i18n/getLocalizedText"
import {
    AboutIntro,
    AccentLine,
    FeaturedGrid,
    FeaturedLink,
    FeaturedSection,
    SectionHeading,
    SectionIntro,
    SectionTitleRow,
    ServiceCard,
    ServiceDescription,
    ServiceGrid,
    ServiceIcon,
    ServiceTitle,
    TechnologyList
} from "./AboutPage.styles"

export function AboutPage({ locale }: { locale: Locale }) {
    const dictionary = getDictionary(locale)
    const about = dictionary.about

    return (
        <PagePanel title={about.title}>
            <AboutIntro>
                {aboutContent.introduction[locale].map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </AboutIntro>

            <section aria-labelledby="services-heading">
                <SectionTitleRow>
                    <SectionHeading id="services-heading"><AccentLine />{about.servicesTitle}</SectionHeading>
                </SectionTitleRow>
                <ServiceGrid>
                    {aboutContent.services.map((service) => (
                        <ServiceCard key={service.id}>
                            <ServiceIcon aria-hidden="true"><AppIcon name={service.icon} /></ServiceIcon>
                            <div>
                                <ServiceTitle>{getLocalizedText(service.title, locale)}</ServiceTitle>
                                <ServiceDescription>{getLocalizedText(service.description, locale)}</ServiceDescription>
                                <TechnologyList>
                                    {service.technologies.map((technology) => (
                                        <li key={technology.en}>{getLocalizedText(technology, locale)}</li>
                                    ))}
                                </TechnologyList>
                            </div>
                        </ServiceCard>
                    ))}
                </ServiceGrid>
            </section>

            <FeaturedSection aria-labelledby="featured-heading">
                <SectionTitleRow>
                    <div>
                        <SectionHeading id="featured-heading"><AccentLine />{about.featuredTitle}</SectionHeading>
                        <SectionIntro>{about.featuredDescription}</SectionIntro>
                    </div>
                    <FeaturedLink href={`/${locale}/projects`}>{about.viewAll} <span aria-hidden="true">→</span></FeaturedLink>
                </SectionTitleRow>
                <FeaturedGrid>
                    {projects.slice(0, 2).map((project) => (
                        <li key={project.slug}>
                            <ProjectCard project={project} locale={locale} layout="vertical" compact titleAs="h3" />
                        </li>
                    ))}
                </FeaturedGrid>
            </FeaturedSection>
        </PagePanel>
    )
}
