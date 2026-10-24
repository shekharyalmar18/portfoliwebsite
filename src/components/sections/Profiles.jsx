import { Code2, ExternalLink, GitBranch } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { links } from "../../data/links";
import { hasValue } from "../../utils/hasValue";

export default function Profiles() {
  const profiles = [
    { key: "github", label: "GitHub", url: links.github, icon: GitBranch },
    { key: "leetcode", label: "LeetCode", url: links.leetcode, icon: Code2 },
    { key: "codeforces", label: "Codeforces", url: links.codeforces, icon: Code2 },
  ].filter((p) => hasValue(p.url));

  return (
    <section id="profiles" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Coding Profiles"
          title="Find me online"
          description="Connect through GitHub and coding platforms."
        />
        {profiles.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-surface/70 px-6 py-10 text-center text-muted">
            GitHub is linked. LeetCode and Codeforces links will appear here when added.
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {profiles.map((p) => (
              <a
                key={p.key}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-border bg-surface/70 p-5 transition-all hover:-translate-y-1 hover:border-primary/60"
              >
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <p.icon size={20} />
                  </div>
                  <span className="font-medium">{p.label}</span>
                </div>
                <ExternalLink size={18} className="text-muted transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}