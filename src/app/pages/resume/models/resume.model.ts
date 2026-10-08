import type { LocalizedText } from "@/shared/i18n/getLocalizedText";
import type { AppIconName } from "@/shared/components/ui/AppIcon/AppIcon";

export interface TimelineItem {
  title: LocalizedText;
  organization: string;
  period: string;
  description: LocalizedText;
}

interface LanguageSkill {
  id: string;
  icon: AppIconName;
  name: LocalizedText;
  description: LocalizedText;
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
}

export interface LanguageProfile {
  id: string;
  name: LocalizedText;
  skills: LanguageSkill[];
}
