/**
 * Dados de Categorias e Produtos do Cardápio
 * 
 * Este arquivo armazena as categorias e os itens do cardápio.
 * Adicione, edite ou remova produtos sem alterar a estrutura HTML.
 */

export const menuCategories = [
  {
    id: "burgers",
    name: "Hambúrgueres",
    description: "Hambúrgueres artesanais de 160g grelhados no fogo com ingredientes selecionados.",
    icon: "🍔"
  },
  {
    id: "combos",
    name: "Combos",
    description: "Combos completos com hambúrguer, batata crocante e bebida trincando.",
    icon: "🍟"
  },
  {
    id: "sides",
    name: "Porções",
    description: "Porções generosas para compartilhar com amigos ou saborear sozinho.",
    icon: "🧀"
  },
  {
    id: "drinks-desserts",
    name: "Bebidas & Sobremesas",
    description: "Refrescos bem gelados e sobremesas artesanais para finalizar com chave de ouro.",
    icon: "🥤"
  }
];

export const menuProducts = [
  // Categoria: Hambúrgueres
  {
    id: "prod-classic-burger",
    categoryId: "burgers",
    name: "Classic Cheese Burguer",
    description: "Pão brioche selado na manteiga, blend artesanal de 160g, queijo cheddar fatiado derretido, maionese especial da casa e picles artesanal.",
    price: 28.90,
    image: "/images/burger-classic.webp",
    available: true,
    featured: true,
    badge: "Mais Pedido"
  },
  {
    id: "prod-bacon-supreme",
    categoryId: "burgers",
    name: "Smokey Bacon Supreme",
    description: "Pão australiano, blend artesanal 180g, queijo prato duplo, tiras crocantes de bacon defumado na lenha de macieira e geleia de pimenta levemente picante.",
    price: 36.50,
    image: "/images/burger-bacon.webp",
    available: true,
    featured: true,
    badge: "Chef's Choice"
  },
  {
    id: "prod-truffle-burger",
    categoryId: "burgers",
    name: "Truffle Gorgonzola",
    description: "Pão brioche tostado, blend de fraldinha 180g, creme de gorgonzola dolce, cebola caramelizada no vinho tinto e azeite trufado.",
    price: 39.90,
    image: "/images/burger-truffle.webp",
    available: true,
    featured: false,
    badge: null
  },
  {
    id: "prod-veggie-burger",
    categoryId: "burgers",
    name: "Futuro Veggie Delight",
    description: "Pão de gergelim, hambúrguer de grão-de-bico com especiarias, queijo muçarela vegetal, alface americana, tomate italiano e maionese verde vegana.",
    price: 32.00,
    image: "/images/burger-veggie.webp",
    available: true,
    featured: false,
    badge: "Opção Veggie"
  },

  // Categoria: Combos
  {
    id: "prod-combo-monstro",
    categoryId: "combos",
    name: "Combo Monstro Duplo",
    description: "1 Classic Cheese Burguer + 1 Porção Individual de Batata Crinkle Crocante + 1 Coca-Cola 350ml geladíssima.",
    price: 44.90,
    image: "/images/combo-monstro.webp",
    available: true,
    featured: true,
    badge: "Super Desconto"
  },
  {
    id: "prod-combo-casal",
    categoryId: "combos",
    name: "Combo Galera (2 Burguers)",
    description: "2 Hambúrgueres à sua escolha (Classic ou Smokey Bacon) + 1 Porção Média de Onion Rings + 2 Bebidas lata.",
    price: 78.90,
    image: "/images/combo-galera.webp",
    available: true,
    featured: false,
    badge: "Para 2 Pessoas"
  },
  {
    id: "prod-combo-edicao-limitada",
    categoryId: "combos",
    name: "Combo Sabor Real Edição Especial",
    description: "Burguer de Ribela defumada 200g + Batata com Cheddar & Bacon + Milkshake de Ovomaltine 400ml.",
    price: 52.00,
    image: "/images/combo-especial.webp",
    available: false, // INDISPONÍVEL PARA TESTE DE DISPONIBILIDADE
    featured: false,
    badge: "Esgotado Hoje"
  },

  // Categoria: Porções
  {
    id: "prod-batata-cheddar-bacon",
    categoryId: "sides",
    name: "Batata Rustica Cheddar & Bacon",
    description: "400g de batata rústica frita na hora, coberta com cremoso molho cheddar artesanal e crispies de bacon super crocante.",
    price: 29.90,
    image: "/images/batata-cheddar.webp",
    available: true,
    featured: true,
    badge: "Para Compartilhar"
  },
  {
    id: "prod-onion-rings",
    categoryId: "sides",
    name: "Onion Rings Crocantes",
    description: "12 anéis de cebola empanados em farinha panko dourada, acompanhados de molho barbecue artesanal defumado.",
    price: 24.50,
    image: "/images/onion-rings.webp",
    available: true,
    featured: false,
    badge: null
  },
  {
    id: "prod-nuggets-artesanais",
    categoryId: "sides",
    name: "Coxinha de Costela (6 un)",
    description: "Coxinhas sem massa recheadas com costela bovina desfiada no bafo com requeijão cremoso e pimenta biquinho.",
    price: 27.00,
    image: "/images/coxinhas-costela.webp",
    available: true,
    featured: false,
    badge: "Favorito"
  },

  // Categoria: Bebidas & Sobremesas
  {
    id: "prod-coca-zero",
    categoryId: "drinks-desserts",
    name: "Coca-Cola Original ou Zero (350ml)",
    description: "Refrigerante lata 350ml tinindo de gelado.",
    price: 7.50,
    image: "/images/coca-lata.webp",
    available: true,
    featured: false,
    badge: null
  },
  {
    id: "prod-suco-natural",
    categoryId: "drinks-desserts",
    name: "Suco Natural de Laranja (500ml)",
    description: "Suco 100% fruta espremido na hora, sem adição de água nem açúcar.",
    price: 11.90,
    image: "/images/suco-laranja.webp",
    available: true,
    featured: false,
    badge: "100% Natural"
  },
  {
    id: "prod-pudim-gourmet",
    categoryId: "drinks-desserts",
    name: "Pudim de Leite Moça da Vovó",
    description: "Fatia generosa de pudim de leite super liso, sem furinhos, banhado em calda de caramelo artesanal.",
    price: 14.90,
    image: "/images/pudim-gourmet.webp",
    available: true,
    featured: true,
    badge: "Sobremesa Top"
  },
  {
    id: "prod-brownie-nutella",
    categoryId: "drinks-desserts",
    name: "Brownie Quentinho com Nutella",
    description: "Brownie com chocolate 70% cacau e nozes, servido quente com generosa camada de Nutella.",
    price: 18.00,
    image: "/images/brownie-nutella.webp",
    available: true,
    featured: false,
    badge: null
  }
];
