import SectionHeader from "./SectionHeader";
import ProjectCard, { type Project } from "./ProjectCard";

const projects: Project[] = [
  {
    name: "Multi-Tenant Collaboration SaaS Platform",
    description:
      "A scalable backend platform designed to support multiple organizations operating within isolated workspaces inside a single application.",
    tech: ["NestJS", "PostgreSQL", "Redis", "Apache Kafka"],
    highlights: [
      "Multi-tenant architecture with workspace isolation",
      "Role-based access control (RBAC)",
      "Redis caching for improved response performance",
      "Kafka-based asynchronous background processing",
      "PostgreSQL relational database modelling",
    ],
  },
  {
    name: "Feedback System",
    description:
      "A client review and communication platform designed for collecting and managing user feedback with a structured API backend.",
    tech: ["Express.js", "Prisma", "MySQL", "React", "TailwindCSS"],
    highlights: [
      "REST API backend with structured feedback storage",
      "Full CRUD feedback management",
      "Responsive frontend interface",
    ],
  },
  {
    name: "Doctor Portfolio Website",
    description:
      "A responsive website built for a medical professional featuring appointment inquiry and contact integration.",
    tech: ["React", "TailwindCSS"],
    highlights: [
      "Responsive layout for all devices",
      "Appointment inquiry form",
      "Contact integration with clean UI",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 border-t border-border/50 px-4 sm:px-6 lg:px-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
          <SectionHeader label="Projects" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
