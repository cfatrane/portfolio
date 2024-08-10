import { Icons } from "@/components/icons";

import { ProjectType } from "@/constants/jobs/types";

export const PROJECTS: ProjectType[] = [
  {
    title: "Uzzle",
    href: "https://uzzle.ai/",
    startDate: "2024-02",
    description:
      "Créez vos personnages de toute pièces et partagez-les avec le monde entier.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Shadcn UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://uzzle.ai/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/projects/uzzle.jpg",
    video: "",
    wip: true,
  },
  {
    title: "your-life-in",
    startDate: "2024-03",
    href: "https://your-life-in.vercel.app/",
    description:
      "It kind of feels like our lives are made up of a countless number of weeks. But there they are—fully countable—staring you in the face.",
    links: [
      {
        type: "Website",
        href: "https://your-life-in.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    technologies: [
      "Vite.js",
      "Typescript",
      "Eslint",
      "Prettier",
      "Tailwind",
      "TailwindCSS",
      "Shadcn UI",
    ],
    image: "/projects/your-life-in.png",
    video: "",
    wip: true,
  },
  {
    title: "nextjs-boilerplate",
    startDate: "2024-01",
    href: "https://github.com/cfatrane/nextjs-boilerplate",
    description:
      "Boilerplate for Next Js. Eslint, Husky, i18n, Prettier, Shadcn, Storybook, Stripe, Tailwind",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Eslint",
      "Prettier",
      "Tailwind",
      "Prisma",
      "Stripe",
      "TailwindCSS",
      "Shadcn UI",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/cfatrane/nextjs-boilerplate",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/projects/next-boilerplate.png",
    video: "",
    wip: true,
  },
  {
    title: "instagram-checker",
    href: "https://instagram-checker.vercel.app",
    startDate: "2024-04",
    description: "A simple dashboard to check your basic Instagram stats",
    technologies: [
      "Next.js",
      "Typescript",
      "Eslint",
      "Prettier",
      "Tailwind",
      "TailwindCSS",
      "Shadcn UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://instagram-checker.vercel.app",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/projects/instagram-checker.png",
    video: "",
    wip: true,
  },
  // {
  //   title: "pokedex-app",
  //   description:
  //     "A React Native application for Pokemon. A pokedex with list of all Pokemons and their stats, type, evolution.",
  //   technologies: ["React Native", "Expo", "Firebase"],
  //   links: [
  //     {
  //       type: "Source",
  //       href: "https://github.com/cfatrane/pokedex-app",
  //       icon: <Icons.github className="size-3" />,
  //     },
  //   ],
  //   wip: true,
  // },
  // {
  //   title: "react-native-boilerplate",
  //   href: "https://github.com/cfatrane/react-native-boilerplate",
  //   description: "React Native Boilerplate",
  //   links: [
  //     {
  //       type: "Source",
  //       href: "https://github.com/cfatrane/react-native-boilerplate",
  //       icon: <Icons.github className="size-3" />,
  //     },
  //   ],
  //   wip: true,
  // },
  // {
  //   title: "vitejs-boilerplate",
  //   href: "https://instagram-checker.vercel.app",
  //   description: "Boilerplate for Vite Js. Eslint, Husky, Prettier, Tailwind",
  //   links: [
  //     {
  //       type: "Source",
  //       href: "https://github.com/cfatrane/vitejs-boilerplate",
  //       icon: <Icons.github className="size-3" />,
  //     },
  //   ],
  //   wip: true,
  // },
];
