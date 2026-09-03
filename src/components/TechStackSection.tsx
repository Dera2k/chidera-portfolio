import SectionHeader from "./SectionHeader";

const categories = [
  {
    title: "Languages & Frameworks",
    items: ["TypeScript", "JavaScript", "PHP", "Node.js", "NestJS", "Express", "Laravel", "Vue.js", "React", "React Native"],
  },
  {
    title: "Databases & Messaging",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Apache Kafka"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS (S3, EC2)", "Docker", "CI/CD"],
  },
  {
    title: "Core Competencies",
    items: ["REST API Design", "Mobile Development", "System Design", "Authentication & Authorization", "Database Design"],
  },
];

const TechStackSection = () => {
  return (
    <section id="stack" className="section-shell">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-10 lg:gap-16">
          <SectionHeader label="Tech_Stack" index="03" title="Tools I reach for in production" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 border-l border-t border-border">
            {categories.map((cat, index) => (
              <div key={cat.title} className="group min-h-52 p-6 border-r border-b border-border bg-card/60 hover:bg-accent/40 transition-colors">
                <span className="block font-mono text-[10px] text-primary mb-6">0x{String(index + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-xs font-bold uppercase text-foreground mb-4">
                  {cat.title}
                </h3>
                <ul className="space-y-2.5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs text-muted-foreground font-mono flex items-center gap-2 leading-relaxed"
                    >
                      <span className="w-1 h-1 bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;