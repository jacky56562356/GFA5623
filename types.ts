
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
    certGov: {
      overview: string;
      verify: string;
      governance: string;
      standards: string;
      transparency: string;
      protection: string;
      directory: string;
      reporting: string;
    };
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
    loading: string;
    searchRegistry: string;
  };
  home: {
    hero: { 
      title: string; 
      subtitle: string; 
      body: string; 
      ctaPrimary: string; 
      ctaSecondary: string; 
      badge: string;
      tags: { cert: string; gov: string; prot: string; }
    };
    trust: { 
      badge: string;
      title: string; 
      body: string; 
      passportTitle: string;
      passportSubtitle: string;
      auditItems: string[];
    };
    stats: { certifiedTalents: string; verifiedInstitutions: string; supportedProjects: string; partnerMerchants: string; };
    pillars: { title: string; subtitle: string; p1Title: string; p1Body: string; p2Title: string; p2Body: string; p3Title: string; p3Body: string; p4Title: string; p4Body: string; p5Title: string; p5Body: string; explore: string; };
    closing: { title: string; body: string; cta: string };
  };
  about: {
    title: string;
    mandate: { title: string; body: string };
    strategy: { title: string; body: string };
    coreFunctions: { title: string; items: { title: string; body: string }[] };
    youthProtection: { 
      title: string; 
      subtitle: string; 
      intro: string;
      pillars: { title: string; body: string }[];
    };
    accountability: { title: string; body: string; items: { title: string; label: string; icon: string }[] };
  };
  certification: {
    title: string;
    subtitle: string;
    typesTitle: string;
    types: string[];
    govTitle: string;
    processTitle: string;
    processBody: string;
    valueTitle: string;
    valueBullets: string[];
    cta: string;
    verifyCardTitle: string;
    verifyCardBody: string;
    steps: string[];
  };
  governance: {
    title: string;
    subtitle: string;
    roleTitle: string;
    roleBody: string;
    roleTag1: string;
    roleTag1Desc: string;
    roleTag2: string;
    roleTag2Desc: string;
    principlesTitle: string;
    principles: { title: string; body: string }[];
    policyTitle: string;
    policyBody: string;
    policyItems: string[];
    policyNote: string;
  };
  standards: {
    title: string;
    subtitle: string;
    catA: { title: string; tag: string; docsTitle: string; docs: string[]; matrixTitle: string; matrixBody: string; disqual: string; };
    catB: { title: string; tag: string; sub1: string; sub1Items: string[]; sub2: string; sub2Items: string[]; sub3: string; sub3Body: string; };
    catC: { title: string; tag: string; discTitle: string; discBody: string; prohibTitle: string; prohibBody: string; compliance: string; };
    catD: { title: string; tag: string; critTitle: string; critBody: string; rejTitle: string; rejBody: string; };
  };
  transparency: {
    title: string;
    subtitle: string;
    tableTitle: string;
    tableHeaders: string[];
    rulesTitle: string;
    rules: string[];
    protectionTitle: string;
    protectionRules: string[];
    enforcementTitle: string;
    enforcementItems: string[];
  };
  verify: {
    title: string;
    body: string;
    form: { label: string; placeholder: string; button: string };
    result: { valid: string; expired: string; suspended: string; notFound: string; details: string; };
    note: string;
  };
  protection: {
    title: string;
    subtitle: string;
    modelTitle: string;
    modelBody: string;
    modelItems: string[];
    safeguards: { title: string; items: string[] }[];
    zeroTitle: string;
    zeroDesc: string;
    reportTitle: string;
    reportDesc: string;
    reportCta: string;
  };
  directory: {
    title: string;
    subtitle: string;
    registryCount: string;
    tableHeaders: string[];
    statuses: { active: string; pending: string; blocked: string; rev: string };
    note: string;
  };
  reporting: {
    title: string;
    subtitle: string;
    formTitle: string;
    formLabels: { type: string; org: string; desc: string; email: string; submit: string; };
    reportTypes: string[];
    processTitle: string;
    process: { s: string; d: string }[];
    outcomesTitle: string;
    outcomes: string[];
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
    protectionTitle: string;
    protectionDesc: string;
  };
  membership: {
    title: string;
    intro: string;
    talentTitle: string;
    orgTitle: string;
    talentTiers: any[];
    orgTiers: any[];
    entTitle: string;
    entDesc: string;
    entCta: string;
  };
  partners: {
    title: string;
    intro: string;
    catLabel: string;
    countryLabel: string;
    found: string;
    card: { benefit: string; eligibility: string; address: string };
  };
  events: {
    title: string;
    intro: string;
    sections: { competitions: string; screenings: string; workshops: string };
    cta: string;
    note: string;
    eventStatus: string[];
  };
  contact: {
    title: string;
    intro: string;
    labels: { individual: string; organization: string; merchant: string; join: string; inquiries: string; press: string; };
    form: { 
      name: string; 
      email: string; 
      location: string; 
      cat: string;
      orgType: string;
      message: string; 
      consent: string; 
      submit: string; 
      header: string;
    };
  };
  policies: {
    privacy: PolicySection;
    terms: PolicySection;
    parental: PolicySection;
    content: PolicySection;
  };
  footer: {
    verification: string;
    privacy: string;
    terms: string;
    parental: string;
    content: string;
    copyright: string;
    desc: string;
  };
  language: { en: string; zh: string; es: string; fr: string; it: string };
}

export interface PolicySection {
  title: string;
  summary: string;
  sections: Record<string, string>;
}

export interface Certification { id: string; type: string; title: string; description: string; }
export interface MemberTier { id: string; name: string; price: string; benefits: string[]; recommended?: boolean; }
export interface Merchant { id: string; name: string; category: string; country: string; state: string; city: string; address: string; benefit: string; eligibility: string; logo: string; }
export interface GFAEvent { id: string; title: string; date: string; type: string; image: string; description: string; }
export interface SupportProgram { id: string; title: string; category: string; features: string[]; description: string; }
