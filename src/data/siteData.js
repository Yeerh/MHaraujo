export const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Evolução", href: "#evolucao" },
  { label: "Planos", href: "#planos" },
  { label: "Contato", href: "#contato" },
];

export const whatsappUrl = "https://wa.me/558183047273";

export const whatsappMessages = {
  evolucao:
    "Olá, Matheus! Quero começar minha evolução e gostaria de entender qual acompanhamento é mais indicado para o meu objetivo. Pode me orientar?",
  planos:
    "Olá, Matheus! Conheci os planos pelo seu site e gostaria da sua ajuda para escolher o acompanhamento mais adequado ao meu objetivo e à minha rotina. Pode me orientar?",
  contato:
    "Olá, Matheus! Encontrei seu site e gostaria de tirar algumas dúvidas sobre o acompanhamento personalizado. Podemos conversar?",
};

export const createWhatsAppUrl = (message) => `${whatsappUrl}?text=${encodeURIComponent(message)}`;

export const heroStats = [
  { value: "+800", label: "ALUNOS ATENDIDOS" },
  { value: "+8", label: "ANOS DE EXPERIÊNCIA" },
  { value: "ONLINE E PRESENCIAL", label: "ATENDIMENTO FLEXÍVEL" },
  { value: "5,0", label: "AVALIAÇÃO MÉDIA" },
];

export const sobreSection = {
  eyebrow: "QUEM SOU",
  titulo: ["MATHEUS ARAÚJO"],
  destaque: "",
  tag: "+800 ALUNOS ATENDIDOS",
  paragrafos: [
    "Sou Matheus Araújo, profissional de Educação Física e personal trainer, especialista em hipertrofia e emagrecimento, movido pela transformação de vidas por meio do treino.",
    "Há mais de 12 anos, o treinamento faz parte da minha rotina. Nos últimos 8 anos, transformei essa paixão em missão profissional: ajudar pessoas a evoluírem com método, estratégia e acompanhamento individualizado.",
    "Acredito que cada corpo tem uma história, uma rotina e um objetivo diferente. Por isso, minha consultoria é construída de forma personalizada, respeitando os limites, as necessidades e as metas de cada aluno.",
    "Meu trabalho vai além da estética. Ajudo pessoas a desenvolverem força, disciplina, confiança e uma relação mais saudável com o próprio corpo, dentro e fora da academia.",
  ],
  botao: "COMEÇAR MINHA EVOLUÇÃO",
};

export const resultados = [
  {
    nome: "Douglas",
    categoria: "PERDA DE PESO",
    resultado: "-50KG",
    descricao: "em 6 meses de acompanhamento",
    formato: "Acompanhamento presencial",
    prova: "Método, constância e progressão.",
    antes: "/images/antes1.png",
    depois: "/images/depois1.png",
  },
  {
    nome: "Dani",
    categoria: "EMAGRECIMENTO",
    resultado: "-45KG",
    descricao: "em 6 meses",
    formato: "Consultoria online",
    prova: "Resultado construído sem promessa de milagre.",
    antes: "/images/antes2.png",
    depois: "/images/depois2.png",
  },
  {
    nome: "Wander",
    categoria: "DEFINIÇÃO CORPORAL",
    resultado: "+16KG DE MASSA MUSCULAR",
    descricao: "em 5 meses de acompanhamento",
    formato: "Acompanhamento personalizado",
    prova: "Mudança real com acompanhamento.",
    antes: "/images/antes3.png",
    depois: "/images/depois3.png",
  },
];

export const planosSection = {
  eyebrow: "Planos",
  titulo: "Escolha o plano ideal para sua evolução",
  subtitulo: "Conheça o que cada acompanhamento oferece e encontre a melhor opção para a sua rotina.",
  ctaTexto: "Ainda em dúvida sobre qual plano se encaixa melhor na sua rotina?",
  ctaBotao: "Falar no WhatsApp",
};

export const planos = [
  {
    numero: "01",
    titulo: "Online Básico",
    selo: "",
    descricao: "Para quem quer começar com treino individualizado e acompanhamento constante.",
    interesse: "Entrada ideal para sair do zero com direção, suporte e um plano feito para a sua realidade.",
    precoLabel: "A partir de",
    precoValor: "R$ 200",
    precoPeriodo: "/mês",
    beneficios: [
      "Treino individualizado",
      "Chamada mensal",
      "Suporte 24h via WhatsApp",
      "Avaliação por fotos",
      "Feedback semanal",
      "Ajustes mensais",
    ],
    valores: [
      { periodo: "Mensal", valor: "R$ 200,00" },
      { periodo: "Trimestral", valor: "R$ 500,00" },
      { periodo: "Semestral", valor: "R$ 800,00" },
      { periodo: "Anual", valor: "R$ 1.300,00" },
    ],
    botao: "Quero conhecer o Básico",
    mensagemWhatsapp:
      "Olá, Matheus! Vi o Plano Online Básico no seu site e quero começar com um treino personalizado. Pode me explicar como funciona o acompanhamento e quais são os próximos passos?",
    destaque: "basic",
  },
  {
    numero: "02",
    titulo: "Online Intermediário",
    selo: "MAIS ESCOLHIDO",
    descricao: "Para quem quer treino e alimentação alinhados para acelerar os resultados.",
    interesse: "Combina treino e estratégia alimentar para acelerar a evolução com mais clareza no processo.",
    precoLabel: "A partir de",
    precoValor: "R$ 315",
    precoPeriodo: "/mês",
    beneficios: [
      "Tudo do Básico",
      "Plano alimentar personalizado",
      "Monitoramento da evolução",
      "Feedbacks semanais",
      "Ajustes mensais",
    ],
    valores: [
      { periodo: "Mensal", valor: "R$ 315,00" },
      { periodo: "Trimestral", valor: "R$ 700,00" },
      { periodo: "Semestral", valor: "R$ 1.120,00" },
      { periodo: "Anual", valor: "R$ 1.620,00" },
    ],
    botao: "Quero conhecer o Intermediário",
    mensagemWhatsapp:
      "Olá, Matheus! Vi o Plano Online Intermediário e tenho interesse em alinhar treino e alimentação para acelerar meus resultados. Pode me explicar como funciona o acompanhamento e quais são os próximos passos?",
    destaque: "popular",
  },
  {
    numero: "03",
    titulo: "Online Premium",
    selo: "",
    descricao: "Para quem busca um acompanhamento mais completo, com avaliações presenciais e ajustes mais precisos.",
    interesse: "Opção mais completa para quem quer uma leitura detalhada da evolução e um acompanhamento mais próximo.",
    precoLabel: "A partir de",
    precoValor: "R$ 409",
    precoPeriodo: "/mês",
    beneficios: [
      "Tudo do Intermediário",
      "Avaliação presencial mensal",
      "Bioimpedância",
      "Perimetria",
      "Dobras cutâneas",
      "Ajustes sempre que necessário",
    ],
    valores: [
      { periodo: "Mensal", valor: "R$ 409,00" },
      { periodo: "Trimestral", valor: "R$ 910,00" },
      { periodo: "Semestral", valor: "R$ 1.620,00" },
      { periodo: "Anual", valor: "R$ 2.100,00" },
    ],
    botao: "Quero conhecer o Premium",
    mensagemWhatsapp:
      "Olá, Matheus! Vi o Plano Online Premium e busco uma experiência mais completa, com avaliações presenciais e acompanhamento mais próximo. Pode me explicar como funciona e quais são os próximos passos?",
    destaque: "premium",
  },
];
