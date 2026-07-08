import { ExternalLink } from "lucide-react";

import { projects } from "@/content/projects";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GithubIcon } from "@/assets/icons/GithubIcon";

export function ProjectsContent() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {projects.map((project) => (
        <Card key={project.id}>
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
              {project.stack.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
