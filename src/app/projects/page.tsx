import { type Metadata } from "next";

import { SimpleLayout } from "@/components/SimpleLayout";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const projects = [
  {
    title: "nextjs-boilerplate",
    description:
      "Boilerplate for Next Js. Eslint, Husky, i18n, Prettier, Shadcn, Storybook, Stripe, Tailwind",
    link: "https://github.com/cfatrane/nextjs-boilerplate",
    wip: true,
  },
  {
    title: "your-life-in",
    description:
      "It kind of feels like our lives are made up of a countless number of weeks. But there they are—fully countable—staring you in the face.",
    link: "https://your-life-in.vercel.app/",
    wip: true,
  },
  {
    title: "react-native-boilerplate",
    description: "React Native Boilerplate",
    link: "https://github.com/cfatrane/react-native-boilerplate",
    wip: true,
  },
  {
    title: "pokedex-app",
    description:
      "A React Native application for Pokemon. A pokedex with list of all Pokemons and their stats, type, evolution.",
    link: "https://github.com/cfatrane/pokedex-app",
    wip: true,
  },
  {
    title: "vitejs-boilerplate",
    description: "Boilerplate for Vite Js. Eslint, Husky, Prettier, Tailwind",
    link: "https://github.com/cfatrane/vitejs-boilerplate",
    wip: true,
  },
];

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
        <HoverEffect items={projects} withMeteors />
      </div>
    </SimpleLayout>
  );
}
