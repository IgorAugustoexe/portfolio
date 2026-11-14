import type { ProjectImage } from "../models/project.model";
import login from "@/assets/images/projects/GingoBusiness/screenshots/01-login.jpg";
import setup from "@/assets/images/projects/GingoBusiness/screenshots/02-setup.jpg";
import menu from "@/assets/images/projects/GingoBusiness/screenshots/03-menu.jpg";
import storeDetails from "@/assets/images/projects/GingoBusiness/screenshots/04-store-details.jpg";
import address from "@/assets/images/projects/GingoBusiness/screenshots/05-address.jpg";
import deliveryArea from "@/assets/images/projects/GingoBusiness/screenshots/06-delivery-area.jpg";
import deliveryRadius from "@/assets/images/projects/GingoBusiness/screenshots/07-delivery-radius.jpg";
import flatDeliveryFee from "@/assets/images/projects/GingoBusiness/screenshots/08-flat-delivery-fee.jpg";
import distanceFees from "@/assets/images/projects/GingoBusiness/screenshots/09-distance-fees.jpg";
import hours from "@/assets/images/projects/GingoBusiness/screenshots/10-hours.jpg";
import timePicker from "@/assets/images/projects/GingoBusiness/screenshots/11-time-picker.jpg";
import catalog from "@/assets/images/projects/GingoBusiness/screenshots/12-catalog.jpg";
import orders from "@/assets/images/projects/GingoBusiness/screenshots/13-orders.jpg";
import orderDetails from "@/assets/images/projects/GingoBusiness/screenshots/14-order-details.jpg";
import webPairing from "@/assets/images/projects/GingoBusiness/screenshots/15-web-pairing.jpg";

// A ordem do cadastro define a sequência da vitrine.
export const gingoBusinessImages: ProjectImage[] = [
  {
    src: login,
    title: { pt: "Boas-vindas", en: "Welcome" },
    description: {
      pt: "Acesso ao Gingo Business por celular e senha, com opções de cadastro e recuperação de senha.",
      en: "Phone and password sign-in to Gingo Business, with registration and password recovery options.",
    },
  },
  {
    src: setup,
    title: { pt: "Preparação do aplicativo", en: "App setup" },
    description: {
      pt: "Configuração inicial antes de acessar as funcionalidades do aplicativo.",
      en: "Initial setup before accessing the app's features.",
    },
  },
  {
    src: menu,
    title: { pt: "Menu principal", en: "Main menu" },
    description: {
      pt: "Visão de pedidos e clientes, com atalhos para dados da loja, horários e área de atuação.",
      en: "Order and customer overview, with shortcuts to store details, business hours and delivery area.",
    },
  },
  {
    src: storeDetails,
    title: { pt: "Dados da loja", en: "Store details" },
    description: {
      pt: "Edição de foto, nome comercial, contato, descrição, categoria e idioma do estabelecimento.",
      en: "Editing the business photo, name, contact information, description, category and language.",
    },
  },
  {
    src: address,
    title: { pt: "Endereço comercial", en: "Business address" },
    description: {
      pt: "Busca do endereço do estabelecimento com sugestões e opção de localização atual.",
      en: "Business address search with suggestions and a current location option.",
    },
  },
  {
    src: deliveryArea,
    title: { pt: "Área de atuação", en: "Delivery area" },
    description: {
      pt: "Endereço, modalidade de frete e área de entrega com visualização no mapa.",
      en: "Address, delivery fee type and delivery area displayed on a map.",
    },
  },
  {
    src: deliveryRadius,
    title: { pt: "Raio de entrega", en: "Delivery radius" },
    description: {
      pt: "Seleção da distância em quilômetros para definir a área atendida pela loja.",
      en: "Distance selection in kilometers to define the area served by the store.",
    },
  },
  {
    src: flatDeliveryFee,
    title: { pt: "Frete padrão", en: "Flat delivery fee" },
    description: {
      pt: "Definição de uma taxa fixa de entrega para os pedidos do estabelecimento.",
      en: "Setting a fixed delivery fee for the business's orders.",
    },
  },
  {
    src: distanceFees,
    title: { pt: "Frete por distância", en: "Distance-based delivery fees" },
    description: {
      pt: "Cadastro de faixas de distância e taxas de entrega correspondentes.",
      en: "Configuring distance ranges and their corresponding delivery fees.",
    },
  },
  {
    src: hours,
    title: { pt: "Horários de atendimento", en: "Business hours" },
    description: {
      pt: "Definição dos dias de funcionamento e horários de abertura e fechamento da loja.",
      en: "Setting the store's operating days and opening and closing times.",
    },
  },
  {
    src: timePicker,
    title: { pt: "Seleção de horário", en: "Time selection" },
    description: {
      pt: "Seletor de horas e minutos para ajustar o horário de atendimento.",
      en: "Hour and minute picker for adjusting business hours.",
    },
  },
  {
    src: catalog,
    title: { pt: "Gestão do catálogo", en: "Catalog management" },
    description: {
      pt: "Produtos da loja com preços, categorias, status de ativação e opções de novo cadastro.",
      en: "Store products with prices, categories, active statuses and options to add new products.",
    },
  },
  {
    src: orders,
    title: { pt: "Gestão de pedidos", en: "Order management" },
    description: {
      pt: "Lista de pedidos com status, dados de entrega, forma de pagamento e valor total.",
      en: "Order list with statuses, delivery information, payment methods and totals.",
    },
  },
  {
    src: orderDetails,
    title: { pt: "Detalhes do pedido", en: "Order details" },
    description: {
      pt: "Etapas do pedido, itens, valores e opção de entrar em contato com o cliente.",
      en: "Order stages, items, totals and an option to contact the customer.",
    },
  },
  {
    src: webPairing,
    title: { pt: "Conexão com o Gingo Web", en: "Gingo Web pairing" },
    description: {
      pt: "Leitura de código QR para conectar o aplicativo ao Gingo Web no computador.",
      en: "QR code scanning to connect the app to Gingo Web on a computer.",
    },
  },
].map((image) => ({
  ...image,
  alt: {
    pt: `${image.title.pt} — aplicativo Gingo Business`,
    en: `${image.title.en} — Gingo Business app`,
  },
}));
