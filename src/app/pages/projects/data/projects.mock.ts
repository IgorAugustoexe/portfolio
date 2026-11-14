import type { Project } from "../models/project.model";
import isabelaFloresLogo from "@/assets/images/projects/IsabelaFlores/isaLogo.png";
import isabelaFloresCover from "@/assets/images/projects/IsabelaFlores/cover.png";
import { isabelaFloresImages } from "./isabela-flores.images";
import { gingoProject } from "./gingo.mock";
import { gingoBusinessProject } from "./gingo-business.mock";
import { floresOnlineProject } from "./flores-online.mock";
import { clickAgentsProject } from "./click-agents.mock";

export const projects: Project[] = [
  gingoProject,
  gingoBusinessProject,
  floresOnlineProject,
  clickAgentsProject,
  {
    slug: "personal-portfolio",
    title: "Isabela Flores",
    category: "mobile",
    logo: isabelaFloresLogo,
    cover: {
      src: isabelaFloresCover,
      alt: {
        pt: "Apresentação da Isabela Flores com a logo rosa e três celulares sem recorte no topo, exibindo catálogo, início e produto sobre fundo cinza escuro",
        en: "Isabela Flores presentation with its pink logo and three phones without screen cutouts, showing catalog, home and product screens on a dark gray background",
      },
    },
    technologies: [
      { name: "React Native" },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "Redux" },
    ],
    images: isabelaFloresImages,
    content: {
      pt: {
        summary: "Aplicativo Android e iOS para presentear com flores e presentes em todo o Brasil. Reúne compra, agendamento de entregas, acompanhamento de pedidos e avaliações em uma experiência mobile.",
        description: "Aplicativo Android e iOS da Isabela Flores, um marketplace que conecta clientes a uma rede de floriculturas parceiras em todo o Brasil. A experiência permite explorar produtos disponíveis para a cidade de destino, escolher flores e presentes, incluir mensagens personalizadas e agendar a entrega. Pelo aplicativo, os usuários também podem acompanhar o status dos pedidos e avaliar suas compras e a experiência com o app.\n\nFui responsável pelas definições técnicas e pela arquitetura do frontend, desde o início do projeto até a publicação nas lojas. Também automatizei a geração e o envio de builds de Android e iOS, permitindo executar esse processo com um único comando em cada plataforma.",
        challenges:
          "O principal desafio foi desenvolver a jornada de compra, da seleção do produto à confirmação do pedido, passando pelo endereço e pelo pagamento. Esse fluxo exigiu integrar diversas regras de negócio e validar cada etapa para manter os dados consistentes e reduzir falhas que poderiam comprometer a conclusão da compra.",
        learnings:
          "Aprofundei o uso de TypeScript, com tipagem em todo o frontend, e a criação de testes automatizados com Detox. Também aprimorei o gerenciamento de estado com Redux e a persistência do carrinho e de outros dados do aplicativo com Redux Persist. Além disso, desenvolvi experiência na geração e no envio de builds Android e iOS para distribuição e publicação nas lojas.",
      },
      en: {
        summary: "An Android and iOS app for sending flowers and gifts throughout Brazil. It brings shopping, delivery scheduling, order tracking and reviews together in a mobile experience.",
        description:
          "The Isabela Flores Android and iOS app connects customers with a network of partner florists throughout Brazil. Users can browse products available in the destination city, choose flowers and gifts, add personalized messages and schedule deliveries. They can also track order status and review their purchases and their experience with the app.\n\nI was responsible for the frontend's technical decisions and architecture, from the start of the project through its release on the app stores. I also automated the generation and upload of Android and iOS builds, allowing the process to run with a single command for each platform.",
        challenges:
          "The main challenge was developing the purchase journey, from product selection to order confirmation, including the address and payment steps. This flow required integrating several business rules and validating each step to keep data consistent and reduce failures that could prevent a successful purchase.",
        learnings:
          "I deepened my use of TypeScript, applying types throughout the frontend, and developed automated tests with Detox. I also strengthened my experience with Redux for state management and Redux Persist for saving the cart and other app data. In addition, I gained experience generating and uploading Android and iOS builds for distribution and app store release.",
      },
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
