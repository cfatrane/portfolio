import { type Metadata } from "next";

import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Providers } from "@/app/providers";

import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
// import "@/styles/tailwind.css";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const nippo = localFont({
  src: [
    {
      path: "./fonts/nippo/Nippo-Extralight.woff2",
      weight: "200", // font-extralight
      style: "normal",
    },
    {
      path: "./fonts/nippo/Nippo-Light.woff2",
      weight: "300", // font-light
      style: "normal",
    },
    {
      path: "./fonts/nippo/Nippo-Regular.woff2", // font-normal
      style: "normal",
    },
    {
      path: "./fonts/nippo/Nippo-Medium.woff2",
      weight: "500", // font-medium
      style: "normal",
    },
    {
      path: "./fonts/nippo/Nippo-Bold.woff2",
      weight: "700", // font-bold
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="antialiased" lang="fr" suppressHydrationWarning>
      <body
        className={`flex min-h-svh w-full flex-col ${nippo.className} ${nippo.variable} ${fontSans.variable}`}
      >
        <Providers>
          <Header />

          <main className="flex grow justify-center font-nippo">
            {children}
          </main>

          <Footer />
        </Providers>

        <Analytics />

        <SpeedInsights />
      </body>
    </html>
  );
}
