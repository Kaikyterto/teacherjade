import { getWhatsAppUrl, siteContent } from "../content/site";

export default function WhatsAppButton() {
  const link = getWhatsAppUrl(siteContent.defaultMessage);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
      <span className="absolute h-14 w-14 animate-ping rounded-full bg-emerald-400 opacity-75" />

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative rounded-full bg-emerald-500 p-4 text-white shadow-lg transition hover:scale-110 hover:bg-emerald-600"
        aria-label="Abrir conversa no WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12.04 2C6.52 2 2.03 6.49 2.03 12c0 1.99.52 3.93 1.52 5.65L2 22l4.47-1.47a9.95 9.95 0 0 0 5.57 1.47c5.52 0 10.01-4.49 10.01-10S17.56 2 12.04 2Zm0 18.18c-1.56 0-3.08-.42-4.42-1.22l-.32-.19-2.39.79.78-2.33-.2-.32A8.18 8.18 0 0 1 3.87 12c0-4.51 3.67-8.18 8.17-8.18 4.51 0 8.18 3.67 8.18 8.18 0 4.51-3.67 8.18-8.18 8.18Zm4.49-6.13c-.25-.13-1.49-.73-1.72-.81-.23-.09-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.56.06-.25-.13-1.06-.39-2.02-1.25-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.3.37-.45.12-.15.16-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.48-.41-.42-.57-.43l-.48-.01c-.17 0-.45.06-.69.32-.23.25-.89.87-.89 2.11s.91 2.44 1.03 2.61c.13.17 1.78 2.72 4.31 3.81.6.26 1.08.41 1.45.52.61.19 1.17.16 1.61.1.49-.07 1.49-.61 1.7-1.2.21-.59.21-1.1.15-1.2-.05-.1-.22-.16-.47-.29Z" />
        </svg>
      </a>
    </div>
  );
}
