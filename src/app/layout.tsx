import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";

export const viewport: Viewport = {
  themeColor: "#050548",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.name} | Sovereign Citizenship, Residency & Second Passports`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Citizenship by Investment",
    "Golden Visa",
    "European Residency",
    "Caribbean Citizenship",
    "St. Kitts Passport",
    "Grenada Citizenship",
    "Portugal Golden Visa",
    "Greece Golden Visa",
    "Panama Qualified Investor Visa",
    "Retirement Visas",
    "Panama Pensionado",
    "Spain Non-Lucrative Visa",
    "Citizenship by Descent",
    "Italian Citizenship",
    "Irish Citizenship",
    "Second Passport",
    "Global Mobility",
    "Izzy Migration Mentors",
    "Investment Migration Counsel",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.domain }],
  creator: siteConfig.name,
  publisher: siteConfig.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.domain,
    title: `${siteConfig.name} | Sovereign Citizenship, Residency & Second Passports`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Global Mobility, Residency & Second Passports`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Sovereign Citizenship, Residency & Second Passports`,
    description: siteConfig.description,
    images: ["/og-image.jpg"],
    creator: "@izzymigration",
    site: "@izzymigration",
  },
  alternates: {
    canonical: siteConfig.domain,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.domain}/#organization`,
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: siteConfig.domain,
      logo: {
        "@type": "ImageObject",
        "@id": `${siteConfig.domain}/#logo`,
        url: `${siteConfig.domain}/assets/imgs/logo/izzy-logo.png`,
        caption: siteConfig.name,
      },
      image: {
        "@id": `${siteConfig.domain}/#logo`,
      },
      description: siteConfig.description,
      address: {
        "@type": "PostalAddress",
        streetAddress: "6th Floor, Number One Building, Akin Adesola Street",
        addressLocality: "Victoria Island",
        addressRegion: "Lagos",
        addressCountry: "NG",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: siteConfig.phoneTel,
          contactType: "customer service",
          areaServed: ["NG", "GB", "AE", "US", "CA", "EU"],
          availableLanguage: ["English", "French", "Arabic"],
        },
      ],
      sameAs: [
        siteConfig.socials.instagram,
        siteConfig.socials.linkedin,
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.domain}/#website`,
      url: siteConfig.domain,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.domain}/#organization`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "LegalService",
      "@id": `${siteConfig.domain}/#legalservice`,
      name: siteConfig.name,
      url: siteConfig.domain,
      logo: `${siteConfig.domain}/assets/imgs/logo/izzy-logo.png`,
      image: `${siteConfig.domain}/og-image.jpg`,
      description: siteConfig.description,
      telephone: siteConfig.phoneTel,
      priceRange: "$$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "6th Floor, Number One Building, Akin Adesola Street",
        addressLocality: "Victoria Island",
        addressRegion: "Lagos",
        addressCountry: "NG",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:30",
          closes: "18:30",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicons and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sofia&family=Outfit:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-surface-0 font-sans antialiased text-ink">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
