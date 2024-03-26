"use client";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { WavyBackground } from "@/components/ui/wavy-background";

function Home() {
  const words = [
    {
      text: "Mobile",
    },
    {
      text: "&",
    },
    {
      text: "Web",
    },
    {
      text: "Developer.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div>
      <WavyBackground className="mx-auto max-w-4xl pb-40">
        <div className="flex h-[40rem] flex-col items-center justify-center">
          <p className="inter-var text-center text-2xl font-bold text-white md:text-4xl lg:text-7xl">
            Charles-Édouard Fatrane
          </p>

          <TypewriterEffectSmooth words={words} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default Home;
