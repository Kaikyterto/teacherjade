import { useEffect, useState } from "react";
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

function isInstagramUrl(url) {
  return typeof url === "string" && url.includes("instagram.com/reel/");
}

export default function Testimonials() {
  const [activeTextIndex, setActiveTextIndex] = useState(0);
  const featuredInstagramVideo = testimonialVideos.find((item) =>
    isInstagramUrl(item.videoUrl),
  );

  useEffect(() => {
    if (testimonialTexts.length <= 1) return undefined;

    const intervalId = setInterval(() => {
      setActiveTextIndex((current) => (current + 1) % testimonialTexts.length);
    }, 4500);

    return () => clearInterval(intervalId);
  }, []);

  const goToNextText = () => {
    setActiveTextIndex((current) => (current + 1) % testimonialTexts.length);
  };

  const goToPrevText = () => {
    setActiveTextIndex((current) =>
      current === 0 ? testimonialTexts.length - 1 : current - 1,
    );
  };

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
            Resultados reais de quem já evoluiu com método prático e
            acompanhamento próximo.
          </p>
        </div>

        <div className="mt-12">
          {featuredInstagramVideo && (
            <div className="mx-auto mt-6 w-full max-w-md">
              <article
                className="overflow-hidden rounded-3xl"
                style={{
                  border: "1px solid #fce7f3",
                  boxShadow: "0 18px 45px rgba(251,99,118,0.18)",
                  backgroundColor: "#fff",
                }}
              >
                <div
                  className="w-full overflow-hidden"
                  style={{
                    aspectRatio: "9 / 16",
                    maxWidth: "420px",
                    margin: "0 auto",
                    backgroundColor: "#111827",
                  }}
                >
                  <iframe
                    className="h-full w-full"
                    src={toEmbedUrl(featuredInstagramVideo.videoUrl)}
                    title={`Depoimento de ${featuredInstagramVideo.name}`}
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
                    {featuredInstagramVideo.name}
                  </p>
                  <p className="mt-1" style={{ color: "var(--brand-ink)" }}>
                    {featuredInstagramVideo.goal}
                  </p>
                </div>
              </article>
            </div>
          )}
        </div>

        <div className="mt-14">
          <div className="mt-6">
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{
                border: "1px solid #f1f5f9",
                boxShadow: "0 10px 24px rgba(0,0,0,0.04)",
              }}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeTextIndex * 100}%)` }}
              >
                {testimonialTexts.map((item) => (
                  <article
                    key={`${item.name}-${item.role}`}
                    className="min-w-full p-6 md:p-8"
                    style={{ backgroundColor: "var(--brand-amber)" }}
                  >
                    <p
                      className="text-lg leading-relaxed md:text-xl"
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

            {testimonialTexts.length > 1 && (
              <div className="mt-5 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={goToPrevText}
                  className="rounded-full px-4 py-2 text-sm font-semibold transition"
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    color: "var(--brand-primary)",
                  }}
                >
                  Anterior
                </button>

                <div className="flex items-center gap-2">
                  {testimonialTexts.map((item, index) => (
                    <button
                      key={`${item.name}-dot`}
                      type="button"
                      onClick={() => setActiveTextIndex(index)}
                      aria-label={`Ir para depoimento ${index + 1}`}
                      className="h-2.5 w-2.5 rounded-full"
                      style={{
                        backgroundColor:
                          index === activeTextIndex
                            ? "var(--brand-light-pink)"
                            : "#d1d5db",
                      }}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={goToNextText}
                  className="rounded-full px-4 py-2 text-sm font-semibold transition"
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    color: "var(--brand-primary)",
                  }}
                >
                  Próximo
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
