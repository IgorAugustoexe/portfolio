import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowLeft,
  faArrowRight,
  faBookOpen,
  faBriefcase,
  faChevronDown,
  faCode,
  faComments,
  faEarListen,
  faEnvelope,
  faEye,
  faFileLines,
  faFolderOpen,
  faGraduationCap,
  faHouse,
  faLaptopCode,
  faLightbulb,
  faMobile,
  faMountainSun,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type AppIconName =
  | "email"
  | "linkedin"
  | "github"
  | "code"
  | "mobile"
  | "application"
  | "about"
  | "resume"
  | "projects"
  | "view"
  | "reading"
  | "writing"
  | "listening"
  | "conversation"
  | "challenges"
  | "learnings"
  | "back"
  | "forward"
  | "chevronDown"
  | "experience"
  | "graduation";

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
  reading: faBookOpen,
  writing: faPen,
  listening: faEarListen,
  conversation: faComments,
  challenges: faMountainSun,
  learnings: faLightbulb,
  back: faArrowLeft,
  forward: faArrowRight,
  chevronDown: faChevronDown,
  experience: faBriefcase,
  graduation: faGraduationCap,
};

interface AppIconProps {
  name: AppIconName;
  className?: string;
}

export function AppIcon({ name, className }: AppIconProps) {
  return <FontAwesomeIcon icon={icons[name]} className={className} />;
}
