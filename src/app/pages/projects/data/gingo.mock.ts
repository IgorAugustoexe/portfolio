import type { Project } from "../models/project.model";
import gingoLogo from "@/assets/images/projects/Gingo/logo.png";
import gingoCover from "@/assets/images/projects/Gingo/cover.png";
import { gingoImages } from "./gingo.images";

export const gingoProject: Project = {
  slug: "gingo",
  title: "Gingo",
  category: "mobile",
  logo: gingoLogo,
  cover: {
    src: gingoCover,
    alt: {
      pt: "Apresentação do Gingo com a logo e telas de menu principal, boas-vindas e chat em tempo real sobre fundo claro com detalhes em magenta",
      en: "Gingo presentation featuring its logo and main menu, welcome and real-time chat screens on a light background with magenta accents",
    },
  },
  technologies: [
    { name: "React Native" },
    { name: "JavaScript" },
    { name: "Node.js" },
    { name: "PHP" },
    { name: "MongoDB" },
    { name: "SQLite" },
  ],
  images: gingoImages,
  content: {
    pt: {
      summary: "Aplicativo de delivery com chat em tempo real e mensagens disponíveis offline, publicado para Android e iOS.",
      description: "Gingo é um aplicativo de delivery e chat em tempo real, onde os usuários podem conversar a qualquer momento com estabelecimentos ou entre sí. O backend do marketplace foi desenvolvido em Magento(PHP) e do chat em Node.js. Trabalhei neste projeto desde seu início até a publicação nas stores (Android/iOS).\n\nAtuei no desenvolvimento das telas e funcionalidades do marketplace no frontend, desde o cadastro/login até a finalização de um pedido, mas meu maior foco foi no desenvolvimento do chat, onde atuei no backend (Node.js) utilizando express e Socket.io e em todo o frontend (React Native).",
      challenges: "O maior desafio foi construir o chat no frontend e no backend, com uma abordagem offline first e mecanismos para evitar a perda de mensagens durante oscilações da conexão. No backend, utilizamos Socket.IO para envio e recebimento em tempo real e MongoDB para armazenar pendências. No aplicativo, o SQLite mantinha as mensagens disponíveis localmente, enquanto a criptografia entre usuários utilizava RSA e AES.",
      learnings: "Aprendi a desenvolver o backend com Node.js, Express e Socket.IO e aprofundei meu conhecimento sobre o ciclo de vida do React Native e a construção de componentes de classe e de função. Ao investigar problemas de performance, passei a compreender melhor a arquitetura do React, o gerenciamento de estados e os cuidados para evitar vazamentos de memória. Também trabalhei com React.memo para reduzir renderizações desnecessárias, Redux, Hooks e fluxos de CI/CD com distribuição de atualizações via CodePush.",
    },
    en: {
      summary: "A delivery app with real-time chat and offline message access, published for Android and iOS.",
      description: "Gingo is a delivery and real-time chat app where users can talk to businesses or each other at any time. The marketplace backend was developed with Magento (PHP), and the chat backend with Node.js. I worked on this project from its beginning through publication on the app stores (Android/iOS).\n\nI worked on the marketplace's frontend screens and features, from registration/sign-in to completing an order, but my main focus was developing the chat, where I worked on the backend (Node.js) using Express and Socket.IO and on the entire frontend (React Native).",
      challenges: "The biggest challenge was building both the chat frontend and backend with an offline-first approach and mechanisms to prevent message loss during connection disruptions. On the backend, we used Socket.IO for real-time sending and receiving, and MongoDB to store pending operations. In the app, SQLite kept messages available locally, while encryption between users used RSA and AES.",
      learnings: "I learned to build a backend with Node.js, Express and Socket.IO and deepened my understanding of the React Native lifecycle and both class and function components. Investigating performance issues helped me better understand React's architecture, state management and practices for preventing memory leaks. I also worked with React.memo to reduce unnecessary renders, Redux, Hooks and CI/CD workflows with updates distributed through CodePush.",
    },
  },
};
