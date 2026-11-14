import type { StaticImageData } from "next/image";
import type { LocalizedText } from "@/shared/i18n/getLocalizedText";
import type { ProjectImage } from "../models/project.model";
import login from "@/assets/images/projects/Gingo/screenshots/01-login.jpg";
import loginFilled from "@/assets/images/projects/Gingo/screenshots/02-login-filled.jpg";
import setup from "@/assets/images/projects/Gingo/screenshots/03-setup.jpg";
import menu from "@/assets/images/projects/Gingo/screenshots/04-menu.png";
import address from "@/assets/images/projects/Gingo/screenshots/05-address.jpg";
import nearbyStores from "@/assets/images/projects/Gingo/screenshots/06-nearby-stores.jpg";
import storeActions from "@/assets/images/projects/Gingo/screenshots/07-store-actions.jpg";
import catalog from "@/assets/images/projects/Gingo/screenshots/08-catalog.jpg";
import product from "@/assets/images/projects/Gingo/screenshots/09-product.jpg";
import productOptions from "@/assets/images/projects/Gingo/screenshots/10-product-options.jpg";
import cart from "@/assets/images/projects/Gingo/screenshots/11-cart.jpg";
import checkout from "@/assets/images/projects/Gingo/screenshots/12-checkout.jpg";
import purchases from "@/assets/images/projects/Gingo/screenshots/13-purchases.jpg";
import order from "@/assets/images/projects/Gingo/screenshots/14-order.jpg";
import coupons from "@/assets/images/projects/Gingo/screenshots/15-coupons.jpg";
import chats from "@/assets/images/projects/Gingo/screenshots/16-chats.jpg";
import conversation from "@/assets/images/projects/Gingo/screenshots/17-conversation.jpg";
import photoOptions from "@/assets/images/projects/Gingo/screenshots/18-photo-options.jpg";
import messageReply from "@/assets/images/projects/Gingo/screenshots/20-message-reply.jpg";
import messageSelection from "@/assets/images/projects/Gingo/screenshots/21-message-selection.jpg";

function screenshot(src: StaticImageData, title: LocalizedText, description: LocalizedText): ProjectImage {
  return {
    src,
    title,
    description,
    alt: {
      pt: `${title.pt} — aplicativo Gingo`,
      en: `${title.en} — Gingo app`,
    },
  };
}

// A ordem do cadastro define a sequência da vitrine.
export const gingoImages: ProjectImage[] = [
  screenshot(login,
    { pt: "Boas-vindas", en: "Welcome" },
    { pt: "Acesso por celular e senha, com opções de cadastro e recuperação de senha.", en: "Phone and password sign-in, with registration and password recovery options." }),
  screenshot(loginFilled,
    { pt: "Entrar na conta", en: "Sign in" },
    { pt: "Formulário preenchido com senha oculta e botão de login habilitado.", en: "Completed form with a hidden password and an enabled sign-in button." }),
  screenshot(setup,
    { pt: "Preparação do aplicativo", en: "App setup" },
    { pt: "Tela de configuração inicial antes de acessar o aplicativo.", en: "Initial setup screen before accessing the app." }),
  screenshot(menu,
    { pt: "Menu principal", en: "Main menu" },
    { pt: "Perfil, seguidores e atalhos para compras, lojas, serviços e cupons.", en: "Profile, followers and shortcuts to purchases, stores, services and coupons." }),
  screenshot(address,
    { pt: "Endereço de entrega", en: "Delivery address" },
    { pt: "Busca por endereço ou CEP, localização atual e endereços salvos.", en: "Address or postal code search, current location and saved addresses." }),
  screenshot(nearbyStores,
    { pt: "Lojas próximas", en: "Nearby stores" },
    { pt: "Estabelecimentos próximos com distância, disponibilidade e taxa de entrega.", en: "Nearby businesses with distance, availability and delivery fees." }),
  screenshot(storeActions,
    { pt: "Contato com a loja", en: "Store contact" },
    { pt: "Ações para enviar mensagem, ligar, consultar produtos e ver avaliações.", en: "Actions to send a message, call, browse products and view reviews." }),
  screenshot(catalog,
    { pt: "Catálogo da loja", en: "Store catalog" },
    { pt: "Produtos organizados por categoria, preços e acesso ao pedido em andamento.", en: "Products organized by category, prices and access to the current order." }),
  screenshot(product,
    { pt: "Detalhes do produto", en: "Product details" },
    { pt: "Foto, descrição, preço e seleção de combos antes de adicionar ao pedido.", en: "Photo, description, price and combo selection before adding to the order." }),
  screenshot(productOptions,
    { pt: "Personalização do pedido", en: "Order customization" },
    { pt: "Escolha de acompanhamentos, quantidade e observações para o estabelecimento.", en: "Side dish selection, quantity and notes for the business." }),
  screenshot(cart,
    { pt: "Resumo do pedido", en: "Order summary" },
    { pt: "Itens selecionados, cupom aplicado e conferência de produtos, frete e total.", en: "Selected items, applied coupon and a review of products, delivery fees and total." }),
  screenshot(checkout,
    { pt: "Finalização do pedido", en: "Checkout" },
    { pt: "Dados de entrega e forma de pagamento antes de confirmar a compra.", en: "Delivery details and payment method before confirming the purchase." }),
  screenshot(purchases,
    { pt: "Minhas compras", en: "My purchases" },
    { pt: "Histórico de compras com status, datas e acesso aos detalhes de cada pedido.", en: "Purchase history with statuses, dates and access to each order's details." }),
  screenshot(order,
    { pt: "Acompanhamento do pedido", en: "Order tracking" },
    { pt: "Etapas da entrega, itens comprados e opções de contato e avaliação da loja.", en: "Delivery stages, purchased items and store contact and review options." }),
  screenshot(coupons,
    { pt: "Cupons de desconto", en: "Discount coupons" },
    { pt: "Cupons disponíveis para o endereço selecionado, com regras de uso e validade.", en: "Coupons available for the selected address, with usage rules and expiration dates." }),
  screenshot(chats,
    { pt: "Lista de conversas", en: "Conversation list" },
    { pt: "Conversas com prévia da última mensagem e horário ou data de envio.", en: "Conversations with a preview of the latest message and its time or date." }),
  screenshot(conversation,
    { pt: "Chat em tempo real", en: "Real-time chat" },
    { pt: "Conversa com mensagens de texto, fotos, áudio, documentos e indicações de leitura.", en: "Conversation with text messages, photos, audio, documents and read indicators." }),
  screenshot(photoOptions,
    { pt: "Envio de fotos", en: "Photo sharing" },
    { pt: "Opções para tirar uma foto ou escolher uma imagem para enviar na conversa.", en: "Options to take a photo or select an image to send in the conversation." }),
  screenshot(messageReply,
    { pt: "Resposta a mensagens", en: "Message replies" },
    { pt: "Resposta com referência à mensagem original para manter o contexto da conversa.", en: "Replies referencing the original message to preserve the conversation's context." }),
  screenshot(messageSelection,
    { pt: "Seleção de mensagens", en: "Message selection" },
    { pt: "Seleção de várias mensagens com ações para excluir, copiar ou encaminhar.", en: "Multiple message selection with actions to delete, copy or forward." }),
];
