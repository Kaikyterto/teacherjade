export default function WhyChoose() {
  return (
    <section className="bg-amber-50 py-20">
      <div className="mx-auto w-full max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold text-rose-900">
          Por que escolher este curso?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-700">
          Um processo claro para evoluir com consistencia, leveza e foco no que
          realmente importa para sua fluencia.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-rose-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-rose-800">
              Foco em conversa
            </h3>
            <p className="mt-3 text-zinc-700">
              Treino para situacoes reais desde o inicio, com repertorio util.
            </p>
          </article>

          <article className="rounded-2xl border border-rose-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-rose-800">
              Material pratico
            </h3>
            <p className="mt-3 text-zinc-700">
              Conteudo objetivo para vida pessoal, viagens e trabalho.
            </p>
          </article>

          <article className="rounded-2xl border border-rose-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-rose-800">
              Resultados rapidos
            </h3>
            <p className="mt-3 text-zinc-700">
              Metas semanais claras com revisoes constantes de desempenho.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
