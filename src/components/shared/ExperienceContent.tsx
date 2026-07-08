import { experience } from "@/content/experience";
import { Separator } from "@/components/ui/separator";

export function ExperienceContent() {
  return (
    <div className="flex flex-col gap-6">
      {experience.map((entry, i) => (
        <div key={entry.id} className="flex flex-col gap-2">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-medium">
              {entry.role} <span className="text-muted-foreground">· {entry.company}</span>
            </h3>
            <span className="font-mono text-xs text-muted-foreground">
              {entry.start} — {entry.end}
            </span>
          </div>
          <p className="text-sm text-foreground/90">{entry.summary}</p>
          <ul className="ml-4 list-disc text-sm text-muted-foreground">
            {entry.highlights.map((h, j) => (
              <li key={j}>{h}</li>
            ))}
          </ul>
          {i < experience.length - 1 && <Separator className="mt-2" />}
        </div>
      ))}
    </div>
  );
}
