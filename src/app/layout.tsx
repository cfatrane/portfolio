import { type Metadata } from "next";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Providers } from "@/app/providers";

import { Layout } from "@/components/Layout";
import "@/styles/tailwind.css";

export const metadata: Metadata = {
  title: {
    template: "%s - Charles-Edouard Fatrane",
    default: "Charles-Edouard Fatrane - Web & Mobile Developer",
  },
  description:
    "I'm Charles-Edouard Fatrane, a web and mobile developer based in Paris. I’m a freelancer and digital nomad traveling all around the world.",
  alternates: {
    types: {
      "application/rss+xml": `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full antialiased" lang="en" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>

        <Analytics />

        <SpeedInsights />
      </body>
    </html>
  );
}
