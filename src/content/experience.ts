import type { ExperienceEntry } from "./types";

export const experience: ExperienceEntry[] = [
  {
    id: "role-current",
    company: "Company Name",
    role: "Software Engineer",
    start: "2023",
    end: "Present",
    summary: "Placeholder entry — swap in real experience in src/content/experience.ts.",
    highlights: [
      "Shipped a thing that mattered to someone.",
      "Made a slow thing fast, or a fragile thing sturdy.",
    ],
  },
  {
    id: "role-previous",
    company: "Previous Company",
    role: "Software Engineer",
    start: "2021",
    end: "2023",
    summary: "Another placeholder entry demonstrating a second experience card.",
    highlights: ["Built and maintained core product surfaces.", "Mentored new teammates."],
  },
];
