"use client";

import { motion } from "framer-motion";

import { TechnoCloud } from "@/components/TechnosCloud";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

function Hero() {
  return (
    <HeroHighlight>
      <motion.h1
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        className="mx-auto max-w-4xl px-4 text-center text-2xl font-bold leading-relaxed text-primary md:text-4xl lg:text-5xl lg:leading-snug"
        initial={{
          opacity: 0,
          y: 20,
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
      >
        Charles-Édouard Fatrane
        <br />
        <Highlight className="font-normal text-primary/75">
          Développeur Web & Mobile
        </Highlight>
        <br />
        <div className="mt-12">
          <TechnoCloud />
        </div>
      </motion.h1>
    </HeroHighlight>
  );
}
export default Hero;
