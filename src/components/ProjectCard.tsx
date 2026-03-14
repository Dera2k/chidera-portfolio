import { ArrowUpRight } from "lucide-react";

export interface Project {
  name: string;
  description: string;
  tech: string[];
  highlights?: string[];
  github?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const Wrapper = project.github ? "a" : "div";
  const wrapperProps = project.github
    ? { href: project.github, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...(wrapperProps as any)}
      className="group block p-6 rounded-xl border border-border/50 bg-card hover:border-border hover:bg-accent/30 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-base font-semibold text-foreground">
          {project.name}
        </h3>
        {project.github && (
          <ArrowUpRight
            size={16}
            className="text-muted-foreground/40 group-hover:text-foreground mt-0.5 shrink-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        )}
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {project.description}
      </p>

      {project.highlights && project.highlights.length > 0 && (
        <ul className="mb-4 space-y-1.5">
          {project.highlights.map((h) => (
            <li key={h} className="text-xs text-muted-foreground flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-muted-foreground/40 mt-1.5 shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-accent text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </Wrapper>
  );
};

export default ProjectCard;
