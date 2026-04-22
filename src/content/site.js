export const siteContent = {
  brandName: "Teacher Jade",
  subtitle: "English Coaching",
  email: "contato@teacherjade.com",
  phoneDisplay: "(45) 99817-2267",
  phoneDigits: "5545998172267",
  defaultMessage: "Olá! Quero saber mais sobre as aulas.",
  primaryCtaLabel: "Começar agora",
  primaryCtaMessage: "Olá! Quero começar as aulas.",
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
