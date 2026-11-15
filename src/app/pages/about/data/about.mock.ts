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
      "Sou Igor Augusto, desenvolvedor Full Stack formado em Engenharia de Software, com experiência desde 2021 na criação e evolução de aplicações web e mobile. Trabalho com React, React Native e TypeScript, desenvolvendo interfaces responsivas e aplicativos para Android e iOS publicados na App Store e Google Play.",
      "Minha atuação também envolve desenvolvimento backend com Node.js e PHP, criação de APIs e integração entre sistemas. Trabalho com regras de negócio, validação de operações, persistência de dados e tratamento de falhas, acompanhando as entregas desde a definição técnica até a manutenção em produção.",
      "Atualmente, também desenvolvo soluções com agentes de inteligência artificial, conectando modelos de linguagem a canais de atendimento e sistemas de negócio. Esse trabalho envolve personalização de instruções, preparação de contexto, integração de ferramentas e validação das ações executadas pelos agentes.",
      "Utilizo IA no desenvolvimento para apoiar investigação, implementação, revisão de código e testes automatizados. Aplico práticas de harness engineering para organizar instruções, ferramentas, responsabilidades e critérios de validação, além de trabalhar a gestão de contexto e o consumo de tokens durante as tarefas.",
    ],
    en: [
      "I'm Igor Augusto, a Full Stack Developer with a degree in Software Engineering and experience building and evolving web and mobile applications since 2021. I work with React, React Native and TypeScript, developing responsive interfaces and Android and iOS apps published on the App Store and Google Play.",
      "My work also includes backend development with Node.js and PHP, API development and system integration. I work with business rules, operation validation, data persistence and error handling, supporting deliveries from technical design through production maintenance.",
      "I also develop AI agent solutions, connecting language models to customer service channels and business systems. This work involves customizing instructions, preparing context, integrating tools and validating the actions performed by agents.",
      "I use AI in development to support investigation, implementation, code review and automated testing. I apply harness engineering practices to organize instructions, tools, responsibilities and validation criteria, while managing context and token consumption throughout tasks.",
    ],
  },
  services: [
    {
      id: "web-mobile",
      icon: "application",
      title: { pt: "Desenvolvimento Web/Mobile", en: "Web/Mobile Development" },
      description: {
        pt: "Aplicações web com React e Next.js e aplicativos Android e iOS com React Native. Trabalho na arquitetura das interfaces, integração com APIs, gerenciamento de estado e evolução da experiência do usuário, acompanhando o desenvolvimento até a publicação.",
        en: "Web applications with React and Next.js and Android and iOS apps with React Native. I work on interface architecture, API integration, state management and user experience improvements, supporting development through release.",
      },
      technologies: [
        { pt: "React", en: "React" },
        { pt: "Next.js", en: "Next.js" },
        { pt: "React Native", en: "React Native" },
        { pt: "TypeScript", en: "TypeScript" },
      ],
    },
    {
      id: "backend",
      icon: "code",
      title: { pt: "Backend e integrações", en: "Backend and integrations" },
      description: {
        pt: "APIs e serviços com Node.js e PHP para conectar aplicações e implementar regras de negócio. Atuação em validação de operações, persistência de dados, tratamento de falhas e integrações entre sistemas, com atenção à consistência e à manutenção do código.",
        en: "APIs and services with Node.js and PHP to connect applications and implement business rules. My work covers operation validation, data persistence, error handling and system integration, with attention to consistency and code maintainability.",
      },
      technologies: [
        { pt: "Node.js", en: "Node.js" },
        { pt: "PHP", en: "PHP" },
        { pt: "APIs REST", en: "REST APIs" },
        { pt: "Integrações", en: "Integrations" },
      ],
    },
    {
      id: "ai",
      icon: "ai",
      title: { pt: "Agentes de inteligência artificial", en: "Artificial intelligence agents" },
      description: {
        pt: "Desenvolvimento e integração de agentes de IA, com instruções personalizadas, contexto e ferramentas para executar tarefas. Aplicação de harness engineering, gestão de tokens e testes de comportamento para acompanhar a qualidade e a confiabilidade das soluções.",
        en: "Development and integration of AI agents, with custom instructions, context and tools to perform tasks. I apply harness engineering, token management and behavioral testing to assess solution quality and reliability.",
      },
      technologies: [
        { pt: "Agentes de IA", en: "AI agents" },
        { pt: "Engenharia de contexto", en: "Context engineering" },
        { pt: "Harness engineering", en: "Harness engineering" },
        { pt: "Avaliações", en: "Evaluations" },
      ],
    },
  ] satisfies ServiceItem[],
};
