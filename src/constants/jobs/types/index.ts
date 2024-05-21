import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type JobType = {
  name: string;
  description: string;
  missions: string[];
  title: string;
  logo: string | StaticImport;
  image?: string;
  technos: {
    Frontend?: string;
    Backend?: string;
    Devops?: string;
    Test?: string;
    Others?: string;
    Tools?: string;
  };
  startDate: string;
  endDate: string;
  context: string;
  color?: string;
  website: string;
};
