import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  NextJsIcon,
  PostgresIcon,
  PrismaIcon,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon,
  VercelIcon,
} from "@/constants/bar";

type LogoCloudItemProps = {
  content: string;
  icon: React.ComponentType<{ className?: string }>;
  fill?: string;
};

function LogoCloudItem({
  content,
  icon: Icon,
  fill,
}: Readonly<LogoCloudItemProps>) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="relative size-8 md:size-12">
            <Icon
              className={`origin-center transition ease-in-out hover:scale-125 ${fill}`}
            />
          </div>
        </TooltipTrigger>

        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function TechnoCloud() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto flex max-w-lg flex-wrap items-center justify-center gap-x-8 gap-y-12 sm:max-w-xl sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none">
        <LogoCloudItem content="React Js" icon={ReactIcon} />

        <LogoCloudItem content="Next Js" icon={NextJsIcon} />

        <LogoCloudItem content="Typescript" icon={TypescriptIcon} />

        <LogoCloudItem content="Vercel" fill="fill-primary" icon={VercelIcon} />

        <LogoCloudItem content="Prisma" fill="fill-primary" icon={PrismaIcon} />

        <LogoCloudItem content="PostgreSQL" icon={PostgresIcon} />

        <LogoCloudItem content="Tailwind" icon={TailwindIcon} />
      </div>
    </div>
  );
}
