"use client";

import { ArrowRight, MessageSquare, Calendar, Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const checkpoints = [
  "Diagnóstico gratuito do seu negócio",
  "Sem compromisso, sem pegadinha",
  "Plano personalizado em 30 minutos",
  "Resultados desde a primeira semana",
];

export default function CTA() {
  const ref = useScrollReveal();

  return (
    <section id="cta" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#E63946]/[0.06] rounded-full blur-[150px]" />
      </div>

      <div ref={ref} className="reveal relative z-10 max-w-4xl mx-auto px-5 sm:px-8">
        <div className="relative rounded-3xl bg-[#111111] border border-white/5 overflow-hidden">
          {/* Top accent bar */}
          <div className="h-1 bg-gradient-to-r from-[#E63946] via-[#FF6B6B] to-[#E63946]" />

          <div className="p-8 sm:p-12 md:p-16 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#E63946]/10 border border-[#E63946]/20 rounded-full mb-6">
              <Calendar size={14} className="text-[#E63946]" />
              <span className="text-xs text-[#E63946] font-semibold uppercase tracking-widest">
                Vamos Conversar
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Pronto para parar de
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E63946] to-[#FF6B6B]">
                perder clientes?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#888888] max-w-xl mx-auto mb-8">
              Agende uma reunião gratuita de 30 minutos e descubra como podemos
              escalar suas vendas com tráfego pago e automação inteligente.
            </p>

            {/* Checkpoints */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10">
              {checkpoints.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check size={16} className="text-[#E63946] flex-shrink-0" />
                  <span className="text-sm text-[#AAAAAA]">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5521988514602?text=Ol%C3%A1%2C%20quero%20agendar%20uma%20reuni%C3%A3o%20para%20conhecer%20a%20Pimenta%20M%C3%ADdias"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E63946] hover:bg-[#C1121F] text-white font-semibold rounded-xl transition-all duration-300 text-base hover:shadow-xl hover:shadow-[#E63946]/25 animate-pulse-glow"
              >
                Agendar Reunião Gratuita
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="https://wa.me/5521988514602"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 hover:border-[#25D366]/40 hover:bg-[#25D366]/10 text-white font-semibold rounded-xl transition-all duration-300 text-base"
              >
                <MessageSquare size={18} className="text-[#25D366]" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
