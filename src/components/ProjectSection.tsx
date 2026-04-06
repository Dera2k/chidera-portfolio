import SectionHeader from "./SectionHeader";
import ProjectCard, { type Project } from "./ProjectCard";

const projects: Project[] = [

{
  name: "FX Trading Backend Platform",
  description:
    "A backend system for handling multi-currency wallets, real-time foreign exchange rates, and reliable currency conversions within a trading environment.",
  tech: ["NestJS", "TypeORM", "PostgreSQL", "Redis"],
  highlights: [
    "Multi-currency wallet system with support for multiple balances per user",
    "Integration with external FX rate providers for real-time exchange data",
    "Atomic currency conversion to ensure transaction consistency and prevent race conditions",
    "RESTful API design for trading and wallet operations",
    "Optimized performance using caching strategies where needed",
  ],
  github: "https://github.com/Dera2k/Fx-Trading-Backend",
},

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
    github: "https://github.com/Dera2k/Multi-Tenant-SaaS",
  },

  {
  name: "Artistack",
  description:
    "An art organizer tool designed to help artists catalog, manage, and showcase their work efficiently across projects and collections.",
  tech: ["PHP", "Laravel", "PostgreSQL", "Redis"],
  highlights: [
    "Organize and categorize artwork with flexible tagging and collections",
    "Role-based access control for collaborators and team members",
    "Redis caching for improved performance on frequently accessed galleries",
    "PostgreSQL relational database design for reliable and scalable storage",
    "Laravel backend with RESTful API endpoints for smooth integration with frontends",
  ],
  github: "https://github.com/Dera2k/Artistack",
},

  {
  name: "Wallet & Transaction Service for A Lending Platform",
  description:
    "A backend wallet service built to handle user accounts, secure fund operations and transaction tracking for a lending platform.",
  tech: ["Node.js", "Express", "TypeScript", "MySQL", "Knex.js"],
  highlights: [
    "Atomic wallet operations (fund, transfer, withdraw) using database transactions",
    "JWT-based authentication and protected routes",
    "Layered architecture (Controller → Service → Repository) for scalability",
    "MySQL schema design with DECIMAL handling for financial accuracy",
    "Input validation using Joi with request sanitization middleware",
    "Transaction history tracking with optimized queries",
  ],
  github: "https://github.com/Dera2k/Money-Wallet",
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
    github: "https://github.com/Dera2k/feedback_system",
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
    github: "https://github.com/Dera2k/Doc-Con",
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
