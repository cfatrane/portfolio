import { StaticImageData } from "next/image";

export type Props = {
  name: string;
  description?: string[];
  missions?: string[];
  title: string;
  logo?: StaticImageData;
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
