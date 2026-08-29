export type ProgramType = "citizenship" | "residency";

export type Region =
  | "Caribbean"
  | "Europe"
  | "Asia-Pacific"
  | "Americas"
  | "Africa & Middle East"
  | "Africa";

export interface BenefitGroup {
  t: string;
  items: string[];
}

export interface InvestmentOption {
  t: string;
  price: string;
  desc: string;
}

export interface ProcessStep {
  t: string;
  items: string[];
}

export interface ProgramFAQ {
  q: string;
  a: string;
}

export interface Program {
  id: string;
  title: string;
  type: ProgramType;
  region: Region;
  country: string;
  flag: string;
  hero: string;
  lifestyleImage?: string;
  propertyImage?: string;
  minInvestment: string;
  processing: string;
  intro: string;
  benefits: string[];
  benefitGroups?: BenefitGroup[];
  options?: InvestmentOption[];
  requirements?: string[];
  process?: ProcessStep[];
  faqs?: ProgramFAQ[];
  passportRank?: number;
  visaFreeCount?: number;
  featured?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Citizenship" | "Residency" | "Real Estate" | "Legal & Tax" | "Global Mobility" | string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  date?: string;
  publishedAt?: string;
  readTime: string;
  image?: string;
  hero?: string;
  featured?: boolean;
  tags: string[];
  content: string[] | string;
}

export interface Testimonial {
  id: string;
  clientName?: string;
  author?: string;
  originCountry?: string;
  origin?: string;
  programAcquired?: string;
  targetProgram?: string;
  year?: string;
  approvedYear?: number;
  rating?: number;
  quote: string;
  avatar?: string;
  flag?: string;
}

export interface CountryInfo {
  code: string;
  name: string;
  region: Region | string;
  flag: string;
  capital: string;
  currency: string;
  passportPower: number;
  visaFreeCountries: number;
  programTypes: string[];
  startingPrice: string;
  processingTime: string;
  programId: string;
  highlights: string[];
}

export interface FilterState {
  type: "all" | ProgramType;
  region: "all" | Region;
  search: string;
  priceSort: "default" | "low-to-high" | "high-to-low";
}

export interface LeadPayload {
  name: string;
  email: string;
  phone?: string;
  citizenship?: string;
  residence?: string;
  budget?: string;
  timeframe?: string;
  familyMembers?: string;
  programInterest?: string;
  notes?: string;
  source?: string;
}
