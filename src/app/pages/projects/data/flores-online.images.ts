import type { ProjectImage } from "../models/project.model";
import home from "@/assets/images/projects/FloresOnline/screenshots/10-home.png";
import login from "@/assets/images/projects/FloresOnline/screenshots/01-login.png";
import googleLogin from "@/assets/images/projects/FloresOnline/screenshots/02-google-login.png";
import register from "@/assets/images/projects/FloresOnline/screenshots/03-register.png";
import catalog from "@/assets/images/projects/FloresOnline/screenshots/09-catalog.png";
import search from "@/assets/images/projects/FloresOnline/screenshots/08-search.png";
import filters from "@/assets/images/projects/FloresOnline/screenshots/04-filters.png";
import product from "@/assets/images/projects/FloresOnline/screenshots/07-product.png";
import reviews from "@/assets/images/projects/FloresOnline/screenshots/06-reviews.png";
import cart from "@/assets/images/projects/FloresOnline/screenshots/05-cart.png";
import deliveryDate from "@/assets/images/projects/FloresOnline/screenshots/11-delivery-date.png";
import deliveryPeriod from "@/assets/images/projects/FloresOnline/screenshots/12-delivery-period.png";
import resumeCheckout from "@/assets/images/projects/FloresOnline/screenshots/22-resume-checkout.png";
import payment from "@/assets/images/projects/FloresOnline/screenshots/13-payment.png";
import review from "@/assets/images/projects/FloresOnline/screenshots/14-review.png";
import processing from "@/assets/images/projects/FloresOnline/screenshots/15-processing.png";
import confirmation from "@/assets/images/projects/FloresOnline/screenshots/16-confirmation.png";
import orders from "@/assets/images/projects/FloresOnline/screenshots/17-orders.png";
import orderFilters from "@/assets/images/projects/FloresOnline/screenshots/18-order-filters.png";
import orderDetails from "@/assets/images/projects/FloresOnline/screenshots/19-order-details.png";
import profile from "@/assets/images/projects/FloresOnline/screenshots/20-profile.png";
import help from "@/assets/images/projects/FloresOnline/screenshots/21-help.png";

