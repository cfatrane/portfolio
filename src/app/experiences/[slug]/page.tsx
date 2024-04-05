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

import { SimpleLayout } from "@/components/SimpleLayout";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

import { TECHNOS_ICONS } from "@/constants/technos";

import { extractAllTechnos, getExperience } from "@/utils/jobs";

const SkeletonMission = ({ missions }: { missions: string[] }) => (
  <div className="h-full min-h-[6rem] w-full overflow-scroll rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
    <ul className="list-inside list-disc p-4">
      {missions.map((mission) => (
        <li className="text-sm" key={mission}>
          {mission}
        </li>
      ))}
    </ul>
  </div>
);

const SkeletonTechnos = ({ technos }: { technos: string[] | undefined }) => {
  const iconArray = technos
    ?.map((techno) => {
      const icon = TECHNOS_ICONS.find((elem) => elem.name === techno)?.icon;

      if (icon) {
        return { icon, name: techno };
      }
    })
    .filter((elem) => elem !== undefined) as { icon: string; name: string }[];

  return (
    <div className="flex h-full min-h-[6rem] w-full flex-1 flex-wrap items-center justify-center gap-4 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      {iconArray?.map((techno) => (
        <div key={techno.name}>
          <Tooltip content={techno.name}>
            <Image alt={techno.name} height={40} src={techno.icon} width={40} />
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

function ExperienceDetail({ params }: { params: { slug: string } }) {
  const experience = getExperience(params.slug);

  if (!experience) {
    return notFound();
  }

  const missions = experience.missions;

  const { frontend, backend, devops, tools, test } =
    extractAllTechnos(experience);

  const items = [
    {
      title: "Missions",
      description: "Les Quêtes Légendaires.",
      header: <SkeletonMission missions={missions} />,
      icon: <RectangleStackIcon className="h-4 w-4 text-neutral-500" />,
    },
    ...((devops?.length ?? 0) > 0
      ? [
          {
            title: "Devops",
            description: "Les Alchimistes du Flux.",
            header: <SkeletonTechnos technos={devops} />,
            icon: <GlobeAltIcon className="h-4 w-4 text-neutral-500" />,
          },
        ]
      : []),
    ...((backend?.length ?? 0) > 0
      ? [
          {
            title: "Backend",
            description: "Les Architectes de l'Ombre.",
            header: <SkeletonTechnos technos={backend} />,
            icon: <InboxStackIcon className="h-4 w-4 text-neutral-500" />,
          },
        ]
      : []),
    ...((frontend?.length ?? 0) > 0
      ? [
          {
            title: "Frontend",
            description: "L'Art de l'Interface.",
            header: <SkeletonTechnos technos={frontend} />,
            icon: (
              <BuildingStorefrontIcon className="h-4 w-4 text-neutral-500" />
            ),
          },
        ]
      : []),
    ...((tools?.length ?? 0) > 0
      ? [
          {
            title: "Tools",
            description: "La Boîte à Outils Magique.",
            header: <SkeletonTechnos technos={tools} />,
            icon: <WrenchIcon className="h-4 w-4 text-neutral-500" />,
          },
        ]
      : []),
    ...((test?.length ?? 0) > 0
      ? [
          {
            title: "Test",
            description: "La Chasse aux Bugs.",
            header: <SkeletonTechnos technos={test} />,
            icon: (
              <AdjustmentsVerticalIcon className="h-4 w-4 text-neutral-500" />
            ),
          },
        ]
      : []),
  ];

  return (
    <SimpleLayout intro={experience.title} title={experience.name}>
      <BentoGrid className="mx-auto max-w-4xl">
        {items.map((item, index) => (
          <BentoGridItem
            className={
              index === 0 || index === 3 || index === 4 ? "md:col-span-2" : ""
            }
            description={item.description}
            header={item.header}
            icon={item.icon}
            key={index}
            title={item.title}
          />
        ))}
      </BentoGrid>
    </SimpleLayout>
  );
}

export default ExperienceDetail;
