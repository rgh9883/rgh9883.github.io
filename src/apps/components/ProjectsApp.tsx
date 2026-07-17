import { useState } from "react";
import { ExternalLink, Folder } from "lucide-react";

import { projects } from "@/content/projects";
import { skillsByName } from "@/content/skillsLookup";
import { SkillChip } from "@/components/shared/SkillChip";
import { GithubIcon } from "@/assets/icons/GithubIcon";
import { ProjectsContent } from "@/components/shared/ProjectsContent";
import { cn } from "@/lib/utils";

function ProjectThumb({ image, name }: { image?: string; name: string }) {
  if (image) {
    return <img src={image} alt="" className="h-48 w-full shrink-0 rounded-md object-cover" />;
  }
  return (
    <div className="flex h-48 w-full shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-coral/15 to-glow/10 font-mono text-2xl font-bold text-coral/70">
      {name.charAt(0)}
    </div>
  );
}

export function ProjectsApp({ isMaximized }: { isMaximized?: boolean }) {
  const [selectedId, setSelectedId] = useState(projects[0]?.id);
  const selected = projects.find((p) => p.id === selectedId) ?? projects[0];

  // The folder + single-image detail view stretches badly at full window
  // width, so maximizing falls back to the same responsive grid Traditional
  // mode uses, capped to the same max-w-3xl content width Section.tsx uses
  // so cards render at the same size instead of stretching across the
  // full (much wider) OS window.
  if (isMaximized) {
    return (
      <div className="mx-auto max-w-3xl">
        <ProjectsContent />
      </div>
    );
  }

  return (
    <div className="flex h-full gap-3 -m-4 p-4">
      <div className="flex w-40 shrink-0 flex-col gap-0.5 overflow-y-auto border-r border-border pr-2">
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => setSelectedId(project.id)}
            className={cn(
              "flex items-center gap-2 rounded px-2 py-1.5 text-left text-sm transition-colors",
              project.id === selected?.id
                ? "bg-accent text-coral"
                : "text-muted-foreground hover:bg-accent hover:text-foreground"
            )}
          >
            <Folder size={14} className="shrink-0" />
            <span className="truncate">{project.name}</span>
          </button>
        ))}
      </div>

      {selected && (
        // max-w-[352px]: matches a Traditional-mode grid card's computed width
        // (max-w-3xl content 720px, minus a 16px gap, split across 2 columns).
        <div className="flex max-w-[352px] flex-1 flex-col gap-3 overflow-y-auto">
          <ProjectThumb image={selected.image} name={selected.name} />
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-base font-semibold text-foreground">{selected.name}</h3>
            <span className="flex items-center gap-2 text-muted-foreground">
              {selected.links.repo && (
                <a
                  href={selected.links.repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${selected.name} repository`}
                  className="hover:text-coral"
                >
                  <GithubIcon className="size-4" />
                </a>
              )}
              {selected.links.live && (
                <a
                  href={selected.links.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${selected.name} live site`}
                  className="hover:text-coral"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{selected.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {selected.stack.map((tech) => {
              const skill = skillsByName[tech];
              return <SkillChip key={tech} name={tech} slug={skill?.slug} url={skill?.url} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
