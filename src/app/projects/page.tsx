import { type Metadata } from "next";

import { SimpleLayout } from "@/components/SimpleLayout";
import { HoverEffect } from "@/components/ui/card-hover-effect";

import { PROJECTS } from "@/constants/projects";

const title = "Les projets auxquels j'ai pu contribuer.";

export const metadata: Metadata = {
  title: "Projects",
  description: title,
};

export default function Projects() {
  return (
    <SimpleLayout
      intro="J'ai travaillé sur des tonnes de petits projets au fil des ans, en voici quelques-un. Beaucoup d'entre eux sont open-source, donc si vous voyez quelque chose qui vous intéresse, regardez le code et contribuez si vous avez des idées pour l'améliorer."
      title={title}
    >
      <div className="mx-auto max-w-5xl px-8">
        <HoverEffect items={PROJECTS} withMeteors />
      </div>
    </SimpleLayout>
  );
}
