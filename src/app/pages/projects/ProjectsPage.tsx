"use client"

import { useState } from "react"
import { ProjectCard } from "@/app/pages/projects/components/ProjectCard"
import { ProjectFilterSelect } from "@/app/pages/projects/components/ProjectFilterSelect"
import { projects } from "@/app/pages/projects/data/projects.mock"
import type { ProjectFilter } from "@/app/pages/projects/models/project.model"
import { PagePanel } from "@/shared/components/ui/PagePanel/PagePanel"
import type { Locale } from "@/shared/i18n/config"
import { getDictionary } from "@/shared/i18n/dictionaries"
import {
    EmptyState,
    FilterButton,
    FilterList,
    ProjectGrid,
    ProjectItem,
} from "./ProjectsPage.styles"

const projectFilters: ProjectFilter[] = ["all", "mobile", "web", "academic"]

export function ProjectsPage({ locale }: { locale: Locale }) {
    const dictionary = getDictionary(locale).portfolio
    const [selectedFilter, setSelectedFilter] = useState<ProjectFilter>("all")
    const filteredProjects = projects.filter(
        (project) => selectedFilter === "all" || project.category === selectedFilter
    )

    return (
        <PagePanel key={locale} title={dictionary.title} animate>
            <FilterList aria-label={dictionary.filterLabel}>
                {projectFilters.map((filter) => (
                    <li key={filter}>
                        <FilterButton
                            type="button"
                            $active={selectedFilter === filter}
                            aria-pressed={selectedFilter === filter}
                            disabled={selectedFilter === filter}
                            onClick={() => setSelectedFilter(filter)}
                        >
                            {dictionary.filters[filter]}
                        </FilterButton>
                    </li>
                ))}
            </FilterList>

            <ProjectFilterSelect
                filters={projectFilters}
                labels={dictionary.filters}
                label={dictionary.filterLabel}
                value={selectedFilter}
                onChange={setSelectedFilter}
            />

            {filteredProjects.length > 0 ? (
                <ProjectGrid>
                    {filteredProjects.map((project) => (
                        <ProjectItem key={`${selectedFilter}-${project.slug}`}>
                            <ProjectCard project={project} locale={locale} />
                        </ProjectItem>
                    ))}
                </ProjectGrid>
            ) : (
                <EmptyState>{dictionary.empty}</EmptyState>
            )}
        </PagePanel>
    )
}
