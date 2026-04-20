export const siteContent = {
  brandName: "Teacher Jade",
  subtitle: "English Coaching",
  email: "jadelfernandes@yahoo.com.au",
  instagram:
    "https://www.instagram.com/jade_lfernandes?igsh=MXZxY241dTA0ZmlqYQ==",
  phoneDisplay: "(19) 99160-6984",
  phoneDigits: "5519991606984",

  defaultMessage: "Olá! Vim pelo site e quero saber mais sobre as aulas.",
  primaryCtaLabel: "Comecar agora",
  primaryCtaMessage: "Olá! Vim pelo site e quero começar as aulas.",
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
  { label: "Planos", href: "#card" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#footer" },
];

export const plans = [
  {
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
