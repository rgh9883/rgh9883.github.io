"use client";
import React, { createContext, useContext, useState } from 'react';

type WindowState = { id: string; isOpen: boolean; zIndex: number; icon: string };

interface WindowContextType {
  openWindows: WindowState[];
  activeWindow: string | null;
  theme: string;
  setTheme: (name: string) => void;
  openApp: (id: string, icon: string) => void;
  closeApp: (id: string) => void;
  focusApp: (id: string) => void;
}

const WindowContext = createContext<WindowContextType | undefined>(undefined);

export function WindowProvider({ children }: { children: React.ReactNode }) {
  const [openWindows, setOpenWindows] = useState<WindowState[]>([]);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [theme, setTheme] = useState("default");

  const openApp = (id: string, icon: string) => {
    if (!openWindows.find(w => w.id === id)) {
      setOpenWindows([...openWindows, { id, isOpen: true, zIndex: 10, icon: icon }]);
    }
    focusApp(id);
  };

  const focusApp = (id: string) => {
    setActiveWindow(id);
    setOpenWindows(prev => {
      const maxZ = Math.max(...prev.map(w => w.zIndex), 10);
      return prev.map(w => w.id === id ? { ...w, zIndex: maxZ + 1 } : w);
    });
  };

  const closeApp = (id: string) => {
    setOpenWindows(openWindows.filter(w => w.id !== id));
    if (activeWindow === id) setActiveWindow(null);
  };

  return (
    <WindowContext.Provider value={{ openWindows, activeWindow, theme, setTheme, openApp, closeApp, focusApp }}>
      <div data-theme={theme} className="h-full w-full min-h-screen">
        {children}
      </div>
    </WindowContext.Provider>
  );
}

export const useWindows = () => {
  const context = useContext(WindowContext);
  if (!context) throw new Error("useWindows must be used within WindowProvider");
  return context;
};