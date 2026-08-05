export const siteConfig = {
  business: {
    name: "Assolin Tecnologia",

    logo: {
      src: "assets/assolin-logo.png",
      alt: "Assolin Tecnologia"
    },

    monogram: {
      src: "assets/assolin-monograma.png",
      alt: "Monograma AT da Assolin Tecnologia"
    }
  },

  navigation: {
    items: [
      {
        label: "Serviços",
        href: "#servicos"
      },
      {
        label: "Processo",
        href: "#processo"
      },
      {
        label: "Projetos",
        href: "#projetos"
      },
      {
        label: "Sobre",
        href: "#sobre"
      }
    ],

    cta: {
      label: "Falar sobre seu projeto",
      href: "#contato"
    }
  },

  hero: {
    badge: "Evolução digital para pequenos negócios",

    title: "Presença digital que",

    titleHighlight: "cresce com o seu negócio.",

    description:
      "A Assolin Tecnologia ajuda pequenos negócios a organizar sua presença digital, apresentar serviços com profissionalismo e evoluir de páginas enxutas para soluções gerenciáveis, automações e sistemas sob medida.",

    primaryButton: {
      label: "Solicitar uma conversa",
      href: "#contato"
    },

    secondaryButton: {
      label: "Conhecer projetos",
      href: "#projetos"
    },

    card: {
      title:
        "Tecnologia acessível, organizada e preparada para evoluir.",

      subtitle: "Do essencial à operação digital.",

      image: {
        src: "assets/assolin-monograma.png",
        alt: "Monograma AT da Assolin Tecnologia"
      }
    }
  },

  problem: {
    badge: "O problema não é só não ter um site",
    title: "Seu negócio precisa ser encontrado, entendido e lembrado.", 
    subtitle: "Muitos pequenos negócios dependem apenas de indicação e WhatsApp, com fotos, textos e informações espalhados. Organizamos essa base para transformar trabalho realizado em confiança e oportunidades.",
    items: [
      {
        title:"Presença desorganizada",
        description: "Serviços pouco claros, marca inconsistente e dificuldade para transmitir confiança."
      },
      {
        title:"Conteúdo disperso",
        description: "Fotos, depoimentos e informações perdidos entre celulares, conversas e redes sociais."
      },
      {
        title:"Falta de evolução",
        description: "Soluções são criadas sem métricas, manutenção ou caminho claro para crescer."
      }
    ]
  },

  services: {
    badge: "Serviços",
    title: "Começamos pelo que resolve agora.",
    subtitle: "A solução nasce enxuta e profissional. Depois, evolui somente quando o negócio realmente precisa, em vez de instalar um painel administrativo para trocar três fotos por ano.",
    items: [
      {
        title: "Presença Digital Essencial",
        description: "Landing pages e sites institucionais com domínio, WhatsApp, mapa, SEO local, métricas e orientação para conteúdo.",
        tag: "Entrada rápida e objetiva"
      },
      {
        title: "Presença Digital Ativa",
        description: "Manutenção, atualização de imagens e depoimentos, revisão de conteúdo e melhorias de conversão.",
        tag: "Acompanhamento contínuo"
      },
      {
        title: "Site Gerenciável",
        description: "CMS, painel administrativo, projetos, artigos, serviços, treinamento, manutenção e backup.",
        tag: "Autonomia quando fizer sentido"
      },
      {
        title: "Operação Digital",
        description: "Gestão de leads, integrações, automações, relatórios, APIs e sistemas personalizados.",
        tag: "Tecnologia ligada ao processo"
      }
    ]
  },

  process: {
    badge: "Como trabalhamos",
    title: "Uma jornada de evolução, não um pacote genérico.", 
    subtitle: "",
    items: [
      {
        title:"Diagnóstico",
        description: "Entendemos o negócio, o público, os serviços e o problema atual."
      },
      {
        title:"Organização",
        description: "Estruturamos marca, conteúdo, imagens, evidências e prioridades."
      },
      {
        title:"Entrega",
        description: "Construímos a solução adequada ao estágio atual do negócio."
      },
      {
        title:"Evolução",
        description: "Medimos, mantemos e ampliamos conforme necessidades verificadas."
      }
    ]
  },

  projects: {
    badge: "Projetos",
    title: "Tecnologia aplicada a problemas reais.",
    subtitle: "",
    items: [
      {
        cardClass: "primary",
        cardBadge: "Presença local",
        cardImage: "./assets/hero-banner.png",
        cardImgAlt: "Imagem do projeto Desentupidora J.E.",
        cardTitle: "Desentupidora J.E.",
        cardDescription: "Landing page responsiva com serviços, contato rápido, mapa, SEO local e estrutura preparada para coleta contínua de evidências.",
        links: [
            {
              url: "https://desentupidoraje.com.br",
              label: "Saiba mais",
              class: "btn btn-primary"
            },
            {
              url: "https://desentupidoraje.com.br",
              label: "Github",
              class: "btn btn-secondary"
            },
        ]
      },
      {
        cardClass: "secondary",
        cardBadge: "Sistema web",
        cardImage: "./assets/gth-agents.png",
        cardImgAlt: "Imagem do projeto Gth Agents",
        cardTitle: "GTH Agents",
        cardDescription: "Plataforma de gestão por competências, avaliação, desempenho, PDI, metas e apoio à tomada de decisão.",
        links: [
            {
              url: "",
              label: "",
              class: "btn btn-primary"
          }
        ]
      },
    ]
  },

  contact: {
    email: "contato@assolintecnologia.com.br",

    button: {
      label: "Entrar em contato",
      href: "mailto:contato@assolintecnologia.com.br"
    }
  },

  footer: {
    text:
      "© 2026 Assolin Tecnologia. Presença digital que cresce com o seu negócio."
  }
};