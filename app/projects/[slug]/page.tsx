import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProject } from "@/content/projects";

// Pre-render every case study at build time.
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: `${project.title} — Case Study`, description: project.outcome };
}

export default async function CaseStudy({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { github, demo, loom } = project.links;

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/#projects" className="text-sm text-muted hover:text-foreground">
        ← Back to projects
      </Link>

      <header className="mt-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-3 text-lg text-accent-soft">{project.outcome}</p>

        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          {demo && <CtaLink href={demo} label="Live demo" primary />}
          {github && <CtaLink href={github} label="GitHub" />}
          {loom && <CtaLink href={loom} label="Walkthrough" />}
        </div>
      </header>

      {/* Problem */}
      <Block title="The problem">
        <p>{project.problem}</p>
      </Block>

      {/* Architecture */}
      <Block title="Architecture">
        {project.architectureImage ? (
          <Image
            src={project.architectureImage}
            alt={`${project.title} architecture`}
            width={1200}
            height={700}
            className="rounded-lg border border-border"
          />
        ) : (
          <pre className="overflow-x-auto rounded-lg border border-border bg-surface p-4 text-sm text-muted">
            {project.architectureText}
          </pre>
        )}
      </Block>

      {/* Key decisions */}
      <Block title="Key technical decisions">
        <ul className="space-y-4">
          {project.decisions.map((d, i) => (
            <li key={i} className="card p-4">
              <p className="font-medium text-foreground">{d.choice}</p>
              <p className="mt-1 text-sm text-muted">{d.why}</p>
            </li>
          ))}
        </ul>
      </Block>

      {/* Hard problem — the money paragraph */}
      <Block title="Hardest problem I solved">
        <p className="leading-relaxed">{project.hardProblem}</p>
      </Block>

      {/* Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <Block title="Results">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {project.metrics.map((m) => (
              <div key={m.label} className="card p-4 text-center">
                <div className="text-2xl font-bold text-accent-soft">{m.value}</div>
                <div className="mt-1 text-xs text-muted">{m.label}</div>
              </div>
            ))}
          </div>
        </Block>
      )}

      {/* Stack */}
      <Block title="Tech stack">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
      </Block>
    </article>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
        {title}
      </h2>
      <div className="mt-3 text-foreground/90">{children}</div>
    </section>
  );
}

function CtaLink({
  href,
  label,
  primary,
}: {
  href: string;
  label: string;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      className={
        primary
          ? "rounded-full bg-accent px-4 py-2 font-medium text-white hover:opacity-90"
          : "rounded-full border border-border bg-surface px-4 py-2 hover:border-accent"
      }
    >
      {label}
    </a>
  );
}
