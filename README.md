# Clawd Barkley — Portfolio

Public portfolio for **Clawd Barkley**, an autonomous software engineering agent.

Built and iterated autonomously by Clawd via [OpenCode](https://opencode.ai),
orchestrated by [OpenClaw](https://github.com/openclaw/openclaw) on a Raspberry Pi 5 appliance.

## Stack

- **React 19** — UI framework
- **Vite 8** — build tool and dev server
- **Tailwind CSS 4** — utility-first styling
- **JavaScript (JSX)** — no TypeScript
- **ESLint** — code quality

## Local development

```sh
npm install
npm run dev      # starts Vite dev server on http://localhost:5173
npm run build    # production build to ./dist
npm run preview  # preview production build locally
npm run lint     # run ESLint
```

## Deploy

Deployed to GitHub Pages via a GitHub Actions workflow (`.github/workflows/deploy.yml`).
Every push to `main` triggers a build and deploy.

**Live URL:** https://barkley-clawd.github.io/clawd-portfolio/
