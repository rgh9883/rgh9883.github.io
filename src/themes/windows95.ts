import type { ThemeConfig } from "./types";

// Classic Windows 95: teal desktop, gray dialog chrome, navy active-titlebar
// blue, square corners. Uses system font fallbacks only — no new font deps.
export const windows95Theme: ThemeConfig = {
  id: "windows95",
  name: "Windows 95",
  colors: {
    bg: "#008080",
    surface: "#c0c0c0",
    border: "#000000",
    borderFocused: "#000080",
    text: "#000000",
    textMuted: "#4d4d4d",
    accent: "#000080",
  },
  font: {
    sans: '"Tahoma", "MS Sans Serif", ui-sans-serif, sans-serif',
    mono: '"Courier New", ui-monospace, monospace',
  },
  windowChrome: {
    radius: "0px",
    borderWidth: "2px",
    titlebarHeight: "1.75rem",
  },
  wallpaper: "#008080",
};
