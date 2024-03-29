"use client";

import Image from "next/image";
import { notFound } from "next/navigation";

import {
  InboxStackIcon,
  RectangleStackIcon,
  BuildingStorefrontIcon,
  AdjustmentsVerticalIcon,
  GlobeAltIcon,
  WrenchIcon,
} from "@heroicons/react/24/solid";
import { Tooltip } from "@nextui-org/tooltip";
import kebabCase from "lodash/kebabCase";

import { SimpleLayout } from "@/components/SimpleLayout";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

import { JOBS_FR } from "@/constants/jobs/fr";
import { TECHNOS } from "@/constants/technos";

const SkeletonMission = ({ missions }: { missions: string[] }) => (
  <div className="h-full min-h-[6rem] w-full overflow-scroll rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
    <ul className="list-inside list-disc p-4">
      {missions.map((mission, index) => (
        <li className="text-sm" key={index}>
          {mission}
        </li>
      ))}
    </ul>
  </div>
);

const SkeletonTechnos = ({ technos }: { technos: string[] | undefined }) => {
  return (
    <div className="flex h-full min-h-[6rem] w-full flex-1 flex-wrap items-center justify-center gap-4 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      {technos?.map((techno) => (
        <>
          {TECHNOS.find((elem) => elem.name === techno)?.icon && (
            <div key={techno}>
              <Tooltip content={techno}>
                <Image
                  alt={techno}
                  height={40}
                  src={TECHNOS.find((elem) => elem.name === techno)?.icon}
                  width={40}
                />
              </Tooltip>
            </div>
          )}
        </>
      ))}
    </div>
  );
};

function ExperienceDetail({ params }: { params: { slug: string } }) {
  const experience = JOBS_FR.find(
    (element) => kebabCase(element.name) === kebabCase(params.slug),
  );

  if (!experience) {
    return notFound();
  }

  const missions = experience.missions;
  const frontend = experience?.technos?.Frontend?.split("/").map((item) =>
    item.trim(),
  );
  const backend = experience?.technos?.Backend?.split("/").map((item) =>
    item.trim(),
  );
  const devops = experience?.technos?.Devops?.split("/").map((item) =>
    item.trim(),
  );
  const tools = experience?.technos?.Tools?.split("/").map((item) =>
    item.trim(),
  );
  const test = experience?.technos?.Test?.split("/").map((item) => item.trim());

  const items = [
    {
      title: "Missions",
      description: "Les Quêtes Légendaires.",
      header: <SkeletonMission missions={missions} />,
      icon: <RectangleStackIcon className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Devops",
      description: "Les Alchimistes du Flux.",
      header: <SkeletonTechnos technos={devops} />,
      icon: <GlobeAltIcon className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Backend",
      description: "Les Architectes de l'Ombre.",
      header: <SkeletonTechnos technos={backend} />,
      icon: <InboxStackIcon className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Frontend",
      description: "L'Art de l'Interface.",
      header: <SkeletonTechnos technos={frontend} />,
      icon: <BuildingStorefrontIcon className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Tools",
      description: "La Boîte à Outils Magique.",
      header: <SkeletonTechnos technos={tools} />,
      icon: <WrenchIcon className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Test",
      description: "La Chasse aux Bugs.",
      header: <SkeletonTechnos technos={test} />,
      icon: <AdjustmentsVerticalIcon className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <SimpleLayout intro={experience!.title} title={experience!.name}>
      <BentoGrid className="mx-auto max-w-4xl">
        {items.map((item, i) => (
          <BentoGridItem
            className={i === 0 || i === 3 || i === 4 ? "md:col-span-2" : ""}
            description={item.description}
            header={item.header}
            icon={item.icon}
            key={i}
            title={item.title}
          />
        ))}
      </BentoGrid>
    </SimpleLayout>
  );
}

export default ExperienceDetail;
