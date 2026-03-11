"use client";

import { MapPin, Mail, Phone, Instagram, Linkedin } from "lucide-react";

const footerLinks = [
  { label: "Início", href: "#hero" },
  { label: "Serviços", href: "#solucao" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#cta" },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/pimentamidias", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/pimentamidias", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#hero" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#E63946] to-[#C1121F] flex items-center justify-center font-bold text-white text-sm">
                PM
              </div>
              <span className="font-heading font-bold text-lg text-white tracking-tight">
                Pimenta<span className="text-[#E63946]">Mídias</span>
              </span>
            </a>
            <p className="text-sm text-[#888888] leading-relaxed max-w-xs">
              Tráfego pago e automação de WhatsApp com IA para escalar
              negócios de verdade.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#888888] hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5521988514602"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#888888] hover:text-white transition-colors"
                >
                  <Phone size={14} className="text-[#E63946]" />
                  (21) 98851-4602
                </a>
              </li>
              <li>
                <a
                  href="mailto:pmtjoao3@gmail.com"
                  className="flex items-center gap-2 text-sm text-[#888888] hover:text-white transition-colors"
                >
                  <Mail size={14} className="text-[#E63946]" />
                  pmtjoao3@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-[#888888]">
                <MapPin size={14} className="text-[#E63946] mt-0.5 flex-shrink-0" />
                Rio de Janeiro, RJ
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              Redes Sociais
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-[#888888] hover:text-[#E63946] hover:border-[#E63946]/30 hover:bg-[#E63946]/10 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#666666]">
            © {new Date().getFullYear()} Pimenta Mídias. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-[#444444]">
            Feito com ❤️ no Rio de Janeiro
          </p>
        </div>
      </div>
    </footer>
  );
}
