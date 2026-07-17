import { SquareTerminal } from "lucide-react";

import { TerminalApp } from "@/apps/components/TerminalApp";
import type { AppDefinition } from "../registry";

export const terminalApp: AppDefinition = {
  id: "terminal",
  title: "Terminal",
  icon: SquareTerminal,
  component: TerminalApp,
  defaultSize: { width: 837, height: 536 },
  defaultPosition: { x: 120, y: 60 },
};
