"use client";

import { Container } from "@/components/Container";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export function SimpleLayout({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children?: React.ReactNode;
}) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1>
          <TextGenerateEffect
            className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
            words={title}
          />
        </h1>

        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>

      <div className="relative w-full bg-white bg-grid-black/[0.2] dark:bg-black dark:bg-grid-white/[0.2]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

        <div className="animate__animated animate__slideInUp">
          {children && <div className=" mt-16 sm:mt-20">{children}</div>}
        </div>
      </div>
    </Container>
  );
}
