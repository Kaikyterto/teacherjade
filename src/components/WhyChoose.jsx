export default function WhyChoose() {
  return (
    <section className="py-20" style={{ backgroundColor: "#ffffff" }}>
      <div className="mx-auto w-full max-w-6xl px-6 text-center">
        {/* TÍTULO */}
        <h2
          className="text-3xl font-bold"
          style={{ color: "var(--brand-primary)" }}
        >
          Por que escolher este curso?
        </h2>

        <p
          className="mx-auto mt-4 max-w-2xl text-lg"
          style={{ color: "var(--brand-ink)" }}
        >
          Um processo claro para evoluir com consistencia, leveza e foco no que
          realmente importa para sua fluencia.
        </p>

        {/* CARDS */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Foco em conversa",
              desc: "Treino para situacoes reais desde o inicio, com repertorio util.",
            },
            {
              title: "Material pratico",
              desc: "Conteudo objetivo para vida pessoal, viagens e trabalho.",
            },
            {
              title: "Resultados rapidos",
              desc: "Metas semanais claras com revisoes constantes de desempenho.",
            },
          ].map((item, index) => (
            <article
              key={index}
              className="relative rounded-2xl p-8 transition duration-300"
              style={{
                backgroundColor: "var(--brand-light-pink)",
                border: "1px solid #f1f5f9",
                boxShadow:
                  "0 0 20px rgba(251,99,118,0.25), 0 10px 30px rgba(0,0,0,0.05)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(251,99,118,0.5), 0 20px 40px rgba(0,0,0,0.08)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(251,99,118,0.25), 0 10px 30px rgba(0,0,0,0.05)";
              }}
            >
              {/* ✨ AURA SUAVE */}
              <div
                style={{
                  position: "absolute",
                  inset: "-8px",
                  borderRadius: "20px",
                  background:
                    "radial-gradient(circle, rgba(251,99,118,0.25) 0%, rgba(251,99,118,0) 70%)",
                  filter: "blur(20px)",
                  zIndex: -1,
                }}
              />

              <h3
                className="text-xl font-semibold"
                style={{ color: "var(--brand-primary)" }}
              >
                {item.title}
              </h3>

              <p className="mt-3" style={{ color: "var(--brand-ink)" }}>
                {item.desc}
              </p>

              {/* detalhe visual */}
              <div
                className="mt-6 h-1 w-12 rounded-full"
                style={{
                  backgroundColor: "var(--brand-primary)",
                }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
