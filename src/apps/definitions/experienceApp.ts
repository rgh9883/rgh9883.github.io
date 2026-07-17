import { Briefcase } from "lucide-react";

import { ExperienceApp } from "@/apps/components/ExperienceApp";
import type { AppDefinition } from "../registry";

export const experienceApp: AppDefinition = {
  id: "experience",
  title: "Experience",
  icon: Briefcase,
  component: ExperienceApp,
  defaultSize: { width: 560, height: 420 },
  defaultPosition: { x: 200, y: 140 },
};
