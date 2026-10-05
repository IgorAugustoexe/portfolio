"use client";

import type { Project } from "@/app/pages/projects/models/project.model";
import { AppIcon } from "@/shared/components/ui/AppIcon/AppIcon";
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
  ProjectViewIcon,
} from "./ProjectCard.styles";

interface ProjectCardProps {
  project: Project;
  locale: Locale;
  layout?: "responsive" | "vertical";
  compact?: boolean;
  titleAs?: "h2" | "h3";
}

export function ProjectCard({
  project,
  locale,
  layout = "responsive",
  compact = false,
  titleAs = "h2",
}: ProjectCardProps) {
  const dictionary = getDictionary(locale).projects;
  const vertical = layout === "vertical";

  return (
    <ProjectLink
      href={`/${locale}/projects/${project.slug}`}
      aria-label={`${dictionary.details}: ${project.title}`}
      $vertical={vertical}
    >
      <ProjectImageFrame $vertical={vertical} $compact={compact}>
        <ProjectImage
          src={project.images[0].src}
          alt={getLocalizedText(project.images[0].alt, locale)}
          fill
          sizes={
            vertical
              ? "(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 33vw"
              : "(max-width: 1024px) 100vw, 42vw"
          }
        />
        <ProjectImageOverlay aria-hidden="true">
          <ProjectViewIcon>
            <AppIcon name="view" />
          </ProjectViewIcon>
        </ProjectImageOverlay>
      </ProjectImageFrame>
      <ProjectContent $compact={compact}>
        <ProjectHeader>
          <ProjectTitle as={titleAs} $compact={compact}>{project.title}</ProjectTitle>
          <ProjectCategory>{dictionary.filters[project.category]}</ProjectCategory>
        </ProjectHeader>
        <ProjectSummary $compact={compact}>{project.content[locale].summary}</ProjectSummary>
        <ProjectTechnologyList $compact={compact} aria-label={dictionary.technologies}>
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
