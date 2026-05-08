import { contactLinks, getWhatsAppUrl, siteContent } from "../content/site";

function SocialIcon({ label }) {
  if (label === "LinkedIn") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="currentColor"
      >
        <path d="M4.98 3.5C4.98 4.88 3.89 6 2.48 6S0 4.88 0 3.5 1.09 1 2.48 1s2.5 1.12 2.5 2.5ZM.23 8.49h4.5V23h-4.5V8.49ZM8.24 8.49h4.31v1.98h.06c.6-1.13 2.06-2.32 4.24-2.32 4.54 0 5.38 2.99 5.38 6.88V23h-4.49v-7.98c0-1.9-.03-4.34-2.64-4.34-2.64 0-3.05 2.06-3.05 4.2V23H8.24V8.49Z" />
      </svg>
    );
  }

  if (label === "Instagram") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return null;
}

export default function Hero() {
  const scheduleLink = getWhatsAppUrl("Olá! Quero agendar uma conversa.");

  return (
    <section
      id="hero"
      className="relative overflow-hidden py-24"
      style={{
        background:
          "radial-gradient(circle at 20% 0%, #fff1f2 0%, #fffdf8 40%, #ffffff 100%)",
      }}
    >
      {/* ELEMENTOS VISUAIS DE FUNDO (SVG) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <svg
          className="absolute -top-[10%] -right-[5%] w-[50%] h-[120%] opacity-20"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Círculo Grande */}
          <circle cx="300" cy="100" r="150" fill="var(--brand-light-pink)" />

          {/* Círculo Menor */}
          <circle cx="100" cy="350" r="50" fill="var(--brand-primary)" />
        </svg>

        {/* Outra "bola" no canto inferior esquerdo para equilíbrio */}
        <div
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: "var(--brand-primary)" }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        {/* TEXTO */}
        <div>
          <div className="flex items-center gap-2 text-sm font-medium text-zinc-500">
            <span>Me acompanhe</span>
            <div className="flex items-center gap-2">
              {contactLinks
                .filter((link) => link.label !== "Formulário de triagem")
                .map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition hover:-translate-y-0.5 hover:border-rose-300 hover:text-rose-600"
                    aria-label={link.label}
                    title={link.label}
                  >
                    <SocialIcon label={link.label} />
                  </a>
                ))}
            </div>
          </div>

          <h1
            className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl"
            style={{
              color: "var(--brand-primary)",
            }}
          >
            Domine o inglês em 2026 com método prático e acompanhamento real
          </h1>

          <p className="mt-6 text-lg" style={{ color: "var(--brand-ink)" }}>
            Aulas particulares e em dupla com foco em conversa real, feedback
            prático, correção estratégica e evolução visível semana a semana.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {/* BOTÃO PRINCIPAL */}
            <a
              href={scheduleLink}
              className="rounded-full px-6 py-3 font-semibold transition hover:scale-105"
              style={{
                backgroundColor: "var(--brand-light-pink)",
                color: "#fff",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--brand-primary)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "var(--brand-light-pink)")
              }
            >
              Agendar conversa
            </a>

            <a
              href={siteContent.triageFormUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-6 py-3 font-semibold transition hover:scale-105"
              style={{
                border: "2px solid var(--brand-primary)",
                color: "var(--brand-primary)",
              }}
            >
              Fale sobre você
            </a>

            {/* BOTÃO SECUNDÁRIO */}
            <a
              href="#card"
              className="rounded-full px-6 py-3 font-semibold transition hover:bg-pink-50"
              style={{
                border: "2px solid var(--brand-light-pink)",
                color: "var(--brand-light-pink)",
              }}
            >
              Ver planos
            </a>
          </div>
        </div>

        {/* CARD */}

        <div className="flex flex-col ">
          <div
            className="z-20 rounded-3xl p-8 shadow-xl mb-3 space-y-4"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.9)", // Leve transparência para o vidro
              backdropFilter: "blur(10px)",
              border: "2px solid var(--brand-light-pink)",
            }}
          >
            <h1
              className="text-xl font-extrabold p-auto"
              style={{
                color: "var(--brand-primary)",
              }}
            >
              Vagas abertas
            </h1>
            <p>
              Turma beginner: aprenda inglês do zero Início dia 21 de maio 3
              vagas disponíveis Aulas às quintas-feiras às 19h
            </p>
          </div>
          <div
            className="relative z-10 rounded-3xl p-8 shadow-xl"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.9)", // Leve transparência para o vidro
              backdropFilter: "blur(10px)",
              border: "1px solid #f3f4f6",
            }}
          >
            <h2
              className="text-xl font-bold"
              style={{ color: "var(--brand-primary)" }}
            >
              Método direto ao ponto
            </h2>

            <ul className="mt-6 space-y-4">
              {[
                "1 aula de diagnóstico e trilha personalizada.",
                "Prática de fala desde a primeira semana.",
                "Material adaptado ao seu objetivo real.",
                "Correção com foco em fluidez e confiança.",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                  style={{ color: "var(--brand-ink)" }}
                >
                  <span
                    className="mt-1 h-2 w-2 rounded-full shrink-0"
                    style={{ backgroundColor: "var(--brand-light-pink)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
