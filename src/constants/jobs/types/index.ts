export type Props = {
  companyName: string;
  description: string;
  missions: string[];
  title: string;
  titleMore?: string;
  type?: string;
  technos: {
    Backend?: string[];
    Frontend?: string[];
    Devops?: string[];
    Test?: string[];
    Others?: string[];
  };
  startDate: string;
  endDate: string;
  context: string;
  color?: string;
  website: string;
};
