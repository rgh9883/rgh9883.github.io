import type { ThemeConfig } from "./types";

export const hyprlandTheme: ThemeConfig = {
  id: "hyprland",
  name: "Hyprland",
  colors: {
    bg: "#0a0a0a",
    surface: "#141414",
    border: "#27272a",
    borderFocused: "#5eead4",
    text: "#fafafa",
    textMuted: "#8a8a8a",
    accent: "#5eead4",
  },
  font: {
    sans: '"Inter", ui-sans-serif, system-ui, sans-serif',
    mono: '"JetBrains Mono", ui-monospace, "SF Mono", monospace',
  },
  windowChrome: {
    radius: "0px",
    borderWidth: "1px",
    titlebarHeight: "2rem",
  },
  wallpaper: "radial-gradient(circle at 20% 20%, #141414 0%, #0a0a0a 60%)",
};
