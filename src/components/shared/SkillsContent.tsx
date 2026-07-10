import { skills } from "@/content/skills";
import { skillIconPaths } from "@/lib/skillIcons";
import { cn } from "@/lib/utils";

function SkillChip({ name, slug, url }: { name: string; slug?: string; url: string }) {
  const iconPath = slug ? skillIconPaths[slug] : undefined;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-xs text-foreground",
        "transition-colors hover:border-coral/50 hover:bg-accent active:scale-95"
      )}
    >
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
    </a>
  );
}

export function SkillsContent() {
  return (
    <div className="flex flex-col gap-4">
      {skills.map((group) => (
        <div key={group.id}>
          <h3 className="text-[11px] font-semibold tracking-[0.5px] text-muted-foreground uppercase">
            {group.label}
          </h3>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {group.skills.map((skill) => (
              <SkillChip key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
