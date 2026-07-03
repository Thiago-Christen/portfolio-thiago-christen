"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  ChevronRight,
  Code2,
  Database,
  ExternalLink,
  Film,
  Mail,
  MonitorSmartphone,
  Palette,
  Play,
  ShieldCheck,
  Sparkles,
  Terminal,
  TestTube2,
  Workflow,
} from "lucide-react";
import { useMemo, useState } from "react";

type ProjectCategory = "Todos" | "Desenvolvimento" | "Criativo";

const navItems = [
  { label: "Projetos", href: "#projetos" },
  { label: "Servicos", href: "#servicos" },
  { label: "Stack", href: "#stack" },
  { label: "Contato", href: "#contato" },
];

const stats = [
  { label: "Foco principal", value: "80% dev" },
  { label: "Base tecnica", value: "Full stack" },
  { label: "Diferencial", value: "Visual + codigo" },
];

const services = [
  {
    title: "Desenvolvimento web",
    weight: "Prioridade 80%",
    description:
      "Sites, landing pages, dashboards, sistemas internos, APIs e integracoes com experiencia responsiva.",
    icon: Code2,
  },
  {
    title: "Design grafico",
    weight: "Apoio visual",
    description:
      "Identidade para posts, apresentacoes, pecas comerciais e materiais digitais alinhados ao produto.",
    icon: Palette,
  },
  {
    title: "Motion design",
    weight: "Interacao e narrativa",
    description:
      "Animacoes curtas, microinteracoes e composicoes para tornar marcas e interfaces mais claras.",
    icon: Play,
  },
  {
    title: "Edicao de video",
    weight: "Conteudo e prova",
    description:
      "Cortes, ritmo, legendas e assets para demonstrar produtos, processos e estudos de caso.",
    icon: Film,
  },
];

const projects = [
  {
    title: "FinalScore",
    category: "Desenvolvimento",
    status: "Em evolucao",
    description:
      "Aplicacao React + Vite com API Node/Express, MySQL, login, cadastro e dados demonstrativos para gestao esportiva.",
    stack: ["React", "Vite", "Node.js", "Express", "MySQL", "JWT"],
    repo: "https://github.com/Thiago-Christen/finalscore",
  },
  {
    title: "Pet Life",
    category: "Desenvolvimento",
    status: "Base full stack",
    description:
      "Projeto com frontend, backend FastAPI e estrutura de banco, pronto para ganhar README, demo e fluxo de deploy.",
    stack: ["HTML", "CSS", "FastAPI", "Python", "SQL"],
    repo: "https://github.com/Thiago-Christen/Pet_Life",
  },
  {
    title: "Penalti Perfeito",
    category: "Criativo",
    status: "Jogo publicado",
    description:
      "Jogo casual em p5.js com fases, placar, vidas, imagens, tela inicial e progressao de dificuldade.",
    stack: ["JavaScript", "p5.js", "Game UI"],
    repo: "https://github.com/Thiago-Christen/Penalti_Perfeito",
  },
  {
    title: "Infootball",
    category: "Desenvolvimento",
    status: "Interface web",
    description:
      "Interface HTML para fluxo de cadastro, login e apresentacao de uma plataforma relacionada a futebol.",
    stack: ["HTML", "CSS", "UX flow"],
    repo: "https://github.com/Thiago-Christen/Infootball",
  },
  {
    title: "Portfolio Thiago Christen",
    category: "Desenvolvimento",
    status: "Novo",
    description:
      "Portfolio estatico em Next.js, React 19, TypeScript, Tailwind v4 e Framer Motion, preparado para GitHub Pages.",
    stack: ["Next.js", "React 19", "TypeScript", "Tailwind v4", "Framer Motion"],
    repo: "https://github.com/Thiago-Christen",
  },
  {
    title: "Sistema de agendamentos",
    category: "Desenvolvimento",
    status: "Roadmap",
    description:
      "Projeto portfolio-grade planejado para demonstrar autenticação, banco, painel administrativo e testes.",
    stack: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "Playwright"],
    repo: "https://github.com/Thiago-Christen",
  },
] satisfies Array<{
  title: string;
  category: Exclude<ProjectCategory, "Todos">;
  status: string;
  description: string;
  stack: string[];
  repo: string;
}>;

const stackGroups = [
  {
    title: "Frontend",
    icon: MonitorSmartphone,
    items: [
      "TypeScript",
      "React 19",
      "Next.js 15+",
      "Tailwind CSS v4",
      "Shadcn/UI",
      "Framer Motion",
      "React Hook Form",
      "Zod",
      "TanStack Query",
    ],
  },
  {
    title: "Backend",
    icon: Terminal,
    items: ["Node.js", "NestJS", "Prisma ORM", "JWT", "OAuth Google/GitHub", "Better Auth"],
  },
  {
    title: "Dados e infra",
    icon: Database,
    items: ["PostgreSQL", "Redis", "S3", "Cloudinary", "Railway", "Docker", "Vercel"],
  },
  {
    title: "Qualidade",
    icon: TestTube2,
    items: ["Vitest", "Playwright", "ESLint", "Prettier", "Husky", "GitHub Actions"],
  },
];

