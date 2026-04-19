import { useState } from "react";
import { faqData } from "../content/site";

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="py-5"
      style={{
        borderBottom: "1px solid #f1f5f9",
      }}
    >
      <button
        type="button"
        className="flex w-full items-center justify-between text-left"
        onClick={() => setIsOpen((value) => !value)}
      >
        <h3
          className="text-lg font-semibold"
          style={{ color: "var(--brand-primary)" }}
        >
          {question}
        </h3>

        <span
          style={{
            color: "var(--brand-light-pink)",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <p className="mt-3" style={{ color: "var(--brand-ink)" }}>
          {answer}
        </p>
      )}
    </div>
  );
}

export default function Faq() {
  return (
    <section
      id="faq"
      className="py-20"
      style={{
        backgroundColor: "var(--brand-amber)",
      }}
    >
      <div className="mx-auto w-full max-w-4xl px-6">
        {/* TÍTULO */}
        <h2
          className="text-center text-3xl font-bold"
          style={{ color: "var(--brand-primary)" }}
        >
          Perguntas frequentes
        </h2>

        {/* CONTAINER */}
        <div
          className="mt-10 rounded-2xl px-6 py-2"
          style={{
            backgroundColor: "#fff",
            border: "1px solid #f1f5f9",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          }}
        >
          {faqData.map((item) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
