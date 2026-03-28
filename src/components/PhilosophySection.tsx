import SectionHeader from "./SectionHeader";

const principles = [
  "Design systems before writing code",
  "Prioritize maintainability over quick hacks",
  "Optimize for production reliability",
  "Build scalable API architectures",
  "Document APIs clearly for other developers",
];

const PhilosophySection = () => {
  return (
    <section className="py-28 border-t border-border/50 px-4 sm:px-6 lg:px-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
          <SectionHeader label="Philosophy" />
          <div className="max-w-xl">
            <h3 className="font-display text-lg font-semibold text-foreground mb-6">
              How I Approach Backend Engineering
            </h3>
            <ul className="space-y-4">
              {principles.map((p, i) => (
                <li key={p} className="flex items-start gap-4">
                  <span className="font-mono text-xs text-muted-foreground/40 mt-0.5 w-5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-muted-foreground leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
