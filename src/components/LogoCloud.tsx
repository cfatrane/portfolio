import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { clsx } from "clsx";

import BNPLogo from "@/assets/company/bnp.png";
import KinetixLogo from "@/assets/company/kinetix-logo.png";
import LaPosteLogo from "@/assets/company/la-poste.png";
import LeFigaroLogo from "@/assets/company/le-figaro.png";
import PayplugLogo from "@/assets/company/payplug.png";

import { Button } from "@/components/ui/button";

function LogoCloudItem({
  alt,
  className,
  icon,
}: Readonly<{
  alt: string;
  className?: string;
  icon: StaticImageData;
}>) {
  return (
    <div className={clsx(className, "relative h-20 w-52")}>
      <Image
        alt={alt}
        className="size-full shrink origin-center rounded bg-white object-contain p-2 transition ease-in-out hover:scale-125"
        fill
        src={icon}
      />
    </div>
  );
}

export function LogoCloud() {
  return (
    <div className="flex flex-col items-center justify-center bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-primary">
          J'ai collaborer avec de grands groupes et startups françaises
        </h2>

        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <LogoCloudItem
            alt="bnp"
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            icon={BNPLogo}
          />

          <LogoCloudItem
            alt="le-figaro"
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            icon={LeFigaroLogo}
          />

          <LogoCloudItem
            alt="payplug"
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            icon={PayplugLogo}
          />

          <LogoCloudItem
            alt="la-poste"
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            icon={LaPosteLogo}
          />

          <LogoCloudItem
            alt="kinetix"
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            icon={KinetixLogo}
          />
        </div>
      </div>

      <Button asChild className="mt-20">
        <Link href="/experiences">La liste complete</Link>
      </Button>
    </div>
  );
}
