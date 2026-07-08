export interface AboutData {
  name: string;
  role: string;
  tagline: string;
  bio: string[];
  location: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  stack: string[];
  links: {
    repo?: string;
    live?: string;
  };
  featured?: boolean;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  start: string;
  end: string;
  summary: string;
  highlights: string[];
}

export interface SkillGroup {
  id: string;
  label: string;
  skills: string[];
}

export interface ContactLink {
  id: string;
  label: string;
  href: string;
  icon: "mail" | "github" | "linkedin" | "external";
}
