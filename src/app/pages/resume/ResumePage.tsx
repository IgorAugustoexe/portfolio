"use client";

import { education, experience, languageProfiles } from "@/app/pages/resume/data/resume.mock";
import { ResumeTimeline } from "./components/ResumeTimeline";
import { ResumeLanguage } from "./components/ResumeLanguage";
import { PagePanel } from "@/shared/components/ui/PagePanel/PagePanel";
import type { Locale } from "@/shared/i18n/config";
import { getDictionary } from "@/shared/i18n/dictionaries";
import { ResumeGrid } from "./ResumePage.styles";

export function ResumePage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale).resume;

  return (
    <PagePanel key={locale} title={dictionary.title}>
      <ResumeGrid>
        <ResumeTimeline title={dictionary.experienceTitle} items={experience} locale={locale} icon={"experience"} />
        <ResumeTimeline title={dictionary.educationTitle} items={education} locale={locale} icon={"graduation"} />

        {languageProfiles.map((language) => (
          <ResumeLanguage
            key={`${locale}-${language.id}`}
            language={language}
            locale={locale}
            listLabel={dictionary.languageSkillsTitle}
          />
        ))}
      </ResumeGrid>
    </PagePanel>
  );
}
