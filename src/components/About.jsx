import aboutPhoto from "../assets/about-photo-placeholder.svg";

export default function About() {
  return (
    <section
      id="about"
      className="py-20"
      style={{
        backgroundColor: "var(--brand-amber)",
      }}
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        {/* IMAGEM */}
        <div
          className="overflow-hidden rounded-3xl shadow-xl"
          style={{
            backgroundColor: "#fff",
            border: "1px solid #f1f5f9",
          }}
        >
          <img
            src={aboutPhoto}
            alt="Ilustracao da professora"
            className="h-80 w-full object-cover"
          />
        </div>

        {/* TEXTO */}
        <div>
          <h2
            className="text-3xl font-bold"
            style={{ color: "var(--brand-primary)" }}
          >
            Sobre o curso
          </h2>

          <p className="mt-4 text-lg" style={{ color: "var(--brand-ink)" }}>
            A maior dificuldade em aprender um novo idioma é a fala. As minhas aulas focam em uma abordagem comunicativa, onde o principal objetivo é desenvolver sua comunicação real. 
          </p>

          <div className="mt-6 space-y-4">
            {[
              "Pratica guiada de fala em todas as aulas.",
              "Vocabulário útil para compreender nativos.",
              "Atividades adaptadas para seu desenvolvimento.",
              "Materiais autênticos para te preparar para situações reais.",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span
                  className="mt-2 h-2 w-2 rounded-full"
                  style={{
                    backgroundColor: "var(--brand-light-pink)",
                  }}
                />
                <p style={{ color: "var(--brand-ink)" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
