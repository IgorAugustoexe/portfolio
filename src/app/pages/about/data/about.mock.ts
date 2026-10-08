import type { LocalizedText } from "@/shared/i18n/getLocalizedText";
import type { AppIconName } from "@/shared/components/ui/AppIcon/AppIcon";

interface ServiceItem {
  id: string;
  icon: AppIconName;
  title: LocalizedText;
  description: LocalizedText;
  technologies: LocalizedText[];
}

export const aboutContent = {
  introduction: {
    pt: [
      "Sou um desenvolvedor de software interessado em criar produtos digitais claros, úteis e fáceis de manter.",
      "Este portfólio reúne uma visão objetiva da minha experiência, das tecnologias que utilizo e dos projetos que desenvolvi.",
    ],
    en: [
      "I am a software developer interested in creating clear, useful and maintainable digital products.",
      "This portfolio provides an objective view of my experience, the technologies I use and the projects I have developed.",
    ],
  },
  services: [
    {
      id: "web",
      icon: "application",
      title: { pt: "Desenvolvimento web", en: "Web development" },
      description: {
        pt: "Interfaces responsivas construídas com React, Next.js e TypeScript.",
        en: "Responsive interfaces built with React, Next.js and TypeScript.",
      },
      technologies: [
        { pt: "React", en: "React" },
        { pt: "Next.js", en: "Next.js" },
        { pt: "TypeScript", en: "TypeScript" },
      ],
    },
    {
      id: "mobile",
      icon: "mobile",
      title: { pt: "Desenvolvimento mobile", en: "Mobile development" },
      description: {
        pt: "Aplicações para diferentes dispositivos, com foco em usabilidade e consistência.",
        en: "Applications for different devices, focused on usability and consistency.",
      },
      technologies: [
        { pt: "Mobile", en: "Mobile" },
        { pt: "UI", en: "UI" },
        { pt: "UX", en: "UX" },
      ],
    },
    {
      id: "experience",
      icon: "code",
      title: { pt: "Aplicações intuitivas", en: "Intuitive applications" },
      description: {
        pt: "Experiências simples, consistentes e pensadas para diferentes dispositivos.",
        en: "Simple and consistent experiences designed for different devices.",
      },
      technologies: [
        { pt: "Interface", en: "Interface" },
        { pt: "Design", en: "Design" },
        { pt: "Iteração", en: "Iteration" },
      ],
    },
  ] satisfies ServiceItem[],
};
