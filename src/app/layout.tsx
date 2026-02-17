import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { BodyTheme } from "@/components/shared/BodyTheme";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import MobileNav from "@/components/shared/MobileNav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pike Medical Consultants | Urgent & Primary Care",
  description:
    "Immediate injury care and long-term primary care. Pike Medical keeps every visit consistent, fast, and transparent. Walk in or book online.",
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
        <BodyTheme />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:border-2 focus:border-primary focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:outline-none"
        >
          Skip to main content
        </a>
        <Header currentTenant={null} />
        {children}
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}
