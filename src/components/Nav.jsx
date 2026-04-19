import { useState } from "react";
import Link from "./Link";
import logo from "../assets/logo-jade.svg";
import { getWhatsAppUrl, navItems, siteContent } from "../content/site";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const startNowLink = getWhatsAppUrl(siteContent.primaryCtaMessage);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-rose-100 bg-rose-50/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-3">
          <img src={logo} alt="Teacher Jade" className="h-9 w-auto" />
          <span className="text-xl font-black tracking-tight brand-title">
            {siteContent.brandName}
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-medium text-rose-800 hover:text-rose-600"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Link text={siteContent.primaryCtaLabel} href={startNowLink} />
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-rose-800 md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-label="Abrir menu"
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

      {isOpen && (
        <div className="border-t border-rose-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-medium text-rose-800"
              >
                {item.label}
              </a>
            ))}
            <Link
              text={siteContent.primaryCtaLabel}
              href={startNowLink}
              className="text-center"
            />
          </div>
        </div>
      )}
    </nav>
  );
}
