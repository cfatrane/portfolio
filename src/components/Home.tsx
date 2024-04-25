import { LogoCloud } from "@/components/LogoCloud";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { WavyBackground } from "@/components/ui/wavy-background";

function Home() {
  const words = [
    {
      text: "Développeur",
    },
    {
      text: "Front",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "&",
    },
    {
      className: "text-blue-500 dark:text-blue-500",
      text: "Mobile",
    },
  ];

  return (
    // <WavyBackground blur={10} className="mx-auto max-w-4xl" waveWidth={50}>
    <WavyBackground className="mx-auto max-w-4xl mix-blend-difference">
      <div className="flex flex-col items-center justify-center">
        <p className="inter-var text-center text-2xl font-bold text-white md:text-4xl lg:text-7xl">
          Charles-Édouard Fatrane
        </p>

        <TypewriterEffectSmooth words={words} />

        <LogoCloud />
      </div>
    </WavyBackground>
  );
}

export default Home;
