import React from "react";

import { type Metadata } from "next";

import Image from "next/image";

import dayjs from "dayjs";

// import { Image } from "@nextui-org/react";
import { twMerge } from "tailwind-merge";

import { JOBS_FR } from "@/constants/jobs/fr";

import { SimpleLayout } from "@/components/SimpleLayout";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { TracingBeam } from "@/components/ui/tracing-beam";

export const metadata: Metadata = {
  title: "Experiences",
  description: "Une liste des entreprises avec lesquelles j'ai travaillé",
};

function Experiences() {
  return (
    <div>
      <SimpleLayout
        intro=" I've had the opportunity to work with companies such as BNP (a French multinational universal bank), La Poste (France's leading local sales network) and Le Figaro (the second-largest title in the French national press)."
        title="Une liste des entreprises avec lesquelles j'ai travaillé"
      >
        <TracingBeam>
          <div className="relative mx-auto max-w-2xl pt-4 antialiased">
            {JOBS_FR.map((item, index) => (
              <div className="mb-10" key={`content-${index}`}>
                <a className="mb-4 flex items-center" href={item.website}>
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <Image
                      alt=""
                      className="object-cover"
                      height={50}
                      src={item.logo}
                      unoptimized
                    />
                  </div>

                  <h2 className="w-fit rounded-full bg-black px-4 py-1 text-2xl text-white">
                    {/* <h2 className="mb-4 w-fit rounded-full bg-black px-4 py-1 text-xl text-white"> */}
                    {item.title}
                  </h2>
                </a>

                {/* <p className={twMerge("mb-4 text-xl")}>{item.title}</p> */}

                <div className="mb-4 text-sm">
                  <p>
                    <span>{item.name}</span>

                    <span> | </span>

                    <span>
                      {dayjs(item.startDate).format("MMM YYYY")} -{" "}
                      {dayjs(item.endDate).format("MMM YYYY")}
                    </span>
                  </p>
                </div>

                <div className="prose-sm  prose text-sm dark:prose-invert">
                  <a href={item.website}>
                    {item?.image && (
                      <Image
                        alt="blog thumbnail"
                        className="mb-10 rounded-lg object-cover"
                        height="1000"
                        src={item.image}
                        width="1000"
                      />
                    )}
                  </a>

                  {item?.description?.map((item) => <p>{item}</p>)}
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>

        {/* <HoverEffect items={projects} /> */}
      </SimpleLayout>
    </div>
  );
}

export function CardHoverEffectDemo() {
  return (
    <div className="mx-auto max-w-5xl px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

const projects = [
  {
    title: "Le Figaro",
    description:
      "Le Figaro is a French daily morning newspaper founded in 1826. The oldest national newspaper in France",
    link: "http://lefigaro.fr",
    // logo: logoLeFigaro,
  },
  {
    title: "Payplug",
    description:
      "Payplug is a payment solution designed for merchants, online merchants and fintech companies.",
    link: "https://www.payplug.com/",
    // logo: logoDalenys,
  },
  {
    title: "Kinetix Tech",
    description:
      "Kinetix allows games to integrate an AI-powered User-Generated Emote feature.",
    link: "https://www.kinetix.tech/",
    // logo: logoKinetix,
  },
  {
    title: "Rock U Support",
    description:
      "Rock U Support is a platform that allows event organizers and sports coaches to connect with their audience.",
    link: "https://rockusupport.com/",
    // logo: logoRockUSupport,
  },

  {
    title: "alf",
    description:
      "alt is a PaaS platform for legal file management, designed to optimize your recurring legal workflows and save time for you and your teams.",
    link: "https://thisisalf.com/",
    // logo: logoAlf,
  },
  {
    title: "Le Closet",
    description: "Le dressing illimité pour femme par abonnement.",
    link: "https://www.lecloset.fr/",
    // logo: logoLeCloset,
  },
];

export default Experiences;
