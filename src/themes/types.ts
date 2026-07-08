export interface ThemeConfig {
  id: string;
  name: string;
  colors: {
    bg: string;
    surface: string;
    border: string;
    borderFocused: string;
    text: string;
    textMuted: string;
    accent: string;
  };
  font: {
    sans: string;
    mono: string;
  };
  windowChrome: {
    radius: string;
    borderWidth: string;
    titlebarHeight: string;
  };
  wallpaper?: string;
}
