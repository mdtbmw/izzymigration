import { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "caribbean-cbi-minimum-investment-changes-2026",
    title: "Caribbean CBI 2026 Regulatory Review: New Due Diligence & Investment Standards",
    excerpt: "An in-depth analysis of the 2024–2026 Memorandum of Agreement signed by the five OECS Citizenship by Investment nations, detailing investment thresholds, enhanced biometric vetting, and treaty implications.",
    category: "Citizenship",
    author: {
      name: "Marcus Vance, Esq.",
      role: "Head of Sovereign Advisory & Legal Practice",
    },
    date: "February 12, 2026",
    readTime: "6 min read",
    image: "/assets/imgs/blog/letest-blog/blog-card1.jpg",
    featured: true,
    tags: ["Caribbean", "CBI", "St. Kitts", "Due Diligence", "Compliance"],
    content: [
      "The global investment migration landscape experienced unprecedented harmonization across the Caribbean Basin following the landmark multi-nation accord signed by Antigua & Barbuda, Dominica, Grenada, St. Kitts & Nevis, and Saint Lucia.",
      "Under the unified framework, participating sovereign jurisdictions established a standardized minimum investment baseline of USD 200,000 for statutory fund contributions, while elevating private luxury real estate thresholds and implementing unified regional due diligence clearinghouses.",
      "Key changes include mandatory in-person or high-resolution biometric interviews, joint financial intelligence screening with US, UK, and EU regulatory bodies, and real-time revocation mechanisms for unauthorized intermediaries.",
      "For international private clients and family offices, these stringent standards solidify the long-term sovereign legitimacy and visa-free travel integrity of Caribbean passports across the Schengen zone, United Kingdom, Singapore, and global financial centers.",
    ],
  },
  {
    slug: "portugal-golden-visa-fund-investment-surge",
    title: "Portugal Golden Visa via Regulated Investment Funds: 2026 Strategy Guide",
    excerpt: "Following the retirement of direct residential real estate routes, CMVM-regulated venture capital and private equity funds have become the gold standard for European residency.",
    category: "Residency",
    author: {
      name: "Elena Rostova",
      role: "Senior Director, European Golden Visas",
    },
    date: "January 28, 2026",
    readTime: "8 min read",
    image: "/assets/imgs/blog/letest-blog/blog-card2.jpg",
    featured: true,
    tags: ["Portugal", "Golden Visa", "CMVM Funds", "European Union", "Tax"],
    content: [
      "Portugal remains Europe's most sought-after residency-by-investment track, offering a realistic 5-year pathway to EU citizenship with a minimal physical presence requirement of just 7 days per year.",
      "Since the legislative transition away from residential real estate, sophisticated investors have pivoted toward CMVM-approved investment funds (€500,000 minimum). These funds provide institutional asset management, diversification across green energy, healthcare, and technology sectors, and potential capital appreciation without landlord liabilities.",
      "Furthermore, the Portuguese Parliament's recent clarifications regarding citizenship processing countdowns — beginning from the date of initial residency application submission — have significantly accelerated the overall EU naturalization timeline.",
    ],
  },
  {
    slug: "navigating-citizenship-by-descent-italy-ireland-poland",
    title: "The Ultimate Guide to European Citizenship by Ancestry: Italy, Ireland & Poland",
    excerpt: "Unlocking EU citizenship through ancestral lineage. How Izzy's archival research team retrieves statutory birth certificates and navigates consular naturalization.",
    category: "Citizenship",
    author: {
      name: "Domenico Rossi",
      role: "Director of Archival & Ancestry Services",
    },
    date: "January 15, 2026",
    readTime: "7 min read",
    image: "/assets/imgs/blog/letest-blog/blog-card3.jpg",
    featured: false,
    tags: ["Ancestry", "Italy", "Ireland", "Poland", "Jus Sanguinis"],
    content: [
      "Millions of individuals across North America, the UK, Latin America, and Australia possess unbroken legal claims to European Union citizenship through the statutory doctrine of *Jus Sanguinis* (Right of Blood).",
      "Unlike investment migration, citizenship by descent does not require substantial financial contributions or property acquisition. However, the legal complexity lies in archival document recovery, continuous genealogical proof, translation, apostille certification, and navigating consular backlogs or municipal court petitions.",
      "Izzy Immigration maintains dedicated on-the-ground archival research units across Italian provincial archives, Polish voivodeship registries, and the Irish Foreign Births Register, ensuring end-to-end dossier integrity.",
    ],
  },
  {
    slug: "greece-golden-visa-tier-restructuring-analysis",
    title: "Greece Golden Visa Tier Restructuring: Athens, Islands & Regional Hubs",
    excerpt: "Everything you need to know about the €800,000, €400,000, and €250,000 statutory tiers under the updated Greek Immigration Code.",
    category: "Residency",
    author: {
      name: "Sophia Alexiou",
      role: "Mediterranean Real Estate & Immigration Counsel",
    },
    date: "December 20, 2025",
    readTime: "5 min read",
    image: "/assets/imgs/blog/blog-details/blog-details1.jpg",
    featured: false,
    tags: ["Greece", "Golden Visa", "Real Estate", "Schengen", "Europe"],
    content: [
      "Greece's Golden Visa continues to deliver the lowest physical presence obligation and fastest Schengen mobility access in Southern Europe. Following the latest legislative revisions, real estate investments are segmented into tier structures.",
      "Prime zones including Attica (Athens), Thessaloniki, Mykonos, and Santorini require €800,000 single-property acquisitions, while other strategic regional hubs and industrial-to-residential conversions qualify at €400,000 or €250,000.",
      "Investors benefit from immediate 5-year renewable permanent residency cards for the entire multi-generational family (investor, spouse, children under 21, and both sets of parents).",
    ],
  },
  {
    slug: "uae-golden-visa-10-year-wealth-hub",
    title: "Dubai & UAE 10-Year Golden Visa: Wealth Protection & Tax Optimization",
    excerpt: "Why global founders and ultra-high-net-worth families are establishing residency in the UAE through property acquisition and specialized talent tracks.",
    category: "Global Mobility",
    author: {
      name: "Zaid Al-Mansoor",
      role: "Middle East & Family Office Practice Leader",
    },
    date: "November 14, 2025",
    readTime: "5 min read",
    image: "/assets/imgs/blog/letest-blog/blog-card1.jpg",
    featured: false,
    tags: ["UAE", "Dubai", "Golden Visa", "Tax Planning", "Zero Income Tax"],
    content: [
      "The United Arab Emirates has firmly established itself as the world's premier tax-efficient domicile for global entrepreneurs, hedge fund managers, and international investors.",
      "The 10-Year Renewable Golden Visa grants complete independence, allowing holders to reside, operate business enterprises, and sponsor family members without requiring a national sponsor.",
      "With 0% personal income tax, 0% capital gains tax, world-class aviation connectivity, and AED 2,000,000 (~$545,000 USD) qualifying real estate entry points, the UAE represents an unparalleled lifestyle and asset security anchor.",
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured);
}
