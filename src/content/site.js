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

export function getWhatsAppUrl(
  message = siteContent.defaultMessage,
  source = "",
) {
  const finalMessage = source ? `${message} (${source})` : message;

  return `https://wa.me/${siteContent.phoneDigits}?text=${encodeURIComponent(
    finalMessage,
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
    name: "Ana Clara",
    goal: "Conversação para viagens",
    videoUrl:
      "https://www.instagram.com/reel/DFEQuzHSFXD/?igsh=MTFmN24yOW11NHVxYQ==",
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

export const testimonialTexts = [
  {
    name: "Elvis",
    role: "Aluno",
    quote:
      "Uma aula muito produtiva com uma excelente profissional, ajuda quem esta comecando com uma aula muito dinamica.",
  },
  {
    name: "Marcio",
    role: "Aluno",
    quote:
      "Jade e uma excelente professora, ela e paciente, uma pessoa atenciosa, sua explicacao e clara e eficiente.",
  },
  {
    name: "Adriano",
    role: "Aluno",
    quote:
      "Ela e muito paciente e da aula da melhor maneira para alcancar seu objetivo. Estou gostando muito.",
  },
  {
    name: "Jacob",
    role: "Aluno",
    quote:
      "A Jade esta sendo fundamental para mim, tem me ajudado bastante com meu ingles. Ela e muito atenciosa e com muita paciencia, super indico.",
  },
  {
    name: "Bianca",
    role: "Aluna",
    quote:
      "Estou amando as aulas com a Professora Jade. Ela e muito atenciosa e estimula muito no speaking, dando seguranca e muita atencao. Estamos evoluindo muito a cada aula.",
  },
  {
    name: "Felipe",
    role: "Aluno",
    quote:
      "Jade e uma otima professora, tem paciencia e respeita o tempo de cada aluno. Estou vendo evolucao e a cada aula damos um passo, step by step.",
  },
  {
    name: "Vanessa",
    role: "Mae de aluno",
    quote:
      "Ela foi muito paciente com meu filho, manteve a aula muito descontraida deixando ele tranquilo na aula. Obrigada.",
  },
  {
    name: "Douglas",
    role: "Aluno",
    quote:
      "Excelente professora, muito tranquilo de prosseguir a aula, estou adorando.",
  },
];
