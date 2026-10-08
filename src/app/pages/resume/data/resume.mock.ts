import type { LanguageProfile, TimelineItem } from "../models/resume.model";

export const education: TimelineItem[] = [
  {
    title: { pt: "Engenharia de Software", en: "Software Engineering" },
    organization: "Universidade Exemplo",
    period: "2020 — 2024",
    description: {
      pt: "Formação voltada para desenvolvimento de sistemas, arquitetura de software e práticas de engenharia.",
      en: "Education focused on systems development, software architecture and engineering practices.",
    },
  },
  {
    title: { pt: "Engenharia de Software", en: "Software Engineering" },
    organization: "Universidade Exemplo",
    period: "2020 — 2024",
    description: {
      pt: "Formação voltada para desenvolvimento de sistemas, arquitetura de software e práticas de engenharia. Formação voltada para desenvolvimento de sistemas, arquitetura de software e práticas de engenharia. Formação voltada para desenvolvimento de sistemas, arquitetura de software e práticas de engenharia. Formação voltada para desenvolvimento de sistemas, arquitetura de software e práticas de engenharia. Formação voltada para desenvolvimento de sistemas, arquitetura de software e práticas de engenharia. Formação voltada para desenvolvimento de sistemas, arquitetura de software e práticas de engenharia. Formação voltada para desenvolvimento de sistemas, arquitetura de software e práticas de engenharia. Formação voltada para desenvolvimento de sistemas, arquitetura de software e práticas de engenharia.",
      en: "Education focused on systems development, software architecture and engineering practices.",
    },
  },
  {
    title: { pt: "Engenharia de Dale", en: "Software Engineering" },
    organization: "Universidade Exemplo",
    period: "2020 — 2024",
    description: {
      pt: "Formação voltada para desenvolvimento de sistemas, arquitetura de software e práticas de engenharia. Formação voltada para desenvolvimento de sistemas, arquitetura de software e práticas de engenharia. Formação voltada para desenvolvimento de sistemas, arquitetura de software e práticas de engenharia. Formação voltada para desenvolvimento de sistemas, arquitetura de software e práticas de engenharia. Formação voltada para desenvolvimento de sistemas, arquitetura de software e práticas de engenharia. Formação voltada para desenvolvimento de sistemas, arquitetura de software e práticas de engenharia. Formação voltada para desenvolvimento de sistemas, arquitetura de software e práticas de engenharia. Formação voltada para desenvolvimento de sistemas, arquitetura de software e práticas de engenharia.",
      en: "Education focused on systems development, software architecture and engineering practices.",
    },
  },
  {
    title: { pt: "Engenharia de Produção", en: "Software Engineering" },
    organization: "Universidade Exemplo",
    period: "2020 — 2024",
    description: {
      pt: "Formação voltada para desenvolvimento de sistemas, arquitetura de software e práticas de engenharia. Formação voltada para desenvolvimento de sistemas, arquitetura de software e práticas de engenharia. Formação voltada para desenvolvimento de sistemas, arquitetura de software e práticas de engenharia. Formação voltada para desenvolvimento de sistemas, arquitetura de software e práticas de engenharia. Formação voltada para desenvolvimento de sistemas, arquitetura de software e práticas de engenharia. Formação voltada para desenvolvimento de sistemas, arquitetura de software e práticas de engenharia. Formação voltada para desenvolvimento de sistemas, arquitetura de software e práticas de engenharia. Formação voltada para desenvolvimento de sistemas, arquitetura de software e práticas de engenharia.",
      en: "Education focused on systems development, software architecture and engineering practices.",
    },
  },
];

export const experience: TimelineItem[] = [
  {
    title: { pt: "Desenvolvedor Front-end", en: "Front-end Developer" },
    organization: "Empresa Exemplo",
    period: "2023 — Present",
    description: {
      pt: "Desenvolvimento de interfaces responsivas e manutenção de aplicações web com React e TypeScript.",
      en: "Development of responsive interfaces and maintenance of web applications with React and TypeScript.",
    },
  },
  {
    title: { pt: "Desenvolvedor de Software", en: "Software Developer" },
    organization: "Projeto Independente",
    period: "2021 — 2023",
    description: {
      pt: "Criação de soluções locais, componentes reutilizáveis e integração entre diferentes partes da interface.",
      en: "Creation of local solutions, reusable components and integration between different interface areas.",
    },
  },
  {
    title: { pt: "Desenvolvedor de Software", en: "Software Developer" },
    organization: "Projeto Independente",
    period: "2021 — 2023",
    description: {
      pt: "Criação de soluções locais, componentes reutilizáveis e integração entre diferentes partes da interface.",
      en: "Creation of local solutions, reusable components and integration between different interface areas.",
    },
  },
];

export const languageProfiles: LanguageProfile[] = [
  {
    id: "english",
    name: { pt: "Inglês", en: "English" },
    skills: [
      {
        id: "reading",
        icon: "reading",
        name: { pt: "Leitura", en: "Reading" },
        level: "B2",
        description: {
          pt: "Documentação técnica, artigos e tutoriais. Documentação técnica, artigos e tutoriais. Documentação técnica, artigos e tutoriais. Documentação técnica, artigos e tutoriais. Documentação técnica, artigos e tutoriais. Documentação técnica, artigos e tutoriais. ",
          en: "Technical documentation, articles and tutorials.",
        },
      },
      {
        id: "writing",
        icon: "writing",
        name: { pt: "Escrita", en: "Writing" },
        level: "B2",
        description: {
          pt: "E-mails, mensagens e discussões com equipes.",
          en: "Emails, messages and discussions with teams.",
        },
      },
      {
        id: "listening",
        icon: "listening",
        name: { pt: "Compreensão oral", en: "Listening" },
        level: "B2",
        description: {
          pt: "Vídeos, cursos e conteúdo técnico em inglês.",
          en: "Videos, courses and technical content in English.",
        },
      },
      {
        id: "conversation",
        icon: "conversation",
        name: { pt: "Conversação", en: "Speaking" },
        level: "B2",
        description: {
          pt: "Conversação em desenvolvimento no contexto profissional.",
          en: "Developing conversational skills in a professional context.",
        },
      },
    ],
  },
];
