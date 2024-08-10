export type JobType = {
  company: string;
  description: string;
  badges?: string[];
  missions: string[];
  title: string;
  logoUrl: string;
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
  endDate?: string | null;
  context?: string;
  color?: string;
  href: string;
};
