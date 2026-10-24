import { ArrowUpRight, Mail } from "lucide-react";
import Container from "../ui/Container";
import { links } from "../../data/links";
import { profile } from "../../data/profile";
import { hasValue } from "../../utils/hasValue";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function Contact() {
  const revealRef = useScrollReveal();
  return (
    <section id="contact" className="py-32 relative" ref={revealRef}>
      <Container>
        <div className="mb-20" data-reveal>
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-muted">Get In Touch</p>
          <h2 className="font-heading text-6xl md:text-8xl lg:text-[12vw] leading-[0.85] tracking-tight">
            LET'S WORK<br />
            <span className="text-outline-2">TOGETHER</span>
          </h2>
        </div>
        
        <div className="grid gap-12 lg:grid-cols-2">
          <div data-reveal>
            <p className="text-2xl md:text-3xl text-muted leading-relaxed mb-10">
              Have a project in mind or looking to hire? I'd love to hear about it.
            </p>
            <a
              href={`mailto:${links.email}`}
              data-cursor="hover"
              className="group relative inline-block text-2xl md:text-4xl lg:text-5xl font-heading"
            >
              <span className="relative">
                {links.email}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
              </span>
              <ArrowUpRight className="ml-4 inline-block transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" size={48} />
            </a>
          </div>
          <div className="flex flex-col justify-between gap-8" data-reveal>
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-muted">Connect</p>
              <div className="flex flex-wrap gap-8">
                {hasValue(links.github) && (
                  <a href={links.github} target="_blank" rel="noopener noreferrer" className="relative text-lg after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                    GitHub
                  </a>
                )}
                {hasValue(links.linkedin) && (
                  <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="relative text-lg after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                    LinkedIn
                  </a>
                )}
                {hasValue(links.twitter) && (
                  <a href={links.twitter} target="_blank" rel="noopener noreferrer" className="relative text-lg after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                    X
                  </a>
                )}
                {hasValue(links.instagram) && (
                  <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="relative text-lg after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                    Instagram
                  </a>
                )}
              </div>
            </div>
            {hasValue(profile.resumeUrl) && (
              <a
                href={profile.resumeUrl}
                data-cursor="hover"
                className="group inline-flex items-center gap-3 text-lg w-fit"
              >
                <Mail size={20} />
                Download Resume
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}