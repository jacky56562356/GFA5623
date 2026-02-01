

export enum Locale {
  EN = 'en',
  ZH = 'zh',
  ES = 'es',
  FR = 'fr',
  IT = 'it'
}

export interface Translation {
  meta: { siteName: string; tagline: string };
  nav: {
    home: string;
    about: string;
    certification: string;
    support: string;
    casting: string;
    membership: string;
    partners: string;
    events: string;
    contact: string;
    verify: string;
    policies: string;
    language: string;
  };
  common: {
    learnMore: string;
    getStarted: string;
    applyNow: string;
    joinNow: string;
    submit: string;
    viewAll: string;
    back: string;
    comingSoon: string;
    required: string;
    optional: string;
    // Fix: Added missing loading property for UI feedback
    loading: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      body: string;
      ctaPrimary: string;
      ctaSecondary: string;
      ctaTertiary: string;
    };
    trust: { title: string; body: string };
    stats: {
      certifiedTalents: string;
      verifiedInstitutions: string;
      supportedProjects: string;
      partnerMerchants: string;
    };
    pillars: {
      title: string;
      p1Title: string;
      p1Body: string;
      p2Title: string;
      p2Body: string;
      p3Title: string;
      p3Body: string;
      p4Title: string;
      p4Body: string;
    };
    supportHighlight: {
      title: string;
      card1: string;
      card2: string;
      card3: string;
      cta: string;
    };
    partnersTeaser: { title: string; body: string; cta: string };
    closing: { title: string; body: string; cta: string };
  };
  about: {
    title: string;
    missionTitle: string;
    missionBody: string;
    visionTitle: string;
    visionBody: string;
    whatTitle: string;
    whatBullets: string[];
    transparencyTitle: string;
    transparencyBody: string;
  };
  certification: {
    title: string;
    subtitle: string;
    typesTitle: string;
    types: string[];
    processTitle: string;
    processBody: string;
    valueTitle: string;
    valueBullets: string[];
    cta: string;
    verifyCardTitle: string;
    verifyCardBody: string;
  };
  verify: {
    title: string;
    body: string;
    form: { label: string; placeholder: string; button: string };
    result: { valid: string; expired: string; suspended: string; notFound: string };
    note: string;
  };
  support: {
    title: string;
    subtitle: string;
    intro: string;
    programsTitle: string;
    p1Title: string;
    p1Bullets: string[];
    p2Title: string;
    p2Bullets: string[];
    p3Title: string;
    p3Bullets: string[];
    howTitle: string;
    howBody: string;
    transparencyTitle: string;
    transparencyBody: string;
    cta: string;
  };
  casting: {
    title: string;
    intro: string;
    featuresTitle: string;
    features: string[];
    ctaBrowse: string;
    ctaPost: string;
    note: string;
  };
  membership: {
    title: string;
    intro: string;
    tiersTitle: string;
    talentTitle: string;
    orgTitle: string;
    talentTiers: string[];
    orgTiers: string[];
    benefitsTitle: string;
    benefits: string[];
    cta: string;
    disclaimer: string;
  };
  partners: {
    title: string;
    intro: string;
    filtersTitle: string;
    filterLocation: string;
    filterCategory: string;
    filterMembership: string;
    sortTitle: string;
    sortNearest: string;
    sortNewest: string;
    sortPopular: string;
    card: { benefit: string; eligibility: string; address: string };
    cta: string;
    formTitle: string;
    form: {
      businessName: string;
      businessType: string;
      country: string;
      state: string;
      city: string;
      offer: string;
      contactName: string;
      contactEmail: string;
      consent: string;
      submit: string;
    };
  };
  events: {
    title: string;
    intro: string;
    sections: {
      competitions: string;
      screenings: string;
      workshops: string;
    };
    cta: string;
    note: string;
  };
  contact: {
    title: string;
    intro: string;
    formsTitle: string;
    f1Title: string;
    f2Title: string;
    f3Title: string;
    form: {
      name: string;
      email: string;
      location: string;
      message: string;
      consent: string;
      submit: string;
    };
  };
  policies: {
    privacy: { title: string; summary: string; sections: { [key: string]: string } };
    terms: { title: string; summary: string; sections: { [key: string]: string } };
    parental: { title: string; summary: string; sections: { [key: string]: string } };
    content: { title: string; summary: string; sections: { [key: string]: string } };
  };
  footer: {
    verification: string;
    privacy: string;
    terms: string;
    parental: string;
    content: string;
    copyright: string;
  };
  language: { en: string; zh: string; es: string; fr: string; it: string };
}

export interface Certification {
  id: string;
  type: string;
  title: string;
  description: string;
}

export interface MemberTier {
  id: string;
  name: string;
  price: string;
  benefits: string[];
  recommended?: boolean;
}

export interface Merchant {
  id: string;
  name: string;
  category: 'Legal' | 'Insurance' | 'Dining' | 'Retail' | 'Travel' | 'Production' | 'Equipment' | 'Lodging';
  country: string;
  state: string;
  city: string;
  address: string;
  benefit: string;
  eligibility: string;
  logo: string;
}

export interface GFAEvent {
  id: string;
  title: string;
  date: string;
  type: 'Competition' | 'Showcase' | 'Screening' | 'Workshop';
  image: string;
  description: string;
}

export interface SupportProgram {
  id: string;
  title: string;
  category: 'Graduate' | 'VFX' | 'Studio';
  features: string[];
  description: string;
}
