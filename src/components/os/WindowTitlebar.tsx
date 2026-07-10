import { Minus, Square, X } from "lucide-react";

interface WindowTitlebarProps {
  title: string;
  isMaximized: boolean;
  onMinimize: () => void;
  onMaximize: () => void;
  onClose: () => void;
}

export function WindowTitlebar({
  title,
  isMaximized,
  onMinimize,
  onMaximize,
  onClose,
}: WindowTitlebarProps) {
  return (
    <div
      className="window-drag-handle flex h-(--os-titlebar-height) shrink-0 cursor-move items-center justify-between border-b border-os-border bg-os-surface px-3 select-none"
      onDoubleClick={onMaximize}
    >
      <span className="truncate font-os-mono text-xs text-os-fg">{title}</span>
      <div className="flex items-center gap-1">
        <button
          type="button"
          aria-label="Minimize window"
          onClick={onMinimize}
          className="flex size-5 items-center justify-center text-os-muted transition-colors hover:text-os-fg"
        >
          <Minus size={12} />
        </button>
        <button
          type="button"
          aria-label={isMaximized ? "Restore window" : "Maximize window"}
          onClick={onMaximize}
          className="flex size-5 items-center justify-center text-os-muted transition-colors hover:text-os-fg"
        >
          <Square size={10} />
        </button>
        <button
          type="button"
          aria-label="Close window"
          onClick={onClose}
          className="flex size-5 items-center justify-center text-os-muted transition-colors hover:text-red-400"
        >
          <X size={12} />
        </button>
      </div>
    </div>
  );
}
