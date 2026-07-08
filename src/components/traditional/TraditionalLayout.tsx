import { Nav } from "./Nav";
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
      <main>
        <Section id="about" heading="About">
          <AboutContent />
        </Section>
        <Section id="experience" heading="Experience">
          <ExperienceContent />
        </Section>
        <Section id="projects" heading="Projects">
          <ProjectsContent />
        </Section>
        <Section id="skills" heading="Skills">
          <SkillsContent />
        </Section>
        <Section id="contact" heading="Contact">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <ContactContent />
            <ResumeContent />
          </div>
        </Section>
      </main>
      <footer className="py-8 text-center font-mono text-xs text-muted-foreground">
        Built with React, Tailwind, and a little too much Hyprland inspiration.
      </footer>
    </div>
  );
}
