import logo from "../assets/logo-jade.svg";
import { siteContent } from "../content/site";

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
        </div>
      </div>

      <div className="border-t border-zinc-700 py-4 text-center text-sm text-zinc-500">
        <p>© 2026 {siteContent.brandName}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
