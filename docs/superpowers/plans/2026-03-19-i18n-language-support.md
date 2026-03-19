# i18n Language Support Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add client-side i18n with English (default), Russian, and Arabic support across all 5 pages, with localStorage persistence, a language switcher in the nav, and full RTL layout flip for Arabic.

**Architecture:** Pure client-side React Context approach. A `LanguageProvider` wraps the app, reads/writes `localStorage('drift-lang')`, and exposes translations via `useTranslation()` hook. Arabic triggers `dir="rtl"` and `lang="ar"` on `<html>`, plus swaps fonts to Noto Sans Arabic. No routing changes needed — all pages stay at their current paths. Translation objects are typed TypeScript files.

**Tech Stack:** React Context, localStorage, Google Fonts (Noto Sans Arabic), Tailwind RTL logical properties (`ps-`, `pe-`, `ms-`, `me-`, `text-start`, `text-end`), existing Next.js 16.2 + Tailwind 4 setup.

---

## File Structure

### New Files (7)

| File | Responsibility |
|------|---------------|
| `src/i18n/types.ts` | TypeScript type definition for the full translation object |
| `src/i18n/translations/en.ts` | English translations (all copy from all pages) |
| `src/i18n/translations/ru.ts` | Russian translations |
| `src/i18n/translations/ar.ts` | Arabic translations |
| `src/i18n/LanguageContext.tsx` | React context, provider, `useTranslation()` hook, `useLanguage()` hook, localStorage sync, `<html>` dir/lang management |
| `src/i18n/index.ts` | Barrel export |
| `src/components/shared/LanguageSwitcher.tsx` | Globe icon dropdown — 3 languages |

### Modified Files (17)

| File | What Changes |
|------|-------------|
| `src/app/layout.tsx` | Add Noto Sans Arabic font + `cyrillic` subset to existing fonts, wrap children in `LanguageProvider`, add `suppressHydrationWarning` on `<html>` |
| `src/app/globals.css` | Add RTL overrides, Arabic font class, rtl-flip utility |
| `src/app/not-found.tsx` | Use translations for 404 heading, body, CTA (add `'use client'`) |
| `src/components/shared/Header.tsx` | Import `LanguageSwitcher`, place left of CTA; use translations for nav links; add to mobile menu |
| `src/components/shared/Footer.tsx` | Use translations for all copy |
| `src/components/landing/HeroSection.tsx` | Use translations for all copy (add `'use client'`) |
| `src/components/landing/ProblemSection.tsx` | Use translations for cards + heading |
| `src/components/landing/HowItWorksSection.tsx` | Use translations for steps |
| `src/components/landing/WhatYouGetSection.tsx` | Use translations for features + card labels ("Current State", "Deep Recovery Phase") (add `'use client'`) |
| `src/components/landing/SocialProofSection.tsx` | Use translations for testimonials + stats (both desktop AND mobile render blocks) |
| `src/components/landing/FAQSection.tsx` | Use translations for FAQ items |
| `src/components/landing/FinalCTASection.tsx` | Use translations for CTA copy (add `'use client'`) |
| `src/components/quiz/QuizFlow.tsx` | Use translations for questions, options, buttons, counter; RTL slide direction |
| `src/components/results/ResultsFlow.tsx` | Use translations for all result copy |
| `src/components/checkout/CheckoutFlow.tsx` | Use translations for plan cards, order summary, trust signals |
| `src/components/checkout/StripeCheckoutForm.tsx` | Use translations for button text + processing state + error text |
| `src/components/checkout/SuccessFlow.tsx` | Use translations for success copy |

**NOT modified:** `src/data/quizQuestions.ts`, `src/data/resultContent.ts` — these stay as scoring data only. All user-facing text moves into translation files.

**Intentionally English-only:** Page metadata (`title`, `description`, OpenGraph, Twitter) in server component page files (`page.tsx`). These cannot use the client-side i18n hook and are best left in English for SEO/social sharing consistency. API error messages in `route.ts` also remain English.

---

## Task 1: Translation Type System

**Files:**
- Create: `src/i18n/types.ts`

This defines the shape of every translation file. All keys are mandatory — TypeScript enforces completeness.

- [ ] **Step 1: Create `src/i18n/types.ts`**

