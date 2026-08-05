
import {siteConfig} from './siteConfig.js';

function getElement(elementId) {
  return document.getElementById(elementId);
}

function setText(elementId, value) {
  const element = getElement(elementId);

  if (!element || value == null) {
    return;
  }

  element.textContent = value;
}

function setLink(elementId, linkConfig) {
  const element = getElement(elementId);

  if (!element || !linkConfig) {
    return;
  }

  if (linkConfig.label) {
    element.textContent = linkConfig.label;
  }

  if (linkConfig.href) {
    element.href = linkConfig.href;
  }
}

function setImage(elementId, imageConfig) {
  const image = getElement(elementId);

  if (!image || !imageConfig) {
    return;
  }

  if (imageConfig.src) {
    image.src = imageConfig.src;
  }

  if (imageConfig.alt) {
    image.alt = imageConfig.alt;
  }
}

function escapeHTML(str) {
  if (typeof str != 'string') return str || '';
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039")
}

function renderHero(config) {
  setText("hero-badge", config.hero?.badge);
  setText("hero-title", config.hero?.title);

  setText(
    "hero-title-highlight",
    config.hero?.titleHighlight
  );

  setText(
    "hero-description",
    config.hero?.description
  );

  setLink(
    "hero-primary-button",
    config.hero?.primaryButton
  );

  setLink(
    "hero-secondary-button",
    config.hero?.secondaryButton
  );

  setText(
    "hero-card-title",
    config.hero?.card?.title
  );

  setText(
    "hero-card-subtitle",
    config.hero?.card?.subtitle
  );

  setImage(
    "hero-card-image",
    config.hero?.card?.image
  );
}

function renderContact(config) {
  setLink(
    "contact-button",
    config.contact?.button
  );
}

function renderFooter(config) {
  setText(
    "footer-text",
    config.footer?.text
  );
}

function renderNavigation(config) {
  const container = getElement("navigation-items");
  const items = config.navigation?.items || [];

  if (container) {
    container.innerHTML = items
      .map((item) => {
        return `
          <a href="${item.href}">
            ${item.label}
          </a>
        `;
      })
      .join("");
  }

  setLink(
    "navigation-cta",
    config.navigation?.cta
  );
}

function renderProblem(config) {
    const article = getElement("head-cards");
    const items = config.problem?.items || [];
    let num = 1

    setText("problem-badge", config.problem?.badge);
    setText("problem-title", config.problem?.title);
    setText("problem-subtitle", config.problem?.subtitle);

    if (article) {
        article.innerHTML = items
          .map((item) => {
            return `
                <article class='card'>
                    <span class='num'>0${num++}</span>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </article>
            `;
          })
          .join("");
    }
}

function renderServide(config) {
    const service = getElement("services-container");
    const serviceItems = config.services?.items || [];

    setText("services-badge", config.services?.badge)
    setText("services-title", config.services?.title)
    setText("services-subtitle", config.services?.subtitle)
    
    if (service) {
        service.innerHTML = serviceItems
          .map((item) => {
            return `
                <article class="service">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <span class="tag">${item.tag}</span>
                </article>
            `;
        })
        .join("");
    }
}

function renderProcess(config) {
    const process = getElement("process-journey");
    const processItems = config.process?.items || [];

    setText("process-badge", config.process?.badge)
    setText("process-title", config.process?.title)
    setText("process-subtitle", config.process?.subtitle)
    
    if (process) {
        process.innerHTML = processItems
          .map((item) => {
            return `
                <article class="step">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <span class="tag">${item.tag || ""}</span>
                </article>
            `;
        })
        .join("");
    }
}

function renderProjects(config) {
  const projectsContainer = getElement("projects")
  const projectsItems = config.projects?.items || [];

  setText("section-project-badge", config.projects?.badge || "");
  setText("section-project-title", config.projects?.title || "");
  setText("section-project-subtitle", config.projects?.subtitle || "")

  if (projectsContainer) {
    projectsContainer.innerHTML = projectsItems
      .map((item) => {
        const linksHTML = Array.isArray(item.links)
          ? item.links
            .map((link) => `
              <a href="${escapeHTML(link.url)} class="${escapeHTML(link.class || 'btn btn-primarty')}" target="_blank" rel="noopener noreferrer">
                ${escapeHTML(link.label)}
              </a>
            `
            )
            .join("")
          : "";

          return `
            <article class="project ${escapeHTML(item.cardClass || '')}">
              <div class="card-badge">
                <span class="eyebrow">${escapeHTML(item.cardBadge)}</span>
              </div>
              <div class="card-header">
                <img src="${escapeHTML(item.cardImage)}" alt="${escapeHTML(item.cardImgAlt)}" width="320" height="180">
              </div>
              <div class="card-body">
                <div class="card-body-title">
                  <h3>${escapeHTML(item.cardTitle)}</h3>
                </div>
                <div class="card-body-description">
                  <p>${escapeHTML(item.cardDescription)}</p>
                </div>
                <div class="card-footer">
                  ${linksHTML}
                </div>
              </div>
            </article>
          `;
      })
      .join("");
  }

}

function initializeSite() {
  const config = siteConfig;

  if (!config) {
    console.error(
      "Não foi possível inicializar o site: siteConfig não encontrado."
    );

    return;
  }

  renderHero(config);
  renderContact(config);
  renderFooter(config);
  renderNavigation(config);
  renderProblem(config);
  renderServide(config);
  renderProcess(config);
  renderProjects(config);
}

document.addEventListener(
  "DOMContentLoaded",
  initializeSite
);

