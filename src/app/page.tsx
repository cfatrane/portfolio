import Hero from "@/components/Hero";
import { LogoCloud } from "@/components/LogoCloud";
import Projects from "@/components/pages/Home/Projects";
import { Process } from "@/components/Services";
import WhoIAm from "@/components/WhoIAm";

export default function Index() {
  return (
    <div className="flex w-full flex-col justify-center">
      <div className="h-screen">
        <Hero />
      </div>

      <div>
        <WhoIAm />
      </div>

      <div className="mt-32 sm:mt-40">
        <LogoCloud />
      </div>

      <div className="py-16 sm:py-20">
        <Projects />
      </div>

      <div className="bg-secondary py-16 sm:pt-28">
        <Process />
      </div>
    </div>
  );
}
