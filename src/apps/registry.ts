import type { ComponentType } from "react";

import { aboutApp } from "./definitions/aboutApp";
import { projectsApp } from "./definitions/projectsApp";
import { experienceApp } from "./definitions/experienceApp";
import { resumeApp } from "./definitions/resumeApp";
import { contactApp } from "./definitions/contactApp";

export interface AppDefinition {
  id: string;
  title: string;
  icon: ComponentType<{ className?: string }>;
  component: ComponentType;
  defaultSize: { width: number; height: number };
  defaultPosition?: { x: number; y: number };
}

export const appRegistry: AppDefinition[] = [
  aboutApp,
  projectsApp,
  experienceApp,
  resumeApp,
  contactApp,
];

export const getAppDefinition = (id: string): AppDefinition => {
  const app = appRegistry.find((a) => a.id === id);
  if (!app) throw new Error(`Unknown app id: ${id}`);
  return app;
};
