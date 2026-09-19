"use client"

import { aboutContent } from "@/app/pages/about/data/about.mock"
import { projects } from "@/app/pages/projects/data/projects.mock"
import { AppIcon } from "@/shared/components/ui/AppIcon/AppIcon"
import { profile } from "@/shared/data/profile.mock"
import type { Locale } from "@/shared/i18n/config"
import { getDictionary } from "@/shared/i18n/dictionaries"
import { getLocalizedText } from "@/shared/i18n/getLocalizedText"
import {
    AboutCanvas,
    AccentLine,
    FeaturedCard,
    FeaturedCopy,
    FeaturedGrid,
    FeaturedImage,
    FeaturedLink,
    FeaturedSection,
    Hero,
    HeroContent,
    HeroIntro,
    HeroKicker,
    HeroTitle,
    Orbit,
    OrbitDot,
    OrbitalArt,
    Planet,
    PrimaryAction,
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
        <AboutCanvas>
            <Hero>
                <OrbitalArt aria-hidden="true">
                    <Orbit />
                    <Planet />
                    <OrbitDot />
                </OrbitalArt>
                <HeroContent>
                    <HeroKicker><AccentLine />{about.kicker}</HeroKicker>
                    <HeroTitle>
                        {about.greeting}<br />
                        <span>{profile.name}.</span>
                    </HeroTitle>
                    <HeroIntro>
                        {aboutContent.introduction[locale].map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </HeroIntro>
                    <PrimaryAction href={`/${locale}/projects`}>
                        {about.viewProjects}<span aria-hidden="true">→</span>
                    </PrimaryAction>
                </HeroContent>
            </Hero>

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
                            <FeaturedCard href={`/${locale}/projects/${project.slug}`}>
                                <FeaturedImage
                                    src={project.images[0].src}
                                    alt={getLocalizedText(project.images[0].alt, locale)}
                                    width={720}
                                    height={440}
                                />
                                <FeaturedCopy>
                                    <strong>{project.title}</strong>
                                    <span>{project.content[locale].summary}</span>
                                </FeaturedCopy>
                            </FeaturedCard>
                        </li>
                    ))}
                </FeaturedGrid>
            </FeaturedSection>
        </AboutCanvas>
    )
}
