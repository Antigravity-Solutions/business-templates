import { trackEvent } from './analytics.js';

/**
 * Centraliza a pill da categoria exclusivamente no container de rolagem horizontal,
 * sem afetar em hipótese alguma o eixo de rolagem vertical da página.
 * 
 * @param {HTMLElement} pillElement - Elemento <button> da pill
 */
function scrollPillIntoViewHorizontal(pillElement) {
  if (!pillElement) return;
  const listContainer = pillElement.closest('.categories-pill-list');
  if (!listContainer) return;

  const containerWidth = listContainer.clientWidth;
  const pillLeft = pillElement.offsetLeft;
  const pillWidth = pillElement.clientWidth;

  // Calcula a posição horizontal para centralizar a pill no container
  const targetLeft = pillLeft - (containerWidth / 2) + (pillWidth / 2);

  listContainer.scrollTo({
    left: Math.max(0, targetLeft),
    behavior: 'smooth'
  });
}

/**
 * Renderiza os botões/pills de navegação por categorias de forma segura via DOM API.
 * 
 * @param {HTMLElement} containerEl - Container onde as pills serão inseridas
 * @param {Array} categories - Lista de categorias de menuData.js
 * @param {Function} onCategorySelect - Callback ao clicar em uma categoria
 */
export function renderCategoriesNav(containerEl, categories, onCategorySelect) {
  if (!containerEl || !Array.isArray(categories)) return;

  containerEl.textContent = ''; // Limpa conteúdo existente com segurança

  const navList = document.createElement('ul');
  navList.className = 'categories-pill-list';
  navList.setAttribute('role', 'tablist');
  navList.setAttribute('aria-label', 'Categorias do cardápio');

  // Adiciona pill para cada categoria
  categories.forEach((category, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'categories-pill-item';
    listItem.setAttribute('role', 'presentation');

    const button = document.createElement('button');
    button.type = 'button';
    button.className = index === 0 ? 'category-pill active' : 'category-pill';
    button.id = `tab-cat-${category.id}`;
    button.setAttribute('role', 'tab');
    button.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
    button.setAttribute('aria-controls', `category-section-${category.id}`);
    button.dataset.categoryId = category.id;

    // Ícone da categoria (se existir)
    if (category.icon) {
      const iconSpan = document.createElement('span');
      iconSpan.className = 'category-pill-icon';
      iconSpan.setAttribute('aria-hidden', 'true');
      iconSpan.textContent = category.icon;
      button.appendChild(iconSpan);
    }

    // Nome da categoria (usando textContent para prevenção total contra XSS)
    const labelSpan = document.createElement('span');
    labelSpan.className = 'category-pill-label';
    labelSpan.textContent = category.name;
    button.appendChild(labelSpan);

    // Evento de clique
    button.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Atualiza estado visual das pills
      const allPills = containerEl.querySelectorAll('.category-pill');
      allPills.forEach(pill => {
        pill.classList.remove('active');
        pill.setAttribute('aria-selected', 'false');
      });

      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      // Scroll suave apenas horizontal na barra de categorias
      scrollPillIntoViewHorizontal(button);

      // Dispara evento de analytics
      trackEvent('clique_categoria', { category_id: category.id, category_name: category.name });

      if (typeof onCategorySelect === 'function') {
        onCategorySelect(category.id);
      }
    });

    listItem.appendChild(button);
    navList.appendChild(listItem);
  });

  containerEl.appendChild(navList);
}

/**
 * Conecta o observer para atualizar automaticamente a pill ativa ao rolar a página.
 * 
 * @param {Array} categories 
 */
export function setupCategoryScrollObserver(categories) {
  if (!('IntersectionObserver' in window) || !Array.isArray(categories)) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const catId = entry.target.dataset.categoryId;
        if (!catId) return;

        const targetPill = document.getElementById(`tab-cat-${catId}`);
        if (targetPill) {
          const allPills = document.querySelectorAll('.category-pill');
          allPills.forEach(p => {
            p.classList.remove('active');
            p.setAttribute('aria-selected', 'false');
          });
          targetPill.classList.add('active');
          targetPill.setAttribute('aria-selected', 'true');

          // Scroll suave apenas no eixo horizontal do container de categorias
          scrollPillIntoViewHorizontal(targetPill);
        }
      }
    });
  }, observerOptions);

  categories.forEach(category => {
    const section = document.getElementById(`category-section-${category.id}`);
    if (section) observer.observe(section);
  });
}

