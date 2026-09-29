import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faCode, faEnvelope, faEye, faFileLines, faFolderOpen, faHouse, faLaptopCode, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type AppIconName = "email" | "linkedin" | "github" | "code" | "mobile" | "application" | "about" | "resume" | "projects" | "view";

const icons: Record<AppIconName, IconDefinition> = {
  email: faEnvelope,
  linkedin: faLinkedinIn,
  github: faGithub,
  code: faCode,
  mobile: faMobile,
  application: faLaptopCode,
  about: faHouse,
  resume: faFileLines,
  projects: faFolderOpen,
  view: faEye,
};

interface AppIconProps {
  name: AppIconName;
  className?: string;
}

export function AppIcon({ name, className }: AppIconProps) {
  return <FontAwesomeIcon icon={icons[name]} className={className} />;
}
