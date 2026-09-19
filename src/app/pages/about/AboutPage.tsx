"use client"

import { aboutContent } from "@/app/pages/about/data/about.mock"
import type { Locale } from "@/shared/i18n/config"
import { getDictionary } from "@/shared/i18n/dictionaries"
import { getLocalizedText } from "@/shared/i18n/getLocalizedText"
import { PagePanel } from "@/shared/components/ui/PagePanel/PagePanel"
import { AppIcon } from "@/shared/components/ui/AppIcon/AppIcon"
import {
    Introduction,
    SectionHeading,
    ServiceCard,
    ServiceDescription,
    ServiceGrid,
    ServiceIcon,
    ServiceTitle
} from "./AboutPage.styles"

export function AboutPage({ locale }: { locale: Locale }) {
    const dictionary = getDictionary(locale)

    return (
        <PagePanel title={dictionary.about.title}>
            <Introduction>
                {aboutContent.introduction[locale].map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
            </Introduction>

            <SectionHeading>{dictionary.about.servicesTitle}</SectionHeading>
            <ServiceGrid>
                {aboutContent.services.map((service) => (
                    <ServiceCard key={service.title.en}>
                        <ServiceIcon aria-hidden="true">
                            <AppIcon name={service.icon} />
                        </ServiceIcon>
                        <div>
                            <ServiceTitle>{getLocalizedText(service.title, locale)}</ServiceTitle>
                            <ServiceDescription>{getLocalizedText(service.description, locale)}</ServiceDescription>
                        </div>
                    </ServiceCard>
                ))}
            </ServiceGrid>
        </PagePanel>
    )
}
