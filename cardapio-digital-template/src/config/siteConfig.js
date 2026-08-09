/**
 * Configuração Geral do Estabelecimento - Cardápio Digital Essencial
 * 
 * Este arquivo concentra todas as informações comerciais, identidade visual,
 * horários de funcionamento, fuso horário, SEO e tags de analytics.
 * Nenhuma alteração no HTML é necessária para trocar o estabelecimento.
 */

export const siteConfig = {
  // Identidade do Estabelecimento
  identity: {
    name: "Burguer & Cia - Demonstração",
    shortDescription: "Os melhores hambúrgueres artesanais, porções crocantes e sobremesas deliciosas.",
    logoUrl: "/images/logo.svg",
    faviconUrl: "/favicon.svg",
    ogImageUrl: "/images/og-image.webp",
    demoNotice: "Este é um cardápio de demonstração do template Cardápio Digital Essencial."
  },

  // Configuração da Hero (Cabeçalho Comercial com Imagem de Fundo e Overlay)
  hero: {
    backgroundImage: "/images/hero-bg.webp",
    headline: "O Verdadeiro Sabor do Hambúrguer Artesanal",
    subheadline: "Carnes nobres grelhadas no fogo, ingredientes selecionados e entrega rápida na sua porta.",
    primaryCtaLabel: "Pedir pelo WhatsApp",
    secondaryCtaLabel: "Ver cardápio",
    trustChips: [
      { icon: "🍔", text: "100% Artesanal" },
      { icon: "🛵", text: "Delivery Rápido" },
      { icon: "🛍️", text: "Retirada no Balcão" }
    ]
  },

  // Identidade Visual / Tema Customizável (Aplicado em CSS Custom Properties)
  theme: {
    colorPrimary: "#E63946",       // Vermelho vibrante principal
    colorPrimaryHover: "#C5221F",  // Vermelho escuro para hover
    colorSecondary: "#1D3557",     // Azul marinho profundo
    colorAccent: "#FFB703",        // Amarelo/Dourado para destaques e badges
    colorBackground: "#F8F9FA",    // Fundo geral claro e limpo
    colorSurface: "#FFFFFF",       // Fundo de cards e containers
    colorTextPrimary: "#212529",   // Texto principal escuro
    colorTextSecondary: "#6C757D", // Texto secundário atenuado
    colorBorder: "#E9ECEF",        // Bordas suaves
    colorSuccess: "#2B9348",       // Badge "Aberto agora"
    colorDanger: "#D90429",        // Badge "Fechado" / "Indisponível"
    borderRadiusSm: "8px",
    borderRadiusMd: "16px",
    borderRadiusLg: "24px",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
  },

  // Informações de Contato e Redes Sociais
  contact: {
    whatsappNumber: "5511999998888",
    whatsappDisplay: "(11) 99999-8888",
    instagramHandle: "@burguerecia.demo",
    instagramUrl: "https://instagram.com",
  },

  // Localização e Endereço
  location: {
    addressLine1: "Av. Paulista, 1000 - Bela Vista",
    addressLine2: "São Paulo - SP, CEP 01310-100",
    city: "São Paulo",
    state: "SP",
    mapsUrl: "https://maps.google.com/?q=Av.+Paulista,+1000+-+Bela+Vista,+S%C3%A3o+Paulo+-+SP"
  },

  // Informações Comerciais
  business: {
    timezone: "America/Sao_Paulo",
    deliveryInfo: "Entrega via motoboy das 18h às 23h30. Taxa calculada no atendimento.",
    takeawayInfo: "Retirada no balcão disponível sem taxa adicional.",
    paymentMethods: [
      "Pix (Desconto de 5%)",
      "Cartão de Crédito (Visa, Master, Elo)",
      "Cartão de Débito",
      "Vale Refeição (Alelo, Sodexo, VR, Ticket)",
      "Dinheiro (Informe o troco no WhatsApp)"
    ],
    hours: [
      { day: 0, dayName: "Domingo", open: "18:00", close: "23:30", closed: false },
      { day: 1, dayName: "Segunda-feira", open: "00:00", close: "00:00", closed: true },
      { day: 2, dayName: "Terça-feira", open: "18:00", close: "23:30", closed: false },
      { day: 3, dayName: "Quarta-feira", open: "18:00", close: "23:30", closed: false },
      { day: 4, dayName: "Quinta-feira", open: "18:00", close: "23:30", closed: false },
      { day: 5, dayName: "Sexta-feira", open: "18:00", close: "02:00", closed: false },
      { day: 6, dayName: "Sábado", open: "18:00", close: "02:00", closed: false }
    ]
  },

  // SEO e Metadados
  seo: {
    pageTitle: "Burguer & Cia | Cardápio Digital",
    metaDescription: "Confira nosso cardápio digital completo de hambúrgueres artesanais, combos, porções e bebidas. Faça seu pedido diretamente pelo WhatsApp!",
    canonicalUrl: "https://cardapio-demo.assolin.com.br",
    locale: "pt_BR"
  },

  // Analytics e Rastreamento
  analytics: {
    googleTagManagerId: "" 
  }
};
