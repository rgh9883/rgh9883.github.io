import type { ReactNode } from "react";

import { about } from "@/content/about";
import { education } from "@/content/education";
import { contactLinks, resumeUrl } from "@/content/contact";
import { skills } from "@/content/skills";
import { headshotAscii } from "@/content/asciiArt";
import { useWindowStore } from "@/store/windowStore";

const WINDOW_APPS = new Set(["projects", "experience"]);

function TermLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="text-foreground underline decoration-border hover:text-coral">
      {children}
    </a>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2">
      <span className="w-20 shrink-0 text-muted-foreground">{label}</span>
      <span className="text-foreground/90">{value}</span>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="flex items-start gap-4">
      <pre className="shrink-0 text-[5px] leading-[5px] text-coral">{headshotAscii}</pre>
      <div className="flex flex-col gap-1">
        <div className="mb-1 text-sm font-semibold text-coral">{about.name}</div>
        <InfoRow label="role" value={about.role} />
        <InfoRow label="status" value={about.tagline} />
        <InfoRow label="education" value={`${education.school} — ${education.degree}`} />
        <InfoRow label="grad" value={education.gradYear} />
        <InfoRow label="location" value={about.location} />
      </div>
    </div>
  );
}

function SkillsOutput() {
  return (
    <div className="flex flex-col gap-2">
      {skills.map((group) => (
        <div key={group.id}>
          <div className="text-glow">{group.label.toUpperCase()}</div>
          <div className="text-foreground/90">
            {group.skills.map((skill, i) => (
              <span key={skill.name}>
                {skill.url ? <TermLink href={skill.url}>{skill.name}</TermLink> : skill.name}
                {i < group.skills.length - 1 ? ", " : ""}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ContactOutput() {
  const width = Math.max(...contactLinks.map((c) => c.id.length)) + 2;
  return (
    <div className="flex flex-col gap-0.5">
      {contactLinks.map((c) => (
        <div key={c.id} className="flex gap-3">
          <span className="text-glow" style={{ width: `${width}ch` }}>
            {c.id}
          </span>
          <TermLink href={c.href}>{c.label}</TermLink>
        </div>
      ))}
    </div>
  );
}

export interface CommandContext {
  openWindow: ReturnType<typeof useWindowStore.getState>["openWindow"];
  clear: () => void;
}

export const commandDescriptions: Record<string, string> = {
  help: "list available commands",
  about: "show info about me (alias: aboutme)",
  skills: "list my skills",
  contact: "show ways to reach me",
  "./<app>": "open an app window (projects, experience) or link (resume)",
  clear: "clear the terminal",
};

export const commands: Record<string, (args: string[], ctx: CommandContext) => ReactNode> = {
  help: () => (
    <div className="flex flex-col gap-0.5">
      {Object.entries(commandDescriptions).map(([name, desc]) => (
        <div key={name} className="flex gap-3">
          <span className="w-28 shrink-0 text-coral">{name}</span>
          <span className="text-muted-foreground">{desc}</span>
        </div>
      ))}
    </div>
  ),
  about: () => <AboutMe />,
  aboutme: () => <AboutMe />,
  skills: () => <SkillsOutput />,
  contact: () => <ContactOutput />,
  clear: (_args, ctx) => {
    ctx.clear();
    return null;
  },
};

export function runCommand(input: string, ctx: CommandContext): ReactNode {
  const [name, ...args] = input.trim().split(/\s+/);
  if (!name) return null;

  if (name.startsWith("./")) {
    const appId = name.slice(2);
    if (appId === "resume") {
      window.open(resumeUrl, "_blank", "noopener,noreferrer");
      return `opening resume...`;
    }
    if (WINDOW_APPS.has(appId)) {
      ctx.openWindow(appId);
      return `opening ${appId}...`;
    }
    return `app not found: ${appId}`;
  }

  const handler = commands[name];
  if (!handler) return `command not found: ${name}. Type 'help' for a list.`;
  return handler(args, ctx);
}
