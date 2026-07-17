/**
 * CONFIGURAÇÃO DO SITE - TEMPLATE LOCAL BUSINESS
 * 
 * Altere os valores abaixo para personalizar o site para um novo cliente.
 * Não é necessário mexer nos arquivos HTML, CSS ou JS.
 */

const siteConfig = {
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
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.807492396557!2d-53.82725832355695!3d-29.667360113894663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95023355e5b9b86f%3A0x77aa1a7f551a1bd2!2sR.%20Nahir%20Zambrano%20da%20Costa%2C%208%20-%20Ch%C3%A1cara%20das%20Flores%2C%20Minha%20cidade%20-%20UF%2C%2097043-742!5e0!3m2!1spt-BR!2sbr!4v1784155405285!5m2!1spt-BR!2sbr",
    mapsExternalUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Nahir+Zambrano+da+Costa+8+Minha+cidade+UF"
  },

  // Tema de Cores do Site (Opcional)
  // Caso queira mudar a paleta do site de acordo com a marca do cliente
  theme: {
    primary: "#0a2240",       // Cor principal (ex: Azul escuro)
    secondary: "#d90429",     // Cor secundária/botões (ex: Vermelho emergência)
    accent: "#ffb703",        // Cor de destaque/estrelas (ex: Amarelo)
    whatsapp: "#25d366"       // Cor do WhatsApp
  },

  // Configurações de SEO da Página
  seo: {
    title: "Serviços em Geral | Atendimento Profissional",
    description: "Serviços em Geral com atendimento rápido e profissional em Minha cidade e Região.",
    keywords: "serviços locais, atendimento profissional, Serviços em Geral, Minha cidade e Região"
  },

  // Conteúdo da Seção Hero (Topo da Página)
  hero: {
    badges: ["Atendimento rápido", "Orçamento fácil"],
    title: "Serviços de Manutenção 24 Horas",
    subtitle: "Soluções rápidas para residências, empresas e condomínios.",
    description: "Eletricista, Encanador, Infiltrações, Limpeza de pátios e prédios, Limpeza de Caixa d'água e de calhas, Pintura e mão de obras em geral.",
    image: "", // Caminho para imagem real (ex: "assets/img/hero.jpg"). Se vazio, exibe o placeholder.
    imageAlt: "Serviços profissionais da Desentupidora J.E."
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

  // Galeria de Fotos Recentes
  gallery: [
    {
      label: "Antes do serviço",
      image: "" // Caminho para imagem (ex: "assets/img/galeria-1.jpg"). Se vazio, exibe o placeholder.
    },
    {
      label: "Durante o atendimento",
      image: "" // Caminho para imagem (ex: "assets/img/galeria-2.jpg"). Se vazio, exibe o placeholder.
    },
    {
      label: "Serviço finalizado",
      image: "" // Caminho para imagem (ex: "assets/img/galeria-3.jpg"). Se vazio, exibe o placeholder.
    }
  ],

  // Avaliações dos Clientes (Depoimentos)
  // NOTA IMPORTANTE: Substituir por avaliações reais antes da publicação final.
  testimonials: [
    {
      name: "Carlos Silva",
      city: "Santa Maria - RS",
      text: "Atendimento rápido e serviço muito bem executado. Resolveram o problema de forma muito profissional e limpa.",
      rating: 5
    },
    {
      name: "Mariana Souza",
      city: "Santa Maria - RS",
      text: "Equipe extremamente educada, pontual e profissional. Preço justo e ótimo atendimento no pós-serviço.",
      rating: 5
    },
    {
      name: "Pedro Rodrigues",
      city: "Santa Maria - RS",
      text: "Resolveu o problema com muita agilidade. Equipe técnica muito bem preparada.",
      rating: 5
    }
  ],

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

  beforeAfter: [
    {
      title: "Pintura Predial",
      beforeImage: "",
      afterImage: "",
      beforeAlt: "Situação antes da pintura",
      afterAlt: "Resultado após a pintura"
    },
    {
      title: "Encanamento de Pias",
      beforeImage: "",
      afterImage: "",
      beforeAlt: "Pia entupida antes do serviço",
      afterAlt: "Pia após o encanamento"
    }
  ],

  about: {
    eyebrow: "Quem Somos",
    title: "Atendimento profissional em Santa Maria e Região",
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
    description: "Entre em contato e receba atendimento rápido em Santa Maria e Região.",
    mascotImage: "",
    mascotAlt: "Mascote"
  }
};
