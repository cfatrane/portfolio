import { type Metadata } from "next";

import { PROJECTS } from "@/constants/projects";

import { SimpleLayout } from "@/components/SimpleLayout";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export const metadata: Metadata = {
  title: "Projects",
  description: "Les projets auxquels j'ai pu contribuer.",
};

export default function Projects() {
  return (
    <SimpleLayout
      intro="J'ai travaillé sur des tonnes de petits projets au fil des ans, mais voici ceux dont je suis le plus fier. Beaucoup d'entre eux sont open-source, donc si vous voyez quelque chose qui vous intéresse, regardez le code et contribuez si vous avez des idées pour l'améliorer."
      title="Les projets auxquels j'ai pu contribuer."
    >
      <div className="mx-auto max-w-5xl px-8">
        <HoverEffect items={PROJECTS} withMeteors />
      </div>
    </SimpleLayout>
  );
}
