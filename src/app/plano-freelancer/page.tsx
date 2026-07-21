"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeDollarSign,
  Banknote,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  CircleAlert,
  CircleDollarSign,
  Clock3,
  Copy,
  ExternalLink,
  Globe2,
  Handshake,
  MessageCircle,
  Rocket,
  Search,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  Target,
  TrendingUp,
  UserCheck,
  WalletCards,
  type LucideIcon,
} from "lucide-react";
import { useMemo, useState } from "react";

type Channel = {
  id: string;
  number: string;
  name: string;
  shortName: string;
  icon: LucideIcon;
  accent: string;
  priority: string;
  access: string;
  cost: string;
  firstSignal: string;
  verdict: string;
  bestFor: string;
  offer: string;
  cta: string;
  url: string;
  sourceUrl?: string;
  sourceLabel?: string;
  setup: string[];
  firstWeek: string[];
  pitch: string;
  metrics: { label: string; value: string }[];
  warning: string;
};

type PlatformReport = {
  id: string;
  name: string;
  icon: LucideIcon;
  accent: string;
  position: string;
  model: string;
  conversion: string;
  conversionLabel: string;
  acquisition: string;
  fees: string;
  currency: string;
  payout: string;
  market: string;
  decision: string;
  officialLinks: { label: string; url: string }[];
};

const offers = [
  {
    name: "Diagnóstico + correção",
    price: "R$ 350–900",
    time: "1–3 dias",
    use: "Entrada de baixo risco para conquistar avaliação e abrir uma relação.",
  },
  {
    name: "Landing page",
    price: "R$ 900–1.800",
    time: "3–7 dias",
    use: "Oferta simples, visual e fácil de demonstrar antes da compra.",
  },
  {
    name: "Site institucional",
    price: "R$ 2.000–4.500",
    time: "7–15 dias",
    use: "Boa margem para empresas que precisam de presença e confiança.",
  },
  {
    name: "Automação / integração",
    price: "R$ 1.200–3.500",
    time: "3–10 dias",
    use: "Venda baseada em horas economizadas e redução de trabalho manual.",
  },
  {
    name: "MVP / sistema inicial",
    price: "R$ 5.000–12.000+",
    time: "15–35 dias",
    use: "Somente com escopo, marcos de entrega e pagamento por etapas.",
  },
];

