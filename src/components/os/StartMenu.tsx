import { useEffect, useRef, useState } from "react";
import { LayoutGrid } from "lucide-react";

import { appRegistry } from "@/apps/registry";
import { useWindowStore } from "@/store/windowStore";
import { cn } from "@/lib/utils";

// Launcher for apps not pinned to the desktop. Every app is pinned in v1, so
// this duplicates the desktop icons for now — it's here so the pattern
// exists once non-pinned apps show up later.
export function StartMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const openWindow = useWindowStore((s) => s.openWindow);

  useEffect(() => {
    if (!open) return;
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open apps menu"
        aria-expanded={open}
        className={cn(
          "flex items-center gap-1.5 rounded px-2 py-1 text-os-fg transition-colors hover:bg-os-bg",
          open && "bg-os-bg text-os-accent"
        )}
      >
        <LayoutGrid className="size-3.5" />
        Apps
      </button>
      {open && (
        <div
          role="menu"
          className="absolute top-full left-0 z-50 mt-1 w-48 rounded border border-os-border bg-os-surface p-1 shadow-xl"
        >
          {appRegistry.map((app) => {
            const Icon = app.icon;
            return (
              <button
                key={app.id}
                type="button"
                onClick={() => {
                  openWindow(app.id);
                  setOpen(false);
                }}
                className="flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-os-fg transition-colors hover:bg-os-bg"
              >
                <Icon className="size-3.5 text-os-accent" />
                {app.title}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
