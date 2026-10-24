export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 md:mb-14">
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-secondary">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-muted">{description}</p>
      )}
    </div>
  );
}