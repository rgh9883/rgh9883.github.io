import { skills } from "./skills";
import type { Skill } from "./types";

export const skillsByName: Record<string, Skill> = Object.fromEntries(
  skills.flatMap((group) => group.skills.map((skill) => [skill.name, skill]))
);
