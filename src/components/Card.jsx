import { getWhatsAppUrl, plans } from "../content/site";

export default function Card() {
  return (
    <section
      id="card"
      className="py-20"
      style={{ backgroundColor: "var(--brand-amber)" }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 text-center">
        {/* TÍTULO */}
        <h2
          className="text-3xl font-bold"
          style={{ color: "var(--brand-primary)" }}
        >
          Escolha seu plano
        </h2>

        <p className="mt-4 text-lg" style={{ color: "var(--brand-ink)" }}>
          Planos flexiveis para seu ritmo.
        </p>

        {/* CARDS */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => {
            const isFeatured = plan.featured;

            return (
              <article
                key={plan.name}
                className="relative rounded-2xl p-8 transition duration-300"
                style={{
                  backgroundColor: isFeatured
                    ? "var(--brand-light-pink)"
                    : "#fff",
                  border: isFeatured
                    ? "2px solid var(--brand-primary)"
                    : "1px solid #f1f5f9",
                  boxShadow: isFeatured
                    ? "0 0 25px rgba(251, 99, 118, 0.6), 0 20px 40px rgba(0,0,0,0.08)"
                    : "0 10px 30px rgba(0,0,0,0.05)",
                  transform: isFeatured ? "scale(1.05)" : "scale(1)",
                }}
              >
                {isFeatured && (
                  <div
                    style={{
                      position: "absolute",
                      inset: "-12px",
                      borderRadius: "20px",
                      background:
                        "radial-gradient(circle, rgba(251,99,118,0.4) 0%, rgba(251,99,118,0) 70%)",
                      filter: "blur(25px)",
                      zIndex: -1,
                    }}
                  />
                )}

                {/* BADGE */}
                {isFeatured && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-sm font-semibold"
                    style={{
                      backgroundColor: "var(--brand-primary)",
                      color: "#fff",
                    }}
                  >
                    Mais escolhido
                  </span>
                )}

                {/* NOME */}
                <h3
                  className="text-xl font-semibold"
                  style={{ color: "var(--brand-primary)" }}
                >
                  {plan.name}
                </h3>

                {/* PREÇO */}
                <p
                  className="mt-3 text-3xl font-bold"
                  style={{ color: "var(--brand-primary)" }}
                >
                  {plan.price}
                </p>

                {/* FEATURES */}
                <ul className="mt-6 space-y-3">
                  {plan.features.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3"
                      style={{ color: "var(--brand-ink)" }}
                    >
                      <span
                        className="mt-2 h-2 w-2 rounded-full"
                        style={{
                          backgroundColor: "var(--brand-primary)",
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* BOTÃO */}
                <a
                  href={getWhatsAppUrl(plan.message)}
                  className="mt-8 block rounded-full px-6 py-3 text-center font-semibold transition"
                  style={{
                    backgroundColor: isFeatured
                      ? "var(--brand-primary)"
                      : "var(--brand-light-pink)",
                    color: "#fff",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "var(--brand-primary)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = isFeatured
                      ? "var(--brand-primary)"
                      : "var(--brand-light-pink)")
                  }
                >
                  Escolher plano
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
