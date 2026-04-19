import { useState } from "react";
import { faqData } from "../content/site";

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-rose-200 py-5">
      <button
        type="button"
        className="flex w-full items-center justify-between text-left"
        onClick={() => setIsOpen((value) => !value)}
      >
        <h3 className="text-lg font-semibold text-rose-900">{question}</h3>
        <span className="text-rose-700">{isOpen ? "-" : "+"}</span>
      </button>

      {isOpen && <p className="mt-3 text-zinc-700">{answer}</p>}
    </div>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="bg-amber-50 py-20">
      <div className="mx-auto w-full max-w-4xl px-6">
        <h2 className="text-center text-3xl font-bold text-rose-900">
          Perguntas frequentes
        </h2>

        <div className="mt-10 rounded-2xl border border-rose-200 bg-white px-6 py-2">
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
