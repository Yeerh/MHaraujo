# Matheus Araújo Personal Trainer

Landing page desenvolvida para apresentar o trabalho do Matheus Araújo como personal trainer, com foco em conversão, autoridade e clareza para captar novos alunos.

## O que estamos fazendo

O projeto está sendo construído como uma página premium para divulgar o acompanhamento presencial e a consultoria online. A proposta é permitir que o visitante entenda rapidamente quem é o Matheus, quais resultados ele entrega e qual plano combina melhor com a sua rotina.

Principais áreas trabalhadas:

- Hero com imagem do Matheus, chamada comercial, CTAs e indicadores de autoridade.
- Seção "Quem sou" com texto mais objetivo, diferenciais e chamada para evolução.
- Seção "Resultados Reais do #TEAMMA" com 3 evoluções, fotos de antes/depois, prova social e CTA.
- Seção "Meus Planos" organizada em Básico, Intermediário e Premium, com benefícios e valores sob consulta.
- Botão flutuante de WhatsApp para facilitar o contato direto.

## Tecnologias

- React
- Vite
- Framer Motion
- CSS responsivo customizado

## Como rodar

Instale as dependências:

```bash
npm install
```

Rode em ambiente de desenvolvimento:

```bash
npm run dev
```

Gere a versão de produção:

```bash
npm run build
```

Visualize o build localmente:

```bash
npm run preview
```

## Estrutura principal

- `src/components/sections/Hero.jsx`: primeira dobra da página.
- `src/components/sections/Sobre.jsx`: apresentação do Matheus.
- `src/components/sections/Evolucao.jsx`: resultados e evoluções reais.
- `src/components/sections/Planos.jsx`: planos de acompanhamento.
- `src/data/siteData.js`: textos e dados reutilizados nas seções.
- `src/styles/global.css`: identidade visual e responsividade.

## Assets

As imagens ficam em `public/images`. A seção de evoluções usa os arquivos `antes1.png`, `depois1.png`, `antes2.png`, `depois2.png`, `antes3.png` e `depois3.png`.
