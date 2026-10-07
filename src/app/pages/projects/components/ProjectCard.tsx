"use client";

import type { Project } from "@/app/pages/projects/models/project.model";
import { IconTile } from "@/shared/components/ui/IconTile/IconTile";
import { TechnologyTag } from "@/shared/components/ui/TechnologyTag/TechnologyTag";
import type { Locale } from "@/shared/i18n/config";
import { getDictionary } from "@/shared/i18n/dictionaries";
import { getLocalizedText } from "@/shared/i18n/getLocalizedText";
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
          fill
          sizes="(max-width: 1024px) 100vw, 42vw"
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
        <ProjectTechnologyList aria-label={dictionary.technologies}>
          {project.technologies.map((technology) => (
            <li key={technology.name}>
              <TechnologyTag technology={technology} />
            </li>
          ))}
        </ProjectTechnologyList>
      </ProjectContent>
    </ProjectLink>
  );
}
