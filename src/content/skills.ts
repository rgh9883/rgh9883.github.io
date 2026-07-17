import type { SkillGroup } from "./types";

export const skills: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "Java", url: "https://www.java.com" },
      { name: "TypeScript", slug: "typescript", url: "https://www.typescriptlang.org" },
      { name: "Python", slug: "python", url: "https://www.python.org" },
      { name: "SQL", url: "https://en.wikipedia.org/wiki/SQL" },
      { name: "C", slug: "c", url: "https://en.wikipedia.org/wiki/C_(programming_language)" },
      { name: "Bash", slug: "gnubash", url: "https://www.gnu.org/software/bash/" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "React", slug: "react", url: "https://react.dev" },
      { name: "AngularJS", slug: "angular", url: "https://angularjs.org" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js", slug: "nodedotjs", url: "https://nodejs.org" },
      { name: "Java Spring Boot", slug: "springboot", url: "https://spring.io/projects/spring-boot" },
      { name: "PostgreSQL", slug: "postgresql", url: "https://www.postgresql.org" },
      { name: "REST APIs", url: "https://developer.mozilla.org/en-US/docs/Glossary/REST" },
    ],
  },
  {
    id: "ai-ml",
    label: "AI / ML",
    skills: [
      { name: "scikit-learn", slug: "scikitlearn", url: "https://scikit-learn.org" },
      { name: "PyTorch", slug: "pytorch", url: "https://pytorch.org" },
      { name: "OpenCV", slug: "opencv", url: "https://opencv.org" },
    ],
  },
  {
    id: "tools",
    label: "Tools & OS",
    skills: [
      { name: "Linux", slug: "linux", url: "https://hyprland.org" },
      { name: "Docker", slug: "docker", url: "https://www.docker.com" },
      { name: "Git", slug: "git", url: "https://git-scm.com" },
      { name: "GitHub", slug: "github", url: "https://github.com" },
      { name: "Neovim", slug: "neovim", url: "https://neovim.io" },
    ],
  },
];
