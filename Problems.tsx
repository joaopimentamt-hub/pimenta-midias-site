"use client";

import {
  Clock,
  TrendingDown,
  UserX,
  AlertTriangle,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const problems = [
  {
    icon: UserX,
    title: "Leads perdidos todo dia",
    description:
      "Clientes mandam mensagem fora do horário e nunca mais voltam. Cada mensagem ignorada é dinheiro jogado fora.",
  },
  {
    icon: Clock,
    title: "Atendimento lento e manual",
    description:
      "Você ou sua equipe perdem horas respondendo as mesmas perguntas. Enquanto isso, o concorrente já fechou a venda.",
  },
  {
    icon: TrendingDown,
    title: "Dinheiro gasto sem retorno",
    description:
      "Investe em anúncios mas não consegue medir resultado. Não sabe quanto cada lead custa nem quantos viram clientes.",
  },
  {
    icon: AlertTriangle,
    title: "WhatsApp desorganizado",
    description:
      "Conversas misturadas, sem follow-up, sem qualificação. Impossível escalar um atendimento assim.",
  },
];

export default function Problems() {
  const ref = useScrollReveal();

  return (
    <section id="problema" className="relative py-24 sm:py-32">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div ref={ref} className="reveal max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#E63946]/10 border border-[#E63946]/20 rounded-full mb-5">
            <AlertTriangle size={14} className="text-[#E63946]" />
            <span className="text-xs text-[#E63946] font-semibold uppercase tracking-widest">
              O Problema
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Isso parece familiar?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#888888] max-w-2xl mx-auto">
            A maioria dos empresários enfrenta esses problemas todos os dias
            — e perde vendas por causa disso.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {problems.map((problem, i) => (
            <div
              key={problem.title}
              className="group relative p-6 sm:p-8 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#E63946]/30 transition-all duration-500"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#E63946]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#E63946]/10 flex items-center justify-center mb-5 group-hover:bg-[#E63946]/20 transition-colors duration-300">
                  <problem.icon size={22} className="text-[#E63946]" />
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-3">
                  {problem.title}
                </h3>
                <p className="text-sm sm:text-base text-[#888888] leading-relaxed">
                  {problem.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#E63946]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
