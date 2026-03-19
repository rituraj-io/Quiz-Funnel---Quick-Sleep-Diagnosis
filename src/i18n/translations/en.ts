import type { Translations } from '../types'

export const en: Translations = {
  header: {
    home: 'Home',
    science: 'Science',
    community: 'Community',
    takeQuiz: 'Take the Quiz',
  },
  hero: {
    badge: 'The Science of Rest',
    headingWhite: 'Your sleep problems',
    headingBlue: "aren't random.",
    subtitle:
      'Identify your unique Sleep Architecture and get a personalized path to deep, restorative rest.',
    ctaPrimary: 'Find Your Sleep Type — Free Quiz',
    ctaSecondary: 'Explore the Science',
  },
  problem: {
    heading: 'Modern life is designed to keep you awake.',
    subtitle:
      'We help you disconnect from the noise and reconnect with your natural biological rhythms.',
    cards: [
      {
        title: 'The Racing Mind',
        description:
          "That moment your head hits the pillow and every thought from the last decade suddenly demands your attention. We call this Cognitive Wakefulness.",
        linkText: 'How we solve it',
      },
      {
        title: 'Low Recovery',
        description:
          "Sleeping for 8 hours but waking up feeling like you haven't closed your eyes. This is the result of fragmented REM and Deep Sleep cycles.",
        linkText: 'How we solve it',
      },
    ],
  },
  howItWorks: {
    heading: 'Your transition to stillness.',
    steps: [
      {
        number: '01',
        title: 'The Assessment',
        description:
          'Take our clinical-grade assessment to identify your sleep archetype and circadian alignment.',
      },
      {
        number: '02',
        title: 'The Protocol',
        description:
          'Receive a bespoke nightly ritual including guided decompression and atmosphere settings.',
      },
      {
        number: '03',
        title: 'The Deep Rest',
        description:
          'Experience the physical sensation of your body finally letting go and dropping into deep recovery.',
      },
    ],
  },
  whatYouGet: {
    heading: 'A complete ecosystem for your nocturnal life.',
    features: [
      {
        title: 'Personalized Sleep Archetype',
        description:
          'Understand if you are a Lion, Wolf, Bear, or Dolphin based on your DNA.',
      },
      {
        title: 'Drift Atmosphere Engine',
        description:
          'AI-generated sonic landscapes that adapt to your heart rate in real-time.',
      },
      {
        title: 'Nightly Cognitive Offloading',
        description:
          'Guided tools to clear the mental clutter before your eyes even close.',
      },
    ],
    cardLabel: 'Current State',
    cardTitle: 'Deep Recovery Phase',
  },
  socialProof: {
    testimonials: [
      {
        quote:
          "\"I haven't slept like this since I was a child. The 'Racing Mind' protocol is a game-changer.\"",
        attribution: '— Sarah Jenkins, Founder',
      },
      {
        quote:
          '"The science behind the sleep archetypes finally explained why I was never a morning person."',
        attribution: '— Marcus T., Software Engineer',
      },
      {
        quote:
          '"It\'s not just an app, it\'s a completely new way to look at the second half of your life."',
        attribution: '— Dr. Linda Kim, Psychologist',
      },
    ],
    stats: {
      activeSleepers: 'Active Sleepers',
      appStoreRating: 'App Store Rating',
      betterRecovery: 'Report Better Recovery',
    },
  },
  faq: {
    heading: 'Frequently Asked Questions',
    items: [
      {
        question: 'How is this different from a sound machine?',
        answer:
          "Drift doesn't just mask noise — it identifies your specific sleep disruption pattern and builds a protocol around cognitive and behavioral techniques proven to improve sleep architecture.",
      },
      {
        question: 'Do I need a wearable device?',
        answer:
          'No. Drift is entirely software-based. While wearable data can enhance your experience, the core protocol works with just your subjective sleep reports and daily check-ins.',
      },
      {
        question: 'How long before I see results?',
        answer:
          'Most users report noticeable improvements within the first 7 days. The full 21-day protocol is designed to create lasting behavioral changes that compound over time.',
      },
    ],
  },
  finalCta: {
    heading: 'Ready to drift?',
    subtitle:
      'Join thousands of others who have reclaimed their night and transformed their day.',
    button: 'Start Your Assessment Now',
    microText: 'No credit card required for the initial quiz.',
  },
  footer: {
    description:
      'Pioneering the science of restorative rest through personalized protocols and adaptive environments.',
    columns: [
      {
        heading: 'Product',
        links: [{ label: 'Quiz' }, { label: 'Science' }, { label: 'Pricing' }],
      },
      {
        heading: 'Company',
        links: [{ label: 'About Us' }, { label: 'Community' }, { label: 'Press' }],
      },
      {
        heading: 'Legal',
        links: [
          { label: 'Privacy Policy' },
          { label: 'Terms of Service' },
          { label: 'Cookie Settings' },
        ],
      },
    ],
    copyright: '© 2024 Drift Wellness. All rights reserved.',
  },
  quiz: {
    of: 'of',
    back: 'Back',
    continue: 'Continue',
    seeResults: 'See My Results',
    questions: [
      {
        question: 'When do you actually get into bed?',
        subtext: "Be honest — not when you plan to, when you actually do.",
        options: [
          "Before 10pm — I'm disciplined about it",
          'Somewhere between 10 and midnight',
          "After midnight — I never feel tired early enough",
          "Honestly, it's different every night",
        ],
      },
      {
        question: "Once you're in bed, what happens?",
        subtext: 'Lights off, phone down, eyes closed.',
        options: [
          "I'm out in minutes — that part's not my problem",
          'Takes me 15–20 minutes, pretty normal I think',
          'I toss and turn for at least 30 minutes',
          'An hour or more. Sometimes I just give up and grab my phone',
        ],
      },
      {
        question: "What's your brain doing when you're trying to sleep?",
        subtext: 'The moment your head hits the pillow.',
        options: [
          'Replaying conversations, planning tomorrow, running scenarios',
          'Jumping randomly — song lyrics, memories, weird thoughts',
          "It's quiet, but my body just doesn't feel rested",
          "Nothing — I'm asleep before I'd even notice",
        ],
      },
      {
        question: 'Your alarm goes off. How do you feel?',
        subtext: 'That first 30 minutes of being awake.',
        options: [
          "Like I haven't slept at all — heavy, foggy, drained",
          'Rough, but I can push through once the coffee kicks in',
          "Depends — if I fell asleep at a decent hour, I'm fine",
          "Usually fine, actually — mornings aren't my issue",
        ],
      },
      {
        question: 'How many hours are you actually sleeping?',
        subtext: 'Not time in bed — actual sleep.',
        options: [
          'Less than 5 — I lose hours just trying to fall asleep',
          'About 5 to 6 hours',
          "6 to 7 hours — seems like it should be enough",
          '7 to 8+ hours — and I still feel terrible',
        ],
      },
      {
        question: 'What are you doing in the last hour before bed?',
        subtext: 'No judgment. Just be real.',
        options: [
          "Scrolling my phone in bed — it's the only time I have to myself",
          'Watching something, then I switch to my phone for a bit',
          "I usually wind down — reading, low lights, nothing crazy",
          'I crash on the couch and barely make it to bed',
        ],
      },
      {
        question: 'What\'s your relationship with caffeine?',
        subtext: 'Coffee, tea, energy drinks — all of it.',
        options: [
          "I need it past 4pm or I won't make it through the day",
          'I have my last cup around 2–3pm',
          "Morning only — I'm strict about it",
          "Caffeine doesn't even help anymore — I'm tired regardless",
        ],
      },
      {
        question: 'Do you wake up in the middle of the night?',
        subtext: 'Even briefly.',
        options: [
          "Rarely — once I'm out, I'm out",
          'Sometimes, but I drift back within a few minutes',
          "Yes — and then I'm wide awake for 30+ minutes",
          'I wake up a lot but fall right back asleep — and still feel wrecked',
        ],
      },
      {
        question: 'How would you describe your energy on a typical day?',
        subtext: "Think about an average Tuesday, not your worst day.",
        options: [
          'Low from the moment I wake up. All day.',
          "I'm a zombie until noon, then I'm okay",
          "It's inconsistent — some days fine, some days awful",
          "My days are fine — it's just when bedtime hits that things fall apart",
        ],
      },
      {
        question: 'What have you already tried to fix your sleep?',
        subtext: "Pick the one closest to what you've done.",
        options: [
          'Melatonin, magnesium, or other sleep supplements',
          'Meditation apps, sleep stories, or breathing exercises',
          'New mattress, blackout curtains, or changing my sleep environment',
          "Sleeping more hours — and it didn't make a difference",
        ],
      },
    ],
  },
  results: {
    analyzingHeading: 'Analyzing your sleep pattern...',
    analyzingSubtext: 'Matching your responses to clinical sleep profiles',
    whatsHappeningTitle: "What's happening",
    protocolHeading: 'Your 21-day Drift program includes',
    ctaHeading: 'Ready to fix your sleep?',
    ctaSubtext:
      'Your personalized program is ready. Choose a plan and start tonight.',
    ctaButton: 'Start Your Program — See Plans',
    ctaGuarantee: '7-day money-back guarantee. Cancel anytime.',
    stats: [
      { value: '12,000+', label: 'Sleepers diagnosed' },
      { value: '4.8/5', label: 'Average rating' },
      { value: '92%', label: 'Report better sleep by day 14' },
    ],
    testimonial: {
      quote:
        'I used to dread bedtime. By week 2, I was falling asleep in under 15 minutes.',
      name: 'Sarah M.',
      type: 'Racing Mind type',
    },
    sleepTypes: {
      racing_mind: {
        label: 'Racing Mind',
        heading: "You're a Racing Mind sleeper.",
        subtitle:
          "Your brain doesn't have an off switch at night. You lie in bed while your mind races through thoughts, plans, worries, and hypotheticals. The problem isn't your body — it's your brain refusing to power down.",
        whatsHappening:
          "Your nervous system stays in 'active mode' past bedtime. This is often driven by screen stimulation, irregular schedules, and a habit of using bed as a thinking space. Melatonin won't fix this — your brain needs to be retrained to associate bed with sleep, not problem-solving.",
        protocolIncludes: [
          {
            title: 'Cognitive wind-down techniques',
            description:
              'Structured thought-dumping exercises that empty your mental queue before bed',
          },
          {
            title: 'Breathwork sequences',
            description:
              'Specific patterns proven to activate your parasympathetic nervous system (the "off switch")',
          },
          {
            title: 'Stimulus control training',
            description:
              'Break the association between your bed and wakefulness',
          },
          {
            title: 'Screen and caffeine timing rules',
            description: 'Personalized to your schedule',
          },
          {
            title: 'Daily sleep journal',
            description: 'Track your fall-asleep time and watch it shrink',
          },
        ],
      },
      low_recovery: {
        label: 'Low Recovery',
        heading: "You're a Low Recovery sleeper.",
        subtitle:
          "You're getting the hours — but not the rest. You wake up heavy, groggy, and running on fumes no matter how early you went to bed. The problem isn't quantity. It's the quality of your sleep cycles.",
        whatsHappening:
          "Your body is likely spending too little time in deep sleep and REM — the restorative phases where your brain consolidates memory and your body repairs itself. This is often caused by evening habits, meal timing, environmental factors, or chronic low-grade stress that you've stopped noticing.",
        protocolIncludes: [
          {
            title: 'Deep sleep optimization',
            description:
              'Evening routines specifically designed to increase time in restorative sleep phases',
          },
          {
            title: 'Recovery environment audit',
            description:
              'Temperature, light, noise, and air quality adjustments for your space',
          },
          {
            title: 'Pre-sleep nutrition timing',
            description:
              'When and what to eat (and avoid) in the 3 hours before bed',
          },
          {
            title: 'Stress baseline reset',
            description:
              'Gentle nervous system regulation techniques for people who don\'t "feel stressed" but are running on cortisol',
          },
          {
            title: 'Daily sleep journal',
            description: 'Track your morning energy and watch it climb',
          },
        ],
      },
    },
  },
  checkout: {
    diagnosisPrefix: 'Your diagnosis:',
    heading: 'Choose your plan',
    plans: {
      monthly: {
        name: 'monthly',
        price: '$14.99',
        perMonth: '$14.99/mo',
        billed: 'Billed monthly. Cancel anytime.',
      },
      annual: {
        name: 'annual',
        price: '$7.99',
        perMonth: '$7.99/mo',
        billed: 'Billed as $95.88/year',
        badge: 'SAVE 47%',
      },
    },
    perMonthSuffix: '/month',
    orderHeading: 'Your order',
    orderTitle: 'Drift — 21-Day Sleep Program',
    orderSleepLabel: {
      racing_mind: 'Racing Mind',
      low_recovery: 'Low Recovery',
    },
    demoNotice:
      'Demo mode — Stripe keys not configured. Payment will be simulated.',
    demoButton: 'Start My Program (Demo)',
    startButton: 'Start My Program',
    processing: 'Processing...',
    stripeNotConfigured: 'Stripe publishable key not configured.',
    microText:
      '7-day money-back guarantee · Cancel anytime · Secure payment via Stripe',
    tryAgain: 'Try again',
    paymentError: 'Failed to connect to payment service.',
    trustSignals: [
      { icon: 'lock', text: '256-bit SSL encryption' },
      { icon: 'card', text: 'Powered by Stripe' },
      { icon: 'check', text: '7-day money-back guarantee' },
    ],
  },
  success: {
    heading: "You're in. Let's fix your sleep.",
    subtitle:
      "Your personalized 21-day protocol is ready. Here's what happens next:",
    steps: [
      {
        step: '01',
        title: 'Check your email',
        description:
          'Your login and program access link are on the way.',
      },
      {
        step: '02',
        title: 'Start tonight',
        description:
          'Begin Day 1 of your wind-down routine — takes 15 minutes.',
      },
      {
        step: '03',
        title: 'Log tomorrow morning',
        description:
          'Record your first sleep journal entry when you wake up.',
      },
    ],
    sleepTypeLabel: 'Your sleep type',
    sleepTypeDescription:
      'Your protocol has been built around this diagnosis. Everything you see is tailored to you.',
    ctaButton: 'Go to Your Program',
    contactText: 'Questions? Reach us at support@getdrift.co',
  },
  notFound: {
    headingWhite: 'This page drifted',
    headingBlue: 'into deep sleep.',
    body: "The page you're looking for doesn't exist or has been moved. Let's get you back on track.",
    button: 'Return Home',
  },
}
