import { Briefcase } from "lucide-react";

import { ExperienceContent } from "@/components/shared/ExperienceContent";
import type { AppDefinition } from "../registry";

export const experienceApp: AppDefinition = {
  id: "experience",
  title: "Experience",
  icon: Briefcase,
  component: ExperienceContent,
  defaultSize: { width: 520, height: 460 },
  defaultPosition: { x: 200, y: 140 },
};
