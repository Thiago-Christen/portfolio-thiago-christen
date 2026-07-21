import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manual de Receita Freelancer | Thiago Christen",
  description:
    "Guia operacional de canais de venda, plataformas, taxas, propostas e metas para começar a vender serviços como freelancer.",
  authors: [{ name: "Thiago Christen" }],
  keywords: [
    "Thiago Christen",
    "desenvolvedor full stack",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "freelancer",
  ],
  openGraph: {
    title: "Manual de Receita Freelancer | Thiago Christen",
    description:
      "Canais de venda, taxas, propostas e decisões para transformar serviços freelancer em uma operação comercial.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
