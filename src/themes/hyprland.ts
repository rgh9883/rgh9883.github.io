import type { ThemeConfig } from "./types";

// Navy-charcoal surfaces, coral prompt accent, dot-grid wallpaper — the
// "ricing" palette shared with Traditional mode's baseline tokens.
export const hyprlandTheme: ThemeConfig = {
  id: "hyprland",
  name: "Hyprland",
  colors: {
    bg: "#11131a",
    surface: "#1a1d27",
    border: "#262a38",
    borderFocused: "#ff9166",
    text: "#eceef2",
    textMuted: "#8b90a3",
    accent: "#ff9166",
  },
  font: {
    sans: '"Inter", ui-sans-serif, system-ui, sans-serif',
    mono: '"Geist Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace',
  },
  windowChrome: {
    radius: "8px",
    borderWidth: "1px",
    titlebarHeight: "2rem",
  },
  wallpaper:
    "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0) 0 0/26px 26px, linear-gradient(135deg, #1c2230 0%, #11131a 55%, #191b26 100%)",
};
