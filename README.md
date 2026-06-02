# Matheus Araujo Personal Trainer

Landing page desenvolvida para apresentar o trabalho do Matheus Araujo como personal trainer, com foco em conversao, autoridade e clareza para captar novos alunos.

## O que estamos fazendo

O projeto esta sendo construido como uma pagina premium para divulgar acompanhamento presencial e consultoria online. A proposta e deixar o visitante entender rapidamente quem e o Matheus, quais resultados ele entrega e qual plano combina melhor com sua rotina.

Principais areas trabalhadas:

- Hero com imagem do Matheus, chamada comercial, CTAs e indicadores de autoridade.
- Secao "Quem sou" com texto mais objetivo, diferenciais e chamada para evolucao.
- Secao "Resultados Reais do #TEAMMA" com 3 evolucoes, fotos de antes/depois, prova social e CTA.
- Secao "Meus Planos" organizada em Basico, Intermediario e Premium, com beneficios e valores sob consulta.
- Botao flutuante de WhatsApp para facilitar contato direto.

## Tecnologias

- React
- Vite
- Framer Motion
- CSS responsivo customizado

## Como rodar

Instale as dependencias:

```bash
npm install
```

Rode em ambiente de desenvolvimento:

```bash
npm run dev
```

Gere a versao de producao:

```bash
npm run build
```

Visualize o build localmente:

```bash
npm run preview
```

## Estrutura principal

- `src/components/sections/Hero.jsx`: primeira dobra da pagina.
- `src/components/sections/Sobre.jsx`: apresentacao do Matheus.
- `src/components/sections/Evolucao.jsx`: resultados e evolucoes reais.
- `src/components/sections/Planos.jsx`: planos de acompanhamento.
- `src/data/siteData.js`: textos e dados reutilizados nas secoes.
- `src/styles/global.css`: identidade visual e responsividade.

## Assets

As imagens ficam em `public/images`. A secao de evolucoes usa os arquivos `antes1.png`, `depois1.png`, `antes2.png`, `depois2.png`, `antes3.png` e `depois3.png`.
