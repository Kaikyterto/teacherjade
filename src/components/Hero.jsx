import fundoImage from "../assets/fundo.jpg";
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
  const openClasses = [
    {
      schedule: "Segunda feira às 18h:",
      level: "Pré-intermediário",
      seats: "3 vagas",
    },
    {
      schedule: "Segunda feira às 20h:",
      level: "Iniciante",
      seats: "Última vaga",
    },
    {
      schedule: "Quinta feira às 18h:",
      level: "Teens (iniciante)",
      seats: "Duas vagas",
    },
    {
      schedule: "Quinta feira às 19h:",
      level: "Iniciante",
      seats: "Turma nova!",
    },
  ];

  return (
    <section
      id="hero"
      className="relative overflow-hidden py-24"
      style={{
        backgroundImage: `linear-gradient(rgba(1, 17, 57, 0.66), rgba(1, 17, 57, 0.66)), radial-gradient(circle at 20% 0%, rgba(255, 241, 242, 0.28) 0%, rgba(255, 253, 248, 0.16) 40%, rgba(255, 255, 255, 0.04) 100%), url(${fundoImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* ELEMENTOS VISUAIS DE FUNDO (SVG) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[#011139]/18" />
        <svg
          className="absolute -top-[10%] -right-[5%] h-[120%] w-[50%] opacity-10"
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
          className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: "var(--brand-primary)" }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        {/* TEXTO */}
        <div>
          <div className="flex items-center gap-2 text-sm font-medium text-white/85">
            <span>Me acompanhe</span>
            <div className="flex items-center gap-2">
              {contactLinks
                .filter(
                  (link) =>
                    link.label === "LinkedIn" || link.label === "Instagram"
                )
                .map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/35 bg-white/10 text-white transition hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/20 hover:text-white"
                    aria-label={link.label}
                    title={link.label}
                  >
                    <SocialIcon label={link.label} />
                  </a>
                ))}
            </div>
          </div>

          <h1
            className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-5xl"
            style={{
              textShadow: "0 2px 18px rgba(1, 17, 57, 0.45)",
            }}
          >
            Domine o inglês em 2026 com método prático e acompanhamento real
          </h1>

          <p
            className="mt-6 text-lg text-white/90"
            style={{ textShadow: "0 2px 12px rgba(1, 17, 57, 0.35)" }}
          >
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
                backgroundColor: "rgba(255, 255, 255, 0.92)",
                border: "2px solid rgba(255, 255, 255, 0.95)",
                color: "var(--brand-primary)",
              }}
            >
              Matricule-se
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

        <div className="flex flex-col">
          <div
            className="relative z-20 mb-3 max-w-85 rounded-[28px] p-2"
            style={{ marginLeft: "auto" }}
          >
            <h2 className="attention-zoom relative text-left text-2xl font-extrabold tracking-tight text-[#f7efc7] drop-shadow-[0_2px_10px_rgba(1,17,57,0.8)]">
              Vagas abertas
            </h2>

            <div className="relative mt-6 space-y-4 text-[#f7efc7] drop-shadow-[0_2px_8px_rgba(1,17,57,0.85)]">
              {openClasses.map((item) => (
                <div key={item.schedule} className="space-y-0.5">
                  <p className="inline-block rounded-full border-2 border-(--brand-light-pink) bg-(--brand-primary) px-3 py-1.5 text-lg font-extrabold leading-tight text-white shadow-[0_6px_16px_rgba(251,99,118,0.28)] ring-1 ring-[rgba(1,17,57,0.22)]">
                    {item.schedule}
                  </p>
                  <p className="inline-block rounded-full border-2 border-(--brand-light-pink) bg-(--brand-primary) px-3 py-1.5 text-lg font-extrabold leading-tight text-white shadow-[0_6px_16px_rgba(251,99,118,0.28)] ring-1 ring-[rgba(1,17,57,0.22)]">
                    {item.level}
                  </p>
                  <p className="inline-block rounded-full border-2 border-(--brand-light-pink) bg-(--brand-primary) px-3 py-1.5 text-lg font-semibold leading-tight text-white shadow-[0_6px_16px_rgba(251,99,118,0.28)] ring-1 ring-[rgba(1,17,57,0.22)]">
                    {item.seats}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Card moved to WhyChoose for better section alignment */}
        </div>
      </div>
    </section>
  );
}
