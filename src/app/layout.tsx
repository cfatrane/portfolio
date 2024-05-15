import { type Metadata } from "next";

import localFont from "next/font/local";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Providers } from "@/app/providers";

import { Layout } from "@/components/Layout";
import "@/styles/tailwind.css";

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
    <html className="h-full antialiased" lang="fr" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-zinc-900">
        <Providers>
          <div className={`" flex w-full ${nippo.variable}`}>
            <Layout>{children}</Layout>
          </div>
        </Providers>

        <Analytics />

        <SpeedInsights />
      </body>
    </html>
  );
}
