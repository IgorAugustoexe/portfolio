import type { Locale } from "./config";

const dictionaries = {
  pt: {
    navigation: {
      about: "Sobre",
      resume: "Resumo",
      portfolio: "Portfólio",
    },
    footer: {
      message: "Criado por mim, feito especialmente para praticar React com Next.js",
      signature: "© 2027 Igor Augusto",
    },
    about: {
      title: "Sobre",
      servicesTitle: "O que eu faço",
      skillsTitle: "Minhas habilidades",
      skillLevels: {
        basic: "Básico",
        intermediate: "Intermediário",
        advanced: "Avançado",
      },
    },
    resume: {
      title: "Resumo",
      educationTitle: "Formação",
      experienceTitle: "Experiência",
      languageSkillsTitle: "Habilidades de Linguagem",
    },
    portfolio: {
      title: "Portfolio",
      details: "Ver projeto",
      filterLabel: "Filtrar projetos",
      filters: {
        all: "Todos",
        mobile: "Mobile",
        web: "Desenvolvimento Web",
        academic: "Projetos Acadêmicos",
      },
      empty: "Nenhum projeto encontrado nesta categoria.",
      technologies: "Tecnologias",
      challenges: "Desafios",
      learnings: "Aprendizados",
      previousImage: "Imagem anterior",
      nextImage: "Próxima imagem",
      imagePosition: "Imagem",
    },
  },
  en: {
    navigation: {
      about: "About",
      resume: "Resume",
      portfolio: "Portfolio",
    },
    footer: {
      message: "Created by me, especially made to practice React with Next.js",
      signature: "© 2027 Igor Augusto",
    },
    about: {
      title: "About",
      servicesTitle: "What I do",
      skillsTitle: "My skills",
      skillLevels: {
        basic: "Basic",
        intermediate: "Intermediate",
        advanced: "Advanced",
      },
    },
    resume: {
      title: "Resume",
      educationTitle: "Education",
      experienceTitle: "Experience",
      languageSkillsTitle: "Language skills",
    },
    portfolio: {
      title: "Portfolio",
      details: "View project",
      filterLabel: "Filter projects",
      filters: {
        all: "All",
        mobile: "Mobile",
        web: "Web Development",
        academic: "Academic Projects",
      },
      empty: "No projects found in this category.",
      technologies: "Technologies",
      challenges: "Challenges",
      learnings: "Learnings",
      previousImage: "Previous image",
      nextImage: "Next image",
      imagePosition: "Image",
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