Key sections in the type:
- `header` — nav links + CTA
- `hero` — badge, heading (2 parts), subtitle, buttons, microtext
- `problem` — heading, subtitle, 2 cards (icon stays, title+desc+link translated)
- `howItWorks` — heading, 3 steps (title+desc)
- `whatYouGet` — heading, 3 features (title+desc), card labels
- `socialProof` — 3 testimonials (quote+attribution), 3 stats (label only — numbers stay)
- `faq` — heading, 3 items (question+answer)
- `finalCta` — heading, subtitle, button, microtext
- `footer` — description, 3 columns (heading + links labels), copyright
- `quiz` — counter format ("of"), back/continue/seeResults, 10 questions each with question/subtext/4 options
- `results` — analyzing phase (heading+subtext), stats, testimonials, and per-sleep-type content (label, heading, subtitle, whatsHappening, protocolHeading, 5 protocol items, CTA text, guarantee)
- `checkout` — diagnosis label prefix, page heading, plan names (monthly/annual), plan details, order summary labels, demo notice, buttons, trust signals, microtext
- `success` — heading, subtitle, 3 next-steps, sleep type box, CTA button, contact text

- [ ] **Step 2: Verify types compile** — `npx tsc --noEmit src/i18n/types.ts`

---

## Task 2: English Translation File

**Files:**
- Create: `src/i18n/translations/en.ts`

Extract ALL hardcoded English strings from every component into this file. This is the source of truth.

- [ ] **Step 1: Create `src/i18n/translations/en.ts`** with every string from:
  - Header.tsx (Home, Science, Community, Take the Quiz)
  - HeroSection.tsx (badge, heading parts, subtitle, CTA texts)
  - ProblemSection.tsx (heading, subtitle, 2 cards, link text)
  - HowItWorksSection.tsx (heading, 3 steps)
  - WhatYouGetSection.tsx (heading, 3 features, card labels)
  - SocialProofSection.tsx (3 testimonials, 3 stat labels)
  - FAQSection.tsx (heading, 3 Q&As)
  - FinalCTASection.tsx (heading, subtitle, button, microtext)
  - Footer.tsx (description, columns, copyright)
  - QuizFlow.tsx ("of", "Back", "Continue", "See My Results", all 10 questions + subtexts + 40 options)
  - ResultsFlow.tsx (analyzing text, stats, testimonials, CTA copy, guarantee)
  - resultContent.ts (both sleep types — labels, headings, subtitles, whatsHappening, protocol items)
  - CheckoutFlow.tsx (diagnosis prefix, heading, plan labels, billed text, badge, order summary, demo text, buttons, trust signals, microtext)
  - SuccessFlow.tsx (heading, subtitle, 3 steps, sleep type box, CTA, contact)

- [ ] **Step 2: Verify it compiles** — import in a scratch check

---

## Task 3: Russian Translation File

**Files:**
- Create: `src/i18n/translations/ru.ts`

Full Russian translation of every string. Russian uses Cyrillic but is LTR — same fonts (Plus Jakarta Sans + Manrope both support Cyrillic).

- [ ] **Step 1: Create `src/i18n/translations/ru.ts`** — complete Russian translation matching the `en.ts` structure exactly.

---

## Task 4: Arabic Translation File

**Files:**
- Create: `src/i18n/translations/ar.ts`

Full Arabic translation. Arabic is RTL. Currency stays as `$14.99` (Western numerals standard in Arabic e-commerce).

- [ ] **Step 1: Create `src/i18n/translations/ar.ts`** — complete Arabic translation matching the `en.ts` structure exactly.

---

## Task 5: Language Context & Provider

**Files:**
- Create: `src/i18n/LanguageContext.tsx`
- Create: `src/i18n/index.ts`

This is the core system. It must:
1. Define `Locale = 'en' | 'ru' | 'ar'`
2. Read initial locale from `localStorage('drift-lang')` or default to `'en'`
3. Provide `locale`, `setLocale(locale)`, and `t` (the translations object)
4. On locale change: write to localStorage, update `<html>` `dir` and `lang` attributes
5. For Arabic: set `dir="rtl"`, for others `dir="ltr"`
6. For Arabic: add a class `font-arabic` to `<html>` so we can swap fonts via CSS

Key implementation details:
- Use `useState` with lazy initializer reading localStorage (SSR-safe: check `typeof window`)
- `useEffect` syncs `dir`, `lang`, and font class on `<html>` when locale changes
- Export `useTranslation()` returning `{ t, locale, setLocale }`

