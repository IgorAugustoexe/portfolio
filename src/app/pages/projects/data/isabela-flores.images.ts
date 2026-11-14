import type { ProjectImage } from "../models/project.model";
import home from "@/assets/images/projects/IsabelaFlores/screenshots/01-home.png";
import login from "@/assets/images/projects/IsabelaFlores/screenshots/02-login.png";
import googleLogin from "@/assets/images/projects/IsabelaFlores/screenshots/03-google-login.png";
import register from "@/assets/images/projects/IsabelaFlores/screenshots/04-register.png";
import catalog from "@/assets/images/projects/IsabelaFlores/screenshots/05-catalog.png";
import filters from "@/assets/images/projects/IsabelaFlores/screenshots/06-filters.png";
import product from "@/assets/images/projects/IsabelaFlores/screenshots/07-product.png";
import recommendations from "@/assets/images/projects/IsabelaFlores/screenshots/08-recommendations.png";
import cart from "@/assets/images/projects/IsabelaFlores/screenshots/09-cart.png";
import deliveryDate from "@/assets/images/projects/IsabelaFlores/screenshots/10-delivery-date.png";
import payment from "@/assets/images/projects/IsabelaFlores/screenshots/11-payment.png";
import review from "@/assets/images/projects/IsabelaFlores/screenshots/12-review.png";
import processing from "@/assets/images/projects/IsabelaFlores/screenshots/13-processing.png";
import confirmation from "@/assets/images/projects/IsabelaFlores/screenshots/14-confirmation.png";
import orders from "@/assets/images/projects/IsabelaFlores/screenshots/15-orders.png";
import orderFilters from "@/assets/images/projects/IsabelaFlores/screenshots/16-order-filters.png";
import orderDetails from "@/assets/images/projects/IsabelaFlores/screenshots/17-order-details.png";
import profile from "@/assets/images/projects/IsabelaFlores/screenshots/18-profile.png";
import addresses from "@/assets/images/projects/IsabelaFlores/screenshots/19-addresses.png";
import help from "@/assets/images/projects/IsabelaFlores/screenshots/20-help.png";
import institutional from "@/assets/images/projects/IsabelaFlores/screenshots/21-institutional.png";
import resumeCheckout from "@/assets/images/projects/IsabelaFlores/screenshots/22-resume-checkout.png";

