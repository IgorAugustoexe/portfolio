"use client";

import { education, experience, languageProfiles } from "@/app/pages/resume/data/resume.mock";
import { PagePanel } from "@/shared/components/ui/PagePanel/PagePanel";
import type { Locale } from "@/shared/i18n/config";
import { getDictionary } from "@/shared/i18n/dictionaries";
import { getLocalizedText } from "@/shared/i18n/getLocalizedText";
import {
  EntryDescription,
  EntryMeta,
  EntryTitle,
  ResumeGrid,
  Section,
  LanguageHeader,
  LanguageSubtitle,
  LanguageSkillList,
  LanguageSkillRow,
  LanguageSkillIcon,
  LanguageLevelBadge,
  LanguageDescription,
  LanguageTitle,
  Timeline,
  TimelineEntry,
  TimelineSectionTitle,
  TimelineTitleIcon,
} from "./ResumePage.styles";
import { AccentLine, SectionHeading } from "../about/AboutPage.styles";

export function ResumePage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale).resume;

  const renderTimeline = (items: typeof education) => (
    <Timeline>
      {items.map((item, index) => (
        <TimelineEntry key={`${item.organization}-${item.period}-${index}`}>
          <EntryTitle>{getLocalizedText(item.title, locale)}</EntryTitle>
          <EntryMeta>
            {item.organization} · {item.period}
          </EntryMeta>
          <EntryDescription>{getLocalizedText(item.description, locale)}</EntryDescription>
        </TimelineEntry>
      ))}
    </Timeline>
  );

  return (
    <PagePanel title={dictionary.title}>
      <ResumeGrid>
        <Section>
          <TimelineSectionTitle>
            <TimelineTitleIcon name="code" />
            {dictionary.educationTitle}
          </TimelineSectionTitle>
          {renderTimeline(education)}
        </Section>

        <Section>
          <TimelineSectionTitle>
            <TimelineTitleIcon name="code" />
            {dictionary.experienceTitle}
          </TimelineSectionTitle>
          {renderTimeline(experience)}
        </Section>

        {languageProfiles.map((language) => (
          <Section key={language.id} aria-labelledby={`language-${language.id}-heading`}>
            <LanguageHeader>
              <SectionHeading id={`language-${language.id}-heading`}>
                <AccentLine />{getLocalizedText(language.name, locale)}
              </SectionHeading>
              <LanguageSubtitle>{getLocalizedText(language.subtitle, locale)}</LanguageSubtitle>
            </LanguageHeader>
            <LanguageSkillList aria-label={dictionary.languageSkillsTitle}>
              {language.skills.map((skill) => (
                <LanguageSkillRow key={skill.id}>
                  <LanguageSkillIcon name={skill.icon} />
                  <LanguageTitle>{getLocalizedText(skill.name, locale)}</LanguageTitle>
                  <LanguageDescription>{getLocalizedText(skill.description, locale)}</LanguageDescription>
                  <LanguageLevelBadge>{skill.level}</LanguageLevelBadge>
                </LanguageSkillRow>
              ))}
            </LanguageSkillList>
          </Section>
        ))}
      </ResumeGrid>
    </PagePanel>
  );
}
