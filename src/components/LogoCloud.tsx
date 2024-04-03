import Image from "next/image";

import { Tooltip } from "@nextui-org/tooltip";

export function LogoCloud() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Tooltip content="React" placement="bottom">
            <Image
              alt="react"
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              height={48}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              width={48}
            />
          </Tooltip>

          <Tooltip content="Next Js" placement="bottom">
            <Image
              alt="nextjs"
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              height={48}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
              width={48}
            />
          </Tooltip>

          <Tooltip content="Typescript" placement="bottom">
            <Image
              alt="typescript"
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              height={48}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              width={48}
            />
          </Tooltip>

          <Tooltip content="Node Js" placement="bottom">
            <Image
              alt="nodejs"
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              height={48}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
              width={48}
            />
          </Tooltip>

          <Tooltip content="Tailwind" placement="bottom">
            <Image
              alt="tailwindcss"
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              height={48}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              width={48}
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
