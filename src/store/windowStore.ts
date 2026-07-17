import { create } from "zustand";

import { getAppDefinition } from "@/apps/registry";

export interface WindowInstance {
  id: string;
  appId: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
  /** Command to auto-run once (e.g. `terminal` opened from the boot sequence with "aboutme"). */
  initialCommand?: string;
}

interface WindowStoreState {
  windows: Record<string, WindowInstance>;
  nextZIndex: number;

  openWindow: (appId: string, options?: { initialCommand?: string }) => void;
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  moveWindow: (id: string, position: { x: number; y: number }) => void;
  resizeWindow: (id: string, size: { width: number; height: number }) => void;
}

export const useWindowStore = create<WindowStoreState>((set, get) => ({
  windows: {},
  nextZIndex: 1,

  openWindow: (appId, options) => {
    const existing = Object.values(get().windows).find((w) => w.appId === appId);
    if (existing) {
      get().focusWindow(existing.id);
      return;
    }

    const app = getAppDefinition(appId);
    const id = crypto.randomUUID();
    set((s) => ({
      windows: {
        ...s.windows,
        [id]: {
          id,
          appId,
          title: app.title,
          isOpen: true,
          isMinimized: false,
          isMaximized: false,
          position: app.defaultPosition ?? { x: 80, y: 80 },
          size: app.defaultSize ?? { width: 400, height: 300 },
          zIndex: s.nextZIndex,
          initialCommand: options?.initialCommand,
        },
      },
      nextZIndex: s.nextZIndex + 1,
    }));
  },

  closeWindow: (id) =>
    set((s) => {
      const { [id]: _removed, ...rest } = s.windows;
      return { windows: rest };
    }),

  focusWindow: (id) =>
    set((s) => {
      if (!s.windows[id]) return s;
      return {
        windows: {
          ...s.windows,
          [id]: { ...s.windows[id], zIndex: s.nextZIndex, isMinimized: false },
        },
        nextZIndex: s.nextZIndex + 1,
      };
    }),

  minimizeWindow: (id) =>
    set((s) => ({
      windows: { ...s.windows, [id]: { ...s.windows[id], isMinimized: true } },
    })),

  maximizeWindow: (id) =>
    set((s) => ({
      windows: {
        ...s.windows,
        [id]: { ...s.windows[id], isMaximized: !s.windows[id].isMaximized },
      },
    })),

  moveWindow: (id, position) =>
    set((s) => ({
      windows: { ...s.windows, [id]: { ...s.windows[id], position } },
    })),

  resizeWindow: (id, size) =>
    set((s) => ({
      windows: { ...s.windows, [id]: { ...s.windows[id], size } },
    })),
}));
