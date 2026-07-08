import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "portfolio-os",
    name: "Portfolio / Portfolio-OS",
    description:
      "This site. A single content layer rendered two ways: a scrollable traditional page and a Hyprland-inspired desktop simulation with draggable windows.",
    stack: ["React", "TypeScript", "Zustand", "Tailwind", "Framer Motion"],
    links: { repo: "https://github.com/rgh9883/rgh9883.github.io" },
    featured: true,
  },
  {
    id: "sample-project-two",
    name: "Sample Project Two",
    description:
      "Placeholder entry — swap in a real project. Edit src/content/projects.ts; both Traditional and OS mode update automatically.",
    stack: ["TypeScript", "Node"],
    links: { repo: "https://github.com/rgh9883" },
  },
  {
    id: "sample-project-three",
    name: "Sample Project Three",
    description:
      "Another placeholder entry to demonstrate the grid/list layout with three or more cards.",
    stack: ["Python"],
    links: {},
  },
];
