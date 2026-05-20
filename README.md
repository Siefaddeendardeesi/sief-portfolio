# Sief Portfolio

Personal developer portfolio for **Sief Addeen Aldardeesi** — Full-Stack .NET Developer based in Amman, Jordan.

Built with Angular 21, standalone components, SCSS (BEM), and SweetAlert2. Dark mode by default with a persisted light/dark theme toggle.

## Features

- Single-page layout with anchor-scroll sections: Hero, About, Skills, Experience, Education, Projects, Contact
- Lazy-loaded project detail route at `/projects/:slug`
- Centralized `AlertService` wrapping SweetAlert2 (toasts, modals, confirmations)
- `ThemeService` with localStorage persistence and flash-free first paint
- Scroll-reveal animations with reduced-motion support
- Reactive contact form with validation
- Responsive, mobile-first design (480 / 768 / 1024 / 1280 breakpoints)
- GitHub Pages deploy workflow included

## Screenshots

> Add screenshots to `docs/screenshots/` and link them here after your first deploy.

## Prerequisites

- Node.js 20+ (22 recommended)
- npm 10+

## Getting started

```bash
cd sief-portfolio
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200).

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Dev server |
| `npm run build:prod` | Production build |
| `npm test` | Unit tests (Vitest) |
| `npm run lint` | ESLint |
| `npm run format` | Prettier write |

## Before you publish

1. **Contact details** — edit `src/app/core/config/site-config.ts` and replace the placeholder email, phone, LinkedIn, and GitHub values.
2. **CV** — place your PDF at `public/assets/cv/Sief-Addeen-Aldardeesi-CV.pdf` (replace the placeholder).
3. **GitHub repo URLs** — verify project repo names in `src/app/core/data/projects.data.ts`.

## Production build

```bash
npm run build:prod
```

Output: `dist/sief-portfolio/browser`

For GitHub Pages (project site at `https://<user>.github.io/sief-portfolio/`):

```bash
npm run build:prod -- --base-href /sief-portfolio/
```

## Deploy to GitHub Pages

1. Push this repo to GitHub (default branch `main`).
2. In repo **Settings → Pages**, set source to **GitHub Actions**.
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and deploys automatically.

If your repo name is not `sief-portfolio`, update the `--base-href` flag in the workflow to match.

## Project structure

```
src/
├── app/
│   ├── core/          # config, models, data, services
│   ├── features/      # page sections & routes
│   └── shared/        # icons, animations, directives
└── styles/            # SCSS architecture (abstracts, base, layout, components, theme)
```

## Path aliases

| Alias | Path |
| --- | --- |
| `@core/*` | `src/app/core/*` |
| `@shared/*` | `src/app/shared/*` |
| `@features/*` | `src/app/features/*` |
| `@assets/*` | `public/assets/*` |

## License

MIT © Sief Addeen Aldardeesi
