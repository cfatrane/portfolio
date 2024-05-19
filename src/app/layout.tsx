import { type Metadata } from "next";

import localFont from "next/font/local";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Providers } from "@/app/providers";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

// import "@/styles/tailwind.css";
import "./globals.css";

const nippo = localFont({
  src: [
    {
      path: "./fonts/nippo/Nippo-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/nippo/Nippo-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/nippo/Nippo-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/nippo/Nippo-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/nippo/Nippo-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nippo",
});

export const metadata: Metadata = {
  title: {
    template: "%s - Charles-Édouard Fatrane",
    default: "Charles-Édouard Fatrane - Développeur Web & Mobile",
  },
  description:
    "Je m'appelle Charles-Édouard, développeur web et mobile basé à Paris. Je suis freelance et digital.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="antialiased" lang="fr" suppressHydrationWarning>
      <body
        className={`flex min-h-screen w-full flex-col bg-zinc-50 dark:bg-zinc-900 ${nippo.variable}`}
      >
        <Providers>
          <Header />

          <div className="grow pt-16 font-nippo">{children}</div>

          <Footer />
        </Providers>

        <Analytics />

        <SpeedInsights />
      </body>
    </html>
  );
}
