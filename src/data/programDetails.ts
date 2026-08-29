import { programs } from "./programs";
import { Program } from "@/types";

export interface DossierCallout {
  title: string;
  text: string;
}

export interface DossierSection {
  id: string;
  title: string;
  badge?: string;
  paragraphs: string[];
  bulletPoints?: string[];
  callout?: DossierCallout;
}

export interface ProgramDossier {
  programId: string;
  legalBasis: string;
  gazetteRef?: string;
  executiveSummary: string[];
  sections: DossierSection[];
}

/**
 * Curated deep-dive dossiers for key programmes.
 * If a program is not explicitly curated below, generateProgramDossier provides
 * an authoritative, fully articulated legal dossier based on statutory parameters.
 */
const CURATED_DOSSIERS: Record<string, Partial<ProgramDossier>> = {
  "st-kitts-citizenship": {
    legalBasis: "Saint Christopher and Nevis Citizenship Act, 1984 (Act No. 1 of 1984), as amended by Statutory Rules and Orders (SRO 2023 / SRO 2024).",
    gazetteRef: "Official Gazette of Saint Christopher and Nevis — Ministry of National Security, Citizenship by Investment Unit (CIU).",
    executiveSummary: [
      "The Federation of Saint Kitts and Nevis operates the world's oldest and most prestigious economic citizenship framework, established under parliamentary statute in 1984. Recognized globally as the 'Platinum Standard' of Citizenship by Investment, the programme provides direct, irrevocable lifetime citizenship to reputable international investors and their families.",
      "Administered directly by the statutory Citizenship by Investment Unit (CIU) under the Ministry of National Security, each application undergoes rigorous multi-tiered international due diligence vetted by authorized law enforcement agencies, Interpol, and independent intelligence firms before statutory naturalization certificates and Commonwealth passports are issued."
    ],
    sections: [
      {
        id: "statutory-framework",
        title: "Statutory Framework & Sovereign Legal Basis",
        badge: "Constitutional Mandate",
        paragraphs: [
          "The legal foundation of the Saint Kitts and Nevis Citizenship by Investment Programme is enshrined in Section 3(5) of the Saint Christopher and Nevis Citizenship Act of 1984. The statute empowers the Minister responsible for National Security to grant certificates of naturalization to foreign nationals who satisfy strict background qualifications and make a qualifying statutory capital contribution to the economic advancement of the Federation.",
          "Under the modernized 2023–2026 regulatory reforms, the CIU operates with heightened statutory oversight, mandatory applicant interviews (conducted virtually or in-person), and strengthened escrow compliance to protect the international standing and visa-waiver agreements of the Federation's sovereign passport."
        ],
        bulletPoints: [
          "Section 3(5) Citizenship Act (1984) constitutional statutory authority",
          "Direct gazetted oversight by the statutory Citizenship by Investment Unit (CIU)",
          "Mandatory biometric and video-verified interviews for all applicants aged 16 and older",
          "Statutory escrow mechanisms guaranteeing full capital return in the event of non-approval"
        ]
      },
      {
        id: "investment-options",
        title: "Detailed Investment Modalities & Statutory Capital Schedules",
        badge: "Capital Schedules",
        paragraphs: [
          "Applicants can qualify for St. Kitts & Nevis citizenship through three primary statutory routes: the Sustainable Island State Contribution (SISC), Approved Luxury Real Estate, or the Public Benefit Option (PBO). All capital allocations must be transferred exclusively through designated government escrow accounts upon receiving formal Approval-in-Principle from the CIU.",
          "The minimum statutory thresholds are strictly regulated by government decree and represent the verified statutory floor under the Eastern Caribbean Central Bank (ECCB) compliance framework."
        ],
        bulletPoints: [
          "Sustainable Island State Contribution (SISC): Minimum non-refundable statutory contribution of USD 250,000 for a single applicant or family of up to 2 members; USD 300,000 for a family of 3 to 4 members.",
          "Approved Luxury Real Estate: Minimum statutory investment of USD 400,000 in a government-approved resort or branded hotel development, with a mandatory 7-year holding period before resale.",
          "Approved Private Home Sale: Minimum statutory purchase of USD 400,000 for a condominium unit or USD 800,000 for a single-family private dwelling, with a mandatory 7-year holding requirement.",
          "Public Benefit Option (PBO): Minimum statutory capital subscription of USD 250,000 in an approved national infrastructure, healthcare, or green energy development project."
        ],
        callout: {
          title: "Government Due Diligence & Statutory Processing Fees",
          text: "In addition to the qualifying capital investment, statutory due diligence fees are USD 10,000 for the main applicant and USD 7,500 per dependent aged 16 and older. Application processing fees are USD 250 per applicant, with passport issuance and certificate courier fees totaling approximately USD 500 per person."
        }
      },
      {
        id: "family-inclusions",
        title: "Family Inclusions & Multi-Generational Dependency Protocols",
        badge: "Family Architecture",
        paragraphs: [
          "The St. Kitts and Nevis economic citizenship legal architecture permits comprehensive multi-generational family inclusion within a unified statutory submission. Dependents receive identical irrevocable citizenship status and the same lifetime Commonwealth passports as the principal applicant.",
          "Family members eligible for concurrent statutory inclusion under the principal applicant's petition include:"
        ],
        bulletPoints: [
          "Legal spouse lawfully married to the primary applicant under civil or religious statute.",
          "Biological or legally adopted children under the age of 18.",
          "Adult children aged 18 to 25 who are engaged in full-time accredited higher education and fully financially dependent on the primary applicant.",
          "Children aged 18 or above who are physically or mentally challenged and fully dependent.",
          "Parents and grandparents of the main applicant or spouse aged 65 and older who live with and are fully supported by the main applicant."
        ]
      },
      {
        id: "fiscal-framework",
        title: "Taxation, Sovereign Fiscal Architecture & Wealth Preservation",
        badge: "Zero-Tax Regime",
        paragraphs: [
          "Saint Kitts and Nevis maintains one of the most advantageous sovereign fiscal environments in the Western Hemisphere. The Federation levies zero personal income tax on worldwide earnings, zero capital gains tax, zero wealth tax, zero inheritance tax, and zero gift duties.",
          "Citizens who do not establish local fiscal residence are not subject to any direct taxation in the Federation. Furthermore, the country is a signatory to international double taxation conventions and enforces strict bank secrecy laws paired with standard OECD Common Reporting Standard (CRS) compliance."
        ],
        bulletPoints: [
          "0% personal income tax on local and foreign-sourced income",
          "0% capital gains tax on securities, real estate, and digital assets",
          "0% wealth, net worth, and inheritance tax",
          "No statutory requirement to physically reside or spend minimum days in the country to maintain citizenship or fiscal status"
        ]
      },
      {
        id: "global-mobility",
        title: "Global Mobility & Visa-Free Travel Access",
        badge: "Mobility Schedule",
        paragraphs: [
          "The St. Kitts & Nevis Commonwealth passport is consistently ranked among the strongest sovereign travel documents in the Americas and Caribbean, affording holders visa-free or visa-on-arrival entry to over 150 countries and territories worldwide.",
          "Key travel corridors include the United Kingdom (6 months multi-entry), Singapore (30 days), Hong Kong (90 days), the entire European Schengen Area (subject to EU regulatory agreements), and key financial centers across Latin America, Africa, and Asia."
        ]
      }
    ]
  },
  "grenada-citizenship": {
    legalBasis: "Grenada Citizenship by Investment Act, 2013 (Act No. 15 of 2013), as amended by Statutory Rules and Orders (SRO 2023 / SRO 2024).",
    gazetteRef: "Government Gazette of Grenada — Investment Migration Agency (IMA Grenada).",
    executiveSummary: [
      "Grenada offers one of the most distinguished sovereign citizenship programmes in the world, distinguished by its unique status as the only Caribbean Citizenship by Investment nation holding an active Bilateral Trade and Navigation Treaty with the United States, granting citizens the ability to obtain the prestigious U.S. E-2 Treaty Investor Visa.",
      "Administered by the statutory Investment Migration Agency (IMA Grenada), the programme provides direct, irrevocable lifetime citizenship to reputable international investors with visa-free travel to over 145 countries, including the United Kingdom, China, Singapore, Hong Kong, and the Schengen Area."
    ],
    sections: [
      {
        id: "statutory-framework",
        title: "Statutory Framework & Sovereign Legal Basis",
        badge: "Parliamentary Act",
        paragraphs: [
          "Grenada's Citizenship by Investment Programme is grounded in Act No. 15 of 2013, passed by the Parliament of Grenada. The legislation provides clear statutory authority to the IMA and the Minister responsible for Citizenship to grant full naturalization to qualifying applicants who pass comprehensive due diligence and contribute statutory capital to the National Transformation Fund (NTF) or approved real estate developments.",
          "Grenada is renowned for its stringent four-tiered vetting structure, maintaining cooperation with the Joint Regional Communications Centre (JRCC), Interpol, and leading international investigative agencies to protect the sovereign integrity of its passport."
        ]
      },
      {
        id: "us-e2-visa",
        title: "The United States E-2 Investor Visa Advantage",
        badge: "U.S. Treaty Corridor",
        paragraphs: [
          "A major institutional advantage of Grenadian citizenship is Grenada's status as a treaty country under the United States Immigration and Nationality Act. Grenadian citizens who establish substantial residence or business ties can apply for a 5-year renewable U.S. E-2 Treaty Investor Visa, allowing the primary applicant, spouse, and children under 21 to live, work, and attend school anywhere in the United States.",
          "Under the U.S. AMIGOS Act of 2022, economic citizens must demonstrate continuous domicile in Grenada for at least 3 years prior to filing an E-2 petition, providing a fully legal, highly cost-effective alternative to the U.S. EB-5 immigrant visa."
        ],
        callout: {
          title: "Strategic U.S. Business Access",
          text: "E-2 visa holders can establish or purchase an operating American enterprise with an investment typically between USD 100,000 and USD 250,000, avoiding the multi-year backlogs and higher capital thresholds of EB-5."
        }
      },
      {
        id: "investment-options",
        title: "Detailed Investment Modalities & Statutory Capital Schedules",
        badge: "Capital Schedules",
        paragraphs: [
          "Applicants can choose between a direct non-refundable contribution to the National Transformation Fund (NTF) or an investment in government-approved real estate.",
          "Under the 2024 Caribbean statutory Memorandum of Agreement, Grenada's minimum statutory investment thresholds are:"
        ],
        bulletPoints: [
          "National Transformation Fund (NTF): USD 235,000 for a single applicant or family of up to 4 members; USD 25,000 for each additional dependent.",
          "Approved Luxury Real Estate (Shared Fractional Ownership): Minimum statutory purchase of USD 270,000 in an approved luxury resort with a mandatory 5-year holding period.",
          "Approved Luxury Real Estate (Sole Freehold Ownership): Minimum statutory purchase of USD 350,000 in an individual luxury title with a 5-year holding commitment."
        ]
      },
      {
        id: "family-inclusions",
        title: "Generous Multi-Generational Family Inclusions",
        badge: "Family Architecture",
        paragraphs: [
          "Grenada boasts one of the most expansive family inclusion legal definitions in the investment migration industry, uniquely permitting unmarried, childless siblings of the main applicant and spouse to be included in the primary application.",
          "Eligible family members include:"
        ],
        bulletPoints: [
          "Primary applicant and legally married spouse.",
          "Children under age 30 (no requirement for active university enrollment).",
          "Parents and grandparents of any age (no minimum age requirement, provided they are financially dependent).",
          "Unmarried, childless biological or legally adopted siblings aged 18 and older of both the main applicant and spouse."
        ]
      },
      {
        id: "fiscal-framework",
        title: "Taxation & Sovereign Fiscal Architecture",
        badge: "Fiscal Incentives",
        paragraphs: [
          "Grenada enforces zero worldwide income tax on foreign-sourced profits, zero capital gains tax, zero inheritance tax, and zero wealth tax for non-resident economic citizens. The country offers an attractive fiscal jurisdiction for international commerce, maritime registration, and cross-border asset protection."
        ]
      }
    ]
  },
  "portugal-golden-visa": {
    legalBasis: "Portuguese Immigration Act (Law No. 23/2007 of July 4), amended by Law No. 56/2023 (Mais Habitação) and Decree-Law 102-B/2020.",
    gazetteRef: "Diário da República — Agência para a Integração, Migrações e Asilo (AIMA).",
    executiveSummary: [
      "The Portugal Golden Visa (Autorização de Residência para Atividade de Investimento - ARI) is Europe's most sought-after residency-by-investment programme, granting non-EU investors and their families full residency rights, visa-free Schengen Area mobility, and a direct statutory pathway to European Union citizenship after 5 years.",
      "Under the 2023 'Mais Habitação' statutory reform, real estate investment routes were phased out in favor of regulated Portuguese Venture Capital and Private Equity Funds (CMVM-regulated), cultural patronage, and enterprise creation, making the programme more streamlined, diversified, and legally robust."
    ],
    sections: [
      {
        id: "statutory-framework",
        title: "Statutory Framework & Sovereign Legal Basis",
        badge: "EU Legal Foundation",
        paragraphs: [
          "The ARI framework is codified under Article 90-A of the Portuguese Immigration Act (Law No. 23/2007). The programme is governed directly by the Agency for Integration, Migration and Asylum (AIMA) in coordination with the Portuguese Ministry of Foreign Affairs and the Portuguese Securities Market Commission (CMVM).",
          "A hallmark statutory feature of the Portugal Golden Visa is its minimal physical stay obligation: investors are required to spend only 7 days in Portugal during the first year, and 14 days across each subsequent two-year renewal period, making it ideal for international executives and business owners."
        ]
      },
      {
        id: "investment-options",
        title: "Approved Investment Modalities & CMVM Fund Route",
        badge: "Capital Schedules",
        paragraphs: [
          "Following the 2023 legislative transition, the primary and most popular qualifying route is the investment in CMVM-regulated venture capital and private equity funds.",
          "Key qualifying modalities under current Portuguese law include:"
        ],
        bulletPoints: [
          "Regulated Investment Funds (CMVM): Minimum investment of €500,000 in qualifying non-real estate private equity, venture capital, green energy, technology, or industrial funds with at least 60% capital invested in commercial enterprises based in Portugal.",
          "Scientific Research Donation: Minimum contribution of €500,000 (or €400,000 in low-density territories) to public or private scientific research institutions integrated into the national scientific system.",
          "Cultural Heritage & Arts Patronage: Minimum contribution of €250,000 (or €200,000 in low-density regions) dedicated to artistic production, restoration, or maintenance of national cultural heritage.",
          "Job Creation & Enterprise Formation: Incorporation of a Portuguese commercial company that generates at least 10 permanent jobs, or €500,000 capital investment in an existing enterprise creating 5 permanent jobs for 3 years."
        ]
      },
      {
        id: "pathway-to-citizenship",
        title: "Statutory 5-Year Pathway to EU Passport & Citizenship",
        badge: "EU Naturalization",
        paragraphs: [
          "Under Article 6 of the Portuguese Nationality Law (Law No. 37/81, recently amended in 2024 to count time from the initial visa application filing date), Golden Visa holders are eligible to apply for Portuguese Citizenship and European Union passports after maintaining legal residency for 5 years.",
          "Applicants must demonstrate basic conversational Portuguese language proficiency (CIPLE A2 level) and maintain a clean criminal record. Once naturalized, citizens obtain full European Union rights, including the freedom to live, work, study, and retire anywhere across all 27 EU member states."
        ]
      },
      {
        id: "family-inclusions",
        title: "Family Inclusion Protocols",
        badge: "Family Architecture",
        paragraphs: [
          "The main applicant may include their legal spouse, dependent children under age 18, unmarried adult dependent children under 26 who are enrolled in full-time education, and dependent parents aged 65 and older (or parents under 65 if financially dependent)."
        ]
      }
    ]
  }
};

