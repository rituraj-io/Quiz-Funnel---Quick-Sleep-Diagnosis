export type Translations = {
  header: {
    home: string
    science: string
    community: string
    takeQuiz: string
  }
  hero: {
    badge: string
    headingWhite: string
    headingBlue: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
  }
  problem: {
    heading: string
    subtitle: string
    cards: Array<{ title: string; description: string; linkText: string }>
  }
  howItWorks: {
    heading: string
    steps: Array<{ number: string; title: string; description: string }>
  }
  whatYouGet: {
    heading: string
    features: Array<{ title: string; description: string }>
    cardLabel: string
    cardTitle: string
  }
  socialProof: {
    testimonials: Array<{ quote: string; attribution: string }>
    stats: {
      activeSleepers: string
      appStoreRating: string
      betterRecovery: string
    }
  }
  faq: {
    heading: string
    items: Array<{ question: string; answer: string }>
  }
  finalCta: {
    heading: string
    subtitle: string
    button: string
    microText: string
  }
  footer: {
    description: string
    columns: Array<{ heading: string; links: Array<{ label: string }> }>
    copyright: string
  }
  quiz: {
    of: string
    back: string
    continue: string
    seeResults: string
    questions: Array<{
      question: string
      subtext: string
      options: string[]
    }>
  }
  results: {
    analyzingHeading: string
    analyzingSubtext: string
    whatsHappeningTitle: string
    protocolHeading: string
    ctaHeading: string
    ctaSubtext: string
    ctaButton: string
    ctaGuarantee: string
    stats: Array<{ value: string; label: string }>
    testimonial: {
      quote: string
      name: string
      type: string
    }
    sleepTypes: Record<
      'racing_mind' | 'low_recovery',
      {
        label: string
        heading: string
        subtitle: string
        whatsHappening: string
        protocolIncludes: Array<{ title: string; description: string }>
      }
    >
  }
  checkout: {
    diagnosisPrefix: string
    heading: string
    plans: {
      monthly: {
        name: string
        price: string
        perMonth: string
        billed: string
      }
      annual: {
        name: string
        price: string
        perMonth: string
        billed: string
        badge: string
      }
    }
    perMonthSuffix: string
    orderHeading: string
    orderTitle: string
    orderSleepLabel: Record<'racing_mind' | 'low_recovery', string>
    demoNotice: string
    demoButton: string
    startButton: string
    processing: string
    stripeNotConfigured: string
    microText: string
    tryAgain: string
    paymentError: string
    trustSignals: Array<{ icon: string; text: string }>
  }
  success: {
    heading: string
    subtitle: string
    steps: Array<{ step: string; title: string; description: string }>
    sleepTypeLabel: string
    sleepTypeDescription: string
    ctaButton: string
    contactText: string
  }
  notFound: {
    headingWhite: string
    headingBlue: string
    body: string
    button: string
  }
}