`index.ts` barrel-exports everything.

- [ ] **Step 1: Create `src/i18n/LanguageContext.tsx`**
- [ ] **Step 2: Create `src/i18n/index.ts`**
- [ ] **Step 3: Verify no type errors**

---

## Task 6: Update Root Layout

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`

Changes:
1. Import `Noto_Sans_Arabic` from `next/font/google` with weights 400, 500, 600, 700 and subset `arabic`
2. Add `'cyrillic'` to the `subsets` array of both `Plus_Jakarta_Sans` and `Manrope` (required for Russian)
3. Add Noto Sans Arabic CSS variable `--font-noto-arabic` to the className
4. Add `suppressHydrationWarning` on `<html>` (LanguageProvider changes `dir`/`lang` client-side)
5. Create a client wrapper component inline or import `LanguageProvider`
6. Add a tiny inline `<script>` in `<head>` to read localStorage and set `dir`/`lang`/`className` before React hydrates (prevents flash of English→Arabic layout flip)

**Important:** The `<html>` tag must remain in the server component. The LanguageProvider will manipulate `document.documentElement` attributes client-side via useEffect. The inline script prevents FOUC for returning Arabic users.

- [ ] **Step 1: Modify `src/app/layout.tsx`:**
  - Add `'cyrillic'` subset to Plus_Jakarta_Sans and Manrope
  - Add Noto_Sans_Arabic font import
  - Add `suppressHydrationWarning` to `<html>`
  - Wrap children in `LanguageProvider`
  - Add FOUC-prevention inline script in `<head>`:
    ```jsx
    <script dangerouslySetInnerHTML={{ __html: `
      try {
        var l = localStorage.getItem('drift-lang');
        if (l === 'ar') { document.documentElement.dir = 'rtl'; document.documentElement.lang = 'ar'; document.documentElement.classList.add('font-arabic'); }
        else if (l === 'ru') { document.documentElement.lang = 'ru'; }
      } catch(e) {}
    `}} />
    ```

- [ ] **Step 2: Add Arabic font CSS rule to `globals.css`:**
  ```css
  html.font-arabic {
    --font-heading: var(--font-noto-arabic);
    --font-body: var(--font-noto-arabic);
  }
  ```

---

## Task 7: Language Switcher Component

**Files:**
- Create: `src/components/shared/LanguageSwitcher.tsx`

A gentle, on-brand dropdown:
- Trigger: small globe icon + current language code (EN/RU/AR)
- Dropdown: 3 options showing native names: "English", "Русский", "العربية"
- Styling: matches the Header glassmorphic aesthetic
- Click outside closes dropdown
- On select: calls `setLocale()`, dropdown closes

Design notes:
- Globe icon: simple SVG, 18px, color `#2C666E` (stormy teal) to match nav link color
- Trigger has subtle hover state
- Dropdown: `bg-white/95 backdrop-blur-[12px]` matching mobile menu style
- Selected language gets a subtle check or bold treatment
- Use logical properties for RTL (`end-0` for dropdown position)

- [ ] **Step 1: Create `src/components/shared/LanguageSwitcher.tsx`**
- [ ] **Step 2: Verify it renders standalone** — check for type errors

---

## Task 8: Update Header with Language Switcher

**Files:**
- Modify: `src/components/shared/Header.tsx`

Changes:
1. Import `LanguageSwitcher` and `useTranslation`
2. Desktop: Place `<LanguageSwitcher />` between the nav links and the CTA button (i.e., to the left of "Take the Quiz")
3. Mobile: Add language switcher in the mobile menu, above the CTA
4. Replace hardcoded strings: "Home", "Science", "Community", "Take the Quiz" → `t.header.*`

- [ ] **Step 1: Modify Header.tsx** — add switcher + translate strings

---

## Task 9: Update Landing Page Components

**Files:**
- Modify: `src/components/landing/HeroSection.tsx`
- Modify: `src/components/landing/ProblemSection.tsx`
- Modify: `src/components/landing/HowItWorksSection.tsx`
- Modify: `src/components/landing/WhatYouGetSection.tsx`
- Modify: `src/components/landing/SocialProofSection.tsx`
- Modify: `src/components/landing/FAQSection.tsx`
- Modify: `src/components/landing/FinalCTASection.tsx`
- Modify: `src/components/shared/Footer.tsx`

