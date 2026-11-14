import type { Project } from "../models/project.model";
import gingoBusinessLogo from "@/assets/images/projects/GingoBusiness/logo.png";
import gingoBusinessCover from "@/assets/images/projects/GingoBusiness/cover.png";
import { gingoBusinessImages } from "./gingo-business.images";

export const gingoBusinessProject: Project = {
  slug: "gingo-business",
  title: "Gingo Business",
  category: "mobile",
  logo: gingoBusinessLogo,
  cover: {
    src: gingoBusinessCover,
    alt: {
      pt: "Apresentação do Gingo Business com a logo e telas de boas-vindas, menu principal e área de atuação sobre fundo claro com detalhes em magenta",
      en: "Gingo Business presentation with its logo and welcome, main menu and delivery area screens on a light background with magenta accents",
    },
  },
  technologies: [
    { name: "React Native" },
    { name: "JavaScript" },
    { name: "Node.js" },
    { name: "PHP" },
  ],
  images: gingoBusinessImages,
  content: {
    pt: {
      summary: "Aplicativo Android e iOS para estabelecimentos gerenciarem sua loja, catálogo e pedidos, com chat em tempo real para falar com clientes.",
      description: "Gingo Business é um aplicativo de gestão de loja/pedidos e chat em tempo real, onde os estabelecimentos conseguem ter controle dos pedidos, editar ou incluir produtos no catálogo e entrar em contato com usuários a qualquer momento. O backend do marketplace foi desenvolvido em Magento(PHP) e do chat em Node.js. Trabalhei neste projeto desde seu início até a publicação nas stores (Android/iOS).\n\nAtuei no desenvolvimento das telas e funcionalidades do marketplace no frontend, como por exemplo o cadastro/login, tela de incluir produtos no catálogo do estabelecimento, funcionalidade de frete por distância, definição de horários de abertura/fechamento da loja, etc...",
      // Copiados do Gingo para revisão específica deste projeto posteriormente.
      challenges: "O maior desafio foi construir o chat no frontend e no backend, com uma abordagem offline first e mecanismos para evitar a perda de mensagens durante oscilações da conexão. No backend, utilizamos Socket.IO para envio e recebimento em tempo real e MongoDB para armazenar pendências. No aplicativo, o SQLite mantinha as mensagens disponíveis localmente, enquanto a criptografia entre usuários utilizava RSA e AES.",
      learnings: "Aprendi a desenvolver o backend com Node.js, Express e Socket.IO e aprofundei meu conhecimento sobre o ciclo de vida do React Native e a construção de componentes de classe e de função. Ao investigar problemas de performance, passei a compreender melhor a arquitetura do React, o gerenciamento de estados e os cuidados para evitar vazamentos de memória. Também trabalhei com React.memo para reduzir renderizações desnecessárias, Redux, Hooks e fluxos de CI/CD com distribuição de atualizações via CodePush.",
    },
    en: {
      summary: "An Android and iOS app for businesses to manage their store, catalog and orders, with real-time chat for contacting customers.",
      description: "Gingo Business is a store/order management and real-time chat app where businesses can manage orders, edit or add products to the catalog, and contact users at any time. The marketplace backend was developed with Magento (PHP), and the chat backend with Node.js. I worked on this project from its beginning through publication on the app stores (Android/iOS).\n\nI worked on the marketplace's frontend screens and features, such as registration/sign-in, the screen for adding products to the store's catalog, distance-based delivery fees, setting the store's opening/closing hours, and more.",
      challenges: "The biggest challenge was building both the chat frontend and backend with an offline-first approach and mechanisms to prevent message loss during connection disruptions. On the backend, we used Socket.IO for real-time sending and receiving, and MongoDB to store pending operations. In the app, SQLite kept messages available locally, while encryption between users used RSA and AES.",
      learnings: "I learned to build a backend with Node.js, Express and Socket.IO and deepened my understanding of the React Native lifecycle and both class and function components. Investigating performance issues helped me better understand React's architecture, state management and practices for preventing memory leaks. I also worked with React.memo to reduce unnecessary renders, Redux, Hooks and CI/CD workflows with updates distributed through CodePush.",
    },
  },
};
