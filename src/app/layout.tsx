import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { siteConfig } from "@/lib/siteConfig";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const description =
  "AIA Surveyors — a Delhi-based professional land surveying firm. Topographical, road, railway, gas pipeline, land demarcation, building layout, as-built and measurement surveys, delivered with instrument-grade precision across India.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description,
  keywords: [
    "land survey",
    "topographical survey",
    "road survey",
    "railway survey",
    "gas pipeline survey",
    "land demarcation",
    "building layout",
    "as-built survey",
    "DGPS survey",
    "total station survey",
    "surveyor Delhi",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/images/logo.svg",
    apple: "/images/logo.svg",
  },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description,
    type: "website",
    locale: "en_IN",
    images: [{ url: "/images/hero.png", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description,
    images: ["/images/hero.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo.svg`,
  slogan: siteConfig.tagline,
  foundingDate: String(siteConfig.founded),
  founder: { "@type": "Person", name: siteConfig.proprietor },
  taxID: siteConfig.gstin,
  areaServed: "IN",
  knowsAbout: [
    "Topographical Survey",
    "Road Survey",
    "Railway Line Survey",
    "Gas Pipeline Survey",
    "Land Demarcation",
    "Building Layout",
    "As-Built Survey",
    "Measurement Survey",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: siteConfig.email,
    telephone: siteConfig.phones[0],
    contactType: "sales",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "C-278/3, Fourth Floor, A.F. Enclave Part II, Shaheen Bagh, Jamia Nagar",
    addressLocality: "New Delhi",
    postalCode: "110025",
    addressRegion: "Delhi",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${fraunces.variable} font-sans antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
