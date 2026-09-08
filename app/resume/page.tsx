import type { Metadata } from "next";
import { site } from "@/content/site";
import { resume } from "@/content/resume";
import { PrintButton } from "./PrintButton";

export const metadata: Metadata = {
  title: `Resume — ${site.name}`,
  description: `${site.name} — ${site.role}. ${site.tagline}`,
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-6">
      <h2 className="border-b border-neutral-300 pb-1 text-xs font-bold uppercase tracking-widest text-indigo-700">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export default function ResumePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8">
      {/* Actions — hidden when printing */}
      <div className="no-print mb-4 flex items-center justify-between">
        <a href="/" className="text-sm text-muted hover:text-foreground">
          ← Back to site
        </a>
        <PrintButton />
      </div>

      {/* The "paper" sheet — always light so it reads like a document and prints clean */}
      <article className="resume-sheet rounded-lg bg-white px-10 py-10 text-[13px] leading-relaxed text-neutral-800 shadow-xl">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
            {site.name}
          </h1>
          <p className="mt-1 text-sm font-semibold text-indigo-700">{site.role}</p>
          <p className="mt-2 text-xs text-neutral-600">{resume.location}</p>
          <p className="mt-1 text-xs text-neutral-600">
            <a href={`mailto:${site.email}`} className="text-indigo-700 hover:underline">
              {site.email}
            </a>
            {" · "}
            {resume.phone}
            {site.links.linkedin && (
              <>
                {" · "}
                <a
                  href={site.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-700 hover:underline"
                >
                  LinkedIn
                </a>
              </>
            )}
            {site.links.github && (
              <>
                {" · "}
                <a
                  href={site.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-700 hover:underline"
                >
                  GitHub
                </a>
              </>
            )}
            {" · "}
            <a
              href={`https://${resume.portfolioUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              Portfolio
            </a>
          </p>
        </header>

        {/* Summary */}
        <Section title="Summary">
          <p>{resume.summary}</p>
        </Section>

        {/* Technical Skills */}
        <Section title="Technical Skills">
          <dl className="space-y-1">
            {resume.skills.map((s) => (
              <div key={s.group} className="flex gap-2">
                <dt className="shrink-0 font-semibold text-neutral-900">{s.group}:</dt>
                <dd>{s.items}</dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* Work Experience */}
        <Section title="Work Experience">
          <div className="space-y-4">
            {resume.experience.map((job) => (
              <div key={`${job.role}-${job.company}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h3 className="font-bold text-neutral-900">
                    {job.role} — {job.company}
                  </h3>
                  <span className="text-xs italic text-neutral-600">{job.period}</span>
                </div>
                {job.location && (
                  <p className="text-xs italic text-neutral-600">{job.location}</p>
                )}
                <ul className="mt-1.5 list-disc space-y-1 pl-5">
                  {job.bullets.map((b, i) => (
                    <li key={i}>
                      {"lead" in b && b.lead && (
                        <span className="font-semibold text-neutral-900">{b.lead} </span>
                      )}
                      {b.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section title="Projects">
          <ul className="list-disc space-y-1 pl-5">
            {resume.projects.map((p) => (
              <li key={p.name}>
                <span className="font-semibold text-neutral-900">{p.name}</span> — {p.text}
              </li>
            ))}
          </ul>
        </Section>

        {/* Education */}
        <Section title="Education">
          {resume.education.map((e) => (
            <div key={e.degree} className="flex flex-wrap items-baseline justify-between gap-x-2">
              <p>
                <span className="font-bold text-neutral-900">{e.degree}</span> — {e.school}
              </p>
              <span className="text-xs italic text-neutral-600">{e.period}</span>
            </div>
          ))}
        </Section>
      </article>
    </div>
  );
}
