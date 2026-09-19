import type { LocalizedText } from "@/shared/i18n/getLocalizedText";
import type { AppIconName } from "@/shared/components/ui/AppIcon/AppIcon";
import avatarImage from "@/assets/images/profile/avatar.gif";

export interface ContactItem {
  label: LocalizedText;
  value: string;
  href?: string;
  icon: AppIconName;
}

export const profile = {
  name: "Igor Augusto",
  role: {
    pt: "Full-Stack Developer",
    en: "Full-Stack Developer",
  } satisfies LocalizedText,
  avatar: avatarImage,
  contacts: [
    {
      label: { pt: "E-mail", en: "Email" },
      value: "igoraugusto.dev@gmail.com",
      href: "mailto:igoraugusto.dev@gmail.com",
      icon: "email",
    },
    {
      label: { pt: "LinkedIn", en: "LinkedIn" },
      value: "LinkedIn",
      href: "https://www.linkedin.com/in/igor-augusto-dev/",
      icon: "linkedin",
    },
    {
      label: { pt: "GitHub", en: "GitHub" },
      value: "GitHub",
      href: "https://github.com/IgorAugustoexe",
      icon: "github",
    },
  ] satisfies ContactItem[],
};
