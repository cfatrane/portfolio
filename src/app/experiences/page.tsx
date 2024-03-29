import { type Metadata } from "next";

import NextImage from "next/image";

import { Link, Image } from "@nextui-org/react";
import dayjs from "dayjs";
import kebabCase from "lodash/kebabCase";

import { SimpleLayout } from "@/components/SimpleLayout";
import { TracingBeam } from "@/components/ui/tracing-beam";

import { JOBS_FR } from "@/constants/jobs/fr";

const title = "Une liste des entreprises avec lesquelles j'ai collaboré.";

export const metadata: Metadata = {
  title: "Experiences",
  description: title,
};

function Experiences() {
  return (
    <div>
      <SimpleLayout
        intro="Je suis développeur frontend avec 5 ans d’expérience dans des secteurs comme l'e-commerce, l'audiovisuel les sport, la mode et les médias. J’ai eu l’opportunité de travailler avec des entreprises comme la BNP, La Poste et Le Figaro. J'ai aussi pu travailler avec différentes start-ups dans diverses domaines."
        title={title}
      >
        <TracingBeam>
          <div className="relative mx-auto max-w-2xl pt-4 antialiased">
            {JOBS_FR.map((item, index) => (
              <div className="mb-10" key={`content-${index}`}>
                <Link
                  className="mb-4 flex w-fit items-center"
                  href={`experiences/${kebabCase(item.name)}`}
                  showAnchorIcon
                  style={{ color: item.color }}
                >
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <NextImage
                      alt=""
                      className="object-cover"
                      height={50}
                      src={item.logo}
                      unoptimized
                    />
                  </div>

                  <h2
                    className="w-fit px-4 py-1 text-2xl text-white"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </h2>
                </Link>

                <div
                  className="mb-4 text-sm font-bold"
                  style={{ color: item.color }}
                >
                  <p>
                    <span>{item.name}</span>

                    <span> | </span>

                    <span>{dayjs(item.startDate).format("MMM YYYY")}</span>

                    <span> - </span>

                    <span>{dayjs(item.endDate).format("MMM YYYY")}</span>
                  </p>
                </div>

                <div className="prose-sm text-sm dark dark:prose-invert">
                  <a href={item.website}>
                    {item?.image && (
                      <Image
                        alt={`${item.name} thumbnail`}
                        className="mb-10 rounded-lg object-cover"
                        height={1000}
                        isBlurred
                        src={item.image}
                        width={1000}
                      />
                    )}
                  </a>

                  {item?.description?.map((item, index) => (
                    <p className="mb-2" key={index}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
      </SimpleLayout>
    </div>
  );
}

export default Experiences;
