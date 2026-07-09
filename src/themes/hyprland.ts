import type { ThemeConfig } from "./types";

// Dark variant of the DESIGN.md system: canvas-dark/surface-code surfaces,
// brand-green as the focus accent, the same Inter/Geist Mono pairing.
export const hyprlandTheme: ThemeConfig = {
  id: "hyprland",
  name: "Hyprland",
  colors: {
    bg: "#0a0a0a",
    surface: "#1c1c1e",
    border: "#1f1f1f",
    borderFocused: "#00d4a4",
    text: "#ffffff",
    textMuted: "#b3b3b3",
    accent: "#00d4a4",
  },
  font: {
    sans: '"Inter", ui-sans-serif, system-ui, sans-serif',
    mono: '"Geist Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace',
  },
  windowChrome: {
    radius: "0px",
    borderWidth: "2px",
    titlebarHeight: "2rem",
  },
  wallpaper: "linear-gradient(135deg, #1a3d4a 0%, #2d5a4f 100%)",
};
