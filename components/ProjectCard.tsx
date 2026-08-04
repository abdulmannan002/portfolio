import Link from "next/link";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  const { slug, title, outcome, tags, featured } = project;
  return (
    <Link
      href={`/projects/${slug}`}
      className={`card group flex flex-col p-6 ${
        featured ? "sm:col-span-2" : ""
      }`}
    >
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-semibold tracking-tight group-hover:text-accent-soft">
          {title}
        </h3>
        {featured && (
          <span className="chip !border-accent/40 !text-accent-soft">Flagship</span>
        )}
      </div>

      <p className="mt-2 flex-1 text-sm text-muted">{outcome}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.slice(0, 5).map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>

      <span className="mt-5 text-sm font-medium text-accent-soft">
        View case study →
      </span>
    </Link>
  );
}
