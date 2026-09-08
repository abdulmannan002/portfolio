import Image from "next/image";
import { site, skills } from "@/content/site";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero-glow border-b border-border/60">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          {/* Subtle AM mark above the name — branding without a giant banner. */}
          <Image
            src="/am-mark.png"
            alt=""
            width={600}
            height={360}
            priority
            className="mb-6 h-11 w-auto sm:h-12"
          />

          <p className="font-mono text-sm uppercase tracking-wider text-accent-soft">
            {site.role}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            {site.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted sm:text-xl">
            {site.tagline}
          </p>

          {/* Stat chips — one line per group */}
          <div className="mt-8 flex flex-col items-start gap-3">
            {site.stats.map((s) => (
              <span key={s.label} className="chip !text-foreground">
                {s.label}
              </span>
            ))}
          </div>

          {/* CTAs */}
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
