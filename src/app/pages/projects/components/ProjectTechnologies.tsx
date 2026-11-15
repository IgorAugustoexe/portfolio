"use client";

import type { Ref } from "react";
import type { Locale } from "@/shared/i18n/config";
import { getLocalizedText } from "@/shared/i18n/getLocalizedText";
import type { Project } from "@/app/pages/projects/models/project.model";
import { TechnologyTag } from "@/shared/components/ui/TechnologyTag/TechnologyTag";
import { List } from "./ProjectTechnologies.styles";

interface ProjectTechnologiesProps {
  technologies: Project["technologies"];
  label: string;
  locale: Locale;
  className?: string;
  listRef?: Ref<HTMLUListElement>;
  isTextVisible?: (index: number) => boolean;
}

export function ProjectTechnologies({
  technologies,
  label,
  locale,
  className,
  listRef,
  isTextVisible,
}: ProjectTechnologiesProps) {
  return (
    <List ref={listRef} className={className} aria-label={label}>
      {technologies.map((technology, index) => (
        <li key={technology.name}>
          <TechnologyTag
            technology={{ name: technology.label ? getLocalizedText(technology.label, locale) : technology.name }}
            textVisible={isTextVisible?.(index) ?? true}
          />
        </li>
      ))}
    </List>
  );
}
