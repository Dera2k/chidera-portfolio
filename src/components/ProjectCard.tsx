import { ArrowUpRight } from "lucide-react";

export interface Project {
  name: string;
  description: string;
  tech: string[];
  highlights?: string[];
  github?: string;
  live?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

const ProjectCard = ({ project, index, featured = false }: ProjectCardProps) => {
  return (
    <div className={`group block py-8 transition-colors duration-300 hover:bg-accent/20 ${featured ? "lg:py-12" : ""}`}>
      <div className={`grid gap-6 ${featured ? "lg:grid-cols-[72px_1fr_0.9fr]" : "lg:grid-cols-[72px_1fr_1fr]"}`}>
        <span className="font-mono text-xs text-primary">0x{String(index).padStart(2, "0")}</span>
        <div>
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className={`font-display font-bold uppercase text-foreground leading-tight ${featured ? "text-xl sm:text-2xl" : "text-base"}`}>
              {project.name}
            </h3>
            <div className="flex items-center gap-3 shrink-0 mt-1">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] uppercase text-muted-foreground hover:text-primary inline-flex items-center gap-1"
                  aria-label={`${project.name} GitHub`}
                >
                  GitHub <ArrowUpRight size={12} />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] uppercase text-muted-foreground hover:text-primary inline-flex items-center gap-1"
                  aria-label={`${project.name} Live`}
                >
                  Live <ArrowUpRight size={12} />
                </a>
              )}
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span key={t} className="px-2 py-1 text-[10px] font-mono uppercase border border-border text-muted-foreground">{t}</span>
            ))}
          </div>
        </div>

        {project.highlights && project.highlights.length > 0 && (
          <ul className="space-y-2 border-l border-border pl-5">
            {project.highlights.map((h) => (
              <li key={h} className="text-xs text-muted-foreground flex items-start gap-2 leading-relaxed">
                <span className="w-1 h-1 bg-primary mt-1.5 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;