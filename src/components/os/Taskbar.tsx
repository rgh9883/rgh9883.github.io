import { useWindowStore } from "@/store/windowStore";
import { getAppDefinition } from "@/apps/registry";
import { ModeToggle } from "@/components/common/ModeToggle";
import { cn } from "@/lib/utils";
import { StartMenu } from "./StartMenu";
import { TaskbarClock } from "./TaskbarClock";

export function Taskbar() {
  const windows = useWindowStore((s) => s.windows);
  const focusWindow = useWindowStore((s) => s.focusWindow);

  const openWindows = Object.values(windows).filter((w) => w.isOpen);
  const topZIndex = openWindows.reduce(
    (max, w) => (w.isMinimized ? max : Math.max(max, w.zIndex)),
    -Infinity
  );

  return (
    <div className="z-50 flex h-10 shrink-0 items-center gap-3 border-b border-os-border bg-os-surface px-3 font-os-mono text-xs text-os-fg">
      <StartMenu />
      <div className="h-4 w-px bg-os-border" />
      <div className="flex flex-1 items-center gap-1 overflow-x-auto">
        {openWindows.map((w) => {
          const app = getAppDefinition(w.appId);
          const Icon = app.icon;
          const isFocused = !w.isMinimized && w.zIndex === topZIndex;
          return (
            <button
              key={w.id}
              type="button"
              onClick={() => focusWindow(w.id)}
              className={cn(
                "flex items-center gap-1.5 rounded px-2 py-1 transition-colors",
                isFocused
                  ? "bg-os-accent/20 text-os-accent"
                  : "text-os-muted hover:bg-os-bg hover:text-os-fg",
                w.isMinimized && "opacity-50"
              )}
            >
              <Icon className="size-3.5" />
              {w.title}
            </button>
          );
        })}
      </div>
      <TaskbarClock />
      <ModeToggle />
    </div>
  );
}
