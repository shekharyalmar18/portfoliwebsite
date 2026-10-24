import { cn } from "../../utils/cn";

export default function Button({ href, children, variant = "primary", className = "", ...props }) {
  const base = "inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70";
  const variants = {
    primary: "bg-gradient-to-r from-primary to-indigo-500 text-white hover:shadow-[0_0_0_1px_rgba(99,102,241,0.4),0_10px_60px_-15px_rgba(99,102,241,0.9)] hover:-translate-y-0.5",
    ghost: "border border-border text-text hover:border-primary/70 hover:text-white",
    subtle: "text-muted hover:text-text",
  };
  const Comp = href ? "a" : "button";
  return (
    <Comp href={href} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Comp>
  );
}