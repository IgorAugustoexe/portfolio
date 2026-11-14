import type { LanguageProfile, TimelineItem } from "../models/resume.model";

export const education: TimelineItem[] = [
  {
    title: { pt: "Engenharia de Software", en: "Software Engineering" },
    organization: "UNIFAE",
    period: { pt: "2019 – 2022", en: "2019 – 2022" },
    description: {
      pt: "TCC com desenvolvimento de aplicativo em React Native e TypeScript para otimização do transporte universitário, utilizando geolocalização e cálculo de rotas. Projeto apresentado no 24º Simpósio de Iniciação Científica e Tecnológica da FATEC-SP.",
      en: "Final-year project involving the development of a React Native and TypeScript app to optimize university transportation through geolocation and route calculation. Presented at the 24th Scientific and Technological Undergraduate Research Symposium at FATEC-SP.",
    },
  },
  {
    title: { pt: "Técnico em Informática", en: "Technical Diploma in Information Technology" },
    organization: "Instituto Federal do Sul de Minas Gerais",
    period: { pt: "2017 – 2019", en: "2017 – 2019" },
    description: {
      pt: "Formação em fundamentos de informática, algoritmos e lógica de programação. Proficiência em Word, Excel e PowerPoint desenvolvida durante o curso.",
      en: "Training in computing fundamentals, algorithms and programming logic. Proficiency in Word, Excel and PowerPoint developed during the course.",
    },
  },
];

export const experience: TimelineItem[] = [
  {
    title: {
      pt: "Desenvolvedor Full Stack",
      en: "Full Stack Developer",
    },
    organization: "WOLL-AI",
    period: { pt: "mar/2025 – atual", en: "Mar 2025 – Present" },
    description: {
      pt: "Desenvolvimento e manutenção de aplicativos React Native publicados na App Store e Google Play, com foco em performance, estabilidade e escalabilidade. Criação de APIs e serviços com Node.js e PHP, integração de agentes de IA e implementação de testes automatizados.",
      en: "Development and maintenance of React Native apps published on the App Store and Google Play, focusing on performance, stability and scalability. Development of APIs and services with Node.js and PHP, AI agent integration and implementation of automated tests.",
    },
  },
  {
    title: { pt: "Desenvolvedor Frontend / Mobile", en: "Frontend / Mobile Developer" },
    organization: "Flores Online — Baluarte Tecnologia",
    period: { pt: "out/2021 – fev/2025", en: "Oct 2021 – Feb 2025" },
    description: {
      pt: "Desenvolvimento de aplicações web e mobile com React Native, React.js e Node.js. Atuação em arquitetura, APIs REST, comunicação em tempo real e publicação dos aplicativos nas lojas. Melhorias de performance e usabilidade que elevaram a avaliação do aplicativo de 2,5 para 4,5 estrelas.",
      en: "Development of web and mobile applications with React Native, React.js and Node.js. Work on architecture, REST APIs, real-time communication and app store releases. Performance and usability improvements that raised the app rating from 2.5 to 4.5 stars.",
    },
  },
  {
    title: { pt: "Desenvolvedor Web", en: "Web Developer" },
    organization: "Alternativa Informática",
    period: { pt: "mai/2021 – out/2021", en: "May 2021 – Oct 2021" },
    description: {
      pt: "Desenvolvimento de solução com Google Maps API para gerenciamento de áreas de cobertura geográfica. Manipulação de dados JSON e otimização de aplicações JavaScript para apoiar processos logísticos e a distribuição de produtos.",
      en: "Development of a solution using the Google Maps API to manage geographic coverage areas. JSON data processing and JavaScript application optimization to support logistics processes and product distribution.",
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
          pt: "Documentação técnica, artigos e tutoriais.",
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
