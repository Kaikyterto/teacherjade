export const siteContent = {
  brandName: "Teacher Jade",
  subtitle: "English Coaching",
<<<<<<< HEAD
  email: "jadelfernandes@yahoo.com.au",
  instagram:
    "https://www.instagram.com/jade_lfernandes?igsh=MXZxY241dTA0ZmlqYQ==",
  phoneDisplay: "(19) 99160-6984",
  phoneDigits: "5519991606984",

  defaultMessage: "Olá! Vim pelo site e quero saber mais sobre as aulas.",
  primaryCtaLabel: "Comecar agora",
  primaryCtaMessage: "Olá! Vim pelo site e quero começar as aulas.",
=======
  email: "contato@teacherjade.com",
  phoneDisplay: "(45) 99817-2267",
  phoneDigits: "5545998172267",
  defaultMessage: "Olá! Quero saber mais sobre as aulas.",
  primaryCtaLabel: "Começar agora",
  primaryCtaMessage: "Olá! Quero começar as aulas.",
>>>>>>> 750f7726976e38d6018fb0b28461558df909dd50
};

export function getWhatsAppUrl(
  message = siteContent.defaultMessage,
  source = ""
) {
  const finalMessage = source ? `${message} (${source})` : message;

  return `https://wa.me/${siteContent.phoneDigits}?text=${encodeURIComponent(
    finalMessage
  )}`;
}

export const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Depoimentos", href: "#testimonials" },
  { label: "Planos", href: "#card" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#footer" },
];

export const testimonialVideos = [
  {
<<<<<<< HEAD
    name: "Grupo (4+ pessoas)",
    price: "R$ 249,99 / mês",
    features: ["4 aulas por mês", "Aulas em grupo", "Mais acessível"],
    message:
      "Olá! Vim pelo site e tenho interesse no plano em grupo (4 aulas).",
    source: "Grupo 4 aulas",
  },
  {
    name: "Grupo (4+ pessoas)",
    price: "R$ 349,99 / mês",
    features: ["8 aulas por mês", "Aulas em grupo", "Maior frequência"],
    message:
      "Olá! Vim pelo site e tenho interesse no plano em grupo (8 aulas).",
    source: "Grupo 8 aulas",
  },

  {
    name: "Trio",
    price: "R$ 279,99 / mês",
    features: ["4 aulas por mês", "Turma reduzida", "Mais atenção"],
    message: "Olá! Vim pelo site e tenho interesse no plano trio (4 aulas).",
    source: "Trio 4 aulas",
  },
  {
    name: "Trio",
    price: "R$ 379,99 / mês",
    features: ["8 aulas por mês", "Turma reduzida", "Mais evolução"],
    message: "Olá! Vim pelo site e tenho interesse no plano trio (8 aulas).",
    source: "Trio 8 aulas",
    featured: true, // 🔥 destaque aqui (melhor custo-benefício)
  },

  {
    name: "VIP (Individual)",
    price: "R$ 449,99 / mês",
    features: ["4 aulas por mês", "Aulas individuais", "100% personalizado"],
    message: "Olá! Vim pelo site e tenho interesse no plano VIP (4 aulas).",
    source: "VIP 4 aulas",
  },
  {
    name: "VIP (Individual)",
    price: "R$ 649,99 / mês",
    features: ["8 aulas por mês", "Aulas individuais", "Evolução acelerada"],
    message: "Olá! Vim pelo site e tenho interesse no plano VIP (8 aulas).",
    source: "VIP 8 aulas",
=======
    name: "Ana Clara",
    goal: "Conversação para viagens",
    videoUrl:
      "https://www.instagram.com/reel/DFEQuzHSFXD/?igsh=MTFmN24yOW11NHVxYQ==",
  },
];

export const testimonialTexts = [
  {
    name: "Mariana Souza",
    role: "Analista de Marketing",
    quote:
      "Em poucas semanas eu já estava falando com mais segurança. O foco prático fez toda a diferença na minha rotina.",
  },
  {
    name: "Rafael Costa",
    role: "Desenvolvedor",
    quote:
      "Eu sempre travava para falar. Com as aulas, consegui evoluir na fluência e participei da minha primeira reunião em inglês sem medo.",
  },
  {
    name: "Patricia Lima",
    role: "Empreendedora",
    quote:
      "As aulas são objetivas e personalizadas. Hoje consigo atender clientes internacionais com muito mais confiança.",
  },
];

export const plans = [
  {
    name: "Dupla",
    packageOneClass: "12x de R$ 329,99",
    packageTwoClasses: "12x de R$ 599,99",
    message: "Olá! Quero saber mais sobre o plano Dupla.",
  },
  {
    name: "Trio",
    packageOneClass: "12x de R$ 279,99",
    packageTwoClasses: "12x de R$ 459,99",
    message: "Olá! Quero saber mais sobre o plano Trio.",
    featured: true,
  },
  {
    name: "Grupo (4 ou mais)",
    packageOneClass: "12x de R$ 249,99",
    packageTwoClasses: "12x de R$ 419,99",
    message: "Olá! Quero saber mais sobre o plano Grupo (4 ou mais).",
  },
  {
    name: "VIP",
    packageOneClass: "12x de R$ 449,99",
    packageTwoClasses: "12x de R$ 799,99",
    message: "Olá! Quero saber mais sobre o plano VIP.",
>>>>>>> 750f7726976e38d6018fb0b28461558df909dd50
  },
];

export const faqData = [
  {
    question: "Preciso saber inglês para começar?",
    answer:
      "Não. O curso atende desde iniciante até avançado, sempre com conteúdo adaptado.",
  },
  {
    question: "Posso remarcar a aula?",
    answer:
      "Sim. Você pode remarcar com antecedência, respeitando a disponibilidade de agenda.",
  },
  {
    question: "Quanto tempo para evoluir?",
    answer:
      "Depende da sua rotina e consistência. Com o plano correto, os resultados aparecem rápido.",
  },
];