const channels: Channel[] = [
  {
    id: "direto",
    number: "01",
    name: "Rede própria + WhatsApp",
    shortName: "Rede própria",
    icon: MessageCircle,
    accent: "#f04438",
    priority: "Prioridade máxima",
    access: "Sem cadastro",
    cost: "R$ 0 + tempo",
    firstSignal: "Resposta ou indicação",
    verdict: "É o canal com menor atrito para a primeira venda porque a confiança já existe.",
    bestFor: "Primeiro contrato, pequenos negócios, profissionais liberais e indicações de conhecidos.",
    offer: "Landing page, site institucional, correção urgente ou automação de rotina manual.",
    cta: "Abrir WhatsApp",
    url: "https://web.whatsapp.com/",
    setup: [
      "Liste 30 pessoas que conhecem seu trabalho ou conhecem donos de negócios.",
      "Separe a lista por proximidade: contato quente, conhecido e indicação possível.",
      "Escolha uma oferta simples com preço inicial, prazo e resultado visível.",
      "Prepare um link único com portfólio, dois projetos e forma de contato.",
    ],
    firstWeek: [
      "Envie cinco mensagens individuais por dia; nunca faça disparo genérico.",
      "Peça uma conversa de 15 minutos ou uma indicação, não um contrato imediato.",
      "Faça follow-up em 48 horas com uma ideia concreta para o negócio.",
      "Registre nome, resposta, necessidade, valor provável e próxima ação.",
    ],
    pitch:
      "Oi, [nome]. Estou abrindo agenda para projetos de sites e automações. Vi que [observação real sobre o negócio]. Consigo melhorar isso com [entrega específica] em cerca de [prazo]. Posso te mostrar a ideia em 15 minutos? Se não for uma prioridade agora, uma indicação de alguém que precise já me ajuda muito.",
    metrics: [
      { label: "Abordagens", value: "25 / semana" },
      { label: "Respostas", value: "8+" },
      { label: "Conversas", value: "3+" },
      { label: "Meta", value: "1 proposta" },
    ],
    warning: "Não peça trabalho de forma vaga. Mostre que observou o negócio e proponha uma melhoria específica.",
  },
  {
    id: "linkedin",
    number: "02",
    name: "LinkedIn Services",
    shortName: "LinkedIn",
    icon: BriefcaseBusiness,
    accent: "#0a66c2",
    priority: "Ativar agora",
    access: "Grátis; Premium opcional",
    cost: "Sem comissão",
    firstSignal: "Visita, mensagem ou pedido",
    verdict: "Funciona melhor como combinação de autoridade, busca ativa e página de serviços.",
    bestFor: "Empresas, agências, founders, gestores e contatos profissionais com orçamento maior.",
    offer: "Site institucional, landing page, dashboard, front-end, automação e suporte técnico.",
    cta: "Abrir meu perfil",
    url: "https://www.linkedin.com/in/thiago-christen/",
    sourceUrl: "https://www.linkedin.com/help/linkedin/answer/a550345",
    sourceLabel: "Como funcionam as Service Pages",
    setup: [
      "No perfil, crie uma Service Page e selecione serviços realmente relacionados às ofertas.",
      "Use um título orientado a resultado: Desenvolvedor Full Stack | Sites, sistemas e automações.",
      "Na descrição, diga quem você atende, o que entrega, prazo típico e como iniciar uma conversa.",
      "Adicione três provas visuais e ative trabalho remoto; responda toda solicitação em até 24 horas.",
    ],
    firstWeek: [
      "Conecte-se com dez pessoas por dia dentro do público comprador.",
      "Publique dois estudos de caso curtos: problema, decisão, resultado e imagem.",
      "Envie mensagem somente depois de observar um sinal real de necessidade.",
      "Peça avaliações na Service Page após cada entrega concluída.",
    ],
    pitch:
      "Olá, [nome]. Vi que vocês estão [sinal observado: lançando, contratando, atualizando o site]. Trabalho com sites e sistemas enxutos para pequenas operações. Notei [problema concreto] e tenho uma sugestão simples para resolver. Faz sentido eu te mandar um diagnóstico de três pontos por aqui?",
    metrics: [
      { label: "Conexões", value: "50 / semana" },
      { label: "Conteúdo", value: "2 posts" },
      { label: "Mensagens", value: "10 úteis" },
      { label: "Meta", value: "2 conversas" },
    ],
    warning: "Perfil bonito sem busca ativa vira currículo parado. Use o canal todos os dias.",
  },
  {
    id: "99freelas",
    number: "03",
    name: "99Freelas",
    shortName: "99Freelas",
    icon: Search,
    accent: "#ff6b35",
    priority: "Ativar agora",
    access: "Cadastro grátis",
    cost: "Adicional de 5%–20% ao cliente",
    firstSignal: "Resposta à proposta",
    verdict: "Bom laboratório em português para conseguir avaliações com trabalhos pequenos e bem definidos.",
    bestFor: "Correções, landing pages, WordPress, front-end, integrações e automações curtas.",
    offer: "Comece por entregas de até sete dias; evite sistemas grandes sem reputação na plataforma.",
    cta: "Cadastrar no 99Freelas",
    url: "https://www.99freelas.com.br/",
    sourceUrl: "https://www.99freelas.com.br/como-funciona",
    sourceLabel: "Taxas e pagamento oficial",
    setup: [
      "Cadastre uma foto profissional, título específico e resumo com entregas, não apenas tecnologias.",
      "Inclua três projetos com contexto, imagem, sua responsabilidade e resultado.",
      "Defina habilidades alinhadas às buscas: React, Next.js, TypeScript, Node.js, APIs e automação.",
      "Mantenha o pagamento na plataforma e planeje o saque: até 6 dias úteis no Free, 4 no Pro e 2 no Premium.",
    ],
    firstWeek: [
      "Salve buscas com orçamento e descrição claros; ignore anúncios vagos.",
      "Envie três propostas personalizadas por dia assim que estiverem disponíveis para seu plano.",
      "Abra a proposta com a solução e uma pergunta técnica, não com uma apresentação longa.",
      "Calcule o preço observando o adicional da plataforma e o valor final visto pelo cliente.",
    ],
    pitch:
      "Olá, [cliente]. Entendi que você precisa de [resultado]. Eu resolveria em três etapas: [etapa 1], [etapa 2] e [etapa 3]. Consigo entregar em [prazo], incluindo [entregáveis]. Antes de fechar, preciso confirmar: [pergunta que demonstra entendimento]. Tenho um projeto semelhante no portfólio: [link].",
    metrics: [
      { label: "Propostas", value: "15 / semana" },
      { label: "Aderência", value: "80%+" },
      { label: "Respostas", value: "2+" },
      { label: "Meta", value: "1 negociação" },
    ],
    warning: "Não compre plano antes de medir duas semanas de resposta. Pagar por velocidade não corrige proposta fraca.",
  },
  {
    id: "workana",
    number: "04",
    name: "Workana",
    shortName: "Workana",
    icon: Handshake,
    accent: "#7c3aed",
    priority: "Ativar agora",
    access: "Cadastro grátis",
    cost: "20% → 10% → 5% por cliente",
    firstSignal: "Mensagem ou shortlist",
    verdict: "Vale mais quando o primeiro projeto pode virar uma relação recorrente com o mesmo cliente.",
    bestFor: "Projetos na América Latina, suporte contínuo, sites, sistemas e automações com recorrência.",
    offer: "Manutenção mensal, evolução de produto, landing page com novas fases ou automação recorrente.",
    cta: "Cadastrar na Workana",
    url: "https://www.workana.com/pt/signup",
    sourceUrl: "https://help.workana.com/hc/pt/articles/360041235874-Como-%C3%A9-calculada-a-comiss%C3%A3o-na-Workana",
    sourceLabel: "Comissão escalonada oficial",
    setup: [
      "Complete todas as áreas do perfil e use uma especialidade principal coerente com o portfólio.",
      "Escreva a bio em português claro e adicione também uma versão curta em espanhol ou inglês.",
      "Mostre projetos que provem escopo parecido com o que você pretende buscar.",
      "Configure disponibilidade, preço com comissão inicial de 20% e saque por PayPal, Payoneer ou Mercado Pago.",
    ],
    firstWeek: [
      "Priorize clientes com histórico, pagamento verificado e possibilidade de continuidade.",
      "Aplique em dois a quatro projetos por dia, sempre respondendo o escopo publicado.",
      "Divida projetos maiores em marcos e entregue a primeira prova rapidamente.",
      "Depois do primeiro job, ofereça uma próxima fase ao mesmo cliente; é quando a comissão melhora.",
    ],
    pitch:
      "Olá, [cliente]. Li o projeto e o ponto crítico parece ser [problema]. Minha proposta é entregar primeiro [marco 1], validar com você e então concluir [marco 2]. Prazo estimado: [prazo]. Valor: [valor bruto], já considerando a comissão da plataforma. Para fechar o escopo, preciso confirmar [pergunta].",
    metrics: [
      { label: "Propostas", value: "12 / semana" },
      { label: "Clientes fortes", value: "70%+" },
      { label: "Respostas", value: "2+" },
      { label: "Meta", value: "1 shortlist" },
    ],
    warning: "Para receber R$ 1.000 com comissão inicial de 20%, o valor bruto precisa ser aproximadamente R$ 1.250.",
  },
  {
    id: "upwork",
    number: "05",
    name: "Upwork",
    shortName: "Upwork",
    icon: Globe2,
    accent: "#14a800",
    priority: "Segunda onda",
    access: "Connects por proposta",
    cost: "0%–15% por contrato",
    firstSignal: "Interview",
    verdict: "Tem maior teto em moeda forte, mas exige inglês, prova específica e seleção rigorosa de vagas.",
    bestFor: "React, Next.js, bug fixes, integração de APIs, dashboards e contratos internacionais.",
    offer: "Comece com trabalho técnico pequeno e específico; use contratos maiores após obter histórico.",
    cta: "Criar conta na Upwork",
    url: "https://www.upwork.com/nx/signup/",
    sourceUrl: "https://support.upwork.com/hc/en-us/articles/211062538-Learn-about-the-Freelancer-Service-Fee",
    sourceLabel: "Taxa oficial por contrato",
    setup: [
      "Crie o perfil em inglês com título específico e uma primeira frase que explique o resultado entregue.",
      "Inclua cases em inglês, taxa por hora coerente e disponibilidade semanal verdadeira.",
      "Faça verificações solicitadas e preencha o perfil por completo antes de gastar Connects.",
      "Use um vídeo curto apenas se falar inglês com segurança e conseguir ser direto.",
    ],
    firstWeek: [
      "Busque vagas publicadas recentemente, com cliente verificado e histórico de contratação.",
      "Aplique somente quando cumprir pelo menos 80% do escopo.",
      "Considere US$ 0,15 por Connect e registre o custo real de cada candidatura.",
      "Envie de cinco a oito propostas muito aderentes na semana e revise interviews, custo e retorno.",
    ],
    pitch:
      "Hi [name], I can help you [specific outcome]. I reviewed the scope and would start by [first technical decision], then validate [milestone]. I have handled similar work with [relevant stack/result]. Estimated delivery: [time]. One question before I confirm the scope: [specific question]?",
    metrics: [
      { label: "Propostas", value: "5–8 / semana" },
      { label: "Aderência", value: "80%+" },
      { label: "Interviews", value: "1+" },
      { label: "Limite", value: "Connects medidos" },
    ],
    warning: "A taxa aparece antes do envio e fica travada para o contrato. Connects gastos normalmente não voltam quando outro freelancer é contratado ou a vaga expira.",
  },
  {
    id: "fiverr",
    number: "06",
    name: "Fiverr",
    shortName: "Fiverr",
    icon: Store,
    accent: "#1dbf73",
    priority: "Produto de prateleira",
    access: "Cadastro grátis",
    cost: "Você recebe 80%",
    firstSignal: "Impressão → clique → pedido",
    verdict: "Não é uma página de currículo: cada Gig deve parecer um produto fácil de comprar.",
    bestFor: "Landing page, correção de bug, conversão de design para React e melhoria de performance.",
    offer: "Crie três Gigs estreitos, com pacotes Basic, Standard e Premium e extras bem definidos.",
    cta: "Começar a vender",
    url: "https://www.fiverr.com/start_selling",
    sourceUrl: "https://help.fiverr.com/hc/en-us/articles/9234443621137",
    sourceLabel: "Ganhos oficiais do freelancer",
    setup: [
      "Use títulos baseados na busca do comprador: I will build a responsive Next.js landing page.",
      "Crie capa legível, três exemplos, FAQ, requisitos de entrada e limites de revisão.",
      "Monte três níveis com diferença real de escopo, prazo e valor.",
      "Inclua extras para urgência, página adicional, integração e manutenção.",
    ],
    firstWeek: [
      "Publique três Gigs diferentes, cada um resolvendo uma dor específica.",
      "Revise título, miniatura e primeiras linhas com base nas impressões e cliques.",
      "Responda rapidamente e confirme requisitos antes de iniciar o pedido.",
      "Planeje o caixa considerando 80% de receita e liberação padrão 14 dias após a conclusão.",
    ],
    pitch:
      "Thanks for reaching out. Based on your message, the best package is [package] because it includes [deliverables]. I can deliver in [time]. Before you order, please send [requirements]. Anything outside [scope limit] can be added as an extra so the delivery stays predictable.",
    metrics: [
      { label: "Gigs", value: "3 publicados" },
      { label: "Impressões", value: "Crescendo" },
      { label: "Cliques", value: "2%+" },
      { label: "Meta", value: "1 conversa" },
    ],
    warning: "Para receber R$ 1.000 antes de impostos e câmbio, o pedido precisa ser de cerca de R$ 1.250. O saldo padrão ainda passa por 14 dias de liberação.",
  },
  {
    id: "contra",
    number: "07",
    name: "Contra",
    shortName: "Contra",
    icon: Sparkles,
    accent: "#6d5dfc",
    priority: "Vitrine internacional",
    access: "Plano grátis disponível",
    cost: "Sem comissão ao freelancer",
    firstSignal: "Visita, inquiry ou job",
    verdict: "É forte como portfólio em inglês, proposta e pagamento para clientes internacionais.",
    bestFor: "Clientes próprios, startups e oportunidades internacionais com apresentação visual forte.",
    offer: "Brand site, landing page, front-end build, dashboard e automação com cases visuais.",
    cta: "Criar perfil na Contra",
    url: "https://contra.com/sign-up",
    sourceUrl: "https://contra.com/pricing",
    sourceLabel: "Planos e taxas oficiais",
    setup: [
      "Crie o perfil em inglês e escolha uma especialidade principal fácil de entender.",
      "Publique três cases completos com papel, problema, processo, resultado e imagens.",
      "Cadastre serviços com preço inicial, prazo e entregáveis objetivos.",
      "Use o perfil como destino das abordagens internacionais e das propostas externas.",
    ],
    firstWeek: [
      "Finalize o perfil antes de aplicar; a apresentação é parte central do canal.",
      "Candidate-se somente a jobs alinhados aos cases publicados.",
      "Compartilhe o perfil em mensagens do LinkedIn e contatos internacionais.",
      "Comece no plano gratuito; o Pro só faz sentido após demanda ou uso frequente.",
    ],
    pitch:
      "Hi [name], I help small teams turn [problem] into a clear, production-ready web experience. For this project I would deliver [scope] in [time], with [proof/stack]. You can review a similar case here: [link]. If useful, I can outline the first milestone before we start.",
    metrics: [
      { label: "Cases", value: "3 completos" },
      { label: "Serviços", value: "3 claros" },
      { label: "Applications", value: "5 / semana" },
      { label: "Meta", value: "1 inquiry" },
    ],
    warning: "Sem comissão não significa custo zero para todos: podem existir taxas de processamento, câmbio e recursos opcionais.",
  },
  {
    id: "getninjas",
    number: "08",
    name: "GetNinjas",
    shortName: "GetNinjas",
    icon: Smartphone,
    accent: "#f59e0b",
    priority: "Teste pago controlado",
    access: "Cadastro apenas pelo app",
    cost: "Moedas para liberar contatos",
    firstSignal: "Cliente responde ao contato",
    verdict: "Pode gerar demanda local, mas cada lead custa antes de haver garantia de resposta.",
    bestFor: "Site para negócio local, assistência tecnológica, consultoria e demandas urgentes.",
    offer: "Diagnóstico, landing page local, configuração de presença digital e correções rápidas.",
    cta: "Ver cadastro profissional",
    url: "https://www.getninjas.com.br/central-de-ajuda/profissional/cadastro-para-profissionais/posso-fazer-o-cadastro-como-profissional-pelo-site-e-pelo-aplicativo",
    sourceUrl: "https://www.getninjas.com.br/central-de-ajuda/profissional/pagamento/o-que-sao-moedas",
    sourceLabel: "Como funcionam as moedas",
    setup: [
      "Baixe o app profissional, valide o telefone e selecione serviços e cidade de atuação.",
      "Escreva um anúncio específico com entregas, exemplos e tempo médio de resposta.",
      "Defina um raio viável e ative apenas categorias que você realmente consegue atender.",
      "Não compre pacote grande antes de testar a qualidade dos pedidos recebidos.",
    ],
    firstWeek: [
      "Observe os pedidos gratuitos antes de liberar qualquer contato.",
      "Defina um teto pequeno de teste e registre o custo de cada lead.",
      "Libere apenas pedidos detalhados, próximos e com urgência compatível.",
      "Entre em contato imediatamente por WhatsApp e telefone; até quatro profissionais podem disputar o pedido.",
    ],
    pitch:
      "Olá, [nome]. Recebi seu pedido pelo GetNinjas sobre [serviço]. Para te passar um valor correto, preciso confirmar [duas perguntas]. Pela descrição, consigo entregar [resultado] em [prazo]. Posso te ligar por cinco minutos agora ou prefere continuar por aqui?",
    metrics: [
      { label: "Teto inicial", value: "R$ 50–100" },
      { label: "Leads", value: "3–5 testes" },
      { label: "Respostas", value: "40%+" },
      { label: "Regra", value: "Parar sem sinal" },
    ],
    warning: "As moedas vencem em três meses. O custo varia por pedido; trate o teste como aquisição de cliente, não como assinatura.",
  },
  {
    id: "freelancer",
    number: "09",
    name: "Freelancer.com",
    shortName: "Freelancer.com",
    icon: WalletCards,
    accent: "#29b2fe",
    priority: "Canal complementar",
    access: "Cadastro e bids grátis limitados",
    cost: "10% ou US$ 5 mín. no fixo",
    firstSignal: "Chat ou award",
    verdict: "Use como canal complementar depois que a operação principal estiver consistente.",
    bestFor: "Projetos internacionais específicos e concursos somente quando o trabalho puder ser reaproveitado.",
    offer: "Bug fix, front-end, scripts, integração de API e páginas com escopo fechado.",
    cta: "Criar conta",
    url: "https://www.freelancer.com/signup",
    sourceUrl: "https://www.freelancer.com/feesandcharges",
    sourceLabel: "Taxas oficiais",
    setup: [
      "Preencha o perfil em inglês e mantenha as mesmas ofertas do Upwork.",
      "Adicione portfólio, habilidades verificáveis e uma taxa que comporte o mínimo da plataforma.",
      "Leia a cobrança antes de aceitar um projeto premiado.",
      "Não deposite dinheiro nem aceite pagamentos fora do fluxo seguro.",
    ],
    firstWeek: [
      "Use os bids gratuitos apenas em projetos com alta aderência.",
      "Evite concursos que exijam trabalho completo sem garantia de pagamento.",
      "Cheque histórico, identidade e clareza do orçamento do cliente.",
      "Compare a taxa de resposta com Upwork e concentre energia no canal vencedor.",
    ],
    pitch:
      "Hi [name], your project needs [specific outcome]. I can deliver [scope] in [time], starting with [first milestone]. My bid includes [deliverables] and [revision limit]. Before accepting, please confirm [scope question] and fund the agreed milestone.",
    metrics: [
      { label: "Bids", value: "5 / semana" },
      { label: "Aderência", value: "80%+" },
      { label: "Chats", value: "1+" },
      { label: "Decisão", value: "14 dias" },
    ],
    warning: "Em projetos de preço fixo, a taxa de 10% ou US$ 5 pode ser cobrada ao aceitar o award; confira o risco antes de aceitar.",
  },
  {
    id: "google",
    number: "10",
    name: "Google Business Profile",
    shortName: "Google local",
    icon: Store,
    accent: "#4285f4",
    priority: "Somente se elegível",
    access: "Grátis",
    cost: "Sem comissão",
    firstSignal: "Clique, ligação ou avaliação",
    verdict: "É um canal local, não uma solução para freelancer que atende exclusivamente online.",
    bestFor: "Quem encontra clientes presencialmente ou presta serviço no local do cliente durante o horário informado.",
    offer: "Consultoria presencial, implantação local e suporte tecnológico para negócios da região.",
    cta: "Ver elegibilidade",
    url: "https://support.google.com/business/answer/13763036?hl=pt-BR",
    sourceUrl: "https://support.google.com/business/answer/7039811?hl=pt-BR",
    sourceLabel: "Guia oficial do perfil",
    setup: [
      "Confirme primeiro se o modelo faz contato presencial com clientes; negócios apenas online não são elegíveis.",
      "Use o nome real do negócio, categoria correta, telefone, site e área de atendimento precisa.",
      "Se trabalha de casa e vai até o cliente, oculte o endereço residencial e mostre apenas a área atendida.",
      "Adicione fotos reais, serviços e peça avaliações somente a clientes verdadeiros.",
    ],
    firstWeek: [
      "Conclua a verificação exigida pelo Google e revise todas as informações.",
      "Publique trabalhos reais e mantenha telefone, horário e site atualizados.",
      "Peça duas avaliações a clientes atendidos presencialmente.",
      "Meça cliques, ligações e origem dos contatos; não conte apenas visualizações.",
    ],
    pitch:
      "Use o perfil para receber a procura. Na primeira resposta: Olá, [nome]. Obrigado pelo contato. Para estimar seu projeto, preciso entender [objetivo], [prazo] e [estrutura atual]. Posso fazer uma conversa de 15 minutos e depois enviar escopo, etapas e investimento.",
    metrics: [
      { label: "Perfil", value: "100% correto" },
      { label: "Avaliações", value: "2 iniciais" },
      { label: "Contatos", value: "Rastrear origem" },
      { label: "Regra", value: "Só se elegível" },
    ],
    warning: "Criar perfil para um negócio exclusivamente online pode violar as regras e levar à suspensão.",
  },
];

