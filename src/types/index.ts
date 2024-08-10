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

export type ProjectType = {
  title: string;
  href: string;
  description: string;
  technologies: string[];
  links: { type: string; href: string; icon: JSX.Element }[];
  image?: string;
  video?: string;
  startDate: string;
  endDate?: string | null;
  wip?: boolean;
};
