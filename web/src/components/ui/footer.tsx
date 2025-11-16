import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-gray-300 pt-12 pb-8 px-8 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
        {/* --- CONTACTOS --- */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Localizações & Contactos</h3>
          <p className="text-sm mb-4">Tem alguma pergunta?</p>
          <button className="px-5 py-2 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-500 transition-all shadow-md">
            Entrar em contacto
          </button>

          <div className="mt-6 space-y-2 text-sm text-gray-400">
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-orange-400" /> support@quickdesk.com
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-orange-400" /> +351 912 345 678
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-orange-400" /> DETI, Universidade de Aveiro, Portugal
            </p>
          </div>
        </div>

        {/* --- REDES SOCIAIS --- */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Redes sociais</h3>
          <p className="text-sm mb-4">
            Entre em contacto connosco através dos meios de comunicação social.
          </p>
          <div className="flex gap-4 mt-3">
            {[
              { Icon: Facebook, color: "#1877F2", link: "https://facebook.com" },
              { Icon: Instagram, color: "#E1306C", link: "https://instagram.com" },
              { Icon: Twitter, color: "#1DA1F2", link: "https://twitter.com" },
              { Icon: Youtube, color: "#FF0000", link: "https://youtube.com" },
              { Icon: Linkedin, color: "#0077B5", link: "https://linkedin.com" },
            ].map(({ Icon, color, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
              >
                <Icon style={{ color }} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* --- EMPRESA --- */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Empresa</h3>
          <ul className="text-sm space-y-2">
            <li className="hover:text-white transition-colors cursor-pointer">Sobre a QuickDesk</li>
            <li className="hover:text-white transition-colors cursor-pointer">Carreiras</li>
            <li className="hover:text-white transition-colors cursor-pointer">Parcerias</li>
            <li className="hover:text-white transition-colors cursor-pointer">Notícias & Imprensa</li>
            <li className="hover:text-white transition-colors cursor-pointer">Política de Privacidade</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} QuickDesk — All rights reserved.
      </div>
    </footer>
  )
}
