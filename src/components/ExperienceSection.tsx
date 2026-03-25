import SectionHeader from "./SectionHeader";

const experiences = [
  {
    company: "Neocloud Technologies",
    role: "Software Engineer & Technical Instructor",
    period: "Jan 2025 – Present",
    responsibilities: [
      "Training and mentoring developers in full-stack and backend development",
      "Teaching secure coding practices and production engineering patterns",
      "Maintaining a student registration platform used by multiple cohorts",
      "Maintaining an examination platform supporting 30+ concurrent cohorts",
      "Improving backend architecture and production systems",
    ],
  },
  {
    company: "NIIT",
    role: "Software Development Intern",
    period: "Jan 2023 – Nov 2023",
    responsibilities: [
      "Building backend APIs for internal applications",
      "Implementing authentication systems",
      "Designing MySQL database schemas",
      "Learning deployment workflows and cloud environments",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-28 border-t border-border/50 px-4 sm:px-6 lg:px-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
          <SectionHeader label="Experience" />
          <div className="space-y-10">
            {experiences.map((exp) => (
              <div key={exp.company}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                  <h3 className="text-base font-semibold text-foreground">{exp.company}</h3>
                  <span className="text-xs font-mono text-muted-foreground/60">{exp.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{exp.role}</p>
                <ul className="space-y-2">
                  {exp.responsibilities.map((r) => (
                    <li key={r} className="text-sm text-muted-foreground flex items-start gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/40 mt-2 shrink-0" />
                      {r}
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

export default ExperienceSection;
