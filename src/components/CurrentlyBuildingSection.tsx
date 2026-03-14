import SectionHeader from "./SectionHeader";

const focuses = [
  "Scalable backend architecture",
  "Workspace isolation models",
  "Asynchronous processing pipelines",
  "Redis caching strategies",
  "Kafka-based background processing",
];

const tech = ["NestJS", "PostgreSQL", "Redis", "Apache Kafka"];

const CurrentlyBuildingSection = () => {
  return (
    <section className="py-28 border-t border-border/50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
          <SectionHeader label="Building" title="Current focus" />
          <div className="max-w-xl">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              What I'm Currently Building
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Actively developing a multi-tenant SaaS system — an ongoing engineering focus 
              exploring production patterns for scalable backend architecture.
            </p>

            <ul className="space-y-2 mb-6">
              {focuses.map((f) => (
                <li key={f} className="text-sm text-muted-foreground flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5">
              {tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-accent text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyBuildingSection;
