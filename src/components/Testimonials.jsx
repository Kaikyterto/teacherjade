import { testimonialTexts, testimonialVideos } from "../content/site";

function toEmbedUrl(url) {
  if (!url) return "";

  if (url.includes("instagram.com/reel/")) {
    const cleanUrl = url.split("?")[0].replace(/\/$/, "");
    return `${cleanUrl}/embed`;
  }

  if (url.includes("youtube.com/watch")) {
    try {
      const parsed = new URL(url);
      const videoId = parsed.searchParams.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    } catch {
      return url;
    }
  }

  return url;
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="text-center">
          <h2
            className="text-3xl font-bold"
            style={{ color: "var(--brand-primary)" }}
          >
            Depoimentos de alunos
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-lg"
            style={{ color: "var(--brand-ink)" }}
          >
            Resultados reais de quem ja evoluiu com metodo pratico e
            acompanhamento proximo.
          </p>
        </div>

        <div className="mt-12">
          <h3
            className="text-2xl font-semibold"
            style={{ color: "var(--brand-primary)" }}
          >
            Videos
          </h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {testimonialVideos.map((item) => (
              <article
                key={`${item.name}-${item.videoUrl}`}
                className="overflow-hidden rounded-2xl"
                style={{
                  border: "1px solid #f1f5f9",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                  backgroundColor: "#fff",
                }}
              >
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src={toEmbedUrl(item.videoUrl)}
                    title={`Depoimento de ${item.name}`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="p-5">
                  <p
                    className="text-lg font-semibold"
                    style={{ color: "var(--brand-primary)" }}
                  >
                    {item.name}
                  </p>
                  <p className="mt-1" style={{ color: "var(--brand-ink)" }}>
                    {item.goal}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h3
            className="text-2xl font-semibold"
            style={{ color: "var(--brand-primary)" }}
          >
            Feedback em texto
          </h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {testimonialTexts.map((item) => (
              <article
                key={`${item.name}-${item.role}`}
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: "var(--brand-amber)",
                  border: "1px solid #f1f5f9",
                  boxShadow: "0 10px 24px rgba(0,0,0,0.04)",
                }}
              >
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "var(--brand-ink)" }}
                >
                  "{item.quote}"
                </p>
                <div
                  className="mt-6 h-px w-full"
                  style={{ backgroundColor: "#e5e7eb" }}
                />
                <p
                  className="mt-4 text-base font-semibold"
                  style={{ color: "var(--brand-primary)" }}
                >
                  {item.name}
                </p>
                <p
                  className="mt-1 text-sm"
                  style={{ color: "var(--brand-ink)" }}
                >
                  {item.role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
