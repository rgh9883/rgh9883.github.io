import type { AppDefinition } from "@/apps/registry";

interface DesktopIconProps {
  app: AppDefinition;
  onOpen: () => void;
}

export function DesktopIcon({ app, onOpen }: DesktopIconProps) {
  const Icon = app.icon;

  return (
    <button
      type="button"
      onClick={onOpen}
      className="flex w-20 flex-col items-center gap-1.5 rounded p-2 text-center outline-none hover:bg-os-surface focus-visible:bg-os-surface focus-visible:ring-1 focus-visible:ring-os-accent"
    >
      <Icon className="size-7 text-os-accent" />
      <span className="line-clamp-2 font-os-mono text-[11px] leading-tight text-os-fg">
        {app.title}
      </span>
    </button>
  );
}
