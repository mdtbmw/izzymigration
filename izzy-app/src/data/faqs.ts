export interface GeneralFAQ {
  category: "General" | "Citizenship" | "Residency" | "Ancestry" | "Tax & Legal";
  question: string;
  answer: string;
}

export const generalFaqs: GeneralFAQ[] = [
  {
    category: "General",
    question: "What is the difference between Citizenship by Investment and Residency by Investment?",
    answer:
      "Citizenship by Investment (CBI) grants you immediate sovereign nationality, a passport, and constitutional voting and settlement rights in that country, usually within 3 to 9 months without any relocation requirements. Residency by Investment (Golden Visa) provides a legal residency permit that allows you and your family to live, work, and travel freely (e.g. across the 29 Schengen states), and serves as a legal path toward eventual citizenship after maintaining residency for 5 or more years.",
  },
  {
    category: "Citizenship",
    question: "Can I include my family members under a single citizenship application?",
    answer:
      "Yes. Sovereign citizenship programmes are designed for multi-generational family security. You can include your legal spouse, dependent unmarried children (typically up to age 30 who are in full-time education), and dependent parents/grandparents (typically aged 55 or 65 and above). Some programmes, such as Grenada and Antigua & Barbuda, also permit unmarried dependent siblings.",
  },
  {
    category: "Citizenship",
    question: "Do I have to renounce my current citizenship?",
    answer:
      "No. All the sovereign CBI and Golden Visa jurisdictions represented by Izzy Immigration (including St. Kitts, Antigua, Dominica, Grenada, Saint Lucia, Malta, Vanuatu, Portugal, Greece, and Spain) legally permit dual and multiple citizenship. Your existing citizenship remains 100% confidential and intact.",
  },
  {
    category: "Residency",
    question: "How much physical time do I need to spend in Portugal or Greece to maintain my Golden Visa?",
    answer:
      "Portugal requires only 7 days of physical presence in Year 1, and 14 days in every subsequent two-year renewal period. Greece, Spain, and Malta permanent residency programmes have zero minimum annual stay requirements—meaning you can maintain your European residency status without ever relocating.",
  },
  {
    category: "Ancestry",
    question: "How does European Citizenship by Descent (Ancestry) work?",
    answer:
      "Citizenship by descent operates on the statutory doctrine of *Jus Sanguinis* (Right of Blood). If you have parents, grandparents, or in some jurisdictions (like Italy and Poland) great-grandparents who held citizenship of an EU country, you may already be a citizen by birth right. Izzy's archival research team retrieves statutory civil birth, marriage, and naturalization certificates, provides certified translations and apostilles, and represents your petition before consulates or municipal courts.",
  },
  {
    category: "Tax & Legal",
    question: "Will obtaining a second passport or residency trigger automatic tax obligations?",
    answer:
      "No. Simply holding a second passport or golden visa does not automatically make you tax resident in that jurisdiction. Most Caribbean CBI countries impose 0% personal income, capital gains, wealth, or inheritance taxes on non-residents. Furthermore, countries like the UAE have 0% income tax, while Italy offers a €100,000 flat-tax regime for global high-net-worth individuals.",
  },
  {
    category: "General",
    question: "How does Izzy Immigration protect client confidentiality and funds?",
    answer:
      "Izzy Immigration adheres to the strictest international legal confidentiality and GDPR standards. Client investment funds are deposited directly into designated government escrow accounts or regulated tier-1 institutional escrow banks. Funds are only disbursed upon statutory government approval milestones.",
  },
];
