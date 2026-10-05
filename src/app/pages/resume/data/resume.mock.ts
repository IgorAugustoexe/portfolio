import type { Skill, TimelineItem } from "../models/resume.model";

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

export const skills: Skill[] = [
  { name: "React", level: 88 },
  { name: "TypeScript", level: 82 },
  { name: "Next.js", level: 76 },
  { name: "Styled Components", level: 80 },
];

export const scrollTestContent = {
  title: {
    pt: "Conteúdo para teste de rolagem",
    en: "Scroll test content",
  },
  paragraphs: {
    pt: [
      "Minha trajetória profissional é construída pelo interesse constante em entender problemas, organizar informações e transformar necessidades em soluções digitais claras. Cada projeto representa uma oportunidade de experimentar novas ideias, melhorar processos e desenvolver interfaces que sejam simples de compreender e agradáveis de utilizar.",
      "Durante o desenvolvimento de uma aplicação, procuro dividir o problema em partes menores. Essa abordagem ajuda a identificar responsabilidades, criar componentes reutilizáveis e evitar que regras diferentes fiquem misturadas no mesmo lugar. Uma estrutura bem organizada torna as alterações futuras mais previsíveis e reduz o esforço necessário para ampliar o produto.",
      "A experiência com React e TypeScript trouxe uma preocupação maior com a consistência dos dados. Tipos bem definidos ajudam a documentar o comportamento esperado e permitem que o editor encontre diversos problemas antes que eles apareçam na interface. Essa segurança é especialmente útil quando novos projetos, habilidades ou experiências precisam ser adicionados ao portfólio.",
      "A responsividade também faz parte do processo desde o início. Uma interface precisa funcionar em telas grandes, tablets e celulares sem depender de versões completamente diferentes. O objetivo é reorganizar os mesmos elementos de maneira adequada, mantendo textos legíveis, controles acessíveis e uma navegação previsível em qualquer dispositivo.",
      "Outra parte importante do desenvolvimento é a criação de um sistema visual centralizado. Cores, fontes, espaçamentos, sombras e tamanhos são tratados como decisões compartilhadas. Dessa forma, a aparência pode evoluir sem exigir alterações repetidas em dezenas de componentes diferentes.",
      "Projetos pessoais permitem testar decisões técnicas com liberdade e observar seus resultados na prática. Eles também ajudam a registrar aprendizados, comparar abordagens e reconhecer pontos que podem ser simplificados. O código deve apoiar o objetivo do produto e permanecer proporcional ao tamanho real do problema.",
      "Este bloco possui conteúdo extenso propositalmente. Ele permite verificar se o painel direito cresce de acordo com o texto, se a rolagem pertence ao navegador e se o card da esquerda continua visível durante a navegação vertical da página.",
      "Ao chegar ao final deste conteúdo, o comportamento esperado é encontrar apenas uma barra de rolagem na janela. Não deve existir uma segunda rolagem dentro do painel direito, e a sidebar deve manter sua posição no desktop enquanto retorna ao fluxo normal no mobile.",
    ],
    en: [
      "My professional journey is shaped by a constant interest in understanding problems, organizing information and turning needs into clear digital solutions. Each project is an opportunity to explore ideas, improve processes and create interfaces that are easy to understand and pleasant to use.",
      "When developing an application, I try to divide the problem into smaller parts. This approach helps identify responsibilities, create reusable components and prevent unrelated rules from becoming mixed in the same place. A well-organized structure makes future changes more predictable and reduces the effort required to expand the product.",
      "Working with React and TypeScript has increased my focus on data consistency. Well-defined types document expected behavior and allow the editor to identify several problems before they reach the interface. This is especially useful when new projects, skills or experiences need to be added to the portfolio.",
      "Responsiveness is also considered from the beginning. An interface should work on large screens, tablets and phones without depending on completely separate versions. The goal is to reorganize the same elements appropriately while maintaining readable text, accessible controls and predictable navigation.",
      "Another important part of development is creating a centralized visual system. Colors, fonts, spacing, shadows and sizes are treated as shared decisions. This allows the appearance to evolve without requiring repeated changes across many different components.",
      "Personal projects provide freedom to test technical decisions and observe their results in practice. They also help document lessons, compare approaches and identify areas that can be simplified. The code should support the product goal and remain proportional to the real size of the problem.",
      "This block intentionally contains extensive content. It makes it possible to verify that the right panel grows with the text, that scrolling belongs to the browser and that the left card remains visible while navigating vertically through the page.",
      "At the end of this content, the expected behavior is to find only one scrollbar in the window. There should be no second scrollbar inside the right panel, and the sidebar should keep its position on desktop while returning to the normal document flow on mobile.",
    ],
  },
} as const;
