import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";
import { projects } from "../../data/projects";
import { hasValue } from "../../utils/hasValue";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function Work() {
  const [hovered, setHovered] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const revealRef = useScrollReveal();

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="work" className="py-32 relative" onMouseMove={handleMouseMove} ref={revealRef}>
      <Container>
        <div className="mb-24" data-reveal>
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-muted">Selected Work</p>
          <h2 className="font-heading text-7xl md:text-9xl lg:text-[14vw] leading-[0.85] tracking-tight">
            PROJECTS
          </h2>
        </div>
        
        <div className="space-y-0">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group relative border-t border-white/10 py-16 transition-all duration-700 hover:border-white/30"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              data-cursor="hover"
              data-reveal
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-1">
                  <span className="text-sm text-muted font-light">0{index + 1}</span>
                </div>
                <div className="lg:col-span-5">
                  <h3 className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-tight transition-all duration-700 group-hover:translate-x-6">
                    {project.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted">
                    <span>{project.type}</span>
                    {project.role && <span>• {project.role}</span>}
                    {project.year && <span>• {project.year}</span>}
                    {project.badge && <span className="text-white">• {project.badge}</span>}
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <p className="text-muted leading-relaxed text-lg">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs uppercase tracking-[0.25em] text-subtle">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-2 flex justify-start lg:justify-end">
                  <div className="flex items-center gap-6">
                    {hasValue(project.githubUrl) ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] transition-all"
                      >
                        Code
                        <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                      </a>
                    ) : (
                      <span className="text-sm text-muted uppercase tracking-[0.25em]">Private</span>
                    )}
                    {hasValue(project.liveUrl) && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] transition-all"
                      >
                        Live
                        <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
      
      {hovered !== null && (
        <div
          className="pointer-events-none fixed z-30 hidden lg:block transition-all duration-300"
          style={{
            left: mousePos.x + 50,
            top: mousePos.y - 200,
            transform: `scale(${hovered !== null ? 1 : 0.9})`,
            opacity: hovered !== null ? 1 : 0,
          }}
        >
          <div className="relative h-[320px] w-[420px] overflow-hidden rounded-xl border border-white/10">
            {hasValue(projects[hovered].image) ? (
              <img
                src={projects[hovered].image}
                alt={projects[hovered].title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-black to-accent2/30">
                <div className="flex h-full items-center justify-center">
                  <span className="font-heading text-3xl text-white/40">{projects[hovered].title}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}