"use client";

import {
  Clock,
  DollarSign,
  TrendingUp,
  Shield,
  Zap,
  Users,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Atendimento 24 horas",
    description:
      "Sua IA nunca dorme. Responde clientes de madrugada, feriado e fim de semana com a mesma qualidade.",
    metric: "24/7",
  },
  {
    icon: Zap,
    title: "Resposta instantânea",
    description:
      "Tempo de resposta abaixo de 3 segundos. O cliente não espera e não vai para o concorrente.",
    metric: "< 3s",
  },
  {
    icon: TrendingUp,
    title: "Mais conversões",
    description:
      "Tráfego pago traz o lead. A IA converte. Juntos, multiplicam suas vendas sem aumentar equipe.",
    metric: "+200%",
  },
  {
    icon: DollarSign,
    title: "Redução de custos",
    description:
      "Substitua horas de atendimento manual por automação inteligente. Faça mais com menos.",
    metric: "-60%",
  },
  {
    icon: Users,
    title: "Leads qualificados",
    description:
      "A IA filtra curiosos de compradores reais. Sua equipe só fala com quem tem potencial de fechar.",
    metric: "3x",
  },
  {
    icon: Shield,
    title: "Dados e controle total",
    description:
      "Dashboard em tempo real com métricas de campanhas, conversas e agendamentos. Tudo transparente.",
    metric: "100%",
  },
];

export default function Benefits() {

  return (
    <section id="beneficios" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="reveal max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#E63946]/10 border border-[#E63946]/20 rounded-full mb-5">
            <CheckCircle2 size={14} className="text-[#E63946]" />
            <span className="text-xs text-[#E63946] font-semibold uppercase tracking-widest">
              Benefícios
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Por que empresários escolhem
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E63946] to-[#FF6B6B]">
              a Pimenta Mídias
            </span>
          </h2>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group relative p-6 sm:p-8 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#E63946]/20 transition-all duration-500 overflow-hidden"
            >
              {/* Background metric */}
              <div className="absolute top-4 right-4 font-heading text-5xl font-extrabold text-white/[0.03] group-hover:text-[#E63946]/10 transition-colors duration-500 select-none">
                {benefit.metric}
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#E63946]/10 flex items-center justify-center mb-5 group-hover:bg-[#E63946]/20 transition-colors duration-300">
                  <benefit.icon size={22} className="text-[#E63946]" />
                </div>

                <h3 className="font-heading text-lg font-bold text-white mb-3 flex items-center gap-2">
                  {benefit.title}
                  <ArrowUpRight
                    size={16}
                    className="text-[#E63946] opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300"
                  />
                </h3>

                <p className="text-sm text-[#888888] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
