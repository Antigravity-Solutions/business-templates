/**
 * Módulo de Analytics e Google Tag Manager (GTM)
 * 
 * Gerencia a injeção condicional do GTM e o envio de eventos para o dataLayer.
 * Nenhum script externo é carregado se googleTagManagerId estiver em branco.
 */

/**
 * Inicializa o GTM dinamicamente se o ID estiver configurado em siteConfig.js.
 * 
 * @param {string} gtmId - ID do container GTM (ex: "GTM-XXXXXXX")
 */
export function initAnalytics(gtmId) {
  window.dataLayer = window.dataLayer || [];

  if (!gtmId || typeof gtmId !== 'string' || gtmId.trim() === '') {
    return;
  }

  const cleanGtmId = gtmId.trim();

  // Injeta a tag principal do GTM no <head>
  const scriptTag = document.createElement('script');
  scriptTag.async = true;
  scriptTag.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(cleanGtmId)}`;
  
  // Script de inicialização do dataLayer
  const inlineScript = document.createElement('script');
  inlineScript.textContent = `
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
  `;

  document.head.appendChild(inlineScript);
  document.head.appendChild(scriptTag);
}

/**
 * Registra um evento no dataLayer.
 * 
 * @param {string} eventName - Nome do evento (ex: 'clique_whatsapp', 'pedido_produto')
 * @param {Object} eventParams - Parâmetros adicionais do evento
 */
export function trackEvent(eventName, eventParams = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    timestamp: new Date().toISOString(),
    ...eventParams
  });
}
