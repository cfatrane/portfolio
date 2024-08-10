import { type Metadata } from "next";

import { Inter as FontSans } from "next/font/google";

import { DATA } from "@/data/resume";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

import { cn } from "@/lib/utils";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    template: "%s - Charles-Édouard Fatrane",
    default: "Charles-Édouard Fatrane - Développeur Web & Mobile",
  },
  description:
    "Je m'appelle Charles-Édouard, développeur web et mobile basé à Paris. Je suis freelance et digital.",
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
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
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="antialiased" lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "mx-auto min-h-screen max-w-2xl bg-background px-6 py-12 font-sans antialiased sm:py-24",
          fontSans.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <TooltipProvider delayDuration={0}>
            {children}

            <Navbar />
          </TooltipProvider>
        </ThemeProvider>

        <Analytics />

        <SpeedInsights />
      </body>
    </html>
  );
}
