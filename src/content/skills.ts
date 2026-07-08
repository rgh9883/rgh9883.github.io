import type { SkillGroup } from "./types";

export const skills: SkillGroup[] = [
  { id: "languages", label: "Languages", skills: ["TypeScript", "Python", "Go", "Bash"] },
  { id: "frontend", label: "Frontend", skills: ["React", "Tailwind CSS", "Framer Motion"] },
  { id: "backend", label: "Backend", skills: ["Node.js", "PostgreSQL", "REST/GraphQL"] },
  { id: "tools", label: "Tools & OS", skills: ["Linux (Hyprland)", "Docker", "Git", "Vite"] },
];
