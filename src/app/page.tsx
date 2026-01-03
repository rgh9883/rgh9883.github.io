"use client";

import Desktop from "@/components/shell/Desktop";
import Taskbar from "@/components/shell/Taskbar";
import WindowManager from "@/components/shell/WindowManager";

export default function Home() {
  return (
    <main className="relative h-screen w-screen bg-[#008080] overflow-hidden">
      <Desktop />
      <WindowManager />
      <Taskbar />
      {/* Taskbar and Windows will be called here */}
    </main>
  );
}