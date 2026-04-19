import Link from "./Link";
import { getWhatsAppUrl } from "../content/site";

export default function Hero() {
  const scheduleLink = getWhatsAppUrl("Ola! Quero agendar uma conversa.");

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
                  className="mt-1 h-2 w-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "var(--brand-light-pink)" }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
