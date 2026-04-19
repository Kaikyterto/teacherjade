import Link from "./Link";
import { getWhatsAppUrl, plans } from "../content/site";

export default function Card() {
  return (
    <section id="card" className="bg-rose-100 py-20">
      <div className="mx-auto w-full max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold text-rose-900">Escolha seu plano</h2>
        <p className="mt-4 text-zinc-700">Planos flexiveis para seu ritmo.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-2xl p-8 text-left shadow-md ${
                plan.featured
                  ? "border-2 border-amber-400 bg-amber-100"
                  : "border border-rose-200 bg-white"
              }`}
            >
              <h3 className="text-xl font-semibold text-rose-900">
                {plan.name}
              </h3>
              <p className="mt-3 text-3xl font-bold text-rose-800">
                {plan.price}
              </p>
              <ul className="mt-5 space-y-2 text-zinc-700">
                {plan.features.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>

              <Link
                text="Escolher plano"
                href={getWhatsAppUrl(plan.message)}
                className="mt-8 text-center"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
