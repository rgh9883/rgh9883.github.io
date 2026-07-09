import { FileText } from "lucide-react";

import { ResumeContent } from "@/components/shared/ResumeContent";
import type { AppDefinition } from "../registry";

export const resumeApp: AppDefinition = {
  id: "resume",
  title: "Resume",
  icon: FileText,
  component: ResumeContent,
  defaultSize: { width: 360, height: 260 },
  defaultPosition: { x: 260, y: 170 },
};
