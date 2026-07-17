import { experience } from "@/content/experience";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CompanyLogo } from "@/components/shared/CompanyLogo";

export function ExperienceContent() {
  return (
    <div className="flex flex-col gap-4">
      {experience.map((entry) => (
        <Card key={entry.id}>
          <CardHeader className="flex-row items-center gap-3">
            <CompanyLogo logo={entry.logo} company={entry.company} />
            <CardTitle className="flex flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-base font-medium">
              <span>
                {entry.role} <span className="text-muted-foreground">· {entry.company}</span>
              </span>
              <span className="text-xs font-normal text-muted-foreground">
                {entry.start} — {entry.end}
              </span>
            </CardTitle>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
