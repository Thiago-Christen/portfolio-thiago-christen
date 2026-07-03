import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thiago Christen | Desenvolvedor Full Stack",
  description:
    "Portfolio de Thiago Christen: desenvolvimento full stack, interfaces, automacoes, design grafico, motion design e edicao de video.",
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
    title: "Thiago Christen | Desenvolvedor Full Stack",
    description:
      "Desenvolvimento full stack com olhar visual para interfaces, automacoes e produtos digitais.",
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
