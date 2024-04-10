import { type Metadata } from "next";

import NextImage from "next/image";

import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import dayjs from "dayjs";
import kebabCase from "lodash/kebabCase";

import { SimpleLayout } from "@/components/SimpleLayout";

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
        intro="Que ce soit pendant mes stages, alternances, CDI ou contrats freelances, j'ai eu la chance de travailler dans plusieurs grands groupes et startups au cours de ma carrière professionnelle."
        title={title}
      >
        <div className="relative mx-auto max-w-2xl pt-4 antialiased">
          {JOBS_FR.map((item) => (
            <div className="mb-10" key={item.name}>
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
                      className="rounded-lg object-cover"
                      height={1000}
                      isBlurred
                      isZoomed
                      src={item.image}
                      width={1000}
                    />
                  )}
                </a>

                <p className="mb-2 mt-8">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SimpleLayout>
    </div>
  );
}

export default Experiences;
