const foundedYear = 2024;
const currentYear = new Date().getFullYear();
export const advisoryYears = Math.max(3, currentYear - foundedYear);
export const advisoryYearsDisplay = `${advisoryYears}+`;

export const siteConfig = {
  name: "Izzy Migration Mentors",
  legalName: "Izzy Migration Mentors Limited",
  tagline: "Global Visas, Residency & Citizenship, Done Right",
  description:
    "Izzy Migration Mentors Limited is a premier global mobility and sovereign advisory firm helping high-net-worth individuals, entrepreneurs, and families secure visas, permanent residency, citizenship by investment, and citizenship by ancestry worldwide.",
  domain: "https://izzymigration.com",
  since: 2024,
  experienceYears: advisoryYearsDisplay,
  phoneDisplay: "0706 720 3694",
  phoneTel: "+2347067203694",
  whatsappNumber: "2347067203694",
  whatsappMessage: "Hello Izzy Migration Mentors, I would like a confidential consultation regarding:",
  email: "info@izzymigration.com",
  analyticsId: "G-XXXXXXXXXX",
  address: "6th Floor, Number One Building, Akin Adesola Street Victoria Island Lagos , Nigeria",
  hours: "Mon – Fri: 08:30 AM – 06:30 PM (WAT)",
  offices: [
    {
      city: "Lagos",
      country: "Nigeria",
      address: "6th Floor, Number One Building, Akin Adesola Street Victoria Island Lagos",
      phone: "0706 720 3694",
      email: "info@izzymigration.com",
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "71-75 Shelton Street, Covent Garden, London, WC2H 9JQ",
      phone: "+44 20 7946 0192",
      email: "london@izzymigration.com",
    },
    {
      city: "Dubai",
      country: "United Arab Emirates",
      address: "Level 14, Boulevard Plaza Tower 1, Downtown Dubai",
      phone: "+971 4 312 9000",
      email: "dubai@izzymigration.com",
    },
  ],
  socials: {
    instagram: "https://www.instagram.com/izzymigration?igsi=bjJraXhhZzdhcTF6",
    linkedin: "https://www.linkedin.com/in/izzy-migration-mentors-a642b2428?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    twitter: "https://x.com/",
    youtube: "https://youtube.com/",
  },
  stats: [
    { label: "Successful Applications", value: "3,850+", change: "100% Verified" },
    { label: "Sovereign Jurisdictions", value: "55+", change: "Global Reach" },
    { label: "Client Approval Rate", value: "99.4%", change: "Direct Channels" },
    { label: "Capital Deployed", value: "$450M+", change: "Secure Escrows" },
  ],
  accreditations: [
    "Sovereign Migration Mentors",
    "Practicing Legal Partnerships",
    "ISO 9001:2015 Quality Management Certified",
    "Global Due Diligence & Anti-Money Laundering Compliant",
  ],
};

