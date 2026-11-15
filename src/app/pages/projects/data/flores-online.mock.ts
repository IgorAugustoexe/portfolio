import type { Project } from "../models/project.model";
import floresOnlineLogo from "@/assets/images/projects/FloresOnline/logo.png";
import floresOnlineCover from "@/assets/images/projects/FloresOnline/cover.png";
import { floresOnlineImages } from "./flores-online.images";

export const floresOnlineProject: Project = {
  slug: "flores-online",
  title: "Flores Online",
  category: "mobile",
  logo: floresOnlineLogo,
  cover: {
    src: floresOnlineCover,
    alt: {
      pt: "Apresentação do Flores Online com a logo e três celulares sem recorte no topo, exibindo catálogo, início e produto sobre fundo cinza escuro",
      en: "Flores Online presentation with its logo and three phones without screen cutouts, showing catalog, home and product screens on a dark gray background",
    },
  },
  technologies: [
    { name: "React Native" },
    { name: "TypeScript" },
    { name: "Node.js" },
    { name: "Detox" },
    { name: "AI agents", label: { pt: "Agentes de IA", en: "AI agents" } },
    { name: "Harness engineering" },
  ],
  images: floresOnlineImages,
  content: {
    pt: {
      summary: "Aplicativo Android e iOS com marketplace integrado, onde lojas parceiras apresentam e vendem seus próprios produtos. Reúne flores e presentes para diferentes ocasiões, com agendamento de entregas e avaliações de pedidos.",
      description: "O Flores Online é um aplicativo Android e iOS para comprar flores e presentes, com destaque para seu marketplace integrado. Nele, lojas parceiras contam com páginas próprias para apresentar e vender seus produtos, ampliando as opções de presentes disponíveis no aplicativo. Os usuários podem explorar o catálogo, refinar a busca com filtros, consultar os produtos disponíveis para o destino e realizar a compra, escolhendo a data e o período de entrega. A experiência também inclui acompanhamento de pedidos e avaliações das compras.\n\nFui responsável pelas decisões técnicas e pela arquitetura do frontend, trabalhando no aplicativo desde o início do desenvolvimento até a publicação nas lojas. Também automatizei a geração e o envio de builds para Android e iOS, com um único comando em cada plataforma. Além disso, implementei melhorias de usabilidade que contribuíram para aumentar as avaliações do app nas lojas, de 2,4 para 4,6 estrelas.\n\nNa evolução do projeto, também utilizei agentes de IA para apoiar a investigação de problemas, a análise de desempenho e a otimização de código. Estruturei tarefas e instruções com práticas de harness engineering e utilizei IA na criação e revisão de testes automatizados, validando as alterações nos fluxos do marketplace antes de integrá-las.",
      challenges: "Meu maior desafio foi integrar o marketplace ao aplicativo, considerando os produtos de vendedores parceiros e as regras de disponibilidade por CEP. Foi necessário implementar validações ao longo da jornada de compra para impedir pedidos de produtos indisponíveis para o endereço selecionado. Outro desafio foi desenvolver filtros mais detalhados, combinando diferentes critérios de busca e integrando as regras e os dados do backend para apresentar resultados consistentes e facilitar a escolha dos produtos.\n\nO uso de agentes de IA nesse contexto exigiu organizar informações sobre disponibilidade, filtros e contratos das APIs. Trabalhei a divisão das tarefas e a revisão das alterações para que as otimizações respeitassem essas regras e o comportamento esperado do aplicativo.",
      learnings: "Aprendi a aproveitar melhor as bibliotecas do ecossistema React Native para simplificar o desenvolvimento e a manutenção do aplicativo. Também aprimorei a criação de testes automatizados com Detox, validando os fluxos do app para identificar falhas e reduzir regressões. Um destaque foi o uso do react-forms para organizar formulários com vários campos na mesma tela. Também substituí o AsyncStorage pelo MMKV no armazenamento local, aproveitando suas leituras síncronas e mais rápidas. Com o Redux Toolkit, simplifiquei a implementação e a manutenção do gerenciamento de estado. Além disso, aprimorei minhas habilidades com TypeScript, utilizando a linguagem em todo o frontend.\n\nTambém aprimorei a aplicação de IA na manutenção e evolução de uma aplicação com regras de negócio complexas. Desenvolvi práticas para preparar o contexto dos agentes, dividir investigações em etapas e aproveitar melhor o orçamento de tokens. Esse trabalho ampliou minha experiência com revisão de código assistida por IA, otimização de desempenho e automatização de testes.",
    },
    en: {
      summary: "An Android and iOS app with an integrated marketplace where partner stores showcase and sell their own products. It brings together flowers and gifts for different occasions, with delivery scheduling and order reviews.",
      description: "Flores Online is an Android and iOS app for buying flowers and gifts, featuring an integrated marketplace. Partner stores have dedicated pages to showcase and sell their own products, expanding the range of gifts available in the app. Users can browse the catalog, narrow their search with filters, check product availability for the delivery destination and complete their purchase, choosing a delivery date and time slot. The experience also includes order tracking and purchase reviews.\n\nI was responsible for technical decisions and the frontend architecture, working on the app from the start of development through its release on the app stores. I also automated the generation and upload of Android and iOS builds, with a single command for each platform. In addition, I made usability improvements that helped increase the app store ratings from 2.4 to 4.6 stars.\n\nAs the project evolved, I also used AI agents to support issue investigation, performance analysis and code optimization. I structured tasks and instructions using harness engineering practices and used AI to create and review automated tests, validating changes in marketplace flows before integrating them.",
      challenges: "My biggest challenge was integrating the marketplace into the app, accounting for partner sellers' products and availability rules based on postal codes. This required validations throughout the purchase journey to prevent orders for products unavailable at the selected address. Another challenge was developing more detailed filters, combining different search criteria and integrating backend rules and data to present consistent results and make products easier to find.\n\nUsing AI agents in this context required organizing information about availability, filters and API contracts. I worked on task allocation and change review to ensure optimizations respected these rules and the expected app behavior.",
      learnings: "I learned to make better use of libraries in the React Native ecosystem to simplify app development and maintenance. I also improved my skills in creating automated tests with Detox, validating app flows to identify issues and reduce regressions. One highlight was using react-forms to organize forms with multiple fields on the same screen. I also replaced AsyncStorage with MMKV for local storage, taking advantage of its faster, synchronous reads. With Redux Toolkit, I simplified state management implementation and maintenance. In addition, I improved my TypeScript skills by using the language throughout the frontend.\n\nI also improved my use of AI in maintaining and evolving an application with complex business rules. I developed practices for preparing agent context, breaking investigations into stages and making better use of the token budget. This work expanded my experience with AI-assisted code review, performance optimization and test automation.",
    },
  },
};
