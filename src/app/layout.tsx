import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { BackToTop } from "@/components/layout/BackToTop";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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
    "Izzy Immigration",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.domain }],
  creator: siteConfig.name,
  publisher: siteConfig.legalName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.domain,
    title: `${siteConfig.name} | Global Mobility, Residency & Citizenship`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      { url: "/assets/imgs/banner-1/banner-man-img.png", width: 1200, height: 630, alt: `${siteConfig.name} Sovereign Advisory` },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Global Mobility, Residency & Citizenship`,
    description: siteConfig.description,
    images: ["/assets/imgs/banner-1/banner-man-img.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <BackToTop />
      </body>
    </html>
  );
}