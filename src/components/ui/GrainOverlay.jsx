export default function GrainOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="noise-bg absolute inset-0" />
    </div>
  );
}