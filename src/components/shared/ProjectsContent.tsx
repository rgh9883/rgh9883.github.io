import { ExternalLink } from "lucide-react";

import { projects } from "@/content/projects";
import { skillsByName } from "@/content/skillsLookup";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SkillChip } from "@/components/shared/SkillChip";
import { GithubIcon } from "@/assets/icons/GithubIcon";

function ProjectThumb({ image, name }: { image?: string; name: string }) {
  if (image) {
    return <img src={image} alt="" className="aspect-video w-full object-cover" />;
  }
  // No screenshot yet — a placeholder tile in the site's own palette, not a broken image.
  return (
    <div className="flex aspect-video w-full items-center justify-center bg-gradient-to-br from-coral/15 to-glow/10 font-mono text-2xl font-bold text-coral/70">
      {name.charAt(0)}
    </div>
  );
}

export function ProjectsContent() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {projects.map((project) => (
        <Card key={project.id} className="overflow-hidden pt-0">
          <ProjectThumb image={project.image} name={project.name} />
          <CardHeader>
            <CardTitle className="flex items-center justify-between gap-2 text-base">
              {project.name}
              <span className="flex items-center gap-2 text-muted-foreground">
                {project.links.repo && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.name} repository`}
                    className="hover:text-primary"
                  >
                    <GithubIcon className="size-4" />
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.name} live site`}
                    className="hover:text-primary"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </span>
            </CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => {
                const skill = skillsByName[tech];
                return <SkillChip key={tech} name={tech} slug={skill?.slug} url={skill?.url} />;
              })}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
