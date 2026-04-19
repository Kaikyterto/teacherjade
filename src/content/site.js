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
  { label: "Planos", href: "#card" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#footer" },
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
