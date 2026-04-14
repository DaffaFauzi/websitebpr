import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/app/components/ClientProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BPR Bonding - Jasa Surety Bond & Bank Garansi",
    template: "%s | BPR Bonding",
  },
  description:
    "BPR Bonding berfokus pada layanan Guarantee & General Insurance Agencies: Bank Garansi, Surety Bond, Custom Garansi, dan Asuransi Umum. Solusi penjaminan terpercaya.",
  keywords: [
    "Surety Bond",
    "Bank Garansi",
    "Asuransi Umum",
    "Jasa Penjaminan",
    "BPR Bonding",
    "General Insurance",
    "Custom Bond",
    "Construction Bond",
  ],
  authors: [{ name: "BPR Bonding" }],
  creator: "BPR Bonding",
  publisher: "BPR Bonding",
  metadataBase: new URL("https://bprbonding.com"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://bprbonding.com",
    title: "BPR Bonding - Jasa Surety Bond & Bank Garansi",
    description:
      "Layanan profesional Bank Garansi, Surety Bond, dan Asuransi Umum untuk mendukung kelancaran bisnis dan proyek Anda.",
    siteName: "BPR Bonding",
  },
  twitter: {
    card: "summary_large_image",
    title: "BPR Bonding - Jasa Surety Bond & Bank Garansi",
    description:
      "Layanan profesional Bank Garansi, Surety Bond, dan Asuransi Umum untuk mendukung kelancaran bisnis dan proyek Anda.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BPR Bonding",
    url: "https://bprbonding.com",
    logo: "https://bprbonding.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-21-0000-0000",
      contactType: "customer service",
      areaServed: "ID",
      availableLanguage: "Indonesian",
    },
    sameAs: [
      "https://www.facebook.com/bprbonding",
      "https://www.instagram.com/bprbonding",
      "https://www.linkedin.com/company/bprbonding",
    ],
  };

  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
