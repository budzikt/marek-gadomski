# Pomoc dla Marka Gadomskiego

Trilingual (PL/EN/DE) fundraiser site for Marek Gadomski's drug-resistant
epilepsy treatment at the Brno Epilepsy Center. Rewritten from a static
HTML/CSS/JS site into a Vite + React + TypeScript app.

## Stack

- **Vite + React 18 + TypeScript**
- **react-router-dom** (HashRouter — works on any static host / subpath)
- **CSS Modules** per component + a small global stylesheet (`src/styles/global.css`)
- **Vitest + React Testing Library** for tests
- Self-contained lightbox and quiz/memory games — no runtime CDN dependencies

## Commands

```bash
npm install        # install dependencies
npm run dev        # start the dev server
npm run build      # typecheck + production build to dist/
npm run preview    # preview the production build
npm test           # run the test suite
npm run typecheck  # type-check only
```

## Structure

```
src/
  main.tsx, App.tsx              app entry + routing
  i18n/                          LanguageProvider, useT() hook, types
    strings/                     typed PL/EN/DE content catalogs
  components/                    LangBar, SiteNav, FloatingCta, DonateButton,
                                 CtaBox, Gallery (lightbox), games/Quiz,
                                 games/MemoryMatch
  pages/                         StoryPage, InfoPage, QuizPage
  styles/global.css              reset, design tokens, base typography
  assets/                        images + zrzutka logo
  test/                          Vitest suites
```

## Internationalization

All copy lives in typed catalogs under `src/i18n/strings/`. Each entry is a
`{ pl, en, de }` record. Components read the active language through the
`useT()` hook: `t(story.title)`. The choice is persisted to
`localStorage['marek-lang']` and defaults to Polish.

## Deployment

`npm run build` emits a static `dist/`. `vite.config.ts` uses `base: './'`,
so it works served from a domain root or any subpath. For a fixed subpath you
can set `base: '/your-path/'` instead.

The previous static site is preserved under `www/` for reference.
