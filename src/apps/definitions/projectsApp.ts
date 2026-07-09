import { FolderKanban } from "lucide-react";

import { ProjectsContent } from "@/components/shared/ProjectsContent";
import type { AppDefinition } from "../registry";

export const projectsApp: AppDefinition = {
  id: "projects",
  title: "Projects",
  icon: FolderKanban,
  component: ProjectsContent,
  defaultSize: { width: 640, height: 480 },
  defaultPosition: { x: 140, y: 110 },
};
