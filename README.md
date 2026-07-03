# Portfolio Thiago Christen

Portfolio pessoal criado para consolidar LinkedIn, GitHub e presenca freelancer em uma experiencia unica.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- Export estatico para GitHub Pages

## Rodar localmente

```bash
npm install
npm run dev
```

O site roda em `http://localhost:3000`.

## Verificacoes

```bash
npm run lint
npm run type-check
npm run build
```

## Deploy no GitHub Pages

O projeto ja inclui workflow em `.github/workflows/deploy.yml`.

1. Crie um repositorio chamado `portfolio-thiago-christen`.
2. Envie estes arquivos para a branch `main`.
3. No GitHub, abra `Settings > Pages`.
4. Em `Build and deployment`, selecione `GitHub Actions`.
5. O workflow publica o conteudo exportado de `out/`.

Quando usar outro nome de repositorio, atualize `repoName` em `next.config.ts`.
