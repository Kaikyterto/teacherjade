import { useState } from "react";
import Link from "./Link";
import logo from "../assets/logo-jade.svg";
import { getWhatsAppUrl, navItems, siteContent } from "../content/site";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const startNowLink = getWhatsAppUrl(siteContent.primaryCtaMessage);

  return (
    <nav
      className="sticky top-0 z-40 w-full backdrop-blur"
      style={{
        backgroundColor: "var(--brand-light-pink)",
        borderBottom: "1px solid var(--brand-primary)",
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        {/* LOGO */}
        <a href="#hero" className="flex items-center gap-3">
          <img src={logo} alt="Teacher Jade" className="h-9 w-auto" />
          <span
            className="text-xl font-black tracking-tight"
            style={{ color: "var(--brand-primary)" }}
          >
            {siteContent.brandName}
          </span>
        </a>

        {/* MENU DESKTOP */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-medium transition"
              style={{ color: "var(--brand-primary)" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseOut={(e) =>
                (e.currentTarget.style.color = "var(--brand-ink)")
              }
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href={startNowLink}
            className="rounded-full px-5 py-2 font-semibold transition"
            style={{
              backgroundColor: "var(--brand-primary)",
              color: "#fff",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--brand-rose)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--brand-primary)")
            }
          >
            {siteContent.primaryCtaLabel}
          </a>
        </div>

        {/* BOTÃO MOBILE */}
        <button
          type="button"
          className="rounded-lg p-2 md:hidden"
          style={{ color: "var(--brand-primary)" }}
          onClick={() => setIsOpen((value) => !value)}
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div
          className="px-6 py-4 md:hidden"
          style={{
            backgroundColor: "#fff",
            borderTop: "1px solid #f1f5f9",
          }}
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-medium"
                style={{ color: "var(--brand-ink)" }}
              >
                {item.label}
              </a>
            ))}

            <a
              href={startNowLink}
              className="text-center rounded-full px-5 py-3 font-semibold transition"
              style={{
                backgroundColor: "var(--brand-light-pink)",
                color: "#fff",
              }}
            >
              {siteContent.primaryCtaLabel}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
