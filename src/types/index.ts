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
  category: "Citizenship" | "Residency" | "Real Estate" | "Legal & Tax" | "Global Mobility";
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  content: string[];
  tags: string[];
}

export interface CountryInfo {
  code: string;
  name: string;
  region: Region;
  flag: string;
  capital: string;
  currency: string;
  passportPower: number;
  visaFreeCountries: number;
  programTypes: ("Citizenship" | "Residency")[];
  startingPrice: string;
  processingTime: string;
  programId: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  originCountry: string;
  programAcquired: string;
  year: string;
  quote: string;
  avatar?: string;
  rating: number;
}

export interface LeadSubmission {
  name: string;
  email: string;
  phone?: string;
  program?: string;
  subject?: string;
  message?: string;
  type?: "contact" | "consultation" | "brochure" | "newsletter" | "assessment";
  website?: string; // honeypot
}

export interface FilterState {
  type: "all" | ProgramType;
  region: "all" | Region;
  search: string;
  priceSort: "default" | "low-to-high" | "high-to-low";
  maxBudget?: number;
}
