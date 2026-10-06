"use client";

import { useEffect, useRef, useState } from "react";
import { aboutContent } from "@/app/pages/about/data/about.mock";
import { skills, type SkillLevel } from "@/app/pages/about/data/skills.mock";
import { IconTile } from "@/shared/components/ui/IconTile/IconTile";
import { TechnologyTag } from "@/shared/components/ui/TechnologyTag/TechnologyTag";
import { PagePanel } from "@/shared/components/ui/PagePanel/PagePanel";
import type { Locale } from "@/shared/i18n/config";
import { getDictionary } from "@/shared/i18n/dictionaries";
import { getLocalizedText } from "@/shared/i18n/getLocalizedText";
import { theme } from "@/shared/styles/theme";
import {
  AboutIntro,
  AccentLine,
  SkillsSection,
  SkillsCard,
  SkillScale,
  SkillScaleLabels,
  SkillList,
  SkillRow,
  SkillName,
  SkillTrack,
  SkillLine,
  SkillFill,
  SkillMarker,
  SectionHeading,
  SectionTitleRow,
  ServiceCard,
  ServiceDescription,
  ServiceGrid,
  ServiceTitle,
  TechnologyList,
} from "./AboutPage.styles";

const skillLevels: SkillLevel[] = ["basic", "intermediate", "advanced"];

export function AboutPage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const about = dictionary.about;
  const skillsListRef = useRef<HTMLUListElement>(null);
  const [visibleSkills, setVisibleSkills] = useState<Set<string>>(() => new Set());

  useEffect(() => {
    const list = skillsListRef.current;
    if (!list) return;
    const timers = new Set<ReturnType<typeof setTimeout>>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const skillName = (entry.target as HTMLElement).dataset.skill;
          if (!skillName) return;
          observer.unobserve(entry.target);
          const timer = setTimeout(() => {
            timers.delete(timer);
            setVisibleSkills((previous) => new Set(previous).add(skillName));
          }, theme.motion.skills.delay);
          timers.add(timer);
        });
      },
      { threshold: 0.25 },
    );

    Array.from(list.children).forEach((row) => {
      observer.observe(row);
    });
    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <PagePanel title={about.title}>
      <AboutIntro>
        {aboutContent.introduction[locale].map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </AboutIntro>

      <section aria-labelledby="services-heading">
        <SectionTitleRow>
          <SectionHeading id="services-heading">
            <AccentLine />
            {about.servicesTitle}
          </SectionHeading>
        </SectionTitleRow>
        <ServiceGrid>
          {aboutContent.services.map((service) => (
            <ServiceCard key={service.id}>
              <IconTile name={service.icon} />
              <div>
                <ServiceTitle>{getLocalizedText(service.title, locale)}</ServiceTitle>
                <ServiceDescription>{getLocalizedText(service.description, locale)}</ServiceDescription>
                <TechnologyList>
                  {service.technologies.map((technology) => (
                    <li key={technology.en}>
                      <TechnologyTag technology={{ name: getLocalizedText(technology, locale) }} />
                    </li>
                  ))}
                </TechnologyList>
              </div>
            </ServiceCard>
          ))}
        </ServiceGrid>
      </section>

      <SkillsSection aria-labelledby="skills-heading">
        <SectionTitleRow>
          <SectionHeading id="skills-heading">
            <AccentLine />
            {about.skillsTitle}
          </SectionHeading>
        </SectionTitleRow>
        <SkillsCard>
          <SkillScale aria-hidden="true">
            <SkillScaleLabels>
              {skillLevels.map((level) => (
                <span key={level}>
                  <span className="full-label">{about.skillLevels[level]}</span>
                  <span className="compact-label">{about.skillLevelsCompact[level]}</span>
                </span>
              ))}
            </SkillScaleLabels>
          </SkillScale>
          <SkillList ref={skillsListRef}>
            {skills.map((skill) => {
              const levelIndex = skillLevels.indexOf(skill.level);
              const isVisible = visibleSkills.has(skill.name);
              return (
                <SkillRow key={skill.name} data-skill={skill.name}>
                  <SkillName>{skill.name}</SkillName>
                  <SkillTrack
                    role="meter"
                    aria-label={skill.name}
                    aria-valuemin={1}
                    aria-valuemax={3}
                    aria-valuenow={levelIndex + 1}
                    aria-valuetext={about.skillLevels[skill.level]}
                  >
                    <SkillLine aria-hidden="true">
                      <SkillFill $level={skill.level} $animate={isVisible} />
                    </SkillLine>
                    {skillLevels.map((level, index) => (
                      <SkillMarker
                        key={level}
                        aria-hidden="true"
                        $active={index <= levelIndex}
                        $current={index === levelIndex}
                        $animate={isVisible}
                        $delay={index === 0 ? 0 : theme.motion.skills.duration * (index === levelIndex ? 1 : 0.35)}
                      />
                    ))}
                  </SkillTrack>
                </SkillRow>
              );
            })}
          </SkillList>
        </SkillsCard>
      </SkillsSection>
    </PagePanel>
  );
}
