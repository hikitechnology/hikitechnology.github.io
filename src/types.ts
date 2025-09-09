import { IconName } from "lucide-react/dynamic";

export type Project = {
  id: string;
  title: string;
  cardImage: string;
  shortDescription: string;
  github?: string;
  live?: string;
  demo?: string;
  tags: string[];
  inDevelopment: boolean;
  projectImage: string;
  tagline: string;
  longDescription: string;
  status: string;
  timeline: string;
  role: string;
  team: string;
  techStack: {
    category: string;
    icon: IconName;
    items: {
      name: string;
      description: string;
    }[];
  }[];
  features: {
    title: string;
    description: string;
    icon: IconName;
  }[];
  challenges?: {
    problem: string;
    solution: string;
    code: string;
  }[];
  process: {
    phase: string;
    duration: string;
    description: string;
    deliverables?: string[];
  }[];
};

export type Profile = {
  role: string;
  skills: string[];
  name: string;
  email: string;
  github: string;
  resume: string;
};
