import Container from "../ui/Container";
import { profile } from "../../data/profile";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function About() {
  const revealRef = useScrollReveal();
  return (
    <section id="about" className="py-32 relative" ref={revealRef}>
      <Container>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-muted">About</p>
            <h2 className="font-heading text-5xl md:text-6xl tracking-tight">
              CREATIVE<br />DEVELOPER
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-8">
            <p className="text-2xl md:text-3xl lg:text-4xl leading-tight" data-reveal>
              {profile.about}
            </p>
            <div className="grid gap-8 md:grid-cols-2 pt-8">
              <div data-reveal>
                <h3 className="mb-4 text-sm uppercase tracking-[0.3em] text-muted">Education</h3>
                <p className="text-lg">{profile.education.college}</p>
                <p className="text-muted">{profile.education.degree} • {profile.education.year}</p>
                <p className="text-muted">Expected {profile.education.expectedGraduation}</p>
              </div>
              <div data-reveal>
                <h3 className="mb-4 text-sm uppercase tracking-[0.3em] text-muted">Focus</h3>
                <div className="flex flex-wrap gap-3">
                  {profile.interests.map((item) => (
                    <span key={item} className="border-b border-white/30 pb-1">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-muted">{profile.location}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}