For each component:
1. Add `'use client'` if not already present (needed for `useTranslation` hook)
2. Import `useTranslation` from `@/i18n`
3. Call `const { t } = useTranslation();` at top of component
4. Replace every hardcoded string with the corresponding `t.*` key
5. Remove inline data arrays (cards, steps, features, testimonials, faqs) — these now come from `t`

**Special attention:**
- `HeroSection.tsx`: Needs `'use client'` added (currently a server component). The heading has two `<span>` elements with different colors — translation provides both parts.
- `WhatYouGetSection.tsx`: Same — needs `'use client'`.
- `SocialProofSection.tsx`: Stats numbers stay hardcoded (12000, 4.8, 92), only labels translate.
- `FAQSection.tsx`: Already client component. FAQ array comes from `t.faq.items`.

- [ ] **Step 1: Update HeroSection.tsx** — add `'use client'`, use translations
- [ ] **Step 2: Update ProblemSection.tsx** — use translations
- [ ] **Step 3: Update HowItWorksSection.tsx** — use translations
- [ ] **Step 4: Update WhatYouGetSection.tsx** — add `'use client'`, use translations
- [ ] **Step 5: Update SocialProofSection.tsx** — use translations
- [ ] **Step 6: Update FAQSection.tsx** — use translations
- [ ] **Step 7: Update FinalCTASection.tsx** — add `'use client'`, use translations
- [ ] **Step 8: Update Footer.tsx** — use translations (already in ScrollReveal, needs hook access — wrap inner content)

---

## Task 10: Update Quiz Flow

**Files:**
- Modify: `src/components/quiz/QuizFlow.tsx`

Changes:
1. Import `useTranslation`
2. Replace `quizQuestions[currentIndex].question` → `t.quiz.questions[currentIndex].question`
3. Replace `.subtext` and `.options[].text` similarly
4. Replace "Back", "Continue", "See My Results" → `t.quiz.back`, `t.quiz.continue`, `t.quiz.seeResults`
5. Replace `"{currentIndex + 1} of {quizQuestions.length}"` → use `t.quiz.of`
6. **Keep the scoring from `quizQuestions`** — the `rm`/`lr` values still come from `src/data/quizQuestions.ts`. Only the display text comes from translations.

This means options are displayed from `t.quiz.questions[i].options[j]` but scored from `quizQuestions[i].options[j].rm/lr`.

- [ ] **Step 1: Modify QuizFlow.tsx** — dual source: display text from `t`, scoring from `quizQuestions`

---

## Task 11: Update Results Flow

**Files:**
- Modify: `src/components/results/ResultsFlow.tsx`

Changes:
1. Import `useTranslation`
2. Analyzing phase: use `t.results.analyzing*` for the two text lines
3. Results phase: use `t.results.sleepTypes[sleepType]` for all type-specific content
4. Stats, testimonials, CTA text, guarantee — all from `t.results.*`
5. Replace `resultContent` import entirely — all content comes from translations now

- [ ] **Step 1: Modify ResultsFlow.tsx** — full translation integration

---

## Task 12: Update Checkout Flow

**Files:**
- Modify: `src/components/checkout/CheckoutFlow.tsx`
- Modify: `src/components/checkout/StripeCheckoutForm.tsx`
- Modify: `src/components/checkout/SuccessFlow.tsx`

CheckoutFlow changes:
1. Import `useTranslation`
2. Sleep type label from `t.checkout.sleepTypes.*` or `t.results.sleepTypes[type].label`
3. Plan names, prices, billed text from `t.checkout.plans.*`
4. Order summary, buttons, trust signals, microtext from `t.checkout.*`
5. Demo mode text from `t.checkout.demo*`

StripeCheckoutForm changes:
1. Import `useTranslation`
2. "Processing..." and "Start My Program" and "Stripe publishable key not configured." from `t.checkout.*`

SuccessFlow changes:
1. Import `useTranslation`
2. All heading, subtitle, steps, sleep type box, CTA, contact from `t.success.*`

- [ ] **Step 1: Modify CheckoutFlow.tsx**
- [ ] **Step 2: Modify StripeCheckoutForm.tsx**
- [ ] **Step 3: Modify SuccessFlow.tsx**

---

## Task 13: Update 404 Page