const platformReports: PlatformReport[] = [
  {
    id: "upwork",
    name: "Upwork",
    icon: Globe2,
    accent: "#14a800",
    position: "Maior teto financeiro",
    model: "Proposta: o cliente publica e freelancers disputam com escopo, prazo e preço.",
    conversion: "5%–15% por proposta",
    conversionLabel: "Estimativa externa, não oficial",
    acquisition:
      "Monitore vagas recém-publicadas, valide histórico e pagamento do cliente e responda com uma proposta específica. Teste o filtro de localização Brasil para encontrar demandas nacionais, sem assumir que serão pagas em dólar.",
    fees:
      "Taxa oficial variável de 0% a 15% por contrato, exibida antes do envio e travada após proposta ou oferta. Connects custam US$ 0,15 cada; a quantidade exigida muda por vaga. Uma faixa de 4–16 Connects equivaleria a US$ 0,60–2,40, mas precisa ser conferida no anúncio.",
    currency: "USD",
    payout:
      "Exige dados fiscais e método de saque. Banco local fora dos EUA custa US$ 0,99 por transferência; PayPal e Payoneer podem aparecer conforme a conta. O nome do beneficiário deve coincidir com o nome verificado.",
    market:
      "Forte para TI, projetos especializados e contratos maiores. A concorrência é global; inglês, nicho claro e prova muito aderente pesam mais do que volume de propostas.",
    decision: "Entrar depois de ter 2–3 cases fortes em inglês e um orçamento mensal pequeno para Connects.",
    officialLinks: [
      {
        label: "Taxa por contrato",
        url: "https://support.upwork.com/hc/en-us/articles/211062538-Learn-about-the-Freelancer-Service-Fee",
      },
      {
        label: "Connects",
        url: "https://support.upwork.com/hc/en-us/articles/211062898-Understanding-and-using-Connects",
      },
      {
        label: "Saques",
        url: "https://support.upwork.com/hc/en-us/articles/211060918-How-to-get-paid-on-Upwork",
      },
    ],
  },
  {
    id: "fiverr",
    name: "Fiverr",
    icon: Store,
    accent: "#1dbf73",
    position: "Melhor para produto fechado",
    model: "Produto: você publica Gigs com pacotes e o comprador inicia o pedido.",
    conversion: "70%–80% após contato",
    conversionLabel: "Estimativa externa, não oficial",
    acquisition:
      "Trate cada Gig como uma página de produto: uma busca, uma dor, uma entrega. Otimize título, palavras-chave, capa, FAQ, requisitos e três pacotes; ajuste por impressões, cliques e conversas.",
    fees:
      "O freelancer recebe oficialmente 80% do pedido, inclusive extras e gorjetas. A referência externa analisada cita cerca de 5,5% para o comprador, mas essa cobrança deve ser confirmada no checkout.",
    currency: "USD",
    payout:
      "O saldo padrão libera 14 dias após a conclusão; programas elegíveis podem ter 7 dias. Há PayPal, transferência bancária via Payoneer e conta Payoneer, cada opção com mínimo, tarifa e prazo próprios.",
    market:
      "Bom para bugs, landing pages e entregas repetíveis. A concorrência global por preço é intensa; diferenciação vem de recorte estreito, prova visual e resposta rápida.",
    decision: "Publicar três Gigs estreitos e avaliar impressões e cliques por 30 dias antes de ampliar o catálogo.",
    officialLinks: [
      {
        label: "Ganhos de 80%",
        url: "https://help.fiverr.com/hc/en-us/articles/9234443621137",
      },
      {
        label: "Liberação do saldo",
        url: "https://help.fiverr.com/hc/en-us/articles/360010639617-Managing-your-orders-A-freelancer-s-guide-to-the-Fiverr-order-process",
      },
      {
        label: "Métodos de saque",
        url: "https://help.fiverr.com/hc/en-us/articles/360010530058-Withdrawing-your-earnings-managing-payout-methods",
      },
    ],
  },
  {
    id: "workana",
    name: "Workana",
    icon: Handshake,
    accent: "#7c3aed",
    position: "Melhor ponte para recorrência",
    model: "Proposta: projetos remotos em português e espanhol, por hora ou preço fixo.",
    conversion: "Média, sem taxa pública confiável",
    conversionLabel: "Leitura qualitativa externa",
    acquisition:
      "Entre cedo em projetos aderentes, responda a dor publicada e proponha marcos. Priorize clientes com histórico e continuidade, porque a comissão melhora na relação com o mesmo comprador.",
    fees:
      "Comissão oficial por cliente: 20% até US$ 300 acumulados, 10% de US$ 301 a US$ 3.000 e 5% acima de US$ 3.000. O cliente paga 4,5% de custo de serviço, além de eventual processamento.",
    currency: "BRL ou USD, conforme a operação",
    payout:
      "No Brasil, a central oficial lista PayPal, Payoneer e Mercado Pago. Pix direto não aparece como método oficial; do Mercado Pago, o usuário pode programar transferência para sua conta bancária.",
    market:
      "Boa presença em TI latino-americana e menor barreira de idioma. O plano Free existe, mas conexões e categoria limitam a cadência; planos pagos adicionam conexões e benefícios.",
    decision: "Buscar contratos com segunda fase ou manutenção, não apenas jobs isolados de menor preço.",
    officialLinks: [
      {
        label: "Comissão",
        url: "https://help.workana.com/hc/pt/articles/360041235874-Como-%C3%A9-calculada-a-comiss%C3%A3o-na-Workana",
      },
      {
        label: "Planos",
        url: "https://help.workana.com/hc/pt/articles/360041612574-O-que-s%C3%A3o-os-Planos-de-Benef%C3%ADcios",
      },
      {
        label: "Saques no Brasil",
        url: "https://help.workana.com/hc/pt/articles/360041937573-M%C3%A9todos-de-saque-do-dinheiro",
      },
    ],
  },
  {
    id: "99freelas",
    name: "99Freelas",
    icon: Search,
    accent: "#ff6b35",
    position: "Melhor laboratório nacional",
    model: "Proposta: mercado brasileiro com orçamento, prazo e justificativa enviados ao cliente.",
    conversion: "Média; prioridade pode ajudar",
    conversionLabel: "Leitura qualitativa externa",
    acquisition:
      "Monitore novas demandas de TI, use alertas e envie propostas nas primeiras janelas disponíveis para o seu plano. Comece pelo plano grátis e pague por prioridade somente depois de medir resposta.",
    fees:
      "Oficialmente, o 99Freelas adiciona 5%–20% à oferta, com mínimo de R$ 10, e o contratante paga esse valor. A pesquisa externa analisada cita Free 20%, Pro R$ 49,90/mês com 15% e Premium R$ 89,90/mês com 10%; confirme os preços na tela de planos antes de assinar.",
    currency: "BRL",
    payout:
      "Depósito em conta bancária após aprovação e liberação do cliente: até 6 dias úteis no Free, 4 no Pro e 2 no Premium, segundo a página oficial.",
    market:
      "Útil para portfólio inicial, avaliações e jobs curtos em português. Em projetos complexos, o preço nacional e a disputa podem comprimir margem; escopo fechado é obrigatório.",
    decision: "Usar o Free por 14 dias; considerar plano apenas se a limitação de acesso estiver bloqueando vagas realmente aderentes.",
    officialLinks: [
      {
        label: "Funcionamento, taxa e saque",
        url: "https://www.99freelas.com.br/como-funciona",
      },
    ],
  },
];

