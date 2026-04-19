import Link from "./Link";
import { getWhatsAppUrl } from "../content/site";

export default function Hero() {
  const scheduleLink = getWhatsAppUrl("Ola! Quero agendar uma conversa.");

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-rose-50 to-amber-50 py-24"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="inline-block rounded-full bg-rose-100 px-4 py-1 text-sm font-semibold text-rose-700">
            Ingles sem travas
          </p>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-rose-900 md:text-5xl">
            Domine o ingles em 2026 com metodo pratico e acompanhamento real
          </h1>

          <p className="mt-6 text-lg text-zinc-700">
            Aulas particulares e em dupla com foco em conversa real, feedback
            pratico, correcao estrategica e evolucao visivel semana a semana.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link text="Agendar conversa" href={scheduleLink} />
            <a
              href="#card"
              className="inline-block rounded-full border border-rose-300 px-5 py-3 font-semibold text-rose-800 transition hover:bg-rose-100"
            >
              Ver planos
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-rose-200 bg-white p-8 shadow-xl">
          <h2 className="text-xl font-bold text-rose-900">
            Metodo direto ao ponto
          </h2>
          <ul className="mt-6 space-y-4 text-zinc-700">
            <li>1 aula de diagnostico e trilha personalizada.</li>
            <li>Pratica de fala desde a primeira semana.</li>
            <li>Material adaptado ao seu objetivo real.</li>
            <li>Correcao com foco em fluidez e confianca.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
