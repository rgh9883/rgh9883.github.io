import { ModeToggle } from "@/components/common/ModeToggle";

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/85 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3 font-mono text-sm">
        <a href="#top" className="flex items-center gap-2 font-semibold text-foreground">
          <span className="size-1.5 rounded-full bg-glow" />
          rgh9883
        </a>
        <ul className="hidden gap-1 text-muted-foreground sm:flex">
          {links.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="flex items-center gap-1.5 rounded px-2.5 py-1 transition-colors hover:bg-accent hover:text-foreground"
              >
                <span className="text-xs text-coral">{i + 1}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ModeToggle />
      </nav>
    </header>
  );
}