const calculatorChannels = [
  { name: "Direto / LinkedIn", fee: 0, note: "Sem comissão de plataforma" },
  { name: "Workana (novo cliente)", fee: 0.2, note: "Comissão inicial de 20%" },
  { name: "Upwork (simulação)", fee: 0.1, note: "Use a taxa mostrada no contrato; varia de 0% a 15%" },
  { name: "Fiverr", fee: 0.2, note: "Freelancer recebe 80% do pedido" },
  { name: "Freelancer.com", fee: 0.1, note: "10%; respeite também o mínimo de US$ 5" },
];

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

function ChannelSection({ channel }: { channel: Channel }) {
  const [copied, setCopied] = useState(false);

  async function copyPitch() {
    await navigator.clipboard.writeText(channel.pitch);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section id={channel.id} className="scroll-mt-28 border-t border-[#cfd5d2] bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8 lg:py-24">
        <div className="self-start lg:sticky lg:top-32">
          <div className="flex items-center gap-4">
            <span className="text-sm font-black text-[#66706b]">{channel.number}</span>
            <span className="h-px w-12" style={{ backgroundColor: channel.accent }} />
            <span className="text-xs font-black uppercase text-[#66706b]">Canal de venda</span>
          </div>

          <span
            className="mt-8 grid size-14 place-items-center rounded-md text-white"
            style={{ backgroundColor: channel.accent }}
          >
            <channel.icon size={26} aria-hidden="true" />
          </span>

          <h2 className="mt-6 max-w-md text-4xl font-black leading-[1.02] text-[#111412] sm:text-5xl">
            {channel.name}
          </h2>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-sm bg-[#111412] px-2.5 py-1.5 text-xs font-black uppercase text-white">
              {channel.priority}
            </span>
            <span className="rounded-sm border border-[#cfd5d2] px-2.5 py-1.5 text-xs font-black uppercase text-[#4f5954]">
              {channel.access}
            </span>
          </div>
          <p className="mt-6 max-w-md text-lg font-bold leading-8 text-[#252a27]">{channel.verdict}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-[#626d67]">
            <strong className="text-[#252a27]">Melhor para:</strong> {channel.bestFor}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={channel.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-[#111412] px-4 text-sm font-black text-white transition hover:translate-y-[-2px]"
            >
              {channel.cta}
              <ExternalLink size={15} aria-hidden="true" />
            </a>
            {channel.sourceUrl && (
              <a
                href={channel.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-[#cfd5d2] px-4 text-sm font-black text-[#252a27] transition hover:border-[#111412]"
              >
                Fonte oficial
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            )}
          </div>
          {channel.sourceLabel && <p className="mt-2 text-xs leading-5 text-[#7a847f]">{channel.sourceLabel}</p>}
        </div>

        <div>
          <div className="grid border-y border-[#cfd5d2] sm:grid-cols-3">
            {[
              ["Custo real", channel.cost],
              ["Primeiro sinal", channel.firstSignal],
              ["O que vender", channel.offer],
            ].map(([label, value], index) => (
              <div
                key={label}
                className={`py-5 sm:px-5 ${index > 0 ? "border-t border-[#cfd5d2] sm:border-l sm:border-t-0" : ""}`}
              >
                <p className="text-xs font-black uppercase text-[#7a847f]">{label}</p>
                <p className="mt-2 text-sm font-bold leading-6 text-[#252a27]">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-10 xl:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <UserCheck size={20} style={{ color: channel.accent }} aria-hidden="true" />
                <h3 className="text-lg font-black text-[#111412]">Cadastro que precisa converter</h3>
              </div>
              <ol className="mt-5 grid gap-4">
                {channel.setup.map((item, index) => (
                  <li key={item} className="grid grid-cols-[28px_1fr] gap-3 text-sm leading-6 text-[#56605b]">
                    <span
                      className="grid size-7 place-items-center rounded-full text-xs font-black text-white"
                      style={{ backgroundColor: channel.accent }}
                    >
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <Rocket size={20} style={{ color: channel.accent }} aria-hidden="true" />
                <h3 className="text-lg font-black text-[#111412]">Primeiros 7 dias</h3>
              </div>
              <ul className="mt-5 grid gap-4">
                {channel.firstWeek.map((item) => (
                  <li key={item} className="grid grid-cols-[22px_1fr] gap-3 text-sm leading-6 text-[#56605b]">
                    <CheckCircle2 size={18} className="mt-1" style={{ color: channel.accent }} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-md bg-[#111412] text-white">
            <div className="flex items-center justify-between gap-4 border-b border-white/15 px-5 py-4">
              <div className="flex items-center gap-3">
                <Send size={18} style={{ color: channel.accent }} aria-hidden="true" />
                <h3 className="text-sm font-black uppercase">Mensagem para adaptar</h3>
              </div>
              <button
                type="button"
                onClick={copyPitch}
                className="inline-flex h-9 shrink-0 items-center gap-2 rounded-md border border-white/20 px-3 text-xs font-black transition hover:bg-white hover:text-[#111412]"
                aria-label={`Copiar mensagem para ${channel.name}`}
              >
                {copied ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
                {copied ? "Copiada" : "Copiar"}
              </button>
            </div>
            <p className="px-5 py-6 text-sm leading-7 text-white/78">{channel.pitch}</p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-[#cfd5d2] bg-[#cfd5d2] sm:grid-cols-4">
            {channel.metrics.map((metric) => (
              <div key={metric.label} className="min-h-28 bg-[#f4f6f3] p-4">
                <p className="text-xs font-black uppercase text-[#7a847f]">{metric.label}</p>
                <p className="mt-3 text-xl font-black leading-6 text-[#111412]">{metric.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-start gap-3 border-l-4 bg-[#fff5ed] px-4 py-4" style={{ borderColor: channel.accent }}>
            <CircleAlert size={20} className="mt-0.5 shrink-0 text-[#b54708]" aria-hidden="true" />
            <p className="text-sm font-bold leading-6 text-[#65351d]">{channel.warning}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformReportCard({ platform }: { platform: PlatformReport }) {
  return (
    <article id={`relatorio-${platform.id}`} className="scroll-mt-24 border-t-4 border-[#111412] bg-white px-5 py-6 sm:px-7 sm:py-8" style={{ borderTopColor: platform.accent }}>
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-xs font-black uppercase text-[#66706b]">{platform.position}</p>
          <h3 className="mt-2 text-3xl font-black text-[#111412] sm:text-4xl">{platform.name}</h3>
        </div>
        <span className="grid size-12 shrink-0 place-items-center rounded-md text-white" style={{ backgroundColor: platform.accent }}>
          <platform.icon size={23} aria-hidden="true" />
        </span>
      </div>

      <div className="mt-7 grid gap-px overflow-hidden border border-[#cfd5d2] bg-[#cfd5d2] sm:grid-cols-3">
        {[
          ["Modelo", platform.model],
          ["Conversão", platform.conversion],
          ["Moeda", platform.currency],
        ].map(([label, value]) => (
          <div key={label} className="min-h-32 bg-[#f4f6f3] p-4">
            <p className="text-xs font-black uppercase text-[#7a847f]">{label}</p>
            <p className="mt-3 text-sm font-black leading-6 text-[#111412]">{value}</p>
            {label === "Conversão" && <p className="mt-2 text-xs leading-5 text-[#7a847f]">{platform.conversionLabel}</p>}
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-7 md:grid-cols-2">
        <div>
          <p className="text-xs font-black uppercase" style={{ color: platform.accent }}>Como conseguir clientes</p>
          <p className="mt-3 text-sm leading-7 text-[#56605b]">{platform.acquisition}</p>
        </div>
        <div>
          <p className="text-xs font-black uppercase" style={{ color: platform.accent }}>Taxas e custo de entrada</p>
          <p className="mt-3 text-sm leading-7 text-[#56605b]">{platform.fees}</p>
        </div>
        <div>
          <p className="text-xs font-black uppercase" style={{ color: platform.accent }}>Recebimento e fluxo de caixa</p>
          <p className="mt-3 text-sm leading-7 text-[#56605b]">{platform.payout}</p>
        </div>
        <div>
          <p className="text-xs font-black uppercase" style={{ color: platform.accent }}>Força em TI e concorrência</p>
          <p className="mt-3 text-sm leading-7 text-[#56605b]">{platform.market}</p>
        </div>
      </div>

      <div className="mt-8 border-l-4 bg-[#eef1ee] px-4 py-4" style={{ borderColor: platform.accent }}>
        <p className="text-xs font-black uppercase text-[#66706b]">Decisão recomendada</p>
        <p className="mt-2 text-sm font-black leading-6 text-[#252a27]">{platform.decision}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {platform.officialLinks.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center gap-2 rounded-md border border-[#cfd5d2] px-3 text-xs font-black text-[#252a27] transition hover:border-[#111412]"
          >
            {link.label}
            <ExternalLink size={13} aria-hidden="true" />
          </a>
        ))}
      </div>
    </article>
  );
}

export default function FreelancerPlanPage() {
  const [desiredNet, setDesiredNet] = useState(2000);
  const [calculatorIndex, setCalculatorIndex] = useState(1);

  const calculator = calculatorChannels[calculatorIndex];
  const gross = useMemo(() => desiredNet / (1 - calculator.fee), [calculator.fee, desiredNet]);

  return (
    <main id="top" className="min-h-screen bg-[#eef1ee] text-[#111412]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111412]/96 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Voltar ao início">
            <span className="grid size-9 place-items-center rounded-md bg-[#d7ff44] text-xs font-black text-[#111412]">TC</span>
            <span>
              <span className="block text-xs font-black uppercase text-white/48">Freela / operação</span>
              <span className="hidden text-sm font-black sm:block">Manual de receita</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
            {[
              ["Mapa", "#mapa"],
              ["Ofertas", "#ofertas"],
              ["Comparativo", "#comparativo"],
              ["Calculadora", "#calculadora"],
              ["Canais", "#direto"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="rounded-md px-3 py-2 text-sm font-bold text-white/65 hover:bg-white/10 hover:text-white">
                {label}
              </a>
            ))}
          </nav>

          <a href="#direto" className="inline-flex h-10 items-center gap-2 rounded-md bg-white px-3 text-sm font-black text-[#111412]">
            Começar
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </header>

      <section className="overflow-hidden bg-[#111412] text-white">
        <div className="mx-auto grid min-h-[630px] max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <p className="flex items-center gap-3 text-xs font-black uppercase text-[#d7ff44]">
              <span className="h-px w-10 bg-[#d7ff44]" />
              Atualizado em julho de 2026
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.98] tracking-normal sm:text-7xl lg:text-[84px]">
              Canais de venda para freelancers.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/67 sm:text-xl">
              Um manual para sair do perfil vazio e chegar ao contrato: onde entrar, como se apresentar,
              quanto custa, o que oferecer e quais números acompanhar.
            </p>
            <div className="mt-7 flex max-w-2xl items-start gap-3 border-l-4 border-[#d7ff44] bg-white/6 px-4 py-4">
              <ShieldCheck size={19} className="mt-0.5 shrink-0 text-[#d7ff44]" aria-hidden="true" />
              <p className="text-sm font-bold leading-6 text-white/72">
                Escopo fechado após análise de 10 plataformas. Pesquisa baseada em páginas oficiais, vídeos e opiniões externas; estimativas não oficiais estão identificadas.
              </p>
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#comparativo" className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#d7ff44] px-5 text-sm font-black text-[#111412]">
                Comparar plataformas
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a href="#calculadora" className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/20 px-5 text-sm font-black text-white hover:bg-white/10">
                Calcular preço líquido
                <CircleDollarSign size={18} aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.12, duration: 0.45 }}
            className="border-t border-white/18 lg:border-l lg:border-t-0 lg:pl-10"
          >
            <p className="pt-8 text-xs font-black uppercase text-white/45 lg:pt-0">Ordem de execução</p>
            <div className="mt-5 divide-y divide-white/14">
              {[
                ["Agora", "Rede própria, LinkedIn, 99Freelas e Workana", "R$ 0"],
                ["Com prova", "Upwork, Fiverr e Contra", "Baixo"],
                ["Teste", "GetNinjas e Freelancer.com", "Controlado"],
                ["Condicional", "Google Business Profile", "Só se elegível"],
              ].map(([stage, list, spend]) => (
                <div key={stage} className="grid grid-cols-[86px_1fr] gap-4 py-5">
                  <span className="text-sm font-black text-[#d7ff44]">{stage}</span>
                  <div>
                    <p className="text-sm font-bold leading-6 text-white">{list}</p>
                    <p className="mt-1 text-xs font-bold uppercase text-white/42">Investimento: {spend}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </section>

      <section id="mapa" className="scroll-mt-16 border-b border-[#cfd5d2] bg-[#eef1ee]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-xs font-black uppercase text-[#66706b]">Mapa de decisão</p>
              <h2 className="mt-3 max-w-md text-3xl font-black leading-tight sm:text-4xl">Abra poucos canais. Trabalhe todos os dias.</h2>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
              {channels.map((channel) => (
                <a
                  key={channel.id}
                  href={`#${channel.id}`}
                  className="group grid min-h-24 grid-cols-[44px_1fr_20px] items-center gap-3 rounded-md border border-[#cfd5d2] bg-white px-4 transition hover:-translate-y-0.5 hover:border-[#111412]"
                >
                  <span className="grid size-10 place-items-center rounded-md text-white" style={{ backgroundColor: channel.accent }}>
                    <channel.icon size={19} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-black text-[#7a847f]">{channel.number}</span>
                    <span className="mt-1 block text-sm font-black leading-5 text-[#111412]">{channel.shortName}</span>
                  </span>
                  <ArrowRight size={16} className="text-[#9aa39e] transition group-hover:translate-x-1 group-hover:text-[#111412]" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="ofertas" className="scroll-mt-16 bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase text-[#66706b]">O que colocar à venda</p>
              <h2 className="mt-3 max-w-md text-4xl font-black leading-tight sm:text-5xl">Ofertas fáceis de entender e comprar.</h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[#626d67]">
              Estas são faixas iniciais para testar posicionamento, não uma tabela universal de mercado. Ajuste por urgência,
              complexidade, conteúdo, integrações e número de revisões. Escopo fechado protege margem.
            </p>
          </div>

          <div className="mt-10 grid border-y border-[#cfd5d2] lg:grid-cols-5">
            {offers.map((offer, index) => (
              <article key={offer.name} className={`py-6 lg:px-5 ${index > 0 ? "border-t border-[#cfd5d2] lg:border-l lg:border-t-0" : ""}`}>
                <span className="text-xs font-black text-[#7a847f]">0{index + 1}</span>
                <h3 className="mt-4 text-lg font-black leading-6 text-[#111412]">{offer.name}</h3>
                <p className="mt-3 text-xl font-black text-[#0c6e55]">{offer.price}</p>
                <p className="mt-1 text-xs font-black uppercase text-[#7a847f]">{offer.time}</p>
                <p className="mt-5 text-sm leading-6 text-[#626d67]">{offer.use}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="comparativo" className="scroll-mt-16 border-y border-[#cfd5d2] bg-[#eef1ee] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase text-[#66706b]">Mini-relatório estratégico</p>
              <h2 className="mt-3 max-w-lg text-4xl font-black leading-tight sm:text-5xl">
                Quatro plataformas. Quatro jogos diferentes.
              </h2>
            </div>
            <div>
              <p className="max-w-2xl text-base leading-8 text-[#626d67]">
                Upwork vende proposta técnica, Fiverr vende produto, Workana favorece relacionamento recorrente e 99Freelas acelera a entrada no mercado brasileiro. Escolha pelo modelo de venda, não apenas pelo volume de vagas.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs font-black uppercase">
                <span className="rounded-sm bg-[#111412] px-2.5 py-1.5 text-white">Oficial: taxas e saques</span>
                <span className="rounded-sm border border-[#9aa39e] px-2.5 py-1.5 text-[#56605b]">Externo: conversão e percepção</span>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-5 xl:grid-cols-2">
            {platformReports.map((platform) => (
              <PlatformReportCard key={platform.id} platform={platform} />
            ))}
          </div>
        </div>
      </section>

      <section id="calculadora" className="scroll-mt-16 border-y border-[#cfd5d2] bg-[#d7ff44] py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3 text-[#334000]">
              <BadgeDollarSign size={22} aria-hidden="true" />
              <p className="text-xs font-black uppercase">Calculadora de proposta</p>
            </div>
            <h2 className="mt-4 max-w-md text-4xl font-black leading-tight sm:text-5xl">Comece pelo valor que precisa sobrar.</h2>
            <p className="mt-5 max-w-md text-sm font-bold leading-7 text-[#445300]">
              Estimativa antes de impostos, câmbio e tarifas de saque. Confira sempre a taxa mostrada pela plataforma no momento da proposta.
            </p>
          </div>

          <div className="min-w-0">
            <label htmlFor="desired-net" className="text-sm font-black text-[#263000]">Quanto você quer receber?</label>
            <div className="mt-3 flex h-16 items-center rounded-md border-2 border-[#111412] bg-white px-4">
              <span className="mr-3 text-lg font-black text-[#66706b]">R$</span>
              <input
                id="desired-net"
                type="number"
                min="100"
                step="100"
                value={desiredNet}
                onChange={(event) => setDesiredNet(Math.max(100, Number(event.target.value) || 100))}
                className="min-w-0 flex-1 bg-transparent text-2xl font-black outline-none"
              />
            </div>

            <div className="mt-4 flex gap-2 overflow-x-auto pb-2" aria-label="Selecionar canal para cálculo">
              {calculatorChannels.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setCalculatorIndex(index)}
                  className={`h-10 shrink-0 rounded-md border-2 border-[#111412] px-3 text-xs font-black transition ${
                    calculatorIndex === index ? "bg-[#111412] text-white" : "bg-transparent text-[#111412] hover:bg-white"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="mt-5 grid gap-5 rounded-md bg-[#111412] p-5 text-white sm:grid-cols-[1fr_auto] sm:items-end">
              <div>
                <p className="text-xs font-black uppercase text-white/48">Valor mínimo da proposta</p>
                <p className="mt-2 text-4xl font-black text-[#d7ff44] sm:text-5xl">{currency.format(gross)}</p>
                <p className="mt-2 text-sm text-white/58">{calculator.note}</p>
              </div>
              <div className="sm:text-right">
                <p className="text-xs font-black uppercase text-white/48">Taxa simulada</p>
                <p className="mt-2 text-2xl font-black">{Math.round(calculator.fee * 100)}%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#cfd5d2] bg-[#eef1ee] py-12">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { icon: Target, title: "Escolha 4 canais", text: "Direto, LinkedIn, 99Freelas e Workana primeiro." },
            { icon: Clock3, title: "Execute 14 dias", text: "Tempo suficiente para medir proposta e resposta." },
            { icon: TrendingUp, title: "Acompanhe sinais", text: "Resposta, conversa, proposta e fechamento." },
            { icon: Banknote, title: "Invista depois", text: "Plano pago só quando remover um limite real." },
          ].map((rule) => (
            <div key={rule.title} className="flex gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-md bg-[#111412] text-[#d7ff44]">
                <rule.icon size={19} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-black text-[#111412]">{rule.title}</p>
                <p className="mt-1 text-sm leading-6 text-[#626d67]">{rule.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {channels.map((channel) => (
        <ChannelSection key={channel.id} channel={channel} />
      ))}

      <section className="bg-[#111412] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase text-[#d7ff44]">Próxima ação</p>
            <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">
              Hoje: 5 mensagens, LinkedIn Services e dois perfis completos.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">
              Amanhã começa a rotina de propostas. O canal que não gerar nenhum sinal em 14 dias precisa de ajuste ou pausa.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a href="#direto" className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#d7ff44] px-5 text-sm font-black text-[#111412]">
              Voltar ao primeiro canal
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#111412] px-4 pb-10 text-white/45 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs leading-5 sm:flex-row sm:items-center sm:justify-between">
          <p>Escopo fechado após análise de 10 plataformas; pesquisa oficial e referências externas identificadas.</p>
          <div className="flex items-center gap-2">
            <ShieldCheck size={15} aria-hidden="true" />
            <span>Taxas e regras podem mudar. Sem promessa de renda; execução, proposta e mercado determinam o resultado.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
