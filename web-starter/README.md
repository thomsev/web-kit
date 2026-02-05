# web-starter

Astro + TypeScript + SCSS starter for customer projects.

This repository is built as a **mother repo**:
- simple routing/layouts with Astro,
- global SCSS token-based theme,
- JSON content model shaped as headless-ready `sections[]` blocks.

## Stack
- Astro
- TypeScript
- Sass (SCSS)

## Run locally
```bash
npm install
npm run dev
```

Open the URL shown in terminal (typically `http://localhost:4321`).

## Build and verify
```bash
npm run check
npm run build
npm run preview
```

## Content editing
Primary content file:
- `src/content/site.json`

Structure:
- `site`: global site-level values (name, URL, locale)
- `pages[]`: route-level entries
  - `slug`: URL slug (`/`, `/kontakt`)
  - `title`, `description`
  - `sections[]`: ordered section blocks

Each section has a `type` key and matching fields.
This keeps rendering compatible with future headless CMS delivery.

## Conventions
- Keep pages thin (`src/pages/*`): load data + map sections.
- Keep rendering in `src/sections/*`.
- Keep types in `src/content/types.ts`.
- Keep data access helpers in `src/lib/*`.
- Keep styles token-driven in `src/styles/*`.

## Add a new section type
1. Add section type in `src/content/types.ts`.
2. Add section content example in `src/content/site.json`.
3. Add a section component in `src/sections/*`.
4. Update page mapping (switch) to render the new section type.

## Environment
Copy `.env.example` to `.env` if you need environment variables later.
Current starter does not require env vars for local run.
