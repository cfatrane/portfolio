"use client";

import React, { useState } from "react";

import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";
import { Computer, Handshake, Rocket } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function Process() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-base font-semibold leading-7 text-primary">
          Des process rapides
        </h2>

        <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Vous avez un projet ? Parlons en.
        </p>

        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          J'écoute vos besoins, propose des stratégies sur mesure, développe de
          manière agile et itérative, effectue des tests minutieux et valide
          chaque étape pour garantir une qualité optimale.
        </p>
      </div>

      <div className="mx-auto flex w-full flex-col items-center justify-center gap-4 px-8 py-20 lg:flex-row">
        <Card
          description="Analyse des besoins et des objectifs puis propositions et plan d'action détaillé"
          icon={<Handshake />}
          title="1 / Consultation & Stratégie"
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>

        <Card
          description="Approche agile et itérative"
          icon={<Computer />}
          // icon={<AceternityIcon />}
          title="2 / Développement"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            containerClassName="bg-black"
            dotSize={2}
          />

          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 bg-black/50 [mask-image:radial-gradient(400px_at_center,white,transparent)] dark:bg-black/90" />
        </Card>

        <Card
          description="Tests rigoureux et validation finale pour garantir la qualité."
          icon={<Rocket />}
          title="3 / Livraison"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            colors={[[125, 211, 252]]}
            containerClassName="bg-sky-600"
          />
        </Card>
      </div>

      <Button asChild>
        <Link href="https://calendly.com/cfatrane-pro/meeting-europe">
          Passez a l'étape supérieur
        </Link>
      </Button>
    </div>
  );
}

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group/canvas-card relative mx-auto flex h-[30rem] w-full max-w-sm items-center justify-center border border-black/[0.2] p-4 dark:border-white/[0.2]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon className="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />

      <Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />

      <Icon className="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />

      <Icon className="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full"
            initial={{ opacity: 0 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="mx-auto flex w-full items-center justify-center text-center  transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
          {icon}
        </div>

        <h2 className="relative z-10 mt-4 text-center text-xl font-bold text-black opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white">
          {title}
        </h2>

        <p className="relative z-10 mt-4 text-center text-sm text-black opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M12 6v12m6-6H6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
