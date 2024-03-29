import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Props = {
  name: string;
  description: string[];
  missions: string[];
  title: string;
  logo: string | StaticImport;
  image?: string;
  // type?: string;
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
  color?: string;
  website: string;
};
