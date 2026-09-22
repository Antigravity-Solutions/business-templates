# Landing Page Template - Negócios Locais

Template HTML/CSS/JS responsivo para negócios locais. Derivado da estrutura inicial da Desentupidora J.E.; as melhorias genéricas são incorporadas aqui sem dados, domínio ou integrações exclusivos daquele cliente.

---

🔗 [Ver página](https://business-templates-sandy.vercel.app/)

## 📂 Estrutura de Arquivos

```text
landing-page-local-business/
├── index.html          # Estrutura semântica e esqueleto da página
├── styles.css          # Estilos premium, variáveis e placeholders
├── script.js           # Motor de renderização dinâmica e interações
├── config.js           # Único arquivo de edição (Configurações do cliente)
├── README.md           # Instruções de personalização e checklist
└── assets/
    └── img/            # Pasta destinada às fotos reais do cliente
```

---

## 🛠️ Como Funciona o Template

O template funciona de forma 100% estática e dinâmica:
1. O navegador carrega o `config.js` que define a constante global `siteConfig`.
2. Em seguida, o `script.js` lê as informações do `siteConfig`, preenche o conteúdo, atualiza metadados em runtime e renderiza os blocos opcionais quando habilitados e preenchidos.
3. **Não requer backend, build, React ou banco de dados.** Funciona abrindo apenas o `index.html` diretamente no navegador.

---

## 👥 Como Criar um Novo Cliente a partir Deste Template

Para criar uma nova landing page para um cliente diferente usando esta base:

1. **Copie a pasta**: Copie a pasta inteira `landing-page-local-business` para um novo diretório (ex: `projeto-cliente-x`).
2. **Edite o `config.js`**: Abra o arquivo na raiz e altere as propriedades do objeto `siteConfig`:
   - Nome do negócio (`business.name`)
   - Telefone e WhatsApp (`business.phonePrimary`, `business.whatsappRaw`, etc.)
   - Serviços prestados (`services`)
   - Cidade e região atendida (`business.city` e `business.region`)
   - Cores da marca (`theme.primary`, `theme.secondary`, etc.)
3. **Insira as fotos do cliente**: Cole as imagens reais do cliente dentro de `assets/img/`.
4. **Referencie no config.js**: Preencha `hero.image` com a imagem real. A galeria exige `gallery[].image` e `sections.gallery: true`.
5. **Teste localmente**: Dê dois cliques em `index.html` para abrir a página no navegador e certifique-se de que tudo está perfeito.

### Galeria e depoimentos

Ambas as seções começam **desativadas** e com arrays vazios. A seção só aparece quando a respectiva opção é `true` **e** há ao menos um item completo. A galeria usa carrossel com rolagem por toque e botões em telas maiores.

```javascript
sections: { gallery: true, testimonials: false },
gallery: [{ label: "Sofá higienizado", image: "assets/img/sofa.webp" }],
testimonials: []
```

Insira apenas fotos e depoimentos reais com autorização de uso. A comparação antes/depois (`beforeAfter`) também começa vazia e permanece oculta até conter um par de imagens do mesmo atendimento com contexto confirmado.

### Preview e SEO de produção

- O HTML começa com `noindex, nofollow` e sem URL canônica. `deployment.environment` começa em `preview`, com `allowIndexing: false`.
- Para produção, configure `deployment.productionUrl` e `allowIndexing: true` **depois** de aprovar conteúdo e domínio. Atualize também no `index.html` o título, a descrição, Open Graph e `meta robots` para que estejam corretos no HTML inicial lido por buscadores e mensageiros; o JavaScript sozinho não substitui isso.
- Informe `seo.shareImage` apenas quando a imagem social realmente existir; o código monta a URL absoluta em produção.
- Configure `robots.txt`, `sitemap.xml`, redirecionamentos e cabeçalhos de acordo com o domínio e a hospedagem de cada cliente. Esses arquivos da J.E. não devem ser copiados com URLs da J.E.
- O `LocalBusiness` em JSON-LD só é incluído em produção com indexação habilitada. Revise cidade, telefone e área atendida antes de publicar.
- `analytics.trackContactClicks` começa em `false`. Quando ativado, registra `contact_click` no `dataLayer` para links de WhatsApp, telefone, Instagram e mapa. Configurar GTM/GA4 é uma etapa própria de cada cliente; o template não inclui ID da J.E.

---

## 🎨 Como Personalizar o Tema de Cores

Dentro de `config.js`, a chave `theme` permite alterar instantaneamente a paleta de cores do site:

```javascript
theme: {
  primary: "#0d2c54",     // Cor principal de cabeçalhos e seções escuras
  secondary: "#c81d25",   // Cor de botões e itens de conversão primários
  accent: "#ffbe0b",      // Cor de estrelas de avaliação e detalhes
  whatsapp: "#25d366"     // Cor do botão flutuante de WhatsApp
}
```

*Nota: Os efeitos de hover dos botões e as variações de cores mais claras/escuras são gerados automaticamente usando funções nativas do CSS (`color-mix`), garantindo uma transição visual perfeita sem configurações manuais adicionais.*

---

## 🗺️ Como Inserir o Google Maps Real

Para substituir o placeholder cinza do mapa pelo mapa de localização real da empresa:

1. Vá ao Google Maps e procure pelo endereço ou nome da empresa.
2. Clique em **Compartilhar** e selecione a aba **Incorporar um mapa**.
3. Copie o código HTML gerado (que começa com `<iframe...`).
4. Cole a URL do atributo `src` na chave `location.mapsEmbedUrl` do `config.js`:
   ```javascript
   location: { mapsEmbedUrl: 'https://www.google.com/maps/embed?...' }
   ```
5. Salve o arquivo. O `script.js` renderizará automaticamente o mapa real no lugar do placeholder.

---

## 🚀 Como Publicar na Vercel (Gratuitamente)

A Vercel é excelente para hospedar landing pages estáticas por ser rápida, segura e grátis.

### Opção 1: Via Vercel Dashboard (Sem Linha de Comando)
1. Coloque o seu projeto em um repositório no GitHub (ex: repositório privado ou público).
2. Acesse [vercel.com](https://vercel.com) e crie uma conta gratuita.
3. Clique em **Add New** > **Project**.
4. Conecte com o GitHub e selecione o repositório da landing page criada.
5. Deixe as configurações padrões (o framework será detectado como "Other" e o diretório de build vazio).
6. Clique em **Deploy**. O site estará no ar em poucos segundos!

### Opção 2: Via Vercel CLI (Direto do Terminal)
1. Instale a CLI da Vercel globalmente (se tiver o Node.js instalado):
   ```bash
   npm install -g vercel
   ```
2. Na raiz do projeto da landing page do cliente, digite:
   ```bash
   vercel
   ```
3. Siga os passos na tela para logar e criar o projeto.
4. Quando finalizar e o teste estiver correto, suba em produção com:
   ```bash
   vercel --prod
   ```

---

## 📋 Checklist Antes da Publicação

> [!WARNING]
> Galeria, depoimentos e comparativos começam vazios. Só ative os blocos com evidências reais e autorização de uso.

Realize este checklist completo antes de entregar o site para o cliente final:

- [ ] **Nome da Empresa**: Confirmar se o nome está escrito corretamente no `config.js`.
- [ ] **Telefone Comercial**: Ligar para o número do `config.js` para garantir que está ativo.
- [ ] **WhatsApp**: Clicar no link gerado e enviar mensagem de teste para confirmar se o número e o DDD estão corretos.
- [ ] **Cidade e Região**: Revisar os textos automáticos da área de cobertura.
- [ ] **Serviços**: Garantir que todos os serviços listados condizem com o escopo de atuação do cliente.
- [ ] **Imagens Reais**: Substituir todas as imagens de placeholder cinza por fotos reais enviadas pelo cliente.
- [ ] **Avaliações**: Ativar depoimentos apenas após receber textos reais e autorização para exibi-los.
- [ ] **Google Maps**: Inserir o iframe de localização real da empresa ou raio de atendimento.
- [ ] **SEO**: Revisar o título da página e a descrição de metatag para indexação no Google.
- [ ] **Responsividade**: Testar a abertura do site em computadores, tablets e smartphones de tamanhos variados.
- [ ] **Hospedagem**: Concluir o deploy na Vercel ou hospedagem correspondente.
