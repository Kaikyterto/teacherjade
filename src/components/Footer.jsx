import logo from "../assets/logo-jade.svg";
import { contactLinks, siteContent } from "../content/site";

function SocialIcon({ label }) {
  if (label === "LinkedIn") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4 shrink-0"
        fill="currentColor"
      >
        <path d="M4.98 3.5C4.98 4.88 3.89 6 2.48 6S0 4.88 0 3.5 1.09 1 2.48 1s2.5 1.12 2.5 2.5ZM.23 8.49h4.5V23h-4.5V8.49ZM8.24 8.49h4.31v1.98h.06c.6-1.13 2.06-2.32 4.24-2.32 4.54 0 5.38 2.99 5.38 6.88V23h-4.49v-7.98c0-1.9-.03-4.34-2.64-4.34-2.64 0-3.05 2.06-3.05 4.2V23H8.24V8.49Z" />
      </svg>
    );
  }

  if (label === "Instagram") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return null;
}

export default function Footer() {
  return (
    <footer id="footer" className="bg-zinc-900 text-zinc-300">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 md:grid-cols-2 md:items-center">
        <div>
          <img src={logo} alt={siteContent.brandName} className="h-10 w-auto" />
          <h3 className="mt-3 text-2xl font-bold text-white">
            {siteContent.brandName}
          </h3>
          <p className="mt-3 text-sm text-zinc-400">
            Aprenda inglês com um método claro, prático e focado em resultado
            real.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white">Contato</h4>
          <p className="mt-2 text-sm">WhatsApp: {siteContent.phoneDisplay}</p>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 transition hover:border-rose-400 hover:text-white"
              >
                <SocialIcon label={link.label} />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-700 py-4 text-center text-sm text-zinc-500">
        <p>© 2026 {siteContent.brandName}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
