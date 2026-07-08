import type { ThemeConfig } from "./types";
import { hyprlandTheme } from "./hyprland";

export const themeRegistry: Record<string, ThemeConfig> = {
  [hyprlandTheme.id]: hyprlandTheme,
};

export const defaultThemeId = hyprlandTheme.id;

/**
 * Writes a theme's values onto :root as CSS custom properties. Components never
 * branch on theme id directly — they read `bg-os-*` / `font-os-*` Tailwind
 * utilities, which resolve to whatever this last wrote.
 */
export function applyTheme(theme: ThemeConfig) {
  const root = document.documentElement.style;
  root.setProperty("--color-os-bg", theme.colors.bg);
  root.setProperty("--color-os-surface", theme.colors.surface);
  root.setProperty("--color-os-border", theme.colors.border);
  root.setProperty("--color-os-border-focused", theme.colors.borderFocused);
  root.setProperty("--color-os-fg", theme.colors.text);
  root.setProperty("--color-os-muted", theme.colors.textMuted);
  root.setProperty("--color-os-accent", theme.colors.accent);
  root.setProperty("--font-os-sans", theme.font.sans);
  root.setProperty("--font-os-mono", theme.font.mono);
  root.setProperty("--os-window-radius", theme.windowChrome.radius);
  root.setProperty("--os-window-border-width", theme.windowChrome.borderWidth);
  root.setProperty("--os-titlebar-height", theme.windowChrome.titlebarHeight);
  root.setProperty("--os-wallpaper", theme.wallpaper ?? theme.colors.bg);
}

export type { ThemeConfig };
