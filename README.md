# Sief Portfolio

Personal developer portfolio for **Sief Addeen Aldardeesi** — Backend Developer (.NET & ASP.NET Core, AI Engineering) based in Amman, Jordan.

Built with Angular 21, standalone components, SCSS (BEM), and SweetAlert2. Dark mode by default with a persisted light/dark theme toggle.

## Features

- Single-page layout with anchor-scroll sections: Hero, About, Skills, Experience, Education (with certifications), Projects, Contact
- Lazy-loaded project detail route at `/projects/:slug`
- Centralized `AlertService` wrapping SweetAlert2 (toasts, modals, confirmations)
- `ThemeService` with localStorage persistence and flash-free first paint
- Scroll-reveal animations with reduced-motion support
- Reactive contact form with validation
- Responsive, mobile-first design (480 / 768 / 1024 / 1280 breakpoints)
- SEO metadata: Open Graph, Twitter card, and JSON-LD `Person` schema
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
| `npm run build:pages` | Production build for GitHub Pages (`/sief-portfolio/` base href) |
| `npm test` | Unit tests (Vitest) |
| `npm run lint` | ESLint |
| `npm run format` | Prettier write |

## Content

All personal copy lives in the data layer, not in templates:

| File | Contents |
| --- | --- |
| `src/app/core/config/site-config.ts` | Name, role, title, location, hero tagline, About bio, hero roles & stats, contact details, nav and social links |
| `src/app/core/data/skills.data.ts` | Skill groups (Backend, Frontend, Databases, AI & ML, Architecture, Integration, DevOps) |
| `src/app/core/data/experience.data.ts` | Work history, education, and certifications |
| `src/app/core/data/projects.data.ts` | Projects, including the `/projects/:slug` detail content |
| `src/app/core/data/languages.data.ts` | Spoken languages and proficiency |

Types for all of the above are in `src/app/core/models/`. SEO metadata (title,
description, Open Graph, Twitter card, JSON-LD `Person` schema) lives in
`src/index.html` and must be updated alongside `site-config.ts`.

## Maintenance checklist

1. **CV** — replace `public/assets/cv/SiefAddeenAldardeesiCv.pdf`, keeping the
   filename in sync with `SITE.cvPath` / `SITE.cvFileName` in `site-config.ts`.
2. **GitHub repo URLs** — verify project repo names in `src/app/core/data/projects.data.ts`.
3. **Canonical & Open Graph URLs** — update the `canonical`, `og:url` and JSON-LD
   `url` values in `src/index.html` if the site moves off GitHub Pages.
4. **Share image** — no `og:image` is set yet; add one and switch the Twitter
   card from `summary` to `summary_large_image`.

## Known issues

- The Vitest suite does not run: there is no Vitest config, so `describe` is
  undefined and all spec files fail. Needs `globals: true` (or explicit imports).
- `npm run lint` reports one pre-existing `preserve-caught-error` violation in
  `src/app/core/services/contact.service.ts`.
- `npm run format:check` flags most of the repo; Prettier has not been run
  across it.

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

Live URL: `https://siefaddeendardeesi.github.io/sief-portfolio/`

1. Push this repo to GitHub (default branch `main`).
2. In repo **Settings → Pages**:
   - **Source:** Deploy from a branch
   - **Branch:** `gh-pages` → `/ (root)` → **Save**
3. Push to `main` — the workflow builds the app and publishes to the `gh-pages` branch.
4. Wait 1–2 minutes, then open the live URL above.

If your repo name is not `sief-portfolio`, update the `build:pages` script in `package.json` to match.

**Troubleshooting:** If you see “There isn't a GitHub Pages site here”, confirm step 2 uses the `gh-pages` branch (created automatically after the first successful workflow run).

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
