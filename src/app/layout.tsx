import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { BodyTheme } from "@/components/shared/BodyTheme";
import { ContactBar } from "@/components/shared/ContactBar";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { MedicalSchema } from "@/components/shared/MedicalSchema";
import MobileNav from "@/components/shared/MobileNav";
import { OG_IMAGE_PATH } from "@/config/images";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://pikemedical.com";

export const metadata: Metadata = {
  title: "Pike Medical Consultants | Urgent & Primary Care",
  description:
    "Immediate injury care and long-term primary care. Pike Medical keeps every visit consistent, fast, and transparent. Walk in or book online.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Pike Medical Consultants | Urgent & Primary Care",
    description:
      "Immediate injury care and long-term primary care. Northwest Indianapolis. Walk in or book online.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE_PATH,
        width: 1024,
        height: 683,
        alt: "Pike Medical Consultants — Urgent care and primary care in Northwest Indianapolis.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pike Medical Consultants | Urgent & Primary Care",
    description:
      "Immediate injury care and long-term primary care. Walk in or book online.",
    images: [OG_IMAGE_PATH],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased theme-urgent`}
      >
        <MedicalSchema />
        <BodyTheme />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:border-2 focus:border-primary focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:outline-none"
        >
          Skip to main content
        </a>
        <ContactBar />
        <Header currentTenant={null} />
        {children}
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}
