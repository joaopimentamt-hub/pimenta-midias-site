"use client";

import { PhoneCall, Lightbulb, Rocket, BarChart3 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Diagnóstico gratuito",
    description:
      "Analisamos sua operação, canais de venda e atendimento atual. Identificamos gargalos e oportunidades em 30 minutos.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Estratégia personalizada",
    description:
      "Montamos um plano sob medida combinando tráfego pago e automação WhatsApp, alinhado às suas metas e orçamento.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Implementação rápida",
    description:
      "Configuramos as campanhas e o agente de IA no WhatsApp. Em poucos dias, sua máquina de vendas está rodando.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Otimização contínua",
    description:
      "Acompanhamos métricas em tempo real e otimizamos campanhas e fluxos para escalar seus resultados mês a mês.",
  },
];

export default function HowItWorks() {
  const ref = useScrollReveal();

  return (
    <section id="como-funciona" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E63946]/[0.03] rounded-full blur-[150px]" />

      <div ref={ref} className="reveal relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#E63946]/10 border border-[#E63946]/20 rounded-full mb-5">
            <Rocket size={14} className="text-[#E63946]" />
            <span className="text-xs text-[#E63946] font-semibold uppercase tracking-widest">
              Como Funciona
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Do zero aos resultados
            <br />
            <span className="text-[#888888]">em 4 passos simples</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative group">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-40px)] h-px bg-gradient-to-r from-[#E63946]/40 to-[#E63946]/10" />
              )}

              <div className="relative p-6 sm:p-8 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#E63946]/20 transition-all duration-500 h-full">
                {/* Step number */}
                <div className="flex items-center gap-4 mb-5">
                  <span className="font-heading text-3xl font-extrabold text-[#E63946]/20 group-hover:text-[#E63946]/40 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-[#E63946]/10 flex items-center justify-center group-hover:bg-[#E63946]/20 transition-colors">
                    <step.icon size={18} className="text-[#E63946]" />
                  </div>
                </div>

                <h3 className="font-heading text-lg font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[#888888] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
