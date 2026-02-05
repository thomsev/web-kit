# AGENTS.md — web-starter

## Purpose
`web-starter` is a dependency-light Astro starter for customer websites.
It is designed as a reusable mother repo with:
- routing/layouts in Astro,
- global SCSS theme tokens,
- JSON-driven content structure that is headless-ready.

The content model must remain easy to swap from local JSON to a headless CMS API (for example WordPress).

## Stack (locked baseline)
- Astro
- TypeScript
- Sass/SCSS

Do not add UI frameworks or utility CSS frameworks in this baseline.

## Folder structure rules (must follow)
- `src/pages/*`: route-level files only (thin composition).
- `src/layouts/*`: page shells and global wrappers.
- `src/components/*`: reusable generic UI components.
- `src/sections/*`: page sections that render typed section data.
- `src/content/*`: content source files and type definitions.
- `src/lib/*`: data loaders/helpers (e.g. content lookup, SEO assembly).
- `src/styles/*`: tokens, reset, base, layout, component-level global styles.
- `public/*`: static assets.

### Must not do
- Do not invent new top-level folders under `src` without explicit team approval.
- Do not move content types out of `src/content/types.ts` without explicit reason and migration notes.

## Styling rules
- SCSS is the styling system.
- Use tokens from `src/styles/_tokens.scss` for color, spacing, typography, radius, and focus ring.
- No inline styles in `.astro` files.
- Prefer BEM-ish class naming (`block`, `block__element`, `block--modifier`).
- Avoid magic numbers; prefer token variables.
- No new styling libraries (no Tailwind, no CSS-in-JS, no component library).

## Page composition rules
- Pages are orchestrators only:
  - load data
  - map sections
  - pass typed props
- Sections are presentational and receive ready data.
- No data fetching/loading logic inside section components.
- Keep content loading in `src/lib/content.ts`.

## Accessibility baseline
- Keep visible focus state via `:focus-visible`.
- Never remove focus outlines without a replacement that is clearly visible.
- Include a skip link to main content in layout.
- Use semantic landmarks (`header`, `main`, `footer`) as needed.
- Headings must follow logical order (no skipping levels arbitrarily).
- Interactive controls must have clear labels.
- Color contrast should remain legible against background tokens.

## Definition of Done (DoD)
A change is complete only when all items pass:
1. `npm run check` passes.
2. `npm run build` passes.
3. Route pages render with typed content and no runtime section errors.
4. Any new section type has:
   - TypeScript type update,
   - JSON example content,
   - renderer mapping in page.
5. Styling uses existing token system and SCSS conventions.
6. Accessibility baseline remains intact (focus, headings, labels, skip link).
7. README is updated when conventions or workflow change.

## Never do
- Never add dependencies without explicit approval.
- Never remove `:focus-visible` styling.
- Never bypass tokens by hardcoding random colors/spacings everywhere.
- Never place business/content loading logic inside section files.
- Never rename/move core content model files randomly.
