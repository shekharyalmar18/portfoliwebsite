import { Award, Calendar } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Certifications & Hackathons"
          title="Learning & achievements"
          description="Hackathon and course certificates will appear here as they're added."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface/70 p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                <Award size={20} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">Hackathons & Events</h3>
                <p className="text-sm text-muted">~5 certificates</p>
              </div>
            </div>
            <div className="rounded-xl border border-dashed border-border px-4 py-6 text-center text-muted">
              Certificates coming soon
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-surface/70 p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                <Calendar size={20} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">Online Course Certifications</h3>
                <p className="text-sm text-muted">Several certificates</p>
              </div>
            </div>
            <div className="rounded-xl border border-dashed border-border px-4 py-6 text-center text-muted">
              Certificates coming soon
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}