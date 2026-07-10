import { Wrench } from "lucide-react";

import { SkillsContent } from "@/components/shared/SkillsContent";
import type { AppDefinition } from "../registry";

export const skillsApp: AppDefinition = {
  id: "skills",
  title: "Skills",
  icon: Wrench,
  component: SkillsContent,
  defaultSize: { width: 440, height: 380 },
  defaultPosition: { x: 240, y: 160 },
};
