"use client";
import { useWindows } from "@/context/WindowContext";
import WindowFrame from "./WindowFrame";

const APP_REGISTRY: Record<string, React.ReactNode> = {
  // Add more apps here as you create them
};

export default function WindowManager() {
  const { openWindows } = useWindows();

  return (
    <>
      {openWindows.map((win) => (
        <WindowFrame key={win.id} id={win.id}>
          {APP_REGISTRY[win.id] || <div>App not found</div>}
        </WindowFrame>
      ))}
    </>
  );
}