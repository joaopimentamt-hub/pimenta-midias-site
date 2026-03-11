"use client";

import {
  MessageSquare,
  Bot,
  CalendarCheck,
  Handshake,
  ArrowDown,
  Workflow,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const processSteps = [
  {
    icon: MessageSquare,
    title: "Cliente envia mensagem",
    description: "No WhatsApp, vindo do Google, Instagram ou indicação.",
    side: "left" as const,
  },
  {
    icon: Bot,
    title: "IA responde em segundos",
    description:
      "Entende a necessidade, responde perguntas e coleta informações.",
    side: "right" as const,
  },
  {
    icon: CalendarCheck,
    title: "Lead qualificado e agendado",
    description:
      "A IA identifica se é um bom lead e agenda automaticamente no seu calendário.",
    side: "left" as const,
  },
  {
    icon: Handshake,
    title: "Você fecha a venda",
    description:
      "Chega na reunião com todas as informações. Só falta o aperto de mão.",
    side: "right" as const,
  },
];

export default function Process() {
  const ref = useScrollReveal();

  return (
    <section id="processo" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background effect */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-[#E63946]/[0.03] rounded-full blur-[120px]" />

      <div ref={ref} className="reveal relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#E63946]/10 border border-[#E63946]/20 rounded-full mb-5">
            <Workflow size={14} className="text-[#E63946]" />
            <span className="text-xs text-[#E63946] font-semibold uppercase tracking-widest">
              Processo de Trabalho
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Da primeira mensagem
            <br />
            <span className="text-[#888888]">ao fechamento da venda</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#888888] max-w-2xl mx-auto">
            Veja como o fluxo completo funciona quando tráfego pago e automação
            trabalham juntos.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#E63946]/40 via-[#E63946]/20 to-transparent hidden sm:block" />

          <div className="space-y-8 sm:space-y-0">
            {processSteps.map((step, i) => (
              <div key={step.title} className="relative sm:pb-16 last:pb-0">
                {/* Center dot (desktop) */}
                <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-[#E63946] border-4 border-[#0A0A0A] z-10" />

                {/* Arrow between steps */}
                {i < processSteps.length - 1 && (
                  <div className="sm:hidden flex justify-center py-2">
                    <ArrowDown size={20} className="text-[#E63946]/40" />
                  </div>
                )}

                {/* Card */}
                <div
                  className={`sm:w-[calc(50%-32px)] ${
                    step.side === "left" ? "sm:mr-auto" : "sm:ml-auto"
                  }`}
                >
                  <div className="group p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#E63946]/20 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[#E63946]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E63946]/20 transition-colors">
                        <step.icon size={18} className="text-[#E63946]" />
                      </div>
                      <span className="text-xs text-[#E63946]/60 font-bold font-heading">
                        PASSO {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#888888] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
