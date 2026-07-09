import { useEffect } from "react";

import { appRegistry } from "@/apps/registry";
import { useWindowStore } from "@/store/windowStore";
import { useThemeStore } from "@/store/themeStore";
import { themeRegistry, defaultThemeId, applyTheme } from "@/themes";
import { DesktopIcon } from "./DesktopIcon";
import { WindowLayer } from "./WindowLayer";
import { Taskbar } from "./Taskbar";

export function Desktop() {
  const themeId = useThemeStore((s) => s.themeId);
  const openWindow = useWindowStore((s) => s.openWindow);

  useEffect(() => {
    applyTheme(themeRegistry[themeId] ?? themeRegistry[defaultThemeId]);
  }, [themeId]);

  return (
    <div
      className="flex h-svh w-full flex-col overflow-hidden bg-os-bg font-os-sans"
      style={{ backgroundImage: "var(--os-wallpaper)" }}
    >
      <Taskbar />
      <div className="relative min-h-0 flex-1">
        <div className="flex h-full flex-col flex-wrap content-start gap-2 p-4">
          {appRegistry.map((app) => (
            <DesktopIcon key={app.id} app={app} onOpen={() => openWindow(app.id)} />
          ))}
        </div>
        <WindowLayer />
      </div>
    </div>
  );
}
