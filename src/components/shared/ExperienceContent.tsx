import { experience } from "@/content/experience";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

function CompanyLogo({ logo, company }: { logo?: string; company: string }) {
  if (logo) {
    return <img src={logo} alt="" className="size-10 shrink-0 rounded-md object-cover" />;
  }
  return (
    <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-coral/15 to-glow/10 font-mono text-sm font-bold text-coral/70">
      {company.charAt(0)}
    </div>
  );
}

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
