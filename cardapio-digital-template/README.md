# Cardápio Digital Essencial - Template Oficial

> Template oficial reutilizável, mobile-first e de alta performance para pequenos estabelecimentos de alimentação como hamburguerias, pizzarias, lancherias, cafeterias, bares, food trucks e restaurantes.

Desenvolvido pela **Assolin Tecnologia**.

---

## 1. Propósito do Template

O **Cardápio Digital Essencial** foi desenvolvido para permitir que pequenos estabelecimentos divulguem seus produtos de forma moderna, rápida e intuitiva, direcionando o cliente diretamente para o atendimento via **WhatsApp**.

A arquitetura desacopla totalmente a estrutura da interface, o comportamento JavaScript e os estilos CSS das **configurações do estabelecimento** e dos **dados do cardápio**. Dessa forma, um novo estabelecimento pode ser configurado em minutos alterando apenas dois arquivos JavaScript, sem necessidade de editar o HTML ou reescrever código.

---

## 2. Stack Tecnológica

O projeto foi construído exclusivamente com tecnologias web nativas e modernas, sem frameworks complexos:

* **Vite** (Build Tool e servidor de desenvolvimento ultrarrápido)
* **HTML5 Semântico**
* **CSS3 Custom Properties** (Design Tokens e layouts responsivos)
* **JavaScript ES Modules** (Renderização via APIs nativas do DOM e `textContent`)

**Dependências externas deliberadamente omitidas:**
Sem React, Vue, Angular, Tailwind, Bootstrap, jQuery, backend, banco de dados ou CMS.

---

## 3. Instalação

