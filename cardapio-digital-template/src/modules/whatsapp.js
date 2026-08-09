import { formatBRL } from '../utils/currency.js';
import { trackEvent } from './analytics.js';

/**
 * Sanitiza o número de telefone mantendo apenas dígitos numéricos.
 * 
 * @param {string} phone 
 * @returns {string} Número numérico limpo (ex: "5511999998888")
 */
export function sanitizePhoneNumber(phone) {
  return String(phone || '').replace(/\D/g, '');
}

/**
 * Gera a URL oficial do WhatsApp com a mensagem de pedido devidamente codificada.
 * 
 * @param {Object} product - Objeto do produto (name, price, etc)
 * @param {string} rawPhone - Número de telefone do siteConfig
 * @returns {string} URL no formato https://wa.me/...
 */
export function createWhatsAppOrderUrl(product, rawPhone) {
  const cleanPhone = sanitizePhoneNumber(rawPhone);
  const formattedPrice = formatBRL(product.price);
  
  // Mensagem padronizada e amigável para o pedido
  const messageText = `Olá! Gostaria de pedir: ${product.name} - ${formattedPrice}.`;
  const encodedMessage = encodeURIComponent(messageText);

  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

/**
 * Trata o clique no botão de pedido, disparando o rastreamento de analytics
 * antes de redirecionar para a URL do WhatsApp.
 * 
 * @param {Event} event 
 * @param {Object} product 
 * @param {string} rawPhone 
 */
export function handleWhatsAppOrderClick(event, product, rawPhone) {
  if (!product || !product.available) {
    event.preventDefault();
    return;
  }

  // Dispara eventos no dataLayer do GTM
  trackEvent('pedido_produto', {
    product_id: product.id,
    product_name: product.name,
    product_category: product.categoryId,
    product_price: product.price
  });

  trackEvent('clique_whatsapp', {
    source: 'card_produto',
    product_id: product.id
  });
}
