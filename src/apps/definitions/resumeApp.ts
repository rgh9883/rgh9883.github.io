import { FileText } from "lucide-react";

import { ResumeContent } from "@/components/shared/ResumeContent";
import type { AppDefinition } from "../registry";

export const resumeApp: AppDefinition = {
  id: "resume",
  title: "Resume",
  icon: FileText,
  component: ResumeContent,
  defaultSize: { width: 380, height: 320 },
  defaultPosition: { x: 260, y: 170 },
};
