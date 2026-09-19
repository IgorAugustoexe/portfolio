import type { Locale } from "./config"

const dictionaries = {
    pt: {
        languageName: "Português",
        showContacts: "Mostrar contatos",
        hideContacts: "Ocultar contatos",
        navigation: {
            about: "Sobre",
            resume: "Resumo",
            projects: "Portfólio"
        },
        footer: {
            message: "Criado por mim, feito especialmente para praticar React com Next.js"
        },
        about: {
            title: "Sobre mim",
            servicesTitle: "O que eu faço",
            kicker: "DESENVOLVENDO IDEIAS",
            greeting: "Olá, sou",
            viewProjects: "Ver meus projetos",
            featuredTitle: "Projetos em destaque",
            featuredDescription: "Alguns projetos que representam minha experiência e meus interesses.",
            viewAll: "Ver todos os projetos"
        },
        resume: {
            title: "Resumo",
            educationTitle: "Formação",
            experienceTitle: "Experiência",
            skillsTitle: "Minhas habilidades"
        },
        projects: {
            title: "Projetos",
            details: "Ver projeto",
            filterLabel: "Filtrar projetos",
            filters: {
                all: "Todos",
                mobile: "Mobile",
                web: "Desenvolvimento Web",
                academic: "Projetos Acadêmicos"
            },
            empty: "Nenhum projeto encontrado nesta categoria.",
            technologies: "Tecnologias",
            challenges: "Desafios",
            learnings: "Aprendizados",
            previousImage: "Imagem anterior",
            nextImage: "Próxima imagem",
            imagePosition: "Imagem"
        }
    },
    en: {
        languageName: "English",
        showContacts: "Show contacts",
        hideContacts: "Hide contacts",
        navigation: {
            about: "About",
            resume: "Resume",
            projects: "Portfolio"
        },
        footer: {
            message: "Created by me, especially made to practice React with Next.js"
        },
        about: {
            title: "About me",
            servicesTitle: "What I do",
            kicker: "BUILDING IDEAS",
            greeting: "Hi, I'm",
            viewProjects: "View my projects",
            featuredTitle: "Featured projects",
            featuredDescription: "A few projects that reflect my experience and interests.",
            viewAll: "View all projects"
        },
        resume: {
            title: "Resume",
            educationTitle: "Education",
            experienceTitle: "Experience",
            skillsTitle: "My skills"
        },
        projects: {
            title: "Projects",
            details: "View project",
            filterLabel: "Filter projects",
            filters: {
                all: "All",
                mobile: "Mobile",
                web: "Web Development",
                academic: "Academic Projects"
            },
            empty: "No projects found in this category.",
            technologies: "Technologies",
            challenges: "Challenges",
            learnings: "Learnings",
            previousImage: "Previous image",
            nextImage: "Next image",
            imagePosition: "Image"
        }
    }
} as const

export function getDictionary(locale: Locale) {
    return dictionaries[locale]
}
