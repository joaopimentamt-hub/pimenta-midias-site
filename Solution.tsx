"use client";

import {
  Target,
  Bot,
  BarChart3,
  MessageCircle,
  Search,
  Calendar,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    id: "trafego",
    badge: "Tráfego Pago",
    title: "Atraímos os clientes certos até você",
    description:
      "Campanhas estratégicas no Google e Meta Ads que colocam sua empresa na frente de quem está pronto para comprar.",
    features: [
      {
        icon: Search,
        label: "Google Ads",
        detail: "Apareça no topo quando buscarem por você",
      },
      {
        icon: Target,
        label: "Meta Ads",
        detail: "Instagram e Facebook para o público ideal",
      },
      {
        icon: BarChart3,
        label: "Relatórios claros",
        detail: "Saiba exatamente o retorno de cada real investido",
      },
      {
        icon: TrendingUp,
        label: "Geração de leads",
        detail: "Fluxo constante de clientes qualificados",
      },
    ],
    accent: "from-[#E63946] to-[#FF6B6B]",
    accentBg: "#E63946",
  },
  {
    id: "automacao",
    badge: "Automação WhatsApp",
    title: "Sua IA atende, qualifica e agenda 24 horas",
    description:
      "Um agente inteligente no WhatsApp que conversa como um humano, entende o cliente e nunca deixa uma mensagem sem resposta.",
    features: [
      {
        icon: Bot,
        label: "Atendimento 24h",
        detail: "IA respondendo instantaneamente, sempre",
      },
      {
        icon: MessageCircle,
        label: "Qualificação de leads",
        detail: "Identifica quem está pronto para comprar",
      },
      {
        icon: Calendar,
        label: "Agendamento automático",
        detail: "Marca reuniões direto no calendário",
      },
      {
        icon: Sparkles,
        label: "Respostas inteligentes",
        detail: "Conversa natural, não parece robô",
      },
    ],
    accent: "from-[#25D366] to-[#128C7E]",
    accentBg: "#25D366",
  },
];

export default function Solution() {
  const ref = useScrollReveal();

  return (
    <section id="solucao" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div ref={ref} className="reveal max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#E63946]/10 border border-[#E63946]/20 rounded-full mb-5">
            <Sparkles size={14} className="text-[#E63946]" />
            <span className="text-xs text-[#E63946] font-semibold uppercase tracking-widest">
              A Solução
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Dois pilares para escalar
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E63946] to-[#FF6B6B]">
              seu negócio
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#888888] max-w-2xl mx-auto">
            Combinamos geração de demanda com atendimento inteligente para que
            nenhum lead seja desperdiçado.
          </p>
        </div>

        {/* Service cards */}
        <div className="space-y-8">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="group relative rounded-3xl bg-[#111111] border border-white/5 hover:border-white/10 overflow-hidden transition-all duration-500"
            >
              {/* Glow accent */}
              <div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-60"
                style={{
                  backgroundImage: `linear-gradient(to right, ${service.accentBg}66, transparent)`,
                }}
              />

              <div className="p-8 sm:p-10 md:p-12 lg:flex lg:items-center lg:gap-12">
                {/* Left content */}
                <div className="lg:flex-1 mb-8 lg:mb-0">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-xs font-semibold uppercase tracking-widest"
                    style={{
                      backgroundColor: `${service.accentBg}15`,
                      borderColor: `${service.accentBg}30`,
                      color: service.accentBg,
                      borderWidth: 1,
                    }}
                  >
                    {service.badge}
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-base text-[#888888] leading-relaxed max-w-lg">
                    {service.description}
                  </p>
                </div>

                {/* Right features grid */}
                <div className="lg:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feat) => (
                    <div
                      key={feat.label}
                      className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <feat.icon
                          size={18}
                          style={{ color: service.accentBg }}
                        />
                        <span className="text-sm font-semibold text-white">
                          {feat.label}
                        </span>
                      </div>
                      <p className="text-xs text-[#888888] leading-relaxed">
                        {feat.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
