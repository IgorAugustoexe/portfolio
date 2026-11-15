"use client";

import type { Project } from "@/app/pages/projects/models/project.model";
import { IconTile } from "@/shared/components/ui/IconTile/IconTile";
import type { Locale } from "@/shared/i18n/config";
import { getDictionary } from "@/shared/i18n/dictionaries";
import { getLocalizedText } from "@/shared/i18n/getLocalizedText";
import { theme } from "@/shared/styles/theme";
import {
  ProjectCategory,
  ProjectContent,
  ProjectHeader,
  ProjectImage,
  ProjectImageFrame,
  ProjectImageOverlay,
  ProjectLink,
  ProjectSummary,
  ProjectTechnologyList,
  ProjectTitle,
} from "./ProjectCard.styles";

interface ProjectCardProps {
  project: Project;
  locale: Locale;
}

export function ProjectCard({
  project,
  locale,
}: ProjectCardProps) {
  const dictionary = getDictionary(locale).portfolio;
  const cover = project.cover ?? project.images[0];

  return (
    <ProjectLink
      href={`/${locale}/projects/${project.slug}`}
      aria-label={`${dictionary.details}: ${project.title}`}
    >
      <ProjectImageFrame>
        <ProjectImage
          src={cover.src}
          alt={getLocalizedText(cover.alt, locale)}
          sizes={`(width < ${theme.projectCard.stackedBreakpoint}) 100vw, 42vw`}
        />
        <ProjectImageOverlay aria-hidden="true">
          <IconTile name="view" size="large" />
        </ProjectImageOverlay>
      </ProjectImageFrame>
      <ProjectContent>
        <ProjectHeader>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectCategory>{dictionary.filters[project.category]}</ProjectCategory>
        </ProjectHeader>
        <ProjectSummary>{project.content[locale].summary}</ProjectSummary>
        <ProjectTechnologyList
          technologies={project.technologies}
          label={dictionary.technologies}
          locale={locale}
        />
      </ProjectContent>
    </ProjectLink>
  );
}
