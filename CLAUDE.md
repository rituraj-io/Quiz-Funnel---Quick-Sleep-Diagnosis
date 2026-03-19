@AGENTS.md

# Drift — Sleep Quiz Funnel

## Project Overview

Marketing funnel for Drift, a personalized 21-day digital sleep program. Flow: Landing Page → Quiz → Results → Checkout → Success. The actual product/app is not part of this build.

## Tech Stack

- **Framework:** Next.js 16.2 (App Router, Turbopack)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4 (utility-first, `@theme inline` tokens in globals.css)
- **Payments:** Stripe (Payment Intents API, `@stripe/react-stripe-js`)
- **Fonts:** Plus Jakarta Sans (headings), Manrope (body), Noto Sans Arabic (Arabic locale)
- **i18n:** Client-side React Context (`src/i18n/`) with localStorage persistence

## Key Conventions

### DRY Principle

Follow DRY rigorously. Do not duplicate logic, constants, or UI patterns. Extract shared code into reusable modules. If something exists once, reference it — don't copy it.

### Styling

- Color tokens defined in `src/app/globals.css` via `@theme inline` — always use token names (e.g., `text-dark-teal`, `bg-onyx`), not raw hex values
- Design language: "Nocturnal Horizon" — dark backgrounds, frosted blue accents, glassmorphic cards, generous whitespace
- No harsh borders — use tonal layering and subtle opacity-based borders
- Buttons use `.btn-primary` class from globals.css for shine + hover effects
- Use `min-h-dvh` (not `min-h-screen`) on page containers for mobile browser compatibility
- Use Tailwind logical properties for RTL: `text-start`/`text-end`, `ms-`/`me-`/`ps-`/`pe-`, `start-`/`end-` (not `left`/`right`/`ml-`/`mr-`)

### i18n

- 3 languages: English (default), Russian (`ru`), Arabic (`ar` — RTL)
- All user-facing strings live in `src/i18n/translations/{en,ru,ar}.ts`
- Type-safe: `src/i18n/types.ts` enforces all keys present in every translation file
- Access via `useTranslation()` hook → `{ t, locale, setLocale }`
- Arabic triggers `dir="rtl"` + Noto Sans Arabic font swap via `html.font-arabic` class
- Russian uses Manrope for headings via `html.font-russian` class (Plus Jakarta Sans lacks Cyrillic)
- Never hardcode user-facing English strings in components — always use `t.*` keys
- Quiz scoring data stays in `src/data/quizQuestions.ts` (separate from translations)

### Components

- Shared components in `src/components/shared/` (Header, Footer, ScrollReveal, LanguageSwitcher)
- Page-specific components grouped by feature: `landing/`, `quiz/`, `results/`, `checkout/`
- Animations: `ScrollReveal` wrapper for intersection observer fade-ups, CSS keyframes in globals.css
- `prefers-reduced-motion` respected — all animations disabled when user prefers reduced motion

### File Structure

```
src/
  app/           — Pages (App Router), layout, globals.css, API routes
  components/    — UI components grouped by feature
  data/          — Quiz scoring data, result content reference
  hooks/         — Custom React hooks
  i18n/          — Translation types, language files, context provider
docs/            — Design spec, funnel plan, implementation plans
```

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build (also runs TypeScript check)
- `npm run lint` — ESLint
- `npx prettier --write "src/**/*.{ts,tsx,css}"` — Format code

## Before Writing Code

- Read relevant Next.js 16 docs in `node_modules/next/dist/docs/` (per AGENTS.md)
- Check `src/app/globals.css` for existing color tokens and animation classes
- Check `src/i18n/types.ts` for translation structure before adding new strings
