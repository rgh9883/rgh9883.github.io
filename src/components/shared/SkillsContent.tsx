import { skills } from "@/content/skills";
import { Badge } from "@/components/ui/badge";

export function SkillsContent() {
  return (
    <div className="flex flex-col gap-4">
      {skills.map((group) => (
        <div key={group.id}>
          <h3 className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
            {group.label}
          </h3>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {group.skills.map((skill) => (
              <Badge key={skill} variant="outline">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
