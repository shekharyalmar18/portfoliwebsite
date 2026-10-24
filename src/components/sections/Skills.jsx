import Container from "../ui/Container";
import { skills } from "../../data/skills";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function Skills() {
  const allSkills = skills.flatMap((g) => g.items).map((i) => i.name);
  const revealRef = useScrollReveal();
  
  return (
    <section id="skills" className="py-32 relative overflow-hidden" ref={revealRef}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      
      <Container>
        <div className="mb-16" data-reveal>
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-muted">Expertise</p>
          <h2 className="font-heading text-6xl md:text-8xl tracking-tight">
            CAPABILITIES
          </h2>
        </div>
        
        <div className="relative" data-reveal>
          <div className="flex animate-marquee">
            {[...allSkills, ...allSkills].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-8 px-8 whitespace-nowrap"
              >
                <span className="font-heading text-4xl md:text-6xl lg:text-7xl text-outline">
                  {skill}
                </span>
                <span className="text-2xl text-muted">•</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {skills.filter(g => g.group !== 'Soft Skills').map((group) => (
            <div key={group.group} data-reveal>
              <h3 className="mb-6 text-sm uppercase tracking-[0.3em] text-muted">{group.group}</h3>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <p key={item.name} className="text-lg">{item.name}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}