Certifique-se de ter o [Node.js](https://nodejs.org/) (versão 18 ou superior) instalado em sua máquina.

```bash
# Clone o repositório ou acesse a pasta do template
cd cardapio-digital-template

# Instale as dependências
npm install
```

---

## 4. Desenvolvimento

Para iniciar o servidor de desenvolvimento local com Hot Module Replacement (HMR):

```bash
npm run dev
```

O projeto estará acessível por padrão em `http://localhost:3000`.

---

## 5. Build de Produção

Para gerar o pacote estático otimizado e minificado para publicação:

```bash
npm run build
```

Os arquivos prontos para produção serão gerados na pasta `dist/`.

Para testar o build localmente antes de publicar:

```bash
npm run preview
```

---

## 6. Estrutura de Diretórios

```text
cardapio-digital-template/
│
├── index.html                      # Estrutura base da página e meta tags
├── package.json                    # Dependências e scripts Vite
├── vite.config.js                  # Configurações do Vite
├── README.md                       # Documentação do projeto
│
├── public/
│   ├── favicon.svg                 # Ícone da aba do navegador
│   └── images/
│       ├── logo.svg                # Logotipo do estabelecimento
│       ├── hero-bg.webp            # Imagem de fundo da Hero comercial
│       ├── placeholder-product.svg # Imagem de fallback para produtos
│       ├── og-image.webp           # Imagem para compartilhamento em redes sociais
│       └── [produtos].webp         # Imagens dos produtos cadastrados
│
└── src/
    ├── main.js                     # Orquestrador da aplicação e carregador DOM
    ├── styles/
    │   ├── reset.css               # Reset de CSS moderno
    │   ├── variables.css           # Variáveis CSS (cores, fontes, espaçamentos)
    │   ├── base.css                # Estilos base e acessibilidade
    │   ├── components.css          # Estilos dos componentes de interface e Hero
    │   └── responsive.css          # Ajustes responsivos para desktop e tablet
    │
    ├── config/
    │   ├── siteConfig.js           # Identidade, Hero, contato, horários, fuso e SEO
    │   └── menuData.js             # Categorias e produtos do cardápio
    │
    ├── modules/
    │   ├── businessStatus.js       # Cálculo de status (Aberto/Fechado com fuso e meia-noite)
    │   ├── categories.js           # Navegação por categorias (Pills sticky)
    │   ├── menu.js                 # Renderizador seguro de produtos e destaques
    │   ├── whatsapp.js             # Gerador de links codificados do WhatsApp
    │   └── analytics.js            # Gerenciador condicional de GTM e eventos
    │
    └── utils/
        └── currency.js             # Formatador de moeda brasileira (R$)
```

---

## 7. Como Alterar a Marca, Logo e a Hero Comercial

Edite o arquivo `src/config/siteConfig.js` nas seções `identity` e `hero`:

```javascript
identity: {
  name: "Nome do Seu Estabelecimento",
  shortDescription: "Sua descrição curta para o cardápio.",
  logoUrl: "/images/seu-logo.svg",
  faviconUrl: "/favicon.svg",
  ogImageUrl: "/images/og-image.webp",
  demoNotice: "" // Deixe em branco ("") para remover a barra amarela de demonstração
},

hero: {
  backgroundImage: "/images/seu-hero-bg.webp", // Imagem de fundo da Hero em largura total
  headline: "O Verdadeiro Sabor da Sua Cidade",
  subheadline: "Ingredientes selecionados, preparo artesanal e entrega rápida.",
  primaryCtaLabel: "Pedir pelo WhatsApp",
  secondaryCtaLabel: "Ver cardápio",
  trustChips: [
    { icon: "🍔", text: "100% Artesanal" },
    { icon: "🛵", text: "Delivery Rápido" },
    { icon: "🛍️", text: "Retirada no Balcão" }
  ]
}
```

Para trocar a imagem da Hero sem alterar o HTML, basta substituir o arquivo em `public/images/seu-hero-bg.webp` e atualizar o caminho no `siteConfig.js`.

---

## 8. Como Alterar as Cores e a Identidade Visual

No arquivo `src/config/siteConfig.js`, edite o objeto `theme`:

```javascript
theme: {
  colorPrimary: "#E63946",       // Cor principal dos botões e destaques
  colorPrimaryHover: "#C5221F",  // Cor ao passar o mouse
  colorSecondary: "#1D3557",     // Cor dos títulos e cabeçalho
  colorAccent: "#FFB703",        // Cor dos destaques e badges
  colorBackground: "#F8F9FA",    // Fundo do site
  colorSurface: "#FFFFFF",       // Fundo dos cards
  colorTextPrimary: "#212529",   // Texto principal
  borderRadiusMd: "16px"         // Curvatura dos cards
}
```

---

## 9. Como Alterar o WhatsApp de Pedidos

No arquivo `src/config/siteConfig.js`, edite a seção `contact`:

```javascript
contact: {
  whatsappNumber: "5511999998888",
  whatsappDisplay: "(11) 99999-8888",
  instagramHandle: "@seu.estabelecimento",
  instagramUrl: "https://instagram.com/seu.estabelecimento"
}
```

---

## 10. Como Cadastrar Categorias

No arquivo `src/config/menuData.js`, adicione novos objetos na lista `menuCategories`:

```javascript
export const menuCategories = [
  {
    id: "pizzas",               // ID único da categoria
    name: "Pizzas Artesanais",   // Nome exibido na pill
    description: "Pizzas de fermentação natural de 48h.",
    icon: "🍕"                  // Emoji ou ícone opcional
  }
];
```

---

## 11. Como Cadastrar Produtos

No arquivo `src/config/menuData.js`, insira itens na lista `menuProducts`:

```javascript
export const menuProducts = [
  {
    id: "prod-pizza-margherita",
    categoryId: "pizzas",      // Deve corresponder ao id da categoria
    name: "Pizza Margherita",
    description: "Molho de tomate italiano, muçarela de búfala e manjericão fresco.",
    price: 49.90,              // Valor numérico em reais
    image: "/images/pizza-margherita.webp",
    available: true,           // true = disponível / false = indisponível
    featured: true,            // true = aparece no carrossel de destaques
    badge: "Mais Vendida"       // Badge opcional (ex: "Promoção", "Novo")
  }
];
```

---

## 12. Como Marcar um Produto como Indisponível

Defina `available: false` no produto desejado em `src/config/menuData.js`:

```javascript
{
  id: "prod-item-esgotado",
  name: "Combo Edição Especial",
  price: 52.00,
  available: false // O card exibirá a tag "Indisponível hoje" e desativará o botão de pedido
}
```

---

## 13. Como Destacar um Produto (Destaques)

Defina `featured: true` no produto em `src/config/menuData.js`:

```javascript
{
  id: "prod-x-bacon",
  name: "Smokey Bacon Supreme",
  featured: true
}
```

---

## 14. Como Configurar Horários e Fuso Horário

No arquivo `src/config/siteConfig.js`, defina o fuso horário oficial e os horários da semana:

```javascript
business: {
  timezone: "America/Sao_Paulo",
  hours: [
    { day: 0, dayName: "Domingo", open: "18:00", close: "23:30", closed: false },
    { day: 1, dayName: "Segunda-feira", open: "00:00", close: "00:00", closed: true },
    { day: 5, dayName: "Sexta-feira", open: "18:00", close: "02:00", closed: false }   // Atravessa a meia-noite
  ]
}
```

---

## 15. Como Configurar o Google Tag Manager (GTM)

No arquivo `src/config/siteConfig.js`:

```javascript
analytics: {
  googleTagManagerId: "GTM-XXXXXXX"
}
```

---

## 16. Limitações de SEO Dinâmico na V1

> **Nota Importante de SEO:**
> Metadados sociais e algumas informações SEO são preenchidos no cliente nesta versão do template. Crawlers que não executam JavaScript podem não interpretar todos os valores dinâmicos. Uma evolução futura poderá gerar o HTML final em build time a partir de `siteConfig.js`.

---

## 17. Como Publicar o Cardápio

1. Execute `npm run build`.
2. Envie o conteúdo da pasta `dist/` para seu provedor de hospedagem (Vercel, Netlify, Cloudflare Pages ou cPanel).

---

## 18. Funcionalidades NÃO Incluídas (Declaração de Escopo Comercial)

> ⚠️ **IMPORTANTE:**
> `Cardápio Digital Essencial não possui carrinho, checkout, pagamento online, painel administrativo ou sistema interno de pedidos.`

---

## Licença e Créditos

Desenvolvido com excelência por **Assolin Tecnologia**.
Todos os direitos reservados.
