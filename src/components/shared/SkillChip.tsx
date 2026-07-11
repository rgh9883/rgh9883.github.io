import { skillIconPaths } from "@/lib/skillIcons";
import { cn } from "@/lib/utils";

export function SkillChip({ name, slug, url }: { name: string; slug?: string; url?: string }) {
  const iconPath = slug ? skillIconPaths[slug] : undefined;
  const className = cn(
    "group flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-xs text-foreground",
    "transition-colors hover:border-coral/50 hover:bg-accent active:scale-95"
  );
  const content = (
    <>
      {iconPath && (
        <svg
          viewBox="0 0 24 24"
          className="size-3.5 shrink-0 fill-muted-foreground transition-colors group-hover:fill-coral"
          aria-hidden="true"
        >
          <path d={iconPath} />
        </svg>
      )}
      {name}
    </>
  );

  if (!url) {
    return <span className={className}>{content}</span>;
  }

  return (
    <a href={url} target="_blank" rel="noreferrer" className={className}>
      {content}
    </a>
  );
}
