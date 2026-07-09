import { about } from "@/content/about";
import { Button } from "@/components/ui/button";

// hero-band-dark: dark teal-to-mint atmospheric gradient, hero-display headline,
// button-on-dark (white pill, adaptive --color-primary) + ghost link per DESIGN.md.
// Reads from the same `about` content object as AboutContent — no copy forked.
export function Hero() {
  return (
    <section
      className="px-6 py-16 text-center sm:py-24 lg:py-30"
      style={{ backgroundImage: "linear-gradient(135deg, #1a3d4a 0%, #2d5a4f 100%)" }}
    >
      <p className="text-sm font-semibold text-foreground/80">{about.role}</p>
      <h1 className="mx-auto mt-3 max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.05] font-semibold tracking-[-0.03em] text-foreground">
        {about.name}
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-lg text-foreground/80">{about.tagline}</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button variant="default" asChild>
          <a href="#projects">View projects</a>
        </Button>
        <Button variant="link" asChild>
          <a href="#contact">Get in touch</a>
        </Button>
      </div>
    </section>
  );
}
