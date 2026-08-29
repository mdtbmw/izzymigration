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
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.name} | Global Mobility, Residency & Citizenship`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Citizenship by Investment",
    "Golden Visa",
    "European Residency",
    "Caribbean Citizenship",
    "St. Kitts Passport",
    "Portugal Golden Visa",
    "Greece Golden Visa",
    "Citizenship by Descent",
    "Italian Citizenship",
    "Irish Citizenship",
    "Second Passport",
    "Global Mobility",
    "Izzy Migration Mentors",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.domain }],
  creator: siteConfig.name,
  publisher: siteConfig.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.domain,
    title: `${siteConfig.name} | Global Mobility, Residency & Citizenship`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/assets/imgs/banner-1/banner-man-img.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Sovereign Advisory`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Global Mobility, Residency & Citizenship`,
    description: siteConfig.description,
    images: ["/assets/imgs/banner-1/banner-man-img.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
