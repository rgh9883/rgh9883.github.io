import { experience } from "@/content/experience";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function ExperienceContent() {
  return (
    <div className="flex flex-col gap-4">
      {experience.map((entry) => (
        <Card key={entry.id}>
          <CardHeader>
            <CardTitle className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-base font-medium">
              <span>
                {entry.role} <span className="text-muted-foreground">· {entry.company}</span>
              </span>
              <span className="text-xs font-normal text-muted-foreground">
                {entry.start} — {entry.end}
              </span>
            </CardTitle>
            <CardDescription>{entry.summary}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="ml-4 list-disc text-sm text-muted-foreground">
              {entry.highlights.map((h, j) => (
                <li key={j}>{h}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
