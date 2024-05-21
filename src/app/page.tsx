import Hero from "@/components/Hero";
import { Process } from "@/components/Services";

export default function Index() {
  return (
    <div className="flex w-full flex-col">
      <div className="h-screen">
        <Hero />
      </div>

      <div className="mt-32 sm:mt-56 ">
        <Process />
      </div>
    </div>
  );
}