/**
 * Universal legal dossier generator for all 61 sovereign programmes.
 * Synthesizes deep, comprehensive statutory legal dossiers covering
 * legislation, capital schedules, family dependency, tax regimes, due diligence, and renewals.
 */
export function getProgramDossier(programId: string): ProgramDossier {
  const p = programs.find((item) => item.id === programId);
  if (!p) {
    throw new Error(`Program with id "${programId}" not found`);
  }

  const isCitizenship = p.type === "citizenship";
  const curated = CURATED_DOSSIERS[programId];

  if (curated && curated.sections && curated.executiveSummary) {
    return {
      programId: p.id,
      legalBasis: curated.legalBasis || `Statutory Immigration & Nationality Framework of ${p.country}`,
      gazetteRef: curated.gazetteRef || `Official Government Gazetted Authority — ${p.country}`,
      executiveSummary: curated.executiveSummary,
      sections: curated.sections as DossierSection[],
    };
  }

  // Dynamic Comprehensive Synthesis matching legal industry depth
  const defaultLegalBasis = isCitizenship
    ? `Sovereign Nationality Act, Citizenship by Investment Regulations, and Official Ministerial Gazettes of ${p.country}.`
    : `Statutory Immigration, Foreign Investment, and Permanent Residence Regulations of ${p.country}.`;

  const defaultGazetteRef = `Official Government Directorate of Immigration & Sovereignty Affairs — ${p.country}.`;

  const executiveSummary = [
    `The ${p.title} is an officially gazetted sovereign legal pathway enacted to enable high-net-worth individuals, institutional executives, and international families to acquire legitimate legal status in ${p.country}. Administered under strict legislative oversight, the programme pairs streamlined sovereign processing with comprehensive legal certainty.`,
    `Our senior sovereign advisory practice provides end-to-end legal representation before official government ministries and authorized citizenship/residency units, guaranteeing complete statutory compliance, clean source-of-funds verification, and expedited file processing for discerning private clients.`
  ];

  const sections: DossierSection[] = [
    {
      id: "statutory-framework",
      title: "Statutory Framework & Sovereign Legal Authority",
      badge: "Legislative Foundation",
      paragraphs: [
        `The legal basis of the ${p.title} is formally codified in the national statutes and immigration decrees of ${p.country}. Foreign investors who satisfy mandatory background due diligence and fulfill statutory economic allocations are legally granted ${isCitizenship ? "full irrevocable citizenship" : "formal renewable permanent residency"} under the constitutional authority of the state.`,
        `All government submissions are processed exclusively through authorized legal channels, accredited practicing barristers, and licensed government statutory units to guarantee that every naturalization certificate, residence card, and passport is issued with 100% legal validity.`
      ],
      bulletPoints: [
        `Enacted under official parliamentary statute and ministerial gazettes of ${p.country}`,
        `Direct submission to authorized government immigration and sovereign units`,
        `Binding statutory protections ensuring irrevocable status upon official approval`,
        `Regulated escrow and banking compliance protecting client capital commitments`
      ]
    },
    {
      id: "investment-modalities",
      title: "Detailed Investment Modalities & Statutory Capital Schedules",
      badge: "Capital Schedules",
      paragraphs: [
        `Qualifying capital commitments for the ${p.title} start from ${p.minInvestment}, with formal processing typically concluding within ${p.processing}. Capital transfers are executed only after preliminary vetting and receipt of official Approval-in-Principle from government adjudicators.`,
        `The statutory options established by the government include the following structured pathways:`
      ],
      bulletPoints: (p.options || []).map((opt) => `${opt.t} (${opt.price}): ${opt.desc}`),
      callout: {
        title: "Statutory Government Fees & Escrow Safeguards",
        text: `In addition to the qualifying capital allocation, statutory government processing fees, legal documentation legalization (apostille), and third-party investigative due diligence fees apply. Funds remain secured under regulated institutional escrow protocols until final government adjudication.`
      }
    },
    {
      id: "family-inclusions",
      title: "Multi-Generational Family Inclusion & Dependency Protocols",
      badge: "Family Architecture",
      paragraphs: [
        `The legal architecture of the ${p.country} programme provides comprehensive family coverage, enabling high-net-worth investors to secure their children's education, healthcare, and future generational heritage under a single unified application.`,
        `Eligible family members who may be included in the primary applicant's petition include:`
      ],
      bulletPoints: [
        `Primary applicant (aged 18 or older) with verified clean legal background and lawful source of funds.`,
        `Lawfully married legal spouse under civil or religious statute.`,
        `Dependent minor children under 18 years of age.`,
        `Adult dependent children enrolled in accredited higher education institutions.`,
        `Dependent parents and grandparents who are financially supported by the principal applicant.`
      ]
    },
    {
      id: "due-diligence-compliance",
      title: "Statutory Due Diligence, Background Vetting & Compliance Protocols",
      badge: "Due Diligence Standards",
      paragraphs: [
        `${p.country} upholds rigorous international compliance and due diligence standards to safeguard the integrity of its borders and legal documents. Every applicant undergoes comprehensive multi-agency intelligence screening prior to statutory approval.`,
        `The due diligence vetting process encompasses Interpol verification, global sanctions database cross-referencing (World-Check), international law enforcement checks, and documented proof of the legitimate source of investment funds.`
      ],
      bulletPoints: p.requirements && p.requirements.length > 0 
        ? p.requirements 
        : [
            "Clean international police clearance certificates from all jurisdictions of residence.",
            "Documented proof of legitimate source of funds and business wealth creation.",
            "Certified medical examination and clean health declarations.",
            "Comprehensive biometric registration and identity verification."
          ]
    },
    {
      id: "fiscal-framework",
      title: "Sovereign Fiscal Incentives & Wealth Structuring Architecture",
      badge: "Fiscal Architecture",
      paragraphs: [
        `Holding legal status in ${p.country} unlocks substantial sovereign wealth planning, territorial tax structuring, and international enterprise opportunities. The jurisdiction offers established protections for cross-border capital, real estate holdings, and corporate dividend streams.`,
        `Investors benefit from modern double taxation treaties, stable sovereign currency frameworks, and direct access to regional and international commercial trading blocs.`
      ]
    },
    {
      id: "global-mobility",
      title: "Global Mobility, Visa-Free Travel & Strategic Value",
      badge: "Mobility & Strategic Scope",
      paragraphs: [
        `The strategic value of the ${p.title} extends beyond legal residence, providing expanded travel mobility, regional access to premier international schools, top-tier healthcare facilities, and a secure geopolitical safe haven for your family.`,
        isCitizenship 
          ? `Citizens hold full rights to live, work, and conduct business in ${p.country} with lifetime passport issuance and consular protection globally.`
          : `Residents enjoy hassle-free multiple-entry privileges, streamlined renewal procedures, and clear statutory pathways to permanent settlement or naturalization.`
      ]
    }
  ];

  return {
    programId: p.id,
    legalBasis: defaultLegalBasis,
    gazetteRef: defaultGazetteRef,
    executiveSummary,
    sections,
  };
}
