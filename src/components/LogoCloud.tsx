import { clsx } from "clsx";

import { LeFigaroLogo, PayplugLogo } from "@/constants/company/logos";

function LogoCloudItem({
  className,
  icon: Icon,
}: Readonly<{
  className?: string;
  icon: React.ComponentType<{ className?: string }>;
}>) {
  return (
    <div className={clsx(className)}>
      <Icon
        className={`size-full origin-center fill-white transition ease-in-out hover:scale-125`}
      />
    </div>
  );
}

export function LogoCloud() {
  return (
    <div className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-primary">
          J'ai collaborer avec de grands groupes français
        </h2>

        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <LogoCloudItem
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            icon={LeFigaroLogo}
          />

          <LogoCloudItem
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            icon={PayplugLogo}
          />

          <LogoCloudItem
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            icon={PayplugLogo}
          />

          <LogoCloudItem
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            icon={PayplugLogo}
          />

          <LogoCloudItem
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            icon={PayplugLogo}
          />
        </div>
      </div>
    </div>
  );
}
