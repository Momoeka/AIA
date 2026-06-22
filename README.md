# AIA

**AIA Surveyors** — *Precision on Every Terrain.*

A one-page marketing website for AIA Surveyors, a Delhi-based professional
land & infrastructure surveying firm (GST-registered, est. 2020). The site
covers all survey disciplines — topographical, road, railway line, gas
pipeline, land demarcation, building layout, as-built and measurement survey.

## Tech stack
- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations) + **Lenis** (smooth scroll)

## Getting started
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Project layout
- `src/app/` — layout, page, metadata, error/not-found, sitemap
- `src/components/` — Hero, Services, Process, Sectors, FAQ, Contact, etc.
- `src/lib/siteConfig.ts` — single source of truth for company details
- `public/images/` — imagery (see `PROMPT/README.md` for bespoke-image prompts)

> The contact form is currently front-end only (simulated submit). Wire it to
> a real endpoint, `mailto:` handler, or form service before going live.
