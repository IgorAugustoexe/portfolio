import type { LocalizedText } from "@/shared/i18n/getLocalizedText"

export interface TimelineItem {
    title: LocalizedText
    organization: string
    period: string
    description: LocalizedText
}

export interface Skill {
    name: string
    level: number
}
