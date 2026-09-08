import Image from "next/image";
import { site, skills } from "@/content/site";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero-glow border-b border-border/60">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
          {/* Desktop/tablet: branded banner. Its text mirrors the mobile hero
              below, so the <h1> stays in the DOM for SEO/accessibility. */}
          <Image
            src="/hero-banner.png"
            alt={`${site.name} — ${site.role}. ${site.tagline}`}
            width={2172}
            height={724}
            priority
            sizes="(min-width: 640px) 64rem, 0px"
            className="hidden w-full rounded-2xl border border-border/60 sm:block"
          />

          {/* Mobile: readable text hero (banner text is too small on phones). */}
          <div className="sm:hidden">
            <p className="font-mono text-sm text-accent-soft">{site.role}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight">
              {site.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted">{site.tagline}</p>

            {/* Stat chips */}
            <div className="mt-8 flex flex-wrap gap-3">
              {site.stats.map((s) => (
                <span key={s.label} className="chip !text-foreground">
                  {s.label}
                </span>
              ))}
            </div>
          </div>

          {/* CTAs (both layouts) */}
          <div className="mt-8 flex flex-wrap gap-3">
            {site.links.resume && (
              <a
                href={site.links.resume}
                className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
              >
                Resume
              </a>
            )}
            {site.links.github && (
              <a
                href={site.links.github}
                className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium hover:border-accent"
              >
                GitHub
              </a>
            )}
            {site.links.linkedin && (
              <a
                href={site.links.linkedin}
                className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium hover:border-accent"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ---------- Projects ---------- */}
      <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
        <p className="mt-2 text-muted">
          Production systems, not tutorials. Each links to a full case study.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* ---------- Skills ---------- */}
      <section id="skills" className="border-t border-border/60">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {skills.map((col) => (
              <div key={col.group} className="card p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-accent-soft">
                  {col.group}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {col.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- About ---------- */}
      <section id="about" className="border-t border-border/60">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {site.about}
          </p>
        </div>
      </section>
    </>
  );
}
