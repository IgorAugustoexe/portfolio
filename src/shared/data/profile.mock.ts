import type { LocalizedText } from "@/shared/i18n/getLocalizedText";
import type { AppIconName } from "@/shared/components/ui/AppIcon/AppIcon";
import avatarImage from "@/assets/images/profile/avatar.gif";

interface ContactItem {
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
      value: "igoraugusto.dev@gmail.com",
      href: "mailto:igoraugusto.dev@gmail.com",
      icon: "email",
    },
    {
      value: "LinkedIn",
      href: "https://www.linkedin.com/in/igor-augusto-dev/",
      icon: "linkedin",
    },
    {
      value: "GitHub",
      href: "https://github.com/IgorAugustoexe",
      icon: "github",
    },
  ] satisfies ContactItem[],
};
