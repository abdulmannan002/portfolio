import { site } from "@/content/site";

export function Footer() {
  const { github, linkedin, resume } = site.links;
  return (
    <footer id="contact" className="border-t border-border/60">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="text-2xl font-semibold tracking-tight">Get in touch</h2>
        <p className="mt-2 max-w-md text-muted">
          Open to backend & AI-engineering roles. The fastest way to reach me is email.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <a
            href={`mailto:${site.email}`}
            className="rounded-full bg-accent px-4 py-2 font-medium text-white hover:opacity-90"
          >
            {site.email}
          </a>
          {github && (
            <a href={github} className="chip px-4 py-2 hover:text-foreground">
              GitHub
            </a>
          )}
          {linkedin && (
            <a href={linkedin} className="chip px-4 py-2 hover:text-foreground">
              LinkedIn
            </a>
          )}
          {resume && (
            <a href={resume} className="chip px-4 py-2 hover:text-foreground">
              Resume (PDF)
            </a>
          )}
        </div>
        <p className="mt-10 text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. Built with Next.js & Tailwind.
        </p>
      </div>
    </footer>
  );
}
