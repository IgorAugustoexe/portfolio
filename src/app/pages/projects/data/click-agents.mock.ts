import type { Project } from "../models/project.model";
import clickAgentsLogo from "@/assets/images/projects/ClickAgents/logo.png";
import clickAgentsCover from "@/assets/images/projects/ClickAgents/cover-diagonal.png";
import { clickAgentsImages } from "./click-agents.images";

export const clickAgentsProject: Project = {
  slug: "click-agents",
  title: "ClickAgents",
  category: "web",
  logo: clickAgentsLogo,
  cover: {
    src: clickAgentsCover,
    alt: {
      pt: "Telas do ClickAgents em composição diagonal sobre fundo cinza claro, com conexões de canais ao centro e janelas de conversa, configurações e instruções nas bordas",
      en: "ClickAgents screens arranged diagonally on a light gray background, with channel connections in the center and conversation, settings and instructions windows around the edges",
    },
  },
  technologies: [
    { name: "React.js" },
    { name: "Node.js" },
    { name: "TypeScript" },
    { name: "LLMs" },
    { name: "AI agents", label: { pt: "Agentes de IA", en: "AI agents" } },
    { name: "Context engineering", label: { pt: "Engenharia de contexto", en: "Context engineering" } },
    { name: "Harness engineering" },
    { name: "Agent evaluation", label: { pt: "Avaliação de agentes", en: "Agent evaluation" } },
  ],
  images: clickAgentsImages,
  content: {
    pt: {
      summary: "Plataforma da WollAI para criar e gerenciar agentes de IA personalizados, com bases de conhecimento, execução de tarefas e integração com canais de atendimento.",
      description: "O ClickAgents é uma plataforma da WollAI que permite criar e gerenciar agentes de inteligência artificial personalizados. Os usuários podem configurar instruções, personalidade e bases de conhecimento, conectar canais de atendimento e utilizar agentes para apoiar tarefas como análise de informações e produção de conteúdo.\n\nAtuo no desenvolvimento Full Stack da plataforma, trabalhando em interfaces, backend e integrações. Participei da conexão dos agentes com WhatsApp e Instagram e da integração das conversas ao Talk, permitindo acompanhar os atendimentos e transferir a conversa para uma pessoa quando necessário.\n\nNo ecossistema da WollAI, também trabalho na evolução de fluxos que conectam agentes a sistemas de negócio. Minha atuação inclui validação de operações, controle de estado, prevenção de execuções duplicadas, tratamento de anexos e melhoria do diagnóstico de falhas nas integrações.\n\nNo desenvolvimento, coordeno agentes de IA em atividades de investigação, implementação e revisão. Organizo instruções por domínio e repositório, defino responsabilidades e critérios de validação e reviso as entregas antes da integração. Esse processo envolve harness engineering, preparação de contexto e gestão do consumo de tokens.",
      challenges: "Um dos principais desafios foi integrar agentes de IA a diferentes canais e sistemas, mantendo a continuidade das conversas e o funcionamento das regras de negócio. Isso exigiu atenção à validação das operações solicitadas pelos agentes, ao estado dos atendimentos e ao tratamento de falhas durante as integrações.\n\nOutro desafio foi organizar o trabalho de agentes em paralelo durante o desenvolvimento, fornecendo contexto adequado para cada tarefa e verificando os impactos das alterações entre os sistemas. A revisão e os testes foram importantes para integrar as entregas com consistência.",
      learnings: "Aprofundei meus conhecimentos em backend, integração de APIs e desenvolvimento de soluções com agentes de IA. Aprimorei a estruturação de instruções, a preparação de contexto e a definição de limites para a execução de ações pelos agentes.\n\nTambém evoluí no uso de harness engineering, na coordenação de agentes e na gestão de tokens durante o desenvolvimento. Desenvolvi mais experiência com testes de comportamento e observabilidade, acompanhando falhas de integração e validando os resultados das alterações.",
    },
    en: {
      summary: "A WollAI platform for creating and managing custom AI agents, with knowledge bases, task execution and customer service channel integrations.",
      description: "ClickAgents is a WollAI platform for creating and managing custom artificial intelligence agents. Users can configure instructions, personality and knowledge bases, connect customer service channels and use agents to support tasks such as information analysis and content production.\n\nI work on the platform as a Full Stack Developer, covering interfaces, backend and integrations. I helped connect agents to WhatsApp and Instagram and integrate conversations with Talk, enabling teams to monitor customer service and transfer conversations to a person when needed.\n\nWithin the WollAI ecosystem, I also work on evolving workflows that connect agents to business systems. My contributions include operation validation, state management, duplicate execution prevention, attachment handling and improvements to integration error diagnostics.\n\nDuring development, I coordinate AI agents in investigation, implementation and review tasks. I organize instructions by domain and repository, define responsibilities and validation criteria and review deliverables before integration. This process involves harness engineering, context preparation and token consumption management.",
      challenges: "One of the main challenges was integrating AI agents with different channels and systems while preserving conversation continuity and business rules. This required attention to validating agent-requested operations, customer service state and error handling across integrations.\n\nAnother challenge was organizing agents working in parallel during development, providing the right context for each task and checking the impact of changes across systems. Code review and testing were important for integrating deliverables consistently.",
      learnings: "I deepened my knowledge of backend development, API integration and AI agent solutions. I improved how I structure instructions, prepare context and define boundaries for agent actions.\n\nI also strengthened my use of harness engineering, agent coordination and token management during development. I gained more experience with behavioral testing and observability, investigating integration failures and validating the results of changes.",
    },
  },
};
