import type { SkillGroup } from "./types";

export const skills: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "TypeScript", slug: "typescript", url: "https://www.typescriptlang.org" },
      { name: "Python", slug: "python", url: "https://www.python.org" },
      { name: "Go", slug: "go", url: "https://go.dev" },
      { name: "Bash", slug: "gnubash", url: "https://www.gnu.org/software/bash/" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "React", slug: "react", url: "https://react.dev" },
      { name: "Tailwind CSS", slug: "tailwindcss", url: "https://tailwindcss.com" },
      { name: "Framer Motion", slug: "framer", url: "https://www.framer.com/motion/" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js", slug: "nodedotjs", url: "https://nodejs.org" },
      { name: "PostgreSQL", slug: "postgresql", url: "https://www.postgresql.org" },
      { name: "GraphQL", slug: "graphql", url: "https://graphql.org" },
      { name: "REST APIs", url: "https://developer.mozilla.org/en-US/docs/Glossary/REST" },
    ],
  },
  {
    id: "tools",
    label: "Tools & OS",
    skills: [
      { name: "Linux", slug: "linux", url: "https://hyprland.org" },
      { name: "Docker", slug: "docker", url: "https://www.docker.com" },
      { name: "Git", slug: "git", url: "https://git-scm.com" },
      { name: "Vite", slug: "vite", url: "https://vitejs.dev" },
    ],
  },
];