export const floresOnlineImages: ProjectImage[] = [
  {
    src: home,
    title: { pt: "Início", en: "Home" },
    description: {
      pt: "Categorias, busca e destaques de flores disponíveis para o endereço e a data selecionados.",
      en: "Categories, search and featured flowers for the selected address and date.",
    },
    alt: { pt: "Início — aplicativo Flores Online", en: "Home — Flores Online app" },
  },
  {
    src: login,
    title: { pt: "Entrar na conta", en: "Sign in" },
    description: {
      pt: "Acesso por e-mail e senha ou pelas contas Google e Apple.",
      en: "Sign in with email and password or a Google or Apple account.",
    },
    alt: { pt: "Entrar na conta — aplicativo Flores Online", en: "Sign in — Flores Online app" },
  },
  {
    src: googleLogin,
    title: { pt: "Login com Google", en: "Google sign-in" },
    description: {
      pt: "Autenticação com uma conta Google para acessar o Flores Online.",
      en: "Google account authentication to access Flores Online.",
    },
    alt: { pt: "Login com Google — aplicativo Flores Online", en: "Google sign-in — Flores Online app" },
  },
  {
    src: register,
    title: { pt: "Criar conta", en: "Create account" },
    description: {
      pt: "Cadastro com e-mail, nome, telefone e senha, além de opções de login social.",
      en: "Registration with email, name, phone and password, plus social sign-in options.",
    },
    alt: { pt: "Criar conta — aplicativo Flores Online", en: "Create account — Flores Online app" },
  },
  {
    src: catalog,
    title: { pt: "Catálogo de arranjos", en: "Arrangement catalog" },
    description: {
      pt: "Produtos por categoria, com fotos, preços e atalhos para adicionar à cesta.",
      en: "Products by category, with photos, prices and shortcuts to add them to the basket.",
    },
    alt: { pt: "Catálogo de arranjos — aplicativo Flores Online", en: "Arrangement catalog — Flores Online app" },
  },
  {
    src: search,
    title: { pt: "Busca de produtos", en: "Product search" },
    description: {
      pt: "Resultados de busca organizados em categorias e produtos.",
      en: "Search results organized into categories and products.",
    },
    alt: { pt: "Busca de produtos — aplicativo Flores Online", en: "Product search — Flores Online app" },
  },
  {
    src: filters,
    title: { pt: "Filtros de produtos", en: "Product filters" },
    description: {
      pt: "Ordenação, faixa de preço, tipo de arranjo e cores para refinar os resultados.",
      en: "Sorting, price range, arrangement type and colors to refine the results.",
    },
    alt: { pt: "Filtros de produtos — aplicativo Flores Online", en: "Product filters — Flores Online app" },
  },
  {
    src: product,
    title: { pt: "Detalhes do produto", en: "Product details" },
    description: {
      pt: "Fotos, descrição, preço, dimensões e avaliações do arranjo.",
      en: "Arrangement photos, description, price, dimensions and reviews.",
    },
    alt: { pt: "Detalhes do produto — aplicativo Flores Online", en: "Product details — Flores Online app" },
  },
  {
    src: reviews,
    title: { pt: "Avaliações e sugestões", en: "Reviews and recommendations" },
    description: {
      pt: "Comentários de compradores e sugestões de outros produtos.",
      en: "Customer reviews and recommendations for other products.",
    },
    alt: { pt: "Avaliações e sugestões — aplicativo Flores Online", en: "Reviews and recommendations — Flores Online app" },
  },
  {
    src: cart,
    title: { pt: "Cesta de compras", en: "Shopping basket" },
    description: {
      pt: "Produtos selecionados, sugestões de presentes, cupom e resumo dos valores.",
      en: "Selected products, gift suggestions, coupon and price summary.",
    },
    alt: { pt: "Cesta de compras — aplicativo Flores Online", en: "Shopping basket — Flores Online app" },
  },
  {
    src: deliveryDate,
    title: { pt: "Data de entrega", en: "Delivery date" },
    description: {
      pt: "Calendário para escolher o dia de entrega do pedido.",
      en: "Calendar for selecting the order's delivery date.",
    },
    alt: { pt: "Data de entrega — aplicativo Flores Online", en: "Delivery date — Flores Online app" },
  },
  {
    src: deliveryPeriod,
    title: { pt: "Período de entrega", en: "Delivery time slot" },
    description: {
      pt: "Opções de horário e valores de frete para agendar a entrega.",
      en: "Time slot options and delivery fees for scheduling delivery.",
    },
    alt: { pt: "Período de entrega — aplicativo Flores Online", en: "Delivery time slot — Flores Online app" },
  },
  {
    src: resumeCheckout,
    title: { pt: "Retomar a compra", en: "Resume checkout" },
    description: {
      pt: "Opção de continuar um pedido em andamento ou preencher os dados novamente.",
      en: "Option to continue an order in progress or fill in the details again.",
    },
    alt: { pt: "Retomar a compra — aplicativo Flores Online", en: "Resume checkout — Flores Online app" },
  },
  {
    src: payment,
    title: { pt: "Pagamento", en: "Payment" },
    description: {
      pt: "Escolha da forma de pagamento, dados do cartão e parcelamento.",
      en: "Payment method selection, card details and installment options.",
    },
    alt: { pt: "Pagamento — aplicativo Flores Online", en: "Payment — Flores Online app" },
  },
  {
    src: review,
    title: { pt: "Revisão do pedido", en: "Order review" },
    description: {
      pt: "Conferência do destinatário, endereço, pagamento, frete e total.",
      en: "Review of the recipient, address, payment, delivery fee and total.",
    },
    alt: { pt: "Revisão do pedido — aplicativo Flores Online", en: "Order review — Flores Online app" },
  },
  {
    src: processing,
    title: { pt: "Finalização da compra", en: "Processing the order" },
    description: {
      pt: "Indicação de progresso enquanto o pedido é finalizado.",
      en: "Progress indicator while the order is being finalized.",
    },
    alt: { pt: "Finalização da compra — aplicativo Flores Online", en: "Processing the order — Flores Online app" },
  },
  {
    src: confirmation,
    title: { pt: "Pedido confirmado", en: "Order confirmed" },
    description: {
      pt: "Confirmação da compra, informações do Pix e convite para avaliar o aplicativo.",
      en: "Order confirmation, Pix payment information and an invitation to rate the app.",
    },
    alt: { pt: "Pedido confirmado — aplicativo Flores Online", en: "Order confirmed — Flores Online app" },
  },
  {
    src: orders,
    title: { pt: "Meus pedidos", en: "My orders" },
    description: {
      pt: "Histórico de pedidos com datas e diferentes status de acompanhamento.",
      en: "Order history with dates and tracking statuses.",
    },
    alt: { pt: "Meus pedidos — aplicativo Flores Online", en: "My orders — Flores Online app" },
  },
  {
    src: orderFilters,
    title: { pt: "Filtros de pedidos", en: "Order filters" },
    description: {
      pt: "Seleção de status para filtrar o histórico de compras.",
      en: "Status selection for filtering purchase history.",
    },
    alt: { pt: "Filtros de pedidos — aplicativo Flores Online", en: "Order filters — Flores Online app" },
  },
  {
    src: orderDetails,
    title: { pt: "Detalhes do pedido", en: "Order details" },
    description: {
      pt: "Informações de pagamento, código Pix, status e itens comprados.",
      en: "Payment information, Pix code, status and purchased items.",
    },
    alt: { pt: "Detalhes do pedido — aplicativo Flores Online", en: "Order details — Flores Online app" },
  },
  {
    src: profile,
    title: { pt: "Meus dados", en: "My details" },
    description: {
      pt: "Edição de dados pessoais, preferências de contato e opções da conta.",
      en: "Editing personal details, contact preferences and account options.",
    },
    alt: { pt: "Meus dados — aplicativo Flores Online", en: "My details — Flores Online app" },
  },
  {
    src: help,
    title: { pt: "Central de ajuda", en: "Help center" },
    description: {
      pt: "Perguntas frequentes sobre entregas, compras, produtos e segurança.",
      en: "Frequently asked questions about delivery, purchases, products and security.",
    },
    alt: { pt: "Central de ajuda — aplicativo Flores Online", en: "Help center — Flores Online app" },
  },
];
