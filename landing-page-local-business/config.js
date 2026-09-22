/**
 * CONFIGURAÇÃO DO SITE - TEMPLATE LOCAL BUSINESS
 * 
 * Altere os valores abaixo para personalizar o site para um novo cliente.
 * Não é necessário mexer nos arquivos HTML, CSS ou JS.
 */

const siteConfig = {
  // Preview não deve ser indexado. Configure produção somente após definir domínio e conteúdo final.
  deployment: {
    environment: "preview",
    productionUrl: "",
    allowIndexing: false
  },

  // Eventos locais de intenção de contato; habilite apenas se houver plano de mensuração.
  analytics: { trackContactClicks: false },

  // Ative apenas depois de incluir imagens/depoimentos reais e autorizados.
  sections: {
    gallery: false,
    testimonials: false
  },

  // Configuração da navegação principal do header
  navigation: [
    { label: "Início", target: "inicio" },
    { label: "Serviços", target: "servicos" },
    { label: "Resultados", target: "resultados" },
    { label: "Sobre", target: "quem-somos" },
    { label: "Dúvidas", target: "faq" },
    { label: "Contato", target: "contato" }
  ],

  // Dados fundamentais da empresa
  business: {
    name: "Serviços em Geral",
    segment: "Serviços",
    slogan: "Atendimento rápido, profissional e confiável.",
    city: "Minha cidade - UF",
    region: "Minha região",
    cnpj: "CNPJ 00.000.000/0000-00",
    phonePrimary: "(00) 00000-0000",
    //phoneSecondary: "(00) 00000-0000",
    phonePrimaryRaw: "(00) 00000-0000",
    whatsappRaw: "(00) 00000-0000",
    whatsappMessage: "Olá, preciso de atendimento. (Via Site)",
    instagram: "@meu_insta",
    instagramUrl: "https://www.instagram.com/meu_insta/"
  },

  // Configurações de Localização e Mapa
  location: {
    title: "Atendimento em Minha cidade e Região",
    description: "Atendemos residências, empresas, condomínios e chácaras.",
    address: "Rua Azul, 8 - Meu Bairro, Minha cidade - UF",
    mapsEmbedUrl: "",
    mapsExternalUrl: ""
  },

  // Tema de Cores do Site (Opcional)
  // Caso queira mudar a paleta do site de acordo com a marca do cliente
  theme: {
    primary: "#1a10a0",       // Cor principal (ex: Azul escuro)
    secondary: "#d90429",     // Cor secundária/botões (ex: Vermelho emergência)
    accent: "#ffb703",        // Cor de destaque/estrelas (ex: Amarelo)
    whatsapp: "#25d366"       // Cor do WhatsApp
  },

  // Configurações de SEO da Página
  seo: {
    title: "Serviços em Geral | Atendimento Profissional",
    description: "Serviços em Geral com atendimento rápido e profissional em Minha cidade e Região.",
    keywords: "serviços locais, atendimento profissional, Serviços em Geral, Minha cidade e Região",
    shareImage: ""
  },

  // Conteúdo da Seção Hero (Topo da Página)
  hero: {
    badges: ["Atendimento rápido", "Orçamento fácil"],
    title: "Serviços de Manutenção 24 Horas",
    subtitle: "Soluções rápidas para residências, empresas e condomínios.",
    description: "Eletricista, Encanador, Infiltrações, Limpeza de pátios e prédios, Limpeza de Caixa d'água e de calhas, Pintura e mão de obras em geral.",
    image: "", // Caminho para imagem real (ex: "assets/img/hero.jpg"). Se vazio, exibe o placeholder.
    imageAlt: "Serviços profissionais da empresa"
  },

  // Lista de Serviços Oferecidos
  // "featured: true" destaca o card no layout (estilo "Mais Procurado")
  services: [
    {
      title: "Eletricista",
      description: "Serviços de eletricidade residenciais e comerciais.",
      featured: true
    },
    {
      title: "Encanador",
      description: "Serviços de encanamento residenciais e comerciais.",
      featured: true
    },
    {
      title: "Pintura",
      description: "Serviços de pintura residenciais e comerciais.",
      featured: true
    }
  ],

  // Diferenciais / Por que escolher
  trustItems: [
    {
      title: "Atendimento rápido",
      description: "Resposta ágil para solicitações urgentes."
    },
    {
      title: "Equipe experiente",
      description: "Profissionais preparados para executar o serviço."
    },
    {
      title: "Pagamento facilitado",
      description: "Condições flexíveis conforme o atendimento."
    },
    {
      title: "Atendimento local",
      description: "Atuação em Santa Maria e Região."
    },
    {
      title: "Orçamento objetivo",
      description: "Comunicação clara antes da execução."
    },
    {
      title: "Serviço confiável",
      description: "Foco em qualidade, segurança e satisfação."
    }
  ],

  // Galeria opcional: { label: "Descrição da foto", image: "assets/img/foto.webp" }
  gallery: [],

  // Depoimentos opcionais: { name: "Nome autorizado", city: "Cidade", text: "Texto real", rating: 5 }
  testimonials: [],

  // Perguntas Frequentes (FAQ)
  faq: [
    {
      question: "Como solicito atendimento?",
      answer: "Você pode entrar em contato diretamente pelo WhatsApp."
    },
    {
      question: "Vocês atendem empresas?",
      answer: "Sim, atendemos residências, empresas, comércios e condomínios com a mesma eficiência."
    },
    {
      question: "O orçamento é rápido?",
      answer: "Sim, buscamos entender o problema e orientar o cliente sobre os valores e procedimentos de forma ágil."
    },
    {
      question: "Qual região de atendimento?",
      answer: "Atendemos Santa Maria e Região com equipe local de prontidão."
    }
  ],

  trustBar: [
    "Atendimento rápido",
    "Equipe especializada",
    "Orçamento sem compromisso",
    "Atendimento residencial e empresarial"
  ],

  // Comparativos exigem duas fotos do mesmo atendimento e contexto confirmado.
  beforeAfter: [],

  about: {
    eyebrow: "Quem Somos",
    title: "Atendimento profissional em Minha cidade e Região",
    paragraphs: [
      "Somos uma empresa especializada em serviços de manutenção e reparos residenciais e comerciais, com foco em qualidade, agilidade e satisfação do cliente.",
      "Nosso compromisso é resolver cada problema com qualidade, transparência e agilidade."
    ],
    image: "",
    imageAlt: "Equipe ou veículo"
  },

  equipment: [
    {
      title: "Equipamentos de Pintura",
      description: "Ferramentas e equipamentos de pintura para serviços residenciais e comerciais.",
      image: "",
      imageAlt: "Equipamento de pintura"
    },
    {
      title: "Ferramentas profissionais",
      description: "Ferramentas adequadas para serviços hidráulicos, elétricos e manutenção.",
      image: "",
      imageAlt: "Ferramentas profissionais"
    }
  ],

  faqCta: {
    title: "Ainda ficou com dúvidas?",
    description: "Fale diretamente conosco e explique o que está acontecendo.",
    buttonText: "Conversar agora",
    whatsappMessage: "Olá, ainda tenho algumas dúvidas e gostaria de conversar."
  },

  finalCta: {
    title: "Precisa de atendimento agora?",
    description: "Entre em contato e receba atendimento rápido em Minha cidade e Região.",
    mascotImage: "",
    mascotAlt: "Mascote"
  }
};
