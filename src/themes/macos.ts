import type { ThemeConfig } from "./types";

// Current macOS: light translucent-esque chrome, SF system font stack,
// blue focus accent, ~10px window radius. Wallpaper reuses DESIGN.md's
// hero-sky gradient for brand continuity.
export const macosTheme: ThemeConfig = {
  id: "macos",
  name: "macOS",
  colors: {
    bg: "#e8e8ec",
    surface: "#ffffff",
    border: "#d1d1d6",
    borderFocused: "#007aff",
    text: "#1d1d1f",
    textMuted: "#86868b",
    accent: "#007aff",
  },
  font: {
    sans: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", sans-serif',
    mono: '"SF Mono", "Menlo", "Geist Mono", monospace',
  },
  windowChrome: {
    radius: "10px",
    borderWidth: "1px",
    titlebarHeight: "1.75rem",
  },
  wallpaper: "linear-gradient(180deg, #87a8c8 0%, #f5e9d8 100%)",
};
