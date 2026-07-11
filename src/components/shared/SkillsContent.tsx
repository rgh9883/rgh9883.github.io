import { skills } from "@/content/skills";
import { SkillChip } from "@/components/shared/SkillChip";

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
