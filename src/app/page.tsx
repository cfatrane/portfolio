import Hero from "@/components/Hero";
import { Process } from "@/components/Services";

export default function Index() {
  return (
    <div className="flex w-full flex-col">
      <div className="flex h-screen items-center justify-center">
        <Hero />
      </div>

      <div className="mt-32 sm:mt-56 ">
        <Process />
      </div>
    </div>
  );
}
