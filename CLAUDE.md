# CLAUDE.md — Automata Portfolio

Guidance for AI assistants working in this repo.

## What this is

Astro 5 static portfolio + case-study site for Automata (Peru). Terminal /
dev-brutalist aesthetic: JetBrains Mono everywhere, black background, green
(`#4ADE80`) + cyan (`#06B6D4`) + amber (`#FBBF24`) accents, `$ ▸ ○ //`
prompt grammar. Bilingual (EN default, ES under `/es`).

## Run / build

- WSL Node is **18.x (too old for Astro)**. Use Node 20 via nvm:
  `export PATH=$HOME/.nvm/versions/node/v20.20.2/bin:$PATH`
- The repo lives on a `\\wsl.localhost\...` UNC path; the Windows Bash tool
  runs through CMD which **can't cd into UNC paths**. Run npm via
  `wsl -d ubuntu -- bash -lc '<script-file>'` (inline `export PATH=...(x86)...`
  breaks bash quoting — write a `/tmp/*.sh` script and run it).
- `npm run dev` → http://localhost:4321 · `npm run build` · `npm run check`
  (astro check) · `npm run audit:i18n` · `npm run test:e2e` (Playwright).

## Content model

All project data lives in **`src/i18n/translations.ts`** under
`translations.{en,es}.solutions.items[]`. The shape is typed by
**`src/types/project.ts`** (`Project` interface). Adding a project = add one
object to BOTH locales (run `npm run audit:i18n` to confirm parity). Every
section of a case study renders only if its field is present, so partial
projects degrade gracefully.

Route files in `src/pages/projects/[slug].astro` and
`src/pages/es/projects/[slug].astro` build the pages, compute prev/next +
related (shared-tech) and pass a TechArticle JSON-LD payload.

## Key components (`src/components/`)

- **ProjectDetail.astro** — the case-study template (10 sections + reading
  time, GitHub stats, permalinks, webmentions). Heavy file.
- **MermaidViewer.astro** — view/source tabs, editable source, share-URL,
  lazy CDN load of mermaid@11 from esm.sh, terminal-themed via themeCSS.
- **MasterDetail.astro** — sidebar picker. NOTE: Astro rejects
  `<slot name={dynamic}/>` in a `.map()`; the API uses one default slot and
  callers tag panes with `data-md-key`.
- **Carousel.astro** — transform-based (NOT scroll-snap, which fights Lenis).
- **CommandPalette.astro** (Cmd+K), **KeyboardHelp.astro** (?),
  **Lightbox.astro**, **TableOfContents.astro** (sticky + mobile drawer),
  **ProjectsGrid.astro** (URL-synced filters).

## Conventions

- Diagrams: **flowchart + classDef**, not `C4Context` syntax (C4 paints
  inline fills that don't theme cleanly). Keep an `ascii` fallback.
- Code blocks: highlighted server-side with **Shiki** (custom `automataShikiTheme`
  in ProjectDetail). Zero client JS for highlighting.
- CSS tokens in `src/styles/global.css` (`--green`, `--line`, `--panel`, …).
  Hover state = border-color change, no shadows/gradients.
- Grid + code blocks: use `minmax(0,1fr)` + `min-w-0` or columns blow out.
- Modals share `window.__focusTrap` (defined in Layout) for a11y.

## Env (set in `.env` to activate)

`PUBLIC_FORMSPREE_ID`, `PUBLIC_CAL_LINK`, `PUBLIC_PLAUSIBLE_DOMAIN`,
`PUBLIC_WEBMENTION_DOMAIN`. All optional — features no-op without them.

## Deploy

`.github/workflows/ci.yml` (typecheck + build + e2e + lighthouse, soft) and
`deploy.yml` (FTP to automata.pe on push to main). `astro.config.mjs` sets
`site: https://automata.pe` for canonical/OG/sitemap URLs.

## Commit style

Conventional commits, granular (one feature per commit), Spanish or English
body. Co-author trailer is used in this repo's history.
