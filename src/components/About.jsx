import aboutPhoto from "../assets/about-photo-placeholder.svg";

export default function About() {
  return (
    <section id="about" className="bg-rose-100 py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div className="overflow-hidden rounded-3xl border border-rose-200 bg-white shadow-lg">
          <img
            src={aboutPhoto}
            alt="Ilustracao da professora"
            className="h-80 w-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-rose-900">Sobre o curso</h2>
          <p className="mt-4 text-zinc-700">
            O objetivo e fazer voce falar ingles com seguranca em situacoes
            reais. Cada aula e planejada para sua rotina e para os contextos em
            que voce realmente usa o idioma.
          </p>

          <div className="mt-6 space-y-3 text-zinc-700">
            <p>- Pratica guiada de fala em todas as aulas.</p>
            <p>- Vocabulario util para trabalho, viagens e dia a dia.</p>
            <p>- Feedback claro para acelerar sua evolucao.</p>
            <p>- Conteudo personalizado para o seu momento.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
