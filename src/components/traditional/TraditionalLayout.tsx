import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { Section } from "./Section";
import { AboutContent } from "@/components/shared/AboutContent";
import { ExperienceContent } from "@/components/shared/ExperienceContent";
import { ProjectsContent } from "@/components/shared/ProjectsContent";
import { SkillsContent } from "@/components/shared/SkillsContent";
import { ContactContent } from "@/components/shared/ContactContent";
import { ResumeContent } from "@/components/shared/ResumeContent";

export function TraditionalLayout() {
  return (
    <div className="min-h-svh">
      <Nav />
      <Hero />
      <main>
        <Section id="about" index={1} heading="About">
          <AboutContent />
        </Section>
        <Section id="experience" index={2} heading="Experience" title="Where I've worked">
          <ExperienceContent />
        </Section>
        <Section id="projects" index={3} heading="Projects" title="Things I've built">
          <ProjectsContent />
        </Section>
        <Section id="skills" index={4} heading="Skills" title="What I work with">
          <SkillsContent />
        </Section>
        <Section id="contact" index={5} heading="Contact" title="Get in touch">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <ContactContent />
            <ResumeContent />
          </div>
        </Section>
      </main>
      <footer className="py-8 text-center text-xs text-muted-foreground">
        Built with React, Tailwind, and a little too much Hyprland inspiration.
      </footer>
    </div>
  );
}
