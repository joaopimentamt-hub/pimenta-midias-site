import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pimenta Mídias | Tráfego Pago & Automação WhatsApp com IA",
  description:
    "Atraia clientes com tráfego pago e automatize seu atendimento no WhatsApp com inteligência artificial. Mais leads, mais vendas, menos trabalho manual.",
  keywords: [
    "tráfego pago",
    "automação whatsapp",
    "google ads",
    "meta ads",
    "inteligência artificial",
    "atendimento automatizado",
    "geração de leads",
  ],
  openGraph: {
    title: "Pimenta Mídias | Tráfego Pago & Automação WhatsApp com IA",
    description:
      "Atraia clientes com tráfego pago e automatize seu atendimento no WhatsApp com IA.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
