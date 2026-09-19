"use client";

import { education, experience, skills } from "@/app/pages/resume/data/resume.mock";
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
  SectionTitle,
  SkillFill,
  SkillHeader,
  SkillsCard,
  SkillTrack,
  Timeline,
  TimelineEntry,
} from "./ResumePage.styles";

export function ResumePage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale).resume;

  const renderTimeline = (items: typeof education) => (
    <Timeline>
      {items.map((item) => (
        <TimelineEntry key={`${item.organization}-${item.period}`}>
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
          <SectionTitle>{dictionary.educationTitle}</SectionTitle>
          {renderTimeline(education)}
        </Section>

        <Section>
          <SectionTitle>{dictionary.experienceTitle}</SectionTitle>
          {renderTimeline(experience)}
        </Section>

        <Section>
          <SectionTitle>{dictionary.skillsTitle}</SectionTitle>
          <SkillsCard>
            {skills.map((skill) => (
              <div key={skill.name}>
                <SkillHeader>
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </SkillHeader>
                <SkillTrack aria-label={`${skill.name}: ${skill.level}%`}>
                  <SkillFill $level={skill.level} />
                </SkillTrack>
              </div>
            ))}
          </SkillsCard>
        </Section>
      </ResumeGrid>
    </PagePanel>
  );
}
