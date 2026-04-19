export const siteContent = {
  brandName: "Teacher Jade",
  subtitle: "English Coaching",
  email: "contato@teacherjade.com",
  phoneDisplay: "(45) 99817-2267",
  phoneDigits: "5545998172267",
  defaultMessage: "Ola! Quero saber mais sobre as aulas.",
  primaryCtaLabel: "Comecar agora",
  primaryCtaMessage: "Ola! Quero comecar as aulas.",
};

export function getWhatsAppUrl(message = siteContent.defaultMessage) {
  return `https://wa.me/${siteContent.phoneDigits}?text=${encodeURIComponent(message)}`;
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
    name: "Ana Clara",
    goal: "Conversacao para viagens",
    videoUrl:
      "https://www.instagram.com/reel/DFEQuzHSFXD/?igsh=MTFmN24yOW11NHVxYQ==",
  },
  {
    name: "Lucas Mendes",
    goal: "Ingles para entrevistas",
    videoUrl: "https://www.youtube.com/watch?v=09K79_bD6w0&pp=ygUEbG9maQ%3D%3D",
  },
];

export const testimonialTexts = [
  {
    name: "Mariana Souza",
    role: "Analista de Marketing",
    quote:
      "Em poucas semanas eu ja estava falando com mais seguranca. O foco pratico fez toda diferenca na minha rotina.",
  },
  {
    name: "Rafael Costa",
    role: "Desenvolvedor",
    quote:
      "Eu sempre travava para falar. Com as aulas, consegui evoluir na fluencia e participei da minha primeira reuniao em ingles sem medo.",
  },
  {
    name: "Patricia Lima",
    role: "Empreendedora",
    quote:
      "As aulas sao objetivas e personalizadas. Hoje consigo atender clientes internacionais com muito mais confianca.",
  },
];

export const plans = [
  {
    name: "Basico",
    price: "R$ 300 / mes",
    features: ["1 aula por semana", "Material base incluso"],
    message: "Ola! Quero o plano Basico.",
  },
  {
    name: "Intermediario",
    price: "R$ 540 / mes",
    features: ["2 aulas por semana", "Plano personalizado"],
    message: "Ola! Quero o plano Intermediario.",
    featured: true,
  },
  {
    name: "Premium",
    price: "R$ 765 / mes",
    features: ["3 aulas por semana", "Acompanhamento intensivo"],
    message: "Ola! Quero o plano Premium.",
  },
];

export const faqData = [
  {
    question: "Preciso saber ingles para comecar?",
    answer:
      "Nao. O curso atende desde iniciante ate avancado, sempre com conteudo adaptado.",
  },
  {
    question: "Posso remarcar aula?",
    answer:
      "Sim. Voce pode remarcar com antecedencia, respeitando a disponibilidade de agenda.",
  },
  {
    question: "Quanto tempo para evoluir?",
    answer:
      "Depende da sua rotina e consistencia. Com plano correto, os resultados aparecem rapido.",
  },
];
