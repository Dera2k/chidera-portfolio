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
    <section id="architecture" className="py-28 border-t border-border/50 px-4 sm:px-6 lg:px-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
          <SectionHeader label="Architecture" title="Engineering approach" />
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              System Architecture & Engineering Approach
            </h3>
            <p className="text-sm text-muted-foreground mb-8 max-w-lg leading-relaxed">
              How I design backend systems — using the multi-tenant SaaS platform as a reference architecture.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {principles.map((p) => (
                <div
                  key={p.title}
                  className="p-5 rounded-xl border border-border/50 bg-card hover:border-border transition-colors duration-200"
                >
                  <p.icon size={18} className="text-muted-foreground mb-3" />
                  <h4 className="text-sm font-medium text-foreground mb-2">{p.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