**Files:**
- Modify: `src/app/not-found.tsx`

Changes:
1. Add `'use client'` directive
2. Import `useTranslation`
3. Replace hardcoded strings: "This page drifted", "into deep sleep.", body text, "Return Home" → `t.notFound.*`

- [ ] **Step 1: Modify not-found.tsx** — add `'use client'`, use translations

---

## Task 14: RTL CSS Adjustments & Physical→Logical Property Conversion

**Files:**
- Modify: `src/app/globals.css`
- Modify: All component files touched in Tasks 8-12

### Part A: Global CSS Rules

Most RTL handling is automatic via `dir="rtl"` on `<html>`. But some things need explicit CSS.

- [ ] **Step 1: Add RTL utility classes to globals.css:**

```css
/* Flip directional icons (arrows, chevrons) in RTL */
[dir="rtl"] .rtl-flip {
  transform: scaleX(-1);
}

/* Results page: fixed right column → fixed left in RTL */
@media (min-width: 768px) {
  [dir="rtl"] .results-fixed-right {
    right: auto;
    left: max(2rem, calc((100vw - 1280px) / 2 + 2rem));
  }
}
```

(Arabic font override `html.font-arabic` already added in Task 6 Step 2.)

### Part B: Physical→Logical Property Conversion

When modifying each component for translations (Tasks 8-12), also convert physical directional properties to logical ones. Key instances:

| File | Physical | Logical Replacement |
|------|----------|-------------------|
| `HeroSection.tsx` | `text-left md:text-center` | `text-start md:text-center` |
| `ResultsFlow.tsx` line 139, 198 | `md:text-left` | `md:text-start` |
| `ResultsFlow.tsx` line 335 | `ml-2` | `ms-2` |
| `CheckoutFlow.tsx` line 149 | `right-5` (badge) | `end-5` |
| `CheckoutFlow.tsx` line 188 | `ml-1` | `ms-1` |
| `ProblemSection.tsx` | `text-left` (if present) | `text-start` |

**Note:** `left-0 right-0` on full-width fixed/absolute elements is fine (symmetric). `left-1/2 -translate-x-1/2` centering is also fine.

- [ ] **Step 2: Apply logical properties during component updates** (integrated into Tasks 8-12)
- [ ] **Step 3: Add `rtl-flip` class to directional arrows** (back button arrow in QuizFlow, "How we solve it" arrows in ProblemSection)

---

## Task 15: Quiz Slide Direction for RTL

**Files:**
- Modify: `src/components/quiz/QuizFlow.tsx`

In RTL (Arabic), forward = slide right-to-left becomes slide left-to-right. The `animateTo` function needs to check locale and flip the direction:
- `locale === 'ar'`: forward = `enter-left`, back = `enter-right` (opposite of LTR)

- [ ] **Step 1: Update `animateTo` in QuizFlow.tsx** to respect RTL direction

---

## Task 16: Build Verification & Smoke Test

- [ ] **Step 1: Run `npm run build`** — verify no TypeScript or build errors
- [ ] **Step 2: Run `npm run dev`** — manually verify:
  - Default loads English
  - Language switcher appears in header
  - Switching to Russian changes all text
  - Switching to Arabic changes all text AND flips layout to RTL
  - Navigating between pages preserves language selection
  - Refreshing preserves language (localStorage)
  - Quiz scoring still works correctly in all languages
- [ ] **Step 3: Commit**

---

## Key Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| Missing translation keys → runtime crash | TypeScript enforces all keys present. Each translation file must satisfy `Translations` type. |
| SSR hydration mismatch (server renders `en`, client switches to `ar`) | Accept brief flash. Use `suppressHydrationWarning` on `<html>`. Initial SSR always `en` + `ltr`. Client useEffect corrects immediately. |
| Quiz scoring breaks when text source changes | Scoring remains in `quizQuestions.ts` (unchanged). Only display text comes from translations. Index-based alignment: `t.quiz.questions[i].options[j]` maps to `quizQuestions[i].options[j].rm/lr`. |
| Arabic text breaks layouts (longer/shorter text) | Use flexible containers (`flex-wrap`, `max-w`, etc.). Test visually. |
| Fonts not loading for Arabic | Noto Sans Arabic loaded unconditionally in layout.tsx (small overhead ~40KB). Font-display: swap ensures text shows immediately. |
