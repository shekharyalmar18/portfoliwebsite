import { ExternalLink, Lock, GitBranch } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { projects } from "../../data/projects";
import { hasValue } from "../../utils/hasValue";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Real client work and team projects. Private/client links are hidden until available."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold">{project.title}</h3>
                    <p className="mt-1 text-sm text-muted">
                      {project.type}
                      {project.role && ` • ${project.role}`}
                    </p>
                  </div>
                  {project.badge && (
                    <span className="rounded-full border border-secondary/60 bg-secondary/10 px-3 py-1 text-xs text-secondary">
                      {project.badge}
                    </span>
                  )}
                </div>
                <p className="text-muted">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded-full border border-border px-2.5 py-1 text-xs text-muted">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {hasValue(project.githubUrl) ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
                    >
                      <GitBranch size={18} />
                      Code
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm text-muted/70">
                      <Lock size={18} />
                      Private / Client project
                    </span>
                  )}
                  {hasValue(project.liveUrl) && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}