const processSteps = [
  {
    title: "Diagnostico",
    description:
      "Alinho objetivo, publico, funcionalidades, referencias e restricoes antes de escrever codigo.",
  },
  {
    title: "Prototipo",
    description:
      "Transformo a ideia em fluxo navegavel, tela ou backlog tecnico para validar o caminho.",
  },
  {
    title: "Implementacao",
    description:
      "Desenvolvo com componentes reutilizaveis, responsividade, versionamento e revisoes frequentes.",
  },
  {
    title: "Entrega",
    description:
      "Fecho com build, documentacao, instrucoes de uso e proximos passos de manutencao.",
  },
];

const contentPlan = [
  "1 estudo de caso por projeto concluido",
  "2 posts tecnicos curtos por semana",
  "1 bastidor de processo ou aprendizado",
  "README, demo e screenshots em todo projeto fixado",
];

const filters: ProjectCategory[] = ["Todos", "Desenvolvimento", "Criativo"];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("Todos");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "Todos") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#171717]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-[#101415]/82 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3 text-white" aria-label="Inicio">
            <span className="grid size-9 place-items-center rounded-lg bg-[#28d0b3] text-sm font-black text-[#07100f]">
              TC
            </span>
            <span className="hidden text-sm font-semibold sm:inline">Thiago Christen</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Navegacao principal">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-white/74 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="https://www.linkedin.com/in/thiago-christen/"
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir LinkedIn de Thiago Christen"
            className="inline-flex h-10 items-center gap-2 rounded-md bg-white px-3 text-sm font-semibold text-[#101415] shadow-sm transition hover:bg-[#f4c95d]"
          >
            <BriefcaseBusiness size={17} aria-hidden="true" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>
      </header>

      <section id="inicio" className="relative isolate min-h-[88svh] overflow-hidden pt-16 text-white">
        <Image
          src={`${basePath}/assets/hero-workspace.png`}
          alt="Mesa de trabalho moderna com telas de codigo, dashboards e composicoes visuais"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,15,16,0.88),rgba(9,15,16,0.56)_45%,rgba(9,15,16,0.22))]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(0deg,#f7f5ef,rgba(247,245,239,0))]" />

        <div className="relative mx-auto flex min-h-[calc(88svh-4rem)] max-w-7xl items-center px-4 py-14 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-white/24 bg-white/10 px-3 py-2 text-sm font-medium text-white/88 backdrop-blur">
              <Sparkles size={16} aria-hidden="true" />
              Desenvolvimento full stack com repertorio visual
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.05] sm:text-6xl lg:text-7xl">
              Thiago Christen
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/84 sm:text-xl">
              Crio interfaces, sistemas e automacoes com foco em clareza, performance e confianca para
              clientes que precisam transformar ideias em produtos digitais utilizaveis.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <a
                href="#projetos"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#28d0b3] px-5 text-sm font-bold text-[#06100f] shadow-lg shadow-black/20 transition hover:bg-[#f4c95d]"
              >
                Ver projetos
                <ChevronRight size={18} aria-hidden="true" />
              </a>
              <a
                href="https://github.com/Thiago-Christen"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/28 bg-white/10 px-5 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#101415]"
              >
                <Code2 size={18} aria-hidden="true" />
                GitHub
              </a>
            </div>

            <div className="mt-6 grid max-w-2xl grid-cols-3 gap-2 sm:mt-10 sm:gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-white/20 bg-white/10 p-3 backdrop-blur sm:p-4">
                  <p className="text-lg font-black leading-6 text-white sm:text-2xl sm:leading-8">{stat.value}</p>
                  <p className="mt-1 text-xs leading-4 text-white/72 sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-[#ded9cd] bg-[#fffdf7]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            ["Processo claro", ShieldCheck],
            ["Codigo versionado", Code2],
            ["Interfaces responsivas", MonitorSmartphone],
            ["Entrega documentada", BadgeCheck],
          ].map(([label, Icon]) => (
            <div key={label as string} className="flex items-center gap-3 text-sm font-semibold text-[#2c322f]">
              <span className="grid size-9 place-items-center rounded-md bg-[#e9f8f4] text-[#087767]">
                <Icon size={18} aria-hidden="true" />
              </span>
              {label as string}
            </div>
          ))}
        </div>
      </section>

      <section id="servicos" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase text-[#0b786a]">Servicos</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#171717] sm:text-5xl">
              Desenvolvimento como centro, visual como vantagem.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#57534b] lg:justify-self-end">
            O posicionamento ideal e vender desenvolvimento primeiro, usando design, motion e video para
            melhorar apresentacao, comunicacao e percepcao de qualidade nas entregas.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <motion.article
              key={service.title}
              whileHover={{ y: -6 }}
              className="flex min-h-[280px] flex-col rounded-lg border border-[#ded9cd] bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="grid size-11 place-items-center rounded-md bg-[#101415] text-[#28d0b3]">
                  <service.icon size={22} aria-hidden="true" />
                </span>
                <span className="rounded-md bg-[#f4c95d]/24 px-2.5 py-1 text-xs font-bold text-[#725512]">
                  {service.weight}
                </span>
              </div>
              <h3 className="mt-7 text-xl font-black text-[#171717]">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#625d55]">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="projetos" className="bg-[#101415] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase text-[#28d0b3]">Projetos</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
                Repositorios organizados para virar prova de capacidade.
              </h2>
            </div>

            <div className="flex w-full gap-2 overflow-x-auto pb-1 lg:w-auto" aria-label="Filtrar projetos">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`h-11 shrink-0 rounded-md border px-4 text-sm font-bold transition ${
                    activeFilter === filter
                      ? "border-[#28d0b3] bg-[#28d0b3] text-[#06100f]"
                      : "border-white/18 bg-white/8 text-white/78 hover:bg-white/14 hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {visibleProjects.map((project) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="flex min-h-[352px] flex-col rounded-lg border border-white/12 bg-white/[0.06] p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase text-[#f4c95d]">{project.status}</p>
                    <h3 className="mt-2 text-2xl font-black">{project.title}</h3>
                  </div>
                  <span className="grid size-10 shrink-0 place-items-center rounded-md bg-white/10 text-[#28d0b3]">
                    <BriefcaseBusiness size={19} aria-hidden="true" />
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-white/70">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={`${project.title}-${item}`}
                      className="rounded-md border border-white/10 bg-white/8 px-2.5 py-1 text-xs font-semibold text-white/82"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex h-11 w-fit items-center gap-2 rounded-md bg-white px-4 text-sm font-bold text-[#101415] transition hover:bg-[#28d0b3]"
                >
                  <Code2 size={17} aria-hidden="true" />
                  Repositorio
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-bold uppercase text-[#0b786a]">Stack</p>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
              Tecnologias atuais, organizadas por tipo de entrega.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#625d55]">
              A stack comunica maturidade quando aparece conectada a problemas reais: interface, dados,
              autenticacao, deploy, testes e manutencao.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {stackGroups.map((group) => (
              <article key={group.title} className="rounded-lg border border-[#ded9cd] bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-md bg-[#e9f8f4] text-[#087767]">
                    <group.icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-black">{group.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-md bg-[#f3efe4] px-2.5 py-1 text-xs font-bold text-[#34302a]">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffdf7] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="text-sm font-bold uppercase text-[#0b786a]">Processo</p>
              <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
                Um jeito simples de reduzir risco antes da entrega.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {processSteps.map((step, index) => (
                <article key={step.title} className="rounded-lg border border-[#ded9cd] bg-white p-5">
                  <div className="flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-md bg-[#101415] text-sm font-black text-[#28d0b3]">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-black">{step.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[#625d55]">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div className="rounded-lg border border-[#ded9cd] bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-md bg-[#101415] text-[#28d0b3]">
              <Workflow size={21} aria-hidden="true" />
            </span>
            <h2 className="text-2xl font-black">Plano de presenca</h2>
          </div>
          <div className="mt-6 grid gap-3">
            {contentPlan.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-md bg-[#f7f5ef] p-3">
                <BadgeCheck className="mt-0.5 shrink-0 text-[#087767]" size={18} aria-hidden="true" />
                <p className="text-sm font-semibold leading-6 text-[#34302a]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-[#17201f] p-6 text-white shadow-sm">
          <p className="text-sm font-bold uppercase text-[#28d0b3]">Posicionamento</p>
          <h2 className="mt-3 text-3xl font-black leading-tight">
            Freelancer com foco em desenvolvimento e acabamento visual acima da media.
          </h2>
          <p className="mt-5 text-sm leading-7 text-white/72">
            O portfolio, o GitHub e o LinkedIn precisam repetir a mesma mensagem: Thiago constroi
            produtos digitais com base tecnica, criterio visual e comunicacao profissional.
          </p>
          <a
            href="#contato"
            className="mt-7 inline-flex h-11 items-center gap-2 rounded-md bg-[#f4c95d] px-4 text-sm font-bold text-[#14110b] transition hover:bg-[#28d0b3]"
          >
            Conversar sobre um projeto
            <Mail size={17} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="contato" className="bg-[#101415] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-[#28d0b3]">Contato</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
              Vamos transformar sua ideia em uma entrega clara, bonita e funcional.
            </h2>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a
              href="https://www.linkedin.com/in/thiago-christen/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#28d0b3] px-5 text-sm font-bold text-[#06100f] transition hover:bg-[#f4c95d]"
            >
              <BriefcaseBusiness size={18} aria-hidden="true" />
              LinkedIn
              <ExternalLink size={16} aria-hidden="true" />
            </a>
            <a
              href="https://github.com/Thiago-Christen"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 text-sm font-bold text-white transition hover:bg-white hover:text-[#101415]"
            >
              <Code2 size={18} aria-hidden="true" />
              GitHub
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#0a0d0d] px-4 py-6 text-sm text-white/62 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>Thiago Christen - Desenvolvimento full stack e criativo digital.</p>
          <p>Parana, Brasil</p>
        </div>
      </footer>
    </main>
  );
}
