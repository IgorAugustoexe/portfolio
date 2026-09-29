"use client";

import { education, experience, skills } from "@/app/pages/resume/data/resume.mock";
import { AppIcon } from "@/shared/components/ui/AppIcon/AppIcon";
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
  SkillFill,
  SkillHeader,
  SkillsCard,
  SkillTrack,
  Timeline,
  TimelineEntry,
  TimelineSectionTitle,
  TimelineTitleIcon,
} from "./ResumePage.styles";
import { AccentLine, SectionHeading, SectionTitleRow } from "../about/AboutPage.styles";

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
            <TimelineTitleIcon aria-hidden="true">
              <AppIcon name="code" />
            </TimelineTitleIcon>
            {dictionary.educationTitle}
          </TimelineSectionTitle>
          {renderTimeline(education)}
        </Section>

        <Section>
          <TimelineSectionTitle>
            <TimelineTitleIcon aria-hidden="true">
              <AppIcon name="code" />
            </TimelineTitleIcon>
            {dictionary.experienceTitle}
          </TimelineSectionTitle>
          {renderTimeline(experience)}
        </Section>

        <Section>
          <SectionTitleRow>
            <SectionHeading><AccentLine />{dictionary.skillsTitle}</SectionHeading>
          </SectionTitleRow>
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
