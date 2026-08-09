import { formatBRL } from '../utils/currency.js';
import { createWhatsAppOrderUrl, handleWhatsAppOrderClick } from './whatsapp.js';

/**
 * Cria o nó DOM de um card de produto de maneira 100% segura usando DOM API.
 * Nenhuma interpolação de HTML via innerHTML é utilizada.
 * 
 * @param {Object} product - Dados do produto
 * @param {string} whatsappNumber - Telefone do estabelecimento
 * @returns {HTMLElement} Elemento <article> contendo o card do produto
 */
export function createProductCardElement(product, whatsappNumber) {
  const card = document.createElement('article');
  card.className = product.available ? 'product-card' : 'product-card product-card-disabled';
  card.dataset.productId = product.id;

  // Wrapper da imagem
  const imageWrapper = document.createElement('div');
  imageWrapper.className = 'product-image-wrapper';

  const img = document.createElement('img');
  img.src = product.image || '/images/placeholder-product.svg';
  img.alt = product.name;
  img.loading = 'lazy';
  img.className = 'product-image';

  // Tratamento de erro na imagem para exibir fallback SVG sem quebrar
  img.addEventListener('error', () => {
    img.src = '/images/placeholder-product.svg';
  });

  imageWrapper.appendChild(img);

  // Badge de destaque (ex: "Mais Pedido", "Chef's Choice")
  if (product.badge) {
    const badgeSpan = document.createElement('span');
    badgeSpan.className = 'product-badge';
    badgeSpan.textContent = product.badge;
    imageWrapper.appendChild(badgeSpan);
  }

  // Tag de indisponibilidade
  if (!product.available) {
    const unavailableBadge = document.createElement('span');
    unavailableBadge.className = 'product-badge product-badge-unavailable';
    unavailableBadge.textContent = 'Indisponível hoje';
    imageWrapper.appendChild(unavailableBadge);
  }

  card.appendChild(imageWrapper);

  // Corpo do card
  const content = document.createElement('div');
  content.className = 'product-content';

  const title = document.createElement('h3');
  title.className = 'product-title';
  title.textContent = product.name;
  content.appendChild(title);

  const description = document.createElement('p');
  description.className = 'product-description';
  description.textContent = product.description;
  content.appendChild(description);

  // Footer do card com preço e ação
  const footer = document.createElement('div');
  footer.className = 'product-footer';

  const priceSpan = document.createElement('span');
  priceSpan.className = 'product-price';
  priceSpan.textContent = formatBRL(product.price);
  footer.appendChild(priceSpan);

  // Botão Pedir pelo WhatsApp
  if (product.available) {
    const orderBtn = document.createElement('a');
    orderBtn.className = 'btn btn-primary btn-order';
    orderBtn.href = createWhatsAppOrderUrl(product, whatsappNumber);
    orderBtn.target = '_blank';
    orderBtn.rel = 'noopener noreferrer';
    orderBtn.setAttribute('aria-label', `Pedir ${product.name} pelo WhatsApp por ${formatBRL(product.price)}`);

    const whatsappIcon = document.createElement('span');
    whatsappIcon.className = 'btn-icon';
    whatsappIcon.setAttribute('aria-hidden', 'true');
    whatsappIcon.textContent = '💬';

    const btnText = document.createElement('span');
    btnText.textContent = 'Pedir';

    orderBtn.appendChild(whatsappIcon);
    orderBtn.appendChild(btnText);

    orderBtn.addEventListener('click', (e) => handleWhatsAppOrderClick(e, product, whatsappNumber));

    footer.appendChild(orderBtn);
  } else {
    const disabledBtn = document.createElement('button');
    disabledBtn.type = 'button';
    disabledBtn.className = 'btn btn-disabled btn-order';
    disabledBtn.disabled = true;
    disabledBtn.setAttribute('aria-disabled', 'true');
    disabledBtn.textContent = 'Indisponível';
    footer.appendChild(disabledBtn);
  }

  content.appendChild(footer);
  card.appendChild(content);

  return card;
}

/**
 * Renderiza a seção de Destaques usando container de scroll nativo em CSS
 * acessível por touch, mouse e teclado.
 * 
 * @param {HTMLElement} containerEl 
 * @param {Array} products 
 * @param {string} whatsappNumber 
 */
export function renderHighlightsSection(containerEl, products, whatsappNumber) {
  if (!containerEl) return;
  containerEl.textContent = '';

  const featuredProducts = products.filter(p => p.featured);
  if (featuredProducts.length === 0) {
    const parentSection = containerEl.closest('.highlights-section');
    if (parentSection) parentSection.style.display = 'none';
    return;
  }

  const scrollTrack = document.createElement('div');
  scrollTrack.className = 'highlights-scroll-track';
  scrollTrack.setAttribute('tabindex', '0');
  scrollTrack.setAttribute('role', 'region');
  scrollTrack.setAttribute('aria-label', 'Destaques da Casa');

  featuredProducts.forEach(product => {
    const card = createProductCardElement(product, whatsappNumber);
    card.classList.add('highlight-card');
    scrollTrack.appendChild(card);
  });

  containerEl.appendChild(scrollTrack);
}

/**
 * Renderiza todas as seções de produtos agrupadas por categoria.
 * 
 * @param {HTMLElement} containerEl 
 * @param {Array} categories 
 * @param {Array} products 
 * @param {string} whatsappNumber 
 */
export function renderMenuCategoriesAndProducts(containerEl, categories, products, whatsappNumber) {
  if (!containerEl) return;
  containerEl.textContent = '';

  categories.forEach(category => {
    const categoryProducts = products.filter(p => p.categoryId === category.id);
    if (categoryProducts.length === 0) return;

    const section = document.createElement('section');
    section.className = 'menu-category-section';
    section.id = `category-section-${category.id}`;
    section.dataset.categoryId = category.id;

    // Cabeçalho da Categoria
    const header = document.createElement('div');
    header.className = 'category-header';

    const title = document.createElement('h2');
    title.className = 'category-title';
    
    if (category.icon) {
      const iconSpan = document.createElement('span');
      iconSpan.className = 'category-title-icon';
      iconSpan.setAttribute('aria-hidden', 'true');
      iconSpan.textContent = category.icon + ' ';
      title.appendChild(iconSpan);
    }

    const titleText = document.createTextNode(category.name);
    title.appendChild(titleText);
    header.appendChild(title);

    if (category.description) {
      const desc = document.createElement('p');
      desc.className = 'category-description';
      desc.textContent = category.description;
      header.appendChild(desc);
    }

    section.appendChild(header);

    // Grid de produtos da Categoria
    const grid = document.createElement('div');
    grid.className = 'products-grid';

    categoryProducts.forEach(product => {
      const card = createProductCardElement(product, whatsappNumber);
      grid.appendChild(card);
    });

    section.appendChild(grid);
    containerEl.appendChild(section);
  });
}
