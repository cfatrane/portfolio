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
