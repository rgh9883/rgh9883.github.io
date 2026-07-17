export function CompanyLogo({ logo, company, className }: { logo?: string; company: string; className?: string }) {
  if (logo) {
    return <img src={logo} alt="" className={className ?? "size-10 shrink-0 rounded-md object-cover"} />;
  }
  return (
    <div
      className={
        className ??
        "flex size-10 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-coral/15 to-glow/10 font-mono text-sm font-bold text-coral/70"
      }
    >
      {company.charAt(0)}
    </div>
  );
}
