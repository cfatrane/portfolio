import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type LogoCloudItemProps = {
  content: string;
  src: string;
};

function LogoCloudItem({ content, src }: Readonly<LogoCloudItemProps>) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Image
            alt={`${content.toLowerCase()} logo`}
            className="max-h-12 w-full object-contain"
            height={48}
            src={src}
            width={48}
          />
        </TooltipTrigger>

        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function LogoCloud() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <LogoCloudItem
          content="React Js"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        />

        <LogoCloudItem
          content="Next Js"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
        />

        <LogoCloudItem
          content="Typescript"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
        />

        <LogoCloudItem
          content="Vercel"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg"
        />

        <LogoCloudItem
          content="Prisma"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
        />

        <LogoCloudItem
          content="Prisma"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
        />

        <LogoCloudItem
          content="Node Js"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
        />

        <LogoCloudItem
          content="Tailwind"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        />
      </div>
    </div>
  );
}
