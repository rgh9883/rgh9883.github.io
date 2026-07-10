import { about } from "@/content/about";
import { Card, CardContent } from "@/components/ui/card";

export function AboutContent() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-sm font-medium text-coral">{about.role}</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">{about.name}</h1>
        <p className="mt-2 text-muted-foreground">{about.tagline}</p>
      </div>
      <Card>
        <CardContent className="flex flex-col gap-3 text-sm leading-relaxed text-foreground/90">
          {about.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </CardContent>
      </Card>
      <p className="text-xs text-muted-foreground">{about.location}</p>
    </div>
  );
}
