import { Palette } from "lucide-react";

import { useThemeStore } from "@/store/themeStore";
import { themeRegistry } from "@/themes";

export function ThemeSwitcher() {
  const themeId = useThemeStore((s) => s.themeId);
  const setTheme = useThemeStore((s) => s.setTheme);
  const themes = Object.values(themeRegistry);

  return (
    <label className="flex items-center gap-1.5 text-os-muted">
      <Palette className="size-3.5" />
      <select
        id="os-theme-switcher"
        name="os-theme"
        value={themeId}
        onChange={(e) => setTheme(e.target.value)}
        className="cursor-pointer bg-transparent text-os-fg outline-none"
        aria-label="OS theme"
      >
        {themes.map((theme) => (
          <option key={theme.id} value={theme.id} className="bg-os-surface text-os-fg">
            {theme.name}
          </option>
        ))}
      </select>
    </label>
  );
}
