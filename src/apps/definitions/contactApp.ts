import { Mail } from "lucide-react";

import { ContactContent } from "@/components/shared/ContactContent";
import type { AppDefinition } from "../registry";

export const contactApp: AppDefinition = {
  id: "contact",
  title: "Contact",
  icon: Mail,
  component: ContactContent,
  defaultSize: { width: 380, height: 380 },
  defaultPosition: { x: 320, y: 200 },
};
