import type { ProjectImage } from "../models/project.model";
import home from "@/assets/images/projects/ClickAgents/screenshots/01-home.png";
import agentSettings from "@/assets/images/projects/ClickAgents/screenshots/02-agent-settings.png";
import instructions from "@/assets/images/projects/ClickAgents/screenshots/03-instructions.png";
import knowledge from "@/assets/images/projects/ClickAgents/screenshots/04-knowledge.png";
import channels from "@/assets/images/projects/ClickAgents/screenshots/05-channels.png";
import agentOverview from "@/assets/images/projects/ClickAgents/screenshots/06-agent-overview.png";
import library from "@/assets/images/projects/ClickAgents/screenshots/07-library.png";
import searchHistory from "@/assets/images/projects/ClickAgents/screenshots/08-search-history.png";

export const clickAgentsImages: ProjectImage[] = [
  {
    src: home,
    title: { pt: "Início e nova tarefa", en: "Home and new task" },
    description: {
      pt: "Ambiente para iniciar tarefas, escolher um modelo de IA e acessar os agentes personalizados.",
      en: "Workspace for starting tasks, choosing an AI model and accessing custom agents.",
    },
    alt: { pt: "Início e nova tarefa — plataforma ClickAgents", en: "Home and new task — ClickAgents platform" },
  },
  {
    src: agentOverview,
    title: { pt: "Ambiente do agente", en: "Agent workspace" },
    description: {
      pt: "Conversa com o agente e acesso às instruções, base de conhecimento e canais conectados.",
      en: "Agent conversation with access to instructions, knowledge base and connected channels.",
    },
    alt: { pt: "Ambiente do agente — plataforma ClickAgents", en: "Agent workspace — ClickAgents platform" },
  },
  {
    src: agentSettings,
    title: { pt: "Configuração do agente", en: "Agent settings" },
    description: {
      pt: "Edição do nome do agente, seleção do modelo de linguagem e configuração do tempo de silêncio.",
      en: "Editing the agent name, choosing a language model and setting the silence time.",
    },
    alt: { pt: "Configuração do agente — plataforma ClickAgents", en: "Agent settings — ClickAgents platform" },
  },
  {
    src: instructions,
    title: { pt: "Instruções do agente", en: "Agent instructions" },
    description: {
      pt: "Editor de instruções para personalizar o comportamento do agente, com opção de geração por IA.",
      en: "Instructions editor for customizing agent behavior, with an AI generation option.",
    },
    alt: { pt: "Instruções do agente — plataforma ClickAgents", en: "Agent instructions — ClickAgents platform" },
  },
  {
    src: knowledge,
    title: { pt: "Base de conhecimento", en: "Knowledge base" },
    description: {
      pt: "Menu para adicionar textos, com opções de envio de arquivos e conexão ao Google Drive e Microsoft OneDrive.",
      en: "Menu for adding text, with file upload and Google Drive and Microsoft OneDrive connection options.",
    },
    alt: { pt: "Base de conhecimento — plataforma ClickAgents", en: "Knowledge base — ClickAgents platform" },
  },
  {
    src: channels,
    title: { pt: "Conexões com canais", en: "Channel connections" },
    description: {
      pt: "Seleção de canais de conversa e integração, incluindo WhatsApp Business, Instagram, Telegram e Web.",
      en: "Selection of conversation and integration channels, including WhatsApp Business, Instagram, Telegram and Web.",
    },
    alt: { pt: "Conexões com canais — plataforma ClickAgents", en: "Channel connections — ClickAgents platform" },
  },
  {
    src: library,
    title: { pt: "Biblioteca", en: "Library" },
    description: {
      pt: "Biblioteca com busca, filtros e opções de visualização em grade ou lista.",
      en: "Library with search, filters and grid or list view options.",
    },
    alt: { pt: "Biblioteca — plataforma ClickAgents", en: "Library — ClickAgents platform" },
  },
  {
    src: searchHistory,
    title: { pt: "Busca no histórico", en: "History search" },
    description: {
      pt: "Janela de busca para localizar tarefas no histórico.",
      en: "Search window for finding tasks in the history.",
    },
    alt: { pt: "Busca no histórico — plataforma ClickAgents", en: "History search — ClickAgents platform" },
  },
];
