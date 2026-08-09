import { siteConfig } from './config/siteConfig.js';
import { menuCategories, menuProducts } from './config/menuData.js';
import { evaluateBusinessStatus } from './modules/businessStatus.js';
import { renderCategoriesNav, setupCategoryScrollObserver } from './modules/categories.js';
import { renderHighlightsSection, renderMenuCategoriesAndProducts } from './modules/menu.js';
import { initAnalytics, trackEvent } from './modules/analytics.js';
import { sanitizePhoneNumber } from './modules/whatsapp.js';

/**
 * Inicialização principal do Cardápio Digital Essencial
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Aplica o Tema de Cores Customizável em CSS Custom Properties
  applyThemeVariables(siteConfig.theme);

  // 2. Atualiza Metadados de SEO e Redes Sociais
  applySEOAndMetaTags(siteConfig);

  // 3. Inicializa o Analytics / GTM (somente se ID estiver preenchido em siteConfig)
  initAnalytics(siteConfig.analytics?.googleTagManagerId);

  // 4. Renderiza o aviso de demonstração (se existir)
  renderDemoBanner(siteConfig.identity?.demoNotice);

  // 5. Renderiza a Identidade do Estabelecimento (Hero Comercial com Fundo e Overlay)
  renderHeroIdentity(siteConfig);

  // 6. Renderiza o Status de Funcionamento (Aberto / Fechado) com Fuso Horário
  renderBusinessStatus(siteConfig.business);

  // 7. Renderiza a Navegação de Categorias (Pills Sticky)
  const categoriesNavContainer = document.getElementById('categories-nav-container');
  renderCategoriesNav(categoriesNavContainer, menuCategories, (categoryId) => {
    const targetSection = document.getElementById(`category-section-${categoryId}`);
    if (targetSection) {
      const headerOffset = 70;
      const elementPosition = targetSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });

  // 8. Renderiza a Seção de Destaques (Scroll Touch em CSS Nativo)
  const highlightsContainer = document.getElementById('highlights-container');
  renderHighlightsSection(highlightsContainer, menuProducts, siteConfig.contact?.whatsappNumber);

  // 9. Renderiza os Produtos por Categoria
  const menuContainer = document.getElementById('menu-products-container');
  renderMenuCategoriesAndProducts(menuContainer, menuCategories, menuProducts, siteConfig.contact?.whatsappNumber);

  // 10. Renderiza as Informações Comerciais e Localização
  renderBusinessInfoSection(siteConfig);

  // 11. Conecta o Observer de Scroll para destacar a categoria ativa
  setupCategoryScrollObserver(menuCategories);

  // 12. Atualiza Ano do Rodapé
  const footerYearEl = document.getElementById('footer-year');
  if (footerYearEl) footerYearEl.textContent = new Date().getFullYear();
});

/**
 * Aplica as variáveis de cores e tema do siteConfig.js no :root do documento.
 */
function applyThemeVariables(theme = {}) {
  const root = document.documentElement;
  if (theme.colorPrimary) root.style.setProperty('--color-primary', theme.colorPrimary);
  if (theme.colorPrimaryHover) root.style.setProperty('--color-primary-hover', theme.colorPrimaryHover);
  if (theme.colorSecondary) root.style.setProperty('--color-secondary', theme.colorSecondary);
  if (theme.colorAccent) root.style.setProperty('--color-accent', theme.colorAccent);
  if (theme.colorBackground) root.style.setProperty('--color-bg', theme.colorBackground);
  if (theme.colorSurface) root.style.setProperty('--color-surface', theme.colorSurface);
  if (theme.colorTextPrimary) root.style.setProperty('--color-text-primary', theme.colorTextPrimary);
  if (theme.colorTextSecondary) root.style.setProperty('--color-text-secondary', theme.colorTextSecondary);
  if (theme.colorBorder) root.style.setProperty('--color-border', theme.colorBorder);
  if (theme.borderRadiusSm) root.style.setProperty('--radius-sm', theme.borderRadiusSm);
  if (theme.borderRadiusMd) root.style.setProperty('--radius-md', theme.borderRadiusMd);
  if (theme.borderRadiusLg) root.style.setProperty('--radius-lg', theme.borderRadiusLg);
  if (theme.fontFamily) root.style.setProperty('--font-family-base', theme.fontFamily);
}

