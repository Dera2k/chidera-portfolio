import SectionHeader from "./SectionHeader";
import { Layers, Zap, Database, Server, Box } from "lucide-react";

const principles = [
  {
    icon: Layers,
    title: "Multi-Tenant Architecture",
    description: "Workspace-based tenant isolation with role-based access control, ensuring data separation and security across organizations.",
  },
  {
    icon: Zap,
    title: "Event-Driven Processing",
    description: "Background tasks handled through Kafka-based pipelines, enabling asynchronous processing without blocking user requests.",
  },
  {
    icon: Database,
    title: "Caching Strategy",
    description: "Redis used strategically to reduce database load, cache frequently accessed data, and improve response performance.",
  },
  {
    icon: Server,
    title: "Database Design",
    description: "Relational modelling using PostgreSQL with carefully designed schemas that support complex business logic and scale.",
  },
  {
    icon: Box,
    title: "Backend Framework",
    description: "Modular service architecture using NestJS with clear separation of concerns, dependency injection, and testable code.",
  },
];

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="section-shell">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-10 lg:gap-16">
          <SectionHeader label="Core_Architecture" index="05" title="Engineering approach" />
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              System Architecture & Engineering Approach
            </h3>
            <p className="text-sm text-muted-foreground mb-8 max-w-lg leading-relaxed">
              How I design backend systems — using the multi-tenant SaaS platform as a reference architecture.
            </p>
            <div className="blueprint-surface border border-dashed border-border p-5 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-8">
                {principles.slice(0, 3).map((p, index) => (
                  <div key={p.title} className={`relative min-h-28 border border-border bg-background/80 p-4 flex flex-col justify-center ${index === 1 ? "sm:col-span-3 border-primary" : "sm:col-span-1"}`}>
                    <p.icon size={16} className="text-primary mb-2" />
                    <span className="font-mono text-[10px] uppercase text-foreground">{p.title}</span>
                  </div>
                ))}
              </div>
              <p className="text-center font-mono text-[10px] uppercase text-muted-foreground mb-8">request → service layer → persistence / events</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
                {principles.map((p) => (
                  <div
                    key={p.title}
                    className="p-5 bg-card hover:bg-accent/30 transition-colors duration-200"
                  >
                    <p.icon size={18} className="text-muted-foreground mb-3" />
                    <h4 className="font-display text-xs font-bold uppercase text-foreground mb-2">{p.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;