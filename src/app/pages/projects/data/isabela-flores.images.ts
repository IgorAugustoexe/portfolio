import type { StaticImageData } from "next/image";
import type { ProjectImage } from "../models/project.model";

declare const require: {
  context(directory: string, recursive: boolean, pattern: RegExp): {
    (fileName: string): { default: StaticImageData };
  };
};

const screenshots = require.context(
  "../../../../assets/images/projects/IsabelaFlores/screenshots",
  false,
  /\.(png|jpe?g|webp|avif)$/i,
);

type ScreenDetails = Pick<ProjectImage, "title" | "description">;

// Cadastre o nome do arquivo, título e descrição nos dois idiomas.
// A ordem deste cadastro define a sequência de imagens da vitrine.
const screenDetails: Record<string, ScreenDetails> = {
  "01.jpg": {
    title: { pt: "Início", en: "Home" },
    description: { pt: "Categorias de presentes, cidades atendidas e destaques de entrega.", en: "Gift categories, supported cities and delivery highlights." },
  },
  "02.jpg": {
    title: { pt: "Tipos de flores", en: "Flower types" },
    description: { pt: "Sugestões de produtos e navegação por tipos de flores.", en: "Product suggestions and browsing by flower type." },
  },
  "03.jpg": {
    title: { pt: "Catálogo", en: "Catalog" },
    description: { pt: "Listagem de arranjos com preços, avaliações e filtros rápidos.", en: "Arrangement listings with prices, ratings and quick filters." },
  },
  "04.jpg": {
    title: { pt: "Filtros de produtos", en: "Product filters" },
    description: { pt: "Ordenação, faixa de preço, tipos de arranjo e cores.", en: "Sorting, price range, arrangement types and colors." },
  },
  "05.jpg": {
    title: { pt: "Flores e acompanhamentos", en: "Flowers and extras" },
    description: { pt: "Seleção de tipos de flores e acompanhamentos para refinar o catálogo.", en: "Flower and gift extra selections to refine the catalog." },
  },
  "06.jpg": {
    title: { pt: "Cesta", en: "Basket" },
    description: { pt: "Produtos escolhidos, sugestões de acompanhamentos e opções de entrega.", en: "Selected products, suggested extras and delivery options." },
  },
  "07.jpg": {
    title: { pt: "Data da entrega", en: "Delivery date" },
    description: { pt: "Calendário e datas disponíveis para agendar a entrega.", en: "Calendar and available dates for scheduling delivery." },
  },
  "08.jpg": {
    title: { pt: "Período da entrega", en: "Delivery window" },
    description: { pt: "Períodos de entrega com seus valores e disponibilidade.", en: "Delivery windows with their prices and availability." },
  },
  "09.jpg": {
    title: { pt: "Cidade de destino", en: "Destination city" },
    description: { pt: "Busca da cidade onde o presente será entregue.", en: "Search for the city where the gift will be delivered." },
  },
  "10.jpg": {
    title: { pt: "Resumo da cesta", en: "Basket summary" },
    description: { pt: "Cupom de desconto e conferência dos valores antes de continuar a compra.", en: "Discount coupon and total review before continuing the purchase." },
  },
  "11.jpg": {
    title: { pt: "Detalhes do produto", en: "Product details" },
    description: { pt: "Foto do arranjo, preço, avaliações e informações do produto.", en: "Arrangement photo, price, ratings and product information." },
  },
  "12.jpg": {
    title: { pt: "Avaliações do produto", en: "Product reviews" },
    description: { pt: "Descrição do produto e comentários de quem já comprou.", en: "Product description and reviews from previous buyers." },
  },
  "13.jpg": {
    title: { pt: "Sugestões de presentes", en: "Gift suggestions" },
    description: { pt: "Seleção da cidade e sugestões de produtos para presentear.", en: "City selection and suggested products for gifting." },
  },
  "14.jpg": {
    title: { pt: "Dados de entrega", en: "Delivery information" },
    description: { pt: "Dados do comprador, destinatário, mensagem e endereço de entrega.", en: "Buyer, recipient, gift message and delivery address information." },
  },
  "15.jpg": {
    title: { pt: "Entrar na conta", en: "Sign in" },
    description: { pt: "Acesso por e-mail e senha, com opção de entrar pelo Google.", en: "Email and password sign-in with a Google sign-in option." },
  },
  "16.jpg": {
    title: { pt: "Acesso pelo Google", en: "Google sign-in" },
    description: { pt: "Tela de autenticação do Google aberta a partir do aplicativo.", en: "Google authentication screen opened from the app." },
  },
  "17.jpg": {
    title: { pt: "Comentários dos clientes", en: "Customer comments" },
    description: { pt: "Lista de avaliações e comentários sobre o produto.", en: "List of product ratings and customer comments." },
  },
  "18.jpg": {
    title: { pt: "Criar conta", en: "Create account" },
    description: { pt: "Cadastro com e-mail, nome, telefone e senha.", en: "Registration with email, name, phone number and password." },
  },
  "19.jpg": {
    title: { pt: "Editar perfil", en: "Edit profile" },
    description: { pt: "Atualização dos dados pessoais, preferências de e-mail e senha.", en: "Personal information, email preferences and password updates." },
  },
  "20.jpg": {
    title: { pt: "Pagamento por Pix", en: "Pix payment" },
    description: { pt: "Seleção do Pix e preenchimento dos dados de pagamento.", en: "Pix selection and payment information entry." },
  },
  "21.jpg": {
    title: { pt: "Revisão do pedido", en: "Order review" },
    description: { pt: "Conferência do destinatário, pagamento por Pix e valor total.", en: "Recipient, Pix payment and order total review." },
  },
  "22.jpg": {
    title: { pt: "Pedido confirmado com Pix", en: "Order confirmed with Pix" },
    description: { pt: "Confirmação do pedido e instruções para copiar o código de pagamento.", en: "Order confirmation and instructions for copying the payment code." },
  },
  "23.jpg": {
    title: { pt: "Minhas compras", en: "My purchases" },
    description: { pt: "Histórico de pedidos com datas e status de acompanhamento.", en: "Order history with dates and tracking statuses." },
  },
  "24.jpg": {
    title: { pt: "Acesso com senha oculta", en: "Sign-in with hidden password" },
    description: { pt: "Formulário de acesso com a senha protegida durante a digitação.", en: "Sign-in form with the password hidden while typing." },
  },
  "25.jpg": {
    title: { pt: "Acesso com senha visível", en: "Sign-in with visible password" },
    description: { pt: "Visualização da senha para conferir os caracteres digitados.", en: "Password visibility for checking the entered characters." },
  },
  "26.jpg": {
    title: { pt: "Destinatário e endereço", en: "Recipient and address" },
    description: { pt: "Informações de quem recebe o presente e detalhes do endereço.", en: "Gift recipient information and delivery address details." },
  },
  "27.jpg": {
    title: { pt: "Pagamento com cartão", en: "Card payment" },
    description: { pt: "Dados do cartão de crédito e seleção do parcelamento.", en: "Credit card information and installment selection." },
  },
  "28.jpg": {
    title: { pt: "Pagamento por boleto", en: "Bank slip payment" },
    description: { pt: "Seleção do boleto bancário e orientações antes de confirmar a compra.", en: "Bank slip selection and guidance before confirming the purchase." },
  },
  "29.jpg": {
    title: { pt: "Filtro de pedidos", en: "Order filter" },
    description: { pt: "Opções de status para filtrar o histórico de compras.", en: "Status options for filtering the purchase history." },
  },
  "30.jpg": {
    title: { pt: "Produtos e agendamento", en: "Products and schedule" },
    description: { pt: "Revisão dos produtos, dados do comprador e data da entrega.", en: "Product, buyer information and delivery date review." },
  },
  "31.jpg": {
    title: { pt: "Detalhes da compra", en: "Purchase details" },
    description: { pt: "Itens do pedido, status do pagamento e informações de entrega.", en: "Order items, payment status and delivery information." },
  },
  "33.jpg": {
    title: { pt: "Minha conta", en: "My account" },
    description: { pt: "Acesso ao perfil, cupons, endereços e atendimento ao cliente.", en: "Access to profile, coupons, addresses and customer support." },
  },
  "34.jpg": {
    title: { pt: "Revisão com boleto", en: "Bank slip order review" },
    description: { pt: "Conferência do destinatário, boleto bancário e valor total do pedido.", en: "Recipient, bank slip payment and order total review." },
  },
  "35.jpg": {
    title: { pt: "Meus endereços", en: "My addresses" },
    description: { pt: "Endereços salvos com opções de edição, exclusão e novo cadastro.", en: "Saved addresses with edit, delete and add options." },
  },
  "36.jpg": {
    title: { pt: "Pedido confirmado com boleto", en: "Order confirmed with bank slip" },
    description: { pt: "Confirmação do pedido e instruções para acessar o boleto bancário.", en: "Order confirmation and instructions for viewing the bank slip." },
  },
  "37.jpg": {
    title: { pt: "Atendimento ao cliente", en: "Customer support" },
    description: { pt: "Perguntas frequentes, políticas da loja e canais de contato.", en: "Frequently asked questions, store policies and contact channels." },
  },
};

export const isabelaFloresImages: ProjectImage[] = Object.entries(screenDetails)
  .map(([fileName, details]) => ({
    src: screenshots(`./${fileName}`).default,
    ...details,
    alt: {
      pt: `${details.title.pt} — aplicativo Isabela Flores`,
      en: `${details.title.en} — Isabela Flores app`,
    },
  }));
