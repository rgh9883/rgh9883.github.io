import { skills } from "./skills";
import type { Skill } from "./types";

// Tech used in project stacks but not listed in the Skills section itself —
// still gets an icon + link when it shows up on a project card.
const projectOnlySkills: Skill[] = [
  { name: "Supabase", slug: "supabase", url: "https://supabase.com" },
  { name: "Firebase", slug: "firebase", url: "https://firebase.google.com" },
  { name: "FastAPI", slug: "fastapi", url: "https://fastapi.tiangolo.com" },
  { name: "Flask", slug: "flask", url: "https://flask.palletsprojects.com" },
  { name: "Bootstrap", slug: "bootstrap", url: "https://getbootstrap.com" },
  { name: "Express.js", slug: "express", url: "https://expressjs.com" },
  { name: "HTML", slug: "html5", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", slug: "css", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "MongoDB", slug: "mongodb", url: "https://www.mongodb.com" },
  { name: "Godot", slug: "godotengine", url: "https://godotengine.org" },
];

export const skillsByName: Record<string, Skill> = Object.fromEntries(
  [...skills.flatMap((group) => group.skills), ...projectOnlySkills].map((skill) => [skill.name, skill])
);
