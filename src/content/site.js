import testimonialDouglasMp4 from "../assets/videos/testimonial-douglas.mp4";

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
    name: "Douglas",
    goal: "Aluno",
    directVideoUrl: testimonialDouglasMp4,
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
    question: "Eu não sei nada de inglês, vou conseguir acompanhar a turma?",
    answer:
      "Sim, as turmas beginner começam do zero, eu ensino desde cumprimentos, letras e números.",
  },
  {
    question: "Posso remarcar a aula?",
    answer:
      "Sim. Aula individual pode remarcar com pelo menos 24h de antecedência, aulas em grupo o aluno recebe a gravação da aula em caso de falta",
  },
  {
    question: "Quanto tempo pra eu ficar fluente?",
    answer:
      "Depende da sua dedicação. Tirando tempo todos os dias para estudar você vai perceber uma avanço bem rápido.",
  },
  {
    question: "Qual a duração das aulas?",
    answer: "As aulas tem duração de 1 hora.",
  },
  {
    question: "Tem material?",
    answer:
      "Sim, eu disponibilizo um material online interativo sem custo adicional.",
  },
  {
    question: "Individual é melhor do que em grupo?",
    answer:
      "Depende. Se você tem uma necessidade muito específica o Individual vai ser uma vantagem por ser 100% personalizado para a sua necessidade. Mas se o seu intuito for destravar a comunicação, eu tenho observado resultados melhores nas aulas em grupo, por conta da interação e do incentivo dos colegas.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Após a assinatura do contrato o pagamento é feito de forma mensal, via Pix, na data da sua preferência.",
  },
  {
    question: "Tem certificado?",
    answer:
      "Sim, emitimos certificado com validade em todo o território nacional.",
  },
  {
    question: "Emite nota fiscal?",
    answer: "Sim, emitimos nota fiscal caso seja necessário. ",
  },
  {
    question: "1 vez por semana não é muito pouco?",
    answer:
      "Meus alunos no geral tem pouco tempo para estudar, e eles tem tido resultados muito satisfatórios fazendo apenas uma aula por semana, como o caso do Douglas, que conseguiu destravar a fala em poucos meses, mesmo fazendo aula apenas 1 vez por semana, e sem estudar nada por fora.",
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
