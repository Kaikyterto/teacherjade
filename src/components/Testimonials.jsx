import { useEffect, useRef, useState } from "react";
import { testimonialTexts, testimonialVideos } from "../content/site";

function toEmbedUrl(url) {
  if (!url) return "";

  if (url.includes("instagram.com/reel/")) {
    const cleanUrl = url.split("?")[0].replace(/\/$/, "");
    return `${cleanUrl}/embed/?hidecaption=1`;
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

function isDirectVideoUrl(url) {
  return typeof url === "string" && /\.(mp4|webm|ogg)(\?|#|$)/i.test(url);
}

export default function Testimonials() {
  const [activeTextIndex, setActiveTextIndex] = useState(0);
  const videoRef = useRef(null);
  const featuredVideo = testimonialVideos[0];
  const directVideoSource = featuredVideo?.directVideoUrl;
  const embedVideoSource = featuredVideo?.videoUrl;
  const isInstagramEmbed =
    typeof embedVideoSource === "string" &&
    embedVideoSource.includes("instagram.com/");

  useEffect(() => {
    if (testimonialTexts.length <= 1) return undefined;

    const intervalId = setInterval(() => {
      setActiveTextIndex((current) => (current + 1) % testimonialTexts.length);
    }, 4500);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (!isDirectVideoUrl(directVideoSource) || !videoRef.current) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!videoRef.current) return;

          if (entry.isIntersecting && entry.intersectionRatio >= 0.65) {
            videoRef.current.play().catch(() => {});
          }
        });
      },
      { threshold: [0.25, 0.65, 0.9] },
    );

    observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, [directVideoSource]);

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
          {featuredVideo && (
            <div className="mx-auto mt-6 w-full max-w-105">
              <div
                className="relative overflow-hidden rounded-3xl"
                style={{
                  border: "8px solid rgba(251,99,118,0.28)",
                  boxShadow: "0 6px 16px rgba(17,24,39,0.08)",
                  backgroundColor: "#111827",
                  aspectRatio: "9 / 16",
                }}
              >
                {isDirectVideoUrl(directVideoSource) ? (
                  <video
                    ref={videoRef}
                    className="block h-full w-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    muted
                    onMouseEnter={() => {
                      videoRef.current?.play().catch(() => {});
                    }}
                  >
                    <source src={directVideoSource} type="video/mp4" />
                    Seu navegador não suporta reprodução de vídeo.
                  </video>
                ) : (
                  <>
                    <iframe
                      className="w-full"
                      src={toEmbedUrl(embedVideoSource)}
                      title={`Depoimento de ${featuredVideo.name}`}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      style={
                        isInstagramEmbed
                          ? {
                              border: 0,
                              position: "absolute",
                              left: "50%",
                              top: "50%",
                              width: "118%",
                              height: "118%",
                              transform: "translate(-50%, -50%)",
                            }
                          : {
                              border: 0,
                              height: "100%",
                            }
                      }
                    />
                    {isInstagramEmbed && (
                      <>
                        <div
                          aria-hidden="true"
                          style={{
                            position: "absolute",
                            insetInline: 0,
                            top: 0,
                            height: "20px",
                            backgroundColor: "#111827",
                            pointerEvents: "none",
                          }}
                        />
                        <div
                          aria-hidden="true"
                          style={{
                            position: "absolute",
                            insetInline: 0,
                            bottom: 0,
                            height: "74px",
                            backgroundColor: "#111827",
                            pointerEvents: "none",
                          }}
                        />
                      </>
                    )}
                  </>
                )}
              </div>
              <div className="p-5">
                <p
                  className="text-lg font-semibold"
                  style={{ color: "var(--brand-primary)" }}
                >
                  {featuredVideo.name}
                </p>
                <p className="mt-1" style={{ color: "var(--brand-ink)" }}>
                  {featuredVideo.goal}
                </p>
              </div>
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
