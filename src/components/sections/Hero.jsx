import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import { gsap } from "gsap";
import Container from "../ui/Container";
import { profile } from "../../data/profile";
import { hasValue } from "../../utils/hasValue";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const titleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (!titleRef.current) return;
    const chars = titleRef.current.querySelectorAll(".char");
    gsap.fromTo(
      chars,
      { y: 150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.015,
        ease: "power3.out",
      }
    );
  }, []);

  const splitText = (text) => {
    return text.split("").map((char, i) => (
      <span key={i} className="char inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  const firstName = profile.displayName.split(' ')[0].toUpperCase();
  const lastName = profile.displayName.split(' ')[1]?.toUpperCase() || 'YALMAR';

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-accent/4 blur-[180px]" />
        <div className="absolute bottom-1/4 right-1/3 h-[400px] w-[400px] rounded-full bg-accent2/4 blur-[180px]" />
      </div>

      {hasValue(profile.photo) && (
        <div className="absolute right-0 bottom-0 h-[95%] w-[45%] hidden lg:block pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
          <img
            src={profile.photo}
            alt={profile.displayName}
            className="h-full w-full object-contain object-bottom brightness-110 contrast-105"
          />
        </div>
      )}
      
      <Container className="w-full relative z-10">
        <div className="relative max-w-7xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            </div>
            <p className="text-xs uppercase tracking-[0.5em] text-muted">
              Available for Work
            </p>
          </div>
          
          <h1 ref={titleRef} className="font-heading text-[10vw] leading-[0.82] tracking-[-0.02em]">
            <div className="overflow-hidden">
              <span className="block">{splitText(firstName)}</span>
            </div>
            <div className="overflow-hidden">
              <span className="block text-outline-2">{splitText(lastName)}</span>
            </div>
          </h1>
          
          <div className="mt-12 flex flex-col lg:flex-row lg:items-end gap-8 max-w-4xl">
            <div>
              <p className="text-lg md:text-xl text-muted leading-relaxed mb-2">
                {profile.title}
              </p>
              <p className="text-base md:text-lg text-subtle leading-relaxed">
                Full-Stack Developer crafting complete web apps from database to UI. 
                Based in {profile.location}.
              </p>
            </div>
            <div className="lg:ml-auto">
            <a
              href="#work"
              data-cursor="hover"
              className="group relative inline-flex items-center gap-4 text-sm uppercase tracking-[0.3em] overflow-hidden px-6 py-3 border border-white/20 hover:border-white transition-colors duration-500"
            >
              <span className="relative z-10">Explore Work</span>
              <ArrowDown className="relative z-10 transition-transform duration-500 group-hover:translate-y-1" size={18} />
              <div className="absolute inset-0 bg-white translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
              <style>{`
                .group:hover span { color: black; }
                .group:hover svg { color: black; }
              `}</style>
            </a>
            </div>
          </div>
        </div>
      </Container>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="flex flex-col items-center gap-2 text-muted">
          <span className="text-[10px] uppercase tracking-[0.5em]">Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}