/**
 * Atualiza com segurança as tags de SEO e Open Graph.
 */
function applySEOAndMetaTags(config = {}) {
  const { identity, seo } = config;
  
  if (seo?.pageTitle) {
    document.title = seo.pageTitle;
    const ogTitle = document.getElementById('og-title');
    if (ogTitle) ogTitle.setAttribute('content', seo.pageTitle);
  }

  if (seo?.metaDescription) {
    const metaDesc = document.getElementById('page-meta-description');
    if (metaDesc) metaDesc.setAttribute('content', seo.metaDescription);
    const ogDesc = document.getElementById('og-description');
    if (ogDesc) ogDesc.setAttribute('content', seo.metaDescription);
  }

  if (seo?.canonicalUrl) {
    const canonical = document.getElementById('page-canonical-link');
    if (canonical) canonical.setAttribute('href', seo.canonicalUrl);
    const ogUrl = document.getElementById('og-url');
    if (ogUrl) ogUrl.setAttribute('content', seo.canonicalUrl);
  }

  if (identity?.faviconUrl) {
    const favicon = document.getElementById('page-favicon');
    if (favicon) favicon.setAttribute('href', identity.faviconUrl);
  }

  if (identity?.ogImageUrl) {
    const ogImg = document.getElementById('og-image');
    if (ogImg) ogImg.setAttribute('content', identity.ogImageUrl);
  }

  // Atualiza Schema JSON-LD de forma segura
  const jsonLdEl = document.getElementById('json-ld-schema');
  if (jsonLdEl && config.location) {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": identity?.name || "",
      "image": identity?.logoUrl || "",
      "description": identity?.shortDescription || "",
      "telephone": config.contact?.whatsappDisplay || "",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": config.location.addressLine1 || "",
        "addressLocality": config.location.city || "",
        "addressRegion": config.location.state || "",
        "postalCode": config.location.postalCode || "",
        "addressCountry": "BR"
      }
    };
    jsonLdEl.textContent = JSON.stringify(schemaData, null, 2);
  }
}

/**
 * Renderiza a barra superior de demonstração se configurada.
 */
function renderDemoBanner(noticeText) {
  const banner = document.getElementById('demo-banner');
  if (!banner) return;
  
  if (noticeText && noticeText.trim() !== '') {
    banner.textContent = noticeText;
  } else {
    banner.style.display = 'none';
  }
}

/**
 * Renderiza o cabeçalho de identidade e Hero comercial do estabelecimento.
 */
