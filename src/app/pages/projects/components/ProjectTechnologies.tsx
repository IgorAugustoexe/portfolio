"use client";

import type { Ref } from "react";
import type { Project } from "@/app/pages/projects/models/project.model";
import { TechnologyTag } from "@/shared/components/ui/TechnologyTag/TechnologyTag";
import { List } from "./ProjectTechnologies.styles";

interface ProjectTechnologiesProps {
  technologies: Project["technologies"];
  label: string;
  className?: string;
  listRef?: Ref<HTMLUListElement>;
  isTextVisible?: (index: number) => boolean;
}

export function ProjectTechnologies({
  technologies,
  label,
  className,
  listRef,
  isTextVisible,
}: ProjectTechnologiesProps) {
  return (
    <List ref={listRef} className={className} aria-label={label}>
      {technologies.map((technology, index) => (
        <li key={technology.name}>
          <TechnologyTag
            technology={technology}
            textVisible={isTextVisible?.(index) ?? true}
          />
        </li>
      ))}
    </List>
  );
}
