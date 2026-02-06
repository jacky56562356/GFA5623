
export enum Locale {
  EN = 'en',
  ZH = 'zh',
  ES = 'es',
  FR = 'fr',
  IT = 'it'
}

export type OrgStatus = 'Active' | 'Suspended' | 'Expired' | 'Pending';

export interface TransparencyIndicators {
  documentationVerified: boolean;
  feeTransparency: boolean;
  contractClarity: boolean;
  safeguardingPolicy: boolean;
  complaintRatioLow: boolean;
}

export interface Organization {
  id: string;
  name: string;
  logo: string;
  category: string;
  country: string;
  city: string;
  certificationLevel: 'Verified' | 'Certified' | 'Accredited';
  status: OrgStatus;
  trustScore: number; // 0-100
  trustGrade: 'A+' | 'A' | 'B' | 'C' | 'N/A';
  validUntil: string;
  indicators: TransparencyIndicators;
  publicDisclosures: string[];
}

export interface Certification {
  id: string;
  type: string;
  title: string;
  description: string;
}

export interface SupportProgram {
  id: string;
  category: string;
  title: string;
  features: string[];
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
  category: string;
  address: string;
  benefit: string;
  eligibility: string;
  country: string;
  state: string;
  city: string;
  logo: string;
}

export interface GFAEvent {
  id: string;
  title: string;
  date: string;
  type: string;
  image: string;
  description: string;
}

export interface Translation {
  meta: { siteName: string; tagline: string };
  nav: {
    home: string;
    certification: string;
    childSafety: string;
    graduateSupport: string;
    registry: string;
    complaints: string;
    about: string;
    memberPortal: string;
    admin: string;
  };
  disclaimer: {
    legal: string;
    zhLegal: string;
  };
  home: any;
  registry: any;
  certification: any;
  safeguarding: any;
  about: any;
  complaints: any;
  support: any;
  footer: any;
}
