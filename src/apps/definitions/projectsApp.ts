import { FolderKanban } from "lucide-react";

import { ProjectsApp } from "@/apps/components/ProjectsApp";
import type { AppDefinition } from "../registry";

export const projectsApp: AppDefinition = {
  id: "projects",
  title: "Projects",
  icon: FolderKanban,
  component: ProjectsApp,
  // width: sidebar (160) + gap (12) + detail column capped at the
  // Traditional-mode card width (352) + window padding (32) = 556.
  defaultSize: { width: 560, height: 500 },
  defaultPosition: { x: 140, y: 110 },
};
