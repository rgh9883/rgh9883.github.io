import { about } from "@/content/about";

export function AboutContent() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-sm font-medium text-mint">{about.role}</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">{about.name}</h1>
        <p className="mt-2 text-muted-foreground">{about.tagline}</p>
      </div>
      <div className="flex flex-col gap-3 text-sm leading-relaxed text-foreground/90">
        {about.bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">{about.location}</p>
    </div>
  );
}
