import { getWhatsAppUrl, plans } from "../content/site";

export default function Card() {
  // separa planos de 1x por semana (packageOneClass) e 2x por semana (packageTwoClasses)
  const planos1x = plans.map((p) => ({
    ...p,
    price: p.packageOneClass,
    features: ["1x por semana"],
  }));

  const planos2x = plans.map((p) => ({
    ...p,
    price: p.packageTwoClasses,
    features: ["2x por semana"],
  }));

  const renderCards = (lista) =>
    lista.map((plan, index) => {
      const isFeatured = plan.featured;

      return (
        <article
          key={plan.name + index}
          className="relative rounded-2xl p-8 transition duration-300"
          style={{
            backgroundColor: isFeatured ? "var(--brand-light-pink)" : "#fff",
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
              (e.currentTarget.style.backgroundColor = "var(--brand-primary)")
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
    });

  return (
    <section
      id="card"
      className="py-20"
      style={{ backgroundColor: "var(--brand-amber)" }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 text-center">
        <h2
          className="text-3xl font-bold"
          style={{ color: "var(--brand-primary)" }}
        >
          Escolha seu plano
        </h2>

        <p className="mt-4 text-lg" style={{ color: "var(--brand-ink)" }}>
          Cada plano com valores para pacote anual de 1x ou 2x na semana.
        </p>

        {/* SEÇÃO 1x por semana */}
        <h3 className="mt-12 text-2xl font-semibold text-gray-700">
          1x por semana
        </h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {renderCards(planos1x)}
        </div>

        {/* SEÇÃO 2x por semana */}
        <h3 className="mt-16 text-2xl font-semibold text-gray-700">
          2x por semana
        </h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {renderCards(planos2x)}
        </div>
      </div>
    </section>
  );
}