export const isabelaFloresImages: ProjectImage[] = [
  {
    src: home,
    title: { pt: "Início", en: "Home" },
    description: {
      pt: "Categorias de presentes, cidades atendidas e destaques de entrega.",
      en: "Gift categories, supported cities and delivery highlights.",
    },
    alt: { pt: "Início — aplicativo Isabela Flores", en: "Home — Isabela Flores app" },
  },
  {
    src: login,
    title: { pt: "Entrar na conta", en: "Sign in" },
    description: {
      pt: "Acesso por e-mail e senha ou pelas contas Google e Apple.",
      en: "Sign in with email and password or a Google or Apple account.",
    },
    alt: { pt: "Entrar na conta — aplicativo Isabela Flores", en: "Sign in — Isabela Flores app" },
  },
  {
    src: googleLogin,
    title: { pt: "Login com Google", en: "Google sign-in" },
    description: {
      pt: "Autenticação do Google aberta a partir do aplicativo Isabela Flores.",
      en: "Google authentication opened from the Isabela Flores app.",
    },
    alt: { pt: "Login com Google — aplicativo Isabela Flores", en: "Google sign-in — Isabela Flores app" },
  },
  {
    src: register,
    title: { pt: "Criar conta", en: "Create account" },
    description: {
      pt: "Cadastro com e-mail, nome, celular e senha, além de opções de login social.",
      en: "Registration with email, name, phone and password, plus social sign-in options.",
    },
    alt: { pt: "Criar conta — aplicativo Isabela Flores", en: "Create account — Isabela Flores app" },
  },
  {
    src: catalog,
    title: { pt: "Catálogo", en: "Catalog" },
    description: {
      pt: "Arranjos com preços, avaliações, filtros rápidos e seleção da cidade de entrega.",
      en: "Arrangements with prices, ratings, quick filters and delivery city selection.",
    },
    alt: { pt: "Catálogo — aplicativo Isabela Flores", en: "Catalog — Isabela Flores app" },
  },
  {
    src: filters,
    title: { pt: "Filtros de produtos", en: "Product filters" },
    description: {
      pt: "Ordenação, faixa de preço, arranjos, cores e tipos de flores.",
      en: "Sorting, price range, arrangements, colors and flower types.",
    },
    alt: { pt: "Filtros de produtos — aplicativo Isabela Flores", en: "Product filters — Isabela Flores app" },
  },
  {
    src: product,
    title: { pt: "Detalhes do produto", en: "Product details" },
    description: {
      pt: "Fotos, preço, avaliações, descrição do buquê e disponibilidade de entregas.",
      en: "Bouquet photos, price, ratings, description and delivery availability.",
    },
    alt: { pt: "Detalhes do produto — aplicativo Isabela Flores", en: "Product details — Isabela Flores app" },
  },
  {
    src: recommendations,
    title: { pt: "Comentários e sugestões", en: "Comments and recommendations" },
    description: {
      pt: "Comentários de compradores e sugestões de flores e presentes.",
      en: "Customer comments and flower and gift recommendations.",
    },
    alt: { pt: "Comentários e sugestões — aplicativo Isabela Flores", en: "Comments and recommendations — Isabela Flores app" },
  },
  {
    src: cart,
    title: { pt: "Cesta", en: "Basket" },
    description: {
      pt: "Produtos escolhidos, sugestões de chocolates, cupom e agendamento da entrega.",
      en: "Selected products, chocolate suggestions, coupon and delivery scheduling.",
    },
    alt: { pt: "Cesta — aplicativo Isabela Flores", en: "Basket — Isabela Flores app" },
  },
  {
    src: deliveryDate,
    title: { pt: "Data de entrega", en: "Delivery date" },
    description: {
      pt: "Datas disponíveis e calendário para escolher o dia da entrega.",
      en: "Available dates and a calendar for choosing the delivery date.",
    },
    alt: { pt: "Data de entrega — aplicativo Isabela Flores", en: "Delivery date — Isabela Flores app" },
  },
  {
    src: payment,
    title: { pt: "Pagamento por Pix", en: "Pix payment" },
    description: {
      pt: "Seleção da forma de pagamento, dados do comprador e orientações sobre o Pix.",
      en: "Payment method selection, buyer details and Pix payment guidance.",
    },
    alt: { pt: "Pagamento por Pix — aplicativo Isabela Flores", en: "Pix payment — Isabela Flores app" },
  },
  {
    src: review,
    title: { pt: "Revisão do pedido", en: "Order review" },
    description: {
      pt: "Conferência do destinatário, mensagem, pagamento, frete e total.",
      en: "Review of the recipient, gift message, payment, delivery fee and total.",
    },
    alt: { pt: "Revisão do pedido — aplicativo Isabela Flores", en: "Order review — Isabela Flores app" },
  },
  {
    src: processing,
    title: { pt: "Finalização da compra", en: "Processing the order" },
    description: {
      pt: "Indicação de progresso enquanto o pedido é finalizado.",
      en: "Progress indicator while the order is being finalized.",
    },
    alt: { pt: "Finalização da compra — aplicativo Isabela Flores", en: "Processing the order — Isabela Flores app" },
  },
  {
    src: confirmation,
    title: { pt: "Pedido confirmado", en: "Order confirmed" },
    description: {
      pt: "Confirmação da compra, código Pix e convite para avaliar o aplicativo.",
      en: "Order confirmation, Pix code and an invitation to rate the app.",
    },
    alt: { pt: "Pedido confirmado — aplicativo Isabela Flores", en: "Order confirmed — Isabela Flores app" },
  },
  {
    src: orders,
    title: { pt: "Minhas compras", en: "My purchases" },
    description: {
      pt: "Histórico de pedidos com fotos, datas e status de acompanhamento.",
      en: "Order history with photos, dates and tracking statuses.",
    },
    alt: { pt: "Minhas compras — aplicativo Isabela Flores", en: "My purchases — Isabela Flores app" },
  },
  {
    src: orderFilters,
    title: { pt: "Filtros de pedidos", en: "Order filters" },
    description: {
      pt: "Seleção de status para filtrar o histórico de compras.",
      en: "Status selection for filtering purchase history.",
    },
    alt: { pt: "Filtros de pedidos — aplicativo Isabela Flores", en: "Order filters — Isabela Flores app" },
  },
  {
    src: orderDetails,
    title: { pt: "Detalhes da compra", en: "Purchase details" },
    description: {
      pt: "Itens comprados, status, destinatário, endereço e período de entrega.",
      en: "Purchased items, status, recipient, address and delivery time slot.",
    },
    alt: { pt: "Detalhes da compra — aplicativo Isabela Flores", en: "Purchase details — Isabela Flores app" },
  },
  {
    src: profile,
    title: { pt: "Editar perfil", en: "Edit profile" },
    description: {
      pt: "Dados pessoais, preferências de contato e alteração de senha.",
      en: "Personal details, contact preferences and password changes.",
    },
    alt: { pt: "Editar perfil — aplicativo Isabela Flores", en: "Edit profile — Isabela Flores app" },
  },
  {
    src: addresses,
    title: { pt: "Meus endereços", en: "My addresses" },
    description: {
      pt: "Endereços salvos com opções de edição, exclusão e novo cadastro.",
      en: "Saved addresses with edit, delete and add options.",
    },
    alt: { pt: "Meus endereços — aplicativo Isabela Flores", en: "My addresses — Isabela Flores app" },
  },
  {
    src: help,
    title: { pt: "Atendimento ao cliente", en: "Customer support" },
    description: {
      pt: "Perguntas frequentes, políticas da loja e canais de contato.",
      en: "Frequently asked questions, store policies and contact channels.",
    },
    alt: { pt: "Atendimento ao cliente — aplicativo Isabela Flores", en: "Customer support — Isabela Flores app" },
  },
  {
    src: institutional,
    title: { pt: "Institucional", en: "Company information" },
    description: {
      pt: "Informações sobre a empresa, sua cultura, vantagens e parceiros.",
      en: "Information about the company, its culture, benefits and partners.",
    },
    alt: { pt: "Institucional — aplicativo Isabela Flores", en: "Company information — Isabela Flores app" },
  },
  {
    src: resumeCheckout,
    title: { pt: "Retomar a compra", en: "Resume checkout" },
    description: {
      pt: "Opção de continuar a compra de onde parou ou preencher os dados novamente.",
      en: "Option to continue checkout from where it stopped or fill in the details again.",
    },
    alt: { pt: "Retomar a compra — aplicativo Isabela Flores", en: "Resume checkout — Isabela Flores app" },
  },
];
