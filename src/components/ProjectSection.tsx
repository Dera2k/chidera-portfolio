import SectionHeader from "./SectionHeader";
import ProjectCard, { type Project } from "./ProjectCard";

const projects: Project[] = [
  {
    name: "TrackMii — Personal Finance & Expense Tracking App",
    description:
      "Full-stack expense tracker with budget management, spending categorization and financial visualization.",
    tech: ["Next.js", "NestJS", "TypeScript", "MySQL", "Tailwind CSS", "Docker", "REST APIs"],
    highlights: [
      "End-to-end expense tracking with budgets, categories and visual reports",
      "NestJS REST API with a typed Next.js frontend",
      "MySQL schema design for accounts, categories and transactions",
      "Containerized services for consistent local and production environments",
    ],
    github: "https://github.com/Dera2k/TrackMii",
    live: "https://trackmii.vercel.app",
  },
  {
    name: "Artistack — Full Stack Gallery Management Platform",
    description:
      "Full-stack gallery platform with secure authentication, email verification, session management and responsive UI.",
    tech: ["PHP", "Laravel", "PostgreSQL", "Blade", "Tailwind CSS", "RESTful APIs", "Authentication", "Middleware", "Laravel Forge"],
    highlights: [
      "Authentication flows including email verification and session handling",
      "Gallery, artist and artwork management via RESTful endpoints",
      "PostgreSQL relational modelling with Laravel Forge deployment",
      "Responsive Blade + Tailwind UI with role-aware middleware",
    ],
    github: "https://github.com/Dera2k/Artistack",
  },
  {
    name: "Fx Trading App — Multi-Currency Foreign Exchange Backend",
    description:
      "Scalable FX backend handling wallet management, real-time exchange rates and secure transactions with atomic currency conversion and idempotent operations.",
    tech: ["NestJS", "PostgreSQL", "TypeORM", "REST APIs", "Transaction Management", "Concurrency Control", "Idempotency"],
    highlights: [
      "Multi-currency wallet system with atomic conversion operations",
      "Idempotent endpoints to safely retry client requests",
      "Concurrency control to prevent race conditions on balances",
      "External FX rate integration with caching for performance",
    ],
    github: "https://github.com/Dera2k/Fx-Trading-Backend",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-shell">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-10 lg:gap-16">
          <SectionHeader label="Selected_Work" index="04" title="Systems, services, and product backends" />
          <div className="divide-y divide-border border-y border-border">
            {projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index + 1} featured={index < 2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;