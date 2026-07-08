import { create } from "zustand";
import { persist } from "zustand/middleware";

import { defaultThemeId } from "@/themes";

interface ThemeStoreState {
  themeId: string;
  setTheme: (id: string) => void;
}

export const useThemeStore = create<ThemeStoreState>()(
  persist(
    (set) => ({
      themeId: defaultThemeId,
      setTheme: (themeId) => set({ themeId }),
    }),
    { name: "portfolio-theme" }
  )
);
