import { useState } from "react";

import { experience } from "@/content/experience";
import { CompanyLogo } from "@/components/shared/CompanyLogo";
import { cn } from "@/lib/utils";

export function ExperienceApp() {
  const [selectedId, setSelectedId] = useState(experience[0]?.id);
  const selected = experience.find((e) => e.id === selectedId) ?? experience[0];

  return (
    <div className="flex h-full flex-col -m-4">
      <div className="flex shrink-0 gap-0.5 overflow-x-auto border-b border-border px-2 pt-2">
        {experience.map((entry) => (
          <button
            key={entry.id}
            type="button"
            onClick={() => setSelectedId(entry.id)}
            className={cn(
              "shrink-0 rounded-t-md border border-b-0 border-border px-3 py-1.5 font-mono text-xs transition-colors",
              entry.id === selected?.id
                ? "bg-card text-coral"
                : "bg-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            {entry.company}
          </button>
        ))}
      </div>

      {selected && (
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto bg-card p-5">
          <div className="flex items-center gap-3">
            <CompanyLogo logo={selected.logo} company={selected.company} className="size-12 shrink-0 rounded-md object-cover" />
            <div>
              <h3 className="text-base font-semibold text-foreground">{selected.role}</h3>
              <p className="text-sm text-muted-foreground">{selected.company}</p>
            </div>
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            {selected.start} — {selected.end}
          </p>
        </div>
      )}
    </div>
  );
}
