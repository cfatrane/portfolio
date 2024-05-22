import Link from "next/link";

import { Button } from "@/components/ui/button";
import { HoverEffect } from "@/components/ui/card-hover-effect";

import { PROJECTS } from "@/constants/projects";

function Projects() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-base font-semibold leading-7 text-primary">
        Y a pas tout la
      </h2>

      <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Quelques une des mes réalisations.
      </p>

      <div className="mx-auto max-w-5xl px-8">
        <HoverEffect items={PROJECTS.slice(0, 3)} withMeteors />
      </div>

      <Button asChild>
        <Link href="/projects">Voir le reste</Link>
      </Button>
    </div>
  );
}
export default Projects;
