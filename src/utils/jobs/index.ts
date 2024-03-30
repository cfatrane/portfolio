import kebabCase from "lodash/kebabCase";

import { JOBS_FR } from "@/constants/jobs/fr";
import { Props } from "@/constants/jobs/types";

export const extractTechnos = (experience: Props, name: string) => {
  const technos = experience.technos[
    (name as Extract<keyof (typeof experience)["technos"], string>) ?? ""
  ]
    ?.split("/")
    .map((item) => item.trim());

  return technos;
};

export const extractAllTechnos = (experience: Props) => {
  const frontend = extractTechnos(experience, "Frontend");
  const backend = extractTechnos(experience, "Backend");
  const devops = extractTechnos(experience, "Devops");
  const tools = extractTechnos(experience, "Tools");
  const test = extractTechnos(experience, "Test");

  return { frontend, backend, devops, tools, test };
};

export const getExperience = (slug: string) => {
  const experience = JOBS_FR.find(
    (element) => kebabCase(element.name) === kebabCase(slug),
  );

  return experience;
};
