import { FileText } from "lucide-react";

import { resumeUrl } from "@/content/contact";
import type { AppDefinition } from "../registry";

export const resumeApp: AppDefinition = {
  id: "resume",
  title: "Resume",
  icon: FileText,
  href: resumeUrl,
};
