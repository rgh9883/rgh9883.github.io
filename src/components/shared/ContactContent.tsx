import { Mail, ExternalLink } from "lucide-react";

import { contactLinks } from "@/content/contact";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/assets/icons/GithubIcon";
import { LinkedinIcon } from "@/assets/icons/LinkedinIcon";

const icons = {
  mail: Mail,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  external: ExternalLink,
};

export function ContactContent() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-muted-foreground">
        Reach out directly — no form, just links.
      </p>
      <div className="flex flex-col gap-2">
        {contactLinks.map((link) => {
          const Icon = icons[link.icon];
          return (
            <Button key={link.id} asChild variant="outline" className="justify-start">
              <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                <Icon className="size-4" />
                {link.label}
              </a>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
