import aboutPhoto from "../assets/about-photo-placeholder.svg";
import teacherPhoto from "../assets/teacher-photo.jpeg";

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
            src={teacherPhoto}
            alt="Ilustracao da professora"
            className="h-100 w-full object-cover"
          />
        </div>

        {/* TEXTO */}
        <div>
          <h2
            className="text-3xl font-bold"
            style={{ color: "var(--brand-primary)" }}
          >
            Your teacher
          </h2>

          <p className="mt-4 text-lg" style={{ color: "var(--brand-ink)" }}>
            Aprendi inglês sozinha e desde 2017 atuo como professora, começando
            em uma escola online no Vietnã. Sou formada em Letras, tenho
            certificado TEFL e já ensinei crianças e adultos de diferentes
            nacionalidades. Após 7 anos como freelancer, investi em cursos e
            materiais para abrir meu próprio negócio de ensino de inglês e hoje
            tenho mais de 10 anos de experiência dando aulas de inglês online.
            Nas minhas aulas você encontra:
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
