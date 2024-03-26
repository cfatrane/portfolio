import { StaticImageData } from "next/image";

export type Props = {
  name: string;
  description?: string[];
  // missions?: string[];
  title: string;
  logo?: any;
  image?: any;
  // image?: StaticImageData;
  // titleMore?: string;
  // type?: string;
  // technos?: {
  //   Backend?: string[];
  //   Frontend?: string[];
  //   Devops?: string[];
  //   Test?: string[];
  //   Others?: string[];
  // };
  startDate: string;
  endDate: string;
  // context?: string;
  color?: string;
  website: string;
};
