import { User } from "lucide-react";

import { AboutContent } from "@/components/shared/AboutContent";
import type { AppDefinition } from "../registry";

export const aboutApp: AppDefinition = {
  id: "about",
  title: "About Me",
  icon: User,
  component: AboutContent,
  defaultSize: { width: 480, height: 400 },
  defaultPosition: { x: 80, y: 80 },
};
