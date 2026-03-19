# Drift — Complete Funnel Planning Document

> **What is Drift?** A personalized 21-day digital sleep program. The quiz diagnoses your sleep type, then you get a tailored nightly protocol, daily micro-lessons, a sleep journal, and push reminders. Think Headspace but only for sleep, personalized to your specific problem.

> **Demo scope:** We are building only the marketing funnel (LP → Quiz → Results → Checkout → Success). The actual product/app is not part of this build.

---

## Table of Contents

1. [Brand & Visual Identity](#1-brand--visual-identity)
2. [Landing Page](#2-landing-page)
3. [Quiz Flow](#3-quiz-flow)
4. [Results Page](#4-results-page)
5. [Checkout Page](#5-checkout-page)
6. [Success Page](#6-success-page)
7. [Analytics Plan (PostHog)](#7-analytics-plan-posthog)
8. [Tech Stack & Route Structure](#8-tech-stack--route-structure)

---

## 1. Brand & Visual Identity

### Product Name
**Drift** — short, sleep-evocative, works as a verb ("drift off to sleep").

### Tagline
"Sleep better in 21 nights."

### USP
"Not all sleep problems are the same. Drift diagnoses yours in 2 minutes, then builds a nightly protocol tailored to your brain and body."

### Color Palette

| Color | Hex | Name | Usage |
|-------|-----|------|-------|
| ![#0A090C](https://via.placeholder.com/12/0A090C/0A090C) | `#0A090C` | Onyx | Primary text, dark section backgrounds, footer |
| ![#F0EDEE](https://via.placeholder.com/12/F0EDEE/F0EDEE) | `#F0EDEE` | Platinum | Page backgrounds, card backgrounds, light sections |
| ![#07393C](https://via.placeholder.com/12/07393C/07393C) | `#07393C` | Dark Teal | Primary CTA buttons, key headings, active states |
| ![#2C666E](https://via.placeholder.com/12/2C666E/2C666E) | `#2C666E` | Stormy Teal | Secondary buttons, hover states, subheadings, borders |
| ![#90DDF0](https://via.placeholder.com/12/90DDF0/90DDF0) | `#90DDF0` | Frosted Blue | Highlights, progress bars, badges, accents, quiz selected state |

**Additional derived colors:**
- White `#FFFFFF` — card backgrounds, text on dark sections
- Overlay: `#0A090C` at 60% opacity — for hero image overlays
- Success green: `#4ADE80` — payment success checkmark only
- Error red: `#EF4444` — form validation only

### Typography

| Role | Font | Weight | Fallback |
|------|------|--------|----------|
| Headings (h1–h3) | **Plus Jakarta Sans** | 600 (Semi-bold), 700 (Bold) | system-ui, sans-serif |
| Body text | **DM Sans** | 400 (Regular), 500 (Medium) | system-ui, sans-serif |
| Accent/labels | **DM Sans** | 600 (Semi-bold), uppercase tracking | system-ui, sans-serif |
| Arabic headings | **Noto Sans Arabic** | 600, 700 | system-ui, sans-serif |
| Arabic body | **Noto Sans Arabic** | 400, 500 | system-ui, sans-serif |
| Russian headings | **Plus Jakarta Sans** | 600, 700 | system-ui, sans-serif |
| Russian body | **DM Sans** | 400, 500 | system-ui, sans-serif |

**Why these fonts:**
- Plus Jakarta Sans — geometric, clean, slightly rounded. Premium feel without being cold. Great for wellness branding.
- DM Sans — low-contrast geometric sans. Pairs naturally with Plus Jakarta Sans, highly legible at all sizes.
- Noto Sans Arabic — Google's purpose-built Arabic font. Matches the geometric feel of the Latin pair and has proper Arabic typographic features.
- Russian uses the same Latin fonts (Plus Jakarta Sans + DM Sans) — both have full Cyrillic character support.
- All are free Google Fonts.

### Sizing Scale

| Element | Size (desktop) | Size (mobile) |
|---------|---------------|---------------|
| H1 (hero) | 56px | 36px |
| H2 (section) | 40px | 28px |
| H3 (card/sub) | 24px | 20px |
| Body | 18px | 16px |
| Small/caption | 14px | 13px |
| CTA button text | 18px, semi-bold | 16px, semi-bold |

### Button Styles

| Type | Background | Text | Border | Hover |
|------|-----------|------|--------|-------|
| Primary CTA | `#07393C` Dark Teal | `#FFFFFF` White | none | `#2C666E` Stormy Teal |
| Secondary | transparent | `#07393C` Dark Teal | 2px `#07393C` | `#07393C` bg, white text |
| Ghost | transparent | `#2C666E` Stormy Teal | none | underline |

All buttons: rounded corners (12px radius), padding 16px 32px, subtle transition (0.2s ease).

### General Design Notes
- **Dark mode feel with light backgrounds.** The LP hero section should be dark (Onyx bg), but most content sections use Platinum bg. This creates contrast and a sense of "night → day" as you scroll.
- **Generous whitespace.** Sleep = calm. Don't crowd elements.
- **No stock photos of people sleeping.** Use abstract visuals — gradients, soft shapes, maybe moon/wave motifs.
- **Micro-animations.** Subtle fade-ins on scroll, smooth transitions between quiz questions. Nothing flashy.

---

## 2. Landing Page

### Structure (top to bottom)

#### 2a. Navigation Bar
- **Left:** Drift logo (wordmark in Outfit Bold, Dark Teal on light / White on dark)
- **Right:** Single CTA button — "Take the Quiz" (Primary CTA style)
- Sticky on scroll
- No other nav links (single-purpose funnel page — no leaks)

#### 2b. Hero Section
- **Background:** Onyx (`#0A090C`) with a subtle gradient or abstract wave pattern in Dark Teal
- **Layout:** Centered text, single column

**Copy:**

> **H1:** "Your sleep problems aren't random."
>
> **Subtitle (body size, Platinum color):** "Drift identifies the root pattern behind your restless nights — then gives you a personalized 21-day protocol to fix it."
>
> **CTA button:** "Find Your Sleep Type — Free Quiz" (Primary CTA, large)
>
> **Micro-text below CTA:** "Takes 2 minutes. No email required to start."

#### 2c. Problem Section
- **Background:** Platinum (`#F0EDEE`)
- **Layout:** Centered heading + 2-column card layout

**Copy:**

> **H2:** "Sound familiar?"
>
> **Card 1 — Racing Mind**
> Icon: brain/thought bubble
> "You lie in bed for 45 minutes while your brain replays every conversation from the day. You've tried melatonin. It doesn't work."
>
> **Card 2 — Low Recovery**
> Icon: battery/energy
> "You sleep 7-8 hours but wake up feeling like you got 4. Coffee is the only thing keeping you upright by 2pm."
>
> **Text below cards:** "These aren't the same problem. They don't have the same solution. That's why generic sleep advice doesn't work for you."

#### 2d. How It Works Section
- **Background:** White (`#FFFFFF`)
- **Layout:** 3 steps, horizontal on desktop, stacked on mobile

**Copy:**

> **H2:** "How Drift works"
>
> **Step 1 — Discover**
> Number badge: "01" in Frosted Blue
> "Take a 2-minute quiz about your sleep habits, energy, and lifestyle. No fluff — just the questions that matter."
>
> **Step 2 — Diagnose**
> Number badge: "02" in Frosted Blue
> "Drift analyzes your answers and identifies your sleep type — the specific pattern that's sabotaging your rest."
>
> **Step 3 — Transform**
> Number badge: "03" in Frosted Blue
> "Get a personalized 21-day protocol: nightly wind-down routines, micro-lessons, and daily check-ins built for your type."

#### 2e. What You Get Section
- **Background:** Dark Teal (`#07393C`)
- **Text color:** White and Frosted Blue accents
- **Layout:** Left column = text, right column = visual (mockup/illustration of the program)

**Copy:**

> **H2:** "Your personalized sleep protocol"
>
> **Bullet 1:** "Nightly wind-down routine — A step-by-step sequence tailored to your sleep type. Takes 15 minutes before bed."
>
> **Bullet 2:** "Daily micro-lessons (2-3 min) — Understand why you sleep the way you do and what to change, one day at a time."
>
> **Bullet 3:** "Sleep journal & tracker — Rate your sleep each morning. Watch your patterns shift over 21 days."
>
> **Bullet 4:** "Smart reminders — A gentle nudge to start your wind-down at the right time."

#### 2f. Social Proof Section
- **Background:** Platinum (`#F0EDEE`)
- **Layout:** 3 testimonial cards + stat bar

**Testimonials (fictional for demo):**

> **Card 1:**
> "I used to dread bedtime. By week 2, I was falling asleep in under 15 minutes. I didn't think that was possible."
> — Sarah M., Racing Mind type
>
> **Card 2:**
> "I thought I was just a 'bad sleeper.' Turns out my recovery was tanked. The protocol changed my mornings completely."
> — James K., Low Recovery type
>
> **Card 3:**
> "Simple, no BS. I actually stuck with this one because it's only 15 minutes a night."
> — Priya R.

**Stat bar (below testimonials):**

> "12,000+ sleepers diagnosed" · "4.8/5 average rating" · "83% report better sleep by day 14"

*(All fictional for demo purposes.)*

#### 2g. FAQ Section
- **Background:** White (`#FFFFFF`)
- **Layout:** Accordion style

| Question | Answer |
|----------|--------|
| "How is this different from a sleep app?" | "Most sleep apps give everyone the same meditations and sounds. Drift starts by diagnosing your specific sleep type, then builds a protocol around it. Your program is different from someone else's." |
| "What if I have both problems?" | "Most people lean heavily toward one type. The quiz identifies your dominant pattern. Your protocol addresses your primary issue first, which often improves secondary symptoms too." |
| "Do I need any equipment or supplements?" | "No. Drift is entirely behavioral and cognitive — no pills, no gadgets, no blue light glasses. Just a protocol and 15 minutes before bed." |
| "What happens after 21 days?" | "You keep access to your protocol and all lessons. Most people internalize the routine by day 21 and it becomes second nature. You can also restart or adjust your program." |
| "What's your refund policy?" | "7-day money-back guarantee, no questions asked. If Drift isn't for you, just email us." |

#### 2h. Final CTA Section
- **Background:** Onyx (`#0A090C`) — mirrors the hero
- **Layout:** Centered, simple

**Copy:**

> **H2:** "Ready to find out why you're not sleeping?"
>
> **CTA button:** "Take the Free Quiz" (Primary CTA, large)
>
> **Micro-text:** "2 minutes. Personalized results. No spam."

#### 2i. Footer
- **Background:** Onyx (`#0A090C`)
- Minimal: © 2026 Drift · Privacy Policy · Terms
- No social links (demo)

---

## 3. Quiz Flow

### Quiz Design Principles
- **10 questions total.** Enough to feel personalized, short enough to not lose people.
- **Single question per screen.** Full-screen, no scrolling.
- **Progress bar** at the top (Frosted Blue fill on Platinum track).
- **Smooth transitions** between questions (slide or fade).
- **No back button.** Keeps momentum forward. (Simplifies state management too.)
- **Background:** Onyx (`#0A090C`) for all quiz screens. White/Platinum text.
- **Option cards:** Stormy Teal border, Frosted Blue fill when selected.

### Scoring System

Each answer adds points to one of two buckets:
- **RM** = Racing Mind score
- **LR** = Low Recovery score

At the end: if RM > LR → Racing Mind type. If LR > RM → Low Recovery type. If tied → Racing Mind (more common, safer default).

### The 10 Questions

Each question has exactly 4 options. One click, move forward. The copy is conversational — it should feel like the quiz already understands you.

---

**Q1: "When do you actually get into bed?"**

*Subtext below question:* "Be honest — not when you plan to, when you actually do."

| Option (exact copy shown to user) | Points | Internal logic |
|------------------------------------|--------|----------------|
| "Before 10pm — I'm disciplined about it" | LR +1 | Goes to bed on time but still has problems → recovery issue |
| "Somewhere between 10 and midnight" | Neutral (0) | Normal range, doesn't indicate either type strongly |
| "After midnight — I never feel tired early enough" | RM +1 | Classic RM: brain won't shut off, so bedtime keeps drifting |
| "Honestly, it's different every night" | RM +1 | Irregular schedule = no circadian anchor, RM pattern |

---

**Q2: "Once you're in bed, what happens?"**

*Subtext:* "Lights off, phone down, eyes closed."

| Option | Points | Internal logic |
|--------|--------|----------------|
| "I'm out in minutes — that part's not my problem" | LR +2 | Falls asleep easily but still wakes wrecked → strong LR signal |
| "Takes me 15–20 minutes, pretty normal I think" | Neutral (0) | Within healthy range |
| "I toss and turn for at least 30 minutes" | RM +1 | Moderate RM — body is tired, brain isn't |
| "An hour or more. Sometimes I just give up and grab my phone" | RM +2 | Severe onset insomnia pattern, strong RM signal |

---

**Q3: "What's your brain doing when you're trying to sleep?"**

*Subtext:* "The moment your head hits the pillow."

| Option | Points | Internal logic |
|--------|--------|----------------|
| "Replaying conversations, planning tomorrow, running scenarios" | RM +2 | Active cognitive processing = textbook Racing Mind |
| "Jumping randomly — song lyrics, memories, weird thoughts" | RM +1 | Less structured but still overactive — moderate RM |
| "It's quiet, but my body just doesn't feel rested" | LR +1 | No mental noise, but physical exhaustion → LR territory |
| "Nothing — I'm asleep before I'd even notice" | LR +2 | Instant sleep + still feeling bad = pure recovery problem |

---

**Q4: "Your alarm goes off. How do you feel?"**

*Subtext:* "That first 30 minutes of being awake."

| Option | Points | Internal logic |
|--------|--------|----------------|
| "Like I haven't slept at all — heavy, foggy, drained" | LR +2 | Hallmark LR symptom: unrestorative sleep |
| "Rough, but I can push through once the coffee kicks in" | LR +1 | Mild LR — needs stimulants to reach baseline |
| "Depends — if I fell asleep at a decent hour, I'm fine" | RM +1 | Problem is sleep onset, not sleep quality |
| "Usually fine, actually — mornings aren't my issue" | RM +1 | Daytime is fine → problem is isolated to nighttime (RM) |

---

**Q5: "How many hours are you actually sleeping?"**

*Subtext:* "Not time in bed — actual sleep."

| Option | Points | Internal logic |
|--------|--------|----------------|
| "Less than 5 — I lose hours just trying to fall asleep" | RM +2 | Sleep deprivation caused by onset delay |
| "About 5 to 6 hours" | RM +1 | Shortened sleep, likely from late onset |
| "6 to 7 hours — seems like it should be enough" | Neutral (0) | Borderline, could be either type |
| "7 to 8+ hours — and I still feel terrible" | LR +2 | Sufficient quantity + poor quality = classic LR |

---

**Q6: "What are you doing in the last hour before bed?"**

*Subtext:* "No judgment. Just be real."

| Option | Points | Internal logic |
|--------|--------|----------------|
| "Scrolling my phone in bed — it's the only time I have to myself" | RM +2 | Screen stimulation keeps brain in active mode, delays melatonin |
| "Watching something, then I switch to my phone for a bit" | RM +1 | Screen → screen transition, moderate stimulation |
| "I usually wind down — reading, low lights, nothing crazy" | Neutral (0) | Good habits, not a contributing factor |
| "I crash on the couch and barely make it to bed" | LR +1 | Physical exhaustion dominates → body is running on empty |

---

**Q7: "What's your relationship with caffeine?"**

*Subtext:* "Coffee, tea, energy drinks — all of it."

| Option | Points | Internal logic |
|--------|--------|----------------|
| "I need it past 4pm or I won't make it through the day" | RM +1 | Late caffeine creates a vicious cycle: can't sleep → need caffeine → can't sleep |
| "I have my last cup around 2–3pm" | RM +1 | Still late enough to affect sleep onset for sensitive individuals |
| "Morning only — I'm strict about it" | Neutral (0) | Ruled out as a contributing factor |
| "Caffeine doesn't even help anymore — I'm tired regardless" | LR +1 | Stimulants can't fix restorative sleep deficit |

---

**Q8: "Do you wake up in the middle of the night?"**

*Subtext:* "Even briefly."

| Option | Points | Internal logic |
|--------|--------|----------------|
| "Rarely — once I'm out, I'm out" | RM +1 | Stays asleep = the problem is getting to sleep (RM) |
| "Sometimes, but I drift back within a few minutes" | Neutral (0) | Normal, not clinically significant |
| "Yes — and then I'm wide awake for 30+ minutes" | RM +1 | Sleep maintenance insomnia, RM variant |
| "I wake up a lot but fall right back asleep — and still feel wrecked" | LR +2 | Fragmented sleep architecture → poor recovery |

---

**Q9: "How would you describe your energy on a typical day?"**

*Subtext:* "Think about an average Tuesday, not your worst day."

| Option | Points | Internal logic |
|--------|--------|----------------|
| "Low from the moment I wake up. All day." | LR +2 | Chronic fatigue from poor sleep quality — strong LR |
| "I'm a zombie until noon, then I'm okay" | LR +1 | Delayed recovery, sleep inertia — moderate LR |
| "It's inconsistent — some days fine, some days awful" | Neutral (0) | Variable, doesn't clearly indicate either type |
| "My days are fine — it's just when bedtime hits that things fall apart" | RM +2 | Problem is specifically nighttime, not daytime function |

---

**Q10: "What have you already tried to fix your sleep?"**

*Subtext:* "Pick the one closest to what you've done."

| Option | Points | Internal logic |
|--------|--------|----------------|
| "Melatonin, magnesium, or other sleep supplements" | RM +1 | Trying to chemically force sleep onset = self-diagnosed RM |
| "Meditation apps, sleep stories, or breathing exercises" | RM +1 | Trying to quiet the mind = self-diagnosed RM |
| "New mattress, blackout curtains, or changing my sleep environment" | LR +1 | Trying to optimize the physical setup = self-diagnosed LR |
| "Sleeping more hours — and it didn't make a difference" | LR +2 | More quantity didn't help = proof the problem is quality |

---

### Scoring System — How It Works

**Mechanics:** Each answer adds points to one of two buckets:
- **RM** = Racing Mind score
- **LR** = Low Recovery score

**After all 10 questions:**
- RM > LR → **Racing Mind** result
- LR > RM → **Low Recovery** result
- Tied → **Racing Mind** (more common in general population, safer default)

**Score ranges:**
- Maximum possible per type: **RM = 15, LR = 16**
- Typical Racing Mind user: RM 9–13, LR 2–5
- Typical Low Recovery user: LR 9–14, RM 2–5
- Edge cases (close scores like 8–7) are uncommon but will happen — the result is still valid because even a slight lean means one pattern dominates

**What the user sees:** They never see scores. They see the loading screen → their sleep type → the explanation. The scoring is invisible.

### Example User Journeys

**Example A — Clear Racing Mind:**
Q1: "After midnight" (RM+1) → Q2: "An hour or more" (RM+2) → Q3: "Replaying conversations" (RM+2) → Q4: "Depends on when I fell asleep" (RM+1) → Q5: "Less than 5 hours" (RM+2) → Q6: "Scrolling phone in bed" (RM+2) → Q7: "Past 4pm" (RM+1) → Q8: "Rarely wake up" (RM+1) → Q9: "Days are fine, bedtime is the problem" (RM+2) → Q10: "Melatonin" (RM+1)
**Score: RM 15, LR 0 → Racing Mind**

**Example B — Clear Low Recovery:**
Q1: "Before 10pm" (LR+1) → Q2: "Out in minutes" (LR+2) → Q3: "Nothing, I'm asleep fast" (LR+2) → Q4: "Haven't slept at all" (LR+2) → Q5: "7–8+ hours, still terrible" (LR+2) → Q6: "Crash on the couch" (LR+1) → Q7: "Caffeine doesn't help" (LR+1) → Q8: "Wake up a lot, still wrecked" (LR+2) → Q9: "Low all day" (LR+2) → Q10: "Sleeping more didn't help" (LR+2)
**Score: RM 0, LR 17 → Low Recovery**

**Example C — Mixed but leans Racing Mind:**
Q1: "Between 10 and midnight" (0) → Q2: "Toss and turn 30 min" (RM+1) → Q3: "Jumping randomly" (RM+1) → Q4: "Rough but coffee helps" (LR+1) → Q5: "5–6 hours" (RM+1) → Q6: "Watch something then phone" (RM+1) → Q7: "Morning only" (0) → Q8: "Sometimes, drift back" (0) → Q9: "Inconsistent" (0) → Q10: "Meditation apps" (RM+1)
**Score: RM 5, LR 1 → Racing Mind**

---

## 4. Results Page

### Layout
- **Background:** Gradient from Onyx (top) to Dark Teal (bottom)
- **Text:** White and Frosted Blue
- **Structure:** Sleep type reveal → What it means → What your program includes → CTA to checkout

### Transition
After Q10, show a brief loading/analyzing screen (2-3 seconds) with animated text:
> "Analyzing your sleep pattern..."

This builds anticipation even though the scoring is instant.

---

### Result A: Racing Mind

**Sleep Type Badge:** Frosted Blue pill/badge with "Racing Mind" label

> **H1:** "You're a Racing Mind sleeper."
>
> **Subtitle:** "Your brain doesn't have an off switch at night. You lie in bed while your mind races through thoughts, plans, worries, and hypotheticals. The problem isn't your body — it's your brain refusing to power down."

**Section: "What's happening"**
> Your nervous system stays in 'active mode' past bedtime. This is often driven by screen stimulation, irregular schedules, and a habit of using bed as a thinking space. Melatonin won't fix this — your brain needs to be retrained to associate bed with sleep, not problem-solving.

**Section: "Your 21-day Drift protocol includes"**
> - **Cognitive wind-down techniques** — structured thought-dumping exercises that empty your mental queue before bed
> - **Breathwork sequences** — specific patterns proven to activate your parasympathetic nervous system (the "off switch")
> - **Stimulus control training** — break the association between your bed and wakefulness
> - **Screen and caffeine timing rules** — personalized to your schedule
> - **Daily sleep journal** — track your fall-asleep time and watch it shrink

**CTA:**
> **Button:** "Start Your Protocol — See Plans" (Primary CTA)
> **Micro-text:** "7-day money-back guarantee."

---

### Result B: Low Recovery

**Sleep Type Badge:** Frosted Blue pill/badge with "Low Recovery" label

> **H1:** "You're a Low Recovery sleeper."
>
> **Subtitle:** "You're getting the hours — but not the rest. You wake up heavy, groggy, and running on fumes no matter how early you went to bed. The problem isn't quantity. It's the quality of your sleep cycles."

**Section: "What's happening"**
> Your body is likely spending too little time in deep sleep and REM — the restorative phases where your brain consolidates memory and your body repairs itself. This is often caused by evening habits, meal timing, environmental factors, or chronic low-grade stress that you've stopped noticing.

**Section: "Your 21-day Drift protocol includes"**
> - **Deep sleep optimization** — evening routines specifically designed to increase time in restorative sleep phases
> - **Recovery environment audit** — temperature, light, noise, and air quality adjustments for your space
> - **Pre-sleep nutrition timing** — when and what to eat (and avoid) in the 3 hours before bed
> - **Stress baseline reset** — gentle nervous system regulation techniques for people who don't "feel stressed" but are running on cortisol
> - **Daily sleep journal** — track your morning energy and watch it climb

**CTA:**
> **Button:** "Start Your Protocol — See Plans" (Primary CTA)
> **Micro-text:** "7-day money-back guarantee."

---

## 5. Checkout Page

### Layout
- **Background:** Platinum (`#F0EDEE`)
- **Structure:** Plan selection (top) → Order summary → Stripe payment form → Trust signals

### Plan Cards

Two cards side by side (stacked on mobile):

**Card 1: Monthly**
- Border: Stormy Teal
- Background: White
> **$14.99/month**
> "Billed monthly. Cancel anytime."
> Button: "Select Monthly" (Secondary button style)

**Card 2: Annual (RECOMMENDED)**
- Border: Frosted Blue (highlighted)
- Background: White
- Badge: "SAVE 47%" in Frosted Blue pill at top of card
> **$7.99/month**
> "Billed as $95.88/year"
> Button: "Select Annual" (Primary CTA style — pre-highlighted as recommended)

**Default selection:** Annual is pre-selected.

### Order Summary

Below the plan cards, a summary box:

> **Your order**
> Drift — 21-Day Sleep Protocol (Racing Mind / Low Recovery)
> Plan: Annual ($7.99/mo)
> Billed today: $95.88
>
> [Stripe Card Element here]
>
> **Button:** "Start My Protocol" (Primary CTA, full width)
>
> **Micro-text below button:**
> "7-day money-back guarantee · Cancel anytime · Secure payment via Stripe"

### Trust Signals (below payment form)

Row of small icons + text:
- 🔒 "256-bit SSL encryption"
- 💳 "Powered by Stripe"
- ✅ "7-day money-back guarantee"

*(Use simple icon set, not emojis — these are placeholders for the concept.)*

---

## 6. Success Page

### Layout
- **Background:** Onyx (`#0A090C`) with subtle confetti/particle animation (subtle, not celebration-overload)
- **Text:** White, Frosted Blue accents
- **Centered single column**

### Copy

> **Checkmark icon** (animated, Success Green → fades to Frosted Blue)
>
> **H1:** "You're in. Let's fix your sleep."
>
> **Body:**
> "Your personalized 21-day protocol is ready. Here's what happens next:"
>
> **Step 1:** "Check your email — your login and program access link are on the way."
> **Step 2:** "Tonight, start with Day 1 of your wind-down routine (takes 15 minutes)."
> **Step 3:** "Tomorrow morning, log your first sleep journal entry."
>
> **H3:** "Your sleep type: Racing Mind" *(or Low Recovery)*
> **Body:** "Your protocol has been built around this diagnosis. Everything you see is tailored to you."
>
> **CTA:** "Go to Your Program" (Primary CTA — links nowhere in demo, or to a placeholder)
>
> **Micro-text:** "Questions? Reach us at support@getdrift.co"

---

## 7. Analytics Plan (PostHog)

### Event Taxonomy

Every event follows the format: `funnel_<stage>_<action>`

| Event Name | Trigger | Properties |
|------------|---------|------------|
| `funnel_lp_view` | Landing page loads | `utm_source`, `utm_medium`, `utm_campaign`, `device_type`, `locale` |
| `funnel_lp_cta_click` | Any "Take the Quiz" button clicked | `cta_location` (hero, nav, footer) |
| `funnel_quiz_start` | Q1 loads | `referrer` |
| `funnel_quiz_answer` | User selects an answer | `question_number`, `question_id`, `answer_text`, `rm_points`, `lr_points` |
| `funnel_quiz_complete` | After Q10 answered | `total_rm_score`, `total_lr_score`, `result_type`, `time_to_complete_seconds` |
| `funnel_results_view` | Results page loads | `result_type` (racing_mind / low_recovery) |
| `funnel_results_cta_click` | "See Plans" button clicked | `result_type` |
| `funnel_checkout_view` | Checkout page loads | `result_type` |
| `funnel_checkout_plan_select` | User picks a plan | `plan_type` (monthly / annual), `plan_price` |
| `funnel_checkout_payment_start` | Stripe form interaction begins | `plan_type` |
| `funnel_checkout_payment_success` | Stripe confirms payment | `plan_type`, `amount`, `currency`, `result_type` |
| `funnel_checkout_payment_fail` | Stripe returns error | `plan_type`, `error_type` |
| `funnel_success_view` | Success page loads | `plan_type`, `result_type` |

**Global property on ALL events:** `locale` (`en` or `ar`) — added automatically via a PostHog middleware/plugin so we can segment every funnel by language.

### Key Funnels to Build in PostHog

1. **Full funnel:** LP view → Quiz start → Quiz complete → Checkout view → Payment success
2. **Quiz drop-off:** Which question has the highest abandonment?
3. **Plan split:** What % choose monthly vs annual?
4. **Type split:** What % are Racing Mind vs Low Recovery?
5. **Locale split:** Conversion rate by language (en vs ar vs ru)

---

## 8. Tech Stack & Route Structure

### Stack
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Database:** PostgreSQL (stores quiz responses, payment records)
- **Payments:** Stripe (Payment Intents API, subscription creation)
- **Analytics:** PostHog (JS SDK, server-side events for payment)
- **Styling:** Tailwind CSS (utility-first, matches the design token approach above)
- **Fonts:** Google Fonts (Plus Jakarta Sans + DM Sans + Noto Sans Arabic)
- **Hosting:** Vercel (natural fit for Next.js)

### Route Structure

```
/                       → Landing Page
/quiz                   → Quiz (single page, client-side state for all 10 questions)
/results                → Results Page (reads score from query params or session)
/checkout               → Checkout Page (Stripe Elements embedded)
/checkout/success       → Success Page
```

### i18n & RTL Support (English + Arabic)

**Supported languages:**
- `en` — English (LTR, default)
- `ar` — Arabic (RTL)
- `ru` — Russian (LTR)

**Route structure (locale prefix):**
```
/en/                    → Landing Page (English)
/en/quiz                → Quiz (English)
/en/results             → Results (English)
/en/checkout            → Checkout (English)
/en/checkout/success    → Success (English)

/ar/                    → Landing Page (Arabic)
/ar/quiz                → Quiz (Arabic)
/ar/results             → Results (Arabic)
/ar/checkout            → Checkout (Arabic)
/ar/checkout/success    → Success (Arabic)

/ru/                    → Landing Page (Russian)
/ru/quiz                → Quiz (Russian)
/ru/results             → Results (Russian)
/ru/checkout            → Checkout (Russian)
/ru/checkout/success    → Success (Russian)
```

**Language switcher:**
- Appears on every page — small globe icon + current language label in the top-right corner (top-left in RTL)
- Dropdown with three options: "English" / "العربية" / "Русский"
- Switching language navigates to the same page in the other locale (e.g., `/en/quiz` → `/ar/quiz`)
- Preserves quiz state if switching mid-quiz (scores and current question carry over via query params or session)

**RTL implementation rules (Arabic):**

When the locale is `ar`, the entire page flips. Specific rules:

| Element | LTR (English) | RTL (Arabic) |
|---------|--------------|--------------|
| `<html>` attribute | `dir="ltr" lang="en"` | `dir="rtl" lang="ar"` |
| Text alignment | Left-aligned | Right-aligned |
| Navigation | Logo left, CTA right | Logo right, CTA left |
| Layout flow | Left → right | Right → left |
| Progress bar fill | Fills left to right | Fills right to left |
| Quiz transitions | Slide left | Slide right |
| Plan cards | Monthly left, Annual right | Monthly right, Annual left |
| Icons with direction (arrows, chevrons) | Point right → | Point left ← |
| Padding/margin (e.g., `ml-4`) | Left side | Becomes right side (`mr-4`) |
| Border radius (e.g., `rounded-l-lg`) | Left side | Becomes right side (`rounded-r-lg`) |

**Tailwind RTL approach:**
- Use Tailwind's built-in RTL support with `rtl:` prefix variant
- Use logical properties where possible: `ps-4` (padding-start) instead of `pl-4` (padding-left)
- Tailwind logical utilities: `ms-` (margin-start), `me-` (margin-end), `ps-` (padding-start), `pe-` (padding-end), `text-start`, `text-end`

**Font switching:**
- English: Plus Jakarta Sans (headings) + DM Sans (body)
- Arabic: Noto Sans Arabic (both headings and body) — loaded conditionally based on locale to avoid unnecessary font download for English users

**Content translation notes:**
- All user-facing copy (LP, quiz questions, quiz options, results, checkout, success) must exist in both `en` and `ar` translation files
- Translation file structure: `messages/en.json`, `messages/ar.json`, and `messages/ru.json`
- Numbers and currency: use `Intl.NumberFormat` with locale — Arabic uses Eastern Arabic numerals (٠١٢٣٤٥) by default, but for pricing keep Western numerals ($14.99) as this is standard in Arabic e-commerce
- Date formatting: use `Intl.DateTimeFormat` with locale

**What does NOT flip:**
- The Drift logo (always reads left-to-right as a brand mark)
- Stripe payment form (Stripe Elements handles its own localization)
- PostHog event names (always English in the codebase)
- Images and illustrations (unless they contain directional content)

### Database Schema (minimal)

**quiz_responses table:**
| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key |
| created_at | timestamp | When quiz was taken |
| answers | jsonb | All 10 answers + points |
| rm_score | integer | Total Racing Mind score |
| lr_score | integer | Total Low Recovery score |
| result_type | text | 'racing_mind' or 'low_recovery' |
| device_type | text | Desktop/mobile/tablet |
| locale | text | 'en', 'ar', or 'ru' |

**payments table:**
| Column | Type | Description |
|--------|------|-------------|
| id | uuid | Primary key |
| quiz_response_id | uuid | FK to quiz_responses |
| stripe_payment_intent_id | text | From Stripe |
| plan_type | text | 'monthly' or 'annual' |
| amount | integer | In cents |
| currency | text | 'usd' |
| status | text | 'succeeded', 'failed', 'pending' |
| created_at | timestamp | When payment was made |

---

## Summary: Page Count & Scope

| Page | Complexity | Key Elements |
|------|-----------|--------------|
| Landing Page | Medium | 9 sections, all static copy, 1 CTA repeated |
| Quiz | Medium | 10 questions, client-side scoring, progress bar, transitions |
| Results | Low | 2 variants (RM/LR), mostly copy, 1 CTA |
| Checkout | Medium | Plan selection, Stripe Elements, order summary |
| Success | Low | Confirmation copy, static |

**Total: 5 pages, 2 result variants, 10 quiz questions, Stripe integration, PostHog instrumentation.**