function renderHeroIdentity(config = {}) {
  const { identity, hero, contact, location } = config;
  const heroHeader = document.getElementById('hero-header');

  // Imagem de fundo configurável da Hero
  if (heroHeader && hero?.backgroundImage) {
    heroHeader.style.backgroundImage = `url("${hero.backgroundImage}")`;
  }

  const logoImg = document.getElementById('hero-logo');
  if (logoImg && identity?.logoUrl) {
    logoImg.src = identity.logoUrl;
    logoImg.alt = `Logotipo de ${identity?.name || 'Estabelecimento'}`;
  }

  const brandNameEl = document.getElementById('hero-brand-name');
  if (brandNameEl && identity?.name) {
    brandNameEl.textContent = identity.name;
  }

  const headlineEl = document.getElementById('hero-headline');
  if (headlineEl) {
    headlineEl.textContent = hero?.headline || identity?.name || 'Cardápio Digital';
  }

  const subheadlineEl = document.getElementById('hero-subheadline');
  if (subheadlineEl) {
    subheadlineEl.textContent = hero?.subheadline || identity?.shortDescription || '';
  }

  // Renderiza Chips de Confiança (Informação estática)
  const trustChipsContainer = document.getElementById('hero-trust-chips');
  if (trustChipsContainer) {
    trustChipsContainer.textContent = '';
    const chipsList = hero?.trustChips || [];
    chipsList.forEach(chip => {
      const span = document.createElement('span');
      span.className = 'trust-chip';
      span.textContent = `${chip.icon} ${chip.text}`;
      trustChipsContainer.appendChild(span);
    });
  }

  // CTA Principal (WhatsApp)
  const primaryCta = document.getElementById('hero-primary-cta');
  const primaryCtaLabel = document.getElementById('hero-primary-cta-label');
  if (primaryCta && contact?.whatsappNumber) {
    const cleanPhone = sanitizePhoneNumber(contact.whatsappNumber);
    const text = encodeURIComponent(`Olá! Gostaria de consultar o cardápio e fazer um pedido.`);
    primaryCta.href = `https://wa.me/${cleanPhone}?text=${text}`;
    primaryCta.addEventListener('click', () => trackEvent('clique_whatsapp', { source: 'hero_primary_cta' }));
  }
  if (primaryCtaLabel && hero?.primaryCtaLabel) {
    primaryCtaLabel.textContent = hero.primaryCtaLabel;
  }

  // CTA Secundário ("Ver cardápio")
  const secondaryCta = document.getElementById('hero-secondary-cta');
  const secondaryCtaLabel = document.getElementById('hero-secondary-cta-label');
  if (secondaryCta) {
    secondaryCta.addEventListener('click', () => {
      const categoriesNav = document.getElementById('categories-nav-wrapper');
      if (categoriesNav) {
        categoriesNav.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
  if (secondaryCtaLabel && hero?.secondaryCtaLabel) {
    secondaryCtaLabel.textContent = hero.secondaryCtaLabel;
  }

  // Action Chips Clicáveis da Hero (Instagram e Maps com indicação visual de link ↗)
  const quickChipsContainer = document.getElementById('hero-quick-chips');
  if (quickChipsContainer) {
    quickChipsContainer.textContent = '';

    if (contact?.instagramUrl) {
      const instaLink = document.createElement('a');
      instaLink.className = 'hero-action-chip';
      instaLink.href = contact.instagramUrl;
      instaLink.target = '_blank';
      instaLink.rel = 'noopener noreferrer';
      instaLink.setAttribute('aria-label', `Instagram ${contact.instagramHandle || ''}`);

      const instaIcon = document.createElement('span');
      instaIcon.className = 'action-chip-icon';
      instaIcon.textContent = '📸';

      const instaText = document.createElement('span');
      instaText.className = 'action-chip-label';
      instaText.textContent = contact.instagramHandle || 'Instagram';

      const arrowSpan = document.createElement('span');
      arrowSpan.className = 'action-chip-arrow';
      arrowSpan.setAttribute('aria-hidden', 'true');
      arrowSpan.textContent = '↗';

      instaLink.appendChild(instaIcon);
      instaLink.appendChild(instaText);
      instaLink.appendChild(arrowSpan);
      instaLink.addEventListener('click', () => trackEvent('clique_instagram', { source: 'hero_action_chip' }));
      quickChipsContainer.appendChild(instaLink);
    }

    if (location?.mapsUrl) {
      const mapsLink = document.createElement('a');
      mapsLink.className = 'hero-action-chip';
      mapsLink.href = location.mapsUrl;
      mapsLink.target = '_blank';
      mapsLink.rel = 'noopener noreferrer';
      mapsLink.setAttribute('aria-label', 'Ver endereço no Google Maps');

      const mapsIcon = document.createElement('span');
      mapsIcon.className = 'action-chip-icon';
      mapsIcon.textContent = '📍';

      const mapsText = document.createElement('span');
      mapsText.className = 'action-chip-label';
      mapsText.textContent = 'Como Chegar';

      const arrowSpan = document.createElement('span');
      arrowSpan.className = 'action-chip-arrow';
      arrowSpan.setAttribute('aria-hidden', 'true');
      arrowSpan.textContent = '↗';

      mapsLink.appendChild(mapsIcon);
      mapsLink.appendChild(mapsText);
      mapsLink.appendChild(arrowSpan);
      mapsLink.addEventListener('click', () => trackEvent('clique_localizacao', { source: 'hero_action_chip' }));
      quickChipsContainer.appendChild(mapsLink);
    }
  }
}

/**
 * Renderiza a badge do status de funcionamento (Aberto / Fechado).
 */
function renderBusinessStatus(businessConfig = {}) {
  const container = document.getElementById('business-status-container');
  if (!container) return;
  container.textContent = '';

  const status = evaluateBusinessStatus(businessConfig.hours, businessConfig.timezone);

  const badge = document.createElement('div');
  badge.className = status.isOpen ? 'business-status-badge status-open' : 'business-status-badge status-closed';

  const dot = document.createElement('span');
  dot.className = 'status-dot';
  badge.appendChild(dot);

  const textSpan = document.createElement('span');
  textSpan.textContent = `${status.statusText} (${status.detailText})`;
  badge.appendChild(textSpan);

  container.appendChild(badge);
}

/**
 * Renderiza a seção de Informações Comerciais.
 */
function renderBusinessInfoSection(config = {}) {
  const gridContainer = document.getElementById('info-grid-container');
  if (!gridContainer) return;
  gridContainer.textContent = '';

  const { business, location, contact } = config;

  // 1. Card de Horários
  if (business?.hours && Array.isArray(business.hours)) {
    const hoursCard = document.createElement('div');
    hoursCard.className = 'info-card';

    const title = document.createElement('h3');
    title.className = 'info-card-title';
    title.textContent = '🕒 Horários de Funcionamento';
    hoursCard.appendChild(title);

    const list = document.createElement('ul');
    list.className = 'info-list';

    business.hours.forEach(item => {
      const li = document.createElement('li');
      const daySpan = document.createElement('strong');
      daySpan.textContent = `${item.dayName}: `;
      
      const timeText = document.createTextNode(
        item.closed ? 'Fechado' : `${item.open} às ${item.close}`
      );

      li.appendChild(daySpan);
      li.appendChild(timeText);
      list.appendChild(li);
    });

    hoursCard.appendChild(list);
    gridContainer.appendChild(hoursCard);
  }

  // 2. Card de Entrega e Pagamento
  const deliveryCard = document.createElement('div');
  deliveryCard.className = 'info-card';

  const delTitle = document.createElement('h3');
  delTitle.className = 'info-card-title';
  delTitle.textContent = '💳 Entrega & Pagamento';
  deliveryCard.appendChild(delTitle);

  const delList = document.createElement('ul');
  delList.className = 'info-list';

  if (business?.deliveryInfo) {
    const liDel = document.createElement('li');
    liDel.textContent = `🛵 Delivery: ${business.deliveryInfo}`;
    delList.appendChild(liDel);
  }

  if (business?.paymentMethods && Array.isArray(business.paymentMethods)) {
    const liPay = document.createElement('li');
    liPay.textContent = `💰 Formas de Pagamento: ${business.paymentMethods.join(', ')}`;
    delList.appendChild(liPay);
  }

  deliveryCard.appendChild(delList);
  gridContainer.appendChild(deliveryCard);

  // 3. Card de Endereço e Contato
  if (location) {
    const locCard = document.createElement('div');
    locCard.className = 'info-card';

    const locTitle = document.createElement('h3');
    locTitle.className = 'info-card-title';
    locTitle.textContent = '📍 Endereço & Contato';
    locCard.appendChild(locTitle);

    const locList = document.createElement('ul');
    locList.className = 'info-list';

    const liAddr = document.createElement('li');
    liAddr.textContent = `${location.addressLine1}, ${location.addressLine2}`;
    locList.appendChild(liAddr);

    if (contact?.whatsappDisplay) {
      const liPhone = document.createElement('li');
      liPhone.textContent = `📞 WhatsApp: ${contact.whatsappDisplay}`;
      locList.appendChild(liPhone);
    }

    if (location.mapsUrl) {
      const liMaps = document.createElement('li');
      const mapsBtn = document.createElement('a');
      mapsBtn.href = location.mapsUrl;
      mapsBtn.target = '_blank';
      mapsBtn.rel = 'noopener noreferrer';
      mapsBtn.className = 'footer-link';
      mapsBtn.textContent = '🗺️ Ver no Google Maps';
      mapsBtn.addEventListener('click', () => trackEvent('clique_localizacao', { source: 'info_card' }));
      liMaps.appendChild(mapsBtn);
      locList.appendChild(liMaps);
    }

    locCard.appendChild(locList);
    gridContainer.appendChild(locCard);
  }
}
