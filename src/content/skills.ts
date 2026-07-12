import type { SkillGroup } from "./types";

export const skills: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "Java", url: "https://www.java.com" },
      { name: "JavaScript", slug: "javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "TypeScript", slug: "typescript", url: "https://www.typescriptlang.org" },
      { name: "Python", slug: "python", url: "https://www.python.org" },
      { name: "SQL", url: "https://en.wikipedia.org/wiki/SQL" },
      { name: "C", slug: "c", url: "https://en.wikipedia.org/wiki/C_(programming_language)" },
      { name: "C#", url: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
      { name: "Rust", slug: "rust", url: "https://www.rust-lang.org" },
      { name: "Bash", slug: "gnubash", url: "https://www.gnu.org/software/bash/" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "React", slug: "react", url: "https://react.dev" },
      { name: "AngularJS", slug: "angular", url: "https://angularjs.org" },
      { name: "Tailwind CSS", slug: "tailwindcss", url: "https://tailwindcss.com" },
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
      { name: "GitHub Actions", slug: "githubactions", url: "https://github.com/features/actions" },
      { name: "Visual Studio Code", slug: "vscodium",url: "https://code.visualstudio.com" },
      { name: "IntelliJ IDEA", slug: "intellijidea", url: "https://www.jetbrains.com/idea/" },
      { name: "DataGrip", slug: "datagrip", url: "https://www.jetbrains.com/datagrip/" },
      { name: "Neovim", slug: "neovim", url: "https://neovim.io" },
      { name: "Godot", slug: "godotengine", url: "https://godotengine.org" },
      { name: "Claude Code", slug: "claudecode", url: "https://claude.com/product/claude-code" },
      { name: "GitHub Copilot", slug: "githubcopilot", url: "https://github.com/features/copilot" },
    ],
  },
];
