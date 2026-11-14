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
      "Sou Igor Augusto, desenvolvedor Full Stack formado em Engenharia de Software, com experiência desde 2021 na criação e evolução de aplicações web e mobile. Minha principal atuação é com React, React Native e TypeScript, desenvolvendo interfaces responsivas e aplicativos para Android e iOS publicados na App Store e Google Play.",
      "Também desenvolvo APIs e integrações com Node.js e PHP, incluindo soluções de automação com agentes de inteligência artificial. Acompanho os produtos do desenvolvimento à manutenção em produção, com atenção à performance, à estabilidade e à experiência de quem utiliza cada aplicação.",
    ],
    en: [
      "I'm Igor Augusto, a Full Stack Developer with a degree in Software Engineering and experience building and evolving web and mobile applications since 2021. My main focus is React, React Native and TypeScript, creating responsive interfaces and Android and iOS apps published on the App Store and Google Play.",
      "I also develop APIs and integrations with Node.js and PHP, including automation solutions powered by AI agents. I work on products from development through production maintenance, paying close attention to performance, stability and the experience of the people using each application.",
    ],
  },
  services: [
    {
      id: "web",
      icon: "application",
      title: { pt: "Desenvolvimento web", en: "Web development" },
      description: {
        pt: "Interfaces responsivas com React, Next.js e TypeScript, utilizando componentes reutilizáveis e integração com APIs para aplicações web fáceis de navegar e manter.",
        en: "Responsive interfaces with React, Next.js and TypeScript, using reusable components and API integration to build web applications that are easy to navigate and maintain.",
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
        pt: "Aplicativos Android e iOS com React Native, da implementação à publicação nas lojas, com foco em usabilidade, performance e estabilidade em produção.",
        en: "Android and iOS apps with React Native, from implementation to app store releases, focusing on usability, performance and production stability.",
      },
      technologies: [
        { pt: "React Native", en: "React Native" },
        { pt: "Swift", en: "Swift" },
        { pt: "Kotlin", en: "Kotlin" },
      ],
    },
    {
      id: "backend",
      icon: "code",
      title: { pt: "Backend e integrações", en: "Backend and integrations" },
      description: {
        pt: "APIs REST e serviços com Node.js e PHP para conectar aplicações, integrar canais de atendimento e automatizar processos com agentes de inteligência artificial.",
        en: "REST APIs and services with Node.js and PHP to connect applications, integrate customer service channels and automate processes with AI agents.",
      },
      technologies: [
        { pt: "Node.js", en: "Node.js" },
        { pt: "PHP", en: "PHP" },
        { pt: "APIs REST", en: "REST APIs" },
      ],
    },
  ] satisfies ServiceItem[],
};
