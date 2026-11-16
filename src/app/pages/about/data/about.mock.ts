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
      "No backend, trabalho com Node.js e PHP no desenvolvimento de APIs, serviços e integrações entre sistemas. Tenho experiência na organização de responsabilidades por domínio, definição de contratos de dados e implementação de fluxos que exigem persistência, controle de estado e prevenção de operações duplicadas. Também desenvolvi comunicação em tempo real com Socket.io e atuo na integração de agentes de IA com ferramentas e serviços externos. Acompanho essas soluções com testes, registros de diagnóstico e tratamento de falhas, desde o desenvolvimento até a manutenção em produção.",
      "Também desenvolvo soluções com agentes de inteligência artificial, conectando modelos de linguagem a canais de atendimento e sistemas de negócio. Trabalho na personalização de instruções e na preparação do contexto, organizando o histórico das conversas e as informações relevantes para cada tarefa. Minha atuação inclui integração de ferramentas, definição de limites e validação das operações solicitadas pelos agentes, além de fluxos que permitem acompanhar as conversas e transferir o atendimento para uma pessoa quando necessário.",
      "Utilizo IA no desenvolvimento para apoiar investigação, implementação, revisão de código e testes automatizados. Coordeno agentes em paralelo, distribuindo tarefas e revisando as entregas antes da integração. Aplico práticas de harness engineering para organizar instruções, ferramentas, responsabilidades e critérios de validação. Também trabalho a gestão de contexto e a otimização do consumo de tokens, selecionando informações relevantes e dividindo as atividades em etapas para reduzir investigações repetidas.",
    ],
    en: [
      "I'm Igor Augusto, a Full Stack Developer with a degree in Software Engineering and experience building and evolving web and mobile applications since 2021. I work with React, React Native and TypeScript, developing responsive interfaces and Android and iOS apps published on the App Store and Google Play.",
      "On the backend, I work with Node.js and PHP to develop APIs, services and system integrations. I have experience organizing responsibilities by domain, defining data contracts and implementing workflows that require persistence, state management and duplicate operation prevention. I have also developed real-time communication with Socket.io and work on integrating AI agents with tools and external services. I support these solutions with testing, diagnostic logging and error handling, from development through production maintenance.",
      "I also develop AI agent solutions, connecting language models to customer service channels and business systems. I customize instructions and prepare context, organizing conversation history and the information relevant to each task. My work includes tool integration, boundary definition and validation of agent-requested operations, along with workflows that enable conversation monitoring and transfer to a person when needed.",
      "I use AI in development to support investigation, implementation, code review and automated testing. I coordinate agents working in parallel, allocating tasks and reviewing deliverables before integration. I apply harness engineering practices to organize instructions, tools, responsibilities and validation criteria. I also manage context and optimize token consumption, selecting relevant information and breaking activities into stages to reduce repeated investigations.",
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
