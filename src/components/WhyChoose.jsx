export default function WhyChoose() {
  const goalTracks = [
    {
      title: "General English",
      desc: "Para quem busca a fluência, mas sem um propósito específico.",
    },
    {
      title: "Business English",
      desc: "Para quem precisa se comunicar em situações de trabalho.",
    },
    {
      title: "Travel English",
      desc: "Para quem está de viagem marcada.",
    },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: "#ffffff" }}>
      <div className="mx-auto w-full max-w-6xl px-6 text-center">
        <h2
          className="text-3xl font-bold"
          style={{ color: "var(--brand-primary)" }}
        >
          Material adaptado ao seu objetivo
        </h2>

        <p
          className="mx-auto mt-4 max-w-2xl text-lg"
          style={{ color: "var(--brand-ink)" }}
        >
          Trilhas direcionadas para acelerar sua evolução no inglês de acordo
          com o seu momento.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {goalTracks.map((item) => (
            <article
              key={item.title}
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

              <div
                className="mt-6 h-1 w-12 rounded-full"
                style={{
                  backgroundColor: "var(--brand-primary)",
                }}
              />
            </article>
          ))}
        </div>
        <div
          className="mx-auto mt-10 max-w-3xl rounded-2xl p-8 transition duration-300"
          style={{
            backgroundColor: "var(--brand-light-pink)",
            border: "1px solid #f1f5f9",
            boxShadow: "0 0 20px rgba(251,99,118,0.25), 0 10px 30px rgba(0,0,0,0.05)",
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
          <h2 className="text-xl font-bold text-left" style={{ color: "var(--brand-primary)" }}>
            Método direto ao ponto
          </h2>

          <ul className="mt-6 space-y-4 text-left" style={{ color: "var(--brand-ink)" }}>
            {[
              "1 aula de diagnóstico e trilha personalizada.",
              "Prática de fala desde a primeira semana.",
              "Material adaptado ao seu objetivo real.",
              "Correção com foco em fluidez e confiança.",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span
                  className="mt-1 h-2 w-2 rounded-full shrink-0"
                  style={{ backgroundColor: "var(--brand-primary)" }}
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
