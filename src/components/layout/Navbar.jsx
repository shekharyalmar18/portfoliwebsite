import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "../ui/Container";
import { profile } from "../../data/profile";
import { hasValue } from "../../utils/hasValue";

const links = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <a href="#home" className="font-heading text-xl tracking-tight">
          {profile.displayName.split(' ')[0].toUpperCase()}<span className="text-muted">.</span>
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.2em] text-muted transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          {hasValue(profile.resumeUrl) && (
            <a
              href={profile.resumeUrl}
              className="text-sm uppercase tracking-[0.2em] text-white border-b border-white/30 pb-1 hover:border-white transition-colors"
            >
              Resume
            </a>
          )}
        </nav>
        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>
      {open && (
        <div className="md:hidden fixed inset-0 top-20 bg-black">
          <Container className="flex flex-col gap-8 py-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-heading text-4xl"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {hasValue(profile.resumeUrl) && (
              <a href={profile.resumeUrl} className="text-lg text-muted">
                Resume
              </a>
            )}
          </Container>
        </div>
      )}
    </header>
  );
}