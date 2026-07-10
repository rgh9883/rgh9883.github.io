import {
  siTypescript,
  siPython,
  siGo,
  siGnubash,
  siReact,
  siTailwindcss,
  siFramer,
  siNodedotjs,
  siPostgresql,
  siGraphql,
  siLinux,
  siDocker,
  siGit,
  siVite,
} from "simple-icons";

// Keyed by simple-icons slug (matches Skill.slug in content/skills.ts).
// Named imports keep the bundle to only the icons actually used.
export const skillIconPaths: Record<string, string> = {
  [siTypescript.slug]: siTypescript.path,
  [siPython.slug]: siPython.path,
  [siGo.slug]: siGo.path,
  [siGnubash.slug]: siGnubash.path,
  [siReact.slug]: siReact.path,
  [siTailwindcss.slug]: siTailwindcss.path,
  [siFramer.slug]: siFramer.path,
  [siNodedotjs.slug]: siNodedotjs.path,
  [siPostgresql.slug]: siPostgresql.path,
  [siGraphql.slug]: siGraphql.path,
  [siLinux.slug]: siLinux.path,
  [siDocker.slug]: siDocker.path,
  [siGit.slug]: siGit.path,
  [siVite.slug]: siVite.path,
};
