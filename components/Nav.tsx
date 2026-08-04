import Link from "next/link";
import { site } from "@/content/site";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight hover:text-accent-soft">
          {site.name}
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted">
          <Link href="/#projects" className="hover:text-foreground">
            Projects
          </Link>
          <Link href="/#skills" className="hover:text-foreground">
            Skills
          </Link>
          <Link href="/#about" className="hover:text-foreground">
            About
          </Link>
          {site.links.resume && (
            <a
              href={site.links.resume}
              className="rounded-full border border-border bg-surface px-3 py-1.5 text-foreground hover:border-accent"
            >
              Resume
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
