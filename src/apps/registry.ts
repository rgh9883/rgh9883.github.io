import type { ComponentType } from "react";

import { projectsApp } from "./definitions/projectsApp";
import { experienceApp } from "./definitions/experienceApp";
import { resumeApp } from "./definitions/resumeApp";
import { terminalApp } from "./definitions/terminalApp";

export interface AppDefinition {
  id: string;
  title: string;
  icon: ComponentType<{ className?: string }>;
  /** External link apps (e.g. Resume) omit this — they open via `href` instead of a window. */
  component?: ComponentType<{ isMaximized?: boolean; initialCommand?: string }>;
  defaultSize?: { width: number; height: number };
  defaultPosition?: { x: number; y: number };
  /** When set, opening this app opens `href` in a new tab instead of a window. */
  href?: string;
}

export const appRegistry: AppDefinition[] = [
  projectsApp,
  experienceApp,
  resumeApp,
  terminalApp,
];

export const getAppDefinition = (id: string): AppDefinition => {
  const app = appRegistry.find((a) => a.id === id);
  if (!app) throw new Error(`Unknown app id: ${id}`);
  return app;
};
