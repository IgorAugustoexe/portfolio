"use client";

import type { LanguageProfile } from "../models/resume.model";
import type { Locale } from "@/shared/i18n/config";
import { getLocalizedText } from "@/shared/i18n/getLocalizedText";
import { useSequentialCardReveal } from "@/shared/hooks/useSequentialCardReveal";
import { SectionHeading } from "@/shared/components/ui/SectionHeading/SectionHeading";
import {
  Section,
  LanguageHeader,
  LanguageSkillList,
  LanguageSkillRow,
  LanguageSkillIcon,
  LanguageTitle,
  LanguageDescription,
  LanguageLevelBadge,
} from "../ResumePage.styles";

export function ResumeLanguage({
  language,
  locale,
  listLabel,
}: {
  language: LanguageProfile;
  locale: Locale;
  listLabel: string;
}) {
  const { listRef, isTextVisible } = useSequentialCardReveal(language.skills.length);

  return (
    <Section aria-labelledby={`language-${language.id}-heading`}>
      <LanguageHeader>
        <SectionHeading id={`language-${language.id}-heading`}>
          {getLocalizedText(language.name, locale)}
        </SectionHeading>
      </LanguageHeader>
      <LanguageSkillList ref={listRef} aria-label={listLabel}>
        {language.skills.map((skill, index) => (
          <LanguageSkillRow key={skill.id} $textVisible={isTextVisible(index)}>
            <LanguageSkillIcon name={skill.icon} />
            <LanguageTitle data-reveal-content>{getLocalizedText(skill.name, locale)}</LanguageTitle>
            <LanguageDescription data-reveal-content>{getLocalizedText(skill.description, locale)}</LanguageDescription>
            <LanguageLevelBadge data-reveal-content>{skill.level}</LanguageLevelBadge>
          </LanguageSkillRow>
        ))}
      </LanguageSkillList>
    </Section>
  );
}
