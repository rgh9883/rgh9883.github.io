import type { CSSProperties } from "react";
import { Rnd } from "react-rnd";
import { motion } from "framer-motion";

import { getAppDefinition } from "@/apps/registry";
import { useWindowStore, type WindowInstance } from "@/store/windowStore";
import { cn } from "@/lib/utils";
import { WindowTitlebar } from "./WindowTitlebar";

const MIN_WIDTH = 280;
const MIN_HEIGHT = 180;

interface WindowProps {
  instance: WindowInstance;
  isFocused: boolean;
}

export function Window({ instance, isFocused }: WindowProps) {
  const app = getAppDefinition(instance.appId);
  const focusWindow = useWindowStore((s) => s.focusWindow);
  const closeWindow = useWindowStore((s) => s.closeWindow);
  const minimizeWindow = useWindowStore((s) => s.minimizeWindow);
  const maximizeWindow = useWindowStore((s) => s.maximizeWindow);
  const moveWindow = useWindowStore((s) => s.moveWindow);
  const resizeWindow = useWindowStore((s) => s.resizeWindow);

  const Content = app.component;

  return (
    <Rnd
      className="pointer-events-auto"
      style={{ zIndex: instance.zIndex }}
      bounds="parent"
      minWidth={MIN_WIDTH}
      minHeight={MIN_HEIGHT}
      dragHandleClassName="window-drag-handle"
      disableDragging={instance.isMaximized}
      enableResizing={!instance.isMaximized}
      position={instance.isMaximized ? { x: 0, y: 0 } : instance.position}
      size={instance.isMaximized ? { width: "100%", height: "100%" } : instance.size}
      onDragStop={(_e, d) => moveWindow(instance.id, { x: d.x, y: d.y })}
      onResizeStop={(_e, _dir, ref, _delta, position) => {
        resizeWindow(instance.id, {
          width: ref.offsetWidth,
          height: ref.offsetHeight,
        });
        moveWindow(instance.id, position);
      }}
      onMouseDown={() => {
        if (!isFocused) focusWindow(instance.id);
      }}
    >
      <motion.div
        role="dialog"
        aria-label={instance.title}
        aria-modal="false"
        onKeyDown={(e) => {
          if (e.key === "Escape") closeWindow(instance.id);
        }}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.15 }}
        className={cn(
          "flex h-full w-full flex-col overflow-hidden border bg-os-bg shadow-2xl transition-colors",
          isFocused ? "border-os-border-focused" : "border-os-border"
        )}
        style={{ borderRadius: "var(--os-window-radius)", borderWidth: "var(--os-window-border-width)" }}
      >
        <WindowTitlebar
          title={instance.title}
          isMaximized={instance.isMaximized}
          onMinimize={() => minimizeWindow(instance.id)}
          onMaximize={() => maximizeWindow(instance.id)}
          onClose={() => closeWindow(instance.id)}
        />
        {/* Content pane re-scopes the baseline color tokens to the OS
            theme's own surface/text colors, so shared *Content components
            (which use bg-background/text-foreground etc.) render consistent
            with OS mode's dark chrome instead of Traditional mode's
            baseline. */}
        <div
          className="min-h-0 flex-1 overflow-auto bg-background p-4 font-sans text-foreground"
          style={
            {
              "--color-background": "var(--color-os-surface)",
              "--color-foreground": "var(--color-os-fg)",
              "--color-card": "var(--color-os-surface)",
              "--color-card-foreground": "var(--color-os-fg)",
              "--color-secondary": "var(--color-os-surface)",
              "--color-secondary-foreground": "var(--color-os-fg)",
              "--color-muted": "var(--color-os-surface)",
              "--color-muted-foreground": "var(--color-os-muted)",
              "--color-border": "var(--color-os-border)",
            } as CSSProperties
          }
        >
          <Content />
        </div>
      </motion.div>
    </Rnd>
  );
}
