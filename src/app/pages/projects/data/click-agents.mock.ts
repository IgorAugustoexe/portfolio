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
  ],
  images: clickAgentsImages,
  content: {
    pt: {
      summary: "Plataforma para criar e gerenciar agentes de IA personalizados, com base de conhecimento e integração com canais de atendimento.",
      description: "O ClickAgents é uma plataforma que permite criar e gerenciar agentes de inteligência artificial personalizados, sem exigir conhecimento técnico. É possível definir as instruções, a personalidade e a base de conhecimento de cada agente para apoiar atividades como atendimento, análise de informações e produção de conteúdo. A plataforma também anuncia execução de tarefas e geração de planilhas, imagens e vídeos, além de conexões com canais como WhatsApp, Telegram e Instagram. Sua proposta é tornar a IA mais acessível e prática no dia a dia, reduzindo tarefas manuais e centralizando assistentes especializados em um único ambiente.",
      challenges: "O principal desafio foi integrar os agentes de IA ao Instagram e ao WhatsApp e conectar essas conversas ao Talk, plataforma que desenvolvemos em paralelo. Essa integração permite que os clientes acompanhem as mensagens trocadas pelos agentes e assumam o atendimento a qualquer momento.",
      learnings: "Aprofundei meus conhecimentos em backend e integração de APIs, além de desenvolver templates de instruções para personalizar o comportamento dos agentes em diferentes cenários. Esse trabalho exigiu definir regras e limites claros para manter as respostas alinhadas ao objetivo de cada agente.",
    },
    en: {
      summary: "A platform for creating and managing custom AI agents, with a knowledge base and integrations with customer service channels.",
      description: "ClickAgents is a platform for creating and managing custom artificial intelligence agents without requiring technical knowledge. Users can define each agent's instructions, personality and knowledge base to support activities such as customer service, information analysis and content production. The platform also advertises task execution and the generation of spreadsheets, images and videos, along with connections to channels such as WhatsApp, Telegram and Instagram. Its aim is to make AI more accessible and practical for everyday use, reducing manual tasks and bringing specialized assistants together in a single workspace.",
      challenges: "The main challenge was integrating AI agents with Instagram and WhatsApp and connecting those conversations to Talk, a platform we developed in parallel. This integration allows customers to monitor messages exchanged by the agents and take over customer service at any time.",
      learnings: "I deepened my knowledge of backend development and API integration while developing instruction templates to customize agent behavior for different scenarios. This work required clear rules and boundaries to keep responses aligned with each agent's purpose.",
    },
  },
};
