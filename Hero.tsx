"use client";

import { ArrowRight, MessageSquare, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Radial gradient top-left red glow */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#E63946]/8 rounded-full blur-[120px]" />
        {/* Subtle bottom-right accent */}
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#E63946]/5 rounded-full blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-32 pb-20 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
            <div className="w-2 h-2 rounded-full bg-[#E63946] animate-pulse" />
            <span className="text-xs sm:text-sm text-[#AAAAAA] font-medium">
              Especialistas em Tráfego Pago & Automação com IA
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up delay-100 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white mb-6">
            Seus clientes estão
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E63946] to-[#FF6B6B]">
              esperando.
            </span>
            <br />
            <span className="text-[#AAAAAA] font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem]">
              Seu WhatsApp deveria estar vendendo.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up delay-200 text-base sm:text-lg md:text-xl text-[#888888] max-w-2xl leading-relaxed mb-10">
            Atraímos clientes qualificados com tráfego pago e automatizamos
            seu atendimento no WhatsApp com inteligência artificial.{" "}
            <span className="text-[#AAAAAA]">
              Mais leads, mais vendas, menos trabalho manual.
            </span>
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4">
            <a
              href="#cta"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#E63946] hover:bg-[#C1121F] text-white font-semibold rounded-xl transition-all duration-300 text-base hover:shadow-xl hover:shadow-[#E63946]/25 animate-pulse-glow"
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
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-white font-semibold rounded-xl transition-all duration-300 text-base"
            >
              <MessageSquare size={18} className="text-[#25D366]" />
              Falar no WhatsApp
            </a>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up delay-500 mt-16 pt-10 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10">
            {[
              { value: "24h", label: "Atendimento IA" },
              { value: "+200%", label: "Aumento em leads" },
              { value: "< 3s", label: "Tempo de resposta" },
              { value: "100%", label: "Automático" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-[#888888] mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating accent element */}
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#E63946]/20 to-transparent border border-[#E63946]/10 rotate-6" />
            <div className="absolute inset-4 rounded-2xl bg-[#111111] border border-white/5 p-6 flex flex-col justify-between -rotate-2">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Zap size={16} className="text-[#E63946]" />
                  <span className="text-xs text-[#AAAAAA] font-medium uppercase tracking-wider">
                    IA Ativa
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-xs text-[#888888]">Cliente</p>
                    <p className="text-sm text-white mt-1">
                      Oi, quero agendar um horário
                    </p>
                  </div>
                  <div className="bg-[#E63946]/10 border border-[#E63946]/20 rounded-lg p-3">
                    <p className="text-xs text-[#E63946]">IA Pimenta</p>
                    <p className="text-sm text-white mt-1">
                      Olá! Claro, vou te ajudar. Qual o melhor dia para você?
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-xs text-[#888888]">Cliente</p>
                    <p className="text-sm text-white mt-1">
                      Amanhã às 14h pode ser?
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-[#25D366]">
                <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                Respondendo em tempo real...
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
