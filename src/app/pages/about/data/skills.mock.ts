import type { LocalizedText } from "@/shared/i18n/getLocalizedText";

export type SkillLevel = "basic" | "intermediate" | "advanced";

interface Skill {
  name: string;
  label?: LocalizedText;
  level: SkillLevel;
}

export const skills: Skill[] = [
  { name: "React", level: "advanced" },
  { name: "React Native", level: "advanced" },
  { name: "TypeScript", level: "advanced" },
  { name: "Next.js", level: "intermediate" },
  { name: "Node.js", level: "intermediate" },
  { name: "PHP", level: "basic" },
  { name: "Swift", level: "intermediate" },
  { name: "Kotlin", level: "intermediate" },
  { name: "Java", level: "basic" },
  { name: "AI agent development", label: { pt: "Desenvolvimento com agentes de IA", en: "AI agent development" }, level: "advanced" },
  { name: "Prompt engineering", label: { pt: "Engenharia de prompts", en: "Prompt engineering" }, level: "advanced" },
  { name: "Context engineering", label: { pt: "Engenharia de contexto", en: "Context engineering" }, level: "advanced" },
  { name: "Harness engineering", level: "advanced" },
  { name: "Agent orchestration", label: { pt: "Orquestração de agentes", en: "Agent orchestration" }, level: "advanced" },
  { name: "Token and context management", label: { pt: "Gestão de tokens e contexto", en: "Token and context management" }, level: "advanced" },
  { name: "LLM integration with APIs and tools", label: { pt: "Integração de LLMs com APIs e ferramentas", en: "LLM integration with APIs and tools" }, level: "advanced" },
  { name: "Agent testing and evaluation", label: { pt: "Testes e avaliação de agentes", en: "Agent testing and evaluation" }, level: "advanced" },
];
