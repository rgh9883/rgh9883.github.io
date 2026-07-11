export interface AboutData {
  name: string;
  role: string;
  tagline: string;
  bio: string[];
  location: string;
  /** path under /public, e.g. "/headshot.jpg"; falls back to initials when omitted. */
  photo?: string;
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
  /** path under /public, e.g. "/projects/foo.png"; falls back to a placeholder tile when omitted. */
  image?: string;
  featured?: boolean;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  start: string;
  end: string;
  /** path under /public, e.g. "/logos/liberty-mutual.png"; falls back to initials when omitted. */
  logo?: string;
}

export interface Skill {
  name: string;
  /** simple-icons slug for the logo; omit for skills with no matching brand icon (e.g. "REST APIs"). */
  slug?: string;
  /** official site for the language/framework/tool. */
  url: string;
}

export interface SkillGroup {
  id: string;
  label: string;
  skills: Skill[];
}

export interface ContactLink {
  id: string;
  label: string;
  href: string;
  icon: "mail" | "github" | "linkedin" | "external";
}

export interface EducationData {
  school: string;
  degree: string;
  gradYear: string;
}
