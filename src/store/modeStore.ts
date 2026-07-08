import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Mode = "traditional" | "os";

interface ModeStoreState {
  mode: Mode;
  setMode: (mode: Mode) => void;
  toggleMode: () => void;
}

export const useModeStore = create<ModeStoreState>()(
  persist(
    (set, get) => ({
      mode: "traditional",
      setMode: (mode) => set({ mode }),
      toggleMode: () => set({ mode: get().mode === "traditional" ? "os" : "traditional" }),
    }),
    { name: "portfolio-mode" }
  